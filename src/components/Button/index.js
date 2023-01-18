import React from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styles from './styles'

const Button = ({ children, onPress }) => {
    const insets = useSafeAreaInsets()
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{children}</Text>
            <Image style={styles.icon} source={require('../../../assets/arrowRight.png')} />
        </TouchableOpacity>
    )
}

export default React.memo(Button)