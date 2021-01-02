const container = require('./ports/container')

const main = async () => {
  const { app } = container.cradle

  try {
    await app.start()
  } catch (error) {
    console.log({
      description: 'Unexpected application behavior',
      error_message: error.message,
      error_stack: error.stack ? error.stack.split('\n') : null,
    })
  }
}

main()
