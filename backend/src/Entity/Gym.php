<?php

namespace App\Entity;

use App\Repository\GymRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=GymRepository::class)
 */
class Gym
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="integer")
     */
    private $registration_fee;

    /**
     * @ORM\Column(type="integer")
     */
    private $monthly_price;

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

    public function getRegistrationFee(): ?int
    {
        return $this->registration_fee;
    }

    public function setRegistrationFee(int $registration_fee): self
    {
        $this->registration_fee = $registration_fee;

        return $this;
    }

    public function getMonthlyPrice(): ?int
    {
        return $this->monthly_price;
    }

    public function setMonthlyPrice(int $monthly_price): self
    {
        $this->monthly_price = $monthly_price;

        return $this;
    }
}
