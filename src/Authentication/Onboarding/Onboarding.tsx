import React, { useRef } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import Animated, { divide, Extrapolate, interpolate, multiply } from "react-native-reanimated";
import { useScrollHandler } from "react-native-redash/lib/module/v1";

import { theme } from "../../components/common";
import { Routes, StackNavigationProps } from "../../Naviagation";
// import { useScrollHandler } from "react-native-redash";

import Dot from "./Dot";
import Slide, { SLIDE_HEIGHT } from "./Slide";
import Subslide from "./Subslide";

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "flex-end",
    borderBottomRightRadius: theme.borderRadii.xl,
    overflow: "hidden",
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: theme.borderRadii.xl,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: theme.borderRadii.xl,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

const slides = [
  {
    title: "Relaxed",
    subtitle: "Find Your Outfits",
    description: "Confused about your outfit? Don`t worry! Find the best outfit here!",
    color: "#BFEAF5",
    picture: {
      src: require("../../../assets/images/1.jpg"),
      width: 1920,
      height: 1281,
    },
  },
  {
    title: "Playful",
    subtitle: "Hear it First, Wear it First",
    description: "Hating the the clothes in your weadrobe? Explore hundreds of outfit ideas",
    color: "#BEECC4",
    right: true,
    picture: {
      src: require("../../../assets/images/2.jpg"),
      width: 1280,
      height: 1600,
    },
  },
  {
    title: "Excentric",
    subtitle: "Your Style, Your Way",
    description: "Create your individual & unique style and look amazing everyday",
    color: "#FFE4D9",
    picture: {
      src: require("../../../assets/images/3.jpg"),
      width: 1920,
      height: 1281,
    },
  },
  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description: "Discover the latest trends in fashion and explore your personality",
    color: "#FFDDDD",
    right: true,
    picture: {
      src: require("../../../assets/images/4.jpg"),
      width: 1280,
      height: 1919,
    },
  },
];

const Onboarding = ({ navigation }: StackNavigationProps<Routes, "Onboarding">) => {
  const scroll = useRef<Animated.ScrollView>(null);
  const { scrollHandler, x } = useScrollHandler();
  // const backgroundColor = interpolateColor(x, {
  //   inputRange: slides.map((_, i) => width * i),
  //   outputColorRange: slides.map(slide => slide.color),
  // });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor: "cyan" }]}>
        {slides.map(({ picture }, index) => {
          const opacity = interpolate(x, {
            inputRange: [(index - 0.5) * width, index * width, (index + 0.5) * width],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          });
          return (
            <Animated.View style={[styles.underlay, { opacity }]} key={index}>
              <Image
                source={picture.src}
                style={{
                  width: width - theme.borderRadii.xl,
                  height: ((width - theme.borderRadii.xl) * picture.height) / picture.width,
                }}
              />
            </Animated.View>
          );
        })}

        <Animated.ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...scrollHandler}
        >
          {slides.map(slide => (
            <Slide key={slide.title} title={slide.title} right={slide.right} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View style={{ ...StyleSheet.absoluteFillObject }} />
        <View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={divide(x, width)} index={index} />
            ))}
          </View>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: "row",
              width: width * slides.length,
              transform: [{ translateX: multiply(x, -1) }],
            }}
          >
            {slides.map(({ subtitle, description }, index) => {
              const last = index === slides.length - 1;
              return (
                <Subslide
                  key={index}
                  last={last}
                  subtitle={subtitle}
                  description={description}
                  onPress={() => {
                    if (last) {
                      navigation.navigate("Welcome");
                    } else {
                      scroll?.current?.getNode().scrollTo({ x: width * (index + 1), animated: true });
                    }
                  }}
                />
              );
            })}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;
