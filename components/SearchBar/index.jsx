import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

export default function SearchBar() {
  const [text, onChangeText] = React.useState('충남대학교');
  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 40, width: '90%', fontSize: '16px' }}
        onChangeText={onChangeText}
        value={text}
      />

      <Icon name="search1" size={25} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    height: 40,
    backgroundColor: 'lightgray',
    marginBottom: 20,
  },
});
