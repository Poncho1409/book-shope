import { Controller, Get } from "@nestjs/common";
import { AutorService } from "./autor.service";

@Controller('autor/')
export class AutorController{

  constructor (
    private readonly autorService: AutorService
  ){}

  @Get()
  getAllAutors(){
    return { message: 'Hola mundo'}
  }
}