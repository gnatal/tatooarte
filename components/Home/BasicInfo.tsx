import React from 'react';
import Button from '../../styles/Button';
import Background from '../../styles/Home/BasicInfo';


export default function BasicInfo() {

    function handleClick() {
        window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLScQNRrEg09fQgX_VBHG1-V5wCk-vJAW2nUBwJ4MT9BjdIzhEg/viewform?usp=sf_link'
    }

    return (
        <Background >
            <img className={"background"} src={"../images/HomeBackgroun3.jpg"} alt={"Background"} />
            <div className={"content"}>
                <div className={"header"}>
                    <img src={"../images/Logo2.png"} style={{ filter: "invert(1)" }}></img>
                </div>
                {/* <img className={"presentation-image"} src={"../images/Tatoo1.png"}></img> */}
                {/* <div className={"space"}></div> */}
                <div className={"vertical-center"}>

                    <p className={"info"}>
                        Já teve dificuldade em encontrar um tatuador ?
                </p>
                    <p className={"info"}>
                        Não consegue se contactar com seu tatuador ?
                </p>
                    <Button onClick={handleClick} className={"button-link"}>Agende seu orçamento</Button>
                </div>
            </div>
        </Background>
    )
}