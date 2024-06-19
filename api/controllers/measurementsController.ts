import { NextFunction, Request, Response } from "express";
import { findMeasurements } from "../helpers/findMeasurement";

export const getMeasurements = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { deviceId } = req.params;
    const { resolution, startDate, endDate } = req.query;

    // Verifique se todos os parâmetros estão presentes e são do tipo string
    if (
      typeof deviceId !== "string" ||
      typeof resolution !== "string" ||
      typeof startDate !== "string" ||
      typeof endDate !== "string"
    ) {
      throw new Error("Parâmetros inválidos");
    }

    const response = findMeasurements(deviceId, resolution, startDate, endDate);

    res.status(200).json({ measurements: [response] });
  } catch (err) {
    next(err);
  }
};
