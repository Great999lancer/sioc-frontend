import {
    USER_PROFILE_SUCCEEDED,
    USER_SAVE_REQUESTED,
    USER_SAVE_SUCCEEDED,
    USERS_BYROLE_SUCCEEDED,
    USERS_SEARCH_SUCCEEDED,
    CLEAR_USERS
} from '../actions';

export default function user(state = {}, action) {
    switch (action.type) {
        case USER_PROFILE_SUCCEEDED:
            return {...state, userProfile: action.userProfile};
        case USER_SAVE_REQUESTED:
            return {...state, saving: true};
        case USER_SAVE_SUCCEEDED:
            return {...state, saving: false};
        case USERS_BYROLE_SUCCEEDED:
            return {...state, usersByRole: action.usersByRole};
        case USERS_SEARCH_SUCCEEDED:
            if (action.userType === 'martillero') {
                return {...state, auctioneerUsersOptions: action.usersOptions};
            } else if (action.userType === 'capitan') {
                return {...state, captainUsersOptions: action.usersOptions};
            }
            return {...state, usersOptions: action.usersOptions};
        case CLEAR_USERS:
            return {...state, users: null};
        default:
            return state;
    }
}
