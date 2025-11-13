import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamlist } from "../../type";

type Props = NativeStackScreenProps<RootStackParamlist, "WelcomeScreen">;

export default function WelcomeScreen({ navigation }: Props) {
  const handleNavigateToMenu = () => {
    navigation.replace("HomeScreen");
  };

  {/* Welcome background image */}
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://i.pinimg.com/736x/f5/cd/ec/f5cdec94caa6c22825e9b418a9e3ec52.jpg",
        }}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay} />

         {/* Welcome message */}
        <View style={styles.content}>
          <Text style={styles.heading}>Welcome to Chef Christoffel's Menu App</Text>
          <Text style={styles.subheading}>
            Where you find dining experience awaits you.
          </Text>

         {/* menu navigation button */}
          <TouchableOpacity style={styles.button} onPress={handleNavigateToMenu}>
            <Text style={styles.buttonText}>MENU</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const theme = {
  bg: "#93c5fd#",
  textPrimary: "#59b3d4ff",
  textSecondary: "#64b9d2ff",
  accent: "#4596b6ff",
  dark: "#ffffffff",
  overlay: "#93c5fd#"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
  },

  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.overlay,
  },

  content: {
    alignItems: "center",
    paddingHorizontal: 24,
  },

  heading: {
    color: theme.textPrimary,
    fontSize: 42,
    fontWeight: "800",
    textAlign: "center",
  },

  subheading: {
    color: theme.textSecondary,
    fontSize: 16,
    marginTop: 6,
    marginBottom: 28,
    textAlign: "center",
  },

  button: {
    backgroundColor: theme.accent,
    paddingVertical: 14,
    paddingHorizontal: 44,
    borderRadius: 28,
    elevation: 6,
  },

  buttonText: {
    color: theme.dark,
    fontWeight: "900",
    fontSize: 18,
  },
});



/* -------------------------------- Code Attributions -------------------------------- */

/*
Author: W3Schools
Title: React Native Tutorial
Date Published: n.d.
Link/URL: https://www.w3schools.com/react/react_native_intro.asp
Date Accessed: 10/11/2025
*/

/*
Author: W3Schools
Title: React Native Navigation
Date Published: n.d.
Link/URL: https://www.w3schools.com/react/react_native_navigation.asp
Date Accessed: 10/11/2025
*/

/*
Author: W3Schools
Title: React Native Components (Picker)
Date Published: n.d.
Link/URL: https://www.w3schools.com/react/react_native_components.asp
Date Accessed: 10/11/2025
*/

/*
Author: W3Schools
Title: React Native Stack Navigation
Date Published: n.d.
Link/URL: https://www.w3schools.com/react/react_native_stack.asp
Date Accessed: 10/11/2025
*/

/*
Author: W3Schools
Title: TypeScript Tutorial
Date Published: n.d.
Link/URL: https://www.w3schools.com/typescript/index.php
Date Accessed: 10/11/2025
*/