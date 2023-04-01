<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230314124145 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE category (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE product_api ADD category_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE product_api ADD CONSTRAINT FK_4D2A8C1012469DE2 FOREIGN KEY (category_id) REFERENCES category (id)');
        $this->addSql('CREATE INDEX IDX_4D2A8C1012469DE2 ON product_api (category_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE product_api DROP FOREIGN KEY FK_4D2A8C1012469DE2');
        $this->addSql('DROP TABLE category');
        $this->addSql('DROP INDEX IDX_4D2A8C1012469DE2 ON product_api');
        $this->addSql('ALTER TABLE product_api DROP category_id');
    }
}