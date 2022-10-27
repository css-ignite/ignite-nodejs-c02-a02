import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./spacifications.routes";
import { swaggerRoutes } from "./swagger.routes";

const router = Router();

/**
 * @openapi
 * /categories:
 *   post:
 *     tags:
 *       - categories
 *     summary: Cadastro de categorias
 *     description: Cadastrar uma nova categoria
 *     operationId: addCategory
 *     requestBody:
 *       description: Criar uma categoria
 *       content:
 *        application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *       required: true
 *     responses:
 *      '200':
 *        description: Successful operation
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: Mensagem de sucesso.
 *                  example: Category created successfully!
 *                data:
 *                  $ref: '#/components/schemas/Category'
 *      '405':
 *        description: Invalid input
 *   get:
 *     tags:
 *       - categories
 *     summary: Listar categorias
 *     description: Listar todas as categorias cadastradas
 *     responses:
 *      '200':
 *        description: Successful operation
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                  $ref: '#/components/schemas/Category'
 * /categories/{name}:
 *   get:
 *     tags:
 *       - categories
 *     summary: Listar categorias
 *     description: Listar categorias pelo nome
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
 *        description: Successful operation
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Category'
 *       400:
 *         description: Category dont exists!
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiError'
 */
router.use("/categories", categoriesRoutes);

/**
 * @openapi
 * /specifications:
 *   post:
 *     tags:
 *       - especificações
 *     summary: Cadastro de especificações
 *     description: Cadastrar uma nova especificação
 *     operationId: addSpecifications
 *     requestBody:
 *       description: Criar uma especificação
 *       content:
 *        application/json:
 *           schema:
 *             $ref: '#/components/schemas/Specifications'
 *       required: true
 *     responses:
 *      '200':
 *        description: Successful operation
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: Mensagem de sucesso.
 *                  example: Specifications created successfully!
 *                data:
 *                  $ref: '#/components/schemas/Specifications'
 *      '400':
 *        description: Specifications already exists!
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ApiError'
 *   get:
 *     tags:
 *       - especificações
 *     summary: Listar especificações
 *     description: Listar todas as especificações cadastradas
 *     responses:
 *      '200':
 *        description: Successful operation
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                  $ref: '#/components/schemas/Specifications'
 * /specifications/{name}:
 *   get:
 *     tags:
 *       - especificações
 *     summary: Listar especificações
 *     description: Listar especificações pelo nome
 *     operationId: getSpecificationsByName
 *     parameters:
 *       - name: name
 *         in: path
 *         description: Nome da especificação
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Specifications'
 *       400:
 *         description: Specifications dont exists!
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiError'
 */
router.use("/specifications", specificationsRoutes);

router.use(swaggerRoutes);

export { router };
