/*
  Código criado para estudos do SOLID aplicando o conceito de 
  (SRP) Single Responsability Principle que diz que uma classe deve ter
  apenas uma responsabilidade, ou seja, uma classe deve ter apenas
  um motivo para ser alterada.
 */

import { CategoriesRepository } from "../repositories/categoriesRepository";

/*
  Interface para tipar o objeto que será passado como parâmetro para o método execute
  do CreateCategoryService.
*/

interface IRequest {
  name: string;
  description: string;
}

/*
  Classe responsável por instancia o service de criação de categoria.
  O código que não é de regra de negócio deve ficar fora do service e
  o service deve ser responsável apenas por executar a sua regra de negócio
*/

class CreateCategoryService {
  /*
    Método construtor para instanciar o service de criação de categoria
    Aqui eu não preciso mais instanciar o CategoriesRepository
    pois ele já está sendo instanciado no arquivo de rotas
    e passado como parâmetro para o service
  */

  constructor(private categoriesRepository: CategoriesRepository) {
    /* 
      Comentado pois o private no construtor abstrai este comando
      O constructor com private no parâmetro já faz a mesma coisa que o comentário abaixo

      this.categoriesRepository = categoriesRepository;

    */
  }

  execute({ name, description }: IRequest) {
    try {
      /*
        Aqui eu chamo o repository para criar uma nova categoria
        e passo o objeto com as informações da categoria
       */

      return this.categoriesRepository.create({ name, description });
    } catch (error) {
      /*
        Aqui eu poderia tratar o erro e retornar uma mensagem amigável para o usuário
        ou então eu poderia retornar o erro para o usuário e ele poderia tratar o erro
        como quiser
       */

      throw new Error("Create category failed!");
    }
  }
}

/*
  Aqui eu exporto a classe e não a instância dela
  pois eu quero que a instância seja feita no arquivo de rotas
  e não aqui
*/

export { CreateCategoryService };
