import {
  Pressable,
  View,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import { TextInput } from "react-native-web";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";




export default function Cadastro({navigation}) {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setFone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');


  function insert(){

    AsyncStorage.setItem('nome', nome ).then(() =>{
      console.log("Dados Armazenados com sucesso!");
    })
    .catch(error => {
      console.error("Deu bom nao meu chegado",error);
    });
    
    AsyncStorage.setItem('email', email ).then(() =>{
      console.log("Dados Armazenados com sucesso!");
    })
    .catch(error => {
      console.error("Deu bom nao meu chegado",error);
    });

    AsyncStorage.setItem('telefone', telefone ).then(() =>{
      console.log("Dados Armazenados com sucesso!");
    })
    .catch(error => {
      console.error("Deu bom nao meu chegado",error);
    });
    
    AsyncStorage.setItem('senha', senha).then(() => {
      console.log("Dados armazenados")
    })
    
    .catch(error => {
      console.error("erro", error)
    });
  }

function  navegação(){
  insert();
  if(nome != undefined){

    return navigation.navigate('Endereco')
  } else{
    console.error("erro")
  }
  
  
}

  
  return (
    <ImageBackground
      style={styles.imageBackground}
      source={require("../../../assets/Img/fundo.png")}
    >
      <View style={styles.input}>
        <TextInput style={styles.inputStyle} placeholder={"Nome"} value={nome} onChangeText={(texto) =>setNome(texto)}></TextInput>
        <TextInput style={styles.inputStyle} placeholder={"E-mail"} value={email} onChangeText={(texto) =>setEmail(texto)}></TextInput>
        <TextInput style={styles.inputStyle} placeholder={"Telefone"} value={telefone} onChangeText={(texto) =>setFone(texto)}></TextInput>
        <TextInput style={styles.inputStyle} placeholder={"Senha"} value={senha} onChangeText={(texto) =>setSenha(texto)}></TextInput>
        <TextInput
          style={styles.inputStyle}
          placeholder={"Confirmar senha"}
          value={confirmSenha} onChangeText={(texto) =>setConfirmSenha(texto)}
        ></TextInput>
      </View>
      <View style={styles.button}>
        <Pressable style={styles.buttonStyle} onPress={()=> navegação()}>
          <Image source={require("../../../assets/Img/botaoEnviar.png")}
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
});
