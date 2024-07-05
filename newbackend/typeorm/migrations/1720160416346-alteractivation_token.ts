import { MigrationInterface, QueryRunner } from "typeorm";

export class AlteractivationToken1720160416346 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE users ALTER COLUMN activation_token DROP NOT NULL;`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE users ALTER COLUMN activation_token SET NOT NULL;`,
        )
    }

}
