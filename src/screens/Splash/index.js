import React from 'react'
import { ImageBackground, Text, View, Image } from 'react-native'
import styles from './styles'
import Button from '../../components/Button'

import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Splash = ({ navigation}) => {
    const insets = useSafeAreaInsets()

    return (
            <ImageBackground style={styles.background} source={require('../../../assets/splash.png')}>
                <View style={styles.container}>
                    <Image style={styles.logo} source={require('../../../assets/logo.png')} />
                        <Text style={styles.title}>100K+ Premium Recipe</Text>
                </View>
                <View style={styles.container}>
                        <Text style={styles.bigTitle}>Get Cooking</Text>
                        <Text style={styles.subTitle}>Simple way to find a Tasty Recipe</Text>
                        <Button onPress={() => navigation.navigate('Home')}>Start Cooking</Button>
                </View>
            </ImageBackground>
    )
}

export default React.memo(Splash)