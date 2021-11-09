import { StyleSheet } from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
        button: {
          justifyContent: 'center', 
          alignItems: 'center', 
          height: 50, 
          borderRadius: 25
        },
        text: { 
          fontWeight: '800',
          marginHorizontal: 25
        }
    });
    return styles;
}