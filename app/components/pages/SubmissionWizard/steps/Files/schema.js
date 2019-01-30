import * as yup from 'yup'
import { errorMessageMapping } from './utils'

const MIN_WORDS = 60

function stripHtml(html) {
  const htmlWithLineBreaks = html.replace(/<\/p>/g, '</p>\n')
  const doc = new DOMParser().parseFromString(htmlWithLineBreaks, 'text/html')
  return doc.body.textContent || ''
}

function testFileArray(value, fileType) {
  let result = true
  value.forEach((file, index) => {
    if (file.status !== 'STORED' && file.type === fileType) {
      result = false
    }
  })
  return result
}

const schema = yup.object().shape({
  coverLetter: yup
    .string()
    .test(
      'hasContent',
      `Your cover letter should be at least ${MIN_WORDS} words long`,
      value => stripHtml(value).split(/\s+/).length > MIN_WORDS,
    ),
  files: yup
    .array()
    .min(1, errorMessageMapping.EMPTY)
    .test('manuscript-file', 'MANUSCRIPT_SOURCE,Does not exist.', value =>
      testFileArray(value, 'MANUSCRIPT_SOURCE'),
    )
    .test(
      'supplementary-files',
      'SUPPORTING_FILE,Please wait while thse files upload',
      value => testFileArray(value, 'SUPPORTING_FILE'),
    ),
})

export { schema }
