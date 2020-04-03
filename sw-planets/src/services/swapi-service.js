export default class SwapiService {
   
    _apiBase = 'https://swapi.co/api';
  
    async getRecource(){
      const res = await fetch(`${this._apiBase}${url}`);
  
      if(!res.ok){
        throw new Error(`Could nt fetch ${url}` +
        `, received ${res.status}`)
      }
  
      return await res.json();
    }
    async getAllPeople(){
      const res = await this.getRecource(`/people/`)
      return res.results
    }
  
    getPerson(id){
      return this.getRecource(`/people/${id}/`);
    }
  
    async getAllPlanets(){
      const res = await  this.getRecource(`/planets/`);
      return res.results
    }
  
    getPlanet(id){
      return this.getRecource(`/planets/${id}/`);
    }
  
    async geAlltStarShips(){
      const res = await this.getRecource(`/starships/`);
      return res.results;
    }
  
    getPlanet(id){
      return this.getRecource(`/starships/${id}/`);
    }
  
  
  }
  
  const swapi = new SwapiService();
  
  swapi.getAllPeople().then((body) => {
    console.log(body)
  })
  