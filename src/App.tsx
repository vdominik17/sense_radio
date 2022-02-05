import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import { RadioPage, StyledThemeContextProvider } from "@molitio/ui-core";

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
import { ThemeNameTags } from "@molitio/ui-core";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <StyledThemeContextProvider themeName={ThemeNameTags.BLACK_YELLOW}>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/home">
            <RadioPage
              radio={{
                playUrl:
                  "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/nest-media/sense-radio/audio-store/chill-abstract-12099.mp3",
              }}
            />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </StyledThemeContextProvider>
  </IonApp>
);

export default App;
