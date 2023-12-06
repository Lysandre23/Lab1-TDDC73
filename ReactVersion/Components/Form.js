import React from 'react'
import { StyleSheet, View, TextInput, Text} from 'react-native'

export default function Form(props) {
    return (
        <View style={styles.form}>
            <View style={styles.label}>
                <Text style={styles.textLabel}>Email</Text>
            </View>
            <TextInput style={styles.input} placeholder='Write here' selectionColor={'#e84393'}/>
            <View></View>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        marginTop: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      },
    label: {
        backgroundColor: '#2c3e50',
        padding: 15,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderColor: '#2c3e50',
        borderWidth: 2
      },
    textLabel: {
        color: 'white',
        fontWeight: 'bold'
      },
    input: {
        borderColor: '#2c3e50',
        borderWidth: 2,
        padding: 15,
        width: 200,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        color: '#2c3e50',
        fontFamily: 'Menlo'
    }
});