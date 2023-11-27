import Layout from "../components/Layout";
import { useState } from "react";

type selectionTypes = "Velocity" | "Acceleration" | "Temperature" | "Altitude";

const SelectionPanel = () => {
  const [selections, setSelections] = useState<selectionTypes[]>([]);

  const selectionList = [
    {
      name: "Velocity",
    },
    {
      name: "Acceleration",
    },
    {
      name: "Temperature",
    },
    {
      name: "Altitude",
    },
  ];

  const handleClick = (selectionName: selectionTypes) => {
    setSelections((prevSelection) => {
      const newSelections = new Set(prevSelection);
      if (newSelections.has(selectionName)) {
        newSelections.delete(selectionName);
      } else {
        newSelections.add(selectionName);
      }
      return [...newSelections];
    });
  };
  return (
    <div className="max-w-xs p-6 bg-dark border border-dark rounded-lg mb-4">
      <p className="text-lg font-bold">Select Data</p>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mt-2 mb-4"></hr>
      {selectionList.map((selection) => (
        <div
          key={selection.name}
          className="flex items-center justify-between space-x-2"
        >
          <div className="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              onClick={() => handleClick(selection.name)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox"
              className="text-md font-medium ml-3"
            >
              {selection.name}
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Logging() {
  return (
    <Layout>
      <h1>Logging Screen</h1>
      <SelectionPanel />
    </Layout>
  );
}
