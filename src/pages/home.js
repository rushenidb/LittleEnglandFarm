import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import slide1 from '../images/slide_img1.jpg';
import slide2 from '../images/slide_img2.jpg';
import slide3 from '../images/slide_img3.jpg';
import clothing from '../images/clothing.jpg';
import alcoholic from '../images/alcohol.jpg';
import gift from '../images/gift.jpg';
import book from '../images/book.jpg';
import birds from '../images/birds.png';  
import hay from '../images/hay.png';
import farm from '../images/farm.jpg';
import goat from '../images/goat.png';
import tree from '../images/tree.png';
import chicken from '../images/chicken.png';
import owl from '../images/owl.png';
import '../styles/home.css'; 
import PageTurn from '../pages/PageTurn';

export default function Home() {

    // State for visibility tracking
    const [visibleElements, setVisibleElements] = useState(new Set());
  
    // Create a ref for each section you want to track
    const refs = useRef([]);
  
    // Function to add ref to refs array
    const addToRefs = (el) => {
      if (el && !refs.current.includes(el)) {
        refs.current.push(el);
      }
    };
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set(prev).add(entry.target));
          }
        });
      });
  
      // Observe each ref
      refs.current.forEach(ref => {
        if (ref) {
          observer.observe(ref);
        }
      });
  
      return () => {
        // Cleanup the observer
        observer.disconnect();
      };
    }, []);

  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    customPaging: function(i) {
      return (
        <a>
          <span className="diamond-icon"></span>
        </a>
      );
    },
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: dots => (
      <div style={{ position: "absolute", bottom: "25px", width: "100%" }}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    maxHeight: '600px',
  };

  const productSectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      console.log('Scrolling...');
      const productSection = productSectionRef.current;
      const image = imageRef.current;
    
      if (productSection && image) {
        const rect = productSection.getBoundingClientRect();
    
        // Check if any part of the section is in view
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          image.classList.add('fixed-image'); // Add fixed class if in view
        } else {
          image.classList.remove('fixed-image'); // Remove fixed class if out of view
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // FAQ data
  const faqData = [
    {
      question: "What are your opening hours?",
      answer: "We are open Wednesday-Sunday, 9:30am–4:30pm including all Bank Holidays. The Bar is open until 4:30pm and food is served until 3pm, Wednesday–Sunday."
    },

    {
      question: "Do we need to book to visit the Farm Shop/Big View Café?",
      answer: "No need to book, just turn up. Our amazing team will be on hand to help if you have any questions or queries on the day. Please note, we are a card only site."
    },

    {
      question: "Are you dog friendly?",
      answer: "Well behaved dogs on leads are most welcome on site and at the Big View Café, just not in the shop itself."
    },

    {
      question: "What food is offered?",
      answer: "We have a fresh, seasonal menu offered by our fantastic friends at Baste (@baste.food on Instagram). The Bar is open until 4:30pm and food is served until 3pm, Wednesday-Sunday."
    },

    {
      question: "Where else can I visit in the local area?",
      answer: "- The Shack in Chipping Norton -The Old Mill Antiques- Jaffe and Neale Bookshop"
    },
    // Add more FAQs as needed
  ];

  // State for FAQ section
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  
  return (
    <div>
      <Slider {...settings}>
        <div className="slide">
          <img src={slide1} className="slide1" alt="Product 1" style={imageStyle} />
          <div className="slide-text painted-paradise">
            <p className="paradise-p">Welcome to Little England Farm</p>
            <h1 className="paradise-h1">Where Every Day Feels Like Home</h1>
            {/* <h6 className="paradise-h6">Where Every Day Feels Like Home</h6> */}
          </div>
        </div>
        <div className="slide">
          <img src={slide2} alt="Product 2" style={imageStyle} />
          <div className="slide-text digdope-regular">
            <h5 className="digdope-h5">Come check out our cattle farm!</h5>
          </div>
        </div>
        <div className="slide">
          <img src={slide3} alt="Product 3" style={imageStyle} />
          <div className="slide-text digdope-regular">
            <h5 className="digdope-h5">We not only provide dairy products but also have a Strawberry factory!</h5>
          </div>
        </div>
      </Slider>

     {/* Bestsellers Section */}
<section className="bestsellers">
<div className="chicken">
    <img src={chicken} alt="chichen trio" className="chicken" />
  </div>
  <div className="tree-behind-text">
    <img src={tree} alt="tree" className="tree" />
  </div>
  <div className="bestsellers-overlay">
    <p>Shop</p>
    <h2 className="section-title">Our Bestsellers</h2>
    <p className="section-subtitle">
      All of the products we sell in the shop are produced either by us here at Little England Farm or by other fantastic local businesses.
    </p>
    <a href="#" className="bestsellers-link">Shop Our Bestsellers</a>
  </div>
</section>

      {/* Our Range Section */}
      <section className="our-range">
      <div className="owl-in-right">
    <img src={owl} alt="owl" className="owl" />
  </div>
        <p>Explore</p>
        <h2 className="section-title">Our Farm</h2>
        <div className="range-items">
          <div className="range-item">
            <img src={clothing} alt="Clothing" />
            <p>Farm Visit</p>
          </div>
          <div className="range-item">
            <img src={alcoholic} alt="Alcoholic Beverages" />
            <p>Dairy Products</p>
          </div>
          <div className="range-item">
            <img src={gift} alt="Gifts" />
            <p>Strawberry Farm</p>
          </div>
        </div>
        <div className="shop-and-owl">
    <div className="owl-after-shop">
      <img src={owl} alt="owl" className="owl" />
    </div>
    <a href="#" className="shop-all">Check All</a>
  </div>
      </section>

{/* More Than Just a Farm Shop Section */}
<section className="more-than-section">
  <h2 className="more-than-title">More <br/> Than Just<br/>a Farm Shop</h2>


  <div className="more-than-content">
    <p className="more-than-text-left">
      WHAT SHOULD WE EXPECT WHEN VISITING Little england FARM SHOP? 
    </p>
    <p className="left-text">Though small, 
      our farm shop is full of local edible delights and gifts. Our Big View Café 
      is also based on site, selling Jeremy's own Hawkstone beer and literally the 
      best hamburgers... in the world. Table seating is available within our lambing 
      barn and outside at THE BIG VIEW. Please note, the shop queue and food queue 
      may be shut off early depending on how busy the site is.</p>
    <p className="more-than-text-right">
      WHO WE ARE
    </p>
    <p className="right-text">Opened in 2020 by Jeremy Clarkson and Lisa Hogan, Little england 
    Farm hosts a small barn full of local goods.</p>
  </div>
  <div className="birds-on-wire">
          <img src={birds} alt="birds on wire" className='birds'/>
</div>
</section>


<section className="product-of-the-month" ref={productSectionRef}>
      <div className="content-container">
        <div className="text-content">
          <p className="product">The Clarkson</p>
          <h2 className="section-title2">PRODUCT OF THE <br />MONTH</h2>
          <a href="#" className="product-link">Home to Roost Hardback Book</a>
          <p className="section-subtitle">
            It's been another memorable year on Little England Farm <br />- will the chickens finally come home to roost?<br />
          </p>
          <p className="section-subtitle2">So, that went well ...<br /></p>
          <p className="section-subtitle2">
            The spring barley crop failed. Just like the oil seed rape. And the durum wheat. Then the oats turned the colour of a hearing aid and the mushrooms went mouldy. Farming sheep, pigs and cows was hardly more lucrative. Jeremy would be better off trying to breed ostriches.<br />
          </p>
          <p className="section-subtitle2">
            But in the face of uncooperative weather, the relentless realities of the agricultural economy, bureaucracy, a truculent local planning department and the world’s persistent refusal to recognise his ingenuity and genius, our hero’s not beaten yet. Not while the farm shop’s still doing a roaring trade in candles that smell like his knacker hammock, he isn’t.<br />
          </p>
          <p className="section-subtitle2">
            On the face of it, the challenges of making a success of Diddly Squat are enough to have you weeping into your (Hawkstone) beer, but misery loves company and in girlfriend Lisa, Farm Manager Kaleb, Cheerful Charlie and Gerald his Head of Security Jeremy knows he’s got the best. And it’s hard for a chap to feel too gloomy about things when there’s a JCB telehandler, a crop-spraying hovercraft and a digger in the barn.<br />
          </p>
          <p className="section-subtitle2">
            Because as a wise man* once said, ‘there’s no man alive who wouldn’t have fun with a digger ...’<br />
          </p>
          <p className="section-subtitle2">
            *Jeremy<br />
          </p>
          <p className="section-subtitle4">LKR 7,800.00</p>
          <a href="#" className="qty">-  1  +</a>
          <a href="#" className="shop-all">Add to Cart</a>
        </div>
        {/* <div className="imageright" ref={imageRef}>
          <img src={book} alt="best selling book" className="book" />
        </div> */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <PageTurn />
    </div>
      </div>
    </section>

{/* FAQ Section */}
<section className="faq">
<div className="content-container">
<div className="second-hay-image">
      <img src={hay} alt="secondhay" className="hay2"/>
    </div>
<div className="text-content">
        <p className="frequently-asked">Frequently Asked</p>
        <h2 className="section-title3">QUESTIONS</h2>
        <p className="section-subtitle3">Got a burning question? You may find the <br/>answer here...</p>
        
        <div className="faq-items">
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                <span>{faq.question}</span>
                <span className="faq-toggle">{openFaqIndex === index ? '-' : '+'}</span>
              </div>
              {openFaqIndex === index && <div className="faq-answer">{faq.answer}</div>}
              <div className="faq-divider"></div>
            </div>
          ))}
        </div>
        </div>
        <div className="hay-image">
      <img src={hay} alt="hay" className="hay"/>
    </div>
        </div>
      </section>


      <section className="image-after-faq">
      {/* <div className="farm">
      <img src={farm} alt="farm Animals" className="farm-animals"/>
    </div> */}
    <div className="stockist-section">
      <div className="stockist-background">
        {/* Add your background image here */}
        <img src={farm} alt="Background" className="background-image" />
      </div>
      <div className="stockist-content">
        <div className="stockist-text">
          <img src={goat} alt="Goat Icon" className="goat-icon-left" />
          <h2 className="stockist-title">Want to become a <br/><span>Part of the fam?</span></h2>
          <p className="stockist-subtitle">
            If you are a likeminded business and want to stock some of our fabulous products, please get in touch.
          </p>
          <button className="contact-button">CONTACT US</button>
          <img src={goat} alt="Goat Icon" className="goat-icon-right" />
        </div>
      </div>
      
      {/* Follow Us Section */}
      <div className="follow-us">
        <p className="follow-text">Follow our tracks at <br/><span>@LittleEngland.FARMSHOP</span> </p>
        {/* <p className="instagram-handle">@LittleEngland.FARMSHOP</p> */}
      </div>
    </div>
      </section>
    </div>
  );
}
