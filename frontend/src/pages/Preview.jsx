import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../assets/webp/icon.webp'
import Button from '../ui/button'
import { useNavigate  } from 'react-router-dom'


function Preview() {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    console.log('Navigating to:', route);
      navigate(route); 
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="absolute top-0 left-0 p-4">
        <Link to="/"><img className="h-[5rem] object-cover" src={Icon} alt="kanavoogle Icon"/></Link>
      </div>
      <div className="">
        <div className=''>
          <h1>What we Offer</h1>
          <p>Kanavoogle Pty Ltd is a start-up company established in 2018, dedicated to providing education 
            and project management consulting services to tech startups and early childhood education institutions. 
            Our project aims to develop a digital platform that allows users to inquire about our services. 
            The platform should be simple, user-friendly, and accessible on both mobile devices and desktops.</p>
        </div>
        <div className=''>
          <h1>Novel Blockchain Projects</h1>
          <p>We specialize in innovative blockchain solutions tailored to the needs of tech startups. Our services include 
            developing decentralized applications (DApps), smart contracts, and blockchain integration for various business models. 
            By leveraging the power of blockchain, we help startups enhance security, transparency, and efficiency in their operations.</p>
        </div>
        <div className=''>
          <h1>21st Century Skills Development</h1>
          <p>At Kanavoogle, we are passionate about equipping individuals with the skills necessary for success in the digital age. 
            Our 21st-century skills development programs focus on critical thinking, problem-solving, digital literacy, 
            and collaboration. These programs are designed for both students and professionals looking to enhance their capabilities 
            in a rapidly evolving technological landscape.</p>
        </div>
        <div className=''>
          <h1>Montessori Education Implementation</h1>
          <p>We are committed to fostering holistic development in early childhood education through the Montessori method. 
            Our team provides expert guidance on implementing Montessori principles in educational institutions, 
            ensuring that children receive a well-rounded education that promotes independence, creativity, and a love for learning.</p>
        </div>
        <div className=''>
          <Button onClick={() => handleNavigation('/signup')}>Register now</Button>
        </div>        
      </div>
    </div>
  )
}

export default Preview
