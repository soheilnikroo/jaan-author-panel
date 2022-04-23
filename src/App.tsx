import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import LoginPage from "./pages/Login/LoginPage";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import VerifyCodePage from "./pages/VerifyCode/VerifyCodePage";
import HomePage from "./pages/Home/HomePage";
import useTypedSelector from "./hook/useTypedSelector";

setupIonicReact();

const App: React.FC = () => {
  const userData = useTypedSelector((state) => state.user);

  const isLoggedIn = userData.isLoggedIn;
  const phoneNumber = userData.phoneNumber;

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path={`/${phoneNumber || ":phone"}/home`}>
            {isLoggedIn && <HomePage />}
            {!isLoggedIn && <Redirect to="/auth" />}
          </Route>
          <Route exact path="/auth">
            {!isLoggedIn && <LoginPage />}
            {isLoggedIn && <Redirect to={`/${phoneNumber}/home`} />}
          </Route>
          <Route exact path="/auth/code/:phone">
            {!isLoggedIn && <VerifyCodePage />}
            {isLoggedIn && <Redirect to={`/${phoneNumber}/home`} />}
          </Route>
          <Route exact path="/">
            {!isLoggedIn && <Redirect to="/auth" />}
            {isLoggedIn && <Redirect to={`/${phoneNumber}/home`} />}
          </Route>
          <Route>
            {isLoggedIn ? (
              <Redirect to={`/${phoneNumber}/home`} />
            ) : (
              <Redirect to="/auth" />
            )}
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
