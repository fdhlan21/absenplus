import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Platform, TextInput, TouchableNativeFeedback, Alert } from 'react-native';
import { colors, fonts } from '../../utils';
import { Icon } from 'react-native-elements';
import { MyCalendar } from '../../components';
import DateTimePicker from '@react-native-community/datetimepicker';
import DocumentPicker from 'react-native-document-picker';

export default function TambahLembur({ navigation }) {
    const [kirim, setKirim] = useState({
        tanggal: new Date(),
        waktu_mulai: '',
        waktu_selesai: '',
        alasan_lembur: '',
        file : '',
    })
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFilePicker = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setSelectedFile(res[0]); // Menyimpan informasi file yang dipilih
      Alert.alert('File Selected', `Name: ${res[0].name}`);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Cancelled', 'File selection was cancelled');
      } else {
        console.error(err);
      }
    }
  };

  const handleTimeChange = (event, selectedTime, isStart) => {
    if (event.type === 'dismissed') {
      isStart ? setShowStartPicker(false) : setShowEndPicker(false);
      return;
    }

    const currentTime = selectedTime || new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;

    if (isStart) {
      setStartTime(formattedTime);
      setShowStartPicker(false);
    } else {
      setEndTime(formattedTime);
      setShowEndPicker(false);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      {/* Header */}
      <View style={{ padding: 10 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
            <Icon type="ionicon" name="chevron-back-outline" size={25} color={colors.primary} />
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 15, top: 2 }}>Ajukan Lembur</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={{ padding: 10 }}>
          {/* Tanggal */}
          <View style={{ padding: 10 }}>
            <MyCalendar fontFamily={fonts.primary[400]} label="Tanggal" textColor="black" />
          </View>

          {/* Waktu */}
          <View style={{ padding: 10, marginTop: 10 }}>
            <Text style={{ fontFamily: fonts.primary[400], marginBottom: 10 }}>Pilih Waktu</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 0, alignItems: 'center' }}>
              {/* Waktu Mulai */}
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 10,
                  borderWidth: 1,
                  borderColor: colors.primary,
                  borderRadius: 8,
                  backgroundColor: colors.white,
                  width: 145,
                }}
                onPress={() => setShowStartPicker(true)}
              >
                <Icon type="ionicon" name="time-outline" size={20} color={colors.primary} />
                <Text style={{ fontFamily: fonts.primary[400], fontSize: 10, marginLeft: 5 }}>
                  {startTime ? `Waktu Mulai: ${startTime}` : 'Waktu Mulai'}
                </Text>
              </TouchableOpacity>

              {/* Waktu Selesai */}
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 10,
                  borderWidth: 1,
                  borderColor: colors.primary,
                  borderRadius: 8,
                  backgroundColor: colors.white,
                  width: 145,
                }}
                onPress={() => setShowEndPicker(true)}
              >
                <Icon type="ionicon" name="time-outline" size={20} color={colors.primary} />
                <Text style={{ fontFamily: fonts.primary[400], fontSize: 10, marginLeft: 5 }}>
                  {endTime ? `Waktu Selesai: ${endTime}` : 'Waktu Selesai'}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Time Pickers */}
            {showStartPicker && (
              <DateTimePicker
                value={new Date()}
                mode="time"
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={(event, selectedTime) => handleTimeChange(event, selectedTime, true)}
              />
            )}
            {showEndPicker && (
              <DateTimePicker
                value={new Date()}
                mode="time"
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={(event, selectedTime) => handleTimeChange(event, selectedTime, false)}
              />
            )}
          </View>

          {/* Alasan Lembur */}
          <View style={{ padding: 10, marginTop: 10 }}>
            <Text style={{ fontFamily: fonts.primary[400], marginBottom: 10 }}>Alasan Lembur</Text>
            <TextInput
              placeholder="Tuliskan alasan lembur Anda..."
              placeholderTextColor={colors.grey}
              multiline={true}
              style={{
                textAlignVertical: 'top',
                borderWidth: 1,
                borderColor: colors.primary,
                borderRadius: 8,
                padding: 10,
                fontFamily: fonts.primary[400],
                fontSize: 14,
                color: 'black',
                backgroundColor: colors.white,
                width: '100%',
                height: 120,
              }}
            />
          </View>

          {/* Attachment */}
          <View style={{ padding: 10, marginTop: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ fontFamily: fonts.primary[400] }}>Attachment</Text>

              {/* Tambah File */}
              <TouchableNativeFeedback onPress={handleFilePicker}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 10,
                    
                    borderRadius: 8,
                  }}
                >
                  <Icon type="ionicon" name="attach-outline" size={20} color={colors.primary} />
                  <Text
                    style={{
                      fontFamily: fonts.primary[400],
                      fontSize: 14,
                      color: colors.primary,
                      marginLeft: 5,
                    }}
                  >
                    Tambah File
                  </Text>
                </View>
              </TouchableNativeFeedback>
            </View>

            {selectedFile && (
              <View style={{
                padding:10,
                backgroundColor:'#F9F9F9',
                borderRadius:5,
                flexDirection:"row",
                justifyContent:"flex-start",
                alignItems:"center",
              }}>
              <Icon type='ionicon' name='document' size={20}/>
              <Text style={{ fontFamily: fonts.primary[400], fontSize: 12, marginTop: 10, marginLeft:10 }}>
                {selectedFile.name}
              </Text>
              </View>
            )}
          </View>

          {/* submit */}

          <View style={{
            padding:10,
            marginTop:20
          }}>
                <TouchableNativeFeedback>
                    <View style={{
                        backgroundColor:colors.primary,
                        padding:10,
                        borderRadius:10,

                    }}>
                    <Text style={{fontFamily:fonts.primary[600], color:colors.white, fontSize:15, textAlign:"center"}}>Submit</Text>
                    </View>
                </TouchableNativeFeedback>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
