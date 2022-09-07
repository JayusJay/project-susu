import React, { useState, useContext, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Share from 'react-native-share';
import Snackbar from 'react-native-snackbar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import TextTicker from 'react-native-text-ticker';
import { AppStoreContext } from '../services/AppStoreContext';
import GroupDetailStyle from '../styles/groupDetailStyle';

const GroupDetailScreen = ({ route, navigation }) => {
    const [showBanner, setShowBanner] = useState(false);
    const [paymentData, setPaymentData] = useState({ amountOwed: 0, phoneNumber: '' });
    const { appStore } = useContext(AppStoreContext);
    const { imageUri, name, members, seedMoneyPerMember, frequency, groupLink, startDate } = route.params;
    const totalSeedMoney = members.map((member) => member.seedMoney).reduce((a, b) => a + b);
    useEffect(() => {
        for (let member of members) {
            if (member.uid === appStore.userData.uid) {
                if (member.seedMoney < seedMoneyPerMember) {
                    setShowBanner(true);
                }
                setPaymentData({ amountOwed: seedMoneyPerMember - member.seedMoney, phoneNumber: member.phoneNumber });
                break;
            }
        }
    }, []);
    const options = {
        title: 'Share via ',
        url: groupLink,
        message: `${appStore.userData.firstName} is inviting you to invest with them on SaveApp. Join them now!`,
    };
    const onShare = () => {
        Share.open(options)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <SafeAreaView style={GroupDetailStyle.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={GroupDetailStyle.container.navigationTouchablesView}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="close-outline" size={30} color="#000" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            onShare();
                        }}
                    >
                        <Ionicons
                            name="share-social-outline"
                            color="#000"
                            size={25}
                            style={GroupDetailStyle.container.navigationTouchablesView.shareTouchable}
                        />
                    </TouchableOpacity>
                </View>
                {showBanner ? (
                    <TextTicker
                        style={{ color: 'red', fontSize: 16 }}
                        duration={10000}
                        //loop
                        bounce
                        scroll
                        repeatSpacer={50}
                        marqueeDelay={1000}
                    >
                        You are required to deposit {['GH', '\u20B5', seedMoneyPerMember]} to the group's vault as your
                        seed money by the close of {startDate} to join this group.
                    </TextTicker>
                ) : null}
                <View style={GroupDetailStyle.imageView}>
                    <Image source={{ uri: imageUri }} style={GroupDetailStyle.image} />
                </View>
                <Text style={GroupDetailStyle.subHeaderText}>{name}</Text>
                <View style={GroupDetailStyle.detailsComponentView}>
                    <Text style={GroupDetailStyle.detailsComponentView.descriptionText}>Name</Text>
                    <TouchableOpacity style={GroupDetailStyle.detailsComponentView.touchableOpacity} onPress={() => {}}>
                        <Text style={GroupDetailStyle.detailsComponentView.touchableOpacity.contentText}>{name}</Text>
                        <EvilIcons
                            name="chevron-right"
                            size={30}
                            color="#8A8A8A"
                            style={GroupDetailStyle.detailsComponentView.touchableOpacity.evilIcon}
                        />
                    </TouchableOpacity>
                </View>

                <View style={GroupDetailStyle.detailsComponentView}>
                    <Text style={GroupDetailStyle.detailsComponentView.descriptionText}>Size</Text>
                    <Text style={GroupDetailStyle.detailsComponentView.countText}>{members.length}</Text>
                </View>
                <View style={GroupDetailStyle.detailsComponentView}>
                    <Text style={GroupDetailStyle.detailsComponentView.descriptionText}>Total seed amount</Text>
                    <Text style={GroupDetailStyle.detailsComponentView.countText}>
                        {['GH', '\u20B5 ', totalSeedMoney]}
                    </Text>
                </View>
                <View style={GroupDetailStyle.detailsComponentView}>
                    <Text style={GroupDetailStyle.detailsComponentView.descriptionText}>Payment frequency</Text>
                    <Text style={GroupDetailStyle.detailsComponentView.countText}>{frequency} days</Text>
                </View>
                <View style={GroupDetailStyle.detailsComponentView}>
                    <Text style={GroupDetailStyle.detailsComponentView.descriptionText}>Next beneficiary</Text>
                    <Text style={GroupDetailStyle.detailsComponentView.countText}>
                        {/* {members[Math.floor(Math.random() * (members.length - 0 + 1)) + 0].name} */}
                        Jayus
                    </Text>
                </View>
                <View style={GroupDetailStyle.detailsComponentView}>
                    <Text style={GroupDetailStyle.detailsComponentView.descriptionText}>Next payment in</Text>
                    <Text style={GroupDetailStyle.detailsComponentView.countText}>{frequency} days</Text>
                </View>
                <Text style={GroupDetailStyle.subHeaderText}>Members</Text>
                {members.length > 0 ? (
                    members.map((member, index) => (
                        <View style={GroupDetailStyle.detailsComponentView} key={index}>
                            <View style={GroupDetailStyle.detailsComponentView.innerView}>
                                {member.imageUri === '' ? (
                                    <Image
                                        source={require('../assets/images/profile.jpg')}
                                        style={GroupDetailStyle.detailsComponentView.innerView.image}
                                    />
                                ) : (
                                    <Image
                                        source={{ uri: member.image }}
                                        style={GroupDetailStyle.detailsComponentView.innerView.image}
                                    />
                                )}
                                <Text style={GroupDetailStyle.detailsComponentView.descriptionText}>{member.name}</Text>
                            </View>
                            <TouchableOpacity
                                style={GroupDetailStyle.detailsComponentView.touchableOpacity}
                                onPress={() => {
                                    Snackbar.show({
                                        text: `Name: ${member.name} \n\nSeed Money: \u20B5 ${member.seedMoney} \n\nRequired Seed Money: \u20B5 ${seedMoneyPerMember}`,
                                        duration: Snackbar.LENGTH_INDEFINITE,
                                        numberOfLines: 10,
                                        action: {
                                            text: 'OK',
                                            onPress: () => {
                                                Snackbar.dismiss();
                                            },
                                        },
                                        backgroundColor: '#7966FF',
                                    });
                                }}
                            >
                                <Text style={GroupDetailStyle.detailsComponentView.touchableOpacity.contentText}>
                                    Details
                                </Text>
                                <EvilIcons
                                    name="chevron-right"
                                    size={30}
                                    color="#8A8A8A"
                                    style={GroupDetailStyle.detailsComponentView.touchableOpacity.evilIcon}
                                />
                            </TouchableOpacity>
                        </View>
                    ))
                ) : (
                    <Text style={{ color: '#000' }}>There are no group members</Text>
                )}
                {/*Just for testing purposes, members array will always contain at least the group creator*/}
                <Text style={GroupDetailStyle.subHeaderText}>Utilities</Text>
                <View style={GroupDetailStyle.detailsComponentView}>
                    <Text style={GroupDetailStyle.detailsComponentView.descriptionText}>Add Funds</Text>
                    <TouchableOpacity
                        style={[GroupDetailStyle.detailsComponentView.touchableOpacity, { paddingLeft: 20 }]}
                        onPress={() => {
                            paymentData.amountOwed > 0
                                ? navigation.navigate('Payment', paymentData)
                                : Snackbar.show({
                                      text: 'You have no outstanding balance',
                                      duration: Snackbar.LENGTH_SHORT,
                                      backgroundColor: '#7966FF',
                                  });
                        }}
                    >
                        <EvilIcons
                            name="chevron-right"
                            size={30}
                            color="#8A8A8A"
                            style={GroupDetailStyle.detailsComponentView.touchableOpacity.evilIcon}
                        />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default GroupDetailScreen;
