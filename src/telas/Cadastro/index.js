import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Botao from '../../componentes/Botao';
import { EntradaTexto } from '../../componentes/EntradaTexto';
import estilos from './estilos';
import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Cadastro({ navigation }) {  
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');

  useEffect(() => {
    createUserWithEmailAndPassword(auth, "andre2@email.com", "123456")
    .then((dadosDoUsuario) => {
      console.log(dadosDoUsuario)
    })
    .catch((error) => {
      console.log(error)
    });
  }, [])

  return (
    <View style={estilos.container}>
      <EntradaTexto 
        label="E-mail"
        value={email}
        onChangeText={texto => setEmail(texto)}
      />
      <EntradaTexto
        label="Senha"
        value={senha}
        onChangeText={texto => setSenha(texto)}
        secureTextEntry
      />

      <EntradaTexto
        label="Confirmar Senha"
        value={confirmaSenha}
        onChangeText={texto => setConfirmaSenha(texto)}
        secureTextEntry
      />
      
      <Botao onPress={() => {}}>CADASTRAR</Botao>
    </View>
  );
}
