import React, { useEffect, useState } from "react";
import { Select } from "antd";
import axios from "axios";

const { Option } = Select;

interface ModelSelectProps {
  make: string | undefined;
  onModelChange: (model: string | undefined) => void;
}

const ModelSelect: React.FC<ModelSelectProps> = ({ make, onModelChange }) => {
  const [modelList, setmodelList] = useState<string[]>([]);
  const [selectedModel, setSelectedModel] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    if (!make) {
      setmodelList([]);
      setSelectedModel(undefined);
      return;
    }

    const url = `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${make}?format=json`;

    axios
      .get(url)
      .then((response) => {
        const modelNames = Array.from(
          new Set(
            response.data.Results.map(
              (item: { Model_Name: string }) => item.Model_Name
            )
          )
        ) as string[];
        setmodelList(modelNames);
        setSelectedModel(undefined);
      })
      .catch((error) => {
        console.error("Error fetching models:", error);
        setmodelList([]);
      });
  }, [make]);

  const handleModelChange = (value: string | undefined) => {
    setSelectedModel(value);
    onModelChange(value);
  };

  return (
    <Select
      showSearch
      placeholder="3 | Model"
      value={selectedModel}
      onChange={handleModelChange}
      style={{ width: 200 }}
      disabled={!make}
    >
      {modelList.map((model) => (
        <Option value={model}>{model}</Option>
      ))}
    </Select>
  );
};

export default ModelSelect;
