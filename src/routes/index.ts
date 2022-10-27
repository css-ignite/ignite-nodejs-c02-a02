import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./spacifications.routes";

const router = Router();

/**
 * @openapi
 * /categories:
 *   post:
 *     tags:
 *       - categories
 *     summary: categories
 *     description: Adicionar uma categoria
 *     operationId: addCategory
 *     requestBody:
 *       description: Criar uma categoria
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome da Categoria.
 *                 example: Nome da Categoria
 *               description:
 *                 type: string
 *                 description: Descrição da Categoria.
 *                 example: Descrição da Categoria
 *       required: true
 *     responses:
 *      '200':
 *        description: Successful operation
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Pet'
 *      '405':
 *        description: Invalid input
 *   get:
 *     tags:
 *       - categories
 *     summary: categories
 *     description: Listar categorias
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 * /categories/{name}:
 *   get:
 *     tags:
 *       - categories
 *     summary: categories
 *     description: Listar categoria pelo nome
 *     operationId: getCategoriesByName
 *     parameters:
 *       - name: name
 *         in: path
 *         description: Nome da categoria
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.use("/categories", categoriesRoutes);

/**
 * @openapi
 * /specifications:
 *   post:
 *     tags:
 *       - specifications
 *     summary: specifications
 *     description: Adicionar uma specifications
 *     operationId: addspecifications
 *     requestBody:
 *       description: Criar uma specifications
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome da specifications.
 *                 example: Nome da specifications
 *               description:
 *                 type: string
 *                 description: Descrição da specifications.
 *                 example: Descrição da specifications
 *       required: true
 *     responses:
 *      '200':
 *        description: Successful operation
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Pet'
 *      '405':
 *        description: Invalid input
 *   get:
 *     tags:
 *       - specifications
 *     summary: specifications
 *     description: Listar specifications
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 * /specifications/{name}:
 *   get:
 *     tags:
 *       - specifications
 *     summary: specifications
 *     description: Listar specification pelo nome
 *     operationId: getPetById
 *     parameters:
 *       - name: name
 *         in: path
 *         description: Nome da specification
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Retorna uma specifications.
 */
router.use("/specifications", specificationsRoutes);

export { router };
