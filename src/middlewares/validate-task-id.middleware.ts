import type { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/app-error.js";

export const validateTaskId = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const id: unknown = req.params?.id;
  if (typeof id !== "string" || !id.trim()) {
    next(
      new AppError(
        "La solicitud contiene datos inválidos.",
        422,
        "VALIDATION_ERROR",
        [{ field: "id", message: "Debe ser texto no vacío." }],
      ),
    );
    return;
  }
  if (id.trim().length > 120) {
    next(
      new AppError(
        "La solicitud contiene datos inválidos.",
        422,
        "VALIDATION_ERROR",
        [{ field: "id", message: "No debe superar 120 caracteres." }],
      ),
    );
    return;
  }
  res.locals.taskId = id.trim();
  next();
};
