const routes = module.exports = require('next-routes')()

routes
    .add('home')
    .add('about')
    .add('login')
    .add('signUp')
    .add('new-project')
    .add('profile')
    .add('/profile/edit', 'edit')
    .add('/profile/:id', 'project')