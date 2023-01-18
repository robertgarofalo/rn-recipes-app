import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    background: {
        width: '100%', 
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container: {
        paddingHorizontal: 15,
        paddingVertical: 70,
    }, 
    title: {
        color: colors.white,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '500',
        marginTop: 14,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
    },
    bigTitle: {
        fontSize: 50,
        textAlign: 'center',
        fontWeight: 'bold',
        color: colors.white,
        marginBottom: 10,
        paddingHorizontal: 30,

    },
    subTitle: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 64,
        marginTop: 10,
    }
})

export default styles