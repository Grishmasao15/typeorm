import { MigrationInterface, QueryRunner } from "typeorm";

export class AddcolumstoUser1720093379685 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE users ADD password varchar(255)`,
        )
        await queryRunner.query(
            `ALTER TABLE users ADD activation_token varchar(255)`,
        )
        await queryRunner.query(
            `ALTER TABLE users ADD is_active boolean`,
        )
        await queryRunner.query(
            `ALTER TABLE users ADD is_deleted boolean`,
        )
        await queryRunner.query(
            `ALTER TABLE users ADD token_createdAt timestamp default current_timestamp`,
        )
        await queryRunner.query(
            `ALTER TABLE users ADD updated_at timestamp default current_timestamp`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE users DROP password `,
        )
        await queryRunner.query(
            `ALTER TABLE users DROP activation_token `,
        )
        await queryRunner.query(
            `ALTER TABLE users DROP is_active `,
        )
        await queryRunner.query(
            `ALTER TABLE users DROP is_deleted `,
        )
        await queryRunner.query(
            `ALTER TABLE users DROP token_createdAt `,
        )
        await queryRunner.query(
            `ALTER TABLE users DROP updated_at `,
        )
    }

}
