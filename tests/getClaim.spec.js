const fixtures = require('../fixtures/getClaim');

describe('GET /get_claimable/{hash_string}', () => {
  it('should be online', () => {
    return fixtures
      .getClaimable(process.env.WALLET_HASH)
      .expect(200)
      .then(response => {
        expect(response.body).toEqual(expect.anything());
      });
  });
});

describe('GET /get_claimed/{hash_string}', () => {
  it('should be online', () => {
    return fixtures
      .getClaimed(process.env.WALLET_HASH)
      .expect(200)
      .then(response => {
        expect(response.body).toEqual(expect.anything());
      });
  });
});

describe('GET /get_unclaimed/{hash_string}', () => {
  it('should be online', () => {
    return fixtures
      .getUnclaimed(process.env.WALLET_HASH)
      .expect(200)
      .then(response => {
        expect(response.body).toEqual(expect.anything());
      });
  });
});
