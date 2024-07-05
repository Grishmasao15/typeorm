"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AltertokenCratedat1720159178999 = void 0;
class AltertokenCratedat1720159178999 {
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE users ALTER COLUMN token_createdat DROP NOT NULL;`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE users ALTER COLUMN token_createdat SET NOT NULL;`);
    }
}
exports.AltertokenCratedat1720159178999 = AltertokenCratedat1720159178999;
