import BackgroundImage from "../assets/scene5_assets/scene5_bg.png"
import Dialogue1 from "../assets/scene5_assets/scene5_1.png"
import Dialogue2 from "../assets/scene5_assets/scene5_2.png"
import Dialogue3 from "../assets/scene5_assets/scene5_3.png"
import Dialogue4 from "../assets/scene5_assets/scene5_4.png"
import Dialogue5 from "../assets/scene5_assets/scene5_5.png"
import Dialogue6 from "../assets/scene5_assets/scene5_6.png"
import Dialogue7 from "../assets/scene5_assets/scene5_7.png"
import NextButtonImage from "../assets/next_button.png"
import MoreInfoImage from "../assets/scene4_assets/more_info_button.png"
import "../components/Scene.css"
import "../components/SceneFive.css"
import { useContext, useState, useMemo } from "react"
import { sceneContext } from "../context/SceneProvider"

function SceneFive(props){

  const [dialogCounter, setDialogCounter] = useState(0)

  const [sceneCounter, setSceneCounter] = useContext(sceneContext)

  const incrementDialogue = () => {
    setDialogCounter(dialogCounter+1)
    if(dialogCounter === 6){
      setSceneCounter(sceneCounter+1)
    }
  }

  const dialogs = useMemo(() => [Dialogue1, Dialogue2, Dialogue3, Dialogue4, Dialogue5, Dialogue6, Dialogue7], [])

  const currentDialog = dialogs[dialogCounter]

  const NextImage = dialogCounter === 6 ? MoreInfoImage : NextButtonImage 

  return(
    <div class="bg-container" style={{  
      backgroundImage: "url(" + BackgroundImage + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <div>
      <img src={currentDialog} className="dialog" alt="something"/>
      <center className="buttons">
        <img src={NextImage} className="nextButton" onClick={incrementDialogue} alt="dialog"></img>
      </center>
      </div>
    </div>
  )
}

export default SceneFive