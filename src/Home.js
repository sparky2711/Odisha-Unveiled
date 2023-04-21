import React from "react";
import Banner from "./home/Banner";
import Contents from "./home/Contents";
import FoodSlider from './Foodslider';
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { Content, Maincontents, Bigcontents,Contentt } from "./Maincontents";
import "./home/contents.css";
import ImgSlider from "./components/ImgSlider";
const foods = [
  {
    id: 1,
    name: 'Pizza',
    description: 'Delicious pizza with fresh tomato sauce and mozzarella cheese.',
    image: 'https://source.unsplash.com/1IMmJvRp5N0/800x600',
  },
  {
    id: 2,
    name: 'Burger',
    description: 'Juicy burger with crispy lettuce, tomato, and onion.',
    image: 'https://source.unsplash.com/y8Ngwq34_Ak/800x600',
  },
  {
    id: 3,
    name: 'Taco',
    description: 'Tasty taco with seasoned ground beef, cheese, and lettuce.',
    image: 'https://source.unsplash.com/tZc3vjPCk-Q/800x600',
  },
  {
    id: 4,
    name: 'Taco',
    description: 'Tasty taco with seasoned ground beef, cheese, and lettuce.',
    image: 'https://source.unsplash.com/tZc3vjPCk-Q/800x600',
  },
  {
    id: 5,
    name: 'Taco',
    description: 'Tasty taco with seasoned ground beef, cheese, and lettuce.',
    image: 'https://source.unsplash.com/tZc3vjPCk-Q/800x600',
  },
];
class Home extends React.Component {
  state = {
    maincontent: Maincontents,
    bigcontent: Bigcontents,
    contents: Content,
    contentss: Contentt,
  };
  render() {
    return (
      <div>
        <Banner />
        <br></br>
        <div className="Lool">
          <h2>Top three attractions</h2>
        </div>

        <div className="home__cont">
          {this.state.maincontent.map((item) => {
            return (
              <div key={item.id}>
                <Contents
                  id={item.id}
                  img={item.img}
                  title={item.title}
                  description={item.description}
                />
              </div>
            );
          })}
        </div>
        <div className="Lool">
          <h2>Extraordinary Reasons to Visit ODISHA</h2>
        </div>
        <Container>
          <ImgSlider/>
        </Container>
        <div className="Lool">
          <h2>Explore More</h2>
        </div>
        <div className="home__cont">

          {this.state.contents.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/result/${item.id}`} className="link">
                  <Contents
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    // amount={item.price}
                    description={item.description}
                  />
                </Link>
              </div>
            );
          })}
        </div>
        <div className="home__cont">
          {this.state.contentss.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/result/${item.id}`} className="link">
                  <Contents
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    // amount={item.price}
                    description={item.description}
                  />
                </Link>
              </div>
            );
          })}
        </div>
        <div className="Lool">
          <h2>Cuisine</h2>
        </div>
        <div><FoodSlider foods={foods} /></div>
      </div>
    );
  }
}
export default Home;

const Container = styled.main`
    height: 500px; /* set height to match the height of the images in the slider */
    width: 100%; /* set width to 100% to match the width of the image slider */
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
    &:before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        background-size: cover; /* add this to make sure the background image fills the entire container */
    }
`
