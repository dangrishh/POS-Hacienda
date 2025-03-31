// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
// import HomeScreen from "../screens/HomeScreen";
// import AboutScreen from "../screens/AboutScreen";

// const Stack = createStackNavigator();

// const AppNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="About" component={AboutScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;


import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import CheckInScreen from "../screens/CheckInScreen"; // Import Check-In screen

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="CheckIn" 
          component={CheckInScreen} 
          options={{ headerShown: false }} // Hide default header
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
