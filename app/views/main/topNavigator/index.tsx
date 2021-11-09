import React, { FC } from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import { getStyle } from './styles';

interface Props {
    text: string;
    onPress: () => void;
    buttonColor: string;
    textColor: string;
  } 

export const TopNavigator: FC<Props>  = ({text, onPress, buttonColor, textColor}) => {
  const styles = getStyle();
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, {backgroundColor: buttonColor}]}>
            <Text style={[styles.text, {color: textColor}]}>
                {text}
            </Text>
        </TouchableOpacity>
    );
  };