import React from "react";

import logo from "./logo.svg";
import styles from "./App.module.scss";

/**
 * The primary component for the web app.
 */
export function App(): React.ReactElement {
  return (
    <div className={styles.App}>
      <header className={styles.appHeader}>
        <img
          alt="logo"
          className={styles.appLogo}
          src={logo}
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles.appLink}
          href="https://reactjs.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
