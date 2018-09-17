const lodash = require('lodash')
const knex = require('knex')
const logger = require('@pubsweet/logger')
const db = require('pubsweet-server/src/db')

const buildQuery = knex({ client: 'pg' })

const runQuery = async query => {
  const sql = query.toString()
  try {
    return await db.query(sql)
  } catch (err) {
    logger.warn('Error running query', sql)
    throw err
  }
}

const keyToCamelCase = snakeKey =>
  snakeKey
    .split(',')
    .map(lodash.camelCase)
    .join('.')

const rowToEntity = row => {
  if (lodash.isArray(row)) {
    return row.map(rowToEntity)
  }

  if (lodash.isPlainObject(row)) {
    return lodash.transform(row, (transformed, val, key) => {
      const camelKey = keyToCamelCase(key)
      lodash.set(transformed, camelKey, rowToEntity(val))
    })
  }

  return row
}

const entityToRow = (entity, columns) =>
  columns.reduce((row, columnName) => {
    const camelKey = keyToCamelCase(columnName)
    const value = lodash.get(entity, camelKey)
    return { ...row, [columnName]: value }
  }, {})

module.exports = { buildQuery, runQuery, rowToEntity, entityToRow }