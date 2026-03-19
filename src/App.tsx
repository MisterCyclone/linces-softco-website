import './App.css'
import Header from './components/Header/Header'
import content from './sitecontent/homepage.json'
import server1 from './assets/server1.png'
import logo from './assets/logo.png'
import velocityLogo from './assets/velocity_logo_cropped.png'
import ContentBlock from './components/ContentBlock/ContentBlock'
import server2 from './assets/Server2.png'

function App() {

  const heroSection = content['Hero Section'];
  const aboutUsSection = content['About Us Section'];
  const velocityTitles = content['Velocity Titles'];
  const velocityIntro = content['Velocity Introduction'];
  const servicesIntro = content['Services Introduction'];
  const endingOne = content['Ending One'];
  const endingTwo = content['Ending Two'];

  return (
    <>
      <Header/>
      <ContentBlock 
        left={{type: "text", source: heroSection, buttons: [{ label: "Book a Demo", href: "about-us" }]}} 
        right={{type: "img", source: server1}}
      />
      <ContentBlock 
        left={{type: "img", source: logo}} 
        right={{type: "text", source: aboutUsSection}} 
        useCard={true}
      />
      <ContentBlock 
        left={{type: "text", source: velocityTitles }}
      />
      <ContentBlock 
        left={{type: "text", source: velocityIntro, paddingLeft: "10vw", width: "50vw"}}
        right={{type: "img", source: velocityLogo, paddingLeft: "3.5vw", paddingRight: "17.5vw"}} 
        noTopMargin
      />
      <ContentBlock 
        left={{type: "text", source: velocityTitles}}
        useCard={true}
      />
      <ContentBlock 
        left={{type: "text", source: servicesIntro}}
        right={{type: "img", source: server2, paddingLeft: "3vw", paddingRight: "3vw"}}
      />
      <ContentBlock 
        left={{type: "text", source: endingOne, centerHeader: true}} 
        right={{type: "text", source: endingTwo, centerHeader: true, buttons: [{ label: "Request a Demonstration", href: "about-us" }]}} 
        topAlign={true}
      />
    </>
  )
}

export default App
