const weaponsRouter = require("../weapons");
const routesFor = require("./routesFor"); // see helper function
const request = require("supertest");
const app = require("../../index");

const routes = routesFor(weaponsRouter);

describe("routes", () => {
  describe("/", () => {
    it("supports http GET All", () => {
      expect(routes["/all"]).toContain("get");
    });

    it("supports http POST Create", () => {
      expect(routes["/create"]).toContain("post");
    });

    it("supports http GET postId", () => {
      expect(routes["/one/:postId"]).toContain("get");
    });

    it("supports http PUT postId", () => {
      expect(routes["/:postId"]).toContain("put");
    });

    it("supports http DELETE postId", () => {
      expect(routes["/:postId"]).toContain("delete");
    });
  });
});

describe("GET /weapons/all", () => {
  it("respond with json content type and 200 status", async () => {
    const response = await request(app)
      .get("/weapons/all")
      .set("Accept", "application/json")
      .set('Authorization', 'bearer ' + process.env.ACCESS_TOKEN);
    expect(response.headers["content-type"]).toEqual(
      "application/json; charset=utf-8"
    );
    expect(response.status).toEqual(200);
  });
});

// describe("GET /weapons/one/:id", () => {
//   it("respond with json containing a single weapon", (done) => {
//     request(app)
//       .get("/weapons/one/6364104eee3a4185c678ca2a")
//       .set("Accept", "application/json")
//       .expect("Content-Type", /json/)
//       .expect(200, done);
//   })
// });
// /**
//  * Testing POST spell endpoint
//  */
//  describe("POST /weapons/create", () => {
//   it("respond with 201 created", (done) => {
//     const data = {
//       weaponName: "urling",
//       description: "passy",
//       category: "Action",
//       damage: "high",
//       damageType: "Neurotic",
//       itemRarity: "Rare",
//       properties: "cool",
//       weight: 3
//     };
//     request(app)
//       .post("/weapons/create", {
//         data
//       })
//       .set("Accept", "application/json")
//       .expect("Content-Type", /json/)
//       .expect(201)
//       .end((err) => {
//         if (err) return done(err);
//         done();
//       });
//   })});