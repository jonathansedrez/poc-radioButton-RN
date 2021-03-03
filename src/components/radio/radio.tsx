import React, {useState, useContext} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';

import {RadioContext} from './radio.context';
import {useRadioContext} from './radio.hook';
import {RadioComposition, RadioProps, RadioOptionProps} from './radio.types';
import style from './radio.style';

const Option: React.FC<RadioOptionProps> = (props) => {
  const {id, children} = props;
  const {currentValue, handleChange} = useContext(RadioContext);
  useRadioContext();

  return (
    <TouchableWithoutFeedback onPress={() => handleChange(id)}>
      <View style={style.radio}>
        {currentValue === id ? <Text>X</Text> : <Text>O</Text>}
        <Text style={style.text}>{children}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export const Radio: React.FC<RadioProps> & RadioComposition = (props) => {
  const {children, onChange, initialValue} = props;
  const [currentValue, setCurrentValue] = useState(initialValue || '');

  const handleChange = (value: string) => {
    setCurrentValue(value);
    onChange(value);
  };

  return (
    <RadioContext.Provider value={{currentValue, handleChange}}>
      {children}
    </RadioContext.Provider>
  );
};

Radio.Option = Option;
