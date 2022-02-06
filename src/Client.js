const HTTP      = require('./HTTP');
const Player    = require('./Player');

class Client {
  constructor(opts) {
    if (typeof(opts) === 'string') opts = { token: opts }
    if (!opts) throw new Error('No token found for Clash of Clans API.');

    this.token = opts.token;
    this.http  = new HTTP(this);
  };

  async getPlayer(tag) {
    return new Player(await this.http.getPlayer(tag));
  };
};

module.exports = Client;
