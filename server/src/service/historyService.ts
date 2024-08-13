// TODO: Define a City class with name and id properties
import * as fs from "fs";

class City {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
const historyFileName: string = "History.json";
// TODO: Complete the HistoryService class
class HistoryService {
  // TODO: Define a read method that reads from the searchHistory.json file
  async read() {
    this.write;
    let data: any = JSON.parse(fs.readFileSync(historyFileName, "utf8"));
    return data;
  }
  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  async write(cities: string[]) {
    const citiesObj: {
      id: number;
      name: string;
    }[] = cities.map((item, index) => ({ name: item, id: index }));
    let loadedCities: City[]=
      JSON.parse(fs.readFileSync(historyFileName, "utf8")) || [];
    // let loadedCities: { id: number, name: string }[] = this.read()
     const allCities: City[] = [...citiesObj, ...loadedCities];
    var json = JSON.stringify(allCities);

    fs.writeFileSync(historyFileName, json, "utf8");
  }
  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  async getCities() {}
  // TODO Define an addCity method that adds a city to the searchHistory.json file
  async addCity(city: string) {
    city;
  }
  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  //   async removeCity(id: string) {}
}

export default new HistoryService();
