const Joi = require('joi')
const schema = require('./manuscriptInputValidationSchema')
const validManuscriptInput = require('./validManuscriptInput.test.json')

const createAlteredManuscript = (valuesToChange, valueToDrop) => {
  const returnObject = { ...validManuscriptInput, ...valuesToChange }
  if (valueToDrop) {
    delete returnObject[valueToDrop]
  }
  return returnObject
}

describe('ManuscriptInputValidationSchema', () => {
  it('There are no errors when validating against a valid input object', () => {
    const result = Joi.validate(validManuscriptInput, schema)
    expect(result.error).toBe(null)
  })

  it('Error when no id', () => {
    const inputValue = createAlteredManuscript({}, 'id')
    const result = Joi.validate(inputValue, schema)
    expect(result.error).toBeDefined()
    expect(result.error.name).toEqual('ValidationError')
  })
})
