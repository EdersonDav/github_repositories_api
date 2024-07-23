import { Column, Entity, Index, JoinColumn, OneToMany, Relation, Unique } from "typeorm";
import { BaseEntity } from "./base";
import { Repository } from "./repository.entity";

Unique(['login'])
@Entity('users')
export class User extends BaseEntity<User> {
  @Index()
  @Column({ unique: true })
  login!: string;

  @Column()
  user_external_id!: number;

  @Column()
  user_avatar_url!: string;

  @OneToMany(() => Repository, (repository) => repository.user)
  repository?: Partial<Relation<Repository>>[];
}