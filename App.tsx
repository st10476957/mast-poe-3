import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { menuItem, Course, RootStackParamlist } from "../type";
import WelcomeScreen from "./sceens/WelcomScreen";
import AddItemScreen from "./sceens/AddItemScreen";
import FilterScreen from "./sceens/FilterScreen";
import HomeScreen from "./sceens/HomeScreen";

const Stack = createNativeStackNavigator<RootStackParamlist>();

// ✅ Predefined sample menu items
const initialMenuItems: menuItem[] = [
  {
    id: "1",
    itemName: "Pan Seared Scallops",
    description:
      "Served with a light, flavorful  lemon butter sauce and  crispy pancetta bits. A perfect sear and elegant dining",
    category: "STARTER",
    price: 135,
    intensity: "Balanced",
    image:
      "https://images.pexels.com/photos/10432744/pexels-photo-10432744.jpeg?_gl=1*11ggb10*_ga*MTY1NDU3NTE1My4xNzYzMDM4MjUy*_ga_8JE65Q40S6*czE3NjMwMzgyNTEkbzEkZzEkdDE3NjMwMzgzMDIkajkkbDAkaDA.",
    ingredients: [
      "Sea Scallops",
      "High-Heat Oil",
      "Salt & Pepper",
    ],
  },
  {
    id: "2",
    itemName: "Spiced Lamb Meatballs",
    description:
      "Served with a cooling mint crème for a high-end, flavor-packed bite.",
    category: "STARTER",
    price: 205,
    intensity: "Mild",
    image:
      "https://media.istockphoto.com/id/626752258/photo/albondigas-meatballs-with-tomato-sauce-on-a-plate-close-up.jpg?b=1&s=612x612&w=0&k=20&c=SFF2xuxo1GFVY6QXl6aHfrjptjJ-n3B9JMfXiTte9xM=",
    ingredients: ["Ground Lamb", "Onion and Garlic", "Breadcrumbs and Egg", "Fresh Herbs"],
  },
  {
    id: "3",
    itemName: "Wagyu Beef Carpaccio",
    description:
      "Thinly sliced Wagyu beef rump served with a luxurious truffle mayonnaise, toasted pine nuts, shaved Parmesan cheese, and fresh arugula.",
    category: "STARTER",
    price: 85,
    intensity: "Bold",
    image:
      "https://images.pexels.com/photos/20036092/pexels-photo-20036092.jpeg?_gl=1*178vfqa*_ga*MTY1NDU3NTE1My4xNzYzMDM4MjUy*_ga_8JE65Q40S6*czE3NjMwMzgyNTEkbzEkZzEkdDE3NjMwMzkxODEkajU5JGwwJGgw",
    ingredients: ["Wagyu Beef Fillet/Tenderloin", " Extra Virgin Olive Oil", "Fresh Lemon Juice", "Salt and Freshly Ground Black Pepper"],
  },
  {
    id: "4",
    itemName: "Beef Wellington",
    description:
      "A showstopper featuring a seared filet mignon with a rich mushroom duxelles, wrapped in prosciutto and puff pastry,  served with a truffle merlot demiglace.",
    category: "MAIN",
    price: 260,
    intensity: "Bold",
    image:
      "https://images.pexels.com/photos/20095443/pexels-photo-20095443.jpeg?_gl=1*1seycka*_ga*MTY1NDU3NTE1My4xNzYzMDM4MjUy*_ga_8JE65Q40S6*czE3NjMwNDExMDQkbzIkZzEkdDE3NjMwNDExMDUkajU5JGwwJGgw",
    ingredients: ["Beef Fillet", "Puff Pastry", "Mushroom Duxelles"],
  },
  {
    id: "5",
    itemName: "Lobster Thermidor",
    description:
      "A classic, fancy, and rich dish featuring lobster meat cooked in a creamy sauce, often with brandy or wine, stuffed back into the shell and baked until golden.",
    category: "MAIN",
    price: 220,
    intensity: "Bold",
    image:
      "https://images.pexels.com/photos/921362/pexels-photo-921362.jpeg?_gl=1*1jl4gsb*_ga*MTY1NDU3NTE1My4xNzYzMDM4MjUy*_ga_8JE65Q40S6*czE3NjMwNDExMDQkbzIkZzEkdDE3NjMwNDEzNjgkajYwJGwwJGgw",
    ingredients: ["Cooked lobster meat", "Butter and flour Cream", "Shallots and mushrooms"],
  },
  {
    id: "6",
    itemName: "Braised Short Ribs",
    description:
      "Beef short ribs slow-cooked until incredibly tender, usually in a rich red wine reduction or port sauce. This is an upscale comfort food.",
    category: "MAIN",
    price: 245,
    intensity: "Bold",
    image:
      "https://images.pexels.com/photos/20323431/pexels-photo-20323431.jpeg?_gl=1*xn38d6*_ga*MTY1NDU3NTE1My4xNzYzMDM4MjUy*_ga_8JE65Q40S6*czE3NjMwNDExMDQkbzIkZzEkdDE3NjMwNDE0ODckajM2JGwwJGgwS",
    ingredients: ["Beef Short Ribs", "Aromatics", "GarlicTomato Paste"],
  },
  {
    id: "7",
    itemName: "Chocolate Lava Cake",
    description:
      "A classic favorite featuring a rich, moist exterior and a warm, molten chocolate center. Served with a scoop of high-quality vanilla bean ice cream or a raspberry coulis.",
    category: "DESSERT",
    price: 160,
    intensity: "Bold",
    image:
      "https://images.pexels.com/photos/20522414/pexels-photo-20522414.jpeg?_gl=1*az8h2z*_ga*MTY1NDU3NTE1My4xNzYzMDM4MjUy*_ga_8JE65Q40S6*czE3NjMwNDExMDQkbzIkZzEkdDE3NjMwNDMwMDkkajYwJGwwJGgw",
    ingredients: ["High-quality chocolate", "Butter", "Eggs", "Flour"],
  },
  {
    id: "8",
    itemName: "Tarte Tatin",
    description:
      "A beautiful upside-down apple tart with caramelized apples and a crisp pastry base, served warm with crème fraîche or vanilla ice cream.",
    category: "DESSERT",
    price: 120,
    intensity: "Mild",
    image:
      "https://images.pexels.com/photos/10885311/pexels-photo-10885311.jpeg?_gl=1*1w1tdvf*_ga*MTY1NDU3NTE1My4xNzYzMDM4MjUy*_ga_8JE65Q40S6*czE3NjMwNDExMDQkbzIkZzEkdDE3NjMwNDMxODQkajU5JGwwJGgw",
    ingredients: ["High-quality dark chocolate", "Heavy cream", "Sugar", "Vanilla extract"],
  },
  {
    id: "9",
    itemName: "Panna Cotta",
    description:
      "A silky smooth Italian classic that can be infused with various flavors (vanilla bean, coffee, lavender), served with a vibrant fruit sauce or balsamic glaze.",
    category: "DESSERT",
    price: 245,
    intensity: "Balanced",
    image:
      "https://images.pexels.com/photos/9060062/pexels-photo-9060062.jpeg?_gl=1*uwd0jq*_ga*MTY1NDU3NTE1My4xNzYzMDM4MjUy*_ga_8JE65Q40S6*czE3NjMwNDExMDQkbzIkZzEkdDE3NjMwNDM0NzUkajU5JGwwJGgw",
    ingredients: ["Unflavored Gelatin", "Vanilla", "fruit"],
  },
];

