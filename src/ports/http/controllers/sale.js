const sale = ({ saleRepository }) => {
  const all = async (req, res) => {
    const sales = await saleRepository.find()

    return res.send(sales)
  }

  const create = async (req, res) => {
    const {
      soldtAt,
      description,
      paymentMethod,
      installments,
      itens,
      total,
    } = req.body

    const stock = await saleRepository.create({
      soldtAt,
      description,
      paymentMethod,
      installments,
      total,
      itens,
    })

    res.send(stock)
  }

  return {
    all,
    create,
  }
}

module.exports = sale
