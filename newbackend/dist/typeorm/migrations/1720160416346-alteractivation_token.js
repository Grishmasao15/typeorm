"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlteractivationToken1720160416346 = void 0;
class AlteractivationToken1720160416346 {
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE users ALTER COLUMN activation_token DROP NOT NULL;`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE users ALTER COLUMN activation_token SET NOT NULL;`);
    }
}
exports.AlteractivationToken1720160416346 = AlteractivationToken1720160416346;
