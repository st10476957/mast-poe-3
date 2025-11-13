import React, { useMemo, useState } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { menuItem, Course, RootStackParamlist } from "../../type";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamlist, "Filter">;

type ScreenProps = Props & { items?: menuItem[] };

const theme = {
  bg: "#f1f7ffff#",
  card: "#ffffffff",
  text: "#000000ff",
  meta: "#000000ff",
  input: "#e8f0ffff",
  border: "#000000ff",
  accent: "#4596b6ff",
};

export default function FilterScreen({ route, items }: ScreenProps) {
  // Use items from props first, then from route params, fallback to empty array
  const menuItems: menuItem[] = items ?? route.params?.items ?? [];

  const [selectedCategory, setSelectedCategory] = useState<Course>("STARTER");

  // Filter menu items from selected category
  const visibleItems = useMemo(
    () => menuItems.filter((menu) => menu.category === selectedCategory),
    [menuItems, selectedCategory]
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Category Picker */}
      <View style={styles.pickerContainer}>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={selectedCategory}
            onValueChange={(val) => setSelectedCategory(val as Course)}
            mode="dropdown"
            dropdownIconColor={theme.accent}
            style={styles.picker}
            itemStyle={{ height: 44 }}
          >
            <Picker.Item label="STARTER" value="STARTER" color={theme.text} />
            <Picker.Item label="MAIN" value="MAIN" color={theme.text} />
            <Picker.Item label="DESSERT" value="DESSERT" color={theme.text} />
          </Picker>
        </View>
      </View>

      {/* Section Heading */}
      <Text style={styles.heading}>
        {selectedCategory}s ({visibleItems.length})
      </Text>

      {/* Filtered Item List */}
      <FlatList
        data={visibleItems}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={styles.cardContent}>
              <Text style={styles.title}>{item.itemName}</Text>

              {/* Ingredient Chips */}
              <View style={styles.chipContainer}>
                {item.ingredients.map((ingredient, index) => (
                  <View key={index} style={styles.chip}>
                    <Text style={styles.chipText}>{ingredient}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    padding: 16,
  },

  pickerContainer: {
    marginBottom: 12,
  },

  pickerWrapper: {
    backgroundColor: theme.input,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.border,
    overflow: "hidden",
    height: 50,
    justifyContent: "center",
  },

  picker: {
    color: theme.text,
    height: 50,
    width: "100%",
  },

  heading: {
    color: theme.text,
    fontSize: 20,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 8,
  },

  card: {
    backgroundColor: theme.card,
    borderRadius: 16,
    overflow: "hidden",
    marginVertical: 8,
    elevation: 3,
  },

  image: {
    width: "100%",
    height: 170,
  },

  cardContent: {
    padding: 12,
  },

  title: {
    color: theme.text,
    fontSize: 18,
    fontWeight: "800",
  },

  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 8,
  },

  chip: {
    backgroundColor: theme.input,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },

  chipText: {
    color: theme.text,
    fontWeight: "700",
    fontSize: 12,
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