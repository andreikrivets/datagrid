import Faker from "faker";

const fetchData = () => {
  Faker.seed(101);
  const makeData = () => {
    return {
      string: Faker.name.findName(),
      integer: Faker.address.zipCode(),
      enum: [
        Faker.commerce.productAdjective(),
        Faker.commerce.productMaterial(),
        Faker.commerce.product()
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

  return [...new Array(50)].map(() => makeData());
};

export default fetchData;
