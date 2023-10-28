const request = require("supertest");
const app = require("../app.js");

describe("List All Todo", () => {
  it("GET /mytodo should return a list of active items", async (done) => {
    const response = await request(app).get("/mytodo");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);

    done();
  }, 10000);
});
describe("Detail Todo", () => {
  it("GET /mytodo/:id should return a single todo item", async (done) => {
    const todoId = 1;
    const response = await request(app).get(`/mytodo/${todoId}`);
    expect(response.status).toBe(200);

    done();
  });
});
describe("Create Todo", () => {
  it("POST /mytodo should create a new todo item", async (done) => {
    const newTodo = {
      title: "New Todo",
      description: "Description of the new todo",
    };
    const response = await request(app).post("/mytodo").send(newTodo);
    expect(response.status).toBe(200);

    done();
  });
});
describe("Delete Todo", () => {
  it("DELETE /mytodo/:id should mark a todo item as inactive", async (done) => {
    const todoId = 1;
    const response = await request(app).delete(`/mytodo/${todoId}`);
    expect(response.status).toBe(200);

    done();
  });
});
