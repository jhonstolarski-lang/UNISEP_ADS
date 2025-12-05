import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/login"
import Perfil from "./screens/perfil";
import Disciplinas from "./screens/Disciplinas";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="perfil">
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="perfil"
          component={Perfil}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="disciplinas"
          component={Disciplinas}
          options={{ title: 'Minhas Disciplinas' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}