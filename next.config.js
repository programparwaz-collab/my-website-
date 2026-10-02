module.exports = {
  async rewrites() {
    return [{ source: '/web-development-company-in-:city', destination: '/locations/:city' }];
  },
};
