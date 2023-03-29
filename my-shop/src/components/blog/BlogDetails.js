import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as blogService from '../../services/blogService';
import { formatDate } from '../../utils/dateFormater';
import { splitBySentence } from '../../utils/splitTextIntoFourParagraphs';

export default function BlogDetails(){
    const { blogId } = useParams();
    const [blog, setBlog] = useState({});

    useEffect(() => {
        blogService.getOne(blogId)
        .then(result => setBlog(result))
        .catch(error => {
            console.log("Error " + error);
        })
    }, [blogId]);

    if(blog.content != ''){
        blog.content = "On your iPhone, you can now tap a button that says, “Ask app not to track.” But behind the scenes, some apps keep snooping anyway. Say you open the app “Subway Surfers,” listed as one of the App Store’s “must-play” games. It asks if you’re okay with the app “tracking” you, a question iPhones started displaying in April as part of a privacy crackdown by Apple. \n Saying no is supposed to stop apps such as “Subway Surfers” and Facebook from learning about what you do in other apps and websites. But something curious happens after you ask not to be tracked, according to an investigation by researchers at privacy software maker Lockdown and The Washington Post. “Subway Surfers” starts sending an outside ad company called Chartboost 29 very specific data points about your iPhone, including your Internet address, your free storage, your current volume level (to 3 decimal points) and even your battery level (to 15 decimal points). It’s the kind of unique data that could be used by advertisers to identify your iPhone, possibly letting them know what other apps you use or how to target you.In other words, it’s sidestepping your request to be left alone.\n You can’t stop it. And your privacy is worse off for it."
        console.log(splitBySentence(blog.content))
    }
    
    return (
        <>
        <section className="blog-hero spad">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-9 text-center">
                        <div className="blog__hero__text">
                            <h2>{blog.title}</h2>
                            <ul>
                                <li>By Deercreative</li>
                                <li>{formatDate(blog.published) }</li>
                                <li>{blog.comments?.length} Comments</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="blog-details spad">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-12">
                        <div className="blog__details__pic">
                            <img src={blog.imageUrl} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="blog__details__content">
                            <div className="blog__details__share">
                                <span>share</span>
                                <ul>
                                    <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                                    <li><Link to="#" className="twitter"><i className="fa fa-twitter"></i></Link></li>
                                    <li><Link to="#" className="youtube"><i className="fa fa-youtube-play"></i></Link></li>
                                    <li><Link to="#" className="linkedin"><i className="fa fa-linkedin"></i></Link></li>
                                </ul>
            
                            </div>
                            <div className="blog__details__text">
                                <p>Hydroderm is the highly desired anti-aging cream on the block. This serum restricts the
                                    occurrence of early aging sings on the skin and keeps the skin younger, tighter and
                                    healthier. It reduces the wrinkles and loosening of skin. This cream nourishes the skin
                                    and brings back the glow that had lost in the run of hectic years.</p>
                                <p>The most essential ingredient that makes hydroderm so effective is Vyo-Serum, which is a
                                    product of natural selected proteins. This concentrate works actively in bringing about
                                    the natural youthful glow of the skin. It tightens the skin along with its moisturizing
                                    effect on the skin. The other important ingredient, making hydroderm so effective is
                                    “marine collagen” which along with Vyo-Serum helps revitalize the skin.</p>
                            </div>
                            <div className="blog__details__quote">
                                <i className="fa fa-quote-left"></i>
                                <p>“When designing an advertisement for a particular product many things should be
                                    researched like where it should be displayed.”</p>
                                <h6>_ John Smith _</h6>
                            </div>
                            <div className="blog__details__text">
                                <p>Vyo-Serum along with tightening the skin also reduces the fine lines indicating aging of
                                    skin. Problems like dark circles, puffiness, and crow’s feet can be control from the
                                    strong effects of this serum.</p>
                                <p>Hydroderm is a multi-functional product that helps in reducing the cellulite and giving
                                    the body a toned shape, also helps in cleansing the skin from the root and not letting
                                    the pores clog, nevertheless also let’s sweeps out the wrinkles and all signs of aging
                                    from the sensitive near the eyes.</p>
                            </div>
                            <div className="blog__details__option">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="blog__details__author">
                                            <div className="blog__details__author__pic">
                                                <img src="img/blog/details/blog-author.jpg" alt=""/>
                                            </div>
                                            <div className="blog__details__author__text">
                                                <h5>Aiden Blair</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="blog__details__tags">
                                            <a href="#">#Fashion</a>
                                            <a href="#">#Trending</a>
                                            <a href="#">#2020</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blog__details__btns">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <a href="" className="blog__details__btns__item">
                                            <p><span className="arrow_left"></span> Previous Pod</p>
                                            <h5>It S classNameified How To Utilize Free classNameified Ad Sites</h5>
                                        </a>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <a href="" className="blog__details__btns__item blog__details__btns__item--next">
                                            <p>Next Pod <span className="arrow_right"></span></p>
                                            <h5>Tips For Choosing The Perfect Gloss For Your Lips</h5>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="blog__details__comment">
                                <h4>Leave A Comment</h4>
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            <input type="text" placeholder="Name"/>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <input type="text" placeholder="Email"/>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <input type="text" placeholder="Phone"/>
                                        </div>
                                        <div className="col-lg-12 text-center">
                                            <textarea placeholder="Comment"></textarea>
                                            <button type="submit" className="site-btn">Post Comment</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
        </>    
    );
}