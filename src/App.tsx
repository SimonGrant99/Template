import React from "react";
import { Route, Routes } from "react-router-dom";

import styles from "./App.module.scss";
import { PageRoutes } from "./models/PageRoutes";
import { HomePage } from "./pages/HomePage/HomePage";
import { ListingPage } from "./pages/ListingPage/ListingPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { SignupPage } from "./pages/SignupPage/SignupPage";

/**
 * The primary component for the web app.
 */
export function App(): React.ReactElement {
  return (
    <div className={styles.app}>
      {/* <video
        aria-label="test"
        autoPlay={true}
        loop={true}
        muted={true}
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source
          src={backgroundVideo}
          type="video/mp4"
        />
      </video> */}

      <Routes>
        <Route
          element={<HomePage />}
          path={PageRoutes.HOME}
        />
        <Route
          element={<SignupPage />}
          path={PageRoutes.SIGNUP_PAGE}
        />
        <Route
          element={<LoginPage />}
          path={PageRoutes.LOGIN_PAGE}
        />
        <Route
          element={<ListingPage />}
          path={PageRoutes.LISTING_PAGE}
        />
        {/* <Route
          element={<ListingPage />}
          path={PageRoutes.LISTING_PAGE}
        /> */}

        {/* If the user tries to navigate to a page that does not exist, show this page */}
        <Route
          element={
            <div>
              <h1>PAGE NOT FOUND</h1>
            </div>
          }
          path="/*"
        />
      </Routes>
    </div>
  );
}
