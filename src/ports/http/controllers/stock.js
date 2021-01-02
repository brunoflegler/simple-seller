const stock = ({ stockRepository }) => {
  const get = async (req, res) => {
    const stock = await stockRepository.findByCode(req.params.code)

    if (stock.length === 0) {
      return res.status(404).send({
        message: 'Produto não foi encontrado no estoque',
      })
    }

    return res.send(stock)
  }

  const all = async (req, res) => {
    const stocks = await stockRepository.find()

    return res.send(stocks)
  }

  const create = async (req, res) => {
    const { code, name, value, cost, qtd } = req.body

    const stock = await stockRepository.create({
      code,
      name,
      value,
      cost,
      qtd,
    })

    res.send(stock)
  }

  const update = async (req, res) => {
    const { code, name, value, cost, qtd } = req.body

    const stock = await stockRepository.update(req.params.id, {
      code,
      name,
      value,
      cost,
      qtd,
    })

    res.send(stock)
  }

  return {
    get,
    all,
    create,
    update,
  }
}

module.exports = stock
