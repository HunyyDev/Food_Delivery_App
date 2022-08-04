import React, {useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
const Counter = props => {
  const step = props.step === undefined ? 1 : props.step;
  const minValue =
    props.minValue === undefined ? Number.NEGATIVE_INFINITY : props.minValue;
  const maxValue =
    props.maxValue === undefined ? Number.POSITIVE_INFINITY : props.maxValue;
  const [count, setCount] = useState(0);
  const precision = props.precision === undefined ? 2 : props.precision;
  if (props.style.flexDirection === 'row')
    return (
      <View style={props.style}>
        <TouchableOpacity
          onPress={() =>{
            setCount(count - step <= minValue ? minValue : count - step)
            console.log(minValue)}
        }>
          {props.down}
        </TouchableOpacity>
        <Text style={props.countStyle}>{count}</Text>
        <TouchableOpacity
          onPress={() => {
            setCount(count + step >= maxValue ? maxValue : count + step);
          }}>
          {props.up}
        </TouchableOpacity>
      </View>
    );
  return (
    <View style={props.style}>
      <TouchableOpacity
        onPress={() => {
          setCount(count + step >= maxValue ? maxValue : count + step);
          console.log(step);
        }}>
        {props.up}
      </TouchableOpacity>
      <Text style={props.countStyle}>{count.toPrecision(precision)}</Text>
      <TouchableOpacity
        onPress={() =>
          setCount(count - step <= minValue ? minValue : count - step)
        }>
        {props.down}
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
