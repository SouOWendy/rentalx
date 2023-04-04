import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationServices {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({name, description}: IRequest): void {
    if (this.specificationsRepository.findByName(name)) // specification already exists
      throw new Error("Specification already exists");
    this.specificationsRepository.create({name, description});
  }
}

export { CreateSpecificationServices };