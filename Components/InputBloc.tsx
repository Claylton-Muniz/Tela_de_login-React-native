import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from '../Styles/styles';

type Props = {
  placeholderName: string,
  secureTextEntry?: boolean
}

export function InputBloc({ placeholderName, secureTextEntry } : Props) {
  const [email, setEmail] = useState("");

  return(
    <View>
      <TextInput 
        style={[styles.inputArea, styles.inputLabel]}
        placeholder={placeholderName}
        placeholderTextColor="#999"
        value={email}
        onChangeText={text => setEmail(text)}
        secureTextEntry={secureTextEntry}
      />
      <Text>{email}</Text>
    </View>
  );

}
