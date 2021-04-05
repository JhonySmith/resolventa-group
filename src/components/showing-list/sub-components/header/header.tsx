import React, { useState } from "react";
import FilterSelect from "./filter-select/filter-select";

interface HeaderProps {
  filteredField?: {
    label: string;
    value: string;
    indicator: string;
  }[];
  text: string;
  getCurrentURL(): string;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { filteredField, text, getCurrentURL } = props;
  const [filterListOpened, setFilterListOpened] = useState(false);
  return (
    <th>
      {text}
      {filteredField ? (
        <button
          onClick={() => {
            setFilterListOpened(!filterListOpened);
          }}
        >
          Фильтровать
        </button>
      ) : (
        ""
      )}
      {filterListOpened && filteredField ? (
        <FilterSelect
          filters={filteredField}
          setFilterListOpened={setFilterListOpened}
          getCurrentURL={getCurrentURL}
        />
      ) : (
        ""
      )}
    </th>
  );
};

export default Header;
