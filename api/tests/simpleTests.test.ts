import app from "..";
import { findMeasurements } from "../helpers/findMeasurement";
import { normalizeString } from "../helpers/normalizeString";
import request from "supertest";

describe("Basic test", () => {
  test("findMeasurements default return", () => {
    expect(
      findMeasurements(
        "mymeter-uid",
        "",
        "2024-19-06 00:00:00 00",
        "2024-19-06 00:00:00 00"
      )
    ).toStrictEqual({
      date: "2024-19-06 00:00:00+00",
      accumulatedEnergy: 0,
    });
  });
});

describe("Normalize String", () => {
  test("normalizeString", () => {
    expect(normalizeString("2024-19-06 00:00:00 00")).toStrictEqual(
      "2024-19-06 00:00:00+00"
    );
  });
});

describe("Test default GET", () => {
  test("/ route", async () => {
    const res = await request(app).get("/");
    expect(res.body).toEqual({ message: "Hello, world!" });
  });
});