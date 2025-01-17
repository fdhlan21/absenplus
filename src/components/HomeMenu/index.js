import { View, Text, TouchableNativeFeedback, Image } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'

export default function HomeMenu({navigation}) {
  return (
    <View>
   <View style={{
          padding:0,
          margin:0,
          alignItems:"center",
          marginTop:20
        
        
        }}>
      
        <View style={{
          flexDirection:'row',
          flexWrap:'wrap',
          alignSelf:'center',
          marginLeft:0
      
        }}>

        <TouchableNativeFeedback onPress={() =>  navigation.navigate("Lembur")}>
        <View style={{
          padding:10,
          backgroundColor:colors.secondary,
          height:90,
          width:90,
          marginVertical:10,
          marginHorizontal:11,
          alignItems:'center',
          borderRadius:10
        }}>

       <View>
       <Image style={{
          width:30,
          height:30,
          marginTop:10
        }} source={require('../../assets/lembur_icon.png')}/>

        <Text style={{fontFamily:fonts.primary[400], fontSize:10,marginTop:7, textAlign:"center"}}>Lembur</Text>
       </View>

        </View>
        </TouchableNativeFeedback>

     
        <TouchableNativeFeedback onPress={() => navigation.navigate("PengajuanIzin")}>
        <View style={{
          padding:10,
          backgroundColor:colors.secondary,
          height:90,
          width:90,
          marginVertical:10,
          marginHorizontal:11,
          borderRadius:10,
          alignItems:"center"
        }}>
            <View>
       <Image style={{
          width:30,
          height:30,
          marginTop:10
        }} source={require('../../assets/izin_icon.png')}/>

        <Text style={{fontFamily:fonts.primary[400], fontSize:10,marginTop:7, textAlign:"center"}}>Izin</Text>
       </View>
        </View>
        </TouchableNativeFeedback>
         

         <TouchableNativeFeedback onPress={() => navigation.navigate('PengajuanCuti')}>
         <View style={{
          padding:10,
          backgroundColor:colors.secondary,
          height:90,
          width:90,
          marginVertical:10,
          marginHorizontal:11,
          borderRadius:5,
          borderRadius:10,
          alignItems:"center"
        }}>
           <View>
       <Image style={{
          width:30,
          height:30,
          marginTop:10,
          alignSelf:"center"
        }} source={require('../../assets/cuti_icon.png')}/>

        <Text style={{fontFamily:fonts.primary[400], fontSize:10,marginTop:7, textAlign:"center"}}>Cuti</Text>
       </View>
        </View>
         </TouchableNativeFeedback>

          
<TouchableNativeFeedback onPress={() => navigation.navigate("Kunjungan")}>
<View style={{
          padding:10,
          backgroundColor:colors.secondary,
          height:90,
          width:90,
          marginVertical:10,
          marginHorizontal:11,
          borderRadius:5,
          borderRadius:10,
          alignItems:"center"
        }}>
   <View>
       <Image style={{
          width:30,
          height:30,
          marginTop:10,
          alignSelf:"center"
        }} source={require('../../assets/kunjugan_icon.png')}/>

        <Text style={{fontFamily:fonts.primary[400], fontSize:10,marginTop:7, textAlign:"center"}}>Kunjungan</Text>
       </View>
        </View>
</TouchableNativeFeedback>



<TouchableNativeFeedback onPress={() => navigation.navigate("Catatan")}>
<View style={{
          padding:10,
          backgroundColor:colors.secondary,
          height:90,
          width:90,
          marginVertical:10,
          marginHorizontal:11,
          borderRadius:5,
          borderRadius:10
        }}>
             <View>
       <Image style={{
          width:30,
          height:30,
          marginTop:10,
          alignSelf:"center"
        }} source={require('../../assets/catatan_icon.png')}/>

        <Text style={{fontFamily:fonts.primary[400], fontSize:10,marginTop:7, textAlign:"center"}}>Catatan</Text>
       </View>
        </View>
</TouchableNativeFeedback>


<TouchableNativeFeedback onPress={() => navigation.navigate("PengajuanReimbursement")}>
<View style={{
          padding:10,
          backgroundColor:colors.secondary,
          height:90,
          width:90,
          marginVertical:10,
          marginHorizontal:11,
          borderRadius:5,
          borderRadius:10
        }}>
             <View>
       <Image style={{
          width:30,
          height:30,
          marginTop:10,
          alignSelf:"center"
        }} source={require('../../assets/reimburse_icon.png')}/>

        <Text style={{fontFamily:fonts.primary[400], fontSize:10,marginTop:7, textAlign:"center"}}>Reimburse</Text>
       </View>
        </View>
</TouchableNativeFeedback>


<TouchableNativeFeedback onPress={() => navigation.navigate("SlipGaji")}>
<View style={{
          padding:10,
          backgroundColor:colors.secondary,
          height:90,
          width:90,
          marginVertical:10,
          marginHorizontal:11,
          borderRadius:5,
          borderRadius:10
        }}>
            <View>
       <Image style={{
          width:30,
          height:30,
          marginTop:10,
          alignSelf:"center"
        }} source={require('../../assets/slipgaji_icon.png')}/>

        <Text style={{fontFamily:fonts.primary[400], fontSize:10,marginTop:7, textAlign:"center"}}>Slip Gaji</Text>
       </View>
        </View>
</TouchableNativeFeedback>

<TouchableNativeFeedback onPress={() => navigation.navigate("RekapAbsen")}>
<View style={{
          padding:10,
          backgroundColor:colors.secondary,
          height:90,
          width:90,
          marginVertical:10,
          marginHorizontal:11,
          borderRadius:5,
          borderRadius:10
        }}>

<View>
       <Image style={{
          width:30,
          height:30,
          marginTop:10,
          alignSelf:"center"
        }} source={require('../../assets/rekap_icon.png')}/>

        <Text style={{fontFamily:fonts.primary[400], fontSize:10,marginTop:7, textAlign:"center"}}>Rekap Absensi</Text>
       </View>
        </View>

</TouchableNativeFeedback>
        </View>
        </View>
    </View>
  )
}