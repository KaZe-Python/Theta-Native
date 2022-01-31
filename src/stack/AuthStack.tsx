import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";

const Stack = createNativeStackNavigator();

export default () => {
  <Stack.Navigator>
    <Stack.Screen name='login' component={LoginScreen} />
  </Stack.Navigator>
}