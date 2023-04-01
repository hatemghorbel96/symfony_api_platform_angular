<?php

namespace App\Entity;

use ArrayObject;
use Model\Operation;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Post;
use Doctrine\ORM\Mapping as ORM;


use App\Repository\ProductApiRepository;
use ApiPlatform\Core\Annotation\ApiResource;





 #[ApiResource(formats:['json']
)] 

#[ORM\Entity(repositoryClass: ProductApiRepository::class)]
class ProductApi
{
   
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;
  
    #[ORM\Column(length: 255)]
    private ?string $name = null;

    
    #[ORM\Column]
  
    private ?int $price = null;

    #[ORM\ManyToOne(inversedBy: 'products')]
   
    private ?Category $category = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getPrice(): ?int
    {
        return $this->price;
    }

    public function setPrice(int $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): self
    {
        $this->category = $category;

        return $this;
    }
}
