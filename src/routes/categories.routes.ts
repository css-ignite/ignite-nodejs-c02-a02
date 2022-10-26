import { Router } from "express";

import { CategoriesRepository } from "../repositories/categoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

function catecoryAlreadyExists(request, response, next) {
  const { name } = request.body;
  const categoryAlreadyExists = categoriesRepository.findByName(name);
  if (categoryAlreadyExists) {
    return response.status(400).json({ error: "Category already exists!" });
  }
  return next();
}

function categoryDontExists(request, response, next) {
  const { name } = request.params;
  const categoryAlreadyExists = categoriesRepository.findByName(name);
  if (!categoryAlreadyExists) {
    return response.status(400).json({ error: "Category dont exists!" });
  }
  return next();
}

categoriesRoutes.get("/", (request, response) => {
  const listOfCategories = categoriesRepository.list();
  return response.status(200).json(listOfCategories);
});

categoriesRoutes.post("/", catecoryAlreadyExists, (request, response) => {
  try {
    const { name, description } = request.body;

    const createCategoryService = new CreateCategoryService(
      categoriesRepository
    );

    const category = createCategoryService.execute({ name, description });

    return response.status(201).json({
      message: "Category created successfully!",
      data: category,
    });
  } catch (error) {
    return response.status(400).json({
      message: "Failed to create category!",
      data: error,
    });
  }
});

export { categoriesRoutes };
