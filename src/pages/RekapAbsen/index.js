import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { colors, fonts } from '../../utils';

export default function RekapAbsen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.headerContent}>
            <Icon
              type="ionicon"
              name="chevron-back-outline"
              size={25}
              color={colors.primary}
            />
            <Text style={styles.headerText}>Rekap Absensi</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Date Selector */}
      <View style={styles.dateSelector}>
        <TouchableOpacity>
          <Icon
            type="ionicon"
            name="chevron-back-outline"
            size={20}
            color={colors.black}
          />
        </TouchableOpacity>
        <Text style={styles.dateText}>Januari 2025</Text>
        <TouchableOpacity>
          <Icon
            type="ionicon"
            name="chevron-forward-outline"
            size={20}
            color={colors.black}
          />
        </TouchableOpacity>
      </View>

      {/* Cards */}
      <ScrollView contentContainerStyle={styles.cardContainer}>
        <TouchableWithoutFeedback>
          <View style={styles.card}>
          <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
          <Image style={{width:25, height:25, marginHorizontal:5}} source={require('../../assets/kehadiran_icon.png')}/>
          <Text style={styles.cardTitle}>Kehadiran</Text>
          </View>
          <Text style={styles.cardValue}>18 Hari</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
         <View  style={styles.card}>
          <View style={{flexDirection:'row', justifyContent:"flex-start", alignItems:"center"}}>
          <Image style={{width:25, height:25, marginHorizontal:5}} source={require('../../assets/alpa_icon.png')}/>
          <Text style={styles.cardTitle}>Alpa</Text>
          </View>
          <Text style={styles.cardValue}>2 Hari</Text>
         </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback >
        <View style={styles.card}>
        <View style={{flexDirection:'row', justifyContent:"flex-start", alignItems:"center"}}>
        <Image style={{width:25, height:25, marginHorizontal:5}} source={require('../../assets/izin2_icon.png')}/>
        <Text style={styles.cardTitle}>Sakit/Izin</Text>
        </View>
          <Text style={styles.cardValue}>1 Hari</Text>
        </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
       <View style={styles.card}>
        <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:"center"}}>
        <Image style={{width:25, height:25, marginHorizontal:5}} source={require('../../assets/cuti2_icon.png')}/>
        <Text style={styles.cardTitle}>Cuti</Text>
        </View>
          <Text style={styles.cardValue}>3 Hari</Text>
       </View>
        </TouchableWithoutFeedback>
      </ScrollView>

      {/* Summary */}
      <View style={styles.summary}>
        <Text style={styles.summaryText}>Lembur: 12 jam</Text>
        <Text style={styles.summaryText}>Terlambat: <Text style={styles.redText}>4 kali (30 menit)</Text></Text>
        <Text style={styles.summaryText}>Pulang Cepat: <Text style={styles.redText}>2 kali (10 menit)</Text></Text>
        <Text style={styles.summaryText}>Tidak Absen Pulang: <Text style={styles.redText}>1 kali</Text></Text>
      </View>

      {/* Export Button */}
      <TouchableOpacity style={styles.exportButton}>
        <Text style={styles.exportButtonText}>Export PDF</Text>
        <Icon type="ionicon" name="download-outline" size={20} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    padding: 10,
  },
  headerContent: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  headerText: {
    fontFamily: fonts.primary[600],
    fontSize: 15,
    marginLeft: 5,
  },
  dateSelector: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  dateText: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    marginHorizontal: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
    width: '45%',
    marginVertical: 10,
    elevation: 2,
    justifyContent:"center"
  },
  cardTitle: {
    fontFamily: fonts.primary[400],
    fontSize: 12,
    marginTop: 2,
    color: colors.black,
  },
  cardValue: {
    fontFamily: fonts.primary[600],
    fontSize: 15,
    marginTop: 7,
    color: colors.black,
    marginLeft:10
   
  },
  summary: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  summaryText: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.black,
  },
  redText: {
    color: colors.red,
  },
  exportButton: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    margin: 20,
    borderRadius: 10,
  },
  exportButtonText: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.white,
    marginRight: 5,
  },
});
