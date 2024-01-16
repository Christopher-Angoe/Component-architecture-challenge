import styled from 'styled-components';

export const StyledContainer = styled.div`

.container{
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    padding: 0;
    box-sizing: border-box;
    margin: 0;
}

.container .left{
    width: 57%;
    height: 100vh;
    padding-top: 100px;
    padding-left: 100px;
   
}

.container .left img{
    height: 100%;
}

.container .right{
    display: flex;
 
    justify-content: center;
    align-items: center;
    width: 40%;
    
}

.container .right .primary-btn{
    position: absolute;
    margin-top:00px;
    top: 75%;
}

.container .right .navbar{
    display: flex;
    flex-direction: row;
    gap: 150px;
    position: absolute;
    top: 30px;
}

.container .right .navbar p{
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.8px;
}

.container .right .navbar button{
    border: none;
    background: white;
    display: inline-flex;
    gap: 10px;
}

.container .right .navbar button img{
    margin-top: -2px;
    height: 20px;
    width: 20px;
}

section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

section h1{
    font-size: 30px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.2px;
    
}

section p {
    color: #808080;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.08px;
}

section span{
    color: var(--Gray-800, #A6A6A6);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.08px;
}

section span a{
    
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.08px;
    background: linear-gradient(118deg, #1275D0 21.37%, #62AEF3 69.77%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.completion{
    padding: 50px;
    gap: 20px;
}

.completion img{
    width: 400px;
    height: 400px;
}
.signup{
    padding-top: 100px;
}
.signup form{
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding-top: 50px;
}

.signup form div{
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
}

.signup form div label{
    color: #808080;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.08px;
}

.signup form div input{
    display: flex;
    width: 300px;
    height: 40px;
    padding: 8px 25px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    border-radius: 4px;
    border: 1px solid #999;
}

.upload-photos{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 12px;
}

.upload-photos .title{
    margin-top: -50px;
}

#image-div{
    width: 139px;
    height: 139px;
    background-color: #B3B3B3;
    border-radius: 50%;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

#image-div img{
    width: 139px;
    height: 139px;
    border-radius: 50%;
}


.upload-btns{
    display: flex;
    flex-direction: column;
    
}


.primary-btn, .primarybtn{
    display: flex;
    width: 300px;
    height: 40px;
    padding: 14px 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: none;
    margin-bottom: 20px;
    border-radius: 4px;
    background: linear-gradient(0deg, #0267FF 0%, #0267FF 100%), linear-gradient(101deg, #6425D3 21.56%, #A259FF 84.43%), linear-gradient(0deg, #0267FF 0%, #0267FF 100%), linear-gradient(118deg, #1275D0 21.37%, #62AEF3 69.77%);
}

.ghost-btn{
    display: flex;
    width: 300px;
    height: 40px;
    padding: 14px 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: none;
    margin-bottom: 20px;
    border-radius: 4px;
    background: transparent;
}

.google-btn{
    display: flex;
    width: 300px;
    padding: 5px 31.5px;
    align-items: center;
    gap: 16px;
    border-radius: 4px;
    border: 1px solid #999;
    margin-top: 100px;
    margin-bottom: 20px;
}

.add-btn{
    background: none;
    border: 1px solid #B3B3B3;
    border-radius: 4px;
    display: inline-flex;
    height: 36px;
    padding:16px 30px ;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    margin-top: 50px;
}

.emoji{
    height: 20px;
    width: 20px;
    margin-top: -40px;
    margin-left: 5px;
}

.interests{
    display: flex;
    justify-content: center;
    align-items: center;
    word-wrap: normal;
    padding: 50px;
    margin-top: -100px;
}

.categories{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px 0;
}
.square{
    width: 155px;
    height: 150px;
    padding: 20px 30px;
    flex-shrink: 0;
    border-radius: 8px;
    opacity: 0.7;
}

.square h2{
    opacity: 1;
}

.gaming{
    background: #DF9BE0;
    
}
.read{
    background: #2575D1;
}
.fashion{
    background: #CFC;
}
.music{
    background: #FFC299;
}

.recom{
    margin-top: -100px;
    gap: 20px;
    padding: 50px;
}

.recom-btns{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.recom-btns button{
    border: 1px solid;
    border-radius: 100px;
    background: none;
    display: flex;
    width: 232px;
    padding: 6px 0px;
    justify-content: center;
    align-items: center;
    gap: 8px;
}

`