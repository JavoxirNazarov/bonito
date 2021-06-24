const config = {
  screens: {
    Referal: {
      path: 'Referal/:id',
      parse: {
        id: (id) => `${id}`,
      },
    },
  },
};

export const linking = {
  prefixes: ['bonito://app'],
  config,
};
