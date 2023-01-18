import React from 'react'
import { Text } from 'react-native'
import styles from './styles'

import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';


const Search = () => {
    const insets = useSafeAreaInsets();

    return (
            <SafeAreaView style={styles.background}>
                <Text>Search</Text>                
            </SafeAreaView>
    )
}

export default React.memo(Search)