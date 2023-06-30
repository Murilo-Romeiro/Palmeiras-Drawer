import React from 'react';
import { View, Image, StyleSheet } from 'react-native';



export function screens() {
  return (
    <View style={styles.container}>
        <Image source={require('./assets/palmeiras-logo.png')} style={styles.palmeiras}/>
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
    palmeiras: {
        position: 'fixed',
        top: '50%'
    }
});