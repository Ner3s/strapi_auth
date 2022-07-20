'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('reports')
      .service('myService')
      .getWelcomeMessage();
  },
};
