import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { Color, colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import 'moment/locale/id';

export default function MyCalendar({
  label,
  value,
  onDateChange,
  placeholder,
  iconColor = colors.primary,
  textColor = colors.black,
  fontFamily = fonts.primary[600],
  iconName = 'calendar'
}) {
  return (
    <View style={{ marginTop: 10 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
        <Icon type="ionicon" name={iconName} color={iconColor} size={24} />
        <Text
          style={{
            fontFamily: fontFamily,
            color: textColor,
            marginLeft: 10,
          }}
        >
          {label}
        </Text>
      </View>

      <View
        style={{
          backgroundColor: colors.white,
          borderWidth: 1,
          borderRadius: 5,
          borderColor: Color.blueGray[300],
        }}
      >
        <Text
          style={{
            position: 'absolute',
            zIndex: 0,
            ...fonts.body3,
            top: 12,
            left: 16,
          }}
        >
          {moment(value).format('DD MMMM YYYY')}
        </Text>
        <DatePicker
          style={{ width: '100%', height: 50 }}
          date={value}
          mode="date"
          placeholder={placeholder}
          showIcon={false}
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateInput: {
              textAlign: 'left',
              alignItems: 'flex-start',
              opacity: 0,
              paddingLeft: 20,
              borderWidth: 0,
            },
          }}
          onDateChange={onDateChange}
        />
        <View
          style={{
            position: 'absolute',
            right: 12,
            top: 13,
          }}
        >
          <Icon type="ionicon" name="caret-down-outline" color={Color.blueGray[300]} size={24} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
