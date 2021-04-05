import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadData, setCurrentPage } from "../../actions/loadDataFromServer";
import { useLocation } from "react-router-dom";

import Header from "./sub-components/header/header";
import PaginationControl from "../pagination-control/pagination-control";

interface ShowingListProps {
  dataList: [{}];
  showingFields: {
    keyValue: string;
    showingText: string;
    fieldType?: string;
    filteredField?: {
      label: string;
      value: string;
      indicator: string;
    }[];
  }[];
}

const ShowingList: React.FC<ShowingListProps> = (props) => {
  const { dataList, showingFields } = props;
  const dispatch = useDispatch();

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();

  let page = "";
  let gender = "";
  let status = "";

  const getCurrentURL = (
    options: {
      page?: string;
      filter?: {
        key: string;
        value: string;
      };
      status?: string;
    } = {}
  ) => {
    page = options.page || query.get("page") || "1";
    gender = options.genre || query.get("gender") || "";
    status = options.status || query.get("status") || "";

    let genderQuery = gender ? `&gender=${gender}` : "";
    let statusQuery = status ? `&status=${status}` : "";

    return `?page=${page}${genderQuery}${statusQuery}`;
  };

  let url = getCurrentURL();

  useEffect(() => {
    dispatch(loadData(`https://rickandmortyapi.com/api/character/${url}`));
    console.log(123);
  }, [url]);

  const getFieldValue = (
    dataItem: { [key: string]: string },
    field: { keyValue: string; fieldType?: string }
  ) => {
    switch (field.fieldType) {
      case "image":
        return (
          <img src={dataItem[field.keyValue]} alt={dataItem[field.keyValue]} />
        );
      case "link":
        return (
          <a href={dataItem[field.keyValue]}>{dataItem[field.keyValue]}</a>
        );
      default:
        return dataItem[field.keyValue];
    }
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            {showingFields.map(
              ({ keyValue, showingText = keyValue, filteredField }) => (
                <Header
                  filteredField={filteredField}
                  text={showingText}
                  getCurrentURL={getCurrentURL}
                />
              )
            )}
          </tr>
        </thead>
        <tbody>
          {dataList.map((dataItem) => (
            <tr>
              {showingFields.map((field) => (
                <td>{getFieldValue(dataItem, field)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <PaginationControl currentPage={page} getCurrentURL={getCurrentURL} />
    </>
  );
};

export default ShowingList;
