"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddcolumstoUser1720093379685 = void 0;
class AddcolumstoUser1720093379685 {
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE users ADD password varchar(255)`);
        await queryRunner.query(`ALTER TABLE users ADD activation_token varchar(255)`);
        await queryRunner.query(`ALTER TABLE users ADD is_active boolean`);
        await queryRunner.query(`ALTER TABLE users ADD is_deleted boolean`);
        await queryRunner.query(`ALTER TABLE users ADD token_createdAt timestamp default current_timestamp`);
        await queryRunner.query(`ALTER TABLE users ADD updated_at timestamp default current_timestamp`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE users DROP password `);
        await queryRunner.query(`ALTER TABLE users DROP activation_token `);
        await queryRunner.query(`ALTER TABLE users DROP is_active `);
        await queryRunner.query(`ALTER TABLE users DROP is_deleted `);
        await queryRunner.query(`ALTER TABLE users DROP token_createdAt `);
        await queryRunner.query(`ALTER TABLE users DROP updated_at `);
    }
}
exports.AddcolumstoUser1720093379685 = AddcolumstoUser1720093379685;
