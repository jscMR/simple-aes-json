#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]
# simple-aes-json

> Minimalistic nodejs AES-256 implementation.

## Installation

```
npm install simple-aes-json --save
```

## Usage
```
var saj = require('simple-aes-json');

// Encryption

saj.encrypt('123456789','passphrase',function(encrypted){

  console.log(encrypted)
  //{"ct":"z/apIxwSDRmqDlvhmTfhJA==","iv":"f960b8b5722b64b1ea4b09d7c548ffb8","s":"d20cc8ac7b5f31cb"}

});

// Decryption

saj.decrypt(encryptedJSON,'passphrase',function(result){
  console.log(result); //'123456789'
});

```


## Credits
[Manyroots](https://github.com/Manyroots/)

## License

MIT © [ManyRoots](http://www.manyroots.com)


[npm-url]: https://npmjs.org/package/simple-aes-json
[npm-image]: https://badge.fury.io/js/simple-aes-json.svg
[travis-url]: https://travis-ci.org/Manyroots/simple-aes-json
[travis-image]: https://travis-ci.org/Manyroots/simple-aes-json.svg?branch=master
[daviddm-url]: https://david-dm.org/Manyroots/simple-aes-json.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/Manyroots/simple-aes-json
