import { CategoriesRepository } from "../repositories/categoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {
    // Comentado pois o private no construtor abstrai este comando
    // this.categoriesRepository = categoriesRepository;
  }

  execute({ name, description }: IRequest) {
    try {
      return this.categoriesRepository.create({ name, description });
    } catch (error) {
      throw new Error("Create category failed!");
    }
  }
}

export { CreateCategoryService };
