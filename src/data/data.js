import Faker from "faker";

import eData from "./enum";

const fetchData = () => {
  Faker.seed(101);
  const makeData = () => {
    return {
      string: Faker.name.findName(),
      integer: Faker.address.zipCode(),
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

  return [...new Array(200)].map(() => makeData());
};

export default fetchData;
