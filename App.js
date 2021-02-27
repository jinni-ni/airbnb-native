import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Image, Text } from "react-native";
import { Provider } from "react-redux";
import Gate from "./components/Gate";
import store from "./redux/store";

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

  const loadAssets = async () => {
    //image , font
    const images = [
      require("./assets/loginBG.jpeg"),
      "https://pnommensen.com/images/airbnb-icon-clipart.png",
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
      <Gate />
    </Provider>
  ) : (
    <AppLoading
      onError={console.error}
      onFinish={handleFinish}
      startAsync={loadAssets}
    />
  );
}
