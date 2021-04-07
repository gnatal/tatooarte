import styled from 'styled-components';

export const Background = styled.div`

    width: 100%;
    height: 100vh;
    background: #fff;
    opacity: 0.9;

    .content{
        margin-top: 30vh;
        text-align:left;
        mix-blend-mode: difference;
    }

    .header{
        width: 90%;
        margin: 0px auto;
        padding-top: 10px;
        text-transform: capitalize;
        padding-bottom: 10px;
        font-size: 1.75rem;
        color: #f44336;
        box-sizing: border-box;
        text-decoration: underline;

    }

    .text{
        width: 90%;
        margin: 0px auto;
        padding: 0px;
        font-size: 1.75rem;
        line-height: 1.16;
        color: rgb(17, 17, 17);
        box-sizing: border-box;
    }

    .link{
        
        width: 90%;
        padding-top: 20px;
        text-align:left;
        margin: 0px auto;
        a{
                color: #f44336;
            font-weight: 500;
            letter-spacing: -0.03em;
            font-size: 1.125rem;
            line-height: 1.2;
            text-decoration: none;

        }
    }

    .banner{
        width: 90%;
        margin: 10px auto;
        img{
            border-radius: 20px;
            width: 100%;
            height: 50vh;
            object-fit: cover;

        }
    }


`