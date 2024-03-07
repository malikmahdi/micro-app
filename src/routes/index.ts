import express from "express";
import UseController from "../controllers/UserController";
import UserController from "../controllers/UserController";
import ArtikelController from "../controllers/ArtikelController";
import PartaiController from "../controllers/PartaiController";
import PaslonController from "../controllers/PaslonController";
const Route = express.Router();

Route.get("/users", UseController.find);
Route.post("/user", UseController.create);
Route.patch("/users/:id", UseController.update);
Route.patch("/users/:id", UseController.patch);
Route.delete("/user/:id", UserController.delete);

Route.get("/artikels", ArtikelController.find);
Route.post("/artikel", ArtikelController.create);
Route.delete("/artikel/:id", ArtikelController.delete);

Route.get("/partaiAll", PartaiController.find);
Route.post("/partai", PartaiController.create);
Route.delete("/partai/:id", PartaiController.delete);

Route.get("/paslonAll", PaslonController.find);
Route.post("/paslon", PaslonController.create);
Route.delete("/paslon/:id", PaslonController.delete);

export default Route;
