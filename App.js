import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your goal" />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 80,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    paddingLeft: 8
  }
});
