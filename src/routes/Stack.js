import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Endereco from '../pages/Cadastro/index2';
import Splash from '../pages/Splash';
import Perfil from '../pages/Perfil';
import Territorios from '../pages/Territorios';
import Territorio2 from '../pages/Territorios/index2';
import Territorio3 from '../pages/Territorios/index3';
import Territorio4 from '../pages/Territorios/index4';
import Territorio5 from '../pages/Territorios/index5';
import Territorio6 from '../pages/Territorios/index6';



const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (

<Stack.Navigator initialRouteName='Splash'>
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
    <Stack.Screen
        name= 'Territorios'
        component={Territorios}
        options={{
            title: 'Territorios',
            headerStyle: { backgroundColor: 'white' },
            headerTintColor: 'white',
            headerShown: false,
          }}
    />
    <Stack.Screen
        name= 'Territorio2'
        component={Territorio2}
        options={{
            title: 'Territorios',
            headerStyle: { backgroundColor: 'white' },
            headerTintColor: 'white',
            headerShown: false,
          }}
    />
    <Stack.Screen
        name= 'Territorio3'
        component={Territorio3}
        options={{
            title: 'Territorios',
            headerStyle: { backgroundColor: 'white' },
            headerTintColor: 'white',
            headerShown: false,
          }}
    />
    <Stack.Screen
        name= 'Territorio4'
        component={Territorio4}
        options={{
            title: 'Territorios',
            headerStyle: { backgroundColor: 'white' },
            headerTintColor: 'white',
            headerShown: false,
          }}
    />
    <Stack.Screen
        name= 'Territorio5'
        component={Territorio5}
        options={{
            title: 'Territorios',
            headerStyle: { backgroundColor: 'white' },
            headerTintColor: 'white',
            headerShown: false,
          }}
    />
    <Stack.Screen
        name= 'Territorio6'
        component={Territorio6}
        options={{
            title: 'Territorios',
            headerStyle: { backgroundColor: 'white' },
            headerTintColor: 'white',
            headerShown: false,
          }}
    />
    
</Stack.Navigator>);}