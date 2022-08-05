import React, { useState, useEffect, createContext } from 'react';
import Snackbar from 'react-native-snackbar';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import errors from '../utils/errors';
import asyncStorage from './AsyncStorage';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    //This state navigates AuthStack's initial screen to the screen an error has occured on.
    const [screenError, setScreenError] = useState({
        loginError: false,
        resetError: false,
        registerError: false,
    });
    //const [showDialog, setShowDialog] = useState(false);
    const [dialogData, setDialogData] = useState({
        gmail: '',
        password: '',
        credential: null,
        showDialog: false,
    });
    const firebaseAuthenticationError = errors();
    const onAuthStateChanged = (user) => {
        setUser(user);
        setLoading(false);
    };
    GoogleSignin.configure({
        webClientId: '874120969609-frjb44rnlnih5eqnqcpk97buq4e6f7rb.apps.googleusercontent.com',
        scopes: ['email', 'profile'],
    });
    //prevent continous re-rendering
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    /*#########################################################################################################
    #                                       LOGIN VALIDATIONS                                                 #
    #########################################################################################################*/
    const loginValidation = () => {
        const [loginData, setLoginData] = useState({
            email: '',
            password: '',
            isValidEmail: true,
        });
        const [resetEmail, setResetEmail] = useState({
            email: '',
            isValidEmail: true,
        });
        const { loginStore, loginRemove, resetStore, resetRemove } = asyncStorage();

        const handleEmail = (email) => {
            email = email.trim();
            let reg = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email);
            if (reg) {
                setLoginData({ ...loginData, email: email, isValidEmail: true });
            } else {
                setLoginData({ ...loginData, email: email, isValidEmail: false });
            }
        };

        const handleLogin = () => {
            if (loginData.isValidEmail && loginData.email !== '' && loginData.password !== '') {
                setLoading(true);
                //store login data in async storage
                loginStore(loginData);
                //setTimeout(() => {
                login(loginData.email, loginData.password);
                //}, 5000)
            } else {
                setScreenError({ loginError: true, resetError: false, registerError: false });

                Snackbar.show({
                    text: 'Please fill all fields correctly',
                    duration: Snackbar.LENGTH_LONG,
                    textColor: 'white',
                    backgroundColor: 'red',
                });
            }
        };
        const login = (email, password) => {
            password = password.trim();
            auth()
                .signInWithEmailAndPassword(email, password)
                .then(async () => {
                    setScreenError({ registerError: false, loginError: false, resetError: false });
                    //remove login data from AsyncStorage
                    await loginRemove();
                    Snackbar.show({
                        text: 'Login Successful',
                        duration: Snackbar.LENGTH_SHORT,
                        textColor: 'white',
                        backgroundColor: '#7966FF',
                    });
                })
                .catch((error) => {
                    setScreenError({ loginError: true, registerError: false, resetError: false });
                    firebaseAuthenticationError(error);
                })
                .finally(() => {
                    setLoading(false);
                });
        };
        //################################## GOOGLE SIGNIN ##########################################################
        const handleGoogleSignIn = async () => {
            // check user gmail exists?? if true, signin with email&&password credentials and then link accounts.
            try {
                const userInfo = await GoogleSignin.signIn();
                const gmail = userInfo.user.email;
                const credential = auth.GoogleAuthProvider.credential(userInfo.idToken, userInfo.accessToken);
                auth()
                    .fetchSignInMethodsForEmail(gmail)
                    .then(async (providers) => {
                        if (providers[0] == auth.EmailAuthProvider.PROVIDER_ID) {
                            //set dialog visible, ask user for password and continue to handleDialog()
                            setDialogData({ ...dialogData, gmail: gmail, credential: credential, showDialog: true });
                        } else {
                            await auth().signInWithCredential(credential);

                            Snackbar.show({
                                text: 'Login Successful',
                                duration: Snackbar.LENGTH_SHORT,
                                textColor: 'white',
                                backgroundColor: '#7966FF',
                            });
                        }
                    });
            } catch (error) {
                setScreenError({ loginError: true, registerError: false, resetError: false });
                firebaseAuthenticationError(error);
            }
        };

        const handleDialog = () => {
            setLoading(true);
            setDialogData({ ...dialogData, showDialog: false });
            if (dialogData.password !== '') {
                dialogData.password = dialogData.password.trim();
                auth()
                    .signInWithEmailAndPassword(dialogData.gmail, dialogData.password)
                    .then(async (result) => {
                        result.user.linkWithCredential(dialogData.credential);
                        setScreenError({ registerError: false, loginError: false, resetError: false });
                        setDialogData({ gmail: '', password: '', credential: null, showDialog: false });
                        Snackbar.show({
                            text: 'Login and Linking Successful',
                            duration: Snackbar.LENGTH_SHORT,
                            textColor: 'white',
                            backgroundColor: '#7966FF',
                        });
                    })
                    .catch((error) => {
                        setScreenError({ loginError: true, registerError: false, resetError: false });
                        setDialogData({ ...dialogData, showDialog: true });
                        firebaseAuthenticationError(error);
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            }
        };

        //################################## RESET PASSWORD BEGINS #################################################

        const handleResetEmail = (email) => {
            email = email.trim();
            let reg = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email);
            if (reg) {
                setResetEmail({ ...resetEmail, email: email, isValidEmail: true });
            } else {
                setResetEmail({ ...resetEmail, email: email, isValidEmail: false });
            }
        };
        const handleResetPassword = () => {
            if (resetEmail.isValidEmail && resetEmail.email !== '') {
                setLoading(true);
                //store email in AsyncStorage
                resetStore(resetEmail);
                resetPassword(resetEmail.email);
            } else {
                setScreenError({ resetError: true, registerError: false, loginError: false });
                Snackbar.show({
                    text: 'Please enter a valid email',
                    duration: Snackbar.LENGTH_LONG,
                    textColor: 'white',
                    backgroundColor: 'red',
                });
            }
        };
        const resetPassword = (email) => {
            auth()
                .sendPasswordResetEmail(email)
                .then(async () => {
                    //reset error screen
                    setScreenError({ registerError: false, loginError: false, resetError: false });
                    //remove reset email from AsyncStorage
                    await resetRemove();
                    Snackbar.show({
                        text: 'Password reset link has been sent to your email',
                        duration: Snackbar.LENGTH_LONG,
                        textColor: 'white',
                        backgroundColor: '#7966FF',
                    });
                })
                .catch((error) => {
                    setScreenError({ resetError: true, registerError: false, loginError: false });
                    firebaseAuthenticationError(error);
                })
                .finally(() => {
                    setLoading(false);
                });
        };

        //################################## RESET PASSWORD ENDS #################################################

        const handleLogOut = async () => {
            setLoading(true);
            if (await GoogleSignin.isSignedIn()) {
                GoogleSignin.signOut()
                    .then(() => {
                        auth().signOut();
                        Snackbar.show({
                            text: 'Gmail user signed out',
                            duration: Snackbar.LENGTH_SHORT,
                            textColor: 'white',
                            backgroundColor: '#7966FF',
                        });
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            } else {
                auth()
                    .signOut()
                    .then(() =>
                        Snackbar.show({
                            text: 'User signed out',
                            duration: Snackbar.LENGTH_SHORT,
                            textColor: 'white',
                            backgroundColor: '#7966FF',
                        })
                    )
                    .finally(() => {
                        setLoading(false);
                    });
            }
        };
        return {
            handleEmail,
            handleLogin,
            handleLogOut,
            handleGoogleSignIn,
            handleResetEmail,
            handleResetPassword,
            handleDialog,
            loginData,
            setLoginData,
            resetEmail,
            setResetEmail,
        };
    };

    /*#########################################################################################################
    #                                       REGISTRATION VALIDATIONS                                          #
    #########################################################################################################*/

    const registrationValidation = () => {
        const [registerData, setRegisterData] = useState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            phoneNumber: '',
            dateOfBirth: new Date(),
            isValidFirstName: true,
            isValidLastName: true,
            isValidEmail: true,
            isValidPassword: true,
            isValidConfirmPassword: true,
            isValidPhoneNumber: true,
            isValidDateOfBirth: true,
        });

        const { registrationStore, registrationRemove } = asyncStorage();

        const handleFirstName = (name) => {
            let reg = new RegExp(/^[a-zA-Z ]{3,16}$/).test(name);
            if (reg) {
                setRegisterData({ ...registerData, firstName: name, isValidFirstName: true });
            } else {
                setRegisterData({ ...registerData, firstName: name, isValidFirstName: false });
            }
        };

        const handleLastName = (name) => {
            let reg = new RegExp(/^[a-zA-Z ]{3,16}$/).test(name);
            if (reg) {
                setRegisterData({ ...registerData, lastName: name, isValidLastName: true });
            } else {
                setRegisterData({ ...registerData, lastName: name, isValidLastName: false });
            }
        };

        const handleEmail = (email) => {
            email = email.trim();
            let reg = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email);
            if (reg) {
                setRegisterData({ ...registerData, email: email, isValidEmail: true });
            } else {
                setRegisterData({ ...registerData, email: email, isValidEmail: false });
            }
        };

        const handlePassword = (password) => {
            let reg = new RegExp(/^(?=.*[a-z ])(?=.*[A-Z ])(?=.*\d)(?=.*[@$!%*?&,.])[A-Za-z \d@$!%*?&,.]{8,}$/).test(
                password
            );
            if (reg) {
                setRegisterData({ ...registerData, password: password, isValidPassword: true });
            } else {
                setRegisterData({ ...registerData, password: password, isValidPassword: false });
            }
        };

        const handleConfirmPassword = (password) => {
            if (password === registerData.password) {
                setRegisterData({ ...registerData, confirmPassword: password, isValidConfirmPassword: true });
            } else {
                setRegisterData({ ...registerData, confirmPassword: password, isValidConfirmPassword: false });
            }
        };

        const handlePhoneNumber = (phoneNumber) => {
            phoneNumber = phoneNumber.trim();
            let reg = new RegExp(/^[0-9]{10}$/).test(phoneNumber);
            if (reg) {
                setRegisterData({ ...registerData, phoneNumber: phoneNumber, isValidPhoneNumber: true });
            } else {
                setRegisterData({ ...registerData, phoneNumber: phoneNumber, isValidPhoneNumber: false });
            }
        };

        const handleDateOfBirth = (dateOfBirth) => {
            setRegisterData({ ...registerData, dateOfBirth: dateOfBirth, isValidDateOfBirth: true });
        };

        const handleSubmit = () => {
            if (
                registerData.isValidFirstName &&
                registerData.isValidLastName &&
                registerData.isValidEmail &&
                registerData.isValidPassword &&
                registerData.isValidConfirmPassword &&
                registerData.isValidPhoneNumber &&
                registerData.isValidDateOfBirth &&
                registerData.firstName !== '' &&
                registerData.lastName !== '' &&
                registerData.email !== '' &&
                registerData.password !== '' &&
                registerData.confirmPassword !== '' &&
                registerData.phoneNumber !== '' &&
                registerData.dateOfBirth.getFullYear() !== new Date().getFullYear()
            ) {
                setLoading(true);
                //store registration data in AsyncStorage
                registrationStore(registerData);
                // setTimeout(() => {
                register(
                    registerData.firstName,
                    registerData.lastName,
                    registerData.email,
                    registerData.password,
                    registerData.phoneNumber,
                    registerData.dateOfBirth
                );
                //}, 5000)
            } else {
                setScreenError({ registerError: true, loginError: false, resetError: false });
                Snackbar.show({
                    text: 'Please fill all fields correctly',
                    duration: Snackbar.LENGTH_LONG,
                    textColor: 'white',
                    backgroundColor: 'red',
                });
            }
        };
        //register user to firebase
        const register = (firstName, lastName, email, password, phoneNumber, dob) => {
            firstName = firstName.trim();
            lastName = lastName.trim();
            password = password.trim();
            auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                    firestore()
                        .collection('users')
                        .doc(auth().currentUser.uid)
                        .set({
                            uid: auth().currentUser.uid,
                            firstName: firstName,
                            lastName: lastName,
                            email: email,
                            phoneNumber: phoneNumber,
                            dob: dob,
                        })
                        .then(async () => {
                            //reset error state
                            setScreenError({ registerError: false, loginError: false, resetError: false });
                            //remove registration data from AsyncStorage
                            await registrationRemove();
                            Snackbar.show({
                                text: 'Registration Successful',
                                duration: Snackbar.LENGTH_SHORT,
                                textColor: 'white',
                                backgroundColor: '#7966FF',
                            });
                        })
                        .catch((error) => {
                            Snackbar.show({
                                text: error.message,
                                duration: Snackbar.LENGTH_SHORT,
                                textColor: 'white',
                                backgroundColor: 'red',
                            });
                        });
                })
                .catch((error) => {
                    setScreenError({ registerError: true, loginError: false, resetError: false });
                    firebaseAuthenticationError(error);
                })
                .finally(() => {
                    setLoading(false);
                });
        };

        return {
            handleFirstName,
            handleLastName,
            handleEmail,
            handlePassword,
            handleConfirmPassword,
            handlePhoneNumber,
            handleDateOfBirth,
            handleSubmit,
            registerData,
            setRegisterData,
        };
    };

    return (
        <AuthContext.Provider
            value={{ loginValidation, registrationValidation, loading, user, screenError, dialogData, setDialogData }}
        >
            {children}
        </AuthContext.Provider>
    );
};
export { AuthContext, AuthProvider };
