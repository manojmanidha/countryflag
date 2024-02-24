import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const flagStyle = {
    width: "100px",
    height: "100px",
  };

  const cardStyle = {
    width: "200px",
    border: "1px solid black",
    borderRadius: "10px",
    padding: "10px",
    margin: "10px",
    display: "flex",
    flexDirection: "coloumn",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={containerStyle}>
      {/* <h1>manojks </h1> */}
      {countries.map((country) => (
        <div key={country.cca3} style={cardStyle}>
          <img
            src={country.flags.png}
            alt={`flag of ${country.name.common}`}
            style={flagStyle}
          />
          <h2>{country.name.common}</h2>
        </div>
      ))}
    </div>
  );
}
