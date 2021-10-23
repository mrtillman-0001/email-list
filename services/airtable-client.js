require('isomorphic-fetch');

module.exports = class AirtableClient {
 constructor(apiKey, baseId){
  this.apiKey = apiKey;
  this.url = `https://api.airtable.com/v0/${baseId}/email-list`;
 }
 async find(emailAddress){
   const res = await fetch(this.url,{
     headers: {
       "Authorization": `Bearer ${this.apiKey}`
     }
   })
   if(res.ok){
     const response = await res.json();
     const addresses = response.records;
     const rgx = new RegExp(`${emailAddress}`,'i');
     return addresses.filter(address => (
      rgx.test(address.fields["Email Address"])
     ));
   }
   return [];
 }
}
