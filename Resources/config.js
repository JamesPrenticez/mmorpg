//Import required libraries
var args = require('minimist')(process.argv.slice(2))
var extend = require('extend')

//Store the enviroment variable
var enviroment = args.env || "test";
//console.log(enviroment)

//Common config.... ie: name, version, max players etc...
var common_conf = {
    name: "mmorpg server",
    version:"0.0.1",
    enviroment: enviroment,
    max_players: 100,
    data_paths: {
        items: __dirname + "\\Game Data\\" + "\\Items",
        maps: __dirname + "\\Game Data\\" + "\\Maps",
    },
    starting_zone: "rm_map_home"
}

// Enviroment Specific Configuration
//--env="production" --ip=127.0.0.1
var conf = {
    production: {
        ip: args.ip || "0.0.0.0",
        port: args.port || 8081,
        database: "mongodb://127.0.0.1/mmorpg_prod"
    },
    test: {
        ip: args.ip || "0.0.0.0",
        port: args.port || 8082,
        database: "mongodb://127.0.0.1/mmorpg_test"
    }
}

extend(false, conf.production, common_conf)
extend(false, conf.test, common_conf)

module.exports = config = conf[enviroment]