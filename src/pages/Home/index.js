import { Text, View, StyleSheet, Image} from 'react-native';

export default function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.titulo}>
                
                <View style={{flex: 4, backgroundColor: 'red'}}></View>
                <View style={styles.perfil}></View>
                <View style={styles.circulo}>
                <Image source={require("../../../assets/Img/usuario.png")}
          style={styles.imgUsuario}></Image>
                    
                </View>
            </View>
            <View style={styles.dados}>

                <Text style={styles.textTitulo} >Nome</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
     
   
    },
    titulo:{
        flex:2,   
        justifyContent:'center',
    
        
    },
    perfil:{
        flex: 2,
       backgroundColor: '#fff',
       
        
    },

    imgUsuario:{
        resizeMode: 'stretch',
        height: '100%',
        width: '100%',
        borderWidth: 3,
        borderRadius: '100%',
        alignSelf: 'center',
        position: 'relative',
       
    },
    circulo:{
        marginTop: '20%',
        backgroundColor: 'transparent',
        position: 'absolute',
        height: 180,
        width: 180,
        alignSelf: 'center'

    },
    textTitulo:{
        fontSize: 40,
        fontFamily: 'Bold',
        textAlign:'center'
    },
    dados:{
        flex:3,
        backgroundColor:'#fff',
    }
   

  });
  