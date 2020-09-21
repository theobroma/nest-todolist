import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateItems1600725022123 implements MigrationInterface {
    name = 'CreateItems1600725022123'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "item" ("id" SERIAL NOT NULL, "text" character varying NOT NULL, "completed" boolean, CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "item"`);
    }

}
