import React from "react";
import { Provider } from "react-redux";

import store from "./store/store";

// import Header from "./components/header/header";
import ConnectedTable from "./components/table/table-connected";

const App = () => {
  return (
    <Provider store={store}>
      {/* <Header /> */}
      <ConnectedTable />
    </Provider>
  );
};

export default App;
