var should = require('should');
var saj = require('../index');

describe('simple-aes-json', function () {

  var encryptedJSON;

  it('should work as expected', function (done) {
    done()
  });

  it('should encrypt string to JSON', function () {

    saj.encrypt('123456789','test',function(encrypted){

      encryptedJSON = encrypted;
      encrypted.should.be.a.String
      var obj = JSON.parse(encrypted);
      obj.should.have.property('ct');
      obj.should.have.property('iv');
      obj.should.have.property('s');
      

    });
  });


  it('should decrypt encrypted json to string',function(){

    saj.decrypt(encryptedJSON,'test',function(number){
      number.should.equal('123456789');
    });
  });

})
