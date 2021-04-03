function auth(req, res, next) {
  const token = req.header('Authorization')?.replace(/^Bearer /, '');

  if (token) {
    const dataSegment = token.split('.')[1];

    if (dataSegment) {
      const data = JSON.parse(
        Buffer.from(dataSegment, 'base64').toString('utf8')
      );

      req.userId = data.userId;
      req.token = token;
    }
  }
  next();
}

module.exports = auth;
