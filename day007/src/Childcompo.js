export default function Childcompo(props){
    return(
        <>
        <h3>Hello React!  I'm Child</h3>
        {
            props.setfun("My name is Bob")
        }
        </>
    )
}