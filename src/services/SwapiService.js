class SwapiService {

  _apiBase = 'https://swapi.co/api';

  async getResource (url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, Res status: ${res.status}`);
    }

    return await res.json();
  }

  async getUsers () {
    const users = await this.getResource('/people/');
    return users.results;
  }
}

export default SwapiService;
