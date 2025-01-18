const basicInfo = require('./basicInfo');
const servers = require('./servers');
const components = require('./components');
const tags = require('./tags');
const cohorts = require('./cohorts')


module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...cohorts
};