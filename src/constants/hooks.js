import React, { useState } from 'react';
import { Text, View } from 'react-native';

const useCustomInput = () => {
    const [value, setValue] = useState();
    const onChangeInput = (text) => setValue(text);
    return {
        value: value,
        handleInputChange: onChangeInput,

    }
};

export default useCustomInput;
