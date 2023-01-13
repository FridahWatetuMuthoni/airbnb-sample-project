import image1 from '../images/Airbnb Experiences/22.png';
import image2 from '../images/Airbnb Experiences/23.png';
import image3 from '../images/Airbnb Experiences/24.png';
import image4 from '../images/Airbnb Experiences/25.png';
import image5 from '../images/Airbnb Experiences/26.png';
import image6 from '../images/Airbnb Experiences/27.png';
import image7 from '../images/Airbnb Experiences/28.png';
import image8 from '../images/Airbnb Experiences/29.png';
import image9 from '../images/Airbnb Experiences/30.png';
import star from '../images/star.png';



const Main = (props) => {

    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9]

    const dark_theme = {
        color: 'white',
    }

    return(
        <section className='container'>
            <div className='main'>
            <section className="images">
                {
                        images.map((image, index) => {
                        return (
                            <img className={ `image${index+1}`} key={index} src={image} alt="" />
                        )
                    })
                }
            </section>
            <section className="text" >
                    <h1 style={props.checkbox ? dark_theme : null}>Online Experiences</h1>
                    <p style={props.checkbox ? dark_theme : null}>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
                </section>
                <section className="experiences">
                    {
                        props.data.map((experience,index) => {
                            return (
                                <section className='card' key={index}>
                                    <div className="experience-image">
                                        <img src={experience.image} alt="" />
                                        {
                                            experience.status && (
                                            <div className='status'>
                                            <p>{ experience.status}</p>
                                            </div>
                                            )
                                        }
                                    </div>
                                    <div className="experience-content">
                                        <p> <img className='star' src={star} alt="" />{experience.rating} .USA</p>
                                        <p className='description'>{experience.description}</p>
                                        <h5>From { experience.price} <span>/ person</span></h5> 
                                    </div>
                                </section>
                            )
                        })
                    }
                </section>
            </div>
        </section>
    )
}

export default Main;