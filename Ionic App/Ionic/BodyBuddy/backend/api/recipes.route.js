import express from 'express';
import RecipesController from "./recipesController.js";

const router = express.Router();

router.route("/").get( RecipesController.apiGetRecipes );

export default router;