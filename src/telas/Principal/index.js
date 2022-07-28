import React from 'react';
import { View, Text } from 'react-native';
import Cabecalho from '../../componentes/Cabecalho';
import Produto from '../../componentes/Produtos';
import estilos from './estilos';

export default function Principal({ navigation }) {

  return (
    <View style={estilos.container}>
      <Cabecalho navigation={navigation} />
      <Text style={estilos.texto}>Usuário: teste@email.com</Text>

      <Produto nome="Tênis" preco="200,00" />
      <Produto nome="Camisa" preco="100,00" />
      <Produto nome="Suplementos" preco="150,00" />
     </View>
  );
}
