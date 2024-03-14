import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';


const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (

<Stack.Navigator initialRouteName='Cadastro'>
    <Stack.Screen
        name= 'Home'
        component={Home}
        options={{
            title: 'Home',
            headerStyle: { backgroundColor: 'white' },
            headerTintColor: 'white',
            headerShown: false,
          }}
    />
    <Stack.Screen
        name= 'Login'
        component={Login}
        options={{
            title: 'Login',
            headerStyle: { backgroundColor: 'white' },
            headerTintColor: 'white',
            headerShown: false,
          }}
    />
     <Stack.Screen
        name= 'Cadastro'
        component={Cadastro}
        options={{
            title: 'Cadastro',
            headerStyle: { backgroundColor: 'white' },
            headerTintColor: 'white',
            headerShown: false,
          }}
    />
</Stack.Navigator>);}