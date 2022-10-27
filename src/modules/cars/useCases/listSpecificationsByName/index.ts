import { SpecificationsRepository } from "../../repositories/SpecificationsRepository";
import { ListSpecificationsByNameController } from "./ListSpecificationsByNameController";
import { ListSpecificationsByNameUseCase } from "./ListSpecificationsByNameUseCase";

const specificationsRepository = SpecificationsRepository.getInstance();

const listSpecificationsByNameUseCase = new ListSpecificationsByNameUseCase(
  specificationsRepository
);

const listSpecificationsByNameController =
  new ListSpecificationsByNameController(listSpecificationsByNameUseCase);

export { listSpecificationsByNameController };
