const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    urlDb : process.env.URL_MONGOFB_DEV,
};