import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Pressable,
  FlatList,
} from "react-native";

const DATA = [
  {
    id: "1",
    nomeTerritorio: "TERRITÓRIO 1",
    imgFundoTerritorio: require("../../../assets/Img/azul.png"),
  },
  {
    id: "2",
    nomeTerritorio: "TERRITÓRIO 2",
    imgFundoTerritorio: require("../../../assets/Img/laranja.png"),
  },
  {
    id: "3",
    nomeTerritorio: "TERRITÓRIO 3",
    imgFundoTerritorio: require("../../../assets/Img/verde.png"),
  },
  {
    id: "4",
    nomeTerritorio: "TERRITÓRIO 4",
    imgFundoTerritorio: require("../../../assets/Img/roxo.png"),
  },
  {
    id: "5",
    nomeTerritorio: "TERRITÓRIO 5",
    imgFundoTerritorio: require("../../../assets/Img/marrom.png"),
  },
  {
    id: "6",
    nomeTerritorio: "TERRITÓRIO 6",
    imgFundoTerritorio: require("../../../assets/Img/rosa.png"),
  },
];


export default function Home({navigation}) {
    const Item = ({ nomeTerritorio, imgFundoTerritorio }) => (
        <Pressable onPress={() => navigation.navigate('Territorios')}>
    
      <View style={styles.itemContainer}>
        <ImageBackground
          style={styles.fundoFlatList}
          source={imgFundoTerritorio}
          >
          <View style={styles.cartao}>
            <Text style={styles.textCartao}>{nomeTerritorio}</Text>
          </View>
        </ImageBackground>
      </View>
            </Pressable>
    );
  return (
    <ImageBackground
      style={styles.imageBackground}
      source={require("../../../assets/Img/fundoTerritorio.png")}
    >
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
        renderItem={({ item }) => (
          <Item
            nomeTerritorio={item.nomeTerritorio}
            imgFundoTerritorio={item.imgFundoTerritorio}
          />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
      />
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
  menuContainer: {
    position: "absolute",
    right: 10,
    top: 1,
  },
  flatListContainer: {
    marginVertical: 30,
    flexGrow: 1,
    paddingVertical: 20,
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    width: "100%",
  },
  fundoFlatList: {
    width: "100%",
    aspectRatio: 3,
    borderWidth: 1,
    borderRadius: 20,
    overflow: "hidden",
  },
  cartao: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  textCartao: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});
