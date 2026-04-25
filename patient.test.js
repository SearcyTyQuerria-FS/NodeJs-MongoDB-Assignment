const request = require("supertest");
const app = require("./app");
const Patient = require("./app/models/Patient");

jest.mock("./app/models/Patient");

describe("Patient API - Advanced Queries", () => {
  let mockQuery;

  beforeEach(() => {
    jest.clearAllMocks();

    mockQuery = {
      select: jest.fn().mockReturnThis(),
      sort: jest.fn().mockReturnThis(),
      skip: jest.fn().mockReturnThis(),
      limit: jest.fn().mockResolvedValue([
        {
          _id: "1",
          fullName: "John Doe",
          roomNumber: 101,
          isDischarged: false,
        },
        {
          _id: "2",
          fullName: "Jane Doe",
          roomNumber: 102,
          isDischarged: false,
        },
      ]),
    };

    Patient.find.mockReturnValue(mockQuery);
  });

  // Test for returning limited data based on a query string
  it("return limited data based on a query string", async () => {
    const res = await request(app).get("/api/v1/patients?roomNumber[gte]=100");
    expect(res.statusCode).toBe(200);
    expect(Patient.find).toHaveBeenCalledWith(
      expect.objectContaining({ "roomNumber[$gte]": 100 }),
    );
    expect(res.body.success).toBe(true);
    expect(res.body.data.length).toBeGreaterThan(0);
  });

  // Test for excluding specific fields using select
  it("exclude specific fields using select", async () => {
    const res = await request(app).get("/api/v1/patients?select=-isDischarged");
    expect(res.statusCode).toBe(200);
    expect(mockQuery.select).toHaveBeenCalledWith("-isDischarged");
  });

  // Test for applying skip and limit for pagination page 1
  it("apply skip and limit for pagination page 1", async () => {
    const res = await request(app).get("/api/v1/patients?page=1&limit=2");
    expect(res.statusCode).toBe(200);
    expect(mockQuery.skip).toHaveBeenCalledWith(0);
    expect(mockQuery.limit).toHaveBeenCalledWith(2);
  });

  // Test for applying skip and limit for pagination page 2
  it("apply skip and limit for pagination page 2", async () => {
    const res = await request(app).get("/api/v1/patients?page=2&limit=5");
    expect(res.statusCode).toBe(200);
    expect(mockQuery.skip).toHaveBeenCalledWith(5);
    expect(mockQuery.limit).toHaveBeenCalledWith(5);
  });

  // Test for returning the collection sorted in ascending order
  it("return the collection sorted in ascending order", async () => {
    const res = await request(app).get("/api/v1/patients?sort=fullName");
    expect(res.statusCode).toBe(200);
    expect(mockQuery.sort).toHaveBeenCalledWith("fullName");
  });

  // Test for returning the collection sorted in descending order
  it("return the collection sorted in descending order", async () => {
    const res = await request(app).get("/api/v1/patients?sort=-fullName");
    expect(res.statusCode).toBe(200);
    expect(mockQuery.sort).toHaveBeenCalledWith("-fullName");
  });
});
