import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface FilterSelectProps {
  filters: {
    label: string;
    value: string;
    indicator: string;
  }[];
  setFilterListOpened(isOpen: boolean): void;
  getCurrentURL(options: {}): string;
}

const FilterSelect: React.FC<FilterSelectProps> = (props) => {
  const { filters, setFilterListOpened, getCurrentURL } = props;

  const [choosenFilter, setChoosenFilter] = useState("");

  const closeFilterBlock = () => {
    setFilterListOpened(false);
  };

  useEffect(() => {
    document.addEventListener("click", closeFilterBlock);
    return () => {
      document.removeEventListener("click", closeFilterBlock);
    };
  }, []);

  let options: {
    [key: string]: string;
    page: string;
  } = {
    [filters[0].indicator]: choosenFilter,
    page: "1",
  };

  let urlLink = getCurrentURL(options);

  return (
    <form onClick={(evt) => evt.stopPropagation()}>
      <label>
        <input
          type="radio"
          name="filter"
          value=""
          onChange={(evt) => setChoosenFilter(evt.currentTarget.value)}
        />
        Без фильтра
      </label>
      {filters.map((filter) => (
        <label>
          <input
            type="radio"
            name="filter"
            value={filter.value}
            onChange={(evt) => setChoosenFilter(evt.currentTarget.value)}
          />
          {filter.label}
        </label>
      ))}
      <button
        onClick={(evt) => {
          evt.preventDefault();
        }}
      >
        <Link to={urlLink}>Применить фильтр</Link>
      </button>
    </form>
  );
};

export default FilterSelect;
