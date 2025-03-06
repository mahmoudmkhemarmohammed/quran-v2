import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Layout
const MainLayout = lazy(() => import("@layouts/MainLayout"));
// Pages
import Error from "@pages/Error/Error";
import Home from "@pages/Home/Home";
// Lazy Pages
const MushafsReciter = lazy(() => import("@pages/Reciter/MushafsReciter"));
const Wishlist = lazy(() => import("@pages/Wishlist/Wishlist"));
const Mushaf = lazy(() => import("@pages/Mushaf/Mushaf"));
const Live = lazy(() => import("@pages/Live/Live"));
const Nafahat = lazy(() => import("@pages/Nafahat/Nafahat"));
const Tafsir = lazy(() => import("@pages/Tafsir/Tafsir"));
const Radio = lazy(() => import("@pages/Radio/Radio"));
const AboutUs = lazy(() => import("@pages/About/About"));
// Important Coustom Hooks And Components
import UseResetScroll from "@hooks/useResetScroll";
import PageSuspanse from "@components/feedback/PageSuspanse/PageSuspanse";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <UseResetScroll />
        <PageSuspanse>
          <MainLayout />
        </PageSuspanse>
      </>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "mushaf",
        element: (
          <PageSuspanse>
            <Mushaf />
          </PageSuspanse>
        ),
      },
      {
        path: "wishlist",
        element: (
          <PageSuspanse>
            <Wishlist />
          </PageSuspanse>
        ),
      },
      {
        path: "mushafs-reciter/:reciterId",
        element: (
          <PageSuspanse>
            <MushafsReciter />
          </PageSuspanse>
        ),
      },
      {
        path: "live",
        element: (
          <PageSuspanse>
            <Live />
          </PageSuspanse>
        ),
      },
      {
        path: "nafahat",
        element: (
          <PageSuspanse>
            <Nafahat />
          </PageSuspanse>
        ),
      },
      {
        path: "tafsir",
        element: (
          <PageSuspanse>
            <Tafsir />
          </PageSuspanse>
        ),
      },
      {
        path: "radios",
        element: (
          <PageSuspanse>
            <Radio />
          </PageSuspanse>
        ),
      },
      {
        path: "about",
        element: (
          <PageSuspanse>
            <AboutUs />
          </PageSuspanse>
        ),
      },
    ],
  },
]);
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
