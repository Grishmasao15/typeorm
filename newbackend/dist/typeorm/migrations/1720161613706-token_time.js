"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenTime1720161613706 = void 0;
class TokenTime1720161613706 {
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE users ALTER COLUMN token_createdat DROP NOT NULL;`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE users ALTER COLUMN token_createdat SET NOT NULL;`);
    }
}
exports.TokenTime1720161613706 = TokenTime1720161613706;
