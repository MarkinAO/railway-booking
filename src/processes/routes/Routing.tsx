import { Route, Routes } from 'react-router-dom';
import Home from "../../pages/Home/Home";
import NotFound from "../../pages/404";
import PageWrap from './PageWrap';
import { Provider } from 'react-redux';
import { store } from '../../shared/model/store';

export default function Routing() {
    return(
        <Provider store={store}>
            <Routes>
                <Route path='/' element={<PageWrap />} >
                    <Route path='/' element={<Home />} />
                    {/* <Route path='/About' element={<About />} /> */}
                    {/* <Route path='/Cart' element={<Cart />} /> */}
                    {/* <Route path='/Catalog' element={<Catalog />} /> */}
                    {/* <Route path='/Catalog/:id' element={<ProductCard />} /> */}
                    {/* <Route path='/Contacts' element={<Contacts />} /> */}
                    <Route path='*' element={<NotFound />} />
                </Route>                
            </Routes>
        </Provider>        
    )
}