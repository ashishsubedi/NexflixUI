import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from "react-native";
class MovieCardWide extends Component {

    render() {
        const { source, text } = this.props;
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={styles.container}>
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
        height: 150,
        width: 250,
        borderRadius: 10
    },
    title: {
        fontSize: 15,
        color: '#fff',
        marginTop: 5
    }
});
export default MovieCardWide;