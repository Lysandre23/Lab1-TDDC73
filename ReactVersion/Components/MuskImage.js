import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'

export default function MuskImage(props) {
    const imgs = [
        'https://e3.365dm.com/18/09/2048x1152/skynews-elon-musk-weed_4414031.jpg',
        'https://i0.wp.com/clownfishtv.com/wp-content/uploads/2023/03/Sad-Elon-Musk.jpg?ssl=1',
        'https://edtimes.in/wp-content/uploads/2020/05/5e7b3e222d41c15a700b5e06-1.jpg',
        'https://www.verdict.co.uk/wp-content/uploads/2021/10/GettyImages-1229892623.jpg'
    ];
    const [imageUrl, setImageUrl] = useState(imgs[0]);
    const [imageCounter, setImageCounter] = useState(0);

    const handleImageClick = () => {
        setImageCounter((imageCounter+1)%imgs.length);
        setImageUrl(imgs[imageCounter]);
    };
    
    return (
        <TouchableOpacity onPress={() => {
            handleImageClick();
            props.colorChange();
        }}>
        <Image
          style={styles.mainImage}
          source={{ uri : imageUrl }}
        />
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainImage: {
        width: 150,
        height: 150,
        marginBottom: 40,
        marginTop: 50,
        borderRadius: "100%"
    },
});