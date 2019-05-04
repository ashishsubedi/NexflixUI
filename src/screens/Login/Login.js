import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    KeyboardAvoidingView
} from 'react-native';



export default class Login extends React.Component {
    
    static navigationOptions = {
        header : null
    }
    render() {
    
        return (

            <KeyboardAvoidingView style={styles.container} behavior='padding'>
                <View style={styles.topContainer}>
                </View>
                <View style={styles.formContainer}>
                    <TextInput style={styles.input} placeholder='Email' textContentType='emailAddress' />
                    <TextInput style={styles.input} placeholder="Password" textContentType='password' />
                    <Button
                        title='Login' color='#95a5a6'
                        onPress={() => this.props.navigation.navigate('Dashboard')}
                    />
                </View>
            </KeyboardAvoidingView>
        );
    }
}




const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#ecf0f1',
    },
    formContainer: {
        flex: 1,
        backgroundColor: '#e74c3c',
        padding: 100,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        justifyContent: 'center',
        alignItems: 'center'

    },
    topContainer: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        padding: 100
    },
    input: {
        height: 40,
        width: 300,
        backgroundColor: 'rgba(255,255,255,.8)',
        margin: 10
    }
});
