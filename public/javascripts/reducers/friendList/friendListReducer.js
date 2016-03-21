import { REQUEST_FRIENDLIST, RECEIVE_FRIENDLIST} from '../../actions'

let friendListReducer = (state = { }, action) => {
    switch (action.type) {
        case REQUEST_FRIENDLIST:
            return Object.assign({}, state, {
               isFetching: true
            })
        case RECEIVE_FRIENDLIST:
            return Object.assign({}, state, {
                isFetching: false,
                fList: actions.fList
            })
        default:
            return state
    }
}

export default friendListReducer