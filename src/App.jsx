import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // 국가와 메달 수를 담고 있는 객체 배열
  const [countries, setCountries] = useState([]);

  // input form에 입력하는 내용
  const [countryInfo, setCountryInfo] = useState({
    name: "",
    gold: 0,
    silver: 0,
    bronze: 0,
  });

  // 인풋
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setCountryInfo({ ...countryInfo, [name]: value, id: new Date().getTime() });
  };

  // 추가
  const AddCountry = (e) => {
    e.preventDefault();
    setCountries([...countries, countryInfo]);

    // const checkName = countries.some(cou);

    // if (true) {
    //   alert("기존에 추가된 나라입니다. 업데이트를 해주세요");
    // }

    console.log(countries);
  };

  // 수정
  const handleUpdateCountry = (e) => {
    e.preventDefault();
    const findCountry = countries.find(({ name }) => name === countryInfo.name);

    if (findCountry) {
      findCountry.gold = countryInfo.gold;
      findCountry.silver = countryInfo.silver;
      findCountry.bronze = countryInfo.bronze;

      setCountries([...countries]);
    }
  };

  // 삭제
  const handleDeleteCountry = (id) => {
    console.log(id);
    const filteredCountry = countries.filter((selected) => {
      if (selected.id === id) {
        return false;
      } else {
        return true;
      }
    });
    setCountries(filteredCountry);
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
              <button type="button" onClick={handleUpdateCountry}>
                업데이트
              </button>
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
              <tr key={country.id}>
                <td>{country.name}</td>
                <td>{country.gold}</td>
                <td>{country.silver}</td>
                <td>{country.bronze}</td>
                <td>
                  <button
                    onClick={() => {
                      handleDeleteCountry(country.id);
                    }}
                  >
                    삭제
                  </button>
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
