// Function to populate filter options dynamically
function populateFilterOptions() {
  const makeSelect = document.getElementById("make");
  const colorSelect = document.getElementById("color");

  const makes = [...new Set(usedCars.map((car) => car.make))].sort();
  const colors = [...new Set(usedCars.map((car) => car.color))].sort();

  makes.forEach((make) => {
    const option = document.createElement("option");
    option.value = make;
    option.textContent = make;
    makeSelect.appendChild(option);
  });

  colors.forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.textContent = color;
    colorSelect.appendChild(option);
  });
}

// Function to display car cards
function displayCars(cars) {
  const carContainer = document.getElementById("car-container");
  carContainer.innerHTML = ""; // Clear existing content

  if (cars.length === 0) {
    carContainer.innerHTML =
      "<p>No cars match your criteria. Please try again.</p>";
    return;
  }

  cars.forEach((car) => {
    const carCard = document.createElement("div");
    carCard.className = "car-card";
    carCard.innerHTML = `
      <img src="image/${car.image}" alt="${car.make} ${car.model}">
      <h3>${car.year} ${car.make} ${car.model}</h3>
      <p><strong>Price:</strong> $${car.price.toLocaleString()}</p>
      <p><strong>Mileage:</strong> ${car.mileage.toLocaleString()} miles</p>
      <p><strong>Color:</strong> ${car.color}</p>
      <p><strong>Gas Mileage:</strong> ${car.gasMileage}</p>
    `;
    carContainer.appendChild(carCard);
  });
}

// Function to apply filters
function applyFilters() {
  const minYear = parseInt(document.getElementById("minYear").value) || 0;
  const maxYear = parseInt(document.getElementById("maxYear").value) || 9999;
  const make = Array.from(document.getElementById("make").selectedOptions).map(
    (option) => option.value
  );
  const maxMileage =
    parseInt(document.getElementById("maxMileage").value) || Infinity;
  const minPrice = parseInt(document.getElementById("minPrice").value) || 0;
  const maxPrice =
    parseInt(document.getElementById("maxPrice").value) || Infinity;
  const color = Array.from(
    document.getElementById("color").selectedOptions
  ).map((option) => option.value);

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

  displayCars(filteredCars);
}

// Function to reset all filters
function resetFilters() {
  document.getElementById("filter-form").reset();
  displayCars(usedCars);
}

// Function to clear selection for a multi-select dropdown
function clearSelection(id) {
  const selectElement = document.getElementById(id);
  selectElement.selectedIndex = -1; // Deselect all options
}

// Initialize the application
function init() {
  populateFilterOptions();
  displayCars(usedCars);

  // Attach event listeners
  document
    .getElementById("filterButton")
    .addEventListener("click", applyFilters);
  document
    .getElementById("resetButton")
    .addEventListener("click", resetFilters);
}

document.addEventListener("DOMContentLoaded", init);
