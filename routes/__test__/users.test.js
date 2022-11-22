const request = require('supertest');
const app = require ('../../index');

/**
 * Testing get all users
 */

describe("GET /users", ()=>{
  it("responds with json containing a list of all users", (done) => {
    request(app)
      .get("/users")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  })
});
