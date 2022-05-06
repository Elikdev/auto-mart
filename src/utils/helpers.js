export const responseHandler = (status, message, statusCode, data = []) => {
  return {
    status,
    message,
    statusCode,
    data,
  }
}
