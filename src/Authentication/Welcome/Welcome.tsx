import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";

import { Box, theme } from "../../components/common";

const styles = StyleSheet.create({});
const { width, height } = Dimensions.get("window");
const picture = {
  src: null,
  height: 1000,
  widht: 1000,
};
const Welcome = () => {
  return (
    <Box flex={1}>
      <Box flex={1} borderBottomRightRadius="xl" backgroundColor="slide.grey">
        <Image
          source={picture.src}
          style={{
            width: width - theme.borderRadii.xl,
            height: ((width - theme.borderRadii.xl) * picture.height) / picture.widht,
          }}
        />
      </Box>
      <Box flex={1} borderBottomRightRadius="xl" backgroundColor="" />
    </Box>
  );
};

export default Welcome;
