import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);

  const [country, setCountry] = useState("");
  const [goldMedals, setGoldMedals] = useState("0");
  const [silverMedals, setSilverMedals] = useState("0");
  const [bronzeMedals, setBronzeMedals] = useState("0");

  const handleAddCountry = (e) => {
    e.preventDefault();

    const newCountries = [
      ...countries,
      {
        country: country,
        goldMedals: goldMedals,
        silverMedals: silverMedals,
        bronzeMedals: bronzeMedals,
      },
    ];

    setCountries(newCountries);
    console.log(countries);
  };

  const countryInputHandler = (e) => {
    setCountry(e.target.value);
    // console.log(country);
  };
  const goldMedalInputHandler = (e) => {
    setGoldMedals(e.target.value);
  };
  const silverMedalInputHandler = (e) => {
    setSilverMedals(e.target.value);
  };
  const bronzeMedalInputHandler = (e) => {
    setBronzeMedals(e.target.value);
  };

  return (
    <>
      <div className="container">
        <h1 className="title">2024 파리 올림픽</h1>

        <div className="input-container">
          <form onSubmit={handleAddCountry}>
            <div className="input-item">
              <label>국가명</label>
              <input
                type="text"
                placeholder="국가 입력"
                // value={}
                onChange={countryInputHandler}
              />
            </div>
            <div className="input-item">
              <label>금메달</label>
              <input
                type="text"
                // value={}
                onChange={goldMedalInputHandler}
              />
            </div>
            <div className="input-item">
              <label>은메달</label>
              <input
                type="text"
                // value={}
                onChange={silverMedalInputHandler}
              />
            </div>
            <div className="input-item">
              <label>동메달</label>
              <input
                type="text"
                // value={}
                onChange={bronzeMedalInputHandler}
              />
            </div>

            <div className="button-container">
              <button type="submit">국가 추가</button>
              <button type="button">업데이트</button>
            </div>
          </form>
        </div>

        {/* 메달 통계 부분 */}
        <table className="medal-table">
          <thead>
            <tr>
              <th>국가</th>
              <th>금메달</th>
              <th>은메달</th>
              <th>동메달</th>
              <th>액션</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country) => (
              <tr key={country.country}>
                <td>{country.country}</td>
                <td>{country.goldMedals}</td>
                <td>{country.silverMedals}</td>
                <td>{country.bronzeMedals}</td>
                <td>
                  <button>삭제</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
