import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export function screens() {
    return (
        <View style={styles.container}>
            <Image source={require('./assets/flamengo-logo.png')} style={styles.flamengo}/>
            <Image source={require('./assets/gamba-logo.png')} style={styles.gamba}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    flamengo: {
        position: 'fixed',
        top: '50%'
    },
    gamba: {
        position: 'fixed',
        top: '70%'
    }
});