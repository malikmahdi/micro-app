import express from "express";
import UserController from "../controllers/UserController";
import ArtikelController from "../controllers/ArtikelController";
import PartaiController from "../controllers/PartaiController";
import PaslonController from "../controllers/PaslonController";
const Route = express.Router();

Route.get("/users", UserController.find);
Route.post("/user", UserController.create);
Route.patch("/user/:id", UserController.update);
Route.delete("/user/:id", UserController.delete);

Route.get("/articles", ArtikelController.find);
Route.post("/article", ArtikelController.create);
Route.patch("/article", ArtikelController.update);
Route.delete("/article/:id", ArtikelController.delete);

Route.get("/partaiAll", PartaiController.find);
Route.post("/partai", PartaiController.create);
Route.delete("/partai/:id", PartaiController.delete);

Route.get("/paslonAll", PaslonController.find);
Route.post("/paslon", PaslonController.create);
Route.delete("/paslon/:id", PaslonController.delete);

export default Route;
