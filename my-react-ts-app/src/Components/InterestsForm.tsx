import { StyledContainer } from "./styles"


const InterestsForm = () => {
  return (
    <>
        <StyledContainer>
            <section className="interests">
            <div>
                <h1>Let’s get started by picking some interests</h1>

                <p>Alright, let's pick something we're interested in and get started!</p>
            </div>

            <div className="categories">
                <div className=" square gaming">
                    <h2>Gaming</h2>
                    <button className="add-btn">Add</button>
                </div>
                <div className=" square fashion">
                    <h2>Fashion</h2>
                    <button className="add-btn">Add</button>
                </div>
                <div className=" square music">
                    <h2>Music</h2>
                    <button className="add-btn">Add</button>
                </div>
                <div className=" square read">
                    <h2>Reading</h2>
                    <button className="add-btn">Add</button>
                </div>
            </div>

            
            </section>
        </StyledContainer>
    </>
  )
}

export default InterestsForm