import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
        // By writing it this way below, we are saying make a NEW array (copy) but add in the new data. This method will add the new data at the beginning of the array. The concat method (shown at bottom) will add at the end. Both methods work ok since they create a new array rather than muniplating the current state.
        return [ action.payload.data, ...state ];
    }
    return state;
}

        // concat takes the current state, creates a copy, and adds in our new city data array.
        // If we use something like push, it changes the current state. We do not want to change state but the above method will produce us a brand new state to send back.
        // Also, concat adds to an array at the end.

        // return state.concat([ action.payload.data ]);