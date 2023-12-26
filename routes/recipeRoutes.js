let express = require("express");
let router = express.Router()
let controller = require("../controllers/recipeControllers")

//Basic Recipe Functions
router.get("/recipes", controller.listRecipes)
router.get("/recipes/:id", controller.showRecipe)
router.post("/recipes", controller.createRecipe)
router.put("/recipes/:id", controller.updateRecipe)
router.delete("/recipes/:id", controller.deleteRecipe)

//Modifying Recipe
router.post("/recipe/:id/ingredients", controller.addIngredients)
router.post("/recipes/:id/instructions", controller.addInstructions)
router.put("/recipes/:id/ingredients", controller.updateIngredients)
router.put("/recipes/:id/instructions", controller.updateInstructions)






module.exports = router;