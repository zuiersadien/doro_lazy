import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true,
  })
  description: string;
  @Column({ default: false })
  done: boolean;

  @Column({ nullable: true })
  idtag: number;

  @Column({ nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  startTime: Date;

  @Column({ nullable: true })
  endTime: Date;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createat: Date;
}
