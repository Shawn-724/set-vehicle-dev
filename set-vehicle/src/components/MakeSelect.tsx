import React, { useEffect, useState } from "react";
import { Select } from "antd";
import axios from "axios";

const { Option } = Select;

interface MakeSelectProps {
  year: number | undefined;

  onMakeChange: (make: string | undefined) => void;
}

const MakeSelect: React.FC<MakeSelectProps> = ({
  year,

  onMakeChange,
}) => {
  const [makeList, setMakeList] = useState<string[]>([]);
  const [selectedMake, setSelectedMake] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    if (!year) {
      setMakeList([]);
      setSelectedMake(undefined);
      return;
    }

    const url = `https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForManufacturerAndYear/mer?year=${year}&format=json`;

    axios
      .get(url)
      .then((response) => {
        const makeNames = Array.from(
          new Set(
            response.data.Results.map(
              (item: { MakeName: string }) => item.MakeName
            )
          )
        ) as string[];
        setMakeList(makeNames);
        setSelectedMake(undefined);
      })
      .catch((error) => {
        console.error("Error fetching makes:", error);
        setMakeList([]);
      });
  }, [year]);

  const handleMakeChange = (value: string | undefined) => {
    setSelectedMake(value);
    onMakeChange(value);
  };

  return (
    <Select
      showSearch
      placeholder="2 | Make"
      value={selectedMake}
      onChange={handleMakeChange}
      style={{ width: 200 }}
      disabled={!year}
    >
      {makeList.map((make) => (
        <Option value={make}>{make}</Option>
      ))}
    </Select>
  );
};

export default MakeSelect;
