// Question 45: Cars

interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any;
}

function createCar(
  manufacturer: string,
  model: string,
  ...otherProperties: any[]
): Car {
  let car: Car = { manufacturer, model };

  let otherPropertiesObj = otherProperties.reduce((acc, prop) => {
    if (Array.isArray(prop) && prop.length === 2) {
      acc[prop[0]] = prop[1];
    } else {
      console.warn(`Invalid property: ${prop}`);
    }
    return acc;
  }, {});

  return { ...car, ...otherPropertiesObj };
}
let myCar = createCar(
  "Toyota",
  "SportCar",
  ["color", "Red"],
  ["sunroof", true]
);
console.log(myCar);
