import React from "react"
import HomeContainer from "./home-container.component"
import Carousel from "react-multi-carousel"

// TODO
const HomeCarousal: React.FC = props => {
  return (
    <HomeContainer>
      <Carousel
        responsive={{
          all: {
            breakpoint: {
              max: 10000,
              min: 0
            },
            items: 3
          }
        }}>
        <img src="https://picsum.photos/200"></img>
        <img src="https://picsum.photos/200"></img>
        <img src="https://picsum.photos/200"></img>
      </Carousel>
    </HomeContainer>
  )
}

export default HomeCarousal
