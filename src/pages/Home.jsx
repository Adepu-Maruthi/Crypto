import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { GiStaticWaves } from "react-icons/gi";
import { FcScatterPlot } from "react-icons/fc";
import { MdOutlineSmartToy } from "react-icons/md";
import { GiSurroundedEye } from "react-icons/gi";
import { FcBiohazard } from "react-icons/fc";
import { CardsData } from '../Database/cardsdata';
import Testimonal from '../components/Testimonals/Testimonal';
import Cards from '../components/Cards/Cards';
import WorkCards from '../components/WorkCards';
import FlipCards from '../components/FlipCards';




const Home = () => {
  return (
    <div>
      <Navbar />

      <body band threed="1" outlines="0" className='' noselect padded>
        <div className="threed-parent ">
          <div className="threed-child" block>
            <div className='text-center pt-5' >CrYpTo</div>
            <div className='text-center pt-5' ><img src="/src/assets/homebg.jpg" className='rounded  mt-5 homeimage' alt="" style={{'width':'15vw'}}/></div>
          </div>
        </div>
      </body>

      <div className="containerr">
        <div className="text"></div>
        <div className="image home-img">
          <img src="./src/assets/bg10.png" className='border-top border-white border-5' style={{ 'width': '100%', 'height': '110vh' }} alt="" />
          <div className=" text_img">
            <h2 className='text-white heading'>live and  on-demand <br /> trading</h2>
            <p className='text-white headtext'>Lorem ipsum dolor sit amet <br />  consectetur adipisicing elit. Voluptate aliquam dolorum <br /> vitae eum at quisquam? vitae eum at quisquam?</p>
            <button className='button btn text-white border border-white'>Explore</button>
          </div>
        </div>
      </div>

      {/* scroll logos */}
      <div className="box mb-5">

        <marquee className=" border-top border-start border-white border-5" behavior="scroll" direction="" loop='-1'>
          <div className="logos d-flex">
            <div className="text-white fs-2 p-2 me-5"><GiStaticWaves />Waverio</div>
            <div className="text-white fs-2 p-2 me-5"><FcScatterPlot />LoGoIPSUM</div>
            <div className="text-white fs-2 p-2 me-5"><MdOutlineSmartToy /> Alterbone</div>
            <div className="text-white fs-2 p-2 me-5"><GiSurroundedEye /> Ridoria</div>
            <div className="text-white fs-2 p-2 me-5"><FcBiohazard /> Tinygone</div>
          </div>
        </marquee>
      </div>

      {/* cards section */}
















      <div className="cardd ">

        <h1 className='cardname container text-center text-white mb-3'>Automates Portfolio Tracking</h1>
        <p className='text-white text-center container cardpara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In asperiores, aspernatur laudantium unde quod veritatis ipsam deleniti eius corporis ex.</p>
        <h1 className=''>Products</h1>
        <div className=' w-75 m-auto'>
          <div className="row">
            <div className="d-flex justify-content-around  car" >
              {CardsData.map(item => (
                <div className=' cards m-5 border-bottom-0 border-top border-start border-danger rounded p-4' key={item.id}>
                  <p className='text-white fs-1'>0{item.id}</p>
                  <h1 className='text-white text-center fs-1'>{item.image}</h1>
                  <h3 className='text-white text-center'>{item.name}</h3>
                  <p className='text-white text-center'>{item.topic}</p>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>





      {/* features image */}
      <section>
        <div className="containerr home-img ">
          <img className='border-top border-bottom border-end border-5' src="https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/images/methode/2018/05/11/284646b6-fb46-11e7-b2f7-03450b80c791_1280x720_193406.JPG?itok=b7yyFHqD" alt="" style={{ 'width': '100%', 'height': '110vh' }} />
          {/* text */}
          <div className="texts">
            <h3 className='text-danger features'>FEATURES</h3>
            <h1 className='text-warning fsize'>Crypto Premium</h1>
            <h4 className='text-white'><FcBiohazard /> Budgeting Intervals</h4>
            <p className='text-white fpara'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis odit modi atque corrupti cumque a? Quos at eum fugit placeat.</p>

            <h1 className='text-warning fsize'>Crypto Premium</h1>
            <h4 className='text-white'><FcBiohazard />Budgeting Intervals</h4>
            <p className='text-white fpara'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis odit modi atque corrupti cumque a? Quos at eum fugit placeat.</p>

            <h1 className='text-warning fsize'>Crypto Premium</h1>
            <h4 className='text-white'><FcBiohazard /> Budgeting Intervals</h4>
            <p className='text-white fpara'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis odit modi atque corrupti cumque a? Quos at eum fugit placeat.</p>

          </div>
        </div>
      </section>



      <FlipCards />

      <section className=''>
        <div className="container overflow-hidden text-center mb-5">
          <div className="row gx-5">

            <div className="col  ">
              <div className="invite p-4 my-5 text-white worktext textbox ">
                {/* <h4 className='text-danger'>How It Works</h4> */}
                <h1 className='text-white text-start mt-3 fsize'>Invite team members & enlarge your groups</h1>
                <br />
                <p className='text-white text-start mt-3 fsizesm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, rerum soluta deleniti voluptate nemo iste. Laborum quae recusandae provident incidunt officia porro perferendis sit adipisci, soluta ad, totam ab id.</p>
                <button className='bg-dark rounded mt-5 text-white border-white ms-auto'>Explore Now</button>
              </div>
            </div>
            <div className="col my-5 invited">
              <div className="p-3 text-white workimage "><img className='w-75 rounded ' src="/src/assets/bg8.png" alt="" /></div>
            </div>
          </div>
        </div>
      </section>












      <WorkCards />


      {/* <Cards/> */}


      <Testimonal />



      <section>
        <h5 className='text-center text-danger text-decoration-underline'>About Us</h5>
        <h1 className='text-white text-center'>We are distributed team</h1>
        <p className='text-center text-white'>We have offices and teams around the world</p>
        <iframe className='border border-light-subtle' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30580399.624284144!2d68.76916805392734!3d20.67124947282849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1715914503277!5m2!1sen!2sin" style={{ 'border': '0', 'width': '100%', 'height': '100vh' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        {/* <img src="/src/assets/bg5.jpg" alt="" style={{'width':'100%'}} /> */}
      </section>

      <Footer />


    </div>
  )
}

export default Home
