import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateRepositoriesTable1721728523391
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'repositories',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
          },
          {
            name: 'repository_external_id',
            type: 'integer',
            isUnique: true,
          },
          {
            name: 'name',
            type: 'varchar(40)',
          },
          {
            name: 'url',
            type: 'varchar(100)',
          },
          {
            name: 'description',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'language',
            type: 'varchar(25)',
          },
          {
            name: 'external_created_at',
            type: 'timestamp',
          },
          {
            name: 'user',
            type: 'varchar',
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      'repositories',
      new TableForeignKey({
        name: 'FK_USER_REPOSITORY',
        columnNames: ['user'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('repositories', 'FK_USER_REPOSITORY');
    await queryRunner.dropTable('repositories');
  }
}
