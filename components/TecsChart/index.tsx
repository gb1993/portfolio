"use client";
import { dataChart } from "@/utils/consts";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const TecsChart = () => {
  return (
    <>
      <div className="hidden lg:block">
        <ResponsiveContainer width={"100%"} height={400} className={"m-auto"}>
          <BarChart
            width={1280}
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
        </ResponsiveContainer>
      </div>
      <div className="block lg:hidden">
        <ResponsiveContainer width="100%" height={400} className="m-auto">
          <BarChart
            width={1280}
            height={400}
            data={dataChart}
            layout="vertical" // Define a orientação horizontal das barras
            className="m-auto"
          >
            <CartesianGrid strokeDasharray="8 8" />
            <XAxis type="number" domain={[0, 10]} /> {/* Eixo numérico */}
            <YAxis type="category" dataKey="tech" /> {/* Eixo categórico */}
            <Tooltip />
            <Bar dataKey="pleno" className="fill-primary" name="Pleno" />
            <Bar dataKey="junior" className="fill-primary" name="Junior" />
            <Bar dataKey="senior" className="fill-primary" name="Senior" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default TecsChart;
