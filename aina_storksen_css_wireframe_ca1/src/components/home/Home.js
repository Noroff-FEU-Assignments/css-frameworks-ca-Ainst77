import React from "react";


function Jumbotron() {
    return (
<>
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../images/carousel1.jpg" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="../images/carousel-2.jpg" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="../images/carousel-3.jpg" class="d-block w-100" alt="..."></img>
    </div>
  </div>
</div>

<div className="page-wrapper">
    



    <div className="yayContainer">
      <h2 className="yayHeading">We do YAY things</h2>
      <p className="yayParagrapgh">Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. 
          Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. 
          Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. 
          Donec mi orci, sollicitudin in luctus a, varius eget massa.</p>
    </div>

    <div className="tab-wrapper">
              <ul className="nav2 nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                      <a className="nav-link active" id="tab1" data-toggle="tab" href="#first" role="tab" aria-controls="first" aria-selected="true">First</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" id="tab2" data-toggle="tab" href="#second" role="tab" aria-controls="second" aria-selected="false">Second</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" id="tab3" data-toggle="tab" href="#third" role="tab" aria-controls="third" aria-selected="false">Third</a>
                  </li>
              </ul>
                  <div className="tab-content" id="myTabContent">
                      <div className="tab-pane fade show active"  id="home" role="tabpanel" aria-labelledby="home-tab"  >
                          <img className="tab1-img" src="/images/tab1.jpg"></img>
                          <p className="tab-text">Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p> </div>
                      <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><img className="tab1-img" src="/images/tab2.jpg"></img>
                          <p className="tab-text">Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p></div>
                      <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"><img className="tab1-img" src="/images/tab3.jpg"></img>
                          <p className="tab-text">Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p></div>
                  </div> 

    </div>
</div>
</> 
 


);
  }
  
  export default Jumbotron;