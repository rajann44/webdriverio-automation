const crypto = require('crypto')

class RandomNameGenerator {

    getRandomString(){
        return crypto.randomBytes(10).toString('hex')
        //return crypto.randomBytes(10).toString('base64');
    }

}

module.exports = new RandomNameGenerator();