import { StyleSheet } from 'react-native';

const customDrawerStyle = StyleSheet.create({
    view1: {
        flex: 1,
    },
    backgroundImage: {
        padding: 20,
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    view2: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10,
    },
    view3: {
        padding: 20,
        borderTopWidth: 1,
        borderColor: '#ccc',
    },
    touchableView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    touchableText: {
        color: '#000',
        marginLeft: 5,
    },
});
export default customDrawerStyle;
