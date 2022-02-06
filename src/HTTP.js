const fetch = require('node-fetch');
const baseURL = 'https://api.clashofclans.com/v1/';

const APIError = require('./APIError');

class HTTP {
  constructor(client) {
    this.client = client;
  };

  getHeaders() {
    return {
      Authorization: `Bearer ${this.client.token}`,
      Accept: 'application/json'
    };
  };

  async requestAsync(endpoint) {
    const res = await fetch(baseURL + endpoint, {
      headers: this.getHeaders()
    });
    if (!res.ok) throw new APIError(res, await res.text());
    return await res.json();
  };

  async getPlayer(tag) {
    tag = tag.toUpperCase();
    return await this.requestAsync(`players/%23${tag.replace("#", "")}`);
  };
};

module.exports = HTTP;