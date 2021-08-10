import react from 'react'
import"./index.css"

function Bookstore() {
    return (
        <section className="booklist">
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            
            
        </section>
    )
}
const Book = () => {
    return <article><Img />
    <Author />
    <Title />
    <Qulaity />
    <Price />
    
        
    </article>
}

const Img = () =>  <img src="https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL.
_AC_UL200_SR200,200_.jpg" alt=""></img>
const Author = () => <h1>Paulo coelho</h1>
const Title = () => <h2>The Alchemist  </h2>
const Qulaity = () => <h1>Paperback</h1>
const Price = () => <h3>$7.00</h3>


export default Bookstore