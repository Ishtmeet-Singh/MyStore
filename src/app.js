import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navigation from './navigation/main'
import Footer from './navigation/footer'
class App extends Component{
  constructor(props){
    super(props)
    this.state={
      featured: [
        {
          itemName: "Oakley Kickback",
          price: "$155.00",
          imageLink: "img/shop/products/03.jpg",
          href: "#"
        },
        {
          itemName: "Oakley Kickback",
          price: "$155.00",
          imageLink: "img/shop/products/03.jpg",
          href: "#"
        },
        {
          itemName: "Oakley Kickback",
          price: "$155.00",
          imageLink: "img/shop/products/03.jpg",
          href: "#"
        }
      ]
    }
  }
    render(){
      let something = this.state.featured.map((curr)=>{
        return (<div className="grid-item">
        <div className="product-card">
          <div className="rating-stars"><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star" />
          </div><a className="product-thumb" href={curr.href}><img src={curr.imageLink} alt="Product" /></a>
          <h3 className="product-title"><a href={curr.href}>{curr.itemName}</a></h3>
          <h4 className="product-price">{curr.price}</h4>
          <div className="product-buttons">
            <button className="btn btn-outline-secondary btn-sm btn-wishlist" data-toggle="tooltip" title="Whishlist"><i className="icon-heart" /></button>
            <button className="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!">Add to Cart</button>
          </div>
        </div>
      </div>);
      }) 
        return (
          <div>
          <div>
          {/*Navigation*/}
          <Navigation/>
          {/* Off-Canvas Wrapper*/}
          <div className="offcanvas-wrapper">
            {/* Page Content*/}
            {/* Main Slider*/}
            <section className="hero-slider" style={{backgroundImage: 'url(img/hero-slider/main-bg.jpg)'}}>
              <div className="owl-carousel large-controls dots-inside" data-owl-carousel="{ &quot;nav&quot;: true, &quot;dots&quot;: true, &quot;loop&quot;: true, &quot;autoplay&quot;: true, &quot;autoplayTimeout&quot;: 7000 }">
                <div className="item">
                  <div className="container padding-top-3x">
                    <div className="row justify-content-center align-items-center">
                      <div className="col-lg-5 col-md-6 padding-bottom-2x text-md-left text-center">
                        <div className="from-bottom"><img className="d-inline-block w-150 mb-4" src="img/hero-slider/logo02.png" alt="Puma" />
                          <div className="h2 text-body text-normal mb-2 pt-1">Puma Backpacks Collection</div>
                          <div className="h2 text-body text-normal mb-4 pb-1">starting at <span className="text-bold">$37.99</span></div>
                        </div><a className="btn btn-primary scale-up delay-1" href="/shopping#/shop-grid">View Offers</a>
                      </div>
                      <div className="col-md-6 padding-bottom-2x mb-3"><img className="d-block mx-auto" src="img/hero-slider/02.png" alt="Puma Backpack" /></div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="container padding-top-3x">
                    <div className="row justify-content-center align-items-center">
                      <div className="col-lg-5 col-md-6 padding-bottom-2x text-md-left text-center">
                        <div className="from-bottom"><img className="d-inline-block w-200 mb-4" src="img/hero-slider/logo01.png" alt="Converse" />
                          <div className="h2 text-body text-normal mb-2 pt-1">Chuck Taylor All Star II</div>
                          <div className="h2 text-body text-normal mb-4 pb-1">for only <span className="text-bold">$59.99</span></div>
                        </div><a className="btn btn-primary scale-up delay-1" href="/shopping#/shop-single">Shop Now</a>
                      </div>
                      <div className="col-md-6 padding-bottom-2x mb-3"><img className="d-block mx-auto" src="img/hero-slider/01.png" alt="Chuck Taylor All Star II" /></div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="container padding-top-3x">
                    <div className="row justify-content-center align-items-center">
                      <div className="col-lg-5 col-md-6 padding-bottom-2x text-md-left text-center">
                        <div className="from-bottom"><img className="d-inline-block mb-4" src="img/hero-slider/logo03.png" style={{width: 125}} alt="Motorola" />
                          <div className="h2 text-body text-normal mb-2 pt-1">Smart Watch Moto 360 2nd</div>
                          <div className="h2 text-body text-normal mb-4 pb-1">for only <span className="text-bold">$299.99</span></div>
                        </div><a className="btn btn-primary scale-up delay-1" href="/shopping#/shop-single">Shop Now</a>
                      </div>
                      <div className="col-md-6 padding-bottom-2x mb-3"><img className="d-block mx-auto" src="img/hero-slider/03.png" alt="Moto 360" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Top Categories*/}
            <section className="container padding-top-3x">
              <h3 className="text-center mb-30">Top Categories</h3>
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <div className="card mb-30"><a className="card-img-tiles" href="/shopping#/shop-grid">
                      <div className="inner">
                        <div className="main-img"><img src="img/shop/categories/01.jpg" alt="Category" /></div>
                        <div className="thumblist"><img src="img/shop/categories/02.jpg" alt="Category" /><img src="img/shop/categories/03.jpg" alt="Category" /></div>
                      </div></a>
                    <div className="card-body text-center">
                      <h4 className="card-title">Clothing</h4>
                      <p className="text-muted">Starting from $49.99</p><a className="btn btn-outline-primary btn-sm" href="/shopping#/shop-grid">View Products</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="card mb-30"><a className="card-img-tiles" href="/shopping#/shop-grid">
                      <div className="inner">
                        <div className="main-img"><img src="img/shop/categories/04.jpg" alt="Category" /></div>
                        <div className="thumblist"><img src="img/shop/categories/05.jpg" alt="Category" /><img src="img/shop/categories/06.jpg" alt="Category" /></div>
                      </div></a>
                    <div className="card-body text-center">
                      <h4 className="card-title">Shoes</h4>
                      <p className="text-muted">Starting from $56.00</p><a className="btn btn-outline-primary btn-sm" href="/shopping#/shop-grid">View Products</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="card mb-30"><a className="card-img-tiles" href="/shopping#/shop-grid">
                      <div className="inner">
                        <div className="main-img"><img src="img/shop/categories/07.jpg" alt="Category" /></div>
                        <div className="thumblist"><img src="img/shop/categories/08.jpg" alt="Category" /><img src="img/shop/categories/09.jpg" alt="Category" /></div>
                      </div></a>
                    <div className="card-body text-center">
                      <h4 className="card-title">Bags</h4>
                      <p className="text-muted">Starting from $27.00</p><a className="btn btn-outline-primary btn-sm" href="/shopping#/shop-grid">View Products</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center"><a className="btn btn-outline-secondary margin-top-none" href="/shopping#/shop-categories">All Categories</a></div>
            </section>
            {/* Promo #1*/}
            <section className="container-fluid padding-top-3x">
              <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-6 mb-30">
                  <div className="rounded bg-faded position-relative padding-top-3x padding-bottom-3x"><span className="product-badge text-danger" style={{top: 24, left: 24}}>Limited Offer</span>
                    <div className="text-center">
                      <h3 className="h2 text-normal mb-1">New</h3>
                      <h2 className="display-2 text-bold mb-2">Sunglasses</h2>
                      <h4 className="h3 text-normal mb-4">collection at discounted price!</h4>
                      <div className="countdown mb-3" data-date-time="12/30/2017 12:00:00">
                        <div className="item">
                          <div className="days">00</div><span className="days_ref">Days</span>
                        </div>
                        <div className="item">
                          <div className="hours">00</div><span className="hours_ref">Hours</span>
                        </div>
                        <div className="item">
                          <div className="minutes">00</div><span className="minutes_ref">Mins</span>
                        </div>
                        <div className="item">
                          <div className="seconds">00</div><span className="seconds_ref">Secs</span>
                        </div>
                      </div><br /><a className="btn btn-primary margin-bottom-none" href="#">View Offers</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-6 mb-30" style={{minHeight: 270}}>
                  <div className="img-cover rounded" style={{backgroundImage: 'url(img/banners/home01.jpg)'}} />
                </div>
              </div>
            </section>
            {/* Promo #2*/}
            <section className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12">
                  <div className="fw-section rounded padding-top-4x padding-bottom-4x" style={{backgroundImage: 'url(img/banners/home02.jpg)'}}><span className="overlay rounded" style={{opacity: '.35'}} />
                    <div className="text-center">
                      <h3 className="display-4 text-normal text-white text-shadow mb-1">Old Collection</h3>
                      <h2 className="display-2 text-bold text-white text-shadow">HUGE SALE!</h2>
                      <h4 className="d-inline-block h2 text-normal text-white text-shadow border-default border-left-0 border-right-0 mb-4">at our outlet stores</h4><br /><a className="btn btn-primary margin-bottom-none" href="/company#/contacts">Locate Stores</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Featured Products Carousel*/}
            <section className="container padding-top-3x padding-bottom-3x">
              <h3 className="text-center mb-30">Featured Products</h3>
              <div className="owl-carousel" data-owl-carousel="{ &quot;nav&quot;: false, &quot;dots&quot;: true, &quot;margin&quot;: 30, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:1},&quot;576&quot;:{&quot;items&quot;:2},&quot;768&quot;:{&quot;items&quot;:3},&quot;991&quot;:{&quot;items&quot;:4},&quot;1200&quot;:{&quot;items&quot;:4}} }">
                {/* Product*/}
                {something}
              </div>
            </section>
            {/* Product Widgets*/}
            <section className="container padding-bottom-2x">
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <div className="widget widget-featured-products">
                    <h3 className="widget-title">Top Sellers</h3>
                    {/* Entry*/}
                    <div className="entry">
                      <div className="entry-thumb"><a href="/shopping#/shop-single"><img src="img/shop/widget/01.jpg" alt="Product" /></a></div>
                      <div className="entry-content">
                        <h4 className="entry-title"><a href="/shopping#/shop-single">Oakley Kickback</a></h4><span className="entry-meta">$155.00</span>
                      </div>
                    </div>
                    {/* Entry*/}
                    <div className="entry">
                      <div className="entry-thumb"><a href="/shopping#/shop-single"><img src="img/shop/widget/03.jpg" alt="Product" /></a></div>
                      <div className="entry-content">
                        <h4 className="entry-title"><a href="/shopping#/shop-single">Vented Straw Fedora</a></h4><span className="entry-meta">$49.50</span>
                      </div>
                    </div>
                    {/* Entry*/}
                    <div className="entry">
                      <div className="entry-thumb"><a href="/shopping#/shop-single"><img src="img/shop/widget/04.jpg" alt="Product" /></a></div>
                      <div className="entry-content">
                        <h4 className="entry-title"><a href="/shopping#/shop-single">Big Wordmark Tote</a></h4><span className="entry-meta">$29.99</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="widget widget-featured-products">
                    <h3 className="widget-title">New Arrivals</h3>
                    {/* Entry*/}
                    <div className="entry">
                      <div className="entry-thumb"><a href="/shopping#/shop-single"><img src="img/shop/widget/05.jpg" alt="Product" /></a></div>
                      <div className="entry-content">
                        <h4 className="entry-title"><a href="/shopping#/shop-single">Union Park</a></h4><span className="entry-meta">$49.99</span>
                      </div>
                    </div>
                    {/* Entry*/}
                    <div className="entry">
                      <div className="entry-thumb"><a href="/shopping#/shop-single"><img src="img/shop/widget/06.jpg" alt="Product" /></a></div>
                      <div className="entry-content">
                        <h4 className="entry-title"><a href="/shopping#/shop-single">Cole Haan Crossbody</a></h4><span className="entry-meta">$200.00</span>
                      </div>
                    </div>
                    {/* Entry*/}
                    <div className="entry">
                      <div className="entry-thumb"><a href="/shopping#/shop-single"><img src="img/shop/widget/07.jpg" alt="Product" /></a></div>
                      <div className="entry-content">
                        <h4 className="entry-title"><a href="/shopping#/shop-single">Skagen Holst Watch</a></h4><span className="entry-meta">$145.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="widget widget-featured-products">
                    <h3 className="widget-title">Best Rated</h3>
                    {/* Entry*/}
                    <div className="entry">
                      <div className="entry-thumb"><a href="/shopping#/shop-single"><img src="img/shop/widget/08.jpg" alt="Product" /></a></div>
                      <div className="entry-content">
                        <h4 className="entry-title"><a href="/shopping#/shop-single">Jordan's City Hoodie</a></h4><span className="entry-meta">$65.00</span>
                      </div>
                    </div>
                    {/* Entry*/}
                    <div className="entry">
                      <div className="entry-thumb"><a href="/shopping#/shop-single"><img src="img/shop/widget/09.jpg" alt="Product" /></a></div>
                      <div className="entry-content">
                        <h4 className="entry-title"><a href="/shopping#/shop-single">Palace Shell Track Jacket</a></h4><span className="entry-meta">$36.99</span>
                      </div>
                    </div>
                    {/* Entry*/}
                    <div className="entry">
                      <div className="entry-thumb"><a href="/shopping#/shop-single"><img src="img/shop/widget/10.jpg" alt="Product" /></a></div>
                      <div className="entry-content">
                        <h4 className="entry-title"><a href="/shopping#/shop-single">Off the Shoulder Top</a></h4><span className="entry-meta">$128.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Popular Brands*/}
            <section className="bg-faded padding-top-3x padding-bottom-3x">
              <div className="container">
                <h3 className="text-center mb-30 pb-2">Popular Brands</h3>
                <div className="owl-carousel" data-owl-carousel="{ &quot;nav&quot;: false, &quot;dots&quot;: false, &quot;loop&quot;: true, &quot;autoplay&quot;: true, &quot;autoplayTimeout&quot;: 4000, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:2}, &quot;470&quot;:{&quot;items&quot;:3},&quot;630&quot;:{&quot;items&quot;:4},&quot;991&quot;:{&quot;items&quot;:5},&quot;1200&quot;:{&quot;items&quot;:6}} }"><img className="d-block w-110 opacity-75 m-auto" src="img/brands/01.png" alt="Adidas" /><img className="d-block w-110 opacity-75 m-auto" src="img/brands/02.png" alt="Brooks" /><img className="d-block w-110 opacity-75 m-auto" src="img/brands/03.png" alt="Valentino" /><img className="d-block w-110 opacity-75 m-auto" src="img/brands/04.png" alt="Nike" /><img className="d-block w-110 opacity-75 m-auto" src="img/brands/05.png" alt="Puma" /><img className="d-block w-110 opacity-75 m-auto" src="img/brands/06.png" alt="New Balance" /><img className="d-block w-110 opacity-75 m-auto" src="img/brands/07.png" alt="Dior" /></div>
              </div>
            </section>
            {/* Services*/}
            <section className="container padding-top-3x padding-bottom-2x">
              <div className="row">
                <div className="col-md-3 col-sm-6 text-center mb-30"><img className="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3" src="img/services/01.png" alt="Shipping" />
                  <h6>Free Worldwide Shipping</h6>
                  <p className="text-muted margin-bottom-none">Free shipping for all orders over $100</p>
                </div>
                <div className="col-md-3 col-sm-6 text-center mb-30"><img className="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3" src="img/services/02.png" alt="Money Back" />
                  <h6>Money Back Guarantee</h6>
                  <p className="text-muted margin-bottom-none">We return money within 30 days</p>
                </div>
                <div className="col-md-3 col-sm-6 text-center mb-30"><img className="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3" src="img/services/03.png" alt="Support" />
                  <h6>24/7 Customer Support</h6>
                  <p className="text-muted margin-bottom-none">Friendly 24/7 customer support</p>
                </div>
                <div className="col-md-3 col-sm-6 text-center mb-30"><img className="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3" src="img/services/04.png" alt="Payment" />
                  <h6>Secure Online Payment</h6>
                  <p className="text-muted margin-bottom-none">We posess SSL / Secure Certificate</p>
                </div>
              </div>
            </section>
            {/* Site Footer*/}
            <Footer/>
          </div>
          {/* Back To Top Button*/}<a className="scroll-to-top-btn" href="#"><i className="icon-arrow-up" /></a>
          {/* Backdrop*/}
          <div className="site-backdrop" />
        </div>
        </div>
        
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))