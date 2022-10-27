import { SpecificationsModel } from "../models/SpecificationsModel";
import {
  ISpecificationsRepository,
  ICreateSpecificationsDTO,
} from "./ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private Specifications: SpecificationsModel[];
  constructor() {
    this.Specifications = [];
  }

  create({ name, description }: ICreateSpecificationsDTO) {
    const Specifications = new SpecificationsModel();

    Object.assign(Specifications, {
      name,
      description,
      created_at: new Date(),
    });

    this.Specifications.push(Specifications);

    return Specifications;
  }

  list() {
    return this.Specifications;
  }

  findByName(name: string) {
    const Specifications = this.Specifications.find(
      (Specifications) => Specifications.name === name
    );

    return Specifications;
  }
}

export { SpecificationsRepository };
