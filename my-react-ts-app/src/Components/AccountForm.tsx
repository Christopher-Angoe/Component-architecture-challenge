import { emojiImg, googleImg } from "../assets"
import { StyledContainer } from "./styles"


const AccountForm = () => {
  return (
    <>  
        <StyledContainer>
            <section className="signup">
                <form action="">
                <h1>Create Account</h1>

                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='John Doe' />
                </div>

                <div>
                    <label htmlFor="">E-mail</label>
                    <input type="email" placeholder='johndoe@gmail.com' />
                </div>

                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='***********' />
                    <img src={emojiImg} alt="" className="emoji"/>
                </div>
            </form>

           

            <button className="google-btn">
                <img src={googleImg} alt="" />
                Sign up with Google
            </button>

            <span>Already have an account? <a href="">Log in</a></span>
        </section>
        </StyledContainer>
    </>
  )
}

export default AccountForm