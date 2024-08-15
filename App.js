import React, { useState } from 'react';
import { Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.length > 0) {
      setTasks([...tasks, { key: String(tasks.length + 1), value: task }]);
      setTask('');
    }
  };

  const removeTask = (taskKey) => {
    setTasks(tasks.filter(task => task.key !== taskKey));
  };

  return (
    <View style={{ padding: 30 }}>
      <TextInput
        placeholder="Add a new task"
        value={task}
        onChangeText={setTask}
        style={{ padding: 10, marginBottom: 10, borderColor: 'black', borderWidth: 1 }}
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        style={{ marginTop: 20 }}
        data={tasks}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => removeTask(item.key)}>
            <View style={{ padding: 10, backgroundColor: '#ccc', marginBottom: 10 }}>
              <Text>{item.value}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
