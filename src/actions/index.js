export function showDetails(account,index) {
    return {
        type : "SHOW_DETAILS",
        account,
        index
    }
}

export function deleteAccount(index) {
    return {
        type : "DELETE_ACCOUNT",
        index
    }
}

