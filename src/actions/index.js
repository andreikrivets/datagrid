import fetchData from "../data/data";

const data = fetchData();

const createTableData = {
  type: "CREATE_DATA",
  data
};

export default createTableData;
