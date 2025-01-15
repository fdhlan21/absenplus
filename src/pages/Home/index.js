import React, { useEffect, useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  ImageBackground,
  ScrollView,
  Dimensions,
  TouchableNativeFeedback,
} from 'react-native';
import { getData } from '../../utils/localStorage';
import { colors, fonts, windowWidth } from '../../utils';
import { Icon } from 'react-native-elements';
import { CoroselItem, HomeMenu } from '../../components';

const images = [
  { id: 1, src: require('../../assets/korosel-1.png'), label: 'Gambar 1' },
  { id: 2, src: require('../../assets/koresel-2.png'), label: 'Gambar 2' },
  { id: 3, src: require('../../assets/koresel-3.png'), label: 'Gambar 3' },
];

const windowHeight = Dimensions.get('window').height;
const { width } = Dimensions.get('window');
export default function Home({ navigation, route }) {
  const [user, setUser] = useState({});
  const scrollX = useRef(new Animated.Value(0)).current; // Untuk animasi scroll
  // const scrollViewRef = useRef(null); // Untuk mengontrol scroll view


  const __getUser = () => {
    getData('user').then((u) => {
      setUser(u);
    });
  };

  useEffect(() => {
    __getUser();
  }, []);

  const formatTanggal = () => {
    const bulan = [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
    ];

    const sekarang = new Date();
    const tanggal = sekarang.getDate();
    const namaBulan = bulan[sekarang.getMonth()];
    const tahun = sekarang.getFullYear();

    return `${tanggal} ${namaBulan} ${tahun}`;
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setCurrentIndex(index);
  };
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const nextIndex = (currentIndex + 1) % images.length;
  //     scrollViewRef.current.scrollTo({
  //       x: nextIndex * windowWidth,
  //       animated: true,
  //     });
  //     setCurrentIndex(nextIndex);
  //   }, 3000); // Ganti slide setiap 3 detik

  //   return () => clearInterval(interval); // Hentikan interval saat komponen di-unmount
  // }, [currentIndex]);

  return (
    <ImageBackground
      source={require('../../assets/bggradient.png')}
      style={{
        flex: 1,
        backgroundColor: colors.white,
        width: '100%',
        height: '100%',
      }}
    >

      <View style={{
        alignItems:'center'
      }}>
        <Image style={{
          alignSelf:"center",
          width:100,
          height:100
        }} source={require('../../assets/logo.png')}/>
      </View>

      <ScrollView style={{
        flex:1,
        height:'100%'
      }} contentContainerStyle={{
        height:'100%'
      }}>

      <View style={{ padding: 10,
        backgroundColor:colors.white,
        borderTopRightRadius:50,
        borderTopLeftRadius:50,
        width:"100%",
        height:"100%"
        }}>

        <View>
        {/* PROFILE */}
          <View style={{
            flexDirection:'row',
            justifyContent:"space-between",
            alignItems:'center',
            padding:10,

          }}>

          {/* PROFILE & NAME */}
          <View style={{
            flexDirection:'row',
            alignItems:"center",
            justifyContent:"center"
          }}>

          {/* PROFILE */}
          <Image style={{
            width:50,
            height:50,
            borderRadius:50
          }} source={require('../../assets/defualt_profile.png')}/>

          <View style={{
            marginLeft:12
          }}>
            {/* NAME AND DIVISI */}

            <Text style={{
              fontFamily:fonts.primary[600],
              fontSize:12,
              
            }}>Fadhlan Himawan</Text>
            <Text style={{
              fontFamily:fonts.primary[300],
              fontSize:12,
            }}>IT</Text>
          </View>

          </View>

          {/* PERUSAHAAN */}
          <View style={{
            padding:10,
           
            maxWidth:120,
            width:120
          }}>
            <Text style={{
              fontFamily:fonts.primary[300],
              fontSize:10,
            }}>PT. Zavalabs Teknologi Indonesia</Text>
          </View>
          </View>
        </View>

          
          {/* COROSEL ITEM */}
          <View style={{marginTop:10}}>
          <CoroselItem/>
          </View>

        {/* MENU */}
          <View>
            <HomeMenu navigation={navigation}/>
          </View>
       
     
          
        </View>

      </ScrollView>
      
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth:1,
    borderColor:colors.primary,
    marginHorizontal: 5,
  },

  activeIndicator: {
    backgroundColor: colors.primary,
  },
})
