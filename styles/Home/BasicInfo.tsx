import styled from 'styled-components';

const Background = styled.div`
    position: relative;
    .background{
        position: absolute;
        object-fit:cover;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        opacity:1;
        z-index: -1;
    }

    .space{
        @media(min-width: 900px){
            height: 20vh;
            width: 100%;
        }
        height: 40vh;
        width: 100%;
    }

    .vertical-center {
        margin: 0;
        width: 90%;
        position: absolute;
        top: 60%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        left:10%;
    }

    .content{
        width: 100%;
        height: 100vh;
        vertical-align:middle;
        @media(min-width: 900px){
            text-align: left;
        }
        text-align: left;
    }

    .presentation-image{
        width: 90vw;
        margin: 20px auto;
        border-radius: 20px;
        height:30vh;
        object-fit:cover;
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
        margin: 10px auto;
        width: 90vw;
        font-weight: lighter;
        @media (min-width: 600px){
            max-width: 600px;
            margin-left: 30px;
        }
        text-shadow: 2.5px 2.5px rgba(120,120,120,0.5);
        color: #fff;
        font-size: 1.6rem;
    }

    .button-link{
        padding: 10px;
        font-weight:bold;

        @media(min-width: 900px){
            margin-left: 30px;
            width: 600px;
        }
        
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