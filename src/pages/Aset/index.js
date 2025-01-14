import React, { useState } from 'react';
import { View, Text, Image, TouchableNativeFeedback, Alert, ScrollView } from 'react-native';
import { colors, fonts } from '../../utils';

export default function Asset() {
  const [isConfirmed, setIsConfirmed] = useState({});
  const [assets, setAssets] = useState([
    {
      id: 1,
      name: "Macbook",
      price: "$2,999",
      image: require('../../assets/macbook.png')
    },
    {
      id: 2,
      name: "Mobil",
      price: "$120,000",
      image: require('../../assets/mobi.png')
    },
    // Add more asset data here
  ]);

//   JIKA INGIN AMBIL DARI DATABASE

// useEffect(() => {
//     fetchAssets(); // Memanggil fungsi fetch saat komponen pertama kali di-render
//   }, []);

//   const fetchAssets = async () => {
//     try {
//       const response = await fetch('https://api.example.com/assets'); // Ganti dengan URL API yang sesuai
//       const data = await response.json();
//       setAssets(data); // Menyimpan data ke state assets
//     } catch (error) {
//       console.error("Error fetching assets: ", error);
//     }
//   };

  const handleConfirmation = (assetId) => {
    Alert.alert(
      "Apakah ini asset Anda?",
      `Nama: ${assets.find(asset => asset.id === assetId).name}\nHarga: ${assets.find(asset => asset.id === assetId).price}`,
      [
        {
          text: "Tidak",
          onPress: () => console.log("Konfirmasi dibatalkan"),
          style: "cancel"
        },
        {
          text: "Ya",
          onPress: () => {
            // Mengubah state menjadi sudah dikonfirmasi untuk asset tersebut
            setIsConfirmed(prevState => ({
              ...prevState,
              [assetId]: true
            }));
            console.log(`${assets.find(asset => asset.id === assetId).name} sudah dikonfirmasi`);
          }
        }
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.white,
    }}>

       <View style={{
            padding: 20,
          }}>
            <Text style={{
              fontFamily: fonts.primary[600],
              fontSize: 15,
              marginLeft: 10
            }}>Asset</Text>
          </View>

          <ScrollView>
          {assets.map((asset) => (
        <View key={asset.id} style={{
          padding: 10,
          margin: 10,
        }}>

       

          {/* ASSETS VIEW */}
          <View style={{
            padding: 10,
            borderBottomWidth: 0.5,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10
          }}>

            <View style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center"
            }}>
              {/* GAMBAR ASSETS */}
              <Image style={{
                width: 70,
                height: 48
              }} source={asset.image} />

              {/* NAMA ASSETS dan HARGA */}
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontFamily: fonts.primary[500], fontSize: 14, }}>{asset.name}</Text>
                <Text style={{ fontFamily: fonts.primary[500], fontSize: 14, color: colors.success }}>{asset.price}</Text>
              </View>
            </View>

            <View>
              <TouchableNativeFeedback onPress={() => handleConfirmation(asset.id)}>
                <View style={{
                  padding: 10,
                  backgroundColor: isConfirmed[asset.id] ? '#EBEBEB' : colors.success,
                  borderRadius: 10,
                }}>
                  <Text style={{
                    fontFamily: fonts.primary[500],
                    fontSize: 10,
                    color: isConfirmed[asset.id] ? "#767676" : colors.white
                  }}>
                    {isConfirmed[asset.id] ? "Sudah Dikonfirmasi" : "KONFIRMASI"}
                  </Text>
                </View>
              </TouchableNativeFeedback>
            </View>

          </View>

        </View>
      ))}
          </ScrollView>
    </View>
  );
}
