import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { lazy,Suspense } from 'react'
import { BrowserRouter,HashRouter as Router, Routes, Route} from 'react-router-dom'
const Page1 = lazy(()=>import('./pages/Page1'))
const Page2 = lazy(()=>import('./pages/Page2'))
const Page3 = lazy(()=>import('./pages/Page3'))
const Page4 = lazy(()=>import('./pages/Page4'))
const Page5 = lazy(()=>import('./pages/Page5'))
const Page6 = lazy(()=>import('./pages/Page6'))
const Page7 = lazy(()=>import('./pages/Page7'))
const Page8 = lazy(()=>import('./pages/Page8'))
const Page9 = lazy(()=>import('./pages/Page9'))
const Page10 = lazy(()=>import('./pages/Page10'))
import ScrollonTOP from './pages/ScrollonTop';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
        <ScrollonTOP />
        <Suspense fallback={<span className="loader"></span>}>
            <Routes>
                <Route element={<Page1/>} path='/LazyLoading/Page1'/>
                <Route element={<Page2/>} path='/LazyLoading/Page2'/>
                <Route element={<Page3/>} path='/LazyLoading/Page3'/>
                <Route element={<Page4/>} path='/LazyLoading/Page4'/>
                <Route element={<Page5/>} path='/LazyLoading/Page5'/>
                <Route element={<Page6/>} path='/LazyLoading/Page6'/>
                <Route element={<Page7/>} path='/LazyLoading/Page7'/>
                <Route element={<Page8/>} path='/LazyLoading/Page8'/>
                <Route element={<Page9/>} path='/LazyLoading/Page9'/>
                <Route element={<Page10/>} path='/LazyLoading/Page10'/>
            </Routes>
        </Suspense>
    </Router>
  </StrictMode>
)
