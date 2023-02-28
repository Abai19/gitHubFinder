import Button from "./Button/Button"
import Search from "./Search/Search"
const Test =()=> {
    return (
        <>
        <h1>hello</h1>
        <Button onClick={()=>{}}>
            тест12
        </Button>
        <Search hasError={false} onSubmit={()=> alert('yeas')}/>
        </>
    )
}
export default Test