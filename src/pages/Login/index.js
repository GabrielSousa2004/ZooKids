import {Pressable, Text, View, StyleSheet} from 'react-native';
import { TextInput } from 'react-native-web';


export default function Login(){
    return(
        <View style={styles.container}>
            <View style={styles.titulo}>
                <Text style={styles.textTitulo} >Login</Text>
            </View>
            <View style={styles.input}>
                <TextInput style={styles.inputStyle}></TextInput>
                <TextInput style={styles.inputStyle}></TextInput>
            </View>
            <View style={styles.button}>
                <Pressable style={styles.buttonStyle}>Enviar</Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
   
    },
    titulo:{
        flex:2,
        
        justifyContent:'center'
    },
    textTitulo:{
        fontSize: 40,
        fontFamily: 'Bold',
        textAlign:'center'
    },
    input:{
        flex:3,
       
        justifyContent:'space-evenly'
        
    },
    inputStyle:{
        borderWidth:2,
        width: '80%',
        padding: 10,
        alignSelf: 'center'
       
        
    },
    button:{
        flex:2,
        

    },
    buttonStyle:{
        borderWidth:2,
        width: '40%',
        padding: 8,
        alignSelf: 'end',
        justifyContent:'center',
        alignItems: 'center',
        marginRight:40,

    },
   

  });
  