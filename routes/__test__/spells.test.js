
const request = require('supertest');
const app = require ('../../index');

/**
 * Testing get all spells
 */

describe("GET /spell", ()=>{
  it("respond with json containing a list of all spells", (done) => {
    request(app)
      .get("/spell")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  })
});

describe("GET /spell/:id", () => {
  it("respond with json containing a single spell", (done) => {
    request(app)
      .get("/spell/63644b773931e86af28d94b9")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  })
  it("respond with a 500 status code", (done) => {
    request(app)
      .get("/spell/636441e86af28d94b9")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(500, done);
  })
});
/**
 * Testing POST spell endpoint
 */
 describe("POST /spell", () => {
  it("respond with 201 created", (done) => {
    const data = {
      level: "9th",
      name: "passy",
      casting_time: "1 Action",
      duration: "Instantaneous",
      range: "150ft(30 ft)",
      attack_save: "CON Save",
      effect: " Necrotic",
    };
    request(app)
      .post("/spell")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  })});