type config = {
  paper: {
    baseUrl: string;
    baseApiUrl: string;
    kandidat: {
      email: string;
      password: string;
      ttl: string;
    };
  };
};

export default Cypress.config() as unknown as config;
