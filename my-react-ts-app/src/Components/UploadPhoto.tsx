import { personImg } from "../assets"
import { StyledContainer } from "./styles"


const UploadPhoto = () => {
  return (
    <>
      <StyledContainer>
        <section className="upload-photos">
        <div className="title">
            <h1>Add Photo</h1>
            <p>Add a photo so other members know who you are</p>
        </div>

        <div id="image-div">
            <img src={personImg} alt="" />
        </div>


        <div className="upload-btns">
            <button className="primarybtn">Upload a photo</button>
            <button className="ghost-btn">Skip</button>
        </div>
        </section>
      </StyledContainer>
    </>
  )
}

export default UploadPhoto