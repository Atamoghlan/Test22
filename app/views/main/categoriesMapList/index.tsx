import React, { FC }from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import { getStyle } from './styles';


interface Props {
  mockData: Array<{id: string, headerText: string, previousPrice?: string, price: string, text: string}>
} 

export const CategoriesMapList: FC<Props> = ({mockData}) => {
  const styles = getStyle();

    return (
        <>{mockData.map((item) => 
            <View key={item.id} style={styles.container}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={{uri:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/heart-healthy-food-1580231690.jpg'}}
                />
              </View>
              <View style={styles.textsContainer}>
                <View style={styles.headerTextContainer}>
                  <Text>{item.headerText}</Text>
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>{item.text}</Text>

                </View>
                <View style={styles.pricesContainer}>
                  <Text style={styles.price}>{item.price}</Text>
                  {item.previousPrice && 
                    <Text style={styles.previousPrice}>{item.previousPrice}</Text>
                  }
                </View>
              </View>
              <View style={styles.addButtonContainer}>
                <TouchableOpacity style={styles.addButton}>
                  <Text style={styles.addButtonText}>Добавить</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          </>
    );
  };