import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";

import { useRoute } from "./router";

const loadApp = async () => {
  await Font.loadAsync({
    "font-family": require("./assets/fonts/PlaywriteVN-VariableFont_wght.ttf"),
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const routing = useRoute(true);
  // if (!isReady) {
  //   return (
  //     <AppLoading
  //       startAsync={loadApp}
  //       onFinish={() => setIsReady(true)}
  //       onError={console.warn}
  //     />
  //   );
  // }

  return <NavigationContainer>{routing}</NavigationContainer>;
}
