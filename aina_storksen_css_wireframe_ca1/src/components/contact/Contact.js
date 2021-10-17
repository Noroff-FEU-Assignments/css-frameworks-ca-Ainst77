import React from 'react'

function Contact() {
    return (
       
           <>
           <div className="page-wrapper"> 
                <h2 className="submitHeading">Submit your details</h2>
                <div className="contactpage-wrapper">
            
            
                    <div className="contact-info">
                            <p className="contact-mail"><svg xmlns="http://www.w3.org/2000/svg" width="31.987" height="24.736" viewBox="0 0 31.987 24.736">
                                <path id="envelope" d="M31.381,72.168a.375.375,0,0,1,.606.3V85.644a3.047,3.047,0,0,1-3,3.092H3a3.047,3.047,0,0,1-3-3.092V72.477a.373.373,0,0,1,.606-.3c1.4,1.121,3.255,2.544,9.627,7.318,1.318.992,3.542,3.079,5.76,3.066,2.23.019,4.5-2.113,5.766-3.066C28.132,74.719,29.981,73.289,31.381,72.168ZM15.993,80.491c1.449.026,3.536-1.881,4.586-2.667,8.29-6.2,8.921-6.744,10.833-8.29a1.559,1.559,0,0,0,.575-1.217V67.092a3.047,3.047,0,0,0-3-3.092H3a3.047,3.047,0,0,0-3,3.092v1.224a1.569,1.569,0,0,0,.575,1.217c1.912,1.54,2.543,2.087,10.833,8.29C12.457,78.61,14.544,80.516,15.993,80.491Z" transform="translate(0 -64)" fill="#767676"/>
                                </svg>hello@yay.com</p>
                            <p className="contact-phone"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
                                <path id="phone" d="M32.754,1.623,25.848.03a1.6,1.6,0,0,0-1.826.923L20.835,8.39a1.59,1.59,0,0,0,.458,1.859l4.024,3.294A24.61,24.61,0,0,1,13.55,25.31l-3.294-4.024A1.592,1.592,0,0,0,8.4,20.828L.96,24.015a1.613,1.613,0,0,0-.93,1.833l1.594,6.906a1.593,1.593,0,0,0,1.554,1.235A30.808,30.808,0,0,0,33.99,3.177,1.592,1.592,0,0,0,32.754,1.623Z" transform="translate(0.01 0.011)" fill="#767676"/>
                            </svg>123 456 7890</p>
                        <div className="adress-Wrapper">

                        
                            <p className="contact-adress"><svg xmlns="http://www.w3.org/2000/svg" width="25.5" height="34" viewBox="0 0 25.5 34">
                                <path id="map-marker-alt" d="M11.44,33.314C1.791,19.326,0,17.891,0,12.75a12.75,12.75,0,0,1,25.5,0c0,5.141-1.791,6.576-11.44,20.564a1.594,1.594,0,0,1-2.621,0Zm1.31-15.252A5.312,5.312,0,1,0,7.437,12.75,5.312,5.312,0,0,0,12.75,18.062Z" fill="#767676"/>
                                </svg> 123 Some Street</p>
                            <p className="contact-adress">Somewhere</p>
                            <p className="contact-adress">Some City</p>
                            <p className="contact-adress">10000</p>
                        </div>

                    </div>
                    <h2 className="yayHeading-small">Submit your details</h2>
                    <form className="contact-form">
                        <label for="exampleInputEmail1" className="form-label">Name</label>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1"></input>
                        </div>

                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        </div>
                        <label for="basic-url" class="form-label">Website</label>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon3">https://</span>
                            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"></input>
                        </div>

                        <label for="basic-url" class="form-label">Message</label>
                        <div class="form-floating">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '224px'}}></textarea>
                        </div>

                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                            <label className="form-check-label" for="exampleCheck1">Allow us to sell your personal details to whomever we want</label>
                        </div>
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </form>
                    <div className="contact-info-small">
                            <p className="contact-mail"><svg xmlns="http://www.w3.org/2000/svg" width="31.987" height="24.736" viewBox="0 0 31.987 24.736">
                                <path id="envelope" d="M31.381,72.168a.375.375,0,0,1,.606.3V85.644a3.047,3.047,0,0,1-3,3.092H3a3.047,3.047,0,0,1-3-3.092V72.477a.373.373,0,0,1,.606-.3c1.4,1.121,3.255,2.544,9.627,7.318,1.318.992,3.542,3.079,5.76,3.066,2.23.019,4.5-2.113,5.766-3.066C28.132,74.719,29.981,73.289,31.381,72.168ZM15.993,80.491c1.449.026,3.536-1.881,4.586-2.667,8.29-6.2,8.921-6.744,10.833-8.29a1.559,1.559,0,0,0,.575-1.217V67.092a3.047,3.047,0,0,0-3-3.092H3a3.047,3.047,0,0,0-3,3.092v1.224a1.569,1.569,0,0,0,.575,1.217c1.912,1.54,2.543,2.087,10.833,8.29C12.457,78.61,14.544,80.516,15.993,80.491Z" transform="translate(0 -64)" fill="#767676"/>
                                </svg>hello@yay.com</p>
                            <p className="contact-phone"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
                                <path id="phone" d="M32.754,1.623,25.848.03a1.6,1.6,0,0,0-1.826.923L20.835,8.39a1.59,1.59,0,0,0,.458,1.859l4.024,3.294A24.61,24.61,0,0,1,13.55,25.31l-3.294-4.024A1.592,1.592,0,0,0,8.4,20.828L.96,24.015a1.613,1.613,0,0,0-.93,1.833l1.594,6.906a1.593,1.593,0,0,0,1.554,1.235A30.808,30.808,0,0,0,33.99,3.177,1.592,1.592,0,0,0,32.754,1.623Z" transform="translate(0.01 0.011)" fill="#767676"/>
                            </svg>123 456 7890</p>
                        <div className="adress-Wrapper">
                            <p className="contact-adress"><svg xmlns="http://www.w3.org/2000/svg" width="25.5" height="34" viewBox="0 0 25.5 34">
                        <path id="map-marker-alt" d="M11.44,33.314C1.791,19.326,0,17.891,0,12.75a12.75,12.75,0,0,1,25.5,0c0,5.141-1.791,6.576-11.44,20.564a1.594,1.594,0,0,1-2.621,0Zm1.31-15.252A5.312,5.312,0,1,0,7.437,12.75,5.312,5.312,0,0,0,12.75,18.062Z" fill="#767676"/>
                        </svg>123 Some Street
                            <p className="contact-adress">Somewhere</p>
                            <p className="contact-adress">Some City</p>
                            <p className="contact-adress">10000</p></p>
                        </div>

                    </div>
                
                </div>
            </div>
         
          
        </> 
    )
}

export default Contact
