import { ImageBackground, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Splash({navigation}){
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

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
        }
        cache();
        
        setTimeout(() => {
            if (email && senha !== "") {
                navigation.navigate("Home");
            } else {
                navigation.navigate("Login");
            }
        }, 3000);

        
    })
    console.log(email, senha)
    return(



        <ImageBackground
        style={styles.imageBackground}
        source={require("../../../assets/Img/fundoLogin.png")}
      />
       
    );}

    const styles = StyleSheet.create({
        imageBackground: {
          flex: 1,
          resizeMode: "cover",
          width: "100%",
          height: "100%",
          justifyContent: "center",
        },});