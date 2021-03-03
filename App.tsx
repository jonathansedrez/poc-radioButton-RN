import React, {useState} from 'react';
import {Text, View} from 'react-native';

import style from './App.styles';
import {Radio} from './src/components/radio/radio';

const App = () => {
  const [currentValue, setCurrentValue] = useState('');
  return (
    <View style={style.wrapper}>
      <Radio onChange={(value) => setCurrentValue(value)}>
        <Radio.Option id="first">Primeiro</Radio.Option>
        <Radio.Option id="second">Segundo</Radio.Option>
      </Radio>

      <Text style={style.current}>{currentValue}</Text>
    </View>
  );
};

export default App;
