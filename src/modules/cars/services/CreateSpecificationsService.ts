import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationsService {
  constructor(private categoriesRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest) {
    try {
      return this.categoriesRepository.create({ name, description });
    } catch (error) {
      throw new Error("Create Specifications failed!");
    }
  }
}

export { CreateSpecificationsService };
