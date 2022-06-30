import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [newGoal, setNewGoal] = useState("")
  const [goalsList, setGoalsList] = useState([])

  const handleGoalInput = enteredText => {
    setNewGoal(enteredText)
  }

  const handleAddGoal = () => {
    // using a callback with the previous state is the recommended way of updating state
    // when it depends on the previous state
    setGoalsList(prevState => [...prevState, newGoal])
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your goal" onChangeText={handleGoalInput} />
        <Button title="Add Goal" onPress={handleAddGoal} />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView >
          {/* <Text>List of goals</Text> */}
          {goalsList.map((goal, i) => (
            <Text key={i} style={styles.goalItem}>{goal}</Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,    // to take 100% of device height
    paddingTop: 80,
    paddingHorizontal: 30
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 4
  },
  goalItem: {
    fontSize: 24,
    marginVertical: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#dd74e8'
  }
});
