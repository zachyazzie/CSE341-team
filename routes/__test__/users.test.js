const usersRouter = require("../users");
const routesFor = require("./routesFor"); // see helper function
const request = require("supertest");
const app = require("../../index");

const routes = routesFor(usersRouter);

describe("routes", () => {
  describe("/", () => {
    it("supports http GET", () => {
      expect(routes["/"]).toContain("get");
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

describe("GET /users/", () => {
  it("respond with json content type and 200 status", async () => {
    const response = await request(app)
      .get("/users/")
      .set("Accept", "application/json")
      .set('Authorization', 'bearer ' + process.env.ACCESS_TOKEN);
    expect(response.headers["content-type"]).toEqual(
      "application/json; charset=utf-8"
    );
    expect(response.status).toEqual(200);
  });
});