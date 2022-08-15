import numberFormatter from '../utils/numberFormatter';

const goalImages = [
    {
        image: require('../assets/images/house.jpg'),
        name: 'House',
        amountSaved: numberFormatter(3000000),
        totalAmount: numberFormatter(5000000),
        timeLeft: '8 days',
        value: (3000000 / 5000000) * 100,
    },
    {
        image: require('../assets/images/car.jpg'),
        name: 'Car',
        amountSaved: numberFormatter(2000000),
        totalAmount: numberFormatter(5000000),
        timeLeft: '2 months',
        value: (2000000 / 5000000) * 100,
    },
    {
        image: require('../assets/images/vacation.jpg'),
        name: 'Vacation',
        amountSaved: numberFormatter(100000),
        totalAmount: numberFormatter(300000),
        timeLeft: '1 year',
        value: (1000000 / 5000000) * 100,
    },
    {
        image: require('../assets/images/PS5.jpg'),
        name: 'PS5',
        amountSaved: numberFormatter(2500),
        totalAmount: numberFormatter(5000),
        timeLeft: '6 months',
        value: (2500 / 5000) * 100,
    },
];
export default goalImages;
