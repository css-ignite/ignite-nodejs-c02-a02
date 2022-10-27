import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory/index";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

function catecoryAlreadyExists(request, response, next) {
  const { name } = request.body;

  const category = categoriesRepository.findByName(name);

  if (category) {
    return response.status(400).json({ error: "Category already exists!" });
  }

  response.category = category;

  return next();
}

function categoryDontExists(request, response, next) {
  const { name } = request.params;

  const category = categoriesRepository.findByName(name);

  if (!category) {
    return response.status(400).json({ error: "Category dont exists!" });
  }

  response.category = category;

  return next();
}

categoriesRoutes.get("/", (request, response) => {
  const listOfCategories = categoriesRepository.list();

  return response.status(200).json(listOfCategories);
});

categoriesRoutes.get("/:name", categoryDontExists, (request, response) => {
  const { name } = request.params;

  const category = categoriesRepository.findByName(name);

  return response.status(200).json(category);
});

categoriesRoutes.post("/", catecoryAlreadyExists, (request, response) => {
  return createCategoryController.handle(request, response);
});

export { categoriesRoutes };
