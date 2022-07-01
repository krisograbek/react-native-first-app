import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goalsList, setGoalsList] = useState([]);

  const handleAddGoal = (newGoal) => {
    // using a callback with the previous state is the recommended way of updating state
    // when it depends on the previous state
    setGoalsList(prevState => [...prevState, { text: newGoal, key: Math.random().toString() }])
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput handleAddGoal={handleAddGoal} />
      <View style={styles.goalsContainer}>
        <FlatList data={goalsList}
          renderItem={(itemData) => <GoalItem text={itemData.item.text} />}
        />
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
  goalsContainer: {
    flex: 4
  },
});
