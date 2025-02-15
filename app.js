/**
 * Author: Joseph Uche
 * Description: An assignment to test my knowledge on various design patters
 */

class Telephone {
    constructor(){
        this.telephoneNumbers = new Set()
        this.observers = []
    }

    addPhoneNumber(phoneNumber){
        this.telephoneNumbers.add(phoneNumber)
        console.log(`${phoneNumber} has been added!!!`)
    }
    
    removePhoneNumber(phoneNumber){
        this.telephoneNumbers.delete(phoneNumber)
        console.log(`${phoneNumber} has been removed!!!`)
        
    }

    dialPhoneNumber(phoneNumber){
        const findPhoneNumber = this.telephoneNumbers.has(phoneNumber)
        if (findPhoneNumber){
            this.notifyObservers(phoneNumber)

        } else {
            console.log("Phone Number Not added in the list!!!")
        }
    }

    addObserver(observer){
        this.observers.push(observer)
        console.log(`${observer.name} has been added`)
    }

    removeObserver(observer){
        this.observers = this.observers.filter(obs => obs.name !== observer.name)
    }

    notifyObservers(Message){
        this.observers.forEach(observer => {
            observer.notify(Message)
        })
       
    }
}

class Observers {
    constructor(name){
        this.name = name
    }
    notify(phoneNumber){
        console.log(`Dear ${this.name}, we are Now dailing ${phoneNumber}`)
    }
}

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