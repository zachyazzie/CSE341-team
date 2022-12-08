const charactersRouter = require("../characters");
const routesFor = require("./routesFor"); // see helper function
const request = require("supertest");
const app = require("../../index");

const routes = routesFor(charactersRouter);

describe("routes", () => {
  describe("/", () => {
    it("supports http GET All", () => {
      expect(routes["/all"]).toContain("get");
    });

    it("supports http POST Create", () => {
      expect(routes["/create"]).toContain("post");
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

describe("GET /characters/all", () => {
  it("respond with json content type and 200 status", async () => {
    const response = await request(app)
      .get("/characters/all")
      .set("Accept", "application/json")
      .set('Authorization', 'bearer ' + process.env.ACCESS_TOKEN);
    expect(response.headers["content-type"]).toEqual(
      "application/json; charset=utf-8"
    );
    expect(response.status).toEqual(200);
  });
});

// describe("GET /characters/:id", () => {
//   it("respond with json containing a single spell", (done) => {
//     request(app)
//       .get("/characters/63726339d4b31303a670dbb9")
//       .set("Accept", "application/json")
//       .expect("Content-Type", /json/)
//       .expect(200, done);
//   })
// });
