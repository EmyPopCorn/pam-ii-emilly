import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';

const backgroundImage = require('./assets/teladefundo.png');

const Pokemon = () => (
  <View style={styles.container}>
    <View
      style={[styles.backgroundImage, { backgroundImage: `url(${backgroundImage})` }]}
    >
      <View style={styles.content}>
        <Text style={styles.text}>Five Nights at Baianinho's</Text>
        <TextInput
        style={styles.textInput}
        placeholder="Nick Name:"
      />
        <TextInput
        style={styles.textInput}
        placeholder="Nome do Host"
        secureTextEntry={true}
      />
        <Button
          title='Entrar'
          onPress={()=>Alert.alert('Login realizado!')}
        />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // opcional: adicionar um fundo semi-transparente para melhor legibilidade do texto
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'yellow',
    flex: 1,
    justifyContent: "space-between"
    
  },
  textInput: {
    height: 40,
    width: 250,
    borderColor: 'grey',
    borderWidth: 1, 
    padding: 10,
    margin: 15,
    backgroundColor: 'white',
    color: 'dark-grey',
  },
  button: {
    backgroundColor: 'dark-grey',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

});

export default Pokemon;
