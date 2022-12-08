const spellsRouter = require("../spell.routes");
const routesFor = require("./routesFor"); // see helper function
const request = require("supertest");
const app = require("../../index");

const routes = routesFor(spellsRouter);

describe("routes", () => {
  describe("/", () => {
    it("supports http GET", () => {
      expect(routes["/"]).toContain("get");
    });

    it("supports http POST", () => {
      expect(routes["/"]).toContain("post");
    });

    it("supports http GET id", () => {
      expect(routes["/:id"]).toContain("get");
    });

    it("supports http PUT id", () => {
      expect(routes["/:id"]).toContain("put");
    });

    it("supports http DELETE id", () => {
      expect(routes["/:id"]).toContain("delete");
    });
  });
});

describe("GET /spell/", () => {
  it("respond with json content type and 200 status", async () => {
    const response = await request(app)
      .get("/spell/")
      .set("Accept", "application/json")
      .set('Authorization', 'bearer ' + process.env.ACCESS_TOKEN);
    expect(response.headers["content-type"]).toEqual(
      "application/json; charset=utf-8"
    );
    expect(response.status).toEqual(200);
  });
});

// describe("GET /spell/:id", () => {
//   it("respond with json containing a single spell", (done) => {
//     request(app)
//       .get("/spell/63644b773931e86af28d94b9")
//       .set("Accept", "application/json")
//       .expect("Content-Type", /json/)
//       .expect(200, done);
//   })
// });
// /**
//  * Testing POST spell endpoint
//  */
//  describe("POST /spell", () => {
//   it("respond with 201 created", (done) => {
//     const data = {
//       level: "9th",
//       name: "passy",
//       casting_time: "1 Action",
//       duration: "Instantaneous",
//       range: "150ft(30 ft)",
//       attack_save: "CON Save",
//       effect: " Necrotic",
//     };
//     request(app)
//       .post("/spell")
//       .send(data)
//       .set("Accept", "application/json")
//       .expect("Content-Type", /json/)
//       .expect(200)
//       .end((err) => {
//         if (err) return done(err);
//         done();
//       });
//   })});
  