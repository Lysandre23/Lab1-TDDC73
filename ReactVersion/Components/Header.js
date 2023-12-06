import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function Header(props) {
    return (
        <View style={[styles.main, {backgroundColor: props.color}]}>
            <Text style={styles.title}>Example 1</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: 100,
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft: 20,
        fontSize: 25
    }
});