import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  AreaChart,
  Area,
  ComposedChart,
} from "recharts";
import useDashboard from "../../Hooks/useDashboard";
const Dashboard = () => {
  const [dash, setDash] = useDashboard();
  return (
    <div className="my-6">
      <h2 className="text-4xl font-mono font-bold my-9 text-[#8884d8]">
        Monthly Business Analysis
      </h2>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10">
        <div className="overflow-x-scroll   ">
          <h1 className="text-2xl font-semibold font-serif text-center text-[#8884d8] my-5">
            Month Wise Sell
          </h1>

          <LineChart width={600} height={400} data={dash}>
            <Line type="monotone" dataKey="sell" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
        <div className="overflow-x-scroll   ">
          <h4 className="text-2xl font-semibold font-serif text-center text-[#8884d8] my-5">
            Investment <span className="text-orange-600">VS</span>
            <span className="text-[#82ca9d]">Revenue</span>
          </h4>

          <AreaChart
            width={600}
            height={400}
            data={dash}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="investment"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
            <Legend verticalAlign="top" height={36} />
            <Line
              name="investment of Per Month"
              type="monotone"
              dataKey="investment"
              stroke="#8884d8"
            />
            <Line
              name="Revenue Per Month "
              type="monotone"
              dataKey="revenue"
              stroke="#82ca9d"
            />
          </AreaChart>
        </div>
        <div className="overflow-x-scroll   ">
          <h4 className="text-2xl font-semibold font-serif text-center text-[#8884d8] my-5">
            Investment <span className="text-orange-400">VS </span>{" "}
            <span className="text-[#413ea0]">Sell</span>
            <span className="text-orange-400">VS </span>
            <span className="text-[#ff7300]">Revenue</span>
          </h4>

          <ComposedChart width={600} height={400} data={dash}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Area
              type="monotone"
              dataKey="investment"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="sell" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
          </ComposedChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
