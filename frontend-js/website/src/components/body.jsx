import "./styles/body.css"

function Plus() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 32 32"
      >
        <g>
          <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g fill="#ffffff" transform="translate(-362 -1037)">
              <path d="M390 1049h-8v-8a4 4 0 10-8 0v8h-8a4 4 0 100 8h8v8a4 4 0 108 0v-8h8a4 4 0 100-8"></path>
            </g>
          </g>
        </g>
      </svg>
    );
}

function Minus() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 -12 32 32"
      >
        <g>
          <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g fill="#ffffff" transform="translate(-414 -1049)">
              <path d="M442 1049h-24a4 4 0 100 8h24a4 4 0 100-8"></path>
            </g>
          </g>
        </g>
      </svg>
    );
}
  

function Body(){
    return(
        <div id="main">
            <h1>
                Patient Tracker
            </h1>
            
            <button>
                <Plus/>
                <p>
                    Add Patient
                </p>
            </button>
            <button>
                <Minus/>
                <p>
                    Remove Patient
                </p>
            </button>
        </div>
    )
}

export default Body;