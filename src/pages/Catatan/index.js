import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { Icon } from 'react-native-elements'

export default function Catatan({navigation}) {
  return (
    <View style={{
        flex:1,
        backgroundColor:colors.white
    }}>
      <View style={{ padding: 10 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
            <Icon type="ionicon" name="chevron-back-outline" size={25} color={colors.primary} />
            <Text style={{ fontFamily: fonts    .primary[600], fontSize: 15, top: 2 }}>Catatan</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={{
          padding:20,
        }}>
        {/* CATATAN CARD */}

        <View style={{
          padding:10,
          borderWidth:0.5,
          borderRadius:10,
          
        }}>

        {/* JUDUL CATATAN */}
        <Text style={{fontFamily:fonts.primary[600], fontSize:15, color:colors.primary}}>Judul Catatan</Text>
        {/* Tanggal */}
        <Text style={{fontFamily:fonts.primary[400], fontSize:10,   }}>31 Des, 2024</Text>

        {/* MESSAGE */}
        <View style={{marginTop:10,}}>
          <Text style={{fontFamily:fonts.primary[400], fontSize:12, }}>Lebih rajin lagi masuk kerjanya</Text>
        </View>

        {/* PROFILE, SAVE AND SHARE */}
        <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
          marginTop:20
        }}>

        {/* Profile */}
        <View style={{
          flexDirection:"row",
          justifyContent:"center",
          alignItems:"center",

        }}>
          <Image style={{
            width:30,
            height:30,
            borderRadius:50
          }} source={require('../../assets/defualt_profile.png')}/>
          <Text style={{fontFamily:fonts.primary[400], fontSize:10,marginHorizontal:10}}>The Boss</Text>
        </View>

        </View>
        </View>
        </View>
      </ScrollView>
    </View>
  )
}