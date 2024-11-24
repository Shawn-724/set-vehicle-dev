import React, { useState } from "react";
import YearSelect from "./components/YearSelect";
import MakeSelect from "./components/MakeSelect";
import ModelSelect from "./components/ModelSelect";
import TextSetYourVehicle from "./components/TextSetYourVehicle";
import { Select, Space } from "antd";

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
      <Space>
        <TextSetYourVehicle />

        <YearSelect year={selectedYear} onYearChange={handleYearChange} />
        <MakeSelect year={selectedYear} onMakeChange={handleMakeChange} />
        <ModelSelect make={selectedMake} onModelChange={handleModelChange} />
        <Select
          style={{ width: 200, height: 50 }}
          placeholder="4 | Engine"
          disabled
        />
      </Space>

      {selectedYear && selectedMake && selectedModel && (
        <p>
          You've selected {selectedYear} {selectedMake} {selectedModel}
        </p>
      )}
    </div>
  );
};

export default App;
