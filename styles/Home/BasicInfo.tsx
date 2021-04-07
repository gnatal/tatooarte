import styled from 'styled-components';

const Background = styled.div`
    position: relative;
    .background{
        position: absolute;
        object-fit:cover;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        opacity:0.6;
        z-index: -1;
    }

    .content{
        width: 100vw;
        height: 100vh;
        text-align: center;
    }


    .header{
        margin: 0px auto;
        width: 100%;
        height: 10vh;
        padding: 10px;
        box-sizing: border-box;
        color:#fff;
        font-size: 2rem;
        font-weight: bold;
        background: #222;
        img{
            object-fit: contain;
            width: 100%;
            height: 100%;
        }
    }


    .info{
        margin: 30px auto;
        width: 90vw;
        color:#fff;
        font-size: 1.6rem;
        font-weight: bold;
    }

    .button-link{
        padding: 10px;
        font-weight:bold;
        
        @media (max-width: 600px){
            width: 90vw;
        }
        @media (max-width: 900px){
            width: 80vw;
        }

        max-width: 600px;
    }


`

export default Background;