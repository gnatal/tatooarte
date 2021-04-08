import styled from 'styled-components';

export const Background = styled.div`

    width: 100%;
    height: 100vh;
    background: #1D1D1D;

    .content{
        text-align:left;
        @media(min-width: 900px){
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }

    .header{
        width: 90%;
        margin: 0px auto;
        padding-top: 10px;
        text-transform: capitalize;
        padding-bottom: 10px;
        font-size: 1.75rem;
        color: #fff;
        box-sizing: border-box;
        text-decoration: underline;

    }

    .text{
        width: 90%;
        margin: 0px auto;
        padding: 0px;
        font-size: 1.75rem;
        line-height: 1.16;
        color: #f44336;
        box-sizing: border-box;
    }

    .link{
        
        width: 90%;
        padding-top: 20px;
        text-align:left;
        margin: 0px auto;
        a{
                color: #fff;
            font-weight: 500;
            letter-spacing: -0.03em;
            font-size: 1.125rem;
            line-height: 1.2;
            text-decoration: none;

        }
    }

    .centered-label {
        display: flex;
        align-items: center;
    }

    .banner{


        width: 90%;
        margin: 10px auto;
        
        @media(min-width: 900px){
                height: 100vh;
        }
        img{
            border-radius: 20px;
            width: 100%;
            height: 50vh;
            object-fit: cover;
            @media(min-width: 900px){
                height: 80%;
                object-fit: contain;

            }


        }
    }


`