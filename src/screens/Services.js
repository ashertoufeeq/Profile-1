import React from 'react'
import { Row, Col, Card } from 'antd';
import '../Css/Services.css';
import { Link } from 'react-router-dom';
import photo from '../Images/photo.jpeg';


function Services() {
    return (
        <div className='services min-vh' >
            <div className='ml-10 mr-10 pt-10 mb-7' style={{ paddingLeft: '200px', paddingRight: '200px'}}>
            <h2 >Freelance Web Designer & Developer based in Galway, Ireland.
Highly experienced in designing & developing custom Wordpress websites. </h2>
            </div>
            
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row " span={18}>
                    <div style={{ backgroundColor: '#f5f6f7' }} className='ml-5 pl-3 pt-4'>
                        <h2 className='fnt_clr' > WordPress CMS (Content Management System) </h2>
                        <p> WordPress CMS adds a user-friendly administrative area to your website allowing you to easily login and update the content of your website at any time. You can effortlessly make textual, graphic or structural changes to the website in an instant without having to deal with or look at any of the complicated programming code. You will have full control over your website’s content. </p>

                        <h2> Custom WordPress Theme </h2>
                        <p>  All of the websites that we create have been built using tailor-made, custom WordPress themes which have been coded from scratch. </p> <br/>

                        <p> Custom WordPress theme creation begins with creating a unique design. This process starts with a pen and paper to sketch page layouts, wire-frames, sitemaps and menu structures. Digital designs are then created using the sketches and your company’s brand guidelines are added for a personalised look and feel. You will be presented with a variety of website design concepts to review. Feedback on the design concepts is essential to give you the opportunity to express your thoughts on the design and make alterations where desired before the final sign-off. </p> <br/>

                        <p> Once the design has been finalised, the creation of the custom WordPress theme can begin. This starts by taking the graphical elements (colours, fonts, layout, images) defined in the design process and coding them using web industry standards (PHP, HTML5, CSS3, JS, jQuery). This is typically done by first coding the home page, followed by templates for the interior pages. When the website is ready for review you will be supplied with login details to view the website before it is launched to the public. You will also be supplied with instructions on how to update your website. </p>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div>
                        <Card className='link_card p-1' title="Other Services" style={{ width: 300, backgroundColor: '#ddd' }}>
                            <div className='p-1'>
                                <img className='card_link_photo' src={photo} />
                                <Link to={"/"}>Home</Link>
                            </div>
                            <div className='p-1' >
                                <img className='card_link_photo' src={photo}/>
                                <Link to={"/tutorials"} >Tutorials</Link>
                            </div>
                            <div className='p-1'>
                                <img className='card_link_photo' src={photo} />
                                <Link to={"/services/1"} exact >Services</Link>
                            </div>
                            <div className='p-1'>
                                <img className='card_link_photo' src={photo} />
                                <Link to={"/contact"} >Contact</Link>
                            </div>
                            <div className='p-1'>
                                <img className='card_link_photo' src={photo} />
                                <Link to={"/about"} >About</Link>
                            </div>
                        </Card>
                        </div>
                </Col>
                </Row>
            
        </div>
    )
}

export default Services;
