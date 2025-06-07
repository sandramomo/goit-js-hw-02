function checkForSpam(message) {
    const word1 = "sale";
    const word2 = "spam";
    const ourMessage = message.toLowerCase();
    const statement = ourMessage.includes(word1) || ourMessage.includes(word2);
    if (statement) {
        return true;
    } else {
        return false;
    }
}
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
