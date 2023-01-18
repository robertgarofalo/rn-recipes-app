import React from 'react'
import { Button, Text } from 'react-native'
import styles from './styles'

import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';


const Home = ({ navigation }) => {
    const insets = useSafeAreaInsets();

    return (
            <SafeAreaView style={styles.background}>
                <Text>HOME</Text>    
                <Button title="search" onPress={() => navigation.navigate('Search')}>Search</Button>            
            </SafeAreaView>
    )
}

export default React.memo(Home)