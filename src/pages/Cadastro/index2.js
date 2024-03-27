import {
    Pressable,
    View,
    StyleSheet,
    Image,
    ImageBackground,
    Alert,
  } from "react-native";
  import { TextInput } from "react-native-web";
  import { useState, useEffect } from "react";
  import AsyncStorage from "@react-native-async-storage/async-storage";
  import viaCep from "../../services/viaCep"
  import axios from 'axios'
  
  
  
  export default function Endereco({navigation, route}) {
  
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const[idUsuario, setIdUsuario] = useState((route.params.idUser));
  
    
    
    
    
    const insert = async () => {
      const dadosLog = {
        'idUsuario': idUsuario,
        'cepLogradouro': cep,
        'nomeLogradouro': endereco,
        'bairroLogradouro':bairro,
        'numLogradouro': numero,
        'cidadeLogradouro': cidade,
        'ufLogradouro': estado
      };
      
      const axiosConfig = {
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/x-www-form-urlencoded'
        }
      };
      
      try {
        const response = await axios.post('http://localhost/ZooKids-api/logInsert', dadosLog, axiosConfig);
        
        navigation.navigate("Login");
      } catch (error) {
        console.error("Erro ao criar um logradouro", error);
      }
    }
    
    useEffect(() => {
      buscarCep();
    }, [cep]);
    async function buscarCep(){
      if(cep == '') {
        Alert.alert('Preencha o Campo')
      }

      try {
        const response = await viaCep.get(`/${cep}/json/`);
        setEndereco(response.data.logradouro)
        setBairro(response.data.bairro)
        setCidade(response.data.localidade)
        setEstado(response.data.uf)
      }catch(error){
        console.log (error, "erro ao puxar cep")
      }
    }
    
  function navegacao() {
    if (!cep || !numero) {
        console.log('Preencha todos os campos');
    } else {
        // Se ambos os campos estiverem preenchidos, realiza a inserção
        insert();
    }
}
    
    
  
  
  console.log((route.params.idUser), "id do usuario")
    
    return (
      <ImageBackground
        style={styles.imageBackground}
        source={require("../../../assets/Img/fundo.png")}
      >
        <View style={styles.input}>
          <TextInput style={styles.inputStyle} placeholder={"CEP"} value={cep} onChangeText={(texto) =>setCep(texto)}></TextInput>
          <TextInput style={styles.inputStyle} placeholder={"Endereço"} value={endereco} onChangeText={(texto) =>setEndereco(texto)}></TextInput>
          <TextInput style={styles.inputStyle} placeholder={"Nº"} value={numero} onChangeText={(texto) =>setNumero(texto)}></TextInput>
          <TextInput style={styles.inputStyle} placeholder={"Bairro"} value={bairro} onChangeText={(texto) =>setBairro(texto)}></TextInput>
          <TextInput style={styles.inputStyle} placeholder={"Cidade"} value={cidade} onChangeText={(texto) =>setCidade(texto)}></TextInput>
          <TextInput style={styles.inputStyle} placeholder={"Estado"} value={estado} onChangeText={(texto) =>setEstado(texto)}></TextInput>
        
        </View>
        <View style={styles.button}>
          <Pressable style={styles.buttonStyle} onPress={()=> navegacao()}>
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
  