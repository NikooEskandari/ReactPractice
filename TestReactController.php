<?php


namespace Map2u\Manifold\MapsBundle\Controller;

//Only for test
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Map2u\Manifold\MapsBundle\Classes\DefaultMethods;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use TCPDF;

/**
 * TestReact controller.
 *
 * @Route("/testreact")
 */
class TestReactController extends Controller
{
    /**
     *
     * @Route("/", name="testreact_index", options={"expose"=true})
     * @Method("GET")
     * @Template()
     * @param Request $request
     * @return array|RedirectResponse
     */
    public function indexAction(Request $request)
    {
        $user = $this->getUser();
        if (!$user) {
            return $this->redirectToRoute("fos_user_security_login");
        }

        $request->getSession()->set('leftsidebar_route', 'testreact_index');
        $request->getSession()->set('homepage_route', 'testreact_index');
        $conn = $this->get('database_connection');

        // Fetch markets
        $markets_sql = 'select distinct market_city, market_province from a_media_optimizer_three order by market_province,market_city';
        $markets = $conn->fetchAll($markets_sql);

        return array('markets' => $markets);
    }

}