import {
    Pressable,
    Text,
    View,
    StyleSheet,
    Image,
    ImageBackground,
    TextInput
  } from "react-native";
  import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
  useState
  
  
  
  
  
  export default function Login({navigation}) {

    const [email, setEmail] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [inputSenha, setInputSenha] = useState('');
    const [texto, setTexto] = useState('');
    
    AsyncStorage.getItem('email').then(email =>{
      setEmail(email)
      console.log ("email chegando", email)
    })
    .catch(error => {
      console.error("Deu bom nao meu chegado",error);
    });
  
    
    
    AsyncStorage.getItem('senha').then(senha => {
      setSenha(senha)
      console.log(senha)
    })

const verificacao = (()=>{

  if (inputEmail == email & inputSenha == senha) {
    return navigation.navigate('Home')
  } else {
    console.log('Dados incorreto')
    setTexto( "Email ou senha invalido(s)");
  }
});

   

    return (
      <ImageBackground
        style={styles.imageBackground}
        source={require("../../../assets/Img/fundoLogin.png")}
      >
        <View style={styles.input}>
          
          <TextInput style={styles.inputStyle} placeholder={"E-mail"} value={inputEmail} onChangeText={(texto) =>setInputEmail(texto)}></TextInput>
          <TextInput style={styles.inputStyle} placeholder={"Senha"} value={inputSenha} onChangeText={(texto) =>setInputSenha(texto)}></TextInput>
            <Text style={styles.textVerificacao}>{texto}</Text>
          <View style={styles.cadastro}>
          <Text style={styles.text}>Não tem uma conta?</Text><Pressable onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.textCadastro}> Cadastre-se</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.button}>
          <Pressable style={styles.buttonStyle} onPress={verificacao}>
            <Image source={require("../../../assets/Img/botaoEntrar.png")}
            style={styles.imageButton}></Image>
          </Pressable>
        </View>
      </ImageBackground>
    );
  }
  
  const styles = StyleSheet.create({
    imageBackground: {
      flex: 1,
      resizeMode: "cover",
      width: "100%",
      height: "100%",
      justifyContent: "center",
    },
  imageButton:{
    width: 150,
    height: 100,
    resizeMode: 'contain'
  },

  textVerificacao:{
    fontWeight: '600',
    color: 'red',
    textAlign: 'center'
  },

  cadastro:{
    flexDirection: 'row',
    alignSelf: 'center'
  },
  textCadastro:{
    fontWeight: 'bold',
    color: "#8a4617",
  },
    boxPrincipal: {
      flex: 2,
      justifyContent: "center",
      alignItems: "center",
    },
    titulo: {
      flex: 2,
      justifyContent: "center",
    },
    textTitulo: {
      fontSize: 40,
      fontWeight: "Bold",
      textAlign: "center",
      color: "white",
    },
    input: {
      flex: 1,
      width: "80%",
      margin: "auto",
      marginTop: "50%",
      borderWidth: 3,
      borderRadius: 15,
      borderColor: "#8a4617",
      justifyContent: "space-evenly",
      backgroundColor: "#f5d1ad",
    },
    inputStyle: {
      borderBottomWidth: 1,
      width: "80%",
      padding: 10,
      alignSelf: "center",
      
      borderColor: "#8a4617",
      color: "#8a4617",
    },
    button: {
      flex: 1,
    },
    buttonStyle: {
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
     
    },

    text:{
        color: "#8a4617",
    },
  });
  