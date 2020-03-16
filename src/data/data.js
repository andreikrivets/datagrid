import Faker from "faker";

import eData from "./enum";

const fetchData = () => {
  Faker.seed(101);
  let i = 0;
  const makeData = () => {
    return {
      id: i,
      string: Faker.name.findName(),
      integer: Faker.random.number(),
      enum:
        eData[
          Faker.random
            .number()
            .toString()
            .slice(0, 1) - 1
        ],
      localDate: Faker.date.recent(),
      instant: Faker.date.recent().getTime(),
      object: {
        money: {
          currency: Faker.finance.currencyCode(),
          amount: Faker.finance.amount()
        }
      },
      bool: Faker.random.boolean()
    };
  };

  return [...new Array(25)].map(() => {
    i += 1;
    return makeData();
  });
};

export default fetchData;
