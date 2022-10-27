interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  execute({ name, description }: IRequest) {
    console.log("teste");
  }
}

export { CreateSpecificationService };
