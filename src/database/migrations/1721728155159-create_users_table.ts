import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class CreateUsersTable1721728155159 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp"
                    },
                    {
                        name: "deleted_at",
                        type: "timestamp"
                    },
                    {
                        name: 'login',
                        type: 'varchar(25)',
                        isUnique: true
                    },
                    {
                        name: 'user_external_id',
                        type: 'integer',
                    },
                    {
                        name: 'user_avatar_url',
                        type: 'varchar(100)',
                    },
                ],
            }),
            true,
            
        ),

        await queryRunner.createIndex(
            "users",
            new TableIndex({
                name: "USER_LOGIN",
                columnNames: ["login"],
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex("users", "USER_LOGIN")
        await queryRunner.dropTable("users")
    }

}
