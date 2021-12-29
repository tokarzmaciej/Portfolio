import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import MainWebPage from "./components/mainPage/MainPage";
import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
const language = ["pl", "en"].find(
  (value) => value === localStorage.getItem("language")
);

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: language || "en",
    fallbackLng: "en",
    ns: ["main"],
    defaultNS: "main",
    react: {
      bindI18n: "languageChanged",
      bindI18nStore: "",
      transEmptyNodeValue: "",
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ["br", "strong", "i"],
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });

function App() {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={() => <MainWebPage changeLanguage={changeLanguage} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
