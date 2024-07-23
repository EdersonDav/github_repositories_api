import { Column, Entity, Index, JoinColumn, ManyToOne, Relation, Unique } from "typeorm";
import { BaseEntity } from "./base";
import { User } from "./user.entity";

Unique(['repository_external_id'])
@Entity('repositories')
export class Repository extends BaseEntity<Repository> {
  @Column({ unique: true })
  repository_external_id!: number

  @Column()
  name!: string

  @Column()
  url!: string

  @Column({nullable: true})
  description?: string;

  @Column({nullable: true})
  language?: string;

  @Column()
  external_created_at!: Date;

  @Index()
  @ManyToOne(() => User, (user) => user.repository)
  @JoinColumn({ name: 'user' }) 
  user?: Partial<Relation<User>>;
}