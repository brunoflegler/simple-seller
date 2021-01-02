const dashboard = ({ stockRepository }) => {
  const all = async (req, res) => {
    const data = await stockRepository.find()

    const total = data.reduce((acc, c) => acc + c.qtd * c.cost, 0)

    return res.send({
      stocks: {
        total,
      },
      sales: {
        total: 0,
      },
    })
  }

  return {
    all,
  }
}

module.exports = dashboard
