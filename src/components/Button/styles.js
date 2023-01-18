import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        borderRadius: 10,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        // alignSelf: 'center',
        alignItems: 'center',
    }, 
    text: {
        color: colors.white,
        fontSize: 20,
        fontWeight: '500',
    },
    icon: {
        width: 24,
        height: 24,
        marginLeft: 16,
    }
})

export default styles