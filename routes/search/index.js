'use strict'

module.exports = async function (fastify, opts) {

  // find email in airtable
  // : if found, return entire record
  // : if not found, return null

  fastify.post('/', async function (request, reply) {
    reply.send(request.email_address);
    return reply;
  })
}
