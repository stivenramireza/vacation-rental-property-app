import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1727571852868 implements MigrationInterface {
  name = 'Init1727571852868';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "booking" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "property_id" uuid NOT NULL, "customer_name" text NOT NULL, "check_in" TIMESTAMP NOT NULL, "check_out" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_49171efc69702ed84c812f33540" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "property" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "location" text NOT NULL, "price_per_night" double precision NOT NULL, "availability_start" TIMESTAMP NOT NULL, "availability_end" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d80743e6191258a5003d5843b4f" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "booking" ADD CONSTRAINT "FK_5597161ba02971a62c629fc5a44" FOREIGN KEY ("property_id") REFERENCES "property"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "booking" DROP CONSTRAINT "FK_5597161ba02971a62c629fc5a44"`
    );
    await queryRunner.query(`DROP TABLE "property"`);
    await queryRunner.query(`DROP TABLE "booking"`);
  }
}
