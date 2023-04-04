import { Router } from "express";
import { CreateSpecificationServices } from "../modules/cars/services/CreateSpecificationServices";
import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (req, res) => {
  const { name, description } = req.body;
  const createSpecificationServices = new CreateSpecificationServices(specificationsRepository);

  createSpecificationServices.execute({name, description});

  return res.status(201).send();
})

specificationsRoutes.get("/", (req, res) => {
  return res.json(specificationsRepository.list());
});

export { specificationsRoutes };