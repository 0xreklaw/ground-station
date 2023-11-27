import { useState } from "react";
import Layout from "../components/Layout";
import OverviewGraphs from "../sections/OverviewGraphs";
import { LineChart, Card, Title } from "@tremor/react";
import { background } from "ui-box";

interface moduleInterface {
  name: "GPS" | "IMU" | "ALTIMETER" | "SETUP";
  status: "CONNECTED" | "DISCONNECTED" | "ERROR";
}

const Graph = ({
  title,
  data,
  constants,
}: {
  title: string;
  data: { title: string; x_coordinate: number; y_coordinate: number };
  constants: { subtitle: string; x_constant: number; y_constant: number }[];
}) =>
  // constants: { subtitle: string; x_constant: number; y_constant: number }[]
  {
    return (
      <Card>
        <Title>{title}</Title>
        <LineChart
          className="h-48"
          data={data}
          index={data}
          // categories={["x_coordinate", "y_coordinate"]}
          // colors={["emerald", "gray"]}
          // valueFormatter={valueFormatter}
          yAxisWidth={40}
        />
      </Card>
    );
  };

const GraphSection = () => {
  const [graphs, setGraphs] = useState([
    {
      title: "Velocity",
      x_coordinate: 0,
      y_coordinate: 0,
      x_axis: "time",
      y_axis: "distance",
      data: [
        {
          time: 0,
          distance: 0,
        },
        {
          time: 1,
          distance: 1,
        },
        {
          time: 2,
          distance: 2,
        },
        {
          time: 3,
          distance: 4,
        },
        {
          time: 4,
          distance: 16,
        },
      ],
    },
    {
      title: "Altitude",
      x_coordinate: 0,
      y_coordinate: 0,
      x_axis: "time",
      y_axis: "distance",
    },
  ]);
  // <div>{graph.title}</div>

  return (
    <div className="">
      {graphs.map((graph) => (
        <Card key={graph.title} className="h-14">
          <Title>{graph.title}</Title>
          <LineChart
            className="mt-6"
            data={graph.data}
            index="time"
            categories={[graph.x_axis, graph.y_axis]}
            colors={["neutral", "indigo"]}
            // valueFormatter={valueFormatter}
            yAxisWidth={40}
          />
        </Card>
      ))}
    </div>
  );
};

const StagePanel = () => {
  type stageTypes =
    | "PRELAUNCH"
    | "LAUNCH"
    | "COAST"
    | "DROGUE"
    | "MAIN"
    | "LANDING"
    | "LANDED";
  const [rocketStage, setRocketStage] = useState<stageTypes>("PRELAUNCH");
  return (
    <div className="max-w-xs p-6 bg-dark border border-dark rounded-lg mb-4">
      <p className="text-lg font-bold mb-4">Stage</p>
      <p className="text-lg font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-gray-200 text-center text-blue-600">
        {rocketStage}
      </p>
    </div>
  );
};

const StatusPanel = () => {
  const [modules, setModules] = useState<moduleInterface[]>([
    {
      name: "SETUP",
      status: "CONNECTED",
    },
    {
      name: "IMU",
      status: "ERROR",
    },
    {
      name: "GPS",
      status: "DISCONNECTED",
    },
    {
      name: "ALTIMETER",
      status: "DISCONNECTED",
    },
  ]);
  return (
    <div className="max-w-xs p-6 bg-dark border border-dark rounded-lg mb-4">
      <p className="text-lg font-bold">Module Status</p>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mt-2 mb-4"></hr>
      {modules.map((module) => (
        <div
          key={module.name}
          className="flex items-center justify-between space-x-2"
        >
          <p className="text-md font-medium">{module.name}</p>
          <div
            className={`${
              module.status === "CONNECTED"
                ? "bg-green-400"
                : module.status === "DISCONNECTED"
                ? "bg-white"
                : "bg-red-600"
            } w-4 h-4 rounded-full`}
          ></div>
        </div>
      ))}
    </div>
  );
};

