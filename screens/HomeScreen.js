import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
// import { Colors, Images } from "../expo-firebase-starter-local/config";
// import HelpButton from "../components/HelpButton";
// import { View, Logo } from "../expo-firebase-starter-local/components";

export default function HomeScreen() {

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 750,
      useNativeDriver: true,
    }).start();
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 550,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View isSafe style={styles.container}>
        <View style={styles.logoContainer}>
      <View style= {styles.logoPadding}>
      <Animated.Image
        source={require(
           '../assets/images/Congregation_of_Holy_Cross.png'
          // '../assets/favicon.png'
        )}
        style={[
          styles.image,
          {
            opacity: fadeAnim,
            transform: [{
              translateY: slideAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [100, 70],
              })
            }]
          },
        ]}        
      />
      </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f4f3ef',
  },
  logoContainer: {
    alignItems: "center",
    flex: 1,
    borderWidth: 5,
    borderRadius: 30,
    borderColor: '#bcccac',
  },
  logoPadding:{
    // paddingTop: "50%"

  },
  image: {
    padding: 0,
    flex: .7,
    zIndex: 1,
    aspectRatio: 1,
    // transform: [{
    //   scale: .1,
    // }]
  },    
});