import { Router } from "express";

import { CategoriesRepository } from "../repositories/categoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.get("/", (request, response) => {
  const listOfCategories = categoriesRepository.list();
  return response.status(200).json(listOfCategories);
});

categoriesRoutes.post("/", (request, response) => {
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
