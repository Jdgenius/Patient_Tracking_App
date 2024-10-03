import "./styles/chatbot.css"

let open  = false;

function AppearDissappear(){
    const elem = document.getElementById("entry-box");
    if(open){
        elem.style.display = "none";
    }
    else{
        elem.style.display = "block";
    }
    open = !open;
}

function Chatbot(){
    return(
        <div><div id="chatbot" onClick={AppearDissappear}>
            
        </div>
        <div id = "entry-box">
            <input type="text"/>
        </div></div>
    )
}

export default Chatbot;