import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Color, colors } from '../../utils/colors';
import { fonts } from '../../utils';

export default function BottomNavigator({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.groupLeft}>
        {/* Home & Aset dalam satu view */}
        {['Home', 'Aset'].map((tabName, index) => {
          const route = state.routes.find((r) => r.name === tabName);
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === state.routes.indexOf(route);

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const iconName =
            label === 'Home'
              ? isFocused
                ? 'home' // Ikon penuh saat aktif
                : 'home-outline' // Ikon outline saat tidak aktif
              : label === 'Aset'
              ? isFocused
                ? 'briefcase'
                : 'briefcase-outline'
              : '';

          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              style={styles.tabButton}
            >
              <Icon
                name={iconName}
                type="ionicon"
                size={25}
                color={isFocused ? colors.white : colors.secondary}
              />
              <Text
                style={[styles.tabLabel, { color: isFocused ? colors.white : colors.secondary }]}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Absen button tetap di tengah */}
      <TouchableOpacity
        onPress={() => {
          const route = state.routes.find((r) => r.name === 'Absen');
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        }}
        style={styles.absenButton}
      >
        <View style={styles.absenIconContainer}>
       
          <Icon
            name="scan-outline"
            type="ionicon"
            size={40}
            color={colors.white}
            style={{left:1,}}
          />
        </View>
        <Text style={styles.absenLabel}>Absen</Text>
      </TouchableOpacity>

      <View style={styles.groupRight}>
        {/* Riwayat & Profile dalam satu view */}
        {['Riwayat', 'Profile'].map((tabName, index) => {
          const route = state.routes.find((r) => r.name === tabName);
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === state.routes.indexOf(route);

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const iconName =
            label === 'Riwayat'
              ? isFocused
                ? 'time'
                : 'time-outline' // Gunakan outline saat tidak aktif
              : label === 'Profile'
              ? isFocused
                ? 'person'
                : 'person-outline' // Gunakan outline saat tidak aktif
              : '';

          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              style={styles.tabButton}
            >
              <Icon
                name={iconName}
                type="ionicon"
                size={23}
                color={isFocused ? colors.white : colors.secondary}
              />
              <Text
                style={[styles.tabLabel, { color: isFocused ? colors.white : colors.secondary }]}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    height: 70,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center',
    justifyContent: 'space-between', // Agar semua elemen bisa diatur ke tengah
    position: 'relative',
    paddingHorizontal: 0,
  },
  groupLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start', // Menempatkan ke kiri
    flex: 1,
    paddingLeft: 20, // Memberikan padding di kiri
    alignItems: 'center',
  },
  groupRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Menempatkan ke kanan
    flex: 1,
    paddingRight: 20, // Memberikan padding di kanan
    alignItems: 'center',
  },
  tabButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15, // Jarak antar ikon
  },
  tabLabel: {
    fontSize: 10,
    marginTop: 5,
    fontFamily: fonts.primary[600],
  },
  absenButton: {
    position: 'absolute',
    top: -50,
    left: '55%', // Menjaga agar tetap di tengah
    marginLeft: -35, // Setengah dari ukuran lebar tombol
    alignItems: 'center',
  },
  absenIconContainer: {
    backgroundColor: '#F0AD4E',
    width: 70,
    height: 70,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: colors.white,
    left: -24,
    marginTop: 17.5,
    flexDirection:"row"
  },
  absenLabel: {
    marginTop: 5,
    color: colors.white,
    fontSize: 10,
    left: -25,
    fontFamily: fonts.primary[600],
  },
});
