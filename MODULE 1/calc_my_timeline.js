//Function to calculate hours alive
function calculateHoursAlive(birthdate) {
    const birthDate = new Date(birthdate);
    const currentDate = new Date();
    const timeDifference = currentDate - birthDate;
    const hoursAlive = Math.floor(timeDifference / (1000 * 60 * 60));
    return hoursAlive;
}

// Your birthdate
const birthdate = '2004-02-24';
const hoursAlive = calculateHoursAlive(birthdate);
console.log(`You have been alive for approximately ${hoursAlive} hours.`);

//Add leap year calculation
