const validate = schema => (req, res, next) => {
  try {
    console.log(schema)
    const { error } = schema.validate(req, {
      stripUnknown: true,
      abortEarly: false,
    })

    if (error) {
      throw new Error(error)
    }

    next()
  } catch (error) {
    console.log(error)
    next(error)
  }
}

module.exports = validate
