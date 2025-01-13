import { View, Text, ImageBackground, ScrollView, Image, TouchableNativeFeedback, Alert, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { colors, fonts } from '../../utils'
import { MyInput } from '../../components'
import { showMessage } from 'react-native-flash-message';
import axios from 'axios';
import { Icon } from 'react-native-elements';
import { storeData } from '../../utils/localStorage';

export default function Login({navigation}) {
    const [kirim, setKirim] = useState({
        nip: '',
        password:'',
    });

    const handleLogin = () => {
      if (kirim.nip.length == 0 || kirim.password.length == 0) {
        showMessage({
            type:'danger',
            backgroundColor:colors.danger,
            color:'white',
            position:'top',
            message:"Tolong isi semua field!"
        });
      } else if (kirim.nip.length === 0) {
        showMessage({
            type:'danger',
            backgroundColor:colors.danger,
            color:'white',
            position:'top',
            message:"NIP masih kosong!"
        });
      } else if (kirim.password.length === 0) {
        showMessage({
            type:'danger',
            backgroundColor:colors.danger,
            color:'white',
            position:'top',
            message:"Password masih kosong!"
        });
      } else {
        axios
        .post('API KEY', kirim)
        .then((res) => {
            if (res.data.status == 'success') {
                console.log(res.data);
                storeData('user');
                showMessage({
                    type:'default',
                    backgroundColor:colors.success,
                    position:"top",
                    color:"white",
                    message:"Login berhasil!"
                });
                navigation.replace('MainApp')
            } else {
                console.log(res.data);
                showMessage({
                    type:'danger',
                    backgroundColor:colors.danger,
                    position:"top",
                    color:"white",
                    message:"NIP atau Password salah!"
                });
            }
        })
        .catch((err) => {
            console.error('Terjadi error di server : ', err);
        })
      }
    };


  return (
    <SafeAreaView style={{
        flex:1,
        backgroundColor:colors.primary
    }}>
    <ImageBackground style={{
        flex:1,
        width:'100%',
        height:'100%',
    }} source={require('../../assets/bggradient.png')}>
     <View style={{
       
        height:"100%"
     }}>
        <ScrollView>
        <View style={{
            padding:10,
            margin:10,
          
            height:"100%"
        }}>

        <View style={{
            padding:0,
            flexDirection:'row',
            justifyContent:"center",
            alignItems:"center",
        }}>

        <View>

        <View style={{
            padding:10,
            flexDirection:'row',
            justifyContent:"flex-start",
            alignItems:"center"
        }}>
    <TouchableNativeFeedback onPress={() => navigation.goBack()}>
    <Icon type='ionicon' name='chevron-back-outline' color='white' size={30}/>
    </TouchableNativeFeedback>
    
        </View>


            <Image style={{
                width:178,
                height:178,
                alignSelf:"center"
            }} source={require('../../assets/logo.png')}/>

            <Text style={{
                fontFamily:fonts.primary[500],
                textAlign:"center",
                color:colors.white,
                fontSize:15,
            }}>Silahkan login untuk masuk ke aplikasi</Text>


            <View style={{
                marginTop:20
            }}>

                <MyInput value={kirim.nip} onChangeText={(x) => setKirim({...kirim,'nip' : x})} label='NIP' iconname='card-outline' colorlabel='white' colorIcon='white'/>

                <MyInput value={kirim.password} onChangeText={(x) => setKirim({...kirim,'password': x})} label='Password' colorlabel='white' iconname='key' colorIcon='white' secureTextEntry={true}/>

            </View>

            <View style={{
                marginTop:50
            }}>
                <TouchableNativeFeedback onPress={handleLogin}>
                    <View style={{
                        backgroundColor:colors.button,
                        padding:10,
                        flexDirection:'row',
                        justifyContent:"center",
                        alignItems:"center",
                        borderRadius:5
                    }}>

                    <Text style={{
                        fontFamily:fonts.primary[600],
                        fontSize:12,
                        color:colors.black,
                        marginRight:10
                    }}>Login</Text>

                    <Icon type='ionicon' name='log-in-outline' size={20}/>

                    </View>
                </TouchableNativeFeedback>
            </View>

        </View>

        </View>

        </View>
        </ScrollView>
     </View>
    </ImageBackground>
    </SafeAreaView>
  )
}