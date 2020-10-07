module.exports = (time) => {
    let timeArray = time.split(':');

    let hours = timeArray[0];
    let minutes = timeArray[1];

    // Check whether AM or PM
    var newformat = hours >= 12 ? 'PM' : 'AM';

    // Find current hour in AM-PM Format
    hours = hours % 12;

    // To display "0" as "12"
    hours = hours ? hours : 12;
    // minutes = minutes < 10 ? '0' + minutes : minutes;

    return `${hours}:${minutes} ${newformat}`;
};
