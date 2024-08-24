import { Injectable } from "@nestjs/common";
import { AutorRepository } from "./autor.repository";

@Injectable()
export class AutorService{
  constructor(
    private readonly autorRepository: AutorRepository
  ) {}

  
}