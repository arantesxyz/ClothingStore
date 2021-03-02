import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateInitialTables1614656581729 implements MigrationInterface {
  name = 'CreateInitialTables1614656581729'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `product_attribute_value` (`id` int NOT NULL AUTO_INCREMENT, `amount` int NOT NULL, `productId` int NULL, `attributeValueId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB'
    )
    await queryRunner.query(
      'CREATE TABLE `product_type_attribute` (`id` int NOT NULL AUTO_INCREMENT, `productTypeId` int NULL, `attributeId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB'
    )
    await queryRunner.query(
      'CREATE TABLE `product_type` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB'
    )
    await queryRunner.query(
      'CREATE TABLE `product` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `productTypeId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB'
    )
    await queryRunner.query(
      'CREATE TABLE `attribute_value` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `attributeId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB'
    )
    await queryRunner.query(
      'CREATE TABLE `attribute` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB'
    )
    await queryRunner.query(
      'CREATE TABLE `user` (`uid` varchar(36) NOT NULL, `email` varchar(255) NOT NULL, `hash` varchar(255) NOT NULL, `isAdmin` tinyint NOT NULL, PRIMARY KEY (`uid`)) ENGINE=InnoDB'
    )
    await queryRunner.query(
      'ALTER TABLE `product_attribute_value` ADD CONSTRAINT `FK_ec16da8811dbb98daf542e62370` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION'
    )
    await queryRunner.query(
      'ALTER TABLE `product_attribute_value` ADD CONSTRAINT `FK_8a1c4f7c036ec66701b5998610c` FOREIGN KEY (`attributeValueId`) REFERENCES `attribute_value`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION'
    )
    await queryRunner.query(
      'ALTER TABLE `product_type_attribute` ADD CONSTRAINT `FK_c0100e3038085d8b0a7bc11489d` FOREIGN KEY (`productTypeId`) REFERENCES `product_type`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION'
    )
    await queryRunner.query(
      'ALTER TABLE `product_type_attribute` ADD CONSTRAINT `FK_7f8c2fcf14e8dfc5fc763fb0be5` FOREIGN KEY (`attributeId`) REFERENCES `attribute`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION'
    )
    await queryRunner.query(
      'ALTER TABLE `product` ADD CONSTRAINT `FK_374bfd0d1b0e1398d7206456d98` FOREIGN KEY (`productTypeId`) REFERENCES `product_type`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION'
    )
    await queryRunner.query(
      'ALTER TABLE `attribute_value` ADD CONSTRAINT `FK_123ac30d8ade936347e4099cc4a` FOREIGN KEY (`attributeId`) REFERENCES `attribute`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION'
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `attribute_value` DROP FOREIGN KEY `FK_123ac30d8ade936347e4099cc4a`'
    )
    await queryRunner.query(
      'ALTER TABLE `product` DROP FOREIGN KEY `FK_374bfd0d1b0e1398d7206456d98`'
    )
    await queryRunner.query(
      'ALTER TABLE `product_type_attribute` DROP FOREIGN KEY `FK_7f8c2fcf14e8dfc5fc763fb0be5`'
    )
    await queryRunner.query(
      'ALTER TABLE `product_type_attribute` DROP FOREIGN KEY `FK_c0100e3038085d8b0a7bc11489d`'
    )
    await queryRunner.query(
      'ALTER TABLE `product_attribute_value` DROP FOREIGN KEY `FK_8a1c4f7c036ec66701b5998610c`'
    )
    await queryRunner.query(
      'ALTER TABLE `product_attribute_value` DROP FOREIGN KEY `FK_ec16da8811dbb98daf542e62370`'
    )
    await queryRunner.query('DROP TABLE `user`')
    await queryRunner.query('DROP TABLE `attribute`')
    await queryRunner.query('DROP TABLE `attribute_value`')
    await queryRunner.query('DROP TABLE `product`')
    await queryRunner.query('DROP TABLE `product_type`')
    await queryRunner.query('DROP TABLE `product_type_attribute`')
    await queryRunner.query('DROP TABLE `product_attribute_value`')
  }
}
