import { View, Text, ScrollView, Image, TouchableNativeFeedback, StyleSheet, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { colors, fonts } from '../../utils';
import { Icon } from 'react-native-elements';

const { width } = Dimensions.get('window');
export default function CoroselItem() {
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
  return (
    <View>
     
     <View
  style={{
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  }}
>
  <ScrollView
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    pagingEnabled
    snapToInterval={350} // Sesuaikan dengan lebar item + margin
    snapToAlignment="center"
    decelerationRate="fast"
    onScroll={handleScroll}
    scrollEventThrottle={16}
    contentContainerStyle={{
      paddingHorizontal: 20, // Memberikan ruang di awal dan akhir
    }}
  >
    {/* Item 1 */}
    <View
      style={{
        padding: 10,
        backgroundColor: colors.primary,
        borderRadius: 10,
        width: 310,
        height: 104,
        marginHorizontal: 20, // Memberikan jarak antar item
        alignSelf: "center",
        left: -27
      }}
    >
      {/* DATE & TIME */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: fonts.primary[600],
            color: colors.white,
          }}
        >
          {formatTanggal()}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Icon
            style={{ marginRight: 10 }}
            type="ionicon"
            name="time"
            size={20}
            color="white"
          />
          <Text
            style={{
              fontFamily: fonts.primary[500],
              color: colors.white,
              fontSize: 12,
            }}
          >
            08.00 - 17.00
          </Text>
        </View>
      </View>
      {/* MASUK DAN PULANG */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        {/* Masuk */}
        <View
          style={{
            padding: 10,
            backgroundColor: colors.white,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: 135,
            height: 48,
          }}
        >
          <Image
            style={{
              width: 28,
              height: 14,
              marginRight: 10,
            }}
            source={require("../../assets/masuk_icon.png")}
          />
          <View>
            <Text
              style={{
                fontFamily: fonts.primary[500],
                fontSize: 12,
              }}
            >
              Masuk
            </Text>
            <Text
              style={{
                fontFamily: fonts.primary[500],
                fontSize: 12,
                color: colors.success,
              }}
            >
              07:45 <Text style={{ color: colors.black }}>WIB</Text>
            </Text>
          </View>
        </View>
        {/* Pulang */}
        <View
          style={{
            padding: 10,
            backgroundColor: colors.white,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: 135,
            height: 48,
          }}
        >
          <Image
            style={{
              width: 28,
              height: 14,
              marginRight: 10,
            }}
            source={require("../../assets/pulang_icon.png")}
          />
          <View>
            <Text
              style={{
                fontFamily: fonts.primary[500],
                fontSize: 12,
              }}
            >
              Pulang
            </Text>
            <Text
              style={{
                fontFamily: fonts.primary[500],
                fontSize: 12,
                color: colors.danger,
              }}
            >
              17:03 <Text style={{ color: colors.black }}>WIB</Text>
            </Text>
          </View>
        </View>
      </View>
    </View>

     {/* Item 2 */}
     <View
      style={{
        padding: 10,
        backgroundColor: colors.white,
        borderRadius: 10,
        width: 310,
        height: 104,
        marginHorizontal: 20, // Memberikan jarak antar item
        alignSelf: "center",
        left: -27,
        borderWidth:0.4,

      }}
    >

    <View style={{
      flexDirection:'row',
      justifyContent:"space-between",
      alignItems:"center",
      
    
    }}>

    <Text style={{
      fontFamily:fonts.primary[600],
      fontSize:12

    }}>Summary</Text>

    <TouchableNativeFeedback>
      <View style={{flexDirection:'row', justifyContent:"center", alignItems:"center", }}>    
        <Text style={{fontFamily:fonts.primary[400], fontSize:12, top:2}}>Lihat Detail</Text>
        <Icon type='ionicon' size={15} name='chevron-forward-outline' color={colors.success}/>
        </View>
    </TouchableNativeFeedback>

    </View>

    {/* KEHADIRAM, IZIN, CUTI */}
    <View style={{
      flexDirection:"row",
      justifyContent:'space-between',
      alignItems:"center",
      
    }}>

    {/* KEHADIRAN */}
    <View style={{
      padding:10,
   
      width:80,
      alignItems:"center"
    }}>

    <View style={{
      flexDirection:'row',
      justifyContent:"center",
      alignItems:"center",
      
      
    }}>

    <View style={{
      padding:2,
      borderRadius:100,
      backgroundColor:colors.success,
      height:5,
      width:5,
      top:0,
      marginRight:5
    }}></View>

    <Text style={{fontFamily:fonts.primary[300], fontSize:10}}>Kehadiran</Text>

   


    </View>

     {/* JUMLAH HADIR */}
     <Text style={{fontFamily:fonts.primary[600], fontSize:12}}>12 Hari</Text>

  </View>
    
    {/* IZIN */}
    <View style={{
      padding:10,
      borderRightWidth:0.2,
      borderLeftWidth:0.2,
      width:80,
    
    }}>

<View style={{
      flexDirection:'row',
      justifyContent:"center",
      
    }}>

    <View style={{
      padding:2,
      borderRadius:100,
      backgroundColor:colors.danger,
      height:5,
      width:5,
      top:4,
      marginRight:5
    }}></View>

    <Text style={{fontFamily:fonts.primary[300], fontSize:10}}>Izin</Text>
    </View>

     {/* JUMLAH HADIR */}
     <Text style={{fontFamily:fonts.primary[600], fontSize:12, left:7}}>12 Hari</Text>

    </View>

     
    {/* CUTI */}
    <View style={{
      padding:10,
  
      width:80
     
    }}>

<View style={{
      flexDirection:'row',
      justifyContent:"center",
      
    }}>

    <View style={{
      padding:2,
      borderRadius:100,
      backgroundColor:colors.warning,
      height:5,
      width:5,
      top:4,
      marginRight:5
    }}></View>

    <Text style={{fontFamily:fonts.primary[300], fontSize:10}}>Cuti</Text>


    </View>
    <Text style={{fontFamily:fonts.primary[600], fontSize:12, left:10}}>12 Hari</Text>
    </View>


    </View>

    
    </View>
    {/* Tambahkan item lainnya seperti Item 2 dengan format yang sama */}
  </ScrollView>
</View>




          <View style={{
            flexDirection:"row",
            marginTop:10,
            justifyContent:"center",
            alignItems:"center"
          }}>

          {[0,1].map((_, index) => (
            <View style={[styles.indicator, currentIndex === index && styles.activeIndicator ]} key={index}>

            </View>
          ))}

          </View>


    </View>


  )
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