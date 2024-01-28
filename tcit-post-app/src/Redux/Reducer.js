import { MAKE_REQ, REQ_ADD_SUCC, REQ_DELETE_SUCC, REQ_GETALL_FAIL, REQ_GETALL_SUCC, REQ_FILTER } from "./ActionType"

export const initialstate = {
    isLoading: false,
    postsList: [],
    displayList: [],
    errorMessage: ''
}

export const PostReducer = (state = initialstate, action) => {
    switch (action.type) {
        case MAKE_REQ:
            return {
                ...state,
                isLoading: true
            }
        case REQ_GETALL_SUCC:
            return {
                ...state,
                isLoading: false,
                postsList: action.payload,
                displayList: action.payload
            }
        case REQ_GETALL_FAIL:
            return {
                ...state,
                isLoading: false,
                postsList: [],
                displayList: [],
                errorMessage: action.payload
            }
        case REQ_ADD_SUCC:
            const _inputdata = { ...action.payload };
            return {
                ...state,
                postsList: [...state.postsList, _inputdata],
                displayList: [...state.postsList, _inputdata]
            }
        case REQ_DELETE_SUCC:
            const _filterdata = state.postsList.filter((data) => {
                return data.id !== action.payload
            })
            const _filterdataDisplay = state.displayList.filter((data) => {
                return data.id !== action.payload
            })
            return {
                ...state,
                postsList: _filterdata,
                displayList: _filterdataDisplay
            }
        case REQ_FILTER:
            let _filter =[];

            if (action.payload.length===0){
                _filter = state.postsList;
            }else{
                _filter = state.postsList.filter((data) => {
                    return data.nombre.includes(action.payload);
                })
            }
            return {
                ...state,
                postsList: state.postsList,
                displayList: _filter
            }
        default: return state;
    }
}