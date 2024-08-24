import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutorEntity } from './autor.entity';
import { AutorRepository } from './autor.repository';
import { AutorService } from './autor.service';
import { AutorController } from './autor.controller';

@Module({
  controllers: [AutorController],
  providers: [
    AutorRepository,
    AutorService
  ],
  imports: [
    TypeOrmModule.forFeature([
      AutorEntity
    ])
  ],
  exports: [AutorService]
})
export class AutorModule {}
