import {
  Pressable,
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import { TextInput } from "react-native-web";

export default function Cadastro() {
  return (
    <ImageBackground
      style={styles.imageBackground}
      source={require("../../../assets/Img/fundo.png")}
    >
      <View style={styles.input}>
        <TextInput style={styles.inputStyle} placeholder={"Nome"}></TextInput>
        <TextInput style={styles.inputStyle} placeholder={"E-mail"}></TextInput>
        <TextInput style={styles.inputStyle} placeholder={"Senha"}></TextInput>
        <TextInput
          style={styles.inputStyle}
          placeholder={"Confirmar senha"}
        ></TextInput>
      </View>
      <View style={styles.button}>
        <Pressable style={styles.buttonStyle}>
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
