import React from "react";
import { useSelector } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";

import ShowingControl from "./components/showing-control/showing-control";

function App() {
  const data = useSelector((state: { data: [{}] }) => state.data);
  const loading = useSelector((state: { loading: boolean }) => state.loading);

  return (
    <Router>
      <>
        <ShowingList dataList={data} showingFields={showingFields || [{}]} />
      </>
    </Router>
  );
}

export default App;
