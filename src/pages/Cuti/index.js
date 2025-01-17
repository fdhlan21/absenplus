import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import { colors, fonts } from '../../utils';
import { Icon } from 'react-native-elements';
import { MyCalendar, MyInput, MyPicker } from '../../components';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { PermissionsAndroid } from 'react-native';
export default function PengajuanCuti({ navigation }) {
  const [photo, setPhoto] = useState(null); // State untuk menyimpan foto yang diambil

  // Fungsi untuk mengambil gambar dari kamera
  const handleCamera = async () => {
    try {
      // Periksa apakah izin kamera sudah diberikan
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Izin Kamera',
          message: 'Aplikasi ini membutuhkan akses ke kamera Anda.',
          buttonNeutral: 'Nanti',
          buttonNegative: 'Batal',
          buttonPositive: 'OK',
        }
      );
  
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // Jika izin diberikan, buka kamera
        launchCamera(
          {
            mediaType: 'photo',
            cameraType: 'back',
            saveToPhotos: true,
          },
          (response) => {
            if (response.didCancel) {
              Alert.alert('Peringatan', 'Kamera dibatalkan!');
            } else if (response.errorCode) {
              Alert.alert('Error', response.errorMessage || 'Terjadi kesalahan saat membuka kamera.');
            } else {
              setPhoto(response.assets[0].uri);
            }
          }
        );
      } else {
        Alert.alert('Peringatan', 'Akses kamera ditolak.');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  // Fungsi untuk memilih gambar dari galeri
  const handleGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
      },
      (response) => {
        if (response.didCancel) {
          Alert.alert('Peringatan', 'Galeri dibatalkan!');
        } else if (response.errorCode) {
          Alert.alert('Error', response.errorMessage || 'Terjadi kesalahan saat membuka galeri.');
        } else {
          setPhoto(response.assets[0].uri);
        }
      }
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={{ padding: 10 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
            <Icon type="ionicon" name="chevron-back-outline" size={25} color={colors.primary} />
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 15, top: 2 }}>Pengajuan Cuti</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={{ padding: 10 }}>
          <View>
          
            <MyCalendar iconName="calendar-outline" iconColor="black" label="Pilih Tanggal" />
            <MyInput iconname="time-outline" label="Jumlah Hari" />
            <MyInput iconname="reader-outline" label="Keterangan / Alasan" />
          </View>

          {/* Bagian Upload Foto */}
          <Text style={styles.label}>Upload foto / bukti lainnya</Text>
          <View style={styles.uploadContainer}>
            {photo ? (
              <Image source={{ uri: photo }} style={styles.imagePreview} />
            ) : (
              <>
                <Icon type="ionicon" name="camera-outline" size={40} color={colors.border} />
                <Text style={styles.uploadText}>image not available</Text>
              </>
            )}
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cameraButton} onPress={handleCamera}>
              <Icon type="ionicon" name="camera-outline" size={20} color={colors.black} />
              <Text style={styles.buttonText}>Kamera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.galleryButton} onPress={handleGallery}>
              <Icon type="ionicon" name="image-outline" size={20} color={colors.black} />
              <Text style={styles.buttonText}>Galeri</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontFamily: fonts.primary[600],
    fontSize: 14,
    marginBottom: 10,
    color: colors.black,
    marginTop:20
  },
  uploadContainer: {
    borderWidth: 1,
    borderColor: colors.border,
    borderStyle: 'dashed',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    marginBottom: 10,
  },
  uploadText: {
    fontFamily: fonts.primary[400],
    fontSize: 12,
    color: colors.border,
    marginTop: 5,
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    resizeMode: 'cover',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  cameraButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFD66B',
    padding: 10,
    marginRight: 5,
    borderRadius: 8,
  },
  galleryButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
    padding: 10,
    marginLeft: 5,
    borderRadius: 8,
  },
  buttonText: {
    fontFamily: fonts.primary[600],
    fontSize: 14,
    color: colors.black,
    marginLeft: 5,
  },
  submitButton: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitText: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.white,
  },
});
