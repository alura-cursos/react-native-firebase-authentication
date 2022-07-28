import { Text, TouchableOpacity } from 'react-native';
import estilos from './estilos';

export default function Botao({ onPress, children }) {

  return (
    <TouchableOpacity style={estilos.botao} onPress={onPress}>
      <Text style={estilos.textoBotao}>{children}</Text>
    </TouchableOpacity>
  );
}
