import ICharacter from "../model/ICharacter";
import IStarwars from "../model/IStarwars";

const PEOPLE_URL = "https://swapi.dev/api/people";

export default class PeopleService {
  async get(): Promise<IStarwars | undefined> {
    const response = await fetch(`${PEOPLE_URL}`);

    if (response.ok) {
      const data = await response.json();
      return data;
    }

    return undefined;
  }

  async getID(id: number): Promise<IStarwars | undefined> {
    const response = await fetch(`${PEOPLE_URL}/${id}`);

    if (response.ok) {
      const data = await response.json();
      return data;
    }

    return undefined;
  }

  /*async search(filter:string = ""): Promise<Array<IStarwars>> {
    const url = `${PEOPLE_URL}?search=${filter}`;
    //console.log(`URL: ${url}`);

    const response = await fetch(url);

    let data:Array<IStarwars> = [];
    if (response.ok) {
      data = await response.json();
    }
    console.log(data);
    return data;
  }*/

  /*async search(filter: string = ""): Promise<IStarwars[]> {
      const url = `${PEOPLE_URL}?search=${filter}`;
    
      const response = await fetch(url);
      let data: IStarwars[] = [];
    
      if (response.ok) {
        const jsonData = await response.json();
        
        // Accede a la propiedad 'results' del JSON
        data = jsonData.results;
      } else {
        console.error(`Error fetching data: ${response.statusText}`);
      }
    
      console.log(data);
      return data; // Solo devuelve los resultados de 'results'
    }*/

      async search(filter: string = ""): Promise<ICharacter[]> {
        const url = `${PEOPLE_URL}?search=${filter}`;
      
        const response = await fetch(url);
        let data: IStarwars[] = [];
        let data2: ICharacter[] = [];
      
        if (response.ok) {
          const jsonData = await response.json();
          
          // Accede a la propiedad 'results' del JSON
          data = jsonData.results;

          data2 = jsonData.results.map((item: ICharacter) => ({
            name: item.name,
            height: item.height,
            mass: item.mass,
            hair_color: item.hair_color,
            skin_color: item.skin_color,
            eye_color: item.eye_color,
            birth_year: item.birth_year,
            gender: item.gender,
            homeworld: item.homeworld,
            films: item.films,
            species: item.species,
            vehicles: item.vehicles,
            starships: item.starships,
            created: item.created,
            edited: item.edited,
            url: item.url,
            index: item.index
          }));
        } else {
          console.error(`Error fetching data: ${response.statusText}`);
        }
        console.log('data');
        console.log(data);
        console.log('data2');
        console.log(data2);
        return data2; // Solo devuelve los resultados de 'results'
      }
}
