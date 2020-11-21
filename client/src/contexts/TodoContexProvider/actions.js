export const ACTION_TYPES = {
    SET_LISTS: 'SET_LISTS',
    CREATE_LIST: 'CREATE_LIST'
}

export const setLists = (payload) => ({
    type: ACTION_TYPES.SET_LISTS,
    payload
});

export const createList = (payload) => ({
    type: ACTION_TYPES.CREATE_LIST,
    payload
})