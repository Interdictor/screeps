function Overmind(spawn) {
    this.engine = spawn;
    this.engine.memory.updateRequired = true;
}

Overmind.prototype = {
    updateRequired: function() {
        if(this.engine.memory.updateRequired) {
            this.engine.memory.updateRequired = false;
            return true;
        } else {
            return false;
        }
    }
}

module.exports = {
    get: function() {
        var spawners = [];

        for(let spawnName in Game.spawns) {
            spawners.push(Game.spawns[spawnName])
        }

        return new Overmind(spawners[0]);
    }
}
