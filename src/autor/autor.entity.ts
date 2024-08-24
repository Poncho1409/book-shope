import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('autor')
export class AutorEntity{

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string

  @Column()
  apellido: string;

  @Column()
  fecha_nacimiento: Date;
}