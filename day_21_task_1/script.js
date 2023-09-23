// Function to fetch data from the API
function fetchData() {
  return fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
          if (!response.ok) {
              throw new Error("Network response was not ok");
          }
          return response.json();
      })
      .catch((error) => {
          console.error("Fetch error:", error);
          throw error;
      });
}

// Function to filter countries starting with 'A'
function filterCountriesStartingWithA(data) {
  return data.filter((country) => country.name.common.startsWith("A"));
}

// Function to render country data on the webpage
function renderCountryList(countries) {
  const countryList = document.getElementById("countryList");

  countries.forEach((country) => {
      const listItem = document.createElement("li");
      listItem.classList.add("list-group-item");
      listItem.textContent = country.name.common;
      countryList.appendChild(listItem);
  });
}

// Entry point
fetchData()
  .then((data) => filterCountriesStartingWithA(data))
  .then((filteredCountries) => renderCountryList(filteredCountries))
  .catch((error) => {
      // Handle errors gracefully, e.g., display an error message on the webpage
      console.error("Error:", error);
  });
