import { View, Text, ImageBackground, ScrollView, TouchableNativeFeedback, SafeAreaView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fonts } from '../../utils'
import { MyInput, MyPicker } from '../../components'
import { colors } from '../../utils/colors'
import { showMessage } from 'react-native-flash-message'
import axios from 'axios'
import { Row } from 'react-native-table-component'
import { Icon } from 'react-native-elements'
import { storeData } from '../../utils/localStorage'

export default function Register({navigation}) {
    const [loading, setLoading] = useState(false);
    const [kirim, setKirim] = useState({
        perusahaan:'',
        nama_lengkap:'',
        nip:'',
        email:'',
        telepon:'',
        alamat:'',
        divisi:'',
        jabatan:'',
        password:'',


    });
    const [isValid, setIsValid] = useState(true);

    useEffect(() => {
        // Cek apakah ada field yang kosong
        const isFormValid = !Object.keys(kirim).some((key) => kirim[key].length === 0);
        setIsValid(isFormValid);
      }, [kirim]);
    
      const handleRegister = () => {
        if (!isValid) {
          showMessage({
            type:'danger',
            position:"top",
            message:"Tolong isi semua field!",
            backgroundColor:colors.danger,
            color:colors.white,
          })
          console.log('Tolong isi semua field!');
        } else {
            console.log('Form valid, lanjutkan pendaftaran');
            console.log('Data yang di kirim : ', kirim);
            setLoading(true);
          axios
          .post('API KEY', kirim)
          .then((res) => {
            console.log(res.data);
            setTimeout(() => {
                setLoading(false);

                if (res.data.status == 200) {
                    console.log(res.data);
                    storeData('user');
                    showMessage({
                        type:'success',
                        backgroundColor:colors.success,
                        position:'top',
                        color:'white',
                    });
                    navigation.replace('Login');
                } else {
                    showMessage({
                        type:"danger",
                        color:"white",
                        backgroundColor:colors.danger,
                        position:"top",
                        message:"Akun sudah pernah daftar!"
                    });
                }
            }, 1000);
          })
          .catch((err) => {
            console.error("Terjadi error di server : ", err);
          })
        }
      };
    

  

  return (
    <SafeAreaView style={{
        flex:1,
        backgroundColor:colors.primary
    }}>
    <View style={{
        height:'100%'
    }}>

    <ImageBackground source={require('../../assets/bggradient.png')} style={{
        flex:1,
        width:"100%",
        height:"100%",
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
                 padding:0,
                 flexDirection:'row',
                 justifyContent:"flex-start",
                 alignItems:"center"
             }}>
         <TouchableNativeFeedback onPress={() => navigation.goBack()}>
         <Icon type='ionicon' name='chevron-back-outline' color='white' size={30}/>
         </TouchableNativeFeedback>

         <Text style={{
            fontFamily:fonts.primary[600],
            color:colors.white,
            marginLeft:20,
            fontSize:15,
         }}>Register</Text>
         
             </View>
     
     
     
                 <Text style={{
                     fontFamily:fonts.primary[400],
                     color:colors.white,
                     fontSize:12,
                     marginTop:20,
                 }}>Silahkan melakukan pendaftaran terlebih dahulu{'\n'}sebelum login ke aplikasi</Text>

     
                 <View style={{
                     marginTop:20
                 }}>
     
                    <MyPicker value={kirim.perusahaan} onChangeText={(x) => setKirim({...kirim, 'perusahaan' : x})} label="Pilih Perusahaan" iconname="menu-outline" colorlabel='white' colorIcon='white'/>

                    <MyInput value={kirim.nama_lengkap} onChangeText={(x) => setKirim({...kirim, 'nama_lengkap' : x})} label='Nama Lengkap' iconname='person-outline' colorlabel='white' colorIcon='white'/>

                    <MyInput value={kirim.nip} onChangeText={(x) => setKirim({...kirim, 'nip' : x})} label='NIP' iconname='card-outline' colorlabel='white' colorIcon='white'/>

                    <MyInput value={kirim.email} onChangeText={(x) => setKirim({...kirim, 'email' : x})} label='E-mail' iconname='mail-outline' colorlabel='white' colorIcon='white'/>

                    <MyInput value={kirim.telepon} onChangeText={(x) => setKirim({...kirim, 'telepon' : x})} label='Telepon' iconname='call-outline' colorlabel='white' colorIcon='white'/>

                    <MyInput value={kirim.alamat} onChangeText={(x) => setKirim({...kirim, 'alamat': x})} label='Alamat' iconname='map-outline' colorlabel='white' colorIcon='white'/>

                    <MyInput value={kirim.divisi} onChangeText={(x) => setKirim({...kirim, 'divisi': x})} label='Divisi' iconname='bookmark-outline' colorlabel='white' colorIcon='white'/>

                    <MyInput  value={kirim.jabatan} onChangeText={(x) => setKirim({...kirim, 'jabatan': x})} label='Jabatan' iconname='ribbon-outline' colorlabel='white' colorIcon='white'/>

                    <MyInput  value={kirim.password} onChangeText={(x) => setKirim({...kirim, 'password': x})} label='Password' iconname='key-outline' colorlabel='white' colorIcon='white'/>
                 </View>
     
                 <View style={{
                     marginTop:50
                 }}>
                     <TouchableNativeFeedback onPress={handleRegister}>
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
     
    </ImageBackground>
    </View>
    </SafeAreaView>
   
  )
}