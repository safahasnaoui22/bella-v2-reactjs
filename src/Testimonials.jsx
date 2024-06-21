import "./Testimonials.css";
import { useEffect } from "react";

const quotes = [
  {
    text: "L'hôtel est magnifique, avec des chambres spacieuses et un personnel très accueillant.",
    author: "Pelican Steve",
   
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample3.jpg"
  },
  {
    text: "Vue spectaculaire et emplacement idéal, nous avons passé un excellent week-end.",
    author: "Max Conversion",
 
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample47.jpg"
  },
  {
    text: "Parfait pour un voyage daffaires, avec des installations modernes et un excellent service",
    author: "Eleanor Faint",

    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample17.jpg"
  }
];

const Testimonials = () => {
  useEffect(() => {
    const testimonialCards = document.querySelectorAll(".snip1139");
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            testimonialCards[index].classList.add("animate-fade-in-up");
          }, index * 200); // Adjust the delay as needed
        } else {
          testimonialCards[index].classList.remove("animate-fade-in-up");
        }
      });
    });

    testimonialCards.forEach(card => {
      observer.observe(card);
    });

    return () => {
      testimonialCards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);
  return (
    <div>
    <h1 className="restaurenttitle" >Témoignages</h1>
        <div className="quote-container">
      
      {quotes.map((quote, index) => (
        <figure   className=" snip1139" key={index}>
          <blockquote>
            {quote.text}
            <div className="arrow"></div>
          </blockquote>
          <img src={quote.img} alt={`sample${index + 1}`} />
          <div className="author">
            <h5>{quote.author} <span>- {quote.source}</span></h5>
          </div>
        </figure>
      ))}
    </div>
    </div>
  
  );
};

export default Testimonials 

