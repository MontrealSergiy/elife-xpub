const lodash = require('lodash')
const emptyManuscript = require('./helpers/empty')
const dataAccess = require('./data-access')
const TeamManager = require('../team')
const FileManager = require('../file')

const mergeObjects = (...inputs) =>
  lodash.mergeWith(
    ...inputs,
    // always replace arrays instead of merging
    (objValue, srcValue) => {
      if (lodash.isArray(srcValue)) {
        return srcValue
      }
      return undefined
    },
  )

const Manuscript = {
  MAX_SUGGESTED_REVIEWERS: 6,
  MIN_SUGGESTED_REVIEWERS: 3,

  find: dataAccess.selectById,
  all: dataAccess.selectAll,
  findByStatus: dataAccess.selectByStatus,

  delete: async id => {
    const manuscript = await dataAccess.selectById(id)
    await Promise.all(manuscript.files.map(file => FileManager.delete(file.id)))
    await Promise.all(manuscript.teams.map(team => TeamManager.delete(team.id)))
    await dataAccess.delete(id)
  },

  new: () => lodash.cloneDeep(emptyManuscript),

  save: async manuscript => {
    // TODO wrap these queries in a transaction
    let { id } = manuscript
    if (id) {
      await dataAccess.update(manuscript)
    } else {
      id = await dataAccess.insert(manuscript)
    }

    if (manuscript.teams) {
      await Promise.all(
        manuscript.teams.map(team =>
          TeamManager.save({ objectId: id, objectType: 'manuscript', ...team }),
        ),
      )
    }

    if (manuscript.files) {
      await Promise.all(
        manuscript.files.map(file =>
          FileManager.save({ manuscriptId: id, ...file }),
        ),
      )
    }

    return { ...manuscript, id }
  },

  applyInput: (originalManuscript, input) => {
    const manuscript = mergeObjects(
      {},
      originalManuscript,
      lodash.pick(input, [
        'meta',
        'coverLetter',
        'opposedSeniorEditorsReason',
        'opposedReviewingEditorsReason',
        'previouslyDiscussed',
        'previouslySubmitted',
        'cosubmission',
        'opposedReviewers',
        'opposedReviewersReason',
        'suggestionsConflict',
        'submitterSignature',
        'disclosureConsent',
      ]),
    )

    // reshape suggested editors into teams
    const editorSuggestionRoles = [
      'suggestedSeniorEditor',
      'opposedSeniorEditor',
      'suggestedReviewingEditor',
      'opposedReviewingEditor',
    ]
    const editorSuggestionTeams = editorSuggestionRoles.map(role => {
      const key = `${role}s`
      const suggestedEditorIds = input[key] || []
      const teamMembers = suggestedEditorIds.map(id => ({
        meta: { elifePersonId: id },
      }))
      return { role, teamMembers }
    })
    manuscript.teams = manuscript.teams
      .filter(team => !editorSuggestionRoles.includes(team.role))
      .concat(editorSuggestionTeams)

    // reshape suggested reviewers into teams
    const reviewerSuggestionRoles = ['suggestedReviewer']
    const reviewerSuggestionTeams = reviewerSuggestionRoles.map(role => {
      const key = `${role}s`
      const suggestedReviewerAliases = input[key] || []
      const teamMembers = suggestedReviewerAliases.map(meta => ({ meta }))
      return { role, teamMembers }
    })
    manuscript.teams = manuscript.teams
      .filter(team => !reviewerSuggestionRoles.includes(team.role))
      .concat(reviewerSuggestionTeams)

    // move author into team
    manuscript.teams = manuscript.teams
      .filter(team => team.role !== 'author')
      .concat({
        role: 'author',
        teamMembers: [{ alias: input.author, meta: { corresponding: true } }],
      })

    return manuscript
  },

  removeOptionalBlankReviewers: manuscript => {
    const itemIsBlank = item => item.name + item.email === ''

    const filteredReviewers = manuscript.suggestedReviewers.filter(
      (item, index) =>
        index < Manuscript.MIN_SUGGESTED_REVIEWERS || !itemIsBlank(item),
    )

    return { ...manuscript, suggestedReviewers: filteredReviewers }
  },

  checkPermission: (manuscript, user) => {
    if (user !== manuscript.createdBy) {
      throw new Error('Manuscript not owned by user')
    }
  },
}

module.exports = Manuscript
