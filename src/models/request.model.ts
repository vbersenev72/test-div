import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Requests {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', nullable: true })
  name: string;

  @Column({ name: 'email', nullable: true })
  email: string;

  @Column({ name: 'status', nullable: true })
  status: string;

  @Column({ name: 'message', nullable: true })
  message: string;

  @Column({ name: 'comment', nullable: true })
  comment: string;

  @Column({ name: 'created_at', nullable: true, default: new Date() })
  created_at: string;

  @Column({ name: 'updated_at', nullable: true, default: new Date() })
  updated_at: string;

}