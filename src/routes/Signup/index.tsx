import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../components/Button/index.tsx';
import Textinput from '../../components/Textinput/index.tsx';
import styles from './styles.ts';
import SVGIcon from '../../components/SVGIcon/index.tsx';
import icons from '../../assets/icon.ts';
import Icon from 'react-native-vector-icons/Feather.js';
import {useDispatch} from 'react-redux';
import {callGetAllRoles, getAllRolesInfo} from './slice/getRoles.ts';
import {callEmailExists} from './slice/checkEmailAlreadyExists.ts';
import {callPhoneExists} from './slice/checkPhoneAlreadyExists.ts';
import {callSignUp, signUpInfo} from './slice/signUpVolunteer.ts';
import {useAppSelector} from '../../redux/hooks/index.ts';
import {GetallRolesInfo, GetallRolesSuccess} from '../../types/index.ts';
import MobileText from '../../components/MobileText/index.tsx';

const Signup = ({navigation}: any) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmpasswordVisible, setconfirmPasswordVisible] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [click, setClick] = useState(false);
  const [holder, setHolder] = useState('Select Role');
  const [selectedRole, setSelectedRole] = useState<string>();
  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);
  const [inputPhoneError, setInputPhoneError] = useState<any>();

  const input = useRef(null);

  const {isRolesLoading, getRolesSuccess = {} as GetallRolesSuccess} =
    useAppSelector(getAllRolesInfo);

  const dispatch = useDispatch();

  useEffect(() => {
    const payload = {
      email: email,
    };
    dispatch(callEmailExists(payload));
    if (inputPhone.length == 10) {
      const payload = {
        phoneNumber: '+91' + inputPhone,
      };
      dispatch(callPhoneExists(payload));
    }
  }, [email, inputPhone, dispatch]);

  const showpassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const showconfirmpassword = () => {
    setconfirmPasswordVisible(!confirmpasswordVisible);
  };

  useEffect(() => {
    dispatch(callGetAllRoles());
  }, []);

  const handlesignup = () => {
    const payload = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      emailVerified: true,
      password: password,
      phoneNumber: '+91' + inputPhone,
      phoneNumberVerified: true,
      // roleId: 'c631f931-34d8-4a10-af03-1755415966f6',
      roleId: getRolesSuccess[0]?.id,
    };

    // console.log(getRolesSuccess);

    console.log('SignUp API-CALL');
    dispatch(callSignUp(payload));

    navigation.navigate('Mainscreen');
  };

  const handlelogin = () => {
    navigation.navigate('Login');
  };

  const selectRole = (val: string) => {
    setSelectedRole(val);
    setIsOpenDropdown(!isOpenDropdown);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{alignItems: 'flex-start', width: 328}}>
          <Text style={styles.welcome}>Welcome,</Text>
          <Text style={styles.text1}>Signup to continue</Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <SVGIcon style={styles.img} icon={icons.secondLogo} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: 328,
            justifyContent: 'space-between',
          }}>
          <TextInput
            style={styles.textip1}
            placeholder="First Name*"
            placeholderTextColor="#6D6A6A"
            onChangeText={setFirstName}
            value={firstName}
          />
          <TextInput
            style={styles.textip1}
            placeholder="Last Name*"
            placeholderTextColor="#6D6A6A"
            onChangeText={setLastName}
            value={lastName}
          />
        </View>
        <Textinput
          placeholderText={'Enter Email ID*'}
          onChangeText={setEmail}
          value={email}
        />

        <View style={styles.rowIcon}>
          <Textinput
            placeholderText={'Enter Password*'}
            secureTextEntry={!passwordVisible}
            onChangeText={setPassword}
            value={password}
          />
          <Icon
            name={passwordVisible ? 'eye' : 'eye-off'}
            size={22}
            style={styles.eyeIcon}
            color={'#6C6A6A'}
            onPress={showpassword}
          />
        </View>
        <View style={styles.rowIcon}>
          <Textinput
            placeholderText={'Confirm Password*'}
            secureTextEntry={!confirmpasswordVisible}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
          />
          <Icon
            name={confirmpasswordVisible ? 'eye' : 'eye-off'}
            size={22}
            style={styles.eyeIcon}
            color={'#6C6A6A'}
            onPress={showconfirmpassword}
          />
        </View>
        {/* <Textinput
          placeholderText={'Enter Mobile Number*'}
          onChangeText={setInputPhone}
          value={inputPhone}
        /> */}
          <MobileText
            phoneNumber={inputPhone}
            onChangeText={setInputPhone}
            type={1}
          />
          {inputPhoneError !== undefined && inputPhoneError !== '' && (
            <Text style={styles.errorText}>{inputPhoneError}</Text>
          )}
        {/* <View style={styles.rowIcon}>
          <SelectDropdown
            onSelect={() => {}}
            data={['1', '2']}
            buttonTextAfterSelection={selectedItem => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            defaultButtonText="Select Role*"
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

        <Pressable
          onPress={() => {
            setClick(!click);
          }}
          style={[
            styles.mainView,
            {
              backgroundColor: click ? '#F9E7A2' : undefined,
            },
          ]}>
          <View style={click ? styles.style1 : styles.style}>
            <TextInput
              onFocus={() => {
                setClick(!click);
              }}
              ref={input}
              placeholderTextColor={click ? '#1B2E72' : '#9B9696'}
              placeholder={holder}
              editable={false}
              style={[
                styles.input,
                click
                  ? {fontFamily: 'Poppins-Medium'}
                  : {fontFamily: 'Poppins-Regular'},
              ]}
            />
            <View style={styles.svgHolder}>
              <SVGIcon
                style={[
                  styles.svg,
                  {
                    transform: [click ? {rotate: '90deg'} : {rotate: '-90deg'}],
                  },
                ]}
                icon={icons.backButton}
              />
            </View>
          </View>
          {getRolesSuccess && click ? (
            <View style={styles.options}>
              <Pressable
                style={[
                  styles.holder,
                  {
                    backgroundColor:
                      holder === 'Volunteer' ? '#F1C40F' : undefined,
                  },
                ]}
                onPress={() => {
                  selectRole(getRolesSuccess[0]?.name);
                  setHolder('Volunteer');
                  setClick(!click);
                }}>
                <Text style={styles.dropdownText}>Volunteer</Text>
              </Pressable>
              <Pressable
                style={[
                  styles.holder,
                  {
                    backgroundColor:
                      holder === 'Organization' ? '#F1C40F' : undefined,
                  },
                ]}
                onPress={() => {
                  selectRole(getRolesSuccess[1]?.name);
                  setHolder('Organization');
                  setClick(!click);
                }}>
                <Text style={styles.dropdownText}>Organization</Text>
              </Pressable>
            </View>
          ) : (
            <></>
          )}
        </Pressable>

        <CustomButton title={'Signup'} onPress={handlesignup} />

        <TouchableOpacity onPress={handlelogin}>
          <Text style={styles.text2}>Already have an account? Login</Text>
        </TouchableOpacity>

        <View
          style={{
            width: 328,
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
          }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
