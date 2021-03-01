import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Image, Text } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Gate from "./components/Gate";
import store, { persistor } from "./redux/store";

const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

const cacheFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const handleFinish = () => setIsReady(true);

  const loadAssets = () => {
    //image , font
    const images = [
      require("./assets/loginBG.jpeg"),
      require("./assets/roomDefault.jpeg"),
      "http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-219x286.png",
    ];

    const fonts = [Ionicons.font];

    //Promise : image를 refetch하거나 pre-download
    const imagePromises = cacheImages(images);
    const fontPromises = cacheFonts(fonts);
    //console.log(...imagePromises, ...fontPromises);
    return Promise.all([...fontPromises, ...imagePromises]);
  };
  return isReady ? (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Gate />
      </PersistGate>
    </Provider>
  ) : (
    <AppLoading
      onError={console.error}
      onFinish={handleFinish}
      startAsync={loadAssets}
    />
  );
}
