import { Text, View, StyleSheet, Image, Pressable } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.titulo}>
                <View style={styles.fundoPerfil}>
                    <Image source={require("../../../assets/Img/fundoPerfil.jpg")} style={styles.imgPerfil} />
                </View>
                <View style={styles.perfil}></View>
                <View style={styles.circulo}>
                    <Image source={require("../../../assets/Img/usuario.png")}
                        style={styles.imgUsuario}></Image>
                    <View style={styles.boxDados}>
                        <Text style={styles.textTitulo} >Gabriel da Silva Sousa</Text>
                        <Text style={styles.txtEmail} >gabrielsilva.sousa2004@gmail.com</Text>
                    </View>
                </View>
            </View>
            <View style={styles.dados}>
            <View style={styles.button}>
          <Pressable style={styles.buttonStyle}>
            <Image source={require("../../../assets/Img/botaoEntrar.png")}
            style={styles.imageButton}></Image>
          </Pressable>
        </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageButton:{
        width: 150,
        height: 100,
        resizeMode: 'contain'
      },
      buttonStyle: {
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
       
      },
    titulo: {
        flex: 1,
        justifyContent: 'center',


    },
    imgPerfil: {
        resizeMode: 'cover'

    },
    fundoPerfil: {
        flex: 3.2,
        backgroundColor: 'red',

    },
    perfil: {
        flex: 2,
        backgroundColor: '#fff',


    },

    imgUsuario: {
        resizeMode: 'stretch',
        height: '100%',
        width: '100%',
        borderWidth: 3,
        borderRadius: '100%',
        alignSelf: 'center',


    },
    circulo: {
        marginTop: 60,
        backgroundColor: 'transparent',
        position: 'absolute',
        height: 180,
        width: 180,
        alignSelf: 'center'

    },
    textTitulo: {
        fontSize: 18,
        fontFamily: 'Bold',
        textAlign: 'center',

    },
    boxDados: {
        width: '100%'
    },
    txtEmail: {
        fontSize: 10,
        fontFamily: 'Bold',
        textAlign: 'center',
        color: 'gray'

    },
    dados: {
        flex: 0.7,
        backgroundColor: '#fff',

    }


});
