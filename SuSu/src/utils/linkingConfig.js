const config = {
    screens: {
        Drawer: {
            path: 'drawer',
            screens: {
                Home: {
                    path: 'home',
                    screens: {
                        TabHome: {
                            path: 'tab-home',
                        },
                        Savings: {
                            path: 'savings',
                            screens: {
                                GoalDetail: {
                                    path: 'goal-detail:id',
                                },
                            },
                        },
                        GroupInvestment: {
                            path: 'group-investment',
                            screens: {
                                GroupDetail: {
                                    path: 'group-detail:id',
                                },
                                GroupCreation: {
                                    path: 'group-creation',
                                },
                            },
                        },
                        FundRaising: {
                            path: 'crowd-sourcing',
                        },
                    },
                },
                Profile: {
                    path: 'profile',
                },
                Transactions: {
                    path: 'transactions',
                },
                Settings: {
                    path: 'settings',
                },
            },
        },

        GoalDetail: {
            path: 'goal/:id',
            parse: {
                id: (id) => `${id}`,
            },
        },
        GroupDetail: {
            path: 'group/:id',
            parse: {
                id: (id) => `${id}`,
            },
        },
        GroupInvestment: 'group/:id/investment',
        GroupCreation: 'create-group',
        GroupCreationFinal: 'create-group/final',
        GoalCreationNav: 'create-goal',
        JoinGroup: {
            path: 'join-group/:id',
            parse: {
                id: (id) => `${id}`,
            },
        },
        OnBoarding: 'onboarding',
        Login: 'login',
        Register: 'register',
        ResetPassword: 'reset-password',
        PhoneNumber: 'phone-number',
        OTPConfirmation: 'otp-confirmation',
        SetPIN: 'set-pin',
    },
};
export default config;
