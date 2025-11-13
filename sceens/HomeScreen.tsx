import React from "react";
import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { menuItem, RootStackParamlist } from "../../type";

type Props = NativeStackScreenProps<RootStackParamlist, "HomeScreen"> & {
  items: menuItem[];
  removeItem: (id: string) => void;
  averages: { STARTER: string; MAIN: string; DESSERT: string };
};

export default function HomeScreen({
  navigation,
  items,
  removeItem,
  averages,
}: Props) {
  const handleRemoveConfirm = (itemId: string) => {
    Alert.alert("Remove item", "Are you sure you want to remove this item?", [
      { text: "Cancel", style: "cancel" },
      { text: "Remove", style: "destructive", onPress: () => removeItem(itemId) },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      
      {/* Header */}
      <Text style={styles.heading}>Our Menu ({items.length})</Text>

      {/* Avrage Price Summary */}
      <View style={styles.statsContainer}>
        {["STARTER", "MAIN", "DESSERT"].map((category) => (
          <View key={category} style={styles.statCard}>
            <Text style={styles.statLabel}>{category}s</Text>
            <Text style={styles.statValue}>
              R{averages[category as keyof typeof averages]}
            </Text>
            <Text style={styles.statCount}>
              {items.filter((i) => i.category === category).length} items
            </Text>
          </View>
        ))}
      </View>

      {/* Menu Item List */}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 120 }}
        renderItem={({ item }) => (
          <View style={styles.menuCard}>
            <Image source={{ uri: item.image }} style={styles.menuImage} />
            <View style={styles.menuBody}>
              <Text style={styles.menuTitle}>{item.itemName}</Text>
              <Text style={styles.menuDescription}>{item.description}</Text>
              <Text style={styles.menuMeta}>
                {item.category} · R{item.price} · {item.intensity}
              </Text>

              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => handleRemoveConfirm(item.id)}
              >
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Additem and Filter Buttons */}
      <View style={styles.fabContainer}>
        <TouchableOpacity
          style={styles.fabButton}
          onPress={() => navigation.navigate("AddItemScreen")}
        >
          <Text style={styles.fabText}>Add</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.fabButton, styles.fabAlt]}
          onPress={() => navigation.navigate("Filter", { items })}
        >
          <Text style={styles.fabText}>Filter</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const theme = {
  bg: "#93c5fd#",
  card: "#ffffffff",
  text: "#000000ff",
  meta: "#7fb0b6ff",
  accent: "#4596b6ff",
  surface: "#63b9d5ff",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    padding: 16,
  },

  heading: {
    color: theme.text,
    fontSize: 26,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 12,
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  statCard: {
    backgroundColor: theme.card,
    width: "32%",
    borderRadius: 14,
    paddingVertical: 10,
    alignItems: "center",
    elevation: 3,
  },

  statLabel: {
    color: theme.accent,
    fontSize: 12,
  },

  statValue: {
    color: theme.text,
    fontSize: 16,
    fontWeight: "800",
  },

  statCount: {
    color: theme.accent,
    fontSize: 11,
    marginTop: 4,
  },

  menuCard: {
    backgroundColor: theme.card,
    borderRadius: 16,
    overflow: "hidden",
    marginVertical: 8,
    elevation: 4,
  },

  menuImage: {
    width: "100%",
    height: 200,
  },

  menuBody: {
    padding: 12,
  },

  menuTitle: {
    color: theme.text,
    fontSize: 18,
    fontWeight: "800",
  },

  menuDescription: {
    color: theme.text,
    marginVertical: 6,
  },

  menuMeta: {
    color: theme.text,
    fontSize: 12,
    opacity: 0.7,
  },

  removeButton: {
    backgroundColor: theme.accent,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  removeButtonText: {
    color: theme.card,
    fontWeight: "800",
  },

  fabContainer: {
    position: "absolute",
    right: 20,
    bottom: 20,
    flexDirection: "row",
    gap: 12,
  },

  fabButton: {
    backgroundColor: theme.accent,
    paddingVertical: 14,
    paddingHorizontal: 22,
    borderRadius: 30,
    elevation: 6,
  },

  fabAlt: {
    backgroundColor: theme.accent,
  },

  fabText: {
    color: theme.card,
    fontWeight: "900",
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