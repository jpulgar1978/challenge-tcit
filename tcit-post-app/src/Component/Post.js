import { Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { CreatePost, FilterPosts, GetAllPosts, RemovePost } from "../Redux/ActionCreater";
import { connect, useDispatch } from "react-redux";

const Post = (props) => {
    const columns = [
//        { id: 'id', name: 'Id' },
        { id: 'nombre', name: 'Nombre' },
        { id: 'descripcion', name: 'Descripción' },
        { id: 'accion', name: 'Acción' }
    ]

    const dispatch = useDispatch();

    const [id, idChange] = useState(0);
    const [nombre, nombreChange] = useState('');
    const [descripcion, descripcionChange] = useState('');
    const [filtro, filtroChange] = useState('');

    const handleCreate = (e) => {
        e.preventDefault();
        const _obj = { id, nombre, descripcion };

        dispatch(CreatePost(_obj));
        clearState();
    }

    const handleFilter = (e) => {
        e.preventDefault();

        dispatch(FilterPosts(filtro));
        filtroChange('');
    }

    const handleRemove = (id) => {
        if (window.confirm('Desea eliminar el post?')) {
            dispatch(RemovePost(id));
        }
    }

    const clearState = () => {
        idChange(0);
        nombreChange('');
        descripcionChange('');
    }

    useEffect(() => {
        props.loadPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        props.postsState.isLoading ? <div><h2>Loading.....</h2></div> :
        props.postsState.errorMessage ? <div><h2>{props.postsState.errorMessage}</h2></div> : 
            <div>
                <h1>TCIT Challenge - Juan Pulgar G.</h1>
                <Paper sx={{ margin: '1%' }}>
                    <br></br>
                    <div style={{ margin: '1%' }}>
                        <form onSubmit={handleFilter}>
                            <Stack spacing={3} margin={3} direction="row" >
                                <TextField value={filtro} onChange={e => { filtroChange(e.target.value) }} variant="outlined" label="Filtro"></TextField>
                                <Button variant="contained" type="submit">Buscar</Button>
                            </Stack>
                        </form>
                    </div>
                    <div style={{ margin: '1%' }}>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow style={{ backgroundColor: 'midnightblue' }}>
                                        {columns.map((column) =>
                                            <TableCell key={column.id} style={{ color: 'white' }}>{column.name}</TableCell>
                                        )}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {props.postsState.displayList &&
                                        props.postsState.displayList
                                            .map((row, i) => {
                                                return (
                                                    <TableRow key={i}>
                                                        {/* <TableCell>{row.id}</TableCell> */}
                                                        <TableCell>{row.nombre}</TableCell>
                                                        <TableCell>{row.descripcion}</TableCell>
                                                        <TableCell>
                                                            <Button onClick={e => { handleRemove(row.id) }} variant="contained" color="error">Eliminar</Button>
                                                        </TableCell>
                                                    </TableRow>
                                                )
                                            })
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <div style={{ margin: '1%' }}>
                        <form onSubmit={handleCreate}>
                            <Stack spacing={3} margin={3} direction="row" >
                                <TextField required error={nombre.length === 0} value={nombre} onChange={e => { nombreChange(e.target.value) }} variant="outlined" label="Nombre"></TextField>
                                <TextField required error={descripcion.length === 0} value={descripcion} onChange={e => { descripcionChange(e.target.value) }} variant="outlined" label="Descripción"></TextField>
                                <Button disabled={nombre.length === 0 || descripcion.length === 0 } variant="contained" type="submit">Crear</Button>
                            </Stack>
                        </form>
                    </div>
                    <br></br>
                </Paper>
            </div>
    );
}

const mapStatetoProps = (state) => {
    return {
        postsState: state.posts
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        loadPosts: () => dispatch(GetAllPosts())
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Post);