import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const handleAddGoal = (newGoal) => {
    // using a callback with the previous state is the recommended way of updating state
    // when it depends on the previous state
    setGoalsList(prevState => [...prevState, { text: newGoal, key: Math.random().toString() }]);
    setModalIsVisible(false);
  }

  const handleDelete = (id) => {
    // it's better to filter by id, because they are unique
    setGoalsList(prevState => prevState.filter((goal) => goal.key !== id));
  }

  const endAddGoal = () => {
    setModalIsVisible(false);
  }

  return (
    <View style={styles.appContainer}>
      <Button title='Add a new goal' onPress={() => setModalIsVisible(true)} />
      <GoalInput handleAddGoal={handleAddGoal} showModal={modalIsVisible} endAddGoal={endAddGoal} />
      <View style={styles.goalsContainer}>
        <FlatList data={goalsList}
          renderItem={(itemData) => (
            <GoalItem
              text={itemData.item.text}
              id={itemData.item.key}
              handleDelete={handleDelete}
            />
          )}
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
