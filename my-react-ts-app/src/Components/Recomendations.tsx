import { addImg } from "../assets"
import { StyledContainer } from "./styles"


const Recomendations = () => {
  return (
    <>
      <StyledContainer>
        <section className="recom">
        <div>
          <h1>Hey there! What brings you here?</h1>

          <p>This will help us make great recommendations.</p>
        </div>

        <div className="recom-btns">
          <button>
            <img src={addImg} alt="" />
            Social Interaction
          </button>

          <button>
            <img src={addImg} alt="" />
            Personal development
          </button>

          <button>
            <img src={addImg} alt="" />
            Entertainment and Fun 
          </button>

          <button>
            <img src={addImg} alt="" />
            Rewards and recognition
          </button>
        </div>


        </section>
      </StyledContainer>
    </>
  )
}

export default Recomendations