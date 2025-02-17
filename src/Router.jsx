import {Link} from 'react-router-dom'

function MyRouter(props){
    
return(
    <div className={`Aside ${props.toggle?'Show':'dontshow'}`}>
        <Link className="btn btn-danger btn-lg page1"  to={'/LazyLoading/Page1 '}>Page 1</Link>
        <Link className="btn btn-danger btn-lg page2"  to={'/LazyLoading/Page2 '}>Page 2</Link>
        <Link className="btn btn-danger btn-lg page3"  to={'/LazyLoading/Page3 '}>Page 3</Link>
        <Link className="btn btn-danger btn-lg page4"  to={'/LazyLoading/Page4 '}>Page 4</Link>
        <Link className="btn btn-danger btn-lg page5"  to={'/LazyLoading/Page5 '}>Page 5</Link>
        <Link className="btn btn-danger btn-lg page6"  to={'/LazyLoading/Page6 '}>Page 6</Link>
        <Link className="btn btn-danger btn-lg page7"  to={'/LazyLoading/Page7 '}>Page 7</Link>
        <Link className="btn btn-danger btn-lg page8"  to={'/LazyLoading/Page8 '}>Page 8</Link>
        <Link className="btn btn-danger btn-lg page9"  to={'/LazyLoading/Page9 '}>Page 9</Link>
        <Link className="btn btn-danger btn-lg page10" to={'/LazyLoading/Page10 '}>Page 10</Link>
    </div>
)
}
export default MyRouter