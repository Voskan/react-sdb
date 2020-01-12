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

  getUser (id) {
    return this.getResource(`/people/${id}`);
  }

  async getPlanets () {
    const planets = await this.getResource('/planets/');
    return planets.results;
  }

  getPlanet (id) {
    return this.getResource(`/planets/${id}`);
  }

  async getStarShips () {
    const planets = await this.getResource('/starships/');
    return planets.results;
  }

  getStarShip (id) {
    return this.getResource(`/starships/${id}`);
  }
}

export default SwapiService;
