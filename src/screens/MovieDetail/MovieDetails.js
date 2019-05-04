import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from "react-native";

class MovieDetail extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: null,
        };
    }
    render() {
        const { source, title, stats, description, casts } = this.props.navigation.state.params;
        return (
            <ScrollView style={styles.container}>
                <Image source={{ uri: source }} style={styles.poster} />
                <View style={styles.fixedText}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <Text style={styles.subtitle}>{stats}</Text>
                <TouchableOpacity onPress={() => alert("Watching")}>
                    <View style={styles.relativeButton}>
                        <Text style={styles.subtitle}>Watch Now</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.headings}>Details</Text>
                <Text style={styles.subtitle}>{description}</Text>
                <View style={styles.info} >
                    <View style={styles.infoView} >
                        <Text style={styles.headings}>Length</Text>
                        <Text style={styles.headings}>1hr 50min</Text>
                    </View>
                    <View style={styles.infoView}>
                        <Text style={styles.headings}>Language</Text>
                        <Text style={styles.headings}>English</Text>
                    </View>
                    <View style={styles.infoView}>
                        <Text style={styles.headings}>Rating</Text>
                        <Text style={styles.headings}>5/7</Text>
                    </View>
                </View>
                <Text style={styles.headings}>Cast</Text>
                <View style={styles.cast}>

                    <ScrollView horizontal>

                        {casts.map((cast, key) => (
                            <View key={key} style={styles.castdpView}>
                                <Image style={styles.castdp} source={{ uri: cast.castdpSource }} />
                                <Text style={styles.subtitle}>{cast.name}</Text>
                            </View>
                        ))
                        }



                    </ScrollView>
                </View>


            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 2

    },
    poster: {
        flex: 1,
        height: 350,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 5,
        marginBottom: 5,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },

    },
    subtitle: {
        fontSize: 15,
        color: '#fff',
        marginTop: 5,
        marginBottom: 5,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },

    },
    fixedText: {
        position: 'absolute',
        flexDirection: 'row',
        top: 250,
        left: 10,
        right: 0,
        bottom: 0,
    },
    headings: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#f39c12'
    },
    info: {
        flex: 1,

        flexDirection: 'row',
        padding: 5,
        color: '#f39c12',
        justifyContent: 'center',
        alignItems: 'center'

    },
    infoView: {
        flex: 1,

        alignItems: 'center',
        justifyContent: 'center',

    },
    cast: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center'

    },
    castdpView: {
        flex: 1,
        marginRight: 4,
        alignItems: 'center',
        justifyContent: 'center',

    },
    castdp: {
        borderRadius: 20,
        height: 50,
        width: 50
    },
    relativeButton: {

        backgroundColor: '#c0392b',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
});
export default MovieDetail;