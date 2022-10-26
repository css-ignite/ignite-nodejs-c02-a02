/*
  Import das classes da aplicação
  Neste caso estou importando o Category para tipar o objeto category
  e para criar uma nova categoria
 */

import { Category } from "../models/category";

/*
  Interface para tipar o objeto que será passado como parâmetro para o método execute
  do CreateCategoryService.
*/

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

/*
  Repositório de categorias
  Aqui eu crio uma classe para abstrair a lógica de manipulação de dados
  e deixar o código mais limpo e organizado
 */

class CategoriesRepository {
  /*
    Variável privada para armazenar as categorias
   */

  private categories: Category[];

  /*
    Método constuctor para instaciar o objeto para armazenar as categorias
   */

  constructor() {
    this.categories = [];
  }

  /*
    Método para criar uma nova categoria
    Aqui eu crio uma nova categoria e passo o objeto com as informações da categoria
   */

  create({ name, description }: ICreateCategoryDTO) {
    /* 
      Constante para armazenar a nova categoria
    */

    const category = new Category();

    /*
      Aqui eu passo as informações da categoria para a nova categoria
      O Objtect.assign é uma função do javascript que recebe dois parâmetros
      o primeiro é o objeto que será alterado e o segundo é o objeto que será
      usado para alterar o primeiro objeto
     */

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    /*
      Aqui eu adiciono a nova categoria no array de categorias
     */

    this.categories.push(category);

    /*
      Aqui eu retorno a nova categoria
     */

    return category;
  }

  /*
    Método para retornar a lista de categorias
    Aqui eu retorno a lista de categorias
   */

  list() {
    /*
      Aqui eu retorno a lista de categorias
     */

    return this.categories;
  }

  /*
    Método para retornar uma categoria pelo nome
    Aqui eu retorno uma categoria pelo nome
   */

  findByName(name: string) {
    /*
      Constante para armazenar a categoria encontrada
     */

    const category = this.categories.find((category) => category.name === name);

    /*
      Aqui eu retorno a categoria localizada pelo nome
     */
    return category;
  }
}

/*
  Aqui eu exporto a classe CategoriesRepository para que ela possa ser usada em outros arquivos
 */

export { CategoriesRepository };
