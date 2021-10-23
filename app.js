'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')
const isEmail = require('isemail');

module.exports = async function (fastify, opts) {
  // Place here your custom code!

  fastify.addHook('onRequest', async (request, reply) => {
    const is_post_method = /post/ig.test(request.method);
    const email_address = request.query && request.query.email_address;
    if(is_post_method){
      if(!email_address) reply.send([]);
      const is_email_valid = isEmail.validate(email_address);
      request.email_address = (is_email_valid ? email_address : "");
    }
  })

  fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'public'),
  })

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
