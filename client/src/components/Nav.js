import {Link} from "react-router-dom"

export const NavBar = ({Brand, links}) => {
    return (
        <div>
               <h1>{ Brand }</h1>
               {
                links && links.map(({text, to})=> (
                    <Link to = {to}>{text}</Link>
                )
                )
               } 
        </div>
    )

};