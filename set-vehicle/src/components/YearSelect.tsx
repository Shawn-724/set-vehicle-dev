import React, { useState } from "react";
import { Select } from "antd";

const { Option } = Select;

interface YearSelectProps {
  onYearChange: (value: number | undefined) => void;
}

const YearSelect: React.FC<YearSelectProps> = ({ onYearChange }) => {
  const [selectedYear, setSelectedYear] = useState<number | undefined>(
    undefined
  );
  const years: number[] = [];
  for (let i = 2023; i >= 1995; i--) {
    years.push(i);
  }

  return (
    <Select
      showSearch
      placeholder="1 | Year"
      onSelect={(value) => setSelectedYear(value)}
      value={selectedYear}
      onChange={onYearChange}
      style={{ width: 200, height: 50 }}
    >
      {years.map((item) => (
        <Option key={item} value={item}>
          {item}
        </Option>
      ))}
    </Select>
  );
};

export default YearSelect;
