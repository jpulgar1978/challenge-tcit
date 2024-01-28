import { MAKE_REQ, REQ_ADD_SUCC, REQ_DELETE_SUCC, REQ_GETALL_FAIL, REQ_GETALL_SUCC, REQ_FILTER } from "./ActionType"

export const makeRequest=()=>{
    return{
        type:MAKE_REQ
    }
}

export const getAllRequestSuccess=(data)=>{
    return{
        type:REQ_GETALL_SUCC,
        payload:data
    }
}

export const getAllRequestFail=(err)=>{
    return{
        type:REQ_GETALL_FAIL,
        payload:err
    }
}


export const AddRequest=(data)=>{
    return{
        type:REQ_ADD_SUCC,
        payload:data
    }
}

export const RemoveRequest=(code)=>{
    return{
        type:REQ_DELETE_SUCC,
        payload:code
    }
}

export const FilterRequest=(filter)=>{
    return{
        type:REQ_FILTER,
        payload:filter
    }
}