const ManualControlPanel = () => {
  return (
    <div className="max-w-xs p-6 bg-dark border border-dark rounded-lg">
      <p className="text-lg font-bold">Manual Controls</p>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mt-2 mb-4"></hr>
      <div>
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-full"
        >
          Deploy Drogue
        </button>
        <br />
        <button
          type="button"
          className="text-gray-900 bg-gray-200 border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-full"
        >
          Deploy Main
        </button>
      </div>
    </div>
  );
};

const DiagnosticsPanel = () => {
  const [diagnostics, setDiagnostics] = useState([
    {
      name: "Data Rate",
      identifier: "data_rate",
      unit: "Hz",
      value: 0,
    },
    {
      name: "Packet Age",
      identifier: "packet_age",
      unit: "ms",
      value: 0,
    },
    {
      name: "Voltage",
      identifier: "voltage",
      unit: "v",
      value: 0,
    },
    {
      name: "RSSI",
      identifier: "rssi",
      unit: "%",
      value: 0,
    },
    {
      name: "Pyros",
      identifier: "pyros",
      unit: "",
      value: "[0, 0]",
    },
    {
      name: "GPS Latitude",
      identifier: "gps_latitude",
      unit: "",
      value: 0,
    },
    {
      name: "GPS Longitude",
      identifier: "gps_longitude",
      unit: "",
      value: 0,
    },
    {
      name: "GPS Altitude",
      identifier: "gps_altitude",
      unit: "",
      value: 0,
    },
  ]);

  const midPoint = Math.ceil(diagnostics.length / 2);

  const firstHalfDiagnostics = diagnostics.slice(0, midPoint);
  const secondHalfDiagnostics = diagnostics.slice(midPoint);

  return (
    <div className="max-w-xl p-6 bg-dark border border-dark rounded-lg mb-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          {firstHalfDiagnostics.map((diagnostic) => (
            <div className="flex row" key={diagnostic.identifier}>
              <p className="text-white font-bold">{diagnostic.name}:&nbsp;</p>
              <p className="text-white">{diagnostic.value}</p>
              <p className="text-white">{diagnostic.unit}</p>
            </div>
          ))}
        </div>
        <div>
          {secondHalfDiagnostics.map((diagnostic) => (
            <div className="flex row" key={diagnostic.identifier}>
              <p className="text-white font-bold">{diagnostic.name}:&nbsp;</p>
              <p className="text-white">{diagnostic.value}</p>
              <p className="text-white">{diagnostic.unit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MissionTime = () => {
  return (
    <div className="text-center">
      <p className="text-lg font-bold">Mission Time</p>
      <p>00:00:00:00</p>
    </div>
  )
}

export default function Overview() {
  const graphOptions = [
    {
      title: "Altitude",
      constants: [
        {
          subtitle: "barometric",
          data: [
            {
              title: "barometric",
              x_coordinate: 0,
              y_coordinate: 0,
            },
            {
              title: "barometric",
              x_coordinate: 1,
              y_coordinate: 2,
            },
          ],
          x_constant: 0,
          y_constant: 0,
        },
        {
          subtitle: "kalman",
          data: [
            {
              title: "kalman",
              x_coordinate: 1,
              y_coordinate: 2,
            },
            {
              title: "kalman",
              x_coordinate: 2,
              y_coordinate: 4,
            },
          ],
          x_constant: 0,
          y_constant: 0,
        },
      ],
    },
    // {
    //   title: "Velocity",
    // },
  ];
  return (
    <Layout>
      <div className="flex row">
        {/* {graphOptions.map((graph) => (
        <Graph title={graph.title} data={graph.data} />
      ))} */}
        {/* <OverviewGraphs /> */}
        <div className="w-full p-4">
          <div className="flex row">
            <h1>Overview Screen</h1>
            <MissionTime />
            <DiagnosticsPanel />
          </div>
          <div>
            <GraphSection />
          </div>
        </div>
        <div className="p-4">
          <StagePanel />
          <StatusPanel />
          <ManualControlPanel />
        </div>
      </div>
    </Layout>
  );
}
