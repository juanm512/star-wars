import fs from "fs";

let data =
  // save data to file
  fs.writeFile(
    "data.json",
    JSON.stringify({ ships: await getShips() }),
    function (err) {
      if (err) {
        console.log(err);
      }
    }
  );

// function to get ships from api
async function getShips() {
  let next = "https://swapi.dev/api/starships/?page=1";
  let ships = [];
  do {
    const response = await fetch(next);
    const data = await response.json();
    ships = [...ships, ...data.results];
    next = data.next;
  } while (next !== null);
  console.log(ships);
  return ships;
}
