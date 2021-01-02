const Yup = require('yup')

const stock = () => {
  return {
    create: Yup.object().shape({
      code: Yup.string().required(),
      name: Yup.string().required(),
      qtd: Yup.number()
        .positive()
        .integer()
        .required(),
      cost: Yup.number()
        .positive()
        .integer()
        .required(),
      value: Yup.number()
        .positive()
        .integer()
        .required(),
    }),
  }
}

module.exports = stock
