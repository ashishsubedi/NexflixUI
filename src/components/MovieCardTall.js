import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from "react-native";
class MovieCardTall extends Component {

    render() {
        const { source, text } = this.props;
        return (
            <TouchableOpacity onPress={this.props.onPress}>

                <View style={styles.container} >
                    <Image source={source} style={styles.poster} />
                    <Text style={styles.title}>{text}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 2

    },
    poster: {
        height: 250,
        width: 150,
        borderRadius: 15,
    },
    title: {
        fontSize: 15,
        color: '#fff',
        marginTop: 5
    }
});
export default MovieCardTall;