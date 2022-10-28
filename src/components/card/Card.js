import react from "../../assets/react.png"
import "./Card.css"
import {languages} from "../../helper/data.js"
const Card = ()=>{

    return(
        <div>
            <br/>
            <img className="mainimg"src={react} alt="react" width="25%"/>
            <br/><br/>
           <div className="maincontainer">
            <br/>
            <div className="title">Languages</div>
                    {languages.map((language,index) => {
                
                
                return (
                
                <div className="card" key={index}>
                    <div className="container">
                        <ul>
                        {language.options.map((option,index)=>{
                            return (
                                
                                    <li className="description">{option}</li>
                                   
                                
                            )
                        })}
                        </ul>
                        
                        <img className="languageimg"src={language.img} alt="Avatar" />
                        <h4 className="languagename"><b>{language.name}</b></h4>
                    </div>
                   
                </div>
                
                )
                
        })
                        
    }             
                    </div></div>
               
    )
}

export default Card;