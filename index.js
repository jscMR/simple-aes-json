/*!
* simple-aes | MIT (c) ManyRoots Lab
* https://github.com/Manyroots/simple-aes
*/

//import node-cryptojs-aes modules to encrypt or decrypt data
var node_cryptojs = require('node-cryptojs-aes');
//node-cryptojs-aes main object;
var CryptoJS = node_cryptojs.CryptoJS;
//custom json serialization format
var JsonFormatter = node_cryptojs.JsonFormatter;

function encrypt(msg,passphrase,cb){
  var rPassBase64 =  new Buffer(passphrase).toString('base64');

  //encrypt plain text with passphrase and custom json serialization format, return CipherParams object
  //rPassBase64 is the passphrase generated from first stage
  //msg is the original plain text
  var encrypted = CryptoJS.AES.encrypt(msg, rPassBase64, { format: JsonFormatter });
  //convert CipherParams object to json string for transmission
  var encryptedJsonStr = encrypted.toString();
  cb(encryptedJsonStr);

};


function decrypt(encrypted,passphrase,cb){

  var rPassBase64 =  new Buffer(passphrase).toString('base64');
  // decrypt data with encrypted json string, rPassBase64 string and custom JsonFormatter
  var decrypted = CryptoJS.AES.decrypt(encrypted, rPassBase64, { format: JsonFormatter });
  // convert to Utf8 format unmasked data
  var decryptedStr = CryptoJS.enc.Utf8.stringify(decrypted);
  cb(decryptedStr);
};


// exports
var simpleAES = {
  encrypt : encrypt,
  decrypt : decrypt
}
module.exports = simpleAES;
