import React from "react";
import { Provider } from "react-redux";

import store from "./store";

// import Header from "./components/header/header";
import TableMain from "./components/table/table";

const App = () => {
  return (
    <Provider store={store}>
      {/* <Header /> */}
      <TableMain />
    </Provider>
  );
};

export default App;
