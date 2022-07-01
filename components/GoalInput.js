import React, { useState } from 'react'
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native'

const GoalInput = ({ handleAddGoal, showModal }) => {
  const [newGoal, setNewGoal] = useState("")

  const handleGoalInput = enteredText => {
    setNewGoal(enteredText)
  }

  const addGoalHandler = () => {
    handleAddGoal(newGoal);
    setNewGoal('')
  }

  return (
    <Modal visible={showModal}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} value={newGoal} placeholder="Your goal" onChangeText={handleGoalInput} />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
    </Modal>
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
