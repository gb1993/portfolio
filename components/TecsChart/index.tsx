"use client";
import { dataChart } from "@/utils/consts";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const TecsChart = () => {
  return (
    <BarChart
      width={1000}
      height={400}
      data={dataChart}
      className="m-auto"
    >
      <CartesianGrid strokeDasharray="8 8" />
      <XAxis dataKey="tech" />
      <YAxis domain={[0, 10]} />
      <Tooltip />
      <Bar dataKey="pleno" className="fill-primary" name="Pleno" />
      <Bar dataKey="junior" className="fill-primary" name="Junior" />
      <Bar dataKey="senior" className="fill-primary" name="Senior" />
    </BarChart>
  );
};

export default TecsChart;
