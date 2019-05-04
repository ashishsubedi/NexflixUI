import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    ScrollView,
    FlatList
} from 'react-native';

import MovieCardWide from '../../components/MovieCardWide';
import MovieCardTall from '../../components/MovieCardTall';


export default class Dashboard extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitleStyle: {
                flex: 1,
                fontWeight: 'bold',
                textAlign: 'center',

            },
            title: 'Home',
            headerStyle: {
                backgroundColor: '#c0392b'
            },

            headerTintColor: '#fff',

            headerBackTitleVisible: true,
            headerLeft: (<Text style={{ fontWeight: 'bold', fontSize: 24, color: '#fff' }} onPress={() => alert('Hamburger Pressed')}>|||</Text>),
            headerRight: (<Text style={{ fontWeight: 'bold', fontSize: 16, color: '#fff' }} onPress={() => alert('Search')}>Search</Text>)
        };
    }
    onPressItem = () => {
        return (

            this.props.navigation.navigate('MovieDetail', {
                source: 'https://via.placeholder.com/600',
                title: "Avengers: Endgame",
                stats: '70000 watched',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                casts: [
                    {
                        name: 'Matt Daemon',
                        castdpSource: 'https://via.placeholder.com/50 '
                    }, {
                        name: 'Matt Daemon',
                        castdpSource: 'https://via.placeholder.com/50 '
                    }, {
                        name: 'Matt Daemon',
                        castdpSource: 'https://via.placeholder.com/50 '
                    }, {
                        name: 'Matt Daemon',
                        castdpSource: 'https://via.placeholder.com/50 '
                    }, {
                        name: 'Matt Daemon',
                        castdpSource: 'https://via.placeholder.com/50 '
                    }
                ]

            })
        );
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.headings}>Recommend</Text>
                    <ScrollView horizontal style={styles.scrollableContents}>
                        <MovieCardWide source={{ uri: 'https://via.placeholder.com/400' }} text="Avengers: Endgame" onPress={this.onPressItem} />
                        <MovieCardWide source={{ uri: 'https://via.placeholder.com/400' }} text="Avengers: Endgame" onPress={this.onPressItem} />
                        <MovieCardWide source={{ uri: 'https://via.placeholder.com/400' }} text="Avengers: Endgame" onPress={this.onPressItem} />
                        <MovieCardWide source={{ uri: 'https://via.placeholder.com/400' }} text="Avengers: Endgame" onPress={this.onPressItem} />
                        <MovieCardWide source={{ uri: 'https://via.placeholder.com/400' }} text="Avengers: Endgame" onPress={this.onPressItem} />
                        <MovieCardWide source={{ uri: 'https://via.placeholder.com/400' }} text="Avengers: Endgame" onPress={this.onPressItem} />
                    </ScrollView>
                </View>
                <View style={styles.content}>
                    <Text style={styles.headings}>Popular</Text>
                    <ScrollView horizontal style={styles.scrollableContents}>
                        <MovieCardTall source={{ uri: 'https://via.placeholder.com/400' }} text="Avengers: Endgame" onPress={this.onPressItem} />
                        <MovieCardTall source={{ uri: 'https://via.placeholder.com/400' }} text="Avengers: Endgame" onPress={this.onPressItem} />
                        <MovieCardTall source={{ uri: 'https://via.placeholder.com/400' }} text="Avengers: Endgame" onPress={this.onPressItem} />
                        <MovieCardTall source={{ uri: 'https://via.placeholder.com/400' }} text="Avengers: Endgame" onPress={this.onPressItem} />
                        <MovieCardTall source={{ uri: 'https://via.placeholder.com/400' }} text="Avengers: Endgame" onPress={this.onPressItem} />
                        <MovieCardTall source={{ uri: 'https://via.placeholder.com/400' }} text="Avengers: Endgame" onPress={this.onPressItem} />
                        <MovieCardTall source={{ uri: 'https://via.placeholder.com/400' }} text="Avengers: Endgame" onPress={this.onPressItem} />
                    </ScrollView>
                </View>
                <View style={styles.content}>
                    <Text style={styles.headings}>TV Shows</Text>
                    <ScrollView horizontal style={styles.scrollableContents}>
                        <MovieCardTall source={{ uri: 'https://via.placeholder.com/400' }} text="Game of Thrones" onPress={this.onPressItem} />
                        <MovieCardTall source={{ uri: 'https://via.placeholder.com/400' }} text="Game of Thrones" onPress={this.onPressItem} />
                        <MovieCardTall source={{ uri: 'https://via.placeholder.com/400' }} text="Game of Thrones" onPress={this.onPressItem} />
                        <MovieCardTall source={{ uri: 'https://via.placeholder.com/400' }} text="Game of Thrones" onPress={this.onPressItem} />
                        <MovieCardTall source={{ uri: 'https://via.placeholder.com/400' }} text="Game of Thrones" onPress={this.onPressItem} />
                        <MovieCardTall source={{ uri: 'https://via.placeholder.com/400' }} text="Game of Thrones" onPress={this.onPressItem} />
                        <MovieCardTall source={{ uri: 'https://via.placeholder.com/400' }} text="Game of Thrones" onPress={this.onPressItem} />
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
        paddingLeft: 10,
        paddingTop: 5
    },
    scrollableContents: {
        paddingTop: 5,
        paddingBottom: 20
    },
    headings: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#f39c12'
    }
});
