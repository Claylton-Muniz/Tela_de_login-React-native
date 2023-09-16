import React from 'react';
import { 
  View, Text, Image,
  ScrollView, Button,
  TouchableOpacity
  } from 'react-native';
import { InputBloc } from './Components/InputBloc';
import { styles } from './Styles/styles';

function App() {
  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('./Assets/logo.png')}
        />
        <Text style={styles.h1}>Bem vindo(a)!</Text>
        <Text style={styles.h2}>Digite seus dados abaixo.</Text>

        <View style={styles.inputArea}>
          <Text style={styles.textLogin}>Email</Text>
          <InputBloc placeholderName="Email" />
          <Text style={styles.textLogin}>Senha</Text>
          <InputBloc placeholderName="Senha" secureTextEntry={true}/>
        </View>
        
        <View style={styles.forgotArea}>
          <TouchableOpacity>
            <Text style={styles.forgotText}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default App;
