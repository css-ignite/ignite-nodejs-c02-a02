import { SpecificationsRepository } from "../../repositories/SpecificationsRepository";
import { CreateSpecificationsController } from "./CreateSpecificationsController";
import { CreateSpecificationsUseCase } from "./CreateSpecificationsUseCase";

const specificationsRepository = SpecificationsRepository.getInstance();

const createSpecificationsUseCase = new CreateSpecificationsUseCase(
  specificationsRepository
);

const createSpecificationsController = new CreateSpecificationsController(
  createSpecificationsUseCase
);

export { createSpecificationsController };
