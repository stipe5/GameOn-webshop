import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import { AppWrapperComponent } from './components/AppWrapper/AppWrapperComponent'
import { Page } from './components/Page/Page'
import { SingleProduct } from './components/Product/SingleProduct'
import { Home } from './components/Home/Home'
import { ProductList } from './components/Product/ProductList'
import { Contact } from './components/Contact/Contact'
import { About } from './components/About/About'
import { Blog } from './components/Blog/Blog'
import { BlogPage } from './components/Blog/BlogPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppWrapperComponent/>}>
            <Route index element={<Home />}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/*' element={<Page title={"404 - Page not found"}/>}/>
            <Route path='/products' element={<Outlet/>}>
              <Route index element={<ProductList/>} />
              <Route path='/products/:id' element={<SingleProduct/>}/>
            </Route>
            <Route path='/blog' element={<Outlet/>}>
              <Route index element={<Blog/>}/>
              <Route path='/blog/:id' element={<BlogPage/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
