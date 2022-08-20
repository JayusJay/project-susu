import { StyleSheet, Platform } from 'react-native';

export const CELL_SIZE = 40;
export const CELL_BORDER_RADIUS = 8;
export const DEFAULT_CELL_BG_COLOR = '#fff';
export const NOT_EMPTY_CELL_BG_COLOR = '#7966FF';
export const ACTIVE_CELL_BG_COLOR = '#ccc';

const ConfirmationCodeFieldComponentStyle = StyleSheet.create({
    codeFieldRoot: {
        height: CELL_SIZE,
        marginTop: 30,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    cell: {
        marginHorizontal: 8,
        height: CELL_SIZE,
        width: CELL_SIZE,
        lineHeight: CELL_SIZE - 5,
        //...Platform.select({ web: { lineHeight: 65 } }),
        fontSize: 30,
        textAlign: 'center',
        borderRadius: CELL_BORDER_RADIUS,
        color: '#7966FF',
        backgroundColor: '#fff',

        // IOS
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        // Android
        elevation: 3,
    },

    // =======================

    root: {
        padding: 20,
    },
    title: {
        paddingTop: 50,
        color: '#000',
        fontSize: 25,
        fontWeight: '700',
        textAlign: 'center',
        paddingBottom: 40,
    },
    icon: {
        width: 217 / 2.4,
        height: 158 / 2.4,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    subTitle: {
        paddingTop: 30,
        color: '#000',
        textAlign: 'center',
    },
    resendText: {
        color: '#7966FF',
        fontSize: 15,
        marginTop: 50,
        marginLeft: -20,
        fontWeight: '450',
    },
    buttonTouchable: {
        marginTop: 100,
        innerView: {
            padding: 20,
            backgroundColor: '#7966FF',
            borderRadius: 20,
            text: {
                color: '#fff',
                alignSelf: 'center',
                fontSize: 20,
                fontWeight: '500',
            },
        },
    },
});

export default ConfirmationCodeFieldComponentStyle;
