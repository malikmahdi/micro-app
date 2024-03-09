import express from "express";
import UserController from "../controllers/UserController";
import ArticleController from "../controllers/ArticleController";
import PartaiController from "../controllers/PartaiController";
import PaslonController from "../controllers/PaslonController";
const Route = express.Router();

Route.get("/users", UserController.find);
Route.get("/user/:id", UserController.findOne);
Route.post("/user", UserController.create);
Route.patch("/user/:id", UserController.update);
Route.delete("/user/:id", UserController.delete);

Route.get("/articles", ArticleController.find);
Route.get("/article/:id", ArticleController.findOne);
Route.post("/article", ArticleController.create);
Route.patch("/article/:id", ArticleController.update);
Route.delete("/article/:id", ArticleController.delete);

// Route.get("/partaiAll", PartaiController.find);
// Route.post("/partai", PartaiController.create);
// Route.delete("/partai/:id", PartaiController.delete);

// Route.get("/paslonAll", PaslonController.find);
// Route.post("/paslon", PaslonController.create);
// Route.delete("/paslon/:id", PaslonController.delete);

export default Route;
