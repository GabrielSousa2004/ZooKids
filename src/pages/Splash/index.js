import { ImageBackground, StyleSheet, Text } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoadView from '../../components/loadView.js';

export default function Splash({navigation}){
    
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [load,setLoad] = useState(true);
    useEffect(() => {
        const cache = async() => {
            await AsyncStorage.getItem('email').then(email =>{
                setEmail(email)
                
            })
            .catch(error => {
                console.error("Deu bom nao meu chegado",error);
            });
            
            
            
            await AsyncStorage.getItem('senha').then(senha => {
                setSenha(senha)
                
            })
            setLoad(false)
        }
        cache();
        setTimeout(() => {
            if (email && senha !="") {
                navigation.navigate("Home");
            } else {
                
                navigation.navigate("Login");
            }
        }, 1500);

    })
   
    return(
        <ImageBackground style={styles.container}
        source={require("../../../assets/Img/fundoSplash.jpg")}
        >
            <LoadView/>
            
        </ImageBackground>
       
    );}

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          resizeMode: "cover",
      width: "100%",
      height: "100%",
      justifyContent: "center",
        
        },});