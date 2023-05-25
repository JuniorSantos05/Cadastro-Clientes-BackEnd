import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1684927283676 implements MigrationInterface {
  name = "CreateTables1684927283676";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "public"."contacts" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "email" character varying(60) NOT NULL, "phone" character varying(12) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email"), CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "public"."users" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "email" character varying(60) NOT NULL, "phone" character varying(12) NOT NULL, "password" character varying(120) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "public"."contacts" ADD CONSTRAINT "FK_30ef77942fc8c05fcb829dcc61d" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "public"."contacts" DROP CONSTRAINT "FK_30ef77942fc8c05fcb829dcc61d"`
    );
    await queryRunner.query(`DROP TABLE "public"."users"`);
    await queryRunner.query(`DROP TABLE "public"."contacts"`);
  }
}
