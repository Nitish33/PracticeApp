import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import Typography from '../../../Components/Typography/Typography';

function generateArray(count) {
  return Array.from({length: count}, (_, index) => `Data is ${index}`);
}

export default function ScrollableStickyButton() {
  const [Data, updateData] = useState(generateArray(50));

  const addItems = () => {
    updateData(d => generateArray(d.length + 50));
  };

  const removeItems = () => {
    updateData(d => {
      let newLength = 0;

      if (d.length > 50) {
        newLength = d.length - 50;
      } else {
        newLength = 0;
      }

      return generateArray(newLength);
    });
  };

  return (
    <ScrollView style={Styles.container} contentContainerStyle={{flexGrow: 1}}>
      <View style={Styles.content}>
        {Data.map(item => (
          <Typography key={item}>{item}</Typography>
        ))}
      </View>

      <View style={Styles.footer}>
        <Pressable style={Styles.buttonStyle} onPress={addItems}>
          <Typography>Add 50 Times</Typography>
        </Pressable>

        <Pressable style={Styles.buttonStyle} onPress={removeItems}>
          <Typography>Remove 50 Times</Typography>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
  },

  buttonStyle: {
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'magenta',
  },

  footer: {
    height: 50,
    flexDirection: 'row',
  },
});
