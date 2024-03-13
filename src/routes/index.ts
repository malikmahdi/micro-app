import express from "express";
import UserController from "../controllers/UserController";
import ArticleController from "../controllers/ArticleController";
import PartaiController from "../controllers/PartaiController";
import PaslonController from "../controllers/PaslonController";
const Route = express.Router();

Route.post("/user", UserController.create);
Route.get("/users", UserController.find);
Route.get("/user/:id", UserController.findOne);
Route.patch("/user/:id", UserController.update);
Route.delete("/user/:id", UserController.delete);

Route.post("/article", ArticleController.create);
Route.get("/articles", ArticleController.find);
Route.get("/article/:id", ArticleController.findOne);
Route.patch("/article/:id", ArticleController.update);
Route.delete("/article/:id", ArticleController.delete);

Route.post("/partai", PartaiController.create);
Route.get("/partaiAll", PartaiController.findAll);
Route.get("/partai/:id", PartaiController.findOne);
Route.patch("/partai/:id", PartaiController.update);
Route.delete("/partai/:id", PartaiController.delete);

Route.post("/paslon", PaslonController.create);
Route.get("/paslonAll", PaslonController.findAll);
Route.get("/paslon/:id", PaslonController.findOne);
Route.patch("/paslon/:id", PaslonController.update);
Route.delete("/paslon/:id", PaslonController.delete);

export default Route;
