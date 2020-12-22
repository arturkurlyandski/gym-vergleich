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

    /**
     * @ORM\Column(type="boolean")
     */
    private $parking;

    /**
     * @ORM\Column(type="boolean")
     */
    private $wellness;

    /**
     * @ORM\Column(type="boolean")
     */
    private $personal_training;

    /**
     * @ORM\Column(type="boolean")
     */
    private $child_care;

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

    public function getParking(): ?bool
    {
        return $this->parking;
    }

    public function setParking(bool $parking): self
    {
        $this->parking = $parking;

        return $this;
    }

    public function getWellness(): ?bool
    {
        return $this->wellness;
    }

    public function setWellness(bool $wellness): self
    {
        $this->wellness = $wellness;

        return $this;
    }

    public function getPersonalTraining(): ?bool
    {
        return $this->personal_training;
    }

    public function setPersonalTraining(bool $personal_training): self
    {
        $this->personal_training = $personal_training;

        return $this;
    }

    public function getChildCare(): ?bool
    {
        return $this->child_care;
    }

    public function setChildCare(bool $child_care): self
    {
        $this->child_care = $child_care;

        return $this;
    }
}
