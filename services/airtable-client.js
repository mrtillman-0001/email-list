module.exports = class AirtableClient {
 constructor(apiKey, baseId){
  this.apiKey = apiKey;
  this.baseId = baseId;
 }
 getEmails(){
   return "emails";
 }
}
