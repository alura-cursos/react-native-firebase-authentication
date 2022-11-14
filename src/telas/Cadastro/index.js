import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import Botao from '../../componentes/Botao';
import { EntradaTexto } from '../../componentes/EntradaTexto';
import estilos from './estilos';
import { cadastrar } from '../../servicos/requisicoesFirebase';
import { Alerta } from '../../componentes/Alerta';
import { alteraDados, verificaSeTemEntradaVazia } from '../../utils/comum';
import { entradas } from './entradas';

export default function Cadastro({ navigation }) {  
  const [dados, setDados] = useState({
    email: '',
    senha: '',
    confirmaSenha: ''
  })

  const [statusError, setStatusError] = useState('');
  const [mensagemError, setMensagemError] = useState('');

  function verificaSeSenhasSaoIguais(){
    return dados.senha != dados.confirmaSenha
  }

  async function realizarCadastro(){
    if(verificaSeTemEntradaVazia(dados, setDados)) return
    if(dados.senha != dados.confirmaSenha) {
      setStatusError(true)
      setMensagemError('As senhas não conferem')
      return
    }

    const resultado = await cadastrar(dados.email, dados.senha);
    if(resultado != 'sucesso'){
      setStatusError(true)
      setMensagemError(resultado)
    }
  }

  return (
    <View style={estilos.container}>
      {
        entradas.map((entrada) => {
          return (
            <EntradaTexto
              key={entrada.id}
              {...entrada}
              value={dados[entrada.name]}
              onChangeText={valor => alteraDados(entrada.name, valor, dados, setDados)}
              error={entrada.name != 'confirmaSenha' ? false
              : verificaSeSenhasSaoIguais() && dados.confirmaSenha != ''
            }
            />  
          )
        })
      }

      <Alerta 
        mensagem={mensagemError}
        error={statusError}
        setError={setStatusError}
      />
      
      <Botao onPress={() => realizarCadastro()}>CADASTRAR</Botao>
    </View>
  );
}
