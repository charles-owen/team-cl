const path = require('path');

module.exports = {
	entry: {
		Team: {
			import: path.resolve(__dirname, 'index.js'),
			dependOn: ['Course', 'Users', 'Site']
		}
	}
}
