import initialState from './initialState';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHOW_DETAILS" :
            return {...state,current_account_details:action.account,current_index:action.index};
        case "DELETE_ACCOUNT" :
            var new_own_credentials = state.own_credentials;
            new_own_credentials.splice(action.index,1);
            if(new_own_credentials.length>0){
                return {...state,current_account_details:new_own_credentials[0],current_index:0,own_credentials:new_own_credentials};
            } else {
                return {...state,current_account_details:{},current_index:undefined,own_credentials:new_own_credentials};
            }
        default :
            return state;
    }
};

export default reducer;