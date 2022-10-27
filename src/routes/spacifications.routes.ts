import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationsService } from "../modules/cars/services/CreateSpecificationsService";

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

function catecoryAlreadyExists(request, response, next) {
  const { name } = request.body;

  const specifications = specificationsRepository.findByName(name);

  if (specifications) {
    return response
      .status(400)
      .json({ error: "Specifications already exists!" });
  }

  response.Specifications = specifications;

  return next();
}

function SpecificationsDontExists(request, response, next) {
  const { name } = request.params;

  const Specifications = specificationsRepository.findByName(name);

  if (!Specifications) {
    return response.status(400).json({ error: "Specifications dont exists!" });
  }

  response.Specifications = Specifications;

  return next();
}

specificationsRoutes.get("/", (request, response) => {
  const listOfSpecifications = specificationsRepository.list();

  return response.status(200).json(listOfSpecifications);
});

specificationsRoutes.get(
  "/:name",
  SpecificationsDontExists,
  (request, response) => {
    const { name } = request.params;

    const Specifications = specificationsRepository.findByName(name);

    return response.status(200).json(Specifications);
  }
);

specificationsRoutes.post("/", catecoryAlreadyExists, (request, response) => {
  try {
    const { name, description } = request.body;

    const createSpecificationsService = new CreateSpecificationsService(
      specificationsRepository
    );

    const Specifications = createSpecificationsService.execute({
      name,
      description,
    });

    return response.status(201).json({
      message: "Specifications created successfully!",
      data: Specifications,
    });
  } catch (error) {
    return response.status(400).json({
      message: "Failed to create Specifications!",
      data: error,
    });
  }
});

export { specificationsRoutes };
