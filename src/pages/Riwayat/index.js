import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

import { colors, fonts } from '../../utils';
import { color } from 'react-native-reanimated';
import { Icon } from 'react-native-elements';

function Page1() {
  return (
    <View style={styles.page}>
      <View style={{
        padding:10,
      }}>

      <View style={{
        borderWidth:1,
        borderRadius:10,
        padding:10,
      }}>

      {/* TANGGAL DAN INFO */}
      <View style={{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:'center',
      }}>

      {/* TANGGAL */}
     <View>
     <Text style={{fontFamily:fonts.primary[600], fontSize:12,}}>13 Januari 2025</Text>
     <Text style={{fontFamily:fonts.primary[300], fontSize:10,}}>Kamis</Text>
     </View>
      
      {/* INFO */}
      <View style={{padding:10, backgroundColor:'#E8F5F4', borderRadius:10}}>
        <Text style={{fontFamily:fonts.primary[400], fontSize:10, color:colors.primary}}>Tepat Waktu</Text>
      </View>
      </View>

      {/* MASUK, PULANG, LAMA DI KANTOR */}
      <View style={{
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:"center",
        marginTop:20
      }}>

      {/* WAKTU MASUK */}
      <View>
        <Text style={{fontFamily:fonts.primary[400], fontSize:10, textAlign:"center"}}>Masuk</Text>
        <Text style={{fontFamily:fonts.primary[500], fontSize:10, textAlign:"center"}}>08.00</Text>
      </View>

      {/* WAKTU PULANG */}
      <View>
        <Text style={{fontFamily:fonts.primary[400], fontSize:10, textAlign:"center"}}>Pulang</Text>
        <Text style={{fontFamily:fonts.primary[500], fontSize:10, textAlign:"center"}}>17.00</Text>
      </View>

      <View>
        <Text style={{fontFamily:fonts.primary[400], fontSize:10, textAlign:"center"}}>Lama di Kantor</Text>
        <Text style={{fontFamily:fonts.primary[500], fontSize:10, textAlign:"center"}}>9j 00m</Text>
      </View>
      </View>

      </View>

      </View>
    </View>
  );
}

function Page2() {
  return (
    <View style={styles.page}>
         <View style={{
        padding:10,
      }}>

      <View style={{
        borderWidth:1,
        borderRadius:10,
        padding:10,
      }}>

      {/* TANGGAL DAN INFO */}
      <View style={{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:'center',
      }}>

      {/* Keterangan dan Tanggal */}
     <View>
     <Text style={{fontFamily:fonts.primary[600], fontSize:12,}}>Izin</Text>
     <Text style={{fontFamily:fonts.primary[300], fontSize:10,}}>31 Des, 2024-14 Jan, 2025</Text>
     </View>
      
      {/* INFO */}
      <View style={{padding:10, backgroundColor:'#FFF3E1', borderRadius:10}}>
        <Text style={{fontFamily:fonts.primary[400], fontSize:10, color:colors.foourty}}>Menunggu Persetujuan</Text>
      </View>
      </View>

      {/* MASUK, PULANG, LAMA DI KANTOR */}
      <View style={{
        flexDirection:"row",
        justifyContent:'flex-start',
        alignItems:"center",
        marginTop:20
      }}>

      {/* WAKTU IZIN / SAKIT */}
      <View style={{
        flexDirection:'row',
        justifyContent:"flex-start",
        alignItems:"center",
        
        
      }}>
        <Icon type='ionicon' name='time-outline'/>
        <Text style={{fontFamily:fonts.primary[499], fontSize:15, textAlign:"center", marginHorizontal:10}}>2 Hari</Text>
      </View>
      </View>

      </View>

      </View>
    </View>
  );
}

function Page3() {
  return (
    <View style={styles.page}>
         <View style={{
        padding:10,
      }}>

      <View style={{
        borderWidth:1,
        borderRadius:10,
        padding:10,
      }}>

      {/* TANGGAL DAN INFO */}
      <View style={{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:'center',
      }}>

      {/* Keterangan dan Tanggal */}
     <View>
     <Text style={{fontFamily:fonts.primary[600], fontSize:12,}}>Izin</Text>
     <Text style={{fontFamily:fonts.primary[300], fontSize:10,}}>31 Des, 2024-14 Jan, 2025</Text>
     </View>
      
      {/* INFO */}
      <View style={{padding:10, backgroundColor:'#FFF3E1', borderRadius:10}}>
        <Text style={{fontFamily:fonts.primary[400], fontSize:10, color:colors.foourty}}>Menunggu Persetujuan</Text>
      </View>
      </View>

      {/* MASUK, PULANG, LAMA DI KANTOR */}
      <View style={{
        flexDirection:"row",
        justifyContent:'flex-start',
        alignItems:"center",
        marginTop:20
      }}>

      {/* WAKTU IZIN / SAKIT */}
      <View style={{
        flexDirection:'row',
        justifyContent:"flex-start",
        alignItems:"center",
        
        
      }}>
        <Icon type='ionicon' name='time-outline'/>
        <Text style={{fontFamily:fonts.primary[499], fontSize:15, textAlign:"center", marginHorizontal:10}}>2 Hari</Text>
      </View>
      </View>

      </View>

      </View>
    </View>
  );
}

function Page4() {
  return (
    <View style={styles.page}>
        <View style={{
        padding:10,
      }}>

      <View style={{
        borderWidth:1,
        borderRadius:10,
        padding:10,
      }}>

      {/* TANGGAL DAN INFO */}
      <View style={{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:'center',
      }}>

      {/* Keterangan dan Tanggal */}
     <View>
     <Text style={{fontFamily:fonts.primary[300], fontSize:10,}}>13 Januari, 2025</Text>
     <Text style={{fontFamily:fonts.primary[500], fontSize:12,}}>Transportasi</Text>
     </View>
      
      {/* INFO */}
      <View style={{padding:10, backgroundColor:'#FFF3E1', borderRadius:10}}>
        <Text style={{fontFamily:fonts.primary[400], fontSize:10, color:colors.foourty}}>Menunggu Persetujuan</Text>
      </View>
      </View>

      {/* JUMLAH */}
      <View style={{
        marginTop:20
      }}>
        <Text style={{fontFamily:fonts.primary[600], }}>$120.00</Text>
      </View>

      {/* Ketenrangan */}
      <View style={{
        marginTop:10
      }}>
    <Text style={{fontFamily:fonts.primary[300], }}>Taksi untuk meeting client</Text>
      
      </View>

      </View>

      </View>
    </View>
  );
}

export default function Riwayat() {
  const [activeTab, setActiveTab] = useState('Page1');

  // Render content berdasarkan tab aktif
  const renderContent = () => {
    switch (activeTab) {
      case 'Page1':
        return <Page1 />;
      case 'Page2':
        return <Page2 />;
      case 'Page3':
        return <Page3 />;
        case 'Page4':
          return <Page4 />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Riwayat</Text>
      </View>

      {/* Custom Top Tab Navigator */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Page1' && styles.activeTab]}
          onPress={() => setActiveTab('Page1')}>
          <Text style={[styles.tabText, activeTab === 'Page1' && styles.activeTabText]}>Absensi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Page2' && styles.activeTab]}
          onPress={() => setActiveTab('Page2')}>
          <Text style={[styles.tabText, activeTab === 'Page2' && styles.activeTabText]}>Izin/Sakit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Page3' && styles.activeTab]}
          onPress={() => setActiveTab('Page3')}>
          <Text style={[styles.tabText, activeTab === 'Page3' && styles.activeTabText]}>Cuti</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Page4' && styles.activeTab]}
          onPress={() => setActiveTab('Page4')}>
          <Text style={[styles.tabText, activeTab === 'Page4' && styles.activeTabText]}>Reimbuse</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView>{renderContent()}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    padding: 20,
  },
  headerText: {
    fontFamily: fonts.primary[600],
    fontSize: 15,
    marginLeft: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    padding:10
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:colors.white,
    borderRadius:5
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: colors.white,
    backgroundColor:colors.primary
  },
  tabText: {
    fontSize: 12,
    fontFamily: fonts.primary[500],
    color: '#B0B0B0',
  },
  activeTabText: {
    fontWeight: 'bold',
    color:colors.white
  },
  page: {
    flex: 1,
    padding: 0,
  },
});
