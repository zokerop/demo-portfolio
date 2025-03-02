import "./test.css"
import { testimonialsData } from "../data"
const Testimonials = () => {
  return (
    <div className='bg-red-300 testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className="container">
        {testimonialsData.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="text-black center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
