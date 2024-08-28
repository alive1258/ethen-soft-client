import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const Data = () => {
  const data = [
    {
      name: "Jan",
      uv: 48,
      pv: 20,
      amt: 61,
    },
    {
      name: "Feb",
      uv: 87,
      pv: 59,
      amt: 67,
    },
    {
      name: "Mar",
      uv: 98,
      pv: 80,
      amt: 93,
    },
    {
      name: "Apr",
      uv: 78,
      pv: 65,
      amt: 82,
    },
    {
      name: "Jun  ",
      uv: 53,
      pv: 27,
      amt: 56,
    },
    {
      name: "Jul",
      uv: 74,
      pv: 60,
      amt: 80,
    },
    {
      name: "Aug",
      uv: 69,
      pv: 56,
      amt: 73,
    },
  ];
  return (
    <div>
      <LineChart
        width={1500}
        height={500}
        data={data}
        syncId="anyId"
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 0,
        }}
      >
        <defs>
          <filter id="lineShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow
              dx="0"
              dy="14"
              stdDeviation="10"
              floodColor="rgba(133, 244, 250, 1)"
            />
          </filter>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#3A57E8"
          activeDot={{ r: 5 }}
          style={{ filter: "url(#lineShadow)" }}
        />
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#82ca9d"
          style={{ filter: "url(#lineShadow)" }}
        />
      </LineChart>
    </div>
  );
};

export default Data;
