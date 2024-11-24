import React from "react";
import { Select } from "antd";

const { Option } = Select;

interface YearSelectProps {
  selectedYear: number | undefined;
  onYearChange: (value: number) => void;
}

const YearSelect: React.FC<YearSelectProps> = ({
  selectedYear,
  onYearChange,
}) => {
  const years = Array.from(
    { length: 2023 - 1995 + 1 },
    (_, index) => 2023 - index
  );

  return (
    <Select
      showSearch
      placeholder="1 | Year"
      value={selectedYear}
      //   onSelect={(value) => onYearChange(value as number)}
      onChange={onYearChange}
      style={{ width: 200 }}
    >
      {years.map((year) => (
        <Option value={year}>{year}</Option>
      ))}
    </Select>
  );
};

export default YearSelect;
