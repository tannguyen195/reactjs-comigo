const express = require('express')
const next = require('next')
const cookieParser = require('cookie-parser')
const port = parseInt(process.env.PORT, 10) || 3000
const routes = require('./routes.js')
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handler = routes.getRequestHandler(app)


app.prepare().then(() => {
  const server = express();

  server.use(cookieParser());
  server.use(handler).listen(port)
})