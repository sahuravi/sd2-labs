/* Create environment variable for redis url/password */
const path = require('path');
const rootFolder = path.normalize(__dirname + '/../');
const serverPath = path.join(rootFolder, 'server');

module.exports = {
    server: serverPath
};
