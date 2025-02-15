/**
 * Author: Joseph Uche
 * Description: An assignment to test my knowledge on various design patters
 */

// The Telephone class maintains the list of observers and telephoneNumbers
class Telephone {
    constructor(){
        this.telephoneNumbers = new Set()
        this.observers = []
    }

    // adds a phone number to the list
    addPhoneNumber(phoneNumber){
        this.telephoneNumbers.add(phoneNumber)
        console.log(`${phoneNumber} has been added!!!`)
    }
    
    // removes a phone number from the list
    removePhoneNumber(phoneNumber){
        this.telephoneNumbers.delete(phoneNumber)
        console.log(`${phoneNumber} has been removed!!!`)
        
    }

    // dials a phone number already added to the list and notifies the observers in the list
    dialPhoneNumber(phoneNumber){
        const findPhoneNumber = this.telephoneNumbers.has(phoneNumber)
        if (findPhoneNumber){
            this.notifyObservers(phoneNumber)

        } else {
            console.log("Phone Number Not added in the list!!!")
        }
    }

    // adds an observer to the list of observer
    addObserver(observer){
        this.observers.push(observer)
        console.log(`${observer.name} has been added`)
    }

    // removes an observer from the list of observer
    removeObserver(observer){
        this.observers = this.observers.filter(obs => obs.name !== observer.name)
    }

    // loops through the list of observers and notifies them of any changes.
    notifyObservers(Message){
        this.observers.forEach(observer => {
            observer.notify(Message)
        })
       
    }
}

// The observer class to notify the list of observers
class Observers {
    constructor(name){
        this.name = name
    }
    notify(phoneNumber){
        console.log(`Dear ${this.name}, we are Now dailing ${phoneNumber}`)
    }
}

// Tests 
const telephone = new Telephone();
const joseph = new Observers("Joseph")
const ejike = new Observers("Ejike")
const uche = new Observers("Uche")
telephone.addObserver(joseph)
telephone.addObserver(ejike)
telephone.addObserver(uche)
console.log(telephone.observers)
telephone.notifyObservers(12344566)
telephone.removeObserver(joseph)
console.log(telephone.observers)
telephone.notifyObservers(12344566)
telephone.addPhoneNumber(1234345)
telephone.dialPhoneNumber(1234345)