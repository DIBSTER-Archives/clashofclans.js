class APIError extends Error {
    constructor (res, body) {
      super();
  
      this.res = res;
      this.url = res.url;
      this.code = res.status;
      this.headers = res.headers;
  
      this.reason = body.startsWith('{') && body.endsWith('}')
        ? JSON.parse(body).reason || body
        : body;
  
      this.message = `Clash of Clans API Rejection:\n\nRequesting Link:${this.url}\nResponse:${body}`;
    }
  }
  
module.exports = APIError;