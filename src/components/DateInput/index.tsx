import { useState } from 'react';

import { ViewProps } from 'react-native';

import DateTimePicker, { 
  AndroidNativeProps, 
  DateTimePickerEvent 
} from '@react-native-community/datetimepicker';

import { format } from 'date-fns';

import { Container, Title, Button, ButtonText } from './styles';

interface DateInputProps extends Omit<AndroidNativeProps, 'onChange' | 'maximumDate'> {
  title: string;
  containerStyle?: ViewProps['style'];
  onChange: (date: Date) => void;
}

export function DateInput({ 
  title, 
  containerStyle = {},
  mode,
  value,
  onChange,
  ...rest
}: DateInputProps) {
  const [showPicker, setShowPicker] = useState(false);

  function handleOpenPicker() {
    setShowPicker(true);
  }

  function handleChangeDate(_: DateTimePickerEvent, selectedDate: Date | undefined) {
    setShowPicker(false);

    if (selectedDate) {
      onChange(selectedDate);
    }
  }

  return (
    <Container style={containerStyle}>
      <Title>
        {title}
      </Title>

      <Button onPress={handleOpenPicker}>
        <ButtonText>
          {mode === 'date' ? (
            format(value, 'dd/MM/yyyy')
          ): (
            format(value, 'HH:mm')
          )}
        </ButtonText>
      </Button>
  
      {showPicker && (
        <DateTimePicker
          value={value}
          onChange={handleChangeDate}
          mode={mode}
          maximumDate={new Date()}
          {...rest}
        />
      )}
      
    </Container>
  )
}