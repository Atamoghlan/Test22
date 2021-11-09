import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
// import { SafeAra } from "react-native";
import FoodMenuSvg from '../../assets/svg/foodMenuSvg';
import SettingsSvg from '../../assets/svg/settingsSvg';
import { CategoriesMapList } from './categoriesMapList';
import {TopNavigator} from './topNavigator';
import { getStyle } from "./styles";

const mockData: Array<object> = [
  {
    headerText: 'Something delicious',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    price: 'За даром',
    id: '1',
    previousPrice: '500 ₽'
  },
  {
    headerText: 'Something delicious',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    price: 'За даром',
    id: '2'
  },
  {
    headerText: 'Something delicious',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    price: 'За даром',
    id: '3'
  },
  {
    headerText: 'Something delicious',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    price: 'За даром',
    id: '4',
    previousPrice: '500 ₽'
  },
  {
    headerText: 'Something delicious',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    price: 'За даром',
    id: '5',
    previousPrice: '500 ₽'
  },
  {
    headerText: 'Something delicious',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    price: 'За даром',
    id: '6'
  },
  {
    headerText: 'Something delicious',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    price: 'За даром',
    id: '7'
  },
  {
    headerText: 'Something delicious',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    price: 'За даром',
    id: '8'
  },
  {
    headerText: 'Something delicious',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    price: 'За даром',
    id: '9'
  },
  {
    headerText: 'Something delicious',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    price: 'За даром',
    id: '10'
  },
]

const Main = () => {
  const styles = getStyle();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [activeScreen, setActiveScreen] = useState('Пицца')
  const [translateX, setTranslateX] = useState(0)

  const handleTranslateX = (category) => {
    setActiveScreen(category);
    switch (category){
      case 'Пицца': setTranslateX(0); 
        break;
      case 'Наборы роллов': setTranslateX(-windowWidth);
        break;
      case 'Поке': setTranslateX(-windowWidth * 2);
        break;
      case 'FAST FOOD': setTranslateX(-windowWidth * 3);
        break;
      case 'Роллы': setTranslateX(-windowWidth * 4);
        break;
    }
  }

  return (
        <SafeAreaView style={styles.safeAreaView}>
          <ScrollView style={styles.mainScrollView}>
            <View style={styles.header}>
              <Image
                style={styles.headerImage}
                source={{uri:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/heart-healthy-food-1580231690.jpg'}}
              />
              <View style={styles.headerButtonsContainer}>
                <TouchableOpacity style={styles.headerButton}>
                  <Text style={styles.headerText}>Самовывоз</Text>
                  <Text>Аригатор на ул. Восточно круглик...</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                  <FoodMenuSvg />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                  <SettingsSvg />
                </TouchableOpacity>
              </View>
            </View>
            <ScrollView 
                indicatorStyle='white'
                alwaysBounceVertical={false}
                contentContainerStyle={styles.categoriesScrollViewContent}
                style={styles.categoriesScrollView}>
                  <TopNavigator textColor={activeScreen == "Пицца" ? 'white' : 'gray'} buttonColor={activeScreen == "Пицца" ? 'green' : 'white'} text={"Пицца"} onPress={() => handleTranslateX("Пицца")}/>
                  <TopNavigator textColor={activeScreen == "Наборы роллов" ? 'white' : 'gray'} buttonColor={activeScreen == "Наборы роллов" ? 'green' : 'white'} text={"Наборы роллов"} onPress={() => handleTranslateX("Наборы роллов")}/>
                  <TopNavigator textColor={activeScreen == "Поке" ? 'white' : 'gray'} buttonColor={activeScreen == "Поке" ? 'green' : 'white'} text={"Поке"} onPress={() => handleTranslateX("Поке")}/>
                  <TopNavigator textColor={activeScreen == "FAST FOOD" ? 'white' : 'gray'} buttonColor={activeScreen == "FAST FOOD" ? 'green' : 'white'} text={"FAST FOOD"} onPress={() => handleTranslateX("FAST FOOD")}/>
                  <TopNavigator textColor={activeScreen == "Роллы" ? 'white' : 'gray'} buttonColor={activeScreen == "Роллы" ? 'green' : 'white'} text={"Роллы"} onPress={() => handleTranslateX("Роллы")}/>
            </ScrollView>
            <ScrollView style={styles.contentScrollView}>
                <View style={[styles.contentContainer, {transform: [{ translateX: translateX}]}]}> 
                  <View style={{width: windowWidth}}>
                    <CategoriesMapList {...{mockData}}/>
                  </View>
                  <View style={{width: windowWidth }}>
                    <CategoriesMapList mockData={mockData.slice(0,1)}/>
                  </View>
                  <View style={{width: windowWidth }}>
                    <CategoriesMapList {...{mockData}}/>
                  </View>
                  <View style={{width: windowWidth }}>
                    <CategoriesMapList {...{mockData}}/>
                  </View>
                  <View style={{width: windowWidth }}>
                    <CategoriesMapList {...{mockData}}/>
                  </View>
                </View>
            </ScrollView>
          </ScrollView>
        </SafeAreaView>
    );
  };
  
export default Main;