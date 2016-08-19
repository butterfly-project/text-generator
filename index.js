'use strict';

module.exports = function(path) {
    return JSON.parse(fs.readFileSync(__dirname + path, 'utf8'));
};
