module.exports = (req, res, next) => {
  if (req.method === 'POST') {
    // Если метод POST, меняем его на GET
    req.method = 'GET';
  }
  // Продолжаем обработку запроса
  next();
};