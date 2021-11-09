import { Dimensions, StyleSheet } from 'react-native';
export const getStyle = () => {

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
    const styles = StyleSheet.create({
        safeAreaView: {
          flex: 1, 
          backgroundColor: 'white'
        },
        mainScrollView: {
          paddingHorizontal: 10
        },
        header: {
          height: 170, 
          width: windowWidth -15, 
          alignItems: 'center', 
        },
        categoriesScrollView: {
          flexDirection: 'row', 
          height: 50, 
          marginVertical: 20
        },
        categoriesScrollViewContent: {
          flexDirection: 'row', 
          height: 50 
        },
        headerImage: {
          height: 120, 
          width: windowWidth * 0.7, 
          borderRadius: 10
        },
        contentScrollView: {
          width: windowWidth - 20, 
        },
        contentContainer: {
          width: windowWidth * 5, 
          flex: 1, 
          flexDirection: 'row'
        },
        headerButtonsContainer: {
          flexDirection: 'row', 
          height: 40, 
          marginVertical: 10, 
          width: '100%', 
          justifyContent: 'center'
        },
        iconButton: {
          justifyContent: 'center', 
          alignItems: 'center', 
          borderRadius: 10, 
          marginHorizontal: 5, 
          width: 40, 
          backgroundColor: '#DCDCDC'
        },
        headerText: {
          fontSize: 14, 
          fontWeight: 'bold'
        },
        headerButton: {
          flex: 1, 
          borderRadius: 10, 
          paddingHorizontal: 10, 
          backgroundColor: '#DCDCDC', 
          justifyContent: 'center', 
          marginRight: 5,
        },

    });
    return styles;
}