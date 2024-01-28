import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Post from './Component/Post';
import { Provider } from 'react-redux';
import postStore from './Redux/Store';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Provider store={postStore}>
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<Post></Post>}></Route>
      </Routes>
    </BrowserRouter>
    <ToastContainer position='top-right'></ToastContainer>
    </Provider>
  );
}

export default App;