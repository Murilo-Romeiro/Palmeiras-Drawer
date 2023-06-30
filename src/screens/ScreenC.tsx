import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function screens() {
    return (
        <View style={styles.container}>
            <Text style={styles.hino}>Quando surge o alviverde imponente
                No gramado em que a luta o aguarda
                Sabe bem o que vem pela frente
                Que a dureza do prélio não tarda

                E o Palmeiras no ardor da partida
                Transformando a lealdade em padrão
                Sabe sempre levar de vencida
                E mostrar que de fato é campeão

                Defesa que ninguém passa
                Linha atacante de raça
                Torcida que canta e vibra

                Defesa que ninguém passa
                Linha atacante de raça
                Torcida que canta e vibra

                Por nosso alviverde inteiro
                Que sabe ser brasileiro
                Ostentando a sua fibra</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
});