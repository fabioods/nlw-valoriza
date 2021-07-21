import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateCompliments1626896717140 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'compliments',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isNullable: false,
            isPrimary: true,
          },
          {
            name: 'user_sender',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'user_receiver',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'tag_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'message',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            isNullable: false,
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            isNullable: false,
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKeys('compliments', [
      new TableForeignKey({
        columnNames: ['user_sender'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        name: 'fk_compliments_user_sender',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['user_receiver'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        name: 'fk_compliments_user_receiver',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['tag_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tags',
        name: 'fk_compliments_tag',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'compliments',
      'fk_compliments_user_sender',
    );
    await queryRunner.dropForeignKey(
      'compliments',
      'fk_compliments_user_receiver',
    );
    await queryRunner.dropForeignKey('compliments', 'fk_compliments_tag');
    await queryRunner.dropTable('compliments');
  }
}
