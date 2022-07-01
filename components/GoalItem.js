import React from 'react'
import { StyleSheet, Text } from 'react-native'

const GoalItem = ({ text }) => {
  return (
    <Text style={styles.goalItem}>{text} </Text>
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
