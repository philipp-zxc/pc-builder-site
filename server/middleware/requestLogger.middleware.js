export const requestLogger = (req, res, next) => {
  logger.info(
    NAMESPACE,
    `Method - ${req.method} URL - ${req.url} IP - ${req.socket.remoteAddress}`
  )
  res.on('finish', () => {
    logger.info(
      NAMESPACE,
      `Method - ${req.method} URL - ${req.url} IP - ${req.socket.remoteAddress} Status - ${res.statusCode}`
    )
  })
  next()
}
