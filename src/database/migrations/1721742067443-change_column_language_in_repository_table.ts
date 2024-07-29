import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class ChangeColumnLanguageInRepositoryTable1721742067443
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const newColumn = new TableColumn({
      name: 'language',
      type: 'varchar(25)',
      isNullable: true,
    });

    await queryRunner.changeColumn('repositories', 'language', newColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const oldColumn = new TableColumn({
      name: 'language',
      type: 'varchar(25)',
      isNullable: false,
    });

    await queryRunner.changeColumn('repositories', 'language', oldColumn);
  }
}
