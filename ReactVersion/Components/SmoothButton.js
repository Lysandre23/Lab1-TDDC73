import React from 'react'
import { StyleSheet, Pressable, Text, TouchableOpacity } from 'react-native'

export default function SmoothButton(props) {
    const { onPress, title = 'Button' } = props;
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: props.color}]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 4,
        elevation: 3,
        marginLeft: 35,
        marginRight: 35,
        borderRadius: 5
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});