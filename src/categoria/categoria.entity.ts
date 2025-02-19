import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('categoria')
export class CategoriaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  // @Column() // Relación con libro
  
}