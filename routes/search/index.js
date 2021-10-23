'use strict'
require('dotenv').config();

const AirtableClient = require('../../services/airtable-client');

const apiKey = process.env.API_KEY;
const baseId = process.env.BASE_ID;

const client = new AirtableClient(apiKey, baseId);

module.exports = async function (fastify, opts) {
  fastify.post('/', async function (request, reply) {
    reply.send(request.email_address);
    return reply;
  })
}
