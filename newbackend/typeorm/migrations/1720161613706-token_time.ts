import { MigrationInterface, QueryRunner } from "typeorm";

export class TokenTime1720161613706 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE users ALTER COLUMN token_createdat DROP NOT NULL;`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE users ALTER COLUMN token_createdat SET NOT NULL;`,
        )
    }

}
