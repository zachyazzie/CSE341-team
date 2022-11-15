
const request = require('supertest');
const app = require ('../../index');

/**
 * Testing get all characters
 */

describe("GET /characters/all", ()=>{
  it("respond with json containing a list of all characters", (done) => {
    request(app)
      .get("/characters/all")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  })
});

describe("GET /characters/:id", () => {
  it("respond with json containing a single spell", (done) => {
    request(app)
      .get("/characters/63726339d4b31303a670dbb9")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  })
});
