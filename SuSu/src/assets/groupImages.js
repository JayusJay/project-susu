import numberFormatter from '../utils/numberFormatter';

const goalImages = [
    {
        image: require('../assets/images/house.jpg'),
        name: 'Group 1',
        members: [
            {
                name: 'John',
                id: '1',
                group_id: '#1',
            },
            {
                name: 'Jane',
                id: '2',
                group_id: '#1',
            },
            {
                name: 'Jack',
                id: '3',
                group_id: '#1',
            },
        ],
        seedMoneyPerMember: numberFormatter(3000),
        numberOfMembers: 3,
        amountSaved: numberFormatter(3000000),
        totalAmount: numberFormatter(5000000),
        timeLeft: '8 days',
        value: (3000000 / 5000000) * 100,
    },
    {
        image: require('../assets/images/car.jpg'),
        name: 'Group 2',
        members: [
            {
                name: 'John',
                id: '1',
                group_id: '#2',
            },
            {
                name: 'Jane',
                id: '2',
                group_id: '#2',
            },
            {
                name: 'Jack',
                id: '3',
                group_id: '#2',
            },
        ],
        amountSaved: numberFormatter(2000000),
        totalAmount: numberFormatter(5000000),
        timeLeft: '2 months',
        value: (2000000 / 5000000) * 100,
    },
    {
        image: require('../assets/images/vacation.jpg'),
        name: 'Group 3',
        members: [
            {
                name: 'John',
                id: '1',
                group_id: '#1',
            },
            {
                name: 'Jane',
                id: '2',
                group_id: '#1',
            },
            {
                name: 'Jack',
                id: '3',
                group_id: '#1',
            },
        ],
        seedMoneyPerMember: numberFormatter(3000),
        numberOfMembers: 3,
        amountSaved: numberFormatter(100000),
        totalAmount: numberFormatter(300000),
        timeLeft: '1 year',
        value: (1000000 / 5000000) * 100,
    },
    {
        image: require('../assets/images/PS5.jpg'),
        name: 'Group 4',
        members: [
            {
                name: 'John',
                id: '1',
                group_id: '#1',
            },
            {
                name: 'Jane',
                id: '2',
                group_id: '#1',
            },
            {
                name: 'Jack',
                id: '3',
                group_id: '#1',
            },
            {
                name: 'Jonathan',
                id: '5',
                group_id: '#1',
            },
            {
                name: 'Jenny',
                id: '6',
                group_id: '#1',
            },
            {
                name: 'Yesmin',
                id: '7',
                group_id: '#1',
            },
        ],
        seedMoneyPerMember: numberFormatter(3000),
        numberOfMembers: 3,
        amountSaved: numberFormatter(2500),
        totalAmount: numberFormatter(5000),
        timeLeft: '6 months',
        value: (2500 / 5000) * 100,
    },
];
export default goalImages;
