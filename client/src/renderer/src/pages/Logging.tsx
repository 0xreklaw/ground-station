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

const SavePanel = () => {
  return (
    <div className="max-w-xs p-6 bg-dark border border-dark rounded-lg mb-4">
      <p className="text-lg font-bold">Saving Options</p>
      <button
        type="button"
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-full"
      >
        View in Folder
      </button>
      <button
        type="button"
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-full"
      >
        Save Logs
      </button>
    </div>
  );
};

const RawDataPanel = () => {
  return (
    <div className="max-w-xl p-6 bg-dark border border-dark rounded-lg mb-4"></div>
  );
};

export default function Logging() {
  return (
    <Layout>
      <div className="flex row">
        <div className="w-full p-4">
          <div className="flex row">
            <h1>Logging Screen</h1>
          </div>
          <div>
            <RawDataPanel />
          </div>
        </div>
        <div className="p-4">            
          <SelectionPanel />
          <SavePanel />
        </div>
      </div>
    </Layout>
  );
}
