import { StyleSheet } from 'react-native';
import { fontSizes } from './theme';

export const styles = StyleSheet.create({
  scrollview: { 
    paddingHorizontal:15,
    paddingTop: 50
  },
  container: { alignItems: 'center' },
  logo: { 
    width: 150, 
    height: 150
  },
  h1: { 
    color: '#000',
    fontSize: fontSizes.l,
    fontWeight: 'bold'
  },
  h2: {
    color: '#999',
    fontSize: fontSizes.m,
    marginVertical: 10
  },
  inputArea: {
    width: '100%',
    
  },
  textLogin: {
    fontWeight: 'bold',
    color: '#777',
    fontSize: 14
  },
  inputLabel: {
    backgroundColor: '#EEE',
    padding: 8,
    marginVertical: 10
  },
  forgotArea: {
    width: '100%',
    alignItems: 'flex-end'
  },
  forgotText: {
    color: 'blue',
  },
  buttonArea: {
    marginVertical: 10,
    backgroundColor: '#0D61FF',
    width: '30%',
    borderRadius: 9,
    padding:13
  },
  button: {
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: fontSizes.m,
    fontWeight: 'bold'
  }
});
