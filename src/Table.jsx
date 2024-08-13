// Table.jsx
import React from "react";

const Table = ({ countries, onDelete }) => {
  // 금메달 수에 따라 오름차순 정렬
  const sortedCountries = [...countries].sort((a, b) => b.gold - a.gold);

  return (
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
        {sortedCountries.map((country) => (
          <tr key={country.id}>
            <td>{country.name}</td>
            <td>{country.gold}</td>
            <td>{country.silver}</td>
            <td>{country.bronze}</td>
            <td>
              <button onClick={() => onDelete(country.id)}>삭제</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
