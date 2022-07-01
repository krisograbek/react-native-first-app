import React from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

const GoalInput = ({ handleGoalInput, handleAddGoal }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} placeholder="Your goal" onChangeText={handleGoalInput} />
      <Button title="Add Goal" onPress={handleAddGoal} />
    </View>
  )
}

export default GoalInput;

const styles = StyleSheet.create({
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
})
