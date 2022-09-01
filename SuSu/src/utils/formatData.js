const pad = (number) => {
    if (number < 10) return `0${number}`;
    return number;
};
const formatDate = (date) => {
    date = new Date(date);
    const day = pad(date.getDate());
    const month = pad(date.getMonth() + 1);
    const year = date.getFullYear();
    const hour = pad(date.getHours());
    const minute = pad(date.getMinutes());
    const second = pad(date.getSeconds());
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};
export default formatDate;
