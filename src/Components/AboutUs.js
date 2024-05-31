import React from "react";

export default function AboutUs(props) {
   let myStyle = {
   color: props.mode === 'dark'?'white':'black',
   backgroundColor: props.mode==='dark'?'black':'white'
   }
   
   let mStyle = {
   color: props.mode === 'dark'?'white':'#44595f',
   backgroundColor: props.mode==='dark'?'#44595f':'white'
   }
   

    return (
        <div className="accordion" id="accordionExample">
            <p style={{color: props.mode === 'dark'?'white':'black'}} className="abt">ABOUT US</p>
            <div className="accordion-item" style={myStyle}>
                
                <h2 className="accordion-header" style={myStyle}>
                    <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                        style={mStyle}
                    >
               <strong>
                              Totaly Free
                        </strong>
                    </button>
                </h2>
                <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body"style={{height: '200px'}}>
                        <strong>This is the first item's accordion body.</strong> It is
                        shown by default, until the collapse plugin adds the appropriate
                        classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS
                        transitions. You can modify any of this with custom CSS or
                        overriding our default variables. It's also worth noting that just
                        about any HTML can go within the <code>.accordion-body</code>,
                        though the transition does limit overflow.                                                    
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                        style={mStyle}
                    >
                         <strong>
                              24X7 Services 
                        </strong>
            
                    </button>
                </h2>
                <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body" style={{height: '200px'}}>
                        <strong>This is the second item's accordion body.</strong> It is
                        hidden by default, until the collapse plugin adds the appropriate
                        classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS
                        transitions. You can modify any of this with custom CSS or
                        overriding our default variables. It's also worth noting that just
                        about any HTML can go within the <code>.accordion-body</code>,
                        though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                        style={mStyle}
                    >
                       <strong>
                         24X7 Customer support
                        </strong>
                    </button>
                </h2>
                <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body" style={{height: '200px'}}>
                        <strong>This is the third item's accordion body.</strong> It is
                        hidden by default, until the collapse plugin adds the appropriate
                        classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS
                        transitions. You can modify any of this with custom CSS or
                        overriding our default variables. It's also worth noting that just
                        about any HTML can go within the <code>.accordion-body</code>,
                        though the transition does limit overflow.
                    </div>
                </div>
            </div>
   
        </div>
    );
}