export default function App() {
  const [menuItems, setMenuItems] = useState<menuItem[]>(initialMenuItems);

  // ✅ Add a new menu item
  const handleAddItem = (newItem: menuItem) =>
    setMenuItems((prevItems) => [...prevItems, newItem]);

  // ✅ Remove an existing item by ID
  const handleRemoveItem = (itemId: string) =>
    setMenuItems((prevItems) => prevItems.filter((i) => i.id !== itemId));

  // ✅ Calculate average price per category
  const calculateAverage = (course: Course) => {
    const filteredItems = menuItems.filter((item) => item.category === course);
    if (!filteredItems.length) return "0.00";

    const total = filteredItems.reduce((sum, item) => sum + item.price, 0);
    return (total / filteredItems.length).toFixed(2);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#ffffffff" },
          headerTintColor: "#00aaeded",
          headerTitleStyle: { fontWeight: "800" },
        }}
      >
        {/* ✅ Welcome Screen */}
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />

        {/* ✅ Home Screen */}
        <Stack.Screen
          name="HomeScreen"
          options={{ title: "Chef Christoffel's Kitchen" }}
        >
          {(props) => (
            <HomeScreen
              {...props}
              items={menuItems}
              removeItem={handleRemoveItem}
              averages={{
                STARTER: calculateAverage("STARTER"),
                MAIN: calculateAverage("MAIN"),
                DESSERT: calculateAverage("DESSERT"),
              }}
            />
          )}
        </Stack.Screen>

        {/* ✅ Add Item Screen */}
        <Stack.Screen
          name="AddItemScreen"
          options={{ title: "Add New Item" }}
        >
          {(props) => <AddItemScreen {...props} addItem={handleAddItem} />}
        </Stack.Screen>

        {/* ✅ Filter Screen */}
        <Stack.Screen name="Filter" options={{ title: "Filter Menu" }}>
          {(props) => <FilterScreen {...props} items={menuItems} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



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