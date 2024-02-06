import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  description: string;
  @Column({
    nullable: false,
    default: 1,
  })
  state: number;
}
