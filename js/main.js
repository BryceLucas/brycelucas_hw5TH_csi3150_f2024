//Data set for all cars
const usedCars = [
  {
    year: 2018,
    make: "Toyota",
    model: "Camry",
    mileage: 30000,
    price: 18000,
    color: "Silver",
    gasMileage: "25 mpg city, 35 mpg highway",
    image: "ToyotaCamry.jpg",
  },
  {
    year: 2016,
    make: "Honda",
    model: "Civic",
    mileage: 45000,
    price: 14000,
    color: "White",
    gasMileage: "30 mpg city, 40 mpg highway",
    image: "HondaCivic.jpg",
  },
  {
    year: 2017,
    make: "Ford",
    model: "Fusion",
    mileage: 35000,
    price: 16000,
    color: "Black",
    gasMileage: "28 mpg city, 38 mpg highway",
    image: "Fordfusion.jpg",
  },
  {
    year: 2019,
    make: "Nissan",
    model: "Altima",
    mileage: 25000,
    price: 17000,
    color: "Blue",
    gasMileage: "27 mpg city, 36 mpg highway",
    image: "Nissanaltima.jpg",
  },
  {
    year: 2015,
    make: "Chevrolet",
    model: "Malibu",
    mileage: 50000,
    price: 12000,
    color: "Red",
    gasMileage: "25 mpg city, 37 mpg highway",
    image: "Chevymalibu.jpg",
  },
  {
    year: 2016,
    make: "Volkswagen",
    model: "Passat",
    mileage: 40000,
    price: 15000,
    color: "Gray",
    gasMileage: "29 mpg city, 40 mpg highway",
    image: "Volkswagenpassat.jpg",
  },
  {
    year: 2020,
    make: "Hyundai",
    model: "Elantra",
    mileage: 22000,
    price: 16000,
    color: "Silver",
    gasMileage: "30 mpg city, 41 mpg highway",
    image: "Hyundaielantra.jpg",
  },
  {
    year: 2014,
    make: "Subaru",
    model: "Outback",
    mileage: 60000,
    price: 14000,
    color: "Green",
    gasMileage: "22 mpg city, 30 mpg highway",
    image: "Subaruoutback.jpg",
  },
  {
    year: 2017,
    make: "Mazda",
    model: "CX-5",
    mileage: 32000,
    price: 19000,
    color: "Blue",
    gasMileage: "24 mpg city, 31 mpg highway",
    image: "Mazdacx-5.jpg",
  },
  {
    year: 2018,
    make: "Kia",
    model: "Sorento",
    mileage: 28000,
    price: 17000,
    color: "White",
    gasMileage: "22 mpg city, 29 mpg highway",
    image: "Kiasorento.jpg",
  },
  {
    year: 2015,
    make: "Dodge",
    model: "Challenger",
    mileage: 30000,
    price: 24000,
    color: "Black",
    gasMileage: "19 mpg city, 30 mpg highway",
    image: "Dodgechallenger.jpg",
  },
  {
    year: 2017,
    make: "Cadillac",
    model: "XT5",
    mileage: 28000,
    price: 32000,
    color: "Red",
    gasMileage: "19 mpg city, 27 mpg highway",
    image: "Cadillacxt5.jpg",
  },
  {
    year: 2018,
    make: "Jaguar",
    model: "F-PACE",
    mileage: 26000,
    price: 38000,
    color: "Blue",
    gasMileage: "18 mpg city, 23 mpg highway",
    image: "Jaguarf-pace.jpg",
  },
  {
    year: 2019,
    make: "Tesla",
    model: "Model S",
    mileage: 18000,
    price: 55000,
    color: "Black",
    gasMileage: "Electric (370 miles per charge)",
    image: "Teslamodels.jpg",
  },
  {
    year: 2020,
    make: "Porsche",
    model: "Cayenne",
    mileage: 22000,
    price: 68000,
    color: "White",
    gasMileage: "20 mpg city, 26 mpg highway",
    image: "Porschecayenne.jpg",
  },
  {
    year: 2017,
    make: "Lexus",
    model: "ES",
    mileage: 29000,
    price: 26000,
    color: "White",
    gasMileage: "21 mpg city, 30 mpg highway",
    image: "LexusES.jpg",
  },
  {
    year: 2016,
    make: "BMW",
    model: "5 Series",
    mileage: 32000,
    price: 27000,
    color: "Black",
    gasMileage: "23 mpg city, 34 mpg highway",
    image: "BMW5series.jpg",
  },
];

// Function to safely get numeric input values with default fallback
function getInputValue(id, defaultValue) {
  const value = parseInt(document.getElementById(id).value);
  return isNaN(value) ? defaultValue : value;
}

// Function to populate the make and color filter options dynamically
function populateFilterOptions() {
  const makeSelect = document.getElementById("make");
  const colorSelect = document.getElementById("color");

  // Extract unique makes and colors from the usedCars array
  const makes = [...new Set(usedCars.map((car) => car.make))].sort();
  const colors = [...new Set(usedCars.map((car) => car.color))].sort();

  // Populate makes
  makes.forEach((make) => {
    const option = document.createElement("option");
    option.value = make;
    option.textContent = make;
    makeSelect.appendChild(option);
  });

  // Populate colors
  colors.forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.textContent = color;
    colorSelect.appendChild(option);
  });
}

// Function to display car cards based on the provided array of cars
function displayCars(cars) {
  const carContainer = document.getElementById("car-container");
  carContainer.innerHTML = ""; // Clear existing content

  if (cars.length === 0) {
    carContainer.innerHTML =
      "<p>No cars match your criteria. Please try again.</p>";
    return;
  }

  // Generate car cards
  cars.forEach((car) => {
    const carCard = document.createElement("div");
    carCard.className = "car-card";

    carCard.innerHTML = `
      <img src="assets/image/${car.image}" alt="${car.make} ${
      car.model
    }" class="car-image" onerror="this.onerror=null; this.src='assets/image/default.jpg';">
      <h3>${car.year} ${car.make} ${car.model}</h3>
      <p><strong>Price:</strong> $${car.price.toLocaleString()}</p>
      <p><strong>Mileage:</strong> ${car.mileage.toLocaleString()} miles</p>
      <p><strong>Color:</strong> ${car.color}</p>
      <p><strong>Gas Mileage:</strong> ${car.gasMileage}</p>
    `;

    carContainer.appendChild(carCard);
  });
}

// Function to filter cars based on user input
function filterCars() {
  // Retrieve and parse input values
  const minYear = getInputValue("minYear", 0);
  const maxYear = getInputValue("maxYear", 9999);
  const make = Array.from(document.getElementById("make").selectedOptions).map(
    (opt) => opt.value
  );
  const maxMileage = getInputValue("maxMileage", Infinity);
  const minPrice = getInputValue("minPrice", 0);
  const maxPrice = getInputValue("maxPrice", Infinity);
  const color = Array.from(
    document.getElementById("color").selectedOptions
  ).map((opt) => opt.value);

  // Validate input ranges
  if (minYear > maxYear) {
    alert("Minimum year cannot be greater than maximum year.");
    return;
  }
  if (minPrice > maxPrice) {
    alert("Minimum price cannot be greater than maximum price.");
    return;
  }

  // Filter the cars array
  const filteredCars = usedCars.filter((car) => {
    return (
      car.year >= minYear &&
      car.year <= maxYear &&
      (make.length === 0 || make.includes(car.make)) &&
      car.mileage <= maxMileage &&
      car.price >= minPrice &&
      car.price <= maxPrice &&
      (color.length === 0 || color.includes(car.color))
    );
  });

  // Display the filtered cars
  displayCars(filteredCars);
}

// Function to reset all filters and display all cars
function resetFilters() {
  document.getElementById("filter-form").reset();
  displayCars(usedCars);
}

// Function to initialize the application
function init() {
  populateFilterOptions();
  displayCars(usedCars);
}

// Event listeners
document.addEventListener("DOMContentLoaded", init);
document.getElementById("filterButton").addEventListener("click", filterCars);
document.getElementById("resetButton").addEventListener("click", resetFilters);
