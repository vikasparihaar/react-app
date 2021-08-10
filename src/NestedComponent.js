import react from 'react'

function NestedComponent() {
    return(
        <div>
            <h1>this is the parent component</h1>
            <Child /> {/*here i called the child class*/}

        </div>
    )
}
const Child = () => {  //this is the child function component
    return(
        <div>
            <h3>Iam the child</h3>
        </div>
    )

}
export default NestedComponent