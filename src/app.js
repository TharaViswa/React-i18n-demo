import React, { Component } from "react";
import ReactDOM from "react-dom";
import { useTranslation, Trans } from "react-i18next";
import t from './translate'

export default function App() {
  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const index = 11;

  return (
    <div className="App">
      <div className="App-header">
        <h2>{t("Welcome to React")}</h2>
        <button onClick={() => changeLanguage("de")}>de</button>
        <button onClick={() => changeLanguage("en")}>en</button>
        <button onClick={() => changeLanguage("es")}>es</button>
      </div>
      <h4>{t("goodMorning")}</h4>
    </div>
  );
}
