import { Category } from "../models/CategoryModel";

/*
    Interface para tipar o objeto que será passado como parâmetro para o método execute
    do CreateCategoryService.
  */

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

/*
    Interface de contrato para tipar o objeto que será passado como parâmetro para o método execute
    dos services.

    Este contrato serve para garantir que o service de criação de categoria
    receberá um objeto que implemente o contrato ICategoryRepository
    e assim garantir que o service de criação de categoria não dependa diretamente
    do repositório de categoria, ele depende apenas do contrato
    ICategoryRepository

    Agora, se eu quiser trocar o repositório de categoria por outro
    eu não preciso alterar o service de criação de categoria
    pois o service de criação de categoria não depende diretamente
    do repositório de categoria, ele depende apenas do contrato
    ICategoryRepository

    Este é o conceito de Liskov Substitution Principle onde eu posso substituir uma classe
    por outra que implemente o mesmo contrato
 */

interface ICategoryRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoryRepository, ICreateCategoryDTO };
