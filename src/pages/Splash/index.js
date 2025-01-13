import React, { useEffect } from 'react';
import {
  StyleSheet,
  Animated,
  ImageBackground,
  SafeAreaView,
} from 'react-native';

import { colors, windowHeight } from '../../utils';

export default function Splash({ navigation }) {
  const circleScale = new Animated.Value(0); // Untuk animasi lingkaran
  const circleOpacity = new Animated.Value(1); // Untuk memudar lingkaran
  const overlayOpacity = new Animated.Value(1); // Untuk memudar overlay putih
  const backgroundOpacity = new Animated.Value(0); // Untuk memunculkan background

  useEffect(() => {
    // Urutan animasi: Lingkaran membesar, lingkaran & overlay memudar, lalu background muncul
    Animated.sequence([
      Animated.timing(circleScale, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.timing(circleOpacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(overlayOpacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(backgroundOpacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Tunggu sebentar sebelum navigasi ke halaman login
      setTimeout(() => navigation.replace('LoginOrRegister'), 2500);
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Background gambar */}
      <Animated.View
        style={[
          styles.backgroundContainer,
          { opacity: backgroundOpacity }, // Efek fade untuk background
        ]}
      >
        <ImageBackground
          source={require('../../assets/bgsplasj.png')}
          style={styles.background}
        />
      </Animated.View>

      {/* Overlay putih */}
      <Animated.View
        style={[
          styles.overlay,
          {
            opacity: overlayOpacity, // Memudar bersama dengan lingkaran
          },
        ]}
      />

      {/* Lingkaran animasi */}
      <Animated.View
        style={[
          styles.circle,
          {
            transform: [
              {
                scale: circleScale.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 15], // Membesar hingga 15x ukuran awal
                }),
              },
            ],
            opacity: circleOpacity, // Efek memudar lingkaran
          },
        ]}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0, // Background di lapisan paling bawah
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.white,
    zIndex: 1, // Overlay di atas background
  },
  circle: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#00A896',
    zIndex: 2, // Lingkaran di atas overlay
    top: windowHeight / 2 - 50, // Pusatkan secara vertikal
    alignSelf: 'center',
  },
});
