var overmind = require('overmind').get();
this.wadus = 'viejo';

module.exports.loop = function() {
    if(overmind.updateRequired()) {
        this.wadus = 'nuevo';
    }

    console.log(this.wadus);
}
