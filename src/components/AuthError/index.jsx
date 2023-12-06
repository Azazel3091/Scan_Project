import React from "react";
import { Link } from "react-router-dom";
import styles from "./AuthError.module.css";

function AuthError() {
  return (
    <>
      <main className={styles.errorContainer}>
        <h1 className={styles.errorMessage}>
          Указанный логин или пароль неверен. Вернитесь на страницу авторизации
          и повторите ввод.
        </h1>
        <Link to={"/auth"} className={styles.returnButton}>
          Вернуться
        </Link>
      </main>
    </>
  );
}

export { AuthError };