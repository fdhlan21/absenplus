import { View, Text, TouchableOpacity, ScrollView, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, fonts } from '../../utils'
import { Icon } from 'react-native-elements'

export default function Catatan({navigation}) {

  const [catatan, setCatatan] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fungsi untuk mengambil data dari database (dummy kode untuk diaktifkan nanti)
  // const fetchCatatan = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await fetch('https://your-api-endpoint.com/catatan'); // Ganti dengan endpoint API Anda
  //     const data = await response.json();
  //     setCatatan(data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };


    // Gunakan data dummy untuk sementara
    useEffect(() => {
      const dummyData = [
        {
          id: 1,
          title: 'Judul Catatan 1',
          date: '31 Des, 2024',
          message: 'Lebih rajin lagi masuk kerjanya',
          author: 'The Boss',
          profileImage: require('../../assets/defualt_profile.png'),
        },
        {
          id: 2,
          title: 'Judul Catatan 2',
          date: '1 Jan, 2025',
          message: 'Kerjakan laporan sebelum deadline!',
          author: 'Manager',
          profileImage: require('../../assets/defualt_profile.png'),
        },
        {
          id: 3,
          title: 'Judul Catatan 3',
          date: '2 Jan, 2025',
          message: 'Siapkan presentasi untuk meeting.',
          author: 'Supervisor',
          profileImage: require('../../assets/defualt_profile.png'),
        },
      ];
      setCatatan(dummyData);
      setLoading(false);
  
      // Aktifkan baris ini jika ingin menggunakan API untuk mengambil data
      // fetchCatatan();
    }, []);

  

  return (
    <View style={{
        flex:1,
        backgroundColor:colors.white
    }}>
      <View style={{ padding: 10 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
            <Icon type="ionicon" name="chevron-back-outline" size={25} color={colors.primary} />
            <Text style={{ fontFamily: fonts    .primary[600], fontSize: 15, top: 2 }}>Catatan</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={{
          padding:20,
        }}>
        {/* CATATAN CARD */}

        {loading ? (
            <ActivityIndicator size="large" color={colors.primary} />
          ) : (
            catatan.map((item) => (
              <View
                key={item.id}
                style={{
                  padding: 10,
                  borderWidth: 0.5,
                  borderRadius: 10,
                  marginBottom: 20,
                }}>
                {/* JUDUL CATATAN */}
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 15, color: colors.primary }}>
                  {item.title}
                </Text>
                {/* Tanggal */}
                <Text style={{ fontFamily: fonts.primary[400], fontSize: 10 }}>{item.date}</Text>

                {/* MESSAGE */}
                <View style={{ marginTop: 10 }}>
                  <Text style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>{item.message}</Text>
                </View>

                {/* PROFILE, SAVE AND SHARE */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 20,
                  }}>
                  {/* Profile */}
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{ width: 30, height: 30, borderRadius: 50 }}
                      source={item.profileImage}
                    />
                    <Text
                      style={{ fontFamily: fonts.primary[400], fontSize: 10, marginHorizontal: 10 }}>
                      {item.author}
                    </Text>
                  </View>

                  {/* Save and Share */}
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity>
                      <Icon type="ionicon" name="bookmark-outline" size={18} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <Icon type="ionicon" name="share-outline" size={18} style={{ marginLeft: 10 }} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))
          )}
        </View>
      </ScrollView>
    </View>
  )
}