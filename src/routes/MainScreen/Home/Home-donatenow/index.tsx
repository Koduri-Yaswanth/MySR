import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Textinput from '../../../../components/Textinput';
import CustomButton from '../../../../components/Button';
import DatePicker from 'react-native-date-picker';
import CalendarIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/Feather.js';
import SVGIcon from '../../../../components/SVGIcon';
import icons from '../../../../assets/icon';
import MobileText from '../../../../components/MobileText';


const Homedonatenow = () => {
  const [fullName, setFullName] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [nearbyNGO, setNearbyNGO] = useState('');
  const [donation, setDonation] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [description, setDescription] = useState('');
  const [inputHeight, setInputHeight] = useState(40);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [date, setDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState(''); 

  const formatDate = (selectedDate: any) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    return selectedDate.toLocaleDateString('en-US', options);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{marginTop: 10}}>
        <Textinput
          placeholderText="Enter Full Name"
          onChangeText={setFullName}
          value={fullName}
        />
        <Textinput
          placeholderText="Pickup Location"
          onChangeText={setPickupLocation}
          value={pickupLocation}
        />
        <Textinput
          placeholderText="All Nearby NGO's"
          onChangeText={setNearbyNGO}
          value={nearbyNGO}
        />
        <Textinput
          placeholderText="Type of Donation"
          onChangeText={setDonation}
          value={donation}
        />
        <TouchableOpacity
          onPress={() => setOpenCalendar(true)}
          style={{flexDirection: 'row-reverse'}}>
          <Textinput
            placeholderText="Date & Time"
            editable={false}
            value={formattedDate}
          />
          <CalendarIcon
            name="calendar-month"
            size={22}
            style={styles.calendar}
          />
        </TouchableOpacity>

        <DatePicker
          modal
          open={openCalendar}
          date={date}
          onConfirm={date => {
            setOpenCalendar(false);
            setDate(date);
            const formatted = formatDate(date);
            setFormattedDate(formatted);
          }}
          onCancel={() => {
            setOpenCalendar(false);
          }}
        />

        {/* <Textinput
          placeholderText="Enter Contact Number"
          onChangeText={setContactNumber}
          value={contactNumber}
        /> */}
        <MobileText
          phoneNumber={contactNumber}
          onChangeText={setContactNumber}
          type={1}
        />
        {/* <View style={styles.rowIcon}>
          <SelectDropdown
            onSelect={() => {}}
            data={['Pick Up', 'Deliver By Myself']}
            buttonTextAfterSelection={selectedItem => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            defaultButtonText="Pickup Location"
            rowStyle={styles.dropdownItem}
            rowTextStyle={styles.dropdownText}
            buttonStyle={styles.dropdownView}
            buttonTextStyle={{
              fontSize: 14,
              color: '#6C6A6A',
              textAlign: 'left',
            }}
            dropdownStyle={styles.dropdowncontainer}
          />
          <Icon
            name="chevron-down"
            size={25}
            style={styles.downIcon}
            color={'#6C6A6A'}
          />
        </View> */}
        <TextInput
          style={[styles.textip, {height: Math.max(48, inputHeight)}]}
          multiline
          placeholder="Description"
          placeholderTextColor="#6D6A6A"
          onChangeText={setDescription}
          value={description}
          onContentSizeChange={event => {
            setInputHeight(event.nativeEvent.contentSize.height);
          }}
        />
        <CustomButton title={'Send'} />
        <SVGIcon
          style={styles.img}
          icon={icons.donateNowEl}
          // key={'icon'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homedonatenow;
