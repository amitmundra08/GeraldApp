import {StyleSheet, Text, View} from 'react-native';

interface Props {
  title: string;
}

const DummyScreen = ({title}: Props) => (
  <View style={styles.body}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default DummyScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
