<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use App\Entity\Gym;
use App\Repository\GymRepository;

class GymController extends AbstractController
{
    /**
     * @Route("/gyms", methods="GET")
     */
    public function index(SerializerInterface $serializer): JsonResponse
    {
        $gym = $this->getDoctrine()->getRepository(Gym::class)->findAll();

        return new JsonResponse(
            $serializer->serialize($gym, 'json'),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }

    /**
     * 
     * @Route("/gyms", methods={"POST"})
     */
    public function create(Request $request, GymRepository $repository, SerializerInterface $serializer) {
       
        $gym = $serializer->deserialize($request->getContent(), Gym::class, 'json');

        $repository->save($gym);

        return new JsonResponse(
            $serializer->serialize($gym, 'json'),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }
}
