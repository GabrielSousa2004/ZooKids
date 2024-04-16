import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  ImageBackground,
} from "react-native";

export default function Home() {
  return (
    <ImageBackground
      style={styles.imageBackground}
      source={require("../../../assets/Img/fundoHigh.png")}
    >
      <View style={styles.header}>
        <Text style={styles.titulo}>Perfil</Text>
        <Pressable style={styles.setaContainer}>
          <Image
            source={require("../../../assets/Img/seta.png")}
            style={styles.imageSeta}
          />
        </Pressable>
        <Pressable style={styles.menuContainer}>
          <Image
            source={require("../../../assets/Img/garrasMenu.png")}
            style={styles.imageMenu}
          />
        </Pressable>
      </View>
      <View style={styles.boxUser}>
        <View style={styles.circulo}>
          <Image
            source={require("../../../assets/Img/usuario.png")}
            style={styles.imgUsuario}
          ></Image>
        </View>
      </View>
      <View style={styles.boxUsuario}>
        <Text style={styles.textTituloUsuario}>Gabriel da Silva</Text>
      </View>
      <View style={styles.boxButton}>
        <Pressable style={styles.buttonStyle}>
          <Text style={styles.textButton}>Editar Perfil</Text>
        </Pressable>
      </View>
      <View style={styles.boxDados}>
        <Text style={styles.tituloDados}>Email</Text>
        <Text style={styles.txtDados}>usuario@gmail.com</Text>
        <Text style={styles.tituloDados}>Telefone</Text>
        <Text style={styles.txtDados}>(11 900009988)</Text>
        <Text style={styles.tituloDados}>Endereço</Text>
        <Text style={styles.txtDados}>
          Rua Etec, 01 - Guaianases - São Paulo
        </Text>
        <Text style={styles.tituloDados}></Text>
        <Text style={styles.tituloDados}></Text>
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
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 40,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    flex: 1,
  },
  setaContainer: {
    position: "absolute",
    left: 10,
    top: 10,
  },
  imageSeta: {
    width: 30,
    height: 30,
  },
  menuContainer: {
    position: "absolute",
    right: 10,
    top: 4,
  },
  imageMenu: {
    width: 60,
    height: 60,
  },
  boxUser: {
    height:'20%',
  },
  imgUsuario: {
    resizeMode: "stretch",
    height: "100%",
    width: "100%",
    borderWidth: 3,
    borderRadius: 100,
    alignSelf: "center",
  },
  circulo: {
    backgroundColor: "transparent",

    height: 160,
    width: 160,
    alignSelf: "center",
    marginTop: 10,
  },
  textTituloUsuario: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  boxUsuario: {
    width: "100%",
  },
  boxButton: {
    flex: 0.1,
    alignItems: "center",
    marginTop:'3%'
  },
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#482C15",
    width: "35%",
    height: "60%",
    borderRadius: 15,
  },
  textButton: {
    color: "white",
    alignSelf: "center",
  },
  boxDados: {
    flex: 0.4,
  },
  tituloDados: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginTop: 12,
    left: 20,
  },
  txtDados: {
    fontSize: 15,
    fontWeight: "600",
    left: 20,
  },
});
