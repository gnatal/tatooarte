import React from 'react';
import { Background } from '../../styles/Home/Client';
import { BsArrowRight } from 'react-icons/bs';

export default function Client() {
    return (
        <Background>
            <div className={"content"}>
                <div>
                    <h1 className={"header"}>A tatuagem certa pra você</h1>
                    <p className={"text"}>Com o tatuador certo pra você
                Com um preço que cabe no seu orçamento</p>
                    <div className={'link centered-label'}>
                        <a href={"https://docs.google.com/forms/d/e/1FAIpQLScQNRrEg09fQgX_VBHG1-V5wCk-vJAW2nUBwJ4MT9BjdIzhEg/viewform?usp=sf_link"}>Rapido é descomplicado </a>
                        <BsArrowRight color={"#fff"} style={{ marginLeft: '2px' }} size={20} />
                    </div>
                </div>
                <div className={"banner"}>
                    <img src={'../images/FlavioDuFrancis.jpeg'} alt={"Du francis"} />
                </div>
            </div>
        </Background>
    )
}