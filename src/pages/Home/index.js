import { Text, View, StyleSheet} from 'react-native';

export default function Cadastro(){
    return(
        <View style={styles.container}>
            <View style={styles.titulo}>
                <Text style={styles.textTitulo} >ZOO Kids</Text>
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
        flex:1,
        backgroundColor:'green',    
        justifyContent:'center'
    },
    textTitulo:{
        fontSize: 40,
        fontFamily: 'Bold',
        textAlign:'center'
    },
   

  });
  