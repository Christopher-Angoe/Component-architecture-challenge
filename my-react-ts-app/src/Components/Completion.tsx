import { ribbonsImg } from "../assets"
import { StyledContainer } from "./styles"


const Completion = () => {
  return (
    <>
    <StyledContainer>
      <section className="completion">
      <h1>Woohoo!</h1>
      <p>Hey there! Your registration is complete, get excited for the ultimate quiz experience of your life. Let's do this!</p>

      <div>
          <img src={ribbonsImg} alt="" />
      </div>

      
      </section>
    </StyledContainer>
    </>
  )
}

export default Completion