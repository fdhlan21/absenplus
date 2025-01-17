import React from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { fonts, colors } from '../../utils';
import { Image } from 'react-native';

export default function DetailSlipGaji({ navigation }) {
  const pendapatan = [
    { id: '1', title: 'Gaji Pokok', amount: 4700 },
    { id: '2', title: 'Tunjangan Transportasi', amount: 250 },
    { id: '3', title: 'Tunjangan Medis', amount: 500 },
  ];

  const potongan = [
    { id: '1', title: 'Pajak', amount: -600 },
    { id: '2', title: 'Asuransi', amount: -100 },
  ];

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
      <Text style={{ fontFamily: fonts.primary[400], fontSize: 14 }}>{item.title}</Text>
      <Text style={{ fontFamily: fonts.primary[400], fontSize: 14, color: item.amount < 0 ? 'red' : colors.text }}>
        {item.amount < 0 ? `-$${Math.abs(item.amount).toFixed(2)}` : `$${item.amount.toFixed(2)}`}
      </Text>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      {/* Header */}
      <View style={{ padding: 10 }}>
      <View style={{flexDirection:"row", justifyContent:'space-between', alignItems:"center"}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
                <Icon type="ionicon" name="chevron-back-outline" size={25} color={colors.primary} />
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 15, top: 2 }}>Slip Gaji - November</Text>
              </View>
    </TouchableOpacity>

    <TouchableOpacity style={{marginRight:20}}>
        <Icon name='download' type='ionicon' size={24}/>
    </TouchableOpacity>
      </View>
            
          </View>

      <ScrollView>
        <View style={{ padding: 20 }}>
          {/* Gaji Bulan Ini */}
          <View style={{ padding: 15, backgroundColor: colors.primary, borderRadius: 10, marginBottom: 20 }}>
            <Text style={{ fontFamily: fonts.primary[500], color: colors.white, fontSize: 12 }}>Gaji bulan ini</Text>
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 24, color: colors.white }}>$4,750.00</Text>
            <Text style={{ fontFamily: fonts.primary[400], fontSize: 12, color: colors.white }}>November 2024</Text>
          </View>

          {/* Pendapatan */}
          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 16, marginBottom: 10 }}>Pendapatan</Text>
            <FlatList
              data={pendapatan}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
              ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#ccc', marginVertical: 5 }} />}
            />
            <View style={{ height: 1, backgroundColor: '#ccc', marginVertical: 10 }} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontFamily: fonts.primary[600], fontSize: 14 }}>Total Pendapatan</Text>
              <Text style={{ fontFamily: fonts.primary[600], fontSize: 14, color: colors.primary }}>$5,450.00</Text>
            </View>
          </View>

          {/* Potongan */}
          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 16, marginBottom: 10 }}>Potongan</Text>
            <FlatList
              data={potongan}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
              ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#ccc', marginVertical: 5 }} />}
            />
            <View style={{ height: 1, backgroundColor: '#ccc', marginVertical: 10 }} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontFamily: fonts.primary[600], fontSize: 14 }}>Total Potongan</Text>
              <Text style={{ fontFamily: fonts.primary[600], fontSize: 14, color: 'red' }}>-$700.00</Text>
            </View>
          </View>

          {/* Informasi Pembayaran */}
          <View>
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 16, marginBottom: 10 }}>Informasi Pembayaran</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
              <Text style={{ fontFamily: fonts.primary[400], fontSize: 14 }}>Metode Pembayaran</Text>
           <View style={{flexDirection:'row', justifyContent:'center', alignItems:"center"}}>
           <Image style={{width:15, height:15, marginHorizontal:10, top:-2 }} source={require('../../assets/bank_icon.png')}/>
           <Text style={{ fontFamily: fonts.primary[400], fontSize: 14 }}>Transfer Bank</Text>
           </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontFamily: fonts.primary[400], fontSize: 14 }}>Tanggal Pembayaran</Text>
              <Text style={{ fontFamily: fonts.primary[400], fontSize: 14 }}>Desember 1, 2024</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
