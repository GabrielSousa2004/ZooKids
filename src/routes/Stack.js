import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Endereco from '../pages/Cadastro/index2';
import Splash from '../pages/Splash';
import Perfil from '../pages/Perfil'

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (

<Stack.Navigator initialRouteName='Perfil'>
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
    <Stack.Screen
        name= 'Endereco'
        component={Endereco}
        options={{
            title: 'Cadastro',
            headerStyle: { backgroundColor: 'white' },
            headerTintColor: 'white',
            headerShown: false,
          }}
    />
    <Stack.Screen
        name= 'Splash'
        component={Splash}
        options={{
            title: 'Inicio',
            headerStyle: { backgroundColor: 'white' },
            headerTintColor: 'white',
            headerShown: false,
          }}
    />
    <Stack.Screen
        name= 'Perfil'
        component={Perfil}
        options={{
            title: 'Pefil',
            headerStyle: { backgroundColor: 'white' },
            headerTintColor: 'white',
            headerShown: false,
          }}
    />
</Stack.Navigator>);}