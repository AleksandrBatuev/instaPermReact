import { ADD_ACCOUNT, EXPENSE_TRANS, FETCH_ACCOUNT, FETCH_TRANS, REFILL_TRANS } from "../types"

const handlers = {
    [ADD_ACCOUNT]: (state, {payload}) => ({
        ...state,
        list: [...state.list, payload]
    }),
    [FETCH_ACCOUNT]: (state, {payload}) => ({...state, list: payload}),
    [FETCH_TRANS]: (state, {payload}) => ({...state, trans: payload}),
    [REFILL_TRANS]: (state, {payload}) => ({...state, trans: payload}),
    [EXPENSE_TRANS]: (state, {payload}) => ({...state, trans: payload}),
    DEFAULT: state => state
}

export const listReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}