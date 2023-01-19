import React from 'react'
import { Image, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import styles from './styles'
import colors from '../../constants/colors'

const Input = ({ placeholder, showSearchIcon, style }) => {
    const insets = useSafeAreaInsets()
    return (
        <View style={[styles.container, style]}>
            {showSearchIcon ? (
                <Image style={styles.icon} source={require('../../../assets/search.png')} />
                ) : null }
                <TextInput placeholderTextColor={colors.lightGrey} style={styles.input} placeholder={placeholder} />
        </View>
    )
}

Input.defaultProps = {
    placeholder: 'Search recipe'
}

export default React.memo(Input)