import { Column, Entity, Index, JoinColumn, ManyToOne, Relation } from "typeorm";
import { BaseEntity } from "./base";
import { User } from "./user.entity";

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

  @Column()
  language!: string;

  @Column()
  external_created_at!: Date;

  @Column()
  user_id?: string;

  @Index()
  @ManyToOne(() => User, entity => entity.repository)
  @JoinColumn({ name: 'user_id' })
  user?: Partial<Relation<User>>;
}