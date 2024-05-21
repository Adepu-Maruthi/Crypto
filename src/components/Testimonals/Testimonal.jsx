import React from 'react'
import '../Testimonals/testimonal.css'

const Testimonal = () => {
  return (
    <div>
      
      <section className='mt-5'>
      <div className="testimonals">
        <h1 className='text-white text-center'><span className='text-danger'>"</span> Testimonals <span className='text-danger'>"</span></h1>
        <p className='text-white w-50 m-auto mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas necessitatibus ipsa officia eos distinctio odio quam inventore consectetur tenetur, debitis ad dolorum? Ea aspernatur tempora ducimus. Ut placeat quo iure.</p>
      <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card card1 d-flex mx-auto my-5">
                        <div className="card-image cards">
                            <img className="img-fluid d-flex mx-auto" src="https://i.imgur.com/3TlwnLF.jpg"/>
                        </div>
                        <div className="card-text text1">
                            <div className="card-title title1">Lorem Ipsum!</div>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                            Aenean massa. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                            Maecenas nec odio et ante tincidunt tempus
                            Duis leo. Donec sodales sagittis magna
                        </div>
                        <div className="footer">
                            <span id="name">Micheal Smith<br/></span>
                            <span id="position">CEO of <a href="#">Google.com</a></span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card card1 d-flex mx-auto my-5">
                        <div className="card-image cards">
                            <img className="img-fluid d-flex mx-auto" src="https://i.imgur.com/Uz4FjGZ.jpg"/>
                        </div>
                        <div className="card-text text1 ">
                            <div className="card-title title1">Lorem Ipsum!</div>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                            Aenean massa. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                            Maecenas nec odio et ante tincidunt tempus
                            Duis leo. Donec sodales sagittis magna
                        </div>
                        <div className="footer">
                            <span id="name">Angellia Miller<br/></span>
                            <span id="position">CEO of <a href="#">Facebook.com</a></span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 ">
                    <div className="card card1 d-flex mx-auto my-5 ">
                        <div className="card-image cards ">
                            <img className="img-fluid d-flex mx-auto" src="https://i.imgur.com/udGH5tO.jpg"/>
                        </div>
                        <div className="card-text text1 ">
                            <div className="card-title title1">Lorem Ipsum!</div>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                            Aenean massa. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                            Maecenas nec odio et ante tincidunt tempus
                            Duis leo. Donec sodales sagittis magna
                        </div>
                        <div className="footer">
                            <span id="name">Christina Williams<br/></span>
                            <span id="position">UX Designer at <a href="#">Youtube.com</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>


    </div>
  )
}

export default Testimonal
