"use client"

import styles from './chart.module.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: "Sun",
    visit: 4000,
    click: 2400,
  },
  {
    name: "Mon",
    visit: 3000,
    click: 1398,
  },
  {
    name: "Tue",
    visit: 2000,
    click: 3800,
  },
  {
    name: "Wed",
    visit: 2780,
    click: 3908,
  },
  {
    name: "Thu",
    visit: 1890,
    click: 4800,
  },
  {
    name: "Fri",
    visit: 2390,
    click: 3800,
  },
  {
    name: "Sat",
    visit: 3490,
    click: 4300,
  },
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{background:"#151c2c", border:"none"}}/>
          <Legend />
          <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart



















// "use client"

// import styles from './chart.module.css';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const data = [
//   {
//     name: "Sun",
//     visit: 4000,
//     click: 2400,
//   },
//   {
//     name: "Mon",
//     visit: 3000,
//     click: 1398,
//   },
//   {
//     name: "Tue",
//     visit: 2000,
//     click: 3800,
//   },
//   {
//     name: "Wed",
//     visit: 2780,
//     click: 3908,
//   },
//   {
//     name: "Thu",
//     visit: 1890,
//     click: 4800,
//   },
//   {
//     name: "Fri",
//     visit: 2390,
//     click: 3800,
//   },
//   {
//     name: "Sat",
//     visit: 3490,
//     click: 4300,
//   },
// ];

// const off = "50%"; // Contoh nilai tetap untuk offset

// const Chart = () => {
//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>Rekap Mingguan</h2>
//       <ResponsiveContainer width="100%" height={400}>
//         <AreaChart
//           data={data}
//           margin={{
//             top: 10,
//             right: 30,
//             left: 0,
//             bottom: 0,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <defs>
//             <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
//               <stop offset={off} stopColor="green" stopOpacity={1} />
//               <stop offset={off} stopColor="red" stopOpacity={1} />
//             </linearGradient>
//           </defs>
//           <Area type="monotone" dataKey="visit" stroke="#000" fill="url(#splitColor)" />
//         </AreaChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// export default Chart;



