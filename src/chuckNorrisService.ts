const { RESTDataSource } = require('apollo-datasource-rest');

class API extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.chucknorris.io';
  }

  async getRandomJoke() {
    return this.get('/jokes/random');
  }

  async getCategories() {
    return this.get('/jokes/categories');
  }

  async getJokeByCategory(category: String) {
    return this.get(`/jokes/random?category=${category}`);
  }
};

export default API;