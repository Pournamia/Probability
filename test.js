const request = require("supertest");
const app = require("./probabilitynode");

describe("GET /probabilities", () => {
  it("responds with probabilities array when no k is provided", async () => {
    const response = await request(app).get("/probabilities");

    expect(response.status).toEqual(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body).toHaveLength(94);
  });

  it("responds with probability object when k is provided", async () => {
    const k = 10;
    const response = await request(app)
      .get("/probabilities")
      .set("k", k.toString());

    expect(response.status).toEqual(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body).toHaveLength(1);
  });
});
