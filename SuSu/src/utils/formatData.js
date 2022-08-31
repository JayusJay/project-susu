const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    if (month < 10) return `${year}-0${month}-${day} ${hour}:${minute}:${second}`;
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};
export default formatDate;
