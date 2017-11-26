module.exports = {
    function Minion(creep) {
        this.engine = creep;
    }

    Minion.prototype = {
        behave: function() {
            console.log(this.engine.name);
        }
    }
}
