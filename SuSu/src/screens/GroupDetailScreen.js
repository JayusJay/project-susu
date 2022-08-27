import React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Share from 'react-native-share';
import Snackbar from 'react-native-snackbar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import GroupDetailStyle from '../styles/groupDetailStyle';

const GroupDetailScreen = ({ route, navigation }) => {
    const { imageUri, name, members, seedMoneyPerMember, frequency } = route.params;
    const totalSeedMoney = members.map((member) => member.seedMoney).reduce((a, b) => a + b);
    const options = {
        title: 'Share via ',
        url: 'https://www.google.com/',
        message: `${members[0].name} is inviting you to invest with them on SaveApp. Join them now!`,
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
                    <Text style={GroupDetailStyle.detailsComponentView.countText}>{['\u20B5 ', totalSeedMoney]}</Text>
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
                <Text style={GroupDetailStyle.subHeaderText}>Members</Text>
                {members.length > 0 ? (
                    members.map((item, index) => (
                        <View style={GroupDetailStyle.detailsComponentView} key={index}>
                            <View style={GroupDetailStyle.detailsComponentView.innerView}>
                                <Image
                                    source={
                                        item.image == ''
                                            ? {
                                                  uri: 'https://www.shareicon.net/data/512x512/2016/08/01/822711_user_512x512.png',
                                              }
                                            : { uri: item.image }
                                    }
                                    style={GroupDetailStyle.detailsComponentView.innerView.image}
                                />
                                <Text style={GroupDetailStyle.detailsComponentView.descriptionText}>{item.name}</Text>
                            </View>
                            <TouchableOpacity
                                style={GroupDetailStyle.detailsComponentView.touchableOpacity}
                                onPress={() => {
                                    Snackbar.show({
                                        text: `Name: ${item.name} \n\nSeed Money: \u20B5 ${item.seedMoney} \n\nRequired Seed Money: \u20B5 ${seedMoneyPerMember}`,
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
            </ScrollView>
        </SafeAreaView>
    );
};

export default GroupDetailScreen;
