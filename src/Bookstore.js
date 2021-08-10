import react from 'react'
import "./index.css"

const FirstBook = {
    img: "https://images-eu.ssl-images-amazon.com/images/I/710jnzKlDTL._AC_UL200_SR200,200_.jpg",
    title: "Attitude Is Everything: Change Your Attitude ... Change Your Life! ",
    author: "Jeff keller",
    quality: "Ppaerback",
    price: "$9"
}
const SecondBook = {
    img: "https://images-eu.ssl-images-amazon.com/images/I/81NYuWzsJcS._AC_UL200_SR200,200_.jpg",
    title: "The Richest Man in Babylon",
    author: "George classon",
    quality: "Paperback",
    price: "$9"
}
const ThirdBook = {
    img: "https://images-eu.ssl-images-amazon.com/images/I/81%2Bx6eHkSdS._AC_UL200_SR200,200_.jpg",
    title: "Wuthering Heights",
    author: "Emily Bronte",
    quality: "Paperback",
    price: "$8"
}

function Bookstore() {
    return (
        <section className="booklist">
            <Book img={FirstBook.img} title={FirstBook.title} author={FirstBook.author} quality={FirstBook.quality} price={FirstBook.price}></Book>
            <Book img={SecondBook.img} title={SecondBook.title} author={SecondBook.author} quality={SecondBook.quality} price={SecondBook.price}></Book>
            <Book img={ThirdBook.img} title={ThirdBook.title} author={ThirdBook.author} quality={ThirdBook.quality} price={ThirdBook.price}></Book>
        </section>
    )
}
const Book = ({img,title,author,quality,price}) => {
    //const{img,title,author,quality,price}=props; //this is just a another way to use props
    return <article className='book'>
        <img src={img}></img>
        <h1>{title}</h1>
        <h1>{quality}</h1>
        <h3>{author}</h3>
        <h3>{price}</h3>
    </article>
}
export default Bookstore