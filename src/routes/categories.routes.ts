import { Router } from "express";
import { v4 as uuidV4 } from "uuid";

import ICategory from "../../models/category";

const categoriesRoutes = Router();

const categories: ICategory[] = [];

categoriesRoutes.get("/", (request, response) => {
  return response.status(200).json(categories);
});

categoriesRoutes.post("/", (request, response) => {
  try {
    const { name, description } = request.body;

    const category = {
      id: uuidV4(),
      name,
      description,
      created_at: new Date(),
    };

    categories.push(category);

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
