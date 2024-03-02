import { DefaultizedPieValueType } from "@mui/x-charts";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

const data = [
  { value: 60, label: "60%", color: "#FF6384" },
  { value: 25, label: "30%", color: "#FFCD56" },
  { value: 15, label: "10%", color: "#36A2EB" },
];

const sizing = {
  margin: { right: 5 },
  width: 400,
  height: 400,
  legend: { hidden: true },
};
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params: DefaultizedPieValueType) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};

const Pie = () => {
  return (
    <div className="">
      <div className="text-center my-10">
        <h2 className="text-3xl font-extrabold">HASIL :</h2>
      </div>
      <PieChart
        series={[
          {
            outerRadius: 200,
            data,
            arcLabel: getArcLabel,
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: "black",
            fontWeight: "bold",
            fontSize: 25,
          },
        }}
        {...sizing}
      />
    </div>
  );
};

export default Pie;
