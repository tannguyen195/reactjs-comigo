const routes = module.exports = require('next-routes')()

routes
    .add('home')
    .add('about')
    .add('contact')
    .add('faq')
    .add('why')



    .add('login')
    .add('signUp')
    .add('new-project')
    .add('/user/:id', 'user')
    .add('profile')
    .add('/profile/edit', 'edit')
    .add('/:id', 'project')
    .add('/:id/edit', 'edit-project')