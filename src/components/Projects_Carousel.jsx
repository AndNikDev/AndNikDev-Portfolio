import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../assets/styles/Projects_Carousel.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
};

// Datos del carrusel
const carouselData = [
  {
    title: "Toyota Supra",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    demoLink: "https://example.com/demo1",
    codeLink: "https://github.com/example1",
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/2023-lamborghini-urus-performante-0476-644a6d5d75484.jpg?crop=0.663xw:0.560xh;0.131xw,0.281xh&resize=2048:*",
  },
  {
    title: "Lamborghini Aventador",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    demoLink: "https://example.com/demo2",
    codeLink: "https://github.com/example2",
    imageUrl: "https://example.com/lamborghini-image.jpg",
  },
  // Añadir más objetos de datos aquí
];

const Projects_Carousel = () => {
  return (
    <div className="carousel-container">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        ssr={true} // Server-side rendering
        customTransition="all 0.5s"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {carouselData.map((item, index) => (
          <div key={index} className="container__card">
            <div className="wrapper">
              <div className="banner-image">
                <img srcSet={item.imageUrl} alt={item.title} />
              </div>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
            <div className="button-wrapper">
              <a href={item.demoLink} target="_blank" rel="noopener noreferrer">
                <button className="btn outline">Demo</button>
              </a>
              <a href={item.codeLink} target="_blank" rel="noopener noreferrer">
                <button className="btn fill">Code</button>
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Projects_Carousel;
