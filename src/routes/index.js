import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Splash,
  Home,
  Login,
  Register,
  Account,
  AccountEdit,
  StatusGizi,
  Imt,
  Take,
  StatusGiziHasil,
  DataIbuHamil,
  DataPemeriksaanIbuHami,
  SubDataPemeriksaanIbuHami,
  IbuHamil,
  TrisemesterI,
  TrisemesterII1,
  TrisemesterIII1,
  TrisemesterIII2,
  TrisemesterIII3,
  IbuBersalin,
  IbuNifas,
  IbuNifasKF,
  VideoMateri,
  TanyaJawab,
  Artikel,
  Kuesioner,
  TrisemesterII2,
  InfoLayananKesehatan,
  InfoEdukasiPenyakit,
  InfoEdukasiPenyakitKanker,
  InfoEdukasiPenyakitStroke,
  InfoEdukasiPenyakitJantung,
  InfoEdukasiPenyakitGinjal,
  InfoEdukasiPenyakitDiabetes,
  InteraksiBersamaTim,
  TentangAplikasi,
  InfoEdukasiPenyakitStunting,
  PrintKainRoll,
  PrintJersey,
  CetakSample,
  CetakSampleKainRoll,
  CetakSampleHijab,
  CetakSampleJersey,
  PrintHijab,
  Riwayat,
  MulaiPage,
  Indentitas,
  HasilTekananDarah,
  SubRiwayatPemeriksaanLaboratorium,
  Gula,
  ProfilLipid,
  LainLain,
  RiwayatPemeriksaanRadiologis,
  RiwayatObat,
  EKG,
  PenilaianNyeri,
  Rekomendasi,
  KalkulatorKompos,
  Petunjuk,
  CheckHargaStock,
  BuatPenawaran,
  TambahPenawaran,
  DonwnloadBrosur,
  BuktiPengeluaran,
  TambahBuktiPengeluaran,
  HasilBuatPenawaran,
  LoginOrRegister,
  Asset,
  Absen,
  Lembur,
  TambahLembur,
  PengajuanIzi,
  PengajuanCuti,
  PengajuanReimbursement,
  Kujungan,
  Catatan,
  SlipGaji,
  RekapAbsen,
  DetailSlipGaji,



} from '../pages';
import { colors } from '../utils';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';



const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator initialRouteName='Produk' tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Aset" component={Asset} />
      <Tab.Screen name="Riwayat" component={Riwayat} />
      <Tab.Screen name="Profile" component={Account} />
      <Tab.Screen name="Absen" component={Absen} />

    </Tab.Navigator>
  );
};

export default function Router() {
  return (
    <Stack.Navigator initialRouteName='MainApp'>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />





      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,

        }}
      />


<Stack.Screen
        name="LoginOrRegister"
        component={LoginOrRegister}
        options={{
          headerShown: false,

        }}
      />

<Stack.Screen
        name="Asset"
        component={MainApp}
        options={{
          headerShown: false,

        }}
      />


<Stack.Screen
        name="Riwayat"
        component={MainApp}
        options={{
          headerShown: false,

        }}
      />

<Stack.Screen
        name="Absen"
        component={MainApp}
        options={{
          headerShown: false,

        }}
      />

      
<Stack.Screen
        name="Lembur"
        component={Lembur}
        options={{
          headerShown: false,

        }}
      />

<Stack.Screen
        name="TambahLembur"
        component={TambahLembur}
        options={{
          headerShown: false,

        }}
      />

<Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,

        }}
      />

<Stack.Screen
        name="PengajuanIzin"
        component={PengajuanIzi}
        options={{
          headerShown: false,

        }}
      />

<Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,

        }}
      />


      <Stack.Screen
        name="PengajuanCuti"
        component={PengajuanCuti}
        options={{
          headerShown: false,

        }}
      />


<Stack.Screen
        name="PengajuanReimbursement"
        component={PengajuanReimbursement}
        options={{
          headerShown: false,

        }}
      />


<Stack.Screen
        name="Kunjungan"
        component={Kujungan}
        options={{
          headerShown: false,

        }}
      />

<Stack.Screen
        name="Catatan"
        component={Catatan}
        options={{
          headerShown: false,

        }}
      />

<Stack.Screen
        name="SlipGaji"
        component={SlipGaji}
        options={{
          headerShown: false,

        }}
      />
<Stack.Screen
        name="DetailSlipGaji"
        component={DetailSlipGaji}
        options={{
          headerShown: false,

        }}
      />

<Stack.Screen
        name="RekapAbsen"
        component={RekapAbsen}
        options={{
          headerShown: false,

        }}
      />



      <Stack.Screen
        name="AccountEdit"
        component={AccountEdit}
        options={{
          headerShown: false,
          headerTitle: 'Edit Profile',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: '#000',
        }}
      />


      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{
          headerShown: false,
        }}
      />
















    </Stack.Navigator>
  );
}
