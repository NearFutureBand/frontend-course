import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
  },
  loader: {
    width: Dimensions.get('window').width,
    height: '100%',
    borderWidth: 1,
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255, 0.8)',
  },
});

export default styles;
