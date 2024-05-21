import React from 'react'

const Cards = () => {
  return (
    <div>
      

      
      <section>
        <div className="container">
          <h1 className='text-white text-center'>Make every step user-centric</h1>
          <p className='text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, alias?</p>
        </div>

        <div className="d-flex flex-wrap m-5 justify-content-center">
          <div className="card text-bg-dark mb-3 m-5" style={{'max-width': '20rem'}}>
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Dark card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

          <div className="card text-bg-dark mb-3 m-5" style={{'max-width': '20rem'}}>
            <div className="card-heade  m-auto p-3"><img className='' src="/src/assets/react.svg" alt="" /></div>
            <div className="card-body text-center">
              <h5 className="card-title">Dark card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

          <div className="card text-bg-dark mb-3 m-5" style={{'max-width': '20rem'}}>
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Dark card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

          <hr className='text-danger border-danger' />

          <div className="card text-bg-dark mb-3 m-5" style={{'max-width': '20rem'}}>
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Dark card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

          <div className="card text-bg-dark mb-3 m-5" style={{'max-width': '20rem'}}>
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Dark card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

         

          <div className="card text-bg-dark mb-3 m-5" style={{'max-width': '20rem'}}>
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Dark card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Cards
