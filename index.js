// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string) {
    const answer = drivers.filter(name => name.toLowerCase() === string.toLowerCase())
    return answer
}

function fuzzyMatch(drivers, string) {
    const answer = drivers.filter(name => name.startsWith(string))
    return answer
}

function matchName(drivers, string) {
    const answer = drivers.filter(driver => driver.name === string)
    return answer
}