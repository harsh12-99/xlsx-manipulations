import "./App.css";
import React, { useCallback } from "react";
import { utils, writeFileXLSX } from "xlsx";

const data = [
  {
    name: "TATA",
    model: "Nexon",
  },
  {
    name: "Maruti",
    model: "Alto",
  },
  {
    name: "Mahindra",
    model: "Thar",
  },
  {
    name: "Toyota",
    model: "Fortuner",
  },
];

const Heading = [["Company", "Model"]];

function App() {
  const exportFile = useCallback(() => {
    const wb = utils.book_new();
    const ws = utils.json_to_sheet([]);
    utils.sheet_add_aoa(ws, Heading);

    utils.sheet_add_json(ws, data, { origin: "A2", skipHeader: true });
    utils.book_append_sheet(wb, ws, "Sheet1");

    writeFileXLSX(wb, "carsData.xlsx");
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Index</th>
        </tr>
      </thead>
      <tbody>
        {data.map((pres) => (
          <tr>
            <td>{pres.name}</td>
            <td>{pres.model}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <td colSpan={2}>
          <button onClick={exportFile}>Export XLSX</button>
        </td>
      </tfoot>
    </table>
  );
}

export default App;
