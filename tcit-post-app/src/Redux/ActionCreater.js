import axios from "axios";
import { AddRequest, RemoveRequest, getAllRequestFail, getAllRequestSuccess, makeRequest, FilterRequest } from "./Action"
import { toast } from "react-toastify";

export const GetAllPosts = () => {
    return (dispatch) => {
        dispatch(makeRequest());
        setTimeout(()=>{
            axios.get("http://localhost:4000/api/post").then(res => {
                const _list = res.data;
                dispatch(getAllRequestSuccess(_list));
            }).catch(err => {
                dispatch(getAllRequestFail(err.message));
            });
        },1000)
    }
}

export const CreatePost = (data) => {
    return (dispatch) => {
        axios.post("http://localhost:4000/api/post", data).then(res => {
            data.id = res.data.id;
            dispatch(AddRequest(data));
            //toast.success('Post creado exitosamente.')
        }).catch(err => {
            //toast.error('No se pudo crear el post: ' + err.message)
        });
    }
}

export const RemovePost = (id) => {
    return (dispatch) => {
        axios.delete("http://localhost:4000/api/post/"+id).then(res => {
            dispatch(RemoveRequest(id));
            //toast.success('Post eliminado exitosamente.')
        }).catch(err => {
            //toast.error('No se pudo eliminar el post: ' + err.message)
        });
    }
}

export const FilterPosts = (filter) => {
    return (dispatch) => {
        dispatch(FilterRequest(filter));
    }
}