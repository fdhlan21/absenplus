import { View, Text, SafeAreaView, ImageBackground, Image, Animated } from 'react-native'
import React, { useEffect } from 'react'
import { colors, fonts } from '../../utils'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'

export default function LoginOrRegister({ navigation }) {
  const translateY = new Animated.Value(100); // Posisi awal di bawah layar

  useEffect(() => {
    // Animasi muncul dari bawah ke atas
    Animated.timing(translateY, {
      toValue: 0,  // Posisi akhir di atas (awal halaman)
      duration: 1000,  // Durasi animasi
      useNativeDriver: true,  // Gunakan native driver untuk performa lebih baik
    }).start();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
      <ImageBackground
        source={require('../../assets/bggradient.png')}
        style={{ flex: 1, width: '100%', height: '100%' }}
      >
        <Animated.View
          style={{
            margin: 10,
            padding: 10,
            transform: [{ translateY }],  // Terapkan animasi translateY
          }}
        >
          <View style={{ padding: 10, height: '100%' }}>
            <View
              style={{
                alignItems: 'center',
                height: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <View>
                <Image
                  style={{ width: 178, height: 178, alignSelf: 'center' }}
                  source={require('../../assets/logo.png')}
                />
                <View style={{ marginTop: 100 }}>
                  <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
                    <View
                      style={{
                        padding: 10,
                        backgroundColor: colors.button,
                        borderRadius: 5,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 260,
                        height: 40,
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: fonts.primary[600],
                          marginRight: 10,
                          fontSize: 12,
                        }}
                      >
                        Login
                      </Text>
                      <Icon type='ionicon' name='log-in-outline' size={20} />
                    </View>
                  </TouchableWithoutFeedback>

                  <TouchableWithoutFeedback onPress={() => navigation.navigate('Register')}>
                    <View
                      style={{
                        padding: 10,
                        backgroundColor: colors.white,
                        borderRadius: 5,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 260,
                        marginTop: 20,
                        height: 40,
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: fonts.primary[400],
                          marginRight: 10,
                          textAlign: 'center',
                          fontSize: 12,
                        }}
                      >
                        Register
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </View>
          </View>
        </Animated.View>
      </ImageBackground>
    </SafeAreaView>
  );
}
