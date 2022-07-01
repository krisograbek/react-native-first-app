import React from 'react'
import { Text } from 'react-native'

const GoalItem = ({ styles, itemData }) => {
  return (
    <Text style={styles.goalItem}>{itemData.item.text}</Text>
  )
}

export default GoalItem