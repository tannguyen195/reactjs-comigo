const routes = module.exports = require('next-routes')()

routes
    .add('home')
    .add('learn')
    .add('performance')
    .add('pricing')
    .add('account')
    .add('signUp')

    .add('learnDetail','/learn/:id', 'learnDetail')