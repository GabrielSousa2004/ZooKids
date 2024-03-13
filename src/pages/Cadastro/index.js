import {
  Pressable,
  Text,
  View,
  StyleSheet,
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
        <Pressable style={styles.buttonStyle}>Enviar</Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    backgroundColor: "#4b793f",
  },
  titulo: {
    flex: 2,

    justifyContent: "center",
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    width: '100%',
    height: '100%'
  },
  textTitulo: {
    fontSize: 40,
    fontWeight: "Bold",
    textAlign: "center",
    color: "white",
  },
  input: {
    flex: 5,
    justifyContent: "space-evenly",
  },
  inputStyle: {
    borderWidth: 1,
    width: "80%",
    padding: 10,
    alignSelf: "center",
    borderRadius: 10,
    borderColor: "white",
    color: "#fff",
  },
  button: {
    flex: 1,
  },
  buttonStyle: {
    borderWidth: 1,
    width: "40%",
    padding: 8,
    alignSelf: "end",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 40,
    borderRadius: 10,
  },
});
