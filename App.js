import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import ItemContato from "./components/ItemContato";
import InputContato from "./components/InputContato";

export default function App() {
  const [contatos, setContatos] = useState([]);
  const [contador, setContador] = useState(10);

  const adicionarContato = (contato) => {
    setContatos((contatos) => {
      setContador(contador + 2);
      return [{ key: contador.toString(), value: contato }, ...contatos];
    });
  };

  const removerContato = (keyASerRemovida) => {
    setContatos((contatos) => {
      return contatos.filter((contato) => {
        return contato.key !== keyASerRemovida;
      });
    });
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Lista de Contatos</Text>
      <InputContato btnAdicionarContato={adicionarContato} />
      <FlatList
        data={contatos}
        renderItem={(contato) => (
          <ItemContato
            chave={contato.item.key}
            contato={contato.item.value}
            remove={removerContato}
          />
        )}
      />
    </View>
  );
}
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 50,
    marginTop: 150,
  },
});
