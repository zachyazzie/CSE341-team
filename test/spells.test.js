
const request = require( "supertest");

const baseURL = 'http://localhost:8080';

// First test made
describe("Get all spells", () => {
    it("should get all spells", async () => {
        const response = await request(baseURL).get("/spell")
        expect(response.statusCode).toBe(404);
        expect(response.body.error).toBe(undefined);
    });
  });