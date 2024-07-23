import { Column, Entity, Index, JoinColumn, OneToMany, Relation } from "typeorm";
import { BaseEntity } from "./base";
import { Repository } from "./repository.entity";

@Entity('users')
export class User extends BaseEntity<User> {
  @Index()
  @Column({ unique: true })
  login!: string

  @Column()
  user_external_id!: number

  @Column()
  user_avatar_url!: string

  @OneToMany(() => Repository, entity => entity.user)
  @JoinColumn({ referencedColumnName: 'user_id' })
  repository?: Partial<Relation<Repository>>[];
}