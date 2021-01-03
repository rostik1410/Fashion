import React from "react";
import { Dimensions, Image } from "react-native";

import { Box, theme, Text, Button } from "../../components/common";

const { width } = Dimensions.get("window");
const picture = {
  src: require("../../../assets/images/5.png"),
  width: 375,
  height: 666,
};
const Welcome = () => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box flex={1} borderBottomRightRadius="xl" backgroundColor="grey" alignItems="center" justifyContent="flex-start">
        <Image
          source={picture.src}
          style={{
            width: width - theme.borderRadii.xl,
            height: ((width - theme.borderRadii.xl) * picture.height) / picture.width,
          }}
        />
      </Box>
      <Box flex={1} borderBottomRightRadius="xl">
        <Box backgroundColor="grey" position="absolute" top={0} left={0} right={0} bottom={0} />
        <Box
          backgroundColor="white"
          borderTopLeftRadius="xl"
          flex={1}
          justifyContent="space-evenly"
          alignItems="center"
          padding="xl"
        >
          <Text variant="title2">Let`s get started</Text>
          <Text variant="body" textAlign="center">
            Login to your account below r signup for an amazing experience
          </Text>
          <Button variant="primary" label="Have an account? Login" onPress={() => null} />
          <Button label="Join us, it's Free" onPress={() => null} />
          <Button variant="transparent" label="Forgot password?" onPress={() => null} />
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
