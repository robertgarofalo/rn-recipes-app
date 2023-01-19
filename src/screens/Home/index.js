import React from 'react'
import { Button, Text } from 'react-native'
import styles from './styles'

import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import Input from '../../components/Input';

const Home = ({ navigation }) => {
    const insets = useSafeAreaInsets();

    return (
            <SafeAreaView style={styles.container}>
                <Text>Welcome</Text>    
                <Button title="search" onPress={() => navigation.navigate('Search')}>Search</Button> 
                <Input placeholder={'Search here brother'} showSearchIcon/>        
            </SafeAreaView>
    )
}

export default React.memo(Home)