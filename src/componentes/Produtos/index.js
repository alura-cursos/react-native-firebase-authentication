import { View, Text } from 'react-native';
import estilos from './estilos';

export default function Produto({ nome, preco }) {

  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}>{nome}</Text>
      <Text style={estilos.texto}>R$ {preco}</Text>
    </View>
  );
}
