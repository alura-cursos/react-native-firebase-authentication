import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import Botao from '../../componentes/Botao';
import { EntradaTexto } from '../../componentes/EntradaTexto';
import { logar } from '../../servicos/requisicoesFirebase';
import estilos from './estilos';
import { Alerta } from '../../componentes/Alerta';
import { auth } from '../../config/firebase';
import { alteraDados } from '../../utils/comum';

import animacaoCarregando from '../../../assets/animacaoCarregando.gif';

export default function Login({ navigation }) {
  const [dados, setDados] = useState({
    email: '',
    senha: ''
  })

  const [statusError, setStatusError] = useState('');
  const [mensagemError, setMensagemError] = useState('');
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const estadoUsuario = auth.onAuthStateChanged( usuario => {
      if(usuario){
        navigation.replace('Principal')
      }
      setCarregando(false)
    })
    return () => estadoUsuario();
  },[])

  async function realizarLogin(){
    if(dados.email == ''){
      setMensagemError('O email é obrigatório!');
      setStatusError('email');
    } else if(dados.senha == ''){
      setMensagemError('A senha é obrigatória!');
      setStatusError('senha');
    } else {
      const resultado = await logar(dados.email, dados.senha);
      if(resultado == 'erro'){
        setStatusError('firebase')
        setMensagemError('Email ou senha não conferem')
      } 
      else {
        navigation.replace('Principal')
      }
    }
  }

  if(carregando) {
    return (
      <View style={estilos.containerAnimacao}>
        <Image source={animacaoCarregando} 
          style={estilos.imagem}
        />
      </View>
    )
  }

  return (
    <View style={estilos.container}>
      <EntradaTexto 
        label="E-mail"
        value={dados.email}
        onChangeText={valor => alteraDados('email', valor, dados, setDados)}
        error={statusError == 'email'}
        messageError={mensagemError}
      />
      <EntradaTexto
        label="Senha"
        value={dados.senha}
        onChangeText={valor => alteraDados('senha', valor, dados, setDados)}
        secureTextEntry
        error={statusError == 'senha'}
        messageError={mensagemError}
      />

      <Alerta 
        mensagem={mensagemError}
        error={statusError == 'firebase'}
        setError={setStatusError}
      />
      
      <Botao onPress={() => realizarLogin()}>LOGAR</Botao>
      <Botao 
        onPress={() => { navigation.navigate('Cadastro') }}
      >
        CADASTRAR USUÁRIO
      </Botao>
    </View>
  );
}
