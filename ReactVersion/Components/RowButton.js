import 'react'
import { View, StyleSheet, Button, FlatList } from 'react-native'
import SmoothButton from './SmoothButton';

export default function RowButton(props) {
    const {bt1 = "Button"} = props.bt1;
    const {bt2 = "Button"} = props.bt2;
    return (
        <View style={styles.main}>
            <SmoothButton color={props.color} title={bt1}/>
            <SmoothButton color={props.color} title={bt2}/>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
    }
});