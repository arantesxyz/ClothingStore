import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddDefaultTypeForUserIsAdmin1614731478813
  implements MigrationInterface {
  name = 'AddDefaultTypeForUserIsAdmin1614731478813'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `user` CHANGE `isAdmin` `isAdmin` tinyint NOT NULL DEFAULT 0'
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `user` CHANGE `isAdmin` `isAdmin` tinyint NOT NULL'
    )
  }
}
