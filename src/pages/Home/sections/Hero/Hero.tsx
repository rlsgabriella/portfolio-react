import { styled } from "@mui/material"
import { Grid } from "@mui/material"
import { Container } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.png"

const Hero = () => {

    const StyledHero = styled("div")(() =>({
        backgroundColor: "black"
    }))

     const StyledImg = styled("img")(() => ({
       width: "25%",
       borderRadius: "50%"
     }));

  return (
    <>
      <StyledHero>
        <Container>
          <Grid container spacing={2}>
            <Grid size={4}>
              <StyledImg src={Avatar} />
            </Grid>
            <Grid size={8}></Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
}

export default Hero
