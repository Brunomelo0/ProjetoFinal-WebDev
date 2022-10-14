'use strict';

/**
 * aeronave service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::aeronave.aeronave');
