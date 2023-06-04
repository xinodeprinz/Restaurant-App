import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Login</Text>
                <View style={styles.element}>
                    <Text style={styles.label}>Phone</Text>
                    <TextInput
                        placeholder='689765678'
                        keyboardType='numeric'
                        style={styles.input}
                    />
                </View>
                <View style={styles.element}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        placeholder='Password'
                        secureTextEntry={true}
                        style={styles.input}
                    />
                </View>
                <Text style={styles.forgot}>Forgot password?</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
                <View style={styles.link}>
                    <Text>Don't have an account?</Text>
                    <TouchableOpacity
                        style={styles.goLink}
                        onPress={() => navigation.navigate('Register')}
                    >
                        <Text style={styles.goText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '100%'
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        marginBottom: 15,
        textAlign: 'center'
    },
    element: {
        // 
    },
    input: {
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    label: {
        marginVertical: 5,
        textTransform: 'capitalize',
        fontWeight: '400',
        fontSize: 14,
    },
    btn: {
        width: '100%',
        backgroundColor: '#e47911',
        marginTop: 10,
        paddingVertical: 10,
        borderRadius: 5,
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    },
    forgot: {
        textAlign: 'right',
        color: 'red',
    },
    link: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    goLink: {
        marginLeft: 5,
    },
    goText: {
        color: 'red',
    },
});