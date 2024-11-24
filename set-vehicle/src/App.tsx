import React, { useState } from "react";
import YearSelect from "./components/YearSelect";
import MakeSelect from "./components/MakeSelect";
import ModelSelect from "./components/ModelSelect";
import { Select } from "antd";

const App: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number | undefined>(
    undefined
  );
  const [selectedMake, setSelectedMake] = useState<string | undefined>(
    undefined
  );
  const [selectedModel, setSelectedModel] = useState<string | undefined>(
    undefined
  );

  const handleYearChange = (year: number | undefined): void => {
    setSelectedYear(year);
    setSelectedMake(undefined);
    setSelectedModel(undefined);
  };

  const handleMakeChange = (make: string | undefined): void => {
    setSelectedMake(make);
    setSelectedModel(undefined);
  };

  const handleModelChange = (model: string | undefined): void => {
    setSelectedModel(model);
  };

  return (
    <div className="App" style={{ padding: "20px" }}>
      <h1>SET YOUR VEHICLE</h1>
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <YearSelect
          selectedYear={selectedYear}
          onYearChange={handleYearChange}
        />
        <MakeSelect year={selectedYear} onMakeChange={handleMakeChange} />
        <ModelSelect make={selectedMake} onModelChange={handleModelChange} />
        <Select placeholder="4 | Engine" disabled />
      </div>

      {selectedYear && <p>You selected the year: {selectedYear}</p>}
      {selectedMake && <p>You selected the make: {selectedMake}</p>}
      {selectedModel && <p>You selected the make: {selectedModel}</p>}
    </div>
  );
};

export default App;
