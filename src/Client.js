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

  async getRanking(country = 'global', type = 'players') {
    return new Ranking(await this.http.getRanking(country, type));
  };

  async getClub(tag) {
    return new Club(await this.http.getClub(tag));
  };

  async getBrawlers() {
    return new Brawlers(await this.http.getBrawlers());
  };
};

module.exports = Client;