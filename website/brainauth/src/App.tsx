import { Line } from "react-chartjs-2";
import { CategoryScale, Chart, registerables } from "chart.js";
import "./App.css";
import { Forms } from "./components/Form";
import { DataPoint } from "./models/types";
import { useEffect, useState } from "react";

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Brain data",
    },
    legend: {
      display: false,
    },
  },
};

const labels: Array<DataPoint> = [
  { timestamp: 1, value: 1 },
  { timestamp: 1.09, value: 3 },
  { timestamp: 1.13, value: 7 },
  { timestamp: 1.16, value: 4 },
  { timestamp: 1.21, value: -2 },
];

function App() {
  Chart.register(CategoryScale);
  Chart.register(...registerables);
  const [data, setData] = useState<Array<DataPoint> | undefined>([]);

  const dataToDisplay = {
    datasets: [
      {
        data: data,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  useEffect(() => {
    console.log(data);
    console.log("HERE");
  }, [data]);

  return (
    <div className="App">
      <Forms
        setData={setData}
        onSubmit={({ firstName, lastName }) => {
          console.log(firstName, lastName);
        }}
      />
      {data && data.length !== 0 ? (
        <Line options={options} data={dataToDisplay} />
      ) : null}
    </div>
  );
}

export default App;
