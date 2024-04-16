import { Text, View, StyleSheet, Image, ImageBackground, Pressable } from 'react-native';


export default function Territorios() {
    return (


        <ImageBackground
            style={styles.imageBackground}
            source={require("../../../assets/Img/azulPlaca.png")}>

            <View style={styles.header}>
                <Pressable style={styles.menuContainer}>
                    <Image source={require("../../../assets/Img/garrasMenu.png")} style={styles.imageMenu} />
                </Pressable>
            </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        width: "100%",
        height: "100%",
    },
    imageSeta: {
        width: 30,
        height: 30,
        position: 'absolute',
        top: 25,
        left: 20
    },
    imageMenu: {
        width: 60,
        height: 60,
    },
    menuContainer:{
        position:'absolute',
        right:10,
        top:1
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 20,
    },
    titulo: {
        fontSize: 40,
        fontWeight: "bold",
        color: "black",
        textAlign: 'center',
        flex: 1
    },
    setaContainer: {
        position: 'absolute',
        left: 10,
        top: 10,
    },
    imageSeta: {
        width: 30,
        height: 30,
    },
}
);
