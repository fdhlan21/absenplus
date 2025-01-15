import { View, Text, TouchableNativeFeedback, ScrollView } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { Icon } from 'react-native-elements'



export default function Lembur({navigation}) {
  return (
    <View style={{
        flex:1,
        backgroundColor:colors.white
    }}>

    {/* HEADER */}
    <View style={{
        padding:10
    }}>
        <TouchableNativeFeedback onPress={() => navigation.goBack()}>
            <View style={{flexDirection:"row", padding:10, justifyContent:"flex-start", alignItems:'center'}}>
                <Icon type='ionicon' name='chevron-back-outline' size={25} color={colors.primary}/>
                <Text style={{fontFamily:fonts.primary[600], fontSize: 15, top:2}}>Lembur</Text>
            </View>
        </TouchableNativeFeedback>
    </View>

    <ScrollView>
        <View style={{
            padding:10
        }}>

        </View>
    </ScrollView>
    
    <View style={{padding:10, marginBottom: 10}}>
        <TouchableNativeFeedback onPress={() => navigation.navigate("TambahLembur")}>
            <View style={{backgroundColor:colors.primary, borderRadius:10, padding:10}}>
                    <Text style={{
                    fontFamily:fonts.primary[600],
                    color:colors.white,
                    fontSize:12,
                    textAlign:"center"
                        

                    }}>Ajukan Lembur</Text>
            </View>
        </TouchableNativeFeedback>
    </View>
    </View>
  )
}