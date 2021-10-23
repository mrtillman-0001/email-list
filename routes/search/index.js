'use strict'
require('dotenv').config({path: '/'});

const AirtableClient = require('../../services/airtable-client');

const apiKey = process.env.API_KEY;
const baseId = process.env.BASE_ID;

const client = new AirtableClient(apiKey, baseId);

module.exports = async function (fastify, opts) {
  fastify.post('/', async function (request, reply) {    
    const addresses = await client.find(request.email_address);
    reply.send(addresses);
    return reply;
  })
}
