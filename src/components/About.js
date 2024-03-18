import React, {useState} from 'react'

export default function About(props) {

  return (
    <div className = "container">
        <h1>About us</h1>
      <div className="accordion" id="accordionExample">
        <h2 className="accordion-header" id="headingOne">
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body" style ={{backgroundColor: props.mode==="dark"?"black":"white", color: props.mode==="light"?"black":"white"}}>
            This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the , though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
  )
}
