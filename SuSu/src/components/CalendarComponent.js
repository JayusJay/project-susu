import React, { useState, useEffect, useContext, Fragment, useCallback, useMemo } from 'react';
import { Text } from 'react-native';
import { Calendar, CalendarUtils } from 'react-native-calendars';
import { AppStoreContext } from '../services/AppStoreContext';
import formatDate from '../utils/formatDate';
import CalendarStyle from '../styles/calendarComponentStyle';

const CalendarComponent = () => {
    const { appStore, groupCreationStore } = useContext(AppStoreContext);
    let initialDate = appStore.getServerTime().toDate();
    initialDate = formatDate(initialDate).slice(0, 10);
    const [selected, setSelected] = useState(initialDate);
    useEffect(() => {
        groupCreationStore.setStateValue('startDate', initialDate);
    }, []);

    const getDate = (count) => {
        const date = new Date(initialDate);
        const newDate = date.setDate(date.getDate() + count);
        return CalendarUtils.getCalendarDateString(newDate);
    };

    const onDayPress = useCallback((day) => {
        setSelected(day.dateString);
        groupCreationStore.setStateValue('startDate', day.dateString);
    }, []);

    const marked = useMemo(() => {
        return {
            [selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedColor: 'orange',
                selectedTextColor: 'red',
            },
        };
    }, [selected]);

    return (
        <Fragment>
            <Text style={CalendarStyle.text}>Select a date when investment should begin</Text>
            <Calendar
                minDate={getDate(0)}
                maxDate={getDate(6)}
                enableSwipeMonths
                current={initialDate}
                style={CalendarStyle.calendar}
                onDayPress={onDayPress}
                markedDates={marked}
            />
        </Fragment>
    );
};
export default CalendarComponent;
