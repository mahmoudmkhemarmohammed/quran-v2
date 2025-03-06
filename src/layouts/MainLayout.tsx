import Footer from "@components/common/Footer";
import Header from "@components/common/Header";
import ToastsList from "@components/feedback/Toasts/ToastList";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="heightLayout">
        <Outlet />
      </main>
      <ToastsList />
      <Footer />
    </>
  );
};

export default MainLayout;
