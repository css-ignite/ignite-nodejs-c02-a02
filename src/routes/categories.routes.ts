/*
  Import do Express
  O Express é um framework para Node.js que permite criar rotas
  e aplicar middlewares
 */

import { Router } from "express";

/*
  Import das classes da aplicação
  Neste caso estou importando o CategoriesRepository para usar os métodos do repositório
  e o CreateCategoryService para criar uma nova categoria
 */

import { CategoriesRepository } from "../repositories/categoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

/*
  Instanciando as classes da aplicação
 */

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

/*
  Middleware para verificar se a categoria já existe
  antes de criar uma nova categoria
 */

function catecoryAlreadyExists(request, response, next) {
  /*
    Desestruturação do objeto request.params
    Aqui eu pego as informações da categoria que estão na URL
    Neste caso estou pegando o name da categoria
   */

  const { name } = request.body;

  /*
    Aqui eu chamo o método findByName do CategoriesRepository
    para verificar se a categoria existe
   */

  const categoryAlreadyExists = categoriesRepository.findByName(name);

  /*
    Se a categoria já existir eu retorno um erro para o usuário
    e não deixo o usuário criar uma nova categoria
   */

  if (categoryAlreadyExists) {
    return response.status(400).json({ error: "Category already exists!" });
  }

  /*
    Aqui eu retorno o next() para que o middleware continue
   */

  return next();
}

/*
  Middleware para verificar se a categoria não existe
  antes de criar uma nova categoria
 */

function categoryDontExists(request, response, next) {
  /*
    Desestruturação do objeto request.params
    Aqui eu pego as informações da categoria que estão na URL
    Neste caso estou pegando o name da categoria
   */

  const { name } = request.params;

  /*
    Aqui eu chamo o método findByName do CategoriesRepository
    para verificar se a categoria existe
   */

  const categoryAlreadyExists = categoriesRepository.findByName(name);

  /*
    Se a categoria não existir eu retorno um erro para o usuário
    e não deixo ele efetuar a operação pois o recurso não existe
   */

  if (!categoryAlreadyExists) {
    return response.status(400).json({ error: "Category dont exists!" });
  }

  /*
    Aqui eu retorno o next() para que o middleware continue
   */

  return next();
}

/*
  Rota para listar todas as categorias
 */

categoriesRoutes.get("/", (request, response) => {
  const listOfCategories = categoriesRepository.list();
  return response.status(200).json(listOfCategories);
});

/*
  Rota para criar uma nova categoria
  Nesta rota eu passo o middleware catecoryAlreadyExists
  para verificar se a categoria já existe antes de criar uma nova categoria
 */

categoriesRoutes.post("/", catecoryAlreadyExists, (request, response) => {
  try {
    /*
      Desestruturação do objeto request.body
      Aqui eu pego as informações da categoria que estão no corpo da requisição
      Neste caso estou pegando o nome e a descrição da categoria do corpo da requisição
     */

    const { name, description } = request.body;

    /*
      Instanciando a classe CreateCategoryService
      e passando o repositório de categorias como parâmetro
     */

    const createCategoryService = new CreateCategoryService(
      categoriesRepository
    );

    /*
      Executando o método execute da classe CreateCategoryService
      e passando o nome e a descrição da categoria como parâmetro
     */

    const category = createCategoryService.execute({ name, description });

    /*
      Retornando a categoria criada
      Junto envio o status 201 que significa que a categoria foi criada
     */

    return response.status(201).json({
      message: "Category created successfully!",
      data: category,
    });
  } catch (error) {
    /*
      En caso de erro, retorno o status 400 e o erro
      Poderia ser qualquer outro status, mas o 400 é o mais adequado
     */

    return response.status(400).json({
      message: "Failed to create category!",
      data: error,
    });
  }
});

/*
  Aqui eu exporto a rota para que ela possa ser usada no arquivo de rotas principal
 */

export { categoriesRoutes };
