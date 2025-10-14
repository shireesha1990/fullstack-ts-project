const path = require('path');

module.exports = {
  webpack: (config:any) => {
    config.resolve.alias['@shared'] = path.resolve(__dirname, '../../packages/shared/src');
    return config;
  },
};

