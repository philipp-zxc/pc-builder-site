const getTimestamp = () => new Date().toLocaleTimeString()

const info = (namespace, message, object) => {
  console.info(`[${getTimestamp()}] - ${namespace} - [INFO]: ${message}`)
  if (object) console.info(object)
}

const warn = (namespace, message, object) => {
  console.warn(`[${getTimestamp()}] - ${namespace} - [WARNING]: ${message}`)
  if (object) console.warn(object)
}

const error = (namespace, message, object) => {
  console.error(`[${getTimestamp()}] - ${namespace} - [ERROR]: ${message}`)
  if (object) console.error(object)
}

const debug = (namespace, message, object) => {
  console.debug(`[${getTimestamp()}] - ${namespace} - [DEBUG]: ${message}`)
  if (object) console.debug(object)
}

export default { info, warn, error, debug }
