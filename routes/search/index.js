'use strict'

module.exports = async function (fastify, opts) {
  fastify.post('/', async function (request, reply) {
    if(request.query.address){
      const { address } = request.query;

      // TODO:
      // validate email address
      // find email in airtable
      // : if found, return entire record
      // : if not found, return null

      return address;
    }
    return null;
  })
}
