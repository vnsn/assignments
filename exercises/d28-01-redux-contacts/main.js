const redux = require("redux");

// create initial state
const initialState = {
    contacts: []
}

// changing the state: called "Reducers" in redux
// spits out a new state base on action and preState
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            return {
                contacts: [...state.contacts, action.contact]
            }
        case "REMOVE_CONTACT":
            return {
                contacts: state.contacts.filter(contact => contact.name !== action.name)
            }
        case "RESET":
            return initialState;
        default:
            return state;
    }
}

// create a store. store is combo of state and reducer
const store = redux.createStore(reducer);
store.subscribe(() => console.log(store.getState()));


// actions are OBJECTS
// they are messengers. they carry info to the decision makers. no authority.
// all actions need type property and 
// it's a string in all caps (by convention), multi-word uses _ not camelCase
// delivers payload, but payload is not required

// dispatch only accepts an action and actions are OBJECTS
function addContact(contact) {
    return store.dispatch(
        {
            type: "ADD_CONTACT", 
            contact
        }
    )
}

const removeContact = name => {
    store.dispatch(
        {
            type: "REMOVE_CONTACT",
            name
        }
    )
}

// hard-coded info to add and remove 
const contact1 =
    {
        name: "Tommy One",
        phone: "925-867-5309",
        email: "thegreenranger@powerrangers.com"
    }

const contact2 =
    {
        name: "Tommy Two",
        phone: "925-867-5309",
        email: "thegreenranger@powerrangers.com"
    }

const contact3 =
    {
        name: "Tommy Three",
        phone: "925-867-5309",
        email: "thegreenranger@powerrangers.com"
    }


addContact(contact1);
addContact(contact2);
addContact(contact3);

removeContact(contact2.name);
removeContact(contact1.name);
removeContact(contact3.name);
