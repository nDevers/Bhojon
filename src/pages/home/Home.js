import React from "react";
import Swal from "sweetalert2";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import ScrollToTop from "../../components/ScrollToTop";
import Footer from "../../components/Footer";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../hooks/firebase.init";

const Home = () => {
  const [user, loading, error] = useAuthState(auth);

  loading && <LoadingSpinner />;

  error &&
    Swal.fire({
      icon: "error",
      title: "Error",
      text: `${error}`,
    });

  return (
    <div>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />

      {/* scroll to top button */}
      <ScrollToTop />
    </div>
  )
};

export default Home;
