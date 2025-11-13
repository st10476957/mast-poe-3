import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { menuItem, Course, RootStackParamlist } from "../../type";

type Props = NativeStackScreenProps<RootStackParamlist, "AddItemScreen"> & {
  addItem: (item: menuItem) => void;
};

const theme = {
  bg: "#f1f7ffff",
  card: "#ffffffff",
  text: "#000000ff",
  meta: "#000000ff",
  accent: "#4596b6ff",
  input: "#ffffffff",
  border: "#2d363aff",
};

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

export default function AddItemScreen({ navigation, addItem }: Props) {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<Course>("STARTER");
  const [priceInput, setPriceInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [ingredientText, setIngredientText] = useState("");

   {/* Alert promps */}
  const handleSave = () => {
    if (!name || !details || !priceInput || !imageUrl) {
      Alert.alert("Missing fields", "Please fill in all required fields.");
      return;
    }

    const parsedPrice = parseFloat(priceInput);
    if (isNaN(parsedPrice) || parsedPrice <= 0) {
      Alert.alert("Invalid price", "Enter a valid number.");
      return;
    }

    const strength: menuItem["intensity"] =
      parsedPrice < 45 ? "mild" : parsedPrice < 60 ? "balanced" : "strong";

    const newItem: menuItem = {
      id: generateId(),
      itemName: name,
      description: details,
      category: selectedCourse,
      price: parsedPrice,
      intensity: strength,
      image: imageUrl,
      ingredients: ingredientText
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
    };

    addItem(newItem);
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.form}>
          <Text style={styles.header}>Add New Item</Text>

          <TextInput
            style={styles.input}
            placeholder="Item name"
            placeholderTextColor={theme.meta}
            value={name}
            onChangeText={setName}
          />

          <TextInput
            style={[styles.input, { height: 80 }]}
            placeholder="Description"
            placeholderTextColor={theme.meta}
            value={details}
            onChangeText={setDetails}
            multiline
          />

          <Text style={styles.label}>Category</Text>
          <View style={styles.pickerBox}>
            <Picker
              selectedValue={selectedCourse}
              onValueChange={(val) => setSelectedCourse(val as Course)}
              mode="dropdown"
              dropdownIconColor={theme.accent}
              style={styles.picker}
            >
              <Picker.Item label="STARTER" value="STARTER" color={theme.text} />
              <Picker.Item label="MAIN" value="MAIN" color={theme.text} />
              <Picker.Item label="DESSERT" value="DESSERT" color={theme.text} />
            </Picker>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Price"
            placeholderTextColor={theme.meta}
            keyboardType="numeric"
            value={priceInput}
            onChangeText={setPriceInput}
          />

          <TextInput
            style={styles.input}
            placeholder="Ingredients (comma separated)"
            placeholderTextColor={theme.meta}
            value={ingredientText}
            onChangeText={setIngredientText}
          />

          <TextInput
            style={styles.input}
            placeholder="Image URL"
            placeholderTextColor={theme.meta}
            value={imageUrl}
            onChangeText={setImageUrl}
          />

          {imageUrl ? (
            <Image source={{ uri: imageUrl }} style={styles.preview} />
          ) : null}

          <TouchableOpacity style={styles.save} onPress={handleSave}>
            <Text style={styles.saveText}>Save Item</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cancel}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: theme.bg,
    padding: 20,
    flexGrow: 1,
  },
  header: {
    color: theme.text,
    fontSize: 22,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 16,
  },
  input: {
    backgroundColor: theme.input,
    color: theme.text,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.border,
    height: 50,
    paddingHorizontal: 12,
    marginVertical: 8,
  },
  label: {
    color: theme.meta,
    marginLeft: 4,
    marginBottom: 6,
    fontWeight: "700",
  },
  pickerBox: {
    backgroundColor: theme.input,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.border,
    overflow: "hidden",
    height: 50,
    justifyContent: "center",
    marginBottom: 8,
  },
  picker: {
    color: theme.text,
    height: 50,
    width: "100%",
  },
  preview: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginTop: 12,
  },
  save: {
    backgroundColor: theme.accent,
    padding: 14,
    borderRadius: 12,
    marginTop: 16,
    alignItems: "center",
  },
  saveText: {
    color: "#ffffffff",
    fontWeight: "900",
  },
  cancel: {
    alignItems: "center",
    marginTop: 10,
  },
  cancelText: {
    color: "#000000ff",
    fontWeight: "800",
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