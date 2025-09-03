import { AuthContext } from '@/context/authUser'
import { Redirect } from 'expo-router'
import React, { useContext, useState } from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, Text } from 'react-native'
import { ActivityIndicator, Button, MD2Colors, TextInput } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'




export default function Login() {



    const { signUp, signIn, signOut, isLoading, user } = useContext(AuthContext)!

    const [isSignUp, setIsSignUp] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const changeSignUp = () => {
        setIsSignUp(prev => !prev)
    }

    if (user) return <Redirect href={'/(tabs)'} />

    return (
        <KeyboardAvoidingView style={style.content} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <SafeAreaView style={style.safeView}>
                <Text style={style.title}>Seja bem vindo</Text>

                {isSignUp && (
                    <TextInput
                        onChangeText={text => setName(text)}
                        mode='outlined'
                        style={style.inputStyle}
                        label={'Nome'}
                        autoCapitalize='none'
                        placeholder='Nome'
                        value={name}
                    />
                )}

                <TextInput
                    onChangeText={text => setEmail(text)}
                    mode='outlined'
                    style={style.inputStyle}
                    label={'Email'}
                    autoCapitalize='none'
                    keyboardType='email-address'
                    placeholder='Email'
                    value={email}
                />

                <TextInput
                    onChangeText={text => setPassword(text)}
                    mode='outlined'
                    style={style.inputStyle}
                    label={'Senha'}
                    autoCapitalize='none'
                    secureTextEntry
                    placeholder='Senha'
                    value={password}
                />

                {
                    isSignUp ? (
                        <Button
                            mode="contained"
                            textColor="white"
                            style={style.button}

                            onPress={() => signUp(name, email, password)}
                        >
                            {isLoading ? <ActivityIndicator animating={true} color={MD2Colors.red800} /> : 'Cadastrar'}
                        </Button>
                    ) : (
                        <Button
                            mode="contained"
                            textColor="white"
                            style={style.button}

                            onPress={() => signIn(email, password)}
                        >
                            Login
                        </Button>
                    )
                }



                {isSignUp ? (
                    <Button onPress={() => changeSignUp()} style={style.title}>Já tem uma conta? Entre aqui</Button>
                ) :
                    (
                        <Button onPress={() => changeSignUp()} style={style.title}>Não tem uma conta? Cadastre-se</Button>
                    )}


            </SafeAreaView>
        </KeyboardAvoidingView>
    )



}

const style = StyleSheet.create({
    content: {

        display: 'flex',
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    safeView: {

        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold'
    },

    inputStyle: {
        width: '90%',
        height: 60,
        marginBottom: 10,
        backgroundColor: 'white'
    },

    button: {
        width: '90%',
        height: 60,
        marginBottom: 10,
        backgroundColor: '#7B68EE',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
