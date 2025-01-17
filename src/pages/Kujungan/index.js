import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { colors, fonts } from '../../utils';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function Kunjungan({ navigation }) {
  const [currentPage, setCurrentPage] = useState('Kunjungan'); // State untuk menentukan halaman aktif
  const [isStarted, setIsStarted] = useState(false); // State untuk tombol Mulai Kunjungan

  // Halaman Kunjungan
  const renderKunjungan = () => (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      {/* Header */}
      <View style={{ padding: 10 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <Icon
              type="ionicon"
              name="chevron-back-outline"
              size={25}
              color={colors.primary}
            />
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 15, top: 2 }}>
              Kunjungan
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView>
        <View style={{ padding: 10 }}>
          {/* Card */}
          <TouchableWithoutFeedback onPress={() => setCurrentPage('DetailKunjungan')}>
            <View
              style={{
                padding: 10,
                backgroundColor: '#E8F5F4',
                borderRadius: 10,
                maxHeight: '100%',
                height: 80,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 10,
                }}
              >
                {/* Icon */}
                <Image
                  style={{ height: 24, width: 24 }}
                  source={require('../../assets/maps_point.png')}
                />

                {/* Location and Time */}
                <View>
                  <Text style={{ fontFamily: fonts.primary[600], fontSize: 12 }}>
                    Main Office Building
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                    }}
                  >
                    <Icon type="ionicon" name="time-outline" size={15} />
                    <Text
                      style={{
                        fontFamily: fonts.primary[400],
                        fontSize: 12,
                        marginHorizontal: 10,
                      }}
                    >
                      Hari ini, 09.45
                    </Text>
                  </View>
                </View>

                {/* Status */}
                <View
                  style={{
                    padding: 10,
                    backgroundColor: colors.primary,
                    borderRadius: 100,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: fonts.primary[600],
                      color: colors.white,
                      fontSize: 10,
                      textAlign: 'center',
                    }}
                  >
                    Sedang Berlansung
                  </Text>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </View>
  );

  // Halaman Detail Kunjungan
  const renderDetailKunjungan = () => (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      {/* Header */}
      <View style={{ padding: 10 }}>
        <TouchableOpacity onPress={() => setCurrentPage('Kunjungan')}>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <Icon
              type="ionicon"
              name="chevron-back-outline"
              size={25}
              color={colors.primary}
            />
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 15, top: 2 }}>
              Detail Kunjungan
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView>
        <View style={{padding:20}}>
        
        {/* Detail card */}

        <View style={{
          padding:10,
          borderWidth:0.5,
          borderRadius:10
        }}>

        {/* LOKASI */}
        <View style={{
          flexDirection:'row',
          justifyContent:"flex-start",
          alignItems:"center",
        }}>
          <Image style={{width:20, height:23}} source={require('../../assets/map_point2.png')}/>

          <View style={{marginHorizontal:10}}>
            <Text style={{fontFamily:fonts.primary[600], fontSize:12, }}>Waktu saat ini</Text>
            <Text style={{fontFamily:fonts.primary[400], fontSize:10, }}>Graha Pos Indonesia B - PointLab Lantai 6</Text>
          </View>
        </View>

        <View style={{
          padding:10,
          backgroundColor:'#F6F6F6',
          borderRadius:5,
          marginTop:20

        }}>
          <Text style={{fontFamily:fonts.primary[300], fontSize:12, }}>Jl. Banda No. 30, Citarum</Text>
        </View>
        </View>

        {/* TIME CARD */}
        <View style={{
          padding:10,
          borderWidth:0.5,
          borderRadius:10,
          marginTop:20
        }}>

        {/* LOKASI */}
        <View style={{
          flexDirection:'row',
          justifyContent:"flex-start",
          alignItems:"center",
        }}>
          <Image style={{width:24, height:23}} source={require('../../assets/timer.png')}/>

          <View style={{marginHorizontal:10}}>
            <Text style={{fontFamily:fonts.primary[600], fontSize:12, }}>Waktu saat ini</Text>
            <Text style={{fontFamily:fonts.primary[700], fontSize:20, color:colors.primary}}>09.45</Text>
          </View>
        </View>

        <View style={{
          padding:10,
          backgroundColor:'#F6F6F6',
          borderRadius:5,
          marginTop:20

        }}>
          <Text style={{fontFamily:fonts.primary[300], fontSize:12, }}>Jumat, 3 Januari, 2025</Text>
        </View>
        </View>


        <View style={{
          marginTop:20,
        }}>
          <TouchableWithoutFeedback onPress={() => setIsStarted(true)}>
            <View style={{
              padding:10,
              backgroundColor: isStarted ? colors.white : colors.primary,
              borderRadius:10,
              borderWidth: isStarted ? 1 : 0,
              borderColor: isStarted ? colors.danger : 'transparent'
            }}>
              <Text style={{fontFamily:fonts.primary[600], color: isStarted ? colors.danger : colors.white, textAlign:"center", 
              fontSize:14,}}>{isStarted ? 'Selesai' : 'Mulai Kunjugan'}</Text>
            </View>
          </TouchableWithoutFeedback>

          <Text style={{fontFamily:fonts.primary[400], fontSize:10,marginTop:10}}>*Pastikan anda berada di lokasi kunjungan sebelum dimulai</Text>
        </View>
        </View>
      </ScrollView>
    </View>
  );

  // Render halaman berdasarkan state `currentPage`
  return currentPage === 'Kunjungan' ? renderKunjungan() : renderDetailKunjungan();
}
