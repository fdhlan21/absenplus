import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, TouchableNativeFeedback } from 'react-native';
import { Icon } from 'react-native-elements';
import { colors, fonts } from '../../utils';

export default function SlipGaji({ navigation }) {
  // Data dummy untuk slip gaji
  const slipGajiData = [
    { id: 1, bulan: 'November 2024', jumlah: '$4,750' },
    { id: 2, bulan: 'Oktober 2024', jumlah: '$4,500' },
    { id: 3, bulan: 'September 2024', jumlah: '$4,600' },
    { id: 4, bulan: 'Agustus 2024', jumlah: '$4,700' },
  ];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}
    >
      <View style={{ padding: 10 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
            <Icon type="ionicon" name="chevron-back-outline" size={25} color={colors.primary} />
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 15, top: 2 }}>Slip Gaji</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={{ padding: 20 }}>
          {/* Perulangan untuk menampilkan kartu slip gaji */}
          {slipGajiData.map((item) => (
            <TouchableNativeFeedback onPress={() => navigation.navigate("DetailSlipGaji")} key={item.id}>
              <View
                style={{
                  padding: 10,
                  borderWidth: 0.5,
                  borderRadius: 10,
                  marginBottom: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  {/* TANGGAL */}
                  <View>
                    <Text style={{ fontFamily: fonts.primary[600], fontSize: 12 }}>{item.bulan}</Text>
                  </View>

                  {/* JUMLAH DAN DETAIL */}
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {/* JUMLAH */}
                    <Text
                      style={{
                        fontFamily: fonts.primary[600],
                        fontSize: 12,
                        color: colors.primary,
                        top: 1,
                      }}
                    >
                      {item.jumlah}
                    </Text>

                    {/* DETAIL */}
                    <Icon type="ionicon" size={15} name="chevron-forward-outline" />
                  </View>
                </View>
              </View>
            </TouchableNativeFeedback>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
