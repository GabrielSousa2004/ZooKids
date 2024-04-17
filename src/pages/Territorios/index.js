import React, {useState} from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Pressable,
  FlatList,
  Modal
} from "react-native";

const DATA = [
  {
    id: "1",
    nomeAnimal: "Leão",
    imgFundoAnimal: require("../../../assets/Img/leao.jpg"),
    classe: "Mamifero",
    peso: '190',
    reproducao: '3 Meses',
    Habitat: 'Savana'
  },
  {
    id: "2",
    nomeAnimal: "Arara",
    imgFundoAnimal: require("../../../assets/Img/arara.jpg"),
    classe: "Ave",
    peso: '1.5',
    reproducao: '30 Dias',
    Habitat: 'Floresta Tropical'
  },
  {
    id: "3",
    nomeAnimal: "Elefante",
    imgFundoAnimal: require("../../../assets/Img/elefante.jpg"),
    classe: "Mamifero",
    peso: '6.000',
    reproducao: '22 Meses',
    Habitat: 'Savana'
  },
  {
    id: "4",
    nomeAnimal: "Girafa",
    imgFundoAnimal: require("../../../assets/Img/girafa.jpg"),
    classe: "Herbivoro",
    peso: '1.200',
    reproducao: '14 Meses',
    Habitat: 'Savana'
  },
  {
    id: "5",
    nomeAnimal: "Zebra",
    imgFundoAnimal: require("../../../assets/Img/zebra.jpg"),
    classe: "Mamifero",
    peso: '190',
    reproducao: '11 Meses',
    Habitat: 'Savana'
  },
  {
    id: "6",
    nomeAnimal: "Panda",
    imgFundoAnimal: require("../../../assets/Img/panda.jpg"),
    classe: "Herbivoro",
    peso: '500',
    reproducao: '6 Meses',
    Habitat: 'Floresta de Bambu'
  },
  {
    id: "7",
    nomeAnimal: "Hipopotamo",
    imgFundoAnimal: require("../../../assets/Img/hipopotamo.jpg"),
    classe: "Onivoro",
    peso: '2.000',
    reproducao: '10 Meses',
    Habitat: 'pantano'
  },
  {
    id: "8",
    nomeAnimal: "Macaco",
    imgFundoAnimal: require("../../../assets/Img/macaco.jpg"),
    classe: "Mamifero",
    peso: '5',
    reproducao: '9 Meses',
    Habitat: 'Floresta'

  },
];

export default function Territorios({navigation}) {
    const [modalReiniciarVisible, setModalReiniciarVisible] = useState(false)
    const [selectedAnimal, setSelectedAnimal] = useState(null);

  const renderItem = ({ item }) => (
    <Pressable onPress={() => {
        setSelectedAnimal(item);
        setModalReiniciarVisible(true);
      }}>
      <View style={styles.boxContainer}>
        <View style={styles.itemContainer}>
          <ImageBackground
            style={styles.fundoFlatList}
            source={item.imgFundoAnimal}
          >
            <View style={styles.cartao}>
              <Text style={styles.textCartao}>{item.nomeAnimal}</Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    </Pressable>
  );

  return (
    <ImageBackground
      style={styles.imageBackground}
      source={require("../../../assets/Img/azulPlaca.png")}
    >
        <Pressable style={styles.setaContainer} onPress={() => navigation.navigate('Home')}>
          <Image
            source={require("../../../assets/Img/seta.png")}
            style={styles.imageSeta}
          />
        </Pressable>
      <View style={styles.header}>
        <Pressable style={styles.menuContainer}>
          <Image
            source={require("../../../assets/Img/garrasMenu.png")}
            style={styles.imageMenu}
          />
        </Pressable>
      </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
        numColumns={2}
      />

      <Modal transparent visible={modalReiniciarVisible}>
        <View style={styles.ModalReiniciarJogo}>
          <View style={styles.containerModalReiniciar}>
          
              <Pressable
                style={styles.buttonReload}
                onPress={() => {
                  setModalReiniciarVisible(false);
                }}
              >
                <Text style={{color: 'Brown', fontWeight: 'bold', fontSize: 20  }}>X</Text>
              </Pressable>
              
           
          <Image 
            source={selectedAnimal?.imgFundoAnimal}
            style={styles.imageAnimal}
          />
            
              <Text style={styles.txtNomeAnimal}>
                {selectedAnimal?.nomeAnimal}
              </Text>

              <Text style={{fontSize: 28, fontWeight: 'bold', color: '#804A1F', marginVertical: 20}}>Informações do Animal</Text>

              <View style={{width: '100%', paddingHorizontal: 5}}>
                <Text style={styles.listAnimal}>Classe: {selectedAnimal?.classe} </Text>
                <Text style={styles.listAnimal}>Peso: {selectedAnimal?.peso} Kg</Text>
                <Text style={styles.listAnimal}>Tempo de Reprodução: {selectedAnimal?.reproducao}</Text>
                <Text style={styles.listAnimal}>Habitat: {selectedAnimal?.Habitat}</Text>
              </View>
            
            
          </View>
        </View>
      </Modal>
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


  setaContainer: {
    position: "absolute",
    left: 10,
    top: 25,
  },
  imageSeta: {
    width: 30,
    height: 30,
  },
  menuContainer: {
    position: "absolute",
    right: 10,
    top: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  itemContainer: {
    flex: 5,
    aspectRatio: 1,
    marginVertical: 10,
    marginHorizontal: 5,
    width: 190,
    height: 190,
    alignSelf: "center",
    justifyContent: "center",
  },
  boxContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 3,
  },
  fundoFlatList: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderWidth: 1,
    borderRadius: 20,
    overflow: "hidden",
  },
  flatListContainer: {
    flexGrow: 1,
    paddingVertical: 60,
  },

  cartao: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
    textCartao: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
},
containerModalReiniciar:{
    width: '85%',
    backgroundColor: '#E7EFBA',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: '#804A1F',
    borderWidth: 7
    
},
ModalReiniciarJogo:{
    flex: 1,
    height: '80%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
},

boxReiniciar:{
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 50
},
boxTextModal:{
    flex: 2,
    height:'80%',
    justifyContent: 'center',
alignItems: 'center'
},

textModal:{
    textAlign: 'center',
    fontSize: 25,
    color: 'white'
},
textButtonReiniciar:{
    fontWeight: 'bold',
    color: '#eca753'
},

buttonReload:{
    position: 'absolute',
    right: 10,
    top: 20,
    justifyContent:'flex-end',
    
    
    padding: 10,
    
    borderRadius: '50%'
},
buttonReloadMenu:{
    justifyContent:'center',
    backgroundColor: '#eca753',
    
    padding: 10,
    
    borderRadius: 20
},
reiniciarPartida: {
    borderRadius: '50%',
    
},
imageAnimal:{
    borderWidth:2,
    borderRadius:20,
    width: '80%',
    height: '40%'
    
},  

txtNomeAnimal:{
  fontSize: 20,
  fontWeight: 'bold',
  color: '#804A1F'
},
listAnimal:{
    fontSize: 18,
  fontWeight: 'bold',
  color: '#804A1F'
}
});
