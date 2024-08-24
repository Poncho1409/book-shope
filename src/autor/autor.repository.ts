import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { AutorEntity } from "./autor.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class AutorRepository extends Repository<AutorEntity> {
  constructor(
    @InjectRepository(AutorEntity)
    private autorRepository: Repository<AutorEntity>
  ){
    super(
      autorRepository.target,
      autorRepository.manager,
      autorRepository.queryRunner,
    );
  }

  
}