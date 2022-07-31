import { Line } from "react-chartjs-2";
import { CategoryScale, Chart, registerables } from "chart.js";
import "./App.css";
import { Forms } from "./components/Form";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Brain data",
    },
  },
};

const labels = [
  { timestamp: 1, value: 1 },
  { timestamp: 1.09, value: 3 },
  { timestamp: 1.13, value: 7 },
  { timestamp: 1.16, value: 4 },
  { timestamp: 1.21, value: -2 },
];

export const data = {
  labels: labels.map((value) => value.timestamp),
  datasets: [
    {
      label: "EEG Data",
      data: labels.map((value) => value.value),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

function App() {
  Chart.register(CategoryScale);
  Chart.register(...registerables);

  return (
    <div className="App">
      <Forms
        onSubmit={({ firstName, lastName }) => {
          console.log(firstName, lastName);
        }}
      />
      <Line options={options} data={data} />
    </div>
  );
}

export default App;
