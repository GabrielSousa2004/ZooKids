import {
  Pressable,
  View,
  StyleSheet,
  Image,
  Text,
  ImageBackground,
} from "react-native";
import { TextInput } from "react-native-web";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

export default function Cadastro({ navigation }) {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setFone] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [textSenha, setTextSenha] = useState("");
  const [validacao, setValidacao] = useState("");
  const [esconderSenha, setEsconderSenha] = useState(true);
  const [campo, setCampo] =useState(false);
const vazio = [nome, email, telefone, senha, confirmSenha];

  function insert() {
    AsyncStorage.setItem("nome", nome)
      .then(() => {
        console.log("Dados Armazenados com sucesso!");
      })
      .catch((error) => {
        console.error("Deu bom nao meu chegado", error);
      });

    AsyncStorage.setItem("email", email)
      .then(() => {
        console.log("Dados Armazenados com sucesso!");
      })
      .catch((error) => {
        console.error("Deu bom nao meu chegado", error);
      });

    AsyncStorage.setItem("telefone", telefone)
      .then(() => {
        console.log("Dados Armazenados com sucesso!");
      })
      .catch((error) => {
        console.error("Deu bom nao meu chegado", error);
      });

    AsyncStorage.setItem("senha", senha)
      .then(() => {
        console.log("Dados armazenados");
      })

      .catch((error) => {
        console.error("erro", error);
      });
  }

  function navegacao() {
    for (let i = 0; i < vazio.length; i++) {
      if (!vazio[i]) {
        setValidacao("Preencha todos os campos");
        setCampo(false); // Define como false se encontrar pelo menos um campo vazio
        return; // Sai da função se encontrar um campo vazio
      }
    }
  
    // Se o loop não encontrar nenhum campo vazio, define o estado campo como true
    setCampo(true);
  }


  return (
    <ImageBackground
      style={styles.imageBackground}
      source={require("../../../assets/Img/fundo.png")}
    >
      <View style={styles.input}>
        <TextInput
          style={styles.inputStyle}
          placeholder={"Nome"}
          value={nome}
          onChangeText={(texto) => setNome(texto)}
        ></TextInput>
        <TextInput
          style={styles.inputStyle}
          placeholder={"E-mail"}
          value={email}
          onChangeText={(texto) => setEmail(texto)}
        ></TextInput>
        <TextInput
          style={styles.inputStyle}
          placeholder={"Telefone"}
          value={telefone}
          onChangeText={(texto) => setFone(texto)}
        ></TextInput>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TextInput
            style={styles.inputStyleSenha}
            placeholder={"Senha"}
            value={senha}
            secureTextEntry={esconderSenha}
            onChangeText={(texto) => setSenha(texto)}
          ></TextInput>
          <Pressable
            style={styles.icon}
            onPress={() => setEsconderSenha(!esconderSenha)}
          >
            <Ionicons name="eye" color="#8a4617" size={25} />
          </Pressable>
        </View>
        <TextInput
          style={styles.inputStyle}
          placeholder={"Confirmar senha"}
          value={confirmSenha}
          secureTextEntry={esconderSenha}
          onChangeText={(texto) => setConfirmSenha(texto)}
        ></TextInput>
      </View> 
      <Text style={styles.textVerificacao}>{validacao}</Text>
     <Text style={styles.textVerificacao}>{textSenha}</Text>
      <View style={styles.button}>
        <Pressable style={styles.buttonStyle} onPress={() => navegacao()}>
          <Image
            source={require("../../../assets/Img/botaoProximo.png")}
            style={styles.imageButton}
          ></Image>
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

  textVerificacao:{
    fontWeight: '600',
    color: 'red',
    textAlign: 'center',
    
  },

  imageButton: {
    width: 150,
    height: 100,
    resizeMode: "contain",
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

  icon: {
    borderBottomWidth: 1,
    borderColor: "#8a4617",
    alignSelf: "end",
  },

  textTitulo: {
    fontSize: 40,
    fontWeight: "Bold",
    textAlign: "center",
    color: "white",
  },
  input: {
    flex: 1,
    width: 280,
    margin: "auto",
    marginTop: "60%",
    borderWidth: 3,
    borderRadius: 15,
    borderColor: "#8a4617",
    justifyContent: "space-evenly",
    backgroundColor: "#f5d1ad",
    paddingVertical: 20
    
  },
  inputStyle: {
    borderBottomWidth: 1,
    width: "80%",
    padding: 10,
    alignSelf: "center",

    borderColor: "#8a4617",
    color: "#8a4617",
  },


  inputStyleSenha: {
    borderBottomWidth: 1,
    width: "70%",
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
