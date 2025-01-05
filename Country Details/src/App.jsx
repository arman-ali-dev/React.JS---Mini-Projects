import { useEffect, useState } from "react";

function App() {
  const [countyDetail, setCountryDetail] = useState({
    cName: "Country Name",
    flag: "",
    capital: "",
    continent: "",
    population: "",
    currency: "",
    lang: "",
  });

  const [countryName, setCountryName] = useState("");

  async function getData() {
    let countryDetails = await fetch("https://restcountries.com/v3.1/all");
    let countryData = await countryDetails.json();

    countryData.forEach((country) => {
      if (countryName == country.name.common) {
        let languages = [];
        let currency;

        for (let value of Object.values(country.currencies)) {
          currency = value.name;
        }
        for (let value of Object.entries(country.languages)) {
          languages.push(value[1] + " ");
        }

        setCountryDetail({
          cName: country.name.common,
          flag: country.flags.png,
          capital: country.capital[0],
          continent: country.continents[0],
          population: country.population,
          currency: currency,
          lang: languages,
        });
      }
    });
  }

  return (
    <>
      <div className="mian">
        <div className="search_bar">
          <input
            onChange={(event) => {
              setCountryName(event.target.value);
            }}
            type="search"
            id="enteredCountryName"
            placeholder="Enter a country name..."
          />
          <button onClick={getData} id="searchBtn">
            Search
          </button>
        </div>

        <div id="result">
          <div className="flag-content">
            <div className="flag">
              <img src={countyDetail.flag} alt="" />
            </div>
            <h2>{countyDetail.cName}</h2>
          </div>

          <div className="countryDetails">
            <ul>
              <li>
                <span className="detailTitle">Capital:</span>
                <span className="detailContent">{countyDetail.capital}</span>
              </li>
              <li>
                <span className="detailTitle">Continent:</span>
                <span className="detailContent">{countyDetail.continent}</span>
              </li>
              <li>
                <span className="detailTitle">Population:</span>
                <span className="detailContent">{countyDetail.population}</span>
              </li>
              <li>
                <span className="detailTitle">Currency:</span>
                <span className="detailContent">{countyDetail.currency}</span>
              </li>
              <li>
                <span className="detailTitle">Common Languages:</span>
                <span className="detailContent">{countyDetail.lang}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
