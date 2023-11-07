import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Some text</Text>
      <Text>Some more text</Text>
      <Image
          source={{
            width: 100,
            height: 100,
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}          
        />
        <TextInput style={styles.datas} defaultValue="You can type in me" />
      <StatusBar style="auto" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  datas: {
    height: 40,
    borderColor: 'green',
    borderWidth: 5,
  },
});

