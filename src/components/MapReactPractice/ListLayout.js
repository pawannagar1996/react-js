import "../../App.css"


export default function ListLayout(props){
const {img, heading, discription,altName}=props
    return(
        <li className="list-design">
            <div className="list-design-img"><img src={img} alt={altName} /></div>
            <div className="list-design-text"><h2>{heading}</h2>
            <p>{discription}</p></div>
            
        </li>
    )
}