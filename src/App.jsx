import { useState } from "react";
import "./styles/App.css";
import InputForm from "./components/InputForm";
import Table from "./components/Table";

function App() {
  // 국가와 메달 수를 담고 있는 객체 배열
  const [countries, setCountries] = useState([]);

  return (
    <>
      <div className="container">
        <h1 className="title">2024 파리 올림픽</h1>
        <InputForm countries={countries} setCountries={setCountries} />

        {/* 메달 통계 부분 > 조건부 렌더링 */}
        {countries.length === 0 ? (
          <h3> 아직 메달을 획득한 나라가 없습니다. </h3>
        ) : (
          <Table countries={countries} setCountries={setCountries} />
        )}
      </div>
    </>
  );
}

export default App;
