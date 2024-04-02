import {
    Pressable,
    Text,
    View,
    StyleSheet,
    Image,
    ImageBackground,
    TextInput,
  } from "react-native";
  import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import axios from 'axios'
  
  
  
  
  
  export default function Login({navigation}) {

    const [inputEmail, setInputEmail] = useState('');
    const [esconderSenha, setEsconderSenha] = useState(true);
    const [inputSenha, setInputSenha] = useState('');
    const [texto, setTexto] = useState('');
    
    const carregar = async () => {
      const dadosUser = {
        'email': inputEmail,
        'senha': inputSenha,
      };
    
      const axiosConfig = {
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/x-www-form-urlencoded'
        }
      };
    
      try {
        const response = await axios.post('http://localhost/ZooKids-api/userLogin', dadosUser, axiosConfig);
        if(response.data.id){
          const{email, senha} = response.data.id
          AsyncStorage.setItem('email', email).then(() =>{
            console.log("Dados Armazenados com sucesso!");
          })
            
          
          .catch(error => {
            console.error("Deu bom nao meu chegado",error);
          });
        
          
          
          AsyncStorage.setItem('senha',senha).then(()=>{
            console.log("Dados Armazenados com sucesso!");
          }) 
          .catch(error => {
            console.error("Deu bom nao meu chegado",error);
          });
          navigation.navigate('Home',{id:response.data.id})
          } else {
          console.log("login invalido")
        }
      } catch (error) {
        console.error("Erro ao fazer Login", error);
      }
    
      
    }

// const verificacao = (()=>{

//   if (inputEmail == email & inputSenha == senha) {
//     return navigation.navigate('Home')
//   } else {
//     console.log('Dados incorreto')
//     setTexto( "Email ou senha invalido(s)");
//   }
// });

   

    return (
      <ImageBackground
        style={styles.imageBackground}
        source={require("../../../assets/Img/fundoLogin.png")}
      >
        <View style={styles.input}>
          
          <TextInput style={styles.inputStyle} placeholder={"E-mail"} value={inputEmail} onChangeText={(texto) =>setInputEmail(texto)}></TextInput>
          <View style={styles.inputSenha}>
          <TextInput
            style={styles.inputStyleSenha}
            placeholder={"Senha"}
            value={inputSenha}
            secureTextEntry={esconderSenha}
            onChangeText={(texto) => setInputSenha(texto)}
          ></TextInput>
          <Pressable
            style={styles.icon}
            onPress={() => setEsconderSenha(!esconderSenha)}
          >
            <Ionicons name="eye" color="#8a4617" size={25} />
          </Pressable>
        </View>
            <Text style={styles.textVerificacao}>{texto}</Text>
          <View style={styles.cadastro}>
          <Text style={styles.text}>Não tem uma conta?</Text><Pressable onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.textCadastro}> Cadastre-se</Text>
            </Pressable>
          </View>
        </View>
        
          <Pressable style={styles.buttonStyle} onPress={() => carregar()}>
            <Image source={require("../../../assets/Img/botaoEntrar.png")}
            style={styles.imageButton}></Image>
          </Pressable>
       
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
      alignItems: 'center',
      
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
      flex: 0.35,
      width: "80%",
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
    inputSenha:{
      flexDirection: "row",
      justifyContent: "center" 
    },
    
    inputStyleSenha: {
      borderBottomWidth: 1,
      width: "70%",
      padding: 10,
      alignSelf: "center",
  
      borderColor: "#8a4617",
      color: "#8a4617",
    },  
    icon: {
      borderBottomWidth: 1,
      borderColor: "#8a4617",
      alignSelf: "end",
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
  