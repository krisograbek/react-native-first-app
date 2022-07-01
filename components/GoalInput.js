import React, { useState } from 'react'
import { Button, Image, Modal, StyleSheet, TextInput, View } from 'react-native'

const GoalInput = ({ handleAddGoal, endAddGoal, showModal }) => {
  const [newGoal, setNewGoal] = useState("")

  const handleGoalInput = enteredText => {
    setNewGoal(enteredText)
  }

  const addGoalHandler = () => {
    handleAddGoal(newGoal);
    setNewGoal('');
  }

  const onModalClose = () => {
    endAddGoal();
    setNewGoal('');
  }

  return (
    <Modal visible={showModal} animationType="fade">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput
          style={styles.textInput}
          value={newGoal}
          placeholder="Your goal"
          placeholderTextColor="white"
          onChangeText={handleGoalInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Close" onPress={onModalClose} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4a068f'
  },
  image: {
    width: 100,
    height: 100,
    margin: 16
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    padding: 8,
    color: 'white'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 16,

  },
  button: {
    width: '40%',
    // marginHorizontal: 8,
  }
})
