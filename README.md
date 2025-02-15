# learnable_design_pattern
A task that shows my understanding of some common design patterns being used today(e.g observer pattern), using JavaScript

## Author:

**Joseph Uche**

## Description:
This code implements a simple version of the Observer Design Pattern, using a Telephone class that can hold a list of phone numbers and notify registered observers when a specific phone number is dialed. The observers are informed when an event (e.g a phone number is being dialed) occurs. This assignment tests the implementation of the Observer pattern and its interaction with other design patterns.

## Features:
### Telephone Class:

- Allows adding and removing phone numbers.
- Allows dialing a phone number and notifying registered observers.
- Handles adding and removing observers who will be notified when a phone number is dialed.

### Observers Class:

- Represents an observer (such as a person) that gets notified when a phone number is dialed.
- Each observer has a name and a notify method to show a message when informed of an event.

## Classes:
### 1. Telephone
The Telephone class maintains a list of phone numbers and observers. It supports the following functionalities:

*addPhoneNumber(phoneNumber):* Adds a phone number to the list.
*removePhoneNumber(phoneNumber):* Removes a phone number from the list.
*dialPhoneNumber(phoneNumber):* Dials a phone number if it exists in the list and notifies all observers.
*addObserver(observer):* Adds an observer to the list of observers.
*removeObserver(observer):* Removes an observer from the list.
*notifyObservers(message):* Notifies all observers with a message.

### 2. Observers
The Observers class represents an observer. It supports:

*notify(phoneNumber):* Called when the observer is notified about a dialed phone number, showing a message that the observer is aware of the phone number being dialed.

## How to Run:
Save the code in a .js file (e.g., telephoneObserver.js).
Run the code in a JavaScript environment, such as a browser console or Node.js.