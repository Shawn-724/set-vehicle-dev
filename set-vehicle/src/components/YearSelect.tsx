import React from "react";
import { Select } from "antd";

const { Option } = Select;

interface YearSelectProps {
  year: number | undefined;
  onYearChange: (value: number | undefined) => void;
}

const YearSelect: React.FC<YearSelectProps> = ({ year, onYearChange }) => {
  const years = Array.from(
    { length: 2023 - 1995 + 1 },
    (_, index) => 2023 - index
  );

  return (
    <Select
      showSearch
      placeholder="1 | Year"
      value={year}
      onChange={onYearChange}
      style={{ width: 200, height: 50 }}
    >
      {years.map((year) => (
        <Option value={year}>{year}</Option>
      ))}
    </Select>
  );
};

export default YearSelect;
