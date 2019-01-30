const Joi = require('joi')
const schema = require('./manuscriptInputValidationSchema')

describe('ManuscriptInputValidationSchema', () => {
  it('checks the files are in the correct state', () => {
    const result = Joi.validate({}, schema)
    console.log(JSON.stringify(result, null, 4))
    expect(result.error).toBe(null)
  })
})
