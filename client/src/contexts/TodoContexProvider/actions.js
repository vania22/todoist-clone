export const ACTION_TYPES = {
    SET_LISTS: 'SET_LISTS'
}

export const setLists = (payload) => ({
    type: ACTION_TYPES.SET_LISTS,
    payload
});