import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { Icon } from 'react-native-elements'

export default function RekapAbsen({navigation}) {
  return (
    <View style={{
        flex:1,
        backgroundColor:colors.white
    }}>
    <View style={{ padding: 10 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
            <Icon type="ionicon" name="chevron-back-outline" size={25} color={colors.primary} />
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 15, top: 2 }}>Rekap Absensi</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}