const formatName = (firstName, lastName) => {

  return firstName + " " + lastName;
};

const getGreeting = (timeOfDay) => {

  const greetings = {
    morning: "Good morning",
    afternoon: "Good afternoon",
    evening: "Good evening",
  };

  return greetings[timeOfDay] || "Hello";
};

const createGreeting = (firstName, lastName, timeOfDay) => {
    
  return getGreeting(timeOfDay) + ", " + formatName(firstName, lastName) + "!";
};

console.log(createGreeting("Murilo", "Oliveira", "morning"));