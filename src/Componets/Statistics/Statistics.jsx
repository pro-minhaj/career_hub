import { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Minhaj',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Rakib',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Jahid',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Shakib',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Hejbur',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Jisan',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Tanvir',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export class Statistics extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/synchronized-line-charts-zc3nl';

  render() {
    return (
      <div className="w-full -z-10 container mx-auto flex flex-col gap-10 py-10">
        <h4 className='text-center font-medium text-2xl'>This is a Marks Line Chart</h4>

        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
        <h4 className='text-center font-medium text-2xl'>This is a Power Line Chart</h4>

        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
            <Brush />
          </LineChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}


export default Statistics;