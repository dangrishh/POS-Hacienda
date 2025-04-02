import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
      },
    formContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '60%',
        height: "90%",
      },
    topPart: {
        backgroundColor: "blue",
    },
    middlePart: {
        backgroundColor: "gray",
    },
    bottomPart: {
        backgroundColor: "orange",
    },


});

export default styles