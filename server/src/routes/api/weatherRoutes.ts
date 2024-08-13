import { Router } from "express";
const router = Router();

import HistoryService from "../../service/historyService.js";
import { getWeatherForCity } from "../../service/weatherService.js";

// // TODO: POST Request with city name to retrieve weather data
router.post("/", async (req, res) => {
  // get the weather data for a location
  const data =  await getWeatherForCity(req.body.city);
  console.log(data);
  await HistoryService.write([req.body.city]);
  console.log(req.body);

  res.json(data);

  //   // TODO: GET weather data from city name
  //   // TODO: save city to search history
});

// // TODO: GET search history
router.get("/history", async (req, res) => {
  let data: any = await HistoryService.read();

  res.json(data);
  req;
  res;
});

// // * BONUS TODO: DELETE city from search history
// router.delete("/history/:id", async (req, res) => {
//   res.json({ a: 1 });
//   req;
//   res;
// });

export default router;
