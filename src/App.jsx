import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);

  const [countryInfo, setCountryInfo] = useState({
    name: "",
    gold: 0,
    silver: 0,
    bronze: 0,
  });

  const AddCountry = (e) => {
    e.preventDefault();
    setCountries([...countries, countryInfo]);

    console.log(countries);
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setCountryInfo({ ...countryInfo, [name]: value });
  };

  return (
    <>
      <div className="container">
        <h1 className="title">2024 파리 올림픽</h1>

        <div className="input-container">
          <form onSubmit={AddCountry}>
            <div className="input-item">
              <label>국가명</label>
              <input
                type="text"
                placeholder="국가 입력"
                value={countryInfo.name}
                name="name"
                onChange={onInputChange}
              />
            </div>
            <div className="input-item">
              <label>금메달</label>
              <input
                type="text"
                value={countryInfo.gold}
                name="gold"
                onChange={onInputChange}
              />
            </div>
            <div className="input-item">
              <label>은메달</label>
              <input
                type="text"
                value={countryInfo.silver}
                name="silver"
                onChange={onInputChange}
              />
            </div>
            <div className="input-item">
              <label>동메달</label>
              <input
                type="text"
                value={countryInfo.bronze}
                name="bronze"
                onChange={onInputChange}
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
              <tr key={country.name}>
                <td>{country.name}</td>
                <td>{country.gold}</td>
                <td>{country.silver}</td>
                <td>{country.bronze}</td>
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
