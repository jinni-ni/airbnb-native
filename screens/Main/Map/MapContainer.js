import React, { useState, useEffect, useRef } from "react";
import MapPresenter from "./MapPresenter";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default ({ rooms }) => {
  const mapRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const onScroll = (e) => {
    const {
      nativeEvent: {
        contentOffset: { x },
      },
    } = e;

    const position = Math.abs(Math.round(x / width));
    setCurrentIndex(position);
  };
  const moveMap = () => {
    mapRef.current?.animateCamera(
      {
        center: {
          latitude: parseFloat(rooms[currentIndex].lat),
          longitude: parseFloat(rooms[currentIndex].lng),
        },
      },
      { duration: 500 }
    );
  };
  useEffect(() => {
    if (currentIndex !== 0) {
      moveMap();
    }
  }, [currentIndex]);
  // console.log(rooms);

  const onRegionChangeComplete = async () => {
    try {
      const { northEast, southWest } = await mapRef.current?.getMapBoundaries();
      console.log(northEast, southWest);
    } catch (e) {
      console.warn(e);
    }
  };
  return (
    <MapPresenter
      rooms={rooms}
      mapRef={mapRef}
      currentIndex={currentIndex}
      onScroll={onScroll}
      onRegionChangeComplete={onRegionChangeComplete}
    />
  );
};
