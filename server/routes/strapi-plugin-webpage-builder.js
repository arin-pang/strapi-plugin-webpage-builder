'use strict';

/**
 * test-plugin.js routes
 */


module.exports = { routes: [{}] }

// Avoid Strapi v4 cannot parse empty routes array
module.exports.routes.pop()