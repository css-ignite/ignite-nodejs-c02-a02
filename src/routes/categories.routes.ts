import { Router } from "express";

import { CategoriesRepository } from "../repositories/categoriesRepository";

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

categoriesRoutes.get("/", (request, response) => {
  const listOfCategories = categoriesRepository.list();
  return response.status(200).json(listOfCategories);
});

categoriesRoutes.post("/", catecoryAlreadyExists, (request, response) => {
  try {
    const { name, description } = request.body;
    const category = categoriesRepository.create({ name, description });

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
