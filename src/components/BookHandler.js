import { Link } from 'react-router-dom'
const BookHandler=(props)=>{
    const{bookShelves} = props
    return(
        <div className='list-books'>
              <div className='list-books-title'>
                <h1>MyReads</h1>
              </div>
              <div className='list-books-content'>
                <div>{bookShelves}</div>
              </div>
              <div className='open-search'>
                <Link to='/search'>Add a book</Link>
              </div>
            </div>
    )
}
export default BookHandler