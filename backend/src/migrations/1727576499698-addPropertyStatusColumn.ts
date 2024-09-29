import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddPropertyStatusColumn1727576499698
  implements MigrationInterface
{
  name = 'AddPropertyStatusColumn1727576499698';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."property_status_enum" AS ENUM('ACTIVE', 'DELETED')`
    );
    await queryRunner.query(
      `ALTER TABLE "property" ADD "status" "public"."property_status_enum" NOT NULL DEFAULT 'ACTIVE'`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "status"`);
    await queryRunner.query(`DROP TYPE "public"."property_status_enum"`);
  }
}
