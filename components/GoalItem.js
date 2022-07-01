import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

const GoalItem = ({ id, text, handleDelete }) => {

  const handleDeleteItem = () => {
    handleDelete(id);
  }
  return (
    // the following bind() is new to me and I should
    // learn more to understand, we exactly happens here
    <Pressable onPress={handleDeleteItem}>
      <Text style={styles.goalItem}>{text} </Text>
    </Pressable>
  )
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    fontSize: 24,
    marginVertical: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#dd74e8'
  }
})
