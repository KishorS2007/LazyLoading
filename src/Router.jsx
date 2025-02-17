import {Link} from 'react-router-dom'

function MyRouter(props){
    
return(
    <div className={`Aside ${props.toggle?'Show':'dontshow'}`}>
        <Link className="btn btn-danger btn-lg page1"  to={'/ '}>Page 1</Link>
        <Link className="btn btn-danger btn-lg page2"  to={'/Page2 '}>Page 2</Link>
        <Link className="btn btn-danger btn-lg page3"  to={'/Page3 '}>Page 3</Link>
        <Link className="btn btn-danger btn-lg page4"  to={'/Page4 '}>Page 4</Link>
        <Link className="btn btn-danger btn-lg page5"  to={'/Page5 '}>Page 5</Link>
        <Link className="btn btn-danger btn-lg page6"  to={'/Page6 '}>Page 6</Link>
        <Link className="btn btn-danger btn-lg page7"  to={'/Page7 '}>Page 7</Link>
        <Link className="btn btn-danger btn-lg page8"  to={'/Page8 '}>Page 8</Link>
        <Link className="btn btn-danger btn-lg page9"  to={'/Page9 '}>Page 9</Link>
        <Link className="btn btn-danger btn-lg page10" to={'/Page10 '}>Page 10</Link>
    </div>
)
}
export default MyRouter