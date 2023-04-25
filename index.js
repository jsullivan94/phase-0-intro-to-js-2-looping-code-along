function writeCards(names, eventname) {
    const array = [];
    for (let i = 0; i < names.length; i++) {
        array.push(`Thank you, ${names[i]}, for the wonderful ${eventname} gift!`);
       }

       return array    


    };
    
function countDown() {
    let countDown = 10;
    while (countDown >=0) {
        console.log(countDown--)
    }

}






