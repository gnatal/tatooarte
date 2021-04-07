import React from 'react';
import { Background } from '../../styles/Home/Worker';

export default function Worker() {
    return (
        <Background>
            <div>
                <h1 className={"header"}>O tatuador certo pra você</h1>
                <p className={"text"}>Conheça o trabalho de cada um
                 de nossos tatuadores</p>
                <div className={'link'}>
                    <a href={"https://docs.google.com/forms/d/e/1FAIpQLScQNRrEg09fQgX_VBHG1-V5wCk-vJAW2nUBwJ4MT9BjdIzhEg/viewform?usp=sf_link"}>Rapido é descomplicado </a>

                </div>
                <div className={"banner"}>
                    <img src={'../images/AndreOliver.jpeg'} alt={"Du francis"} />
                </div>
            </div>
        </Background>
    );
}