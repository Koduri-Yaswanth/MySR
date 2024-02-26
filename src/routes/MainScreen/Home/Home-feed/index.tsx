import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import styles from './styles';

const Homefeed = () => {
  const Imagelist1 = [
    {
      name: 'Org1',
      imagesource: require('../../../../assets/Images/image2.png'),
    },
    {
      name: 'Org2',
      imagesource: require('../../../../assets/Images/image3.png'),
    },
    {
      name: 'Org3',
      imagesource: require('../../../../assets/Images/image4.png'),
    },
    {
      name: 'Org4',
      imagesource: require('../../../../assets/Images/image5.png'),
    },
    {
      name: 'Org5',
      imagesource: require('../../../../assets/Images/image6.png'),
    },
    {
      name: 'Org6',
      imagesource: require('../../../../assets/Images/image7.png'),
    },
    {
      name: 'Org7',
      imagesource: require('../../../../assets/Images/image8.png'),
    },
    {
      name: 'Org8',
      imagesource: require('../../../../assets/Images/image9.png'),
    },
  ];

  const Imagelist2 = [
    {
      heading: 'Earthquake in React Native ',
      body: 'jashgf ashdfb fuurhkb sfjgvf lsjdfgb sruhr',
      imagesource: require('../../../../assets/Images/image101.png'),
    },
    {
      heading: 'Virat Kohli destroys the Opposition ',
      body: '82* (53)',
      imagesource: require('../../../../assets/Images/image102.jpeg'),
    },
    {
      heading: 'Narendra Modi said something!!',
      body: 'fdjhvb  sdfjhiuhv vfbj dhbv n n v isohd',
      imagesource: require('../../../../assets/Images/image103.jpeg'),
    },
  ];

  const Imagelist3 = [
    {
      heading: 'Title of the blog dsjkjk sds kjdbsa jsad hjdsba ',
      description:
        'Title of the blog dsjkjk sds sdd kjdbsa jsad hjdsba Title of the blog dsjkjk sds kjdbsa jsad hjdsba...                         ',
      imagesource: require('../../../../assets/Images/image2.png'),
    },
    {
      heading: 'Title of the blog dsjkjk sds kjdbsa jsad hjdsba ',
      description:
        'Title of the blog dsjkjk sds sdd kjdbsa jsad hjdsba Title of the blog dsjkjk sds kjdbsa jsad hjdsba...                         ',
      imagesource: require('../../../../assets/Images/image3.png'),
    },
    {
      heading: 'Title of the blog dsjkjk sds kjdbsa jsad hjdsba ',
      description:
        'Title of the blog dsjkjk sds sdd kjdbsa jsad hjdsba Title of the blog dsjkjk sds kjdbsa jsad hjdsba...                         ',
      imagesource: require('../../../../assets/Images/image4.png'),
    },
    {
      heading: 'Title of the blog dsjkjk sds kjdbsa jsad hjdsba ',
      description:
        'aTitle of the blog dsjkjk sds sdd kjdbsa jsad hjdsba Title of the blog dsjkjk sds kjdbsa jsad hjdsba...                         ',
      imagesource: require('../../../../assets/Images/image5.png'),
    },
    {
      heading: 'Title of the blog dsjkjk sds kjdbsa jsad hjdsba ',
      description:
        'Title of the blog dsjkjk sds sdd kjdbsa jsad hjdsba Title of the blog dsjkjk sds kjdbsa jsad hjdsba...                         ',
      imagesource: require('../../../../assets/Images/image6.png'),
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const ImageView1 = ({item}: any) => {
    return (
      <View style={{justifyContent: 'center'}}>
        <Image source={item.imagesource} style={styles.image1} />
        <Text style={styles.text1}>{item.name}</Text>
      </View>
    );
  };

  const ImageView2 = ({item}: any) => {
    return (
      <View>
        <ImageBackground source={item.imagesource} style={styles.image2}>
          <View>
            <Text style={styles.text5} numberOfLines={3}>
              {item.heading}
            </Text>
            <Text style={styles.text6}>{item.body}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  };

  const ImageView3 = ({item, index}: any) => {
    return (
      <View style={[styles.view3, {backgroundColor: '#F9E7A2'}]}>
        <Image source={item.imagesource} style={styles.image3} />
        <Text style={styles.text3}>{item.heading}</Text>
        <Text style={styles.text4}>{item.description}</Text>
      </View>
    );
  };

  const PaginationDots = () => {
    return (
      <View style={styles.paginationDots}>
        {Imagelist2.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor: index === activeIndex ? '#294BC8' : '#1B2E72',
                width: index === activeIndex ? 20 : 7,
              },
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', backgroundColor: '#fff'}}>
      <ScrollView style={{marginLeft: 15}}>
        <View style={styles.container2}>
          <Text style={styles.text2}>Nearby organization’s</Text>

          <FlatList
            data={Imagelist1}
            renderItem={ImageView1}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <Text style={styles.text2}>Banner’s of news</Text>

        <View style={{flex: 1}}>
          <FlatList
            data={Imagelist2}
            renderItem={({item, index}) => {
              return (
                <View>
                  <ImageView2 item={item} index={index} />
                </View>
              );
            }}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={event => {
              const newIndex = Math.floor(
                event.nativeEvent.contentOffset.x /
                  event.nativeEvent.layoutMeasurement.width,
              );
              setActiveIndex(newIndex);
            }}
          />
          <PaginationDots />
        </View>

        <Text style={styles.text2}>Blog’s posted by NGO’s</Text>

        <View style={styles.container2}>
          <FlatList
            data={Imagelist3}
            renderItem={ImageView3}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homefeed;
