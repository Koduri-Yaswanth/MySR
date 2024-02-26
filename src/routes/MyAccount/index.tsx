import {
  Animated,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackIcon from '../../components/BackIcon/index.tsx';
import styles from './styles.ts';
import EditIcon from 'react-native-vector-icons/MaterialIcons.js';

import {
  launchImageLibrary,
  ImagePickerResponse,
  launchCamera,
} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import CustomButton from '../../components/Button/index.tsx';
import Custom_Modal from '../../components/Custom_Modal/index.tsx';
import Textinput from '../../components/Textinput/index.tsx';
import EyeIcon from 'react-native-vector-icons/Feather.js';
import {
  callChangePassword,
  changePasswordInfo,
  clearChangePassword,
} from './slice/changePassword.ts';
import {useDispatch} from 'react-redux';
import {useAuthContext} from '../../context/use-auth-context.tsx';
import {useAppSelector} from '../../redux/hooks/index.ts';
import {
  callClearDeleteProfile,
  callDeleteProfile,
  deleteProfileInfo,
} from './slice/deleteAccount.ts';
import {callGetProfile, getProfileInfo} from './slice/getProfile.ts';
import {last} from 'lodash';
import {
  callUpdateProfile,
  clearUpdateProfile,
  updateProfileInfo,
} from './slice/updateProfile.ts';

const MyAccount = ({navigation}: any) => {
  const scaleValue = new Animated.Value(1);
  const scaleValue2 = new Animated.Value(1);

  const handlePressButtonIn = () => {
    Animated.timing(scaleValue, {
      toValue: 0.8,
      duration: 50,

      useNativeDriver: true,
    }).start();
  };

  const handlePressButtonOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 50,
      useNativeDriver: true,
    }).start();
    setEditProfileModal(true);
  };

  const handlePressProfileIn = () => {
    Animated.timing(scaleValue2, {
      toValue: 0.95,
      duration: 50,
      useNativeDriver: true,
    }).start();
  };
  const handleLongPressProfileIn = () => {
    Animated.timing(scaleValue2, {
      toValue: 0.9,
      duration: 50,
      useNativeDriver: true,
    }).start();
    handleEditProfilePhoto();
  };
  const handlePressProfileOut = () => {
    Animated.timing(scaleValue2, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const cardButtonStyle = {
    transform: [{scale: scaleValue}],
  };

  const cardProfileStyle = {
    transform: [{scale: scaleValue2}],
  };

  const [profilePhoto, setProfilePhoto] = useState(
    require('../../assets/Images/image101.png'),
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [modalHeading, setModalHeading] = useState('');
  const [modalText, setModalText] = useState('');
  const [changePasswordModal, setChangePasswordModal] = useState(false);
  const [password, setPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [editMobile, setEditMobile] = useState('');
  const [editProfileModal, setEditProfileModal] = useState(false);
  const [passwordDeleteModal, setPasswordDeleteModal] = useState(false);
  const [firstTime, setFirstTime] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const {isDeleteLoading, deleteProfileSuccess, deleteProfileError} =
    useAppSelector(deleteProfileInfo);
  const {isChangePasswordLoading, changePasswordSuccess, changePasswordError} =
    useAppSelector(changePasswordInfo);
  const {isProfileLoading, profileSuccess, profileError} =
    useAppSelector(getProfileInfo);
  const {updateProfileSuccess, updateProfileError, isUpdateProfileLoading} =
    useAppSelector(updateProfileInfo);

  const dispatch = useDispatch();
  const {authData, resetAuthData} = useAuthContext();

  const handlebackpress = () => {
    navigation.navigate('Mainscreen');
  };

  const handleDeleteModalClose = () => {
    setModalVisible(false);
  };

  const showPassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const showOldPassword = () => {
    setOldPasswordVisible(!oldPasswordVisible);
  };

  const showNewPassword = () => {
    setNewPasswordVisible(!newPasswordVisible);
  };

  const showConfirmPassword = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handlePasswordChangeClose = () => {
    setChangePasswordModal(false);
  };

  const handleEditProfileModal = () => {
    setEditProfileModal(false);
  };

  const onPasswordChange = () => {
    const userPayload = {
      id: authData?.userId,
      payload: {
        currentPassword: oldPassword,
        newPassword: confirmPassword,
      },
    };
    dispatch(callChangePassword(userPayload));
  };

  const onSaveChanges = () => {
    let payload;
    var formDataPayload = new FormData();

    if (authData.roleName === 'NGO') {
      formDataPayload.append('firstName', firstName);
      formDataPayload.append('lastName', lastName);
      formDataPayload.append('phoneNumberVerified', true);
      formDataPayload.append('profilePic', profilePhoto);
      formDataPayload.append('emailVerified', true);
      // formDataPayload.append('organizationName', orgName);
      // formDataPayload.append('uid', uid);
      // formDataPayload.append('establishedYear', establishedYear);
      // formDataPayload.append('certificateVerified', true);
      // formDataPayload.append('about', about);
      // formDataPayload.append('additionalDetails', additionalDetails);
      payload = {
        id: authData?.userId,
        jwt: authData?.jwt,
        data: formDataPayload,
      };
    } else {
      formDataPayload.append('firstName', firstName);
      formDataPayload.append('lastName', lastName);
      formDataPayload.append('phoneNumberVerified', true);
      formDataPayload.append('emailVerified', true);
      formDataPayload.append('profilePic', profilePhoto);
      payload = {
        id: authData?.userId,
        jwt: authData?.jwt,
        data: formDataPayload,
      };
    }
    dispatch(callUpdateProfile(payload));
  };

  const onCancelSaveChanges = () => {
    setEditProfileModal(false);
  };

  const onDeleteAccount = () => {
    const payload = {
      userId: authData?.userId,
      jwt: authData?.jwt,
    };
    dispatch(callDeleteProfile(payload));
    setModalVisible(false);
  };

  useEffect(() => {
    if (profileSuccess !== undefined && profileSuccess?.id) {
      setFirstName(profileSuccess?.firstName);
      if (profileSuccess?.error !== undefined || profileError) {
        // Alert.alert('Error! Try again.');
      }
    }
  }, [profileSuccess, profileError]);

  useEffect(() => {
    if (updateProfileSuccess !== undefined) {
      if (firstTime) {
        Alert.alert('Details updated successfully!');
      }
      setFirstTime(true);
      const payload = {
        userId: authData?.userId,
        jwt: authData?.jwt,
      };
      dispatch(callGetProfile(payload));
      dispatch(clearUpdateProfile());
    } else {
      if (updateProfileSuccess?.error !== undefined || updateProfileError) {
        // Alert.alert('Error! Try again.');
      }
    }
  }, [updateProfileSuccess, updateProfileError]);

  useEffect(() => {
    if (deleteProfileSuccess !== undefined && deleteProfileSuccess?.message) {
      Alert.alert('Account delete successfully!');
      resetAuthData();
      navigation.navigate('Login');
      dispatch(callClearDeleteProfile());
    }
    if (
      (deleteProfileSuccess !== undefined && deleteProfileSuccess?.error) ||
      deleteProfileError
    ) {
      // Alert.alert('Error! Please try again');
    }
  }, [deleteProfileSuccess, deleteProfileError]);

  useEffect(() => {
    if (changePasswordSuccess !== undefined && changePasswordSuccess?.message) {
      Alert.alert(changePasswordSuccess?.message);
      if (changePasswordSuccess?.message !== 'Password is incorrect') {
        handlePasswordChangeClose();
      }
    }
    if (
      (changePasswordSuccess !== undefined && changePasswordSuccess?.error) ||
      changePasswordError
    ) {
      // Alert.alert(
      //   changePasswordSuccess?.error
      //     ? changePasswordSuccess?.error
      //     : 'Error! Please try again',
      // );
    }
    dispatch(clearChangePassword());
  }, [changePasswordSuccess, changePasswordError]);

  const handleEditProfilePhoto = () => {
    launchImageLibrary(
      {mediaType: 'photo'},
      (response: ImagePickerResponse) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorMessage) {
          console.error('Image picker error:', response.errorMessage);
        } else {
          if (response.assets && response.assets.length > 0) {
            const selectedImageUri = response.assets[0].uri;
            setProfilePhoto({uri: selectedImageUri});
          }
        }
      },
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 15,
          alignItems: 'center',
          marginLeft: -35,
        }}>
        <BackIcon onPress={handlebackpress} />

        <View style={{flexDirection: 'column'}}>
          <Text style={styles.text1}>My Account</Text>
          <Text style={styles.text2}>
            Here, you can change your account details
          </Text>
        </View>
      </View>

      <View style={{alignItems: 'center', marginTop: 60}}>
        <View style={styles.card}>
          <View
            style={{
              alignItems: 'flex-end',
              backgroundColor: '#F1C40F',
              alignSelf: 'flex-end',
              bottom: 24,
              borderTopRightRadius: 14,
              borderBottomLeftRadius: 10,
              width: 30,
              height: 32,
              borderLeftWidth: 3,
              borderBottomWidth: 3,
              borderColor: '#D4AD0B',
            }}>
            <Animated.View style={[styles.button, cardButtonStyle]}>
              <TouchableOpacity
                onPressIn={handlePressButtonIn}
                onPressOut={handlePressButtonOut}
                activeOpacity={1}>
                <EditIcon name="edit" size={20} color={'#1B2E72'} />
              </TouchableOpacity>
            </Animated.View>
          </View>

          <Animated.View style={[cardProfileStyle]}>
            <TouchableOpacity
              onPressIn={handlePressProfileIn}
              onPressOut={handlePressProfileOut}
              onLongPress={handleLongPressProfileIn}
              activeOpacity={1}>
              <View style={styles.cardImg}>
                <Image source={profilePhoto} style={styles.profilePhoto} />
                {/* <TouchableOpacity
                  style={styles.cameraIcon}
                  onPress={handleEditProfilePhoto}>
                  <EditIcon name="camera-alt" size={22} color={'#1B2E72'} />
                </TouchableOpacity> */}
              </View>
            </TouchableOpacity>
          </Animated.View>

          <Text style={styles.textTitle}>Profile Name</Text>
          <View style={styles.cardFooter}></View>
          <Text style={styles.textBody}>Mobile Number</Text>
          <Text style={styles.textBody}>Email</Text>
        </View>
        <CustomButton
          title={'Change Password'}
          onPress={() => {
            setChangePasswordModal(true);
          }}
        />
        <TouchableOpacity
          style={styles.edit}
          onPress={() => {
            setEditProfileModal(true);
          }}></TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setModalHeading('Delete!');
            setModalText('Are you sure want to Delete your Account?');
            setModalVisible(true);
          }}>
          <Text style={styles.delete}> Delete Account</Text>
        </TouchableOpacity>
      </View>

      <Custom_Modal
        visible={modalVisible}
        showLeftButton
        showRightButton
        leftButtonText={'Yes'}
        rightButtonText={'No'}
        modalHeading={modalHeading}
        modalText={modalText}
        onRightButton={handleDeleteModalClose}
        onLeftButton={() => {
          setPasswordDeleteModal(true);
          handleDeleteModalClose();
        }}
        IconName="triangle-exclamation"
        showIcon
      />
      <Modal
        visible={passwordDeleteModal}
        animationType="fade"
        transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView2}>
            <Text style={styles.modalHeading}>Password</Text>
            <View style={styles.rowIcon}>
              <Textinput
                placeholderText="Enter Password"
                onChangeText={setPassword}
                value={password}
                secureTextEntry={!passwordVisible}
              />
              <EyeIcon
                name={passwordVisible ? 'eye' : 'eye-off'}
                size={22}
                style={styles.eyeIcon}
                color={'#6C6A6A'}
                onPress={showPassword}
              />
            </View>

            <CustomButton title={'Delete'} onPress={onDeleteAccount} />
            <TouchableOpacity
              onPress={() => {
                setPasswordDeleteModal(false);
                setPassword('')
              }}>
              <Text style={styles.text4}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        visible={changePasswordModal}
        animationType="fade"
        transparent={true}
        onRequestClose={handlePasswordChangeClose}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalHeading}>Change Password</Text>
            <View style={styles.rowIcon}>
              <Textinput
                placeholderText="Enter Old Password"
                onChangeText={setOldPassword}
                value={oldPassword}
                secureTextEntry={!oldPasswordVisible}
              />
              <EyeIcon
                name={oldPasswordVisible ? 'eye' : 'eye-off'}
                size={22}
                style={styles.eyeIcon}
                color={'#6C6A6A'}
                onPress={showOldPassword}
              />
            </View>
            <View style={styles.rowIcon}>
              <Textinput
                placeholderText="Enter New Password"
                onChangeText={setNewPassword}
                value={newPassword}
                secureTextEntry={!newPasswordVisible}
              />
              <EyeIcon
                name={newPasswordVisible ? 'eye' : 'eye-off'}
                size={22}
                style={styles.eyeIcon}
                color={'#6C6A6A'}
                onPress={showNewPassword}
              />
            </View>
            <View style={styles.rowIcon}>
              <Textinput
                placeholderText="Confirm New Password"
                onChangeText={setConfirmPassword}
                value={confirmPassword}
                secureTextEntry={!confirmPasswordVisible}
              />
              <EyeIcon
                name={confirmPasswordVisible ? 'eye' : 'eye-off'}
                size={22}
                style={styles.eyeIcon}
                color={'#6C6A6A'}
                onPress={showConfirmPassword}
              />
            </View>
            <CustomButton title={'Save'} onPress={onPasswordChange} />
            <TouchableOpacity
              onPress={() => {
                setChangePasswordModal(false);
              }}>
              <Text style={styles.text4}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        visible={editProfileModal}
        animationType="fade"
        transparent={true}
        onRequestClose={handleEditProfileModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalHeading}>Edit Profile Details</Text>
            <Textinput
              placeholderText="First Name"
              onChangeText={setFirstName}
              value={firstName}
            />
            <Textinput
              placeholderText="Last Name"
              onChangeText={setLastName}
              value={lastName}
            />
            <Textinput
              placeholderText="Mobile Number"
              onChangeText={setEditMobile}
              value={editMobile}
            />
            <CustomButton title={'Save Changes'} onPress={onSaveChanges} />
            <TouchableOpacity onPress={onCancelSaveChanges}>
              <Text style={styles.text4}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default MyAccount;
