const HttpClient = require('./httpClient');

class ApiClient extends HttpClient {
  constructor(baseURL, langCode) {
    super({
      baseURL,
      headers: {
        lang: langCode
      }
    });
  }

  get users() {
    return {
      get: () => this.get("/users"),
      delete: (id) => this.delete(`/users/${id}`),
      create: (user) => this.post("/users", user),
      update: (user) => this.put(`/users/${user.id}`, user)
    };
  }
}

module.exports = ApiClient;
