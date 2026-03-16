import './App.css'
import Header from './components/Header/Header'
import content from './sitecontent/homepage.json'
import server1 from './assets/server1.png'
import logo from './assets/logo.png'
import ContentBlock from './components/ContentBlock/ContentBlock'

function App() {

  const heroSection = content['Hero Section'];
  const aboutUsSection = content['About Us Section'];
  const endingOne = content['Ending One'];
  const endingTwo = content['Ending Two'];

  return (
    <>
      <Header/>
      <ContentBlock left={{type: "text", source: heroSection}} right={{type: "img", source: server1}}/>
      <ContentBlock left={{type: "img", source: logo}} right={{type: "text", source: aboutUsSection}} useCard={true}/>
      <ContentBlock left={{type: "text", source: endingOne, centerBlock: true}} right={{type: "text", source: endingTwo, centerBlock: true}} topAlign={true}/>
    </>
  )
}

export default App
