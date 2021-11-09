import { Dimensions, StyleSheet } from 'react-native';

export const getStyle = () => {
  const windowWidth = Dimensions.get('window').width;
    const styles = StyleSheet.create({
        container: {
          height: 150, 
          width: '100%', 
          flexDirection: 'row', 
          flexWrap: 'wrap', 
          marginBottom: 20
        },
        imageContainer: {
          height: 120, 
          width: windowWidth * 0.35
        },
        textsContainer: {
          height: 120, 
          width: windowWidth * 0.6, 
          paddingHorizontal: 10 
        },
        addButtonContainer: {
          height: 30, 
          width: windowWidth - 20, 
          alignItems: 'flex-end', 
          justifyContent: 'center'
        },
        image: {
          flex: 1, 
          borderRadius: 10
        },
        headerTextContainer: {
          height: 16, 
          width: '100%', 
          marginBottom: 14
        },
        textContainer: {
          height: 55, 
          width: '100%', 
          marginBottom: 15
        },
        text: {
          width: '100%'
        },
        pricesContainer: {
          height: 20, 
          width: '100%', 
          marginBottom: 15, 
          flexDirection: 'row'
        },
        price: {
          marginRight: 10, 
          color: 'red', 
          fontWeight: 'bold'
        },
        previousPrice: {
          textDecorationLine: 'line-through', 
          fontWeight: 'bold'
        },
        addButton: { 
          borderWidth: 1, 
          width: 150, 
          height: 25, 
          borderColor: 'red', 
          justifyContent: 'center', 
          alignItems: 'center', 
          backgroundColor: 'white', 
          borderRadius: 20
        },
        addButtonText: {
          fontWeight: 'bold', 
          color: 'red'
        }
    });
    return styles;
}