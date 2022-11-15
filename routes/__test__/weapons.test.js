
const request = require('supertest');
const app = require ('../../index');

/**
 * Testing get all weapons
 */

describe("GET /weapons/all", ()=>{
  it("respond with json containing a list of all weapons", (done) => {
    request(app)
      .get("/weapons/all")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  })
});

describe("GET /weapons/one/:id", () => {
  it("respond with json containing a single weapon", (done) => {
    request(app)
      .get("/weapons/one/6364104eee3a4185c678ca2a")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  })
});
/**
 * Testing POST spell endpoint
 */
 describe("POST /weapons/create", () => {
  it("respond with 201 created", (done) => {
    const data = {
      weaponName: "urling",
      description: "passy",
      category: "Action",
      damage: "high",
      damageType: "Neurotic",
      itemRarity: "Rare",
      properties: "cool",
      weight: 3
    };
    request(app)
      .post("/weapons/create", {
        data
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  })});