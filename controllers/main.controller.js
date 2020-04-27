var testModel = require('../models/test.model')

class mainController {
    async index() {
    console.log('cosaisndex');
    }
    async test(req, res) {
        await testModel.create({
            field1: 'sss',
            field2: 'sss',
            field3: 'ssdfss',
            field4: 'sss',
        });
        res.send('ok')
    }
}


module.exports = mainController;