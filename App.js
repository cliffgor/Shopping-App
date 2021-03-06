import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/header';
import {uuid} from 'uuidv4';
import ListItem from './components/ListItem.js';
import AddItem from './components/AddItem.js';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Eggs'},
    {id: uuid(), text: 'Bread'},
    {id: uuid(), text: 'Juice'},
    {id: uuid(), text: 'Meat'},
  ]);

  const deleteItem = id => {
    setItems(prevItmes => {
      return prevItmes.filter(item => item.id != id);
    });
  };

  const addItem = text => {
    if (!text) {
      Alert.alert(
        'No item entered',

        'Please enter an item when adding to your shopping list',

        [
          {
            text: 'Understood',

            style: 'cancel',
          },
        ],

        {cancelable: true},
      );
    } else {
      setItems(prevItems => {
        return [{id: uuid(), text}, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
