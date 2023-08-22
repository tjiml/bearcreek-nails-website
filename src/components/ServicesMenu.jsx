import React, { useState } from "react";

export default function ServicesMenu() {

    const [fullSet, setFullSet] = useState(true);

    function displayFullSet() {
        setFullSet(false);
        document.querySelector('.full-set-down').style.color = 'rgb(180, 116, 180)';
    }

    function hideFullSet() {
        setFullSet(true);
        document.querySelector('.full-set-up').style.color = 'black';
    }

    const [rebase, setRebase] = useState(true);
    
    function displayRebase() {
        setRebase(false);
        document.querySelector('.rebase-down').style.color = 'rgb(180, 116, 180)';
    }

    function hideRebase() {
        setRebase(true);
        document.querySelector('.rebase-up').style.color = 'black';
    }

    const [manicure, setManicure] = useState(true);

    function displayManicure() {
        setManicure(false);
        document.querySelector('.manicure-down').style.color = 'rgb(180, 116, 180)';
    }

    function hideManicure() {
        setManicure(true);
        document.querySelector('.manicure-up').style.color = 'black';
    }

    const [pedicure, setPedicure] = useState(true);

    function displayPedicure() {
        setPedicure(false);
        document.querySelector('.pedicure-down').style.color = 'rgb(180, 116, 180)';
    }

    function hidePedicure() {
        setPedicure(true);
        document.querySelector('.pedicure-up').style.color = 'black';
    }

    const [deluxeMani, setDeluxeMani] = useState(true);

    function displayDeluxeMani() {
        setDeluxeMani(false);
        document.querySelector('.deluxe-mani-down').style.color = 'rgb(180, 116, 180)';
    }

    function hideDeluxeMani() {
        setDeluxeMani(true);
        document.querySelector('.deluxe-mani-up').style.color = 'black';
    }

    const [deluxePedi, setDeluxePedi] = useState(true);

    function displayDeluxePedi() {
        setDeluxePedi(false);
        document.querySelector('.deluxe-pedi-down').style.color = 'rgb(180, 116, 180)';
    }

    function hideDeluxePedi() {
        setDeluxePedi(true);
        document.querySelector('.deluxe-pedi-up').style.color = 'black';
    }

    const [bcTreatment, setBcTreatment] = useState(true);
    
    function displayBcTreatment() {
        setBcTreatment(false);
        document.querySelector('.bc-treatment-down').style.color = 'rgb(180, 116, 180)';
    }

    function hideBcTreatment() {
        setBcTreatment(true);
        document.querySelector('.bc-treatment-up').style.color = 'black';
    }

    const [gelShellac, setGelShellac] = useState(true);

    function displayGelShellac() {
        setGelShellac(false);
        document.querySelector('.gel-shellac-down').style.color = 'rgb(180, 116, 180)';
    }

    function hideGelShellac() {
        setGelShellac(true);
        document.querySelector('.gel-shellac-up').style.color = 'black';
    }

    const [kidServices, setKidServices] = useState(true);

    function displayKids() {
        setKidServices(false);
        document.querySelector('.kid-services-down').style.color = 'rgb(180, 116, 180)';
    }

    function hideKids() {
        setKidServices(true);
        document.querySelector('.kid-services-up').style.color = 'black';
    }

    const [additional, setAdditional] = useState(true);

    function displayAdditional() {
        setAdditional(false);
        document.querySelector('.additional-down').style.color = 'rgb(180, 116, 180)';
    }

    function hideAdditional() {
        setAdditional(true);
        document.querySelector('.additional-up').style.color = 'black';
    }
    
    return (
        <>
        <div className="service-container pb-5">
        <div className="container py-5">
            <div className="row justify-content-center py-2">
                <div className="col-3">
                    <h5 className="solid-line"></h5>
                </div>
            </div>
            <div className="row justify-content-center text-center">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <h1 className="page-titles">Bear Creek Nails Services</h1>
                </div>
            </div>
        </div>

        {/* full set */}
        <div className="container py-5">
            <div className="row justify-content-center text-center">
                <div className="col-lg-5 col-md-8 col-sm-10">
                    {fullSet ? (
                        <div>
                            <h2 onClick={displayFullSet} className="full-set-down py-2">Full Set Menu <i className="bi bi-chevron-down"></i></h2>
                        </div>
                    ) : (
                        <div>
                            <h2 onClick={hideFullSet} className="full-set-up py-2">Full Set Menu <i className="bi bi-chevron-up"></i></h2>
                                <div className="row">
                                <div className="col-10">
                                    <ul className="service-items text-start">
                                    <li>Natural Acrylics or Overlay</li>
                                    <li>Natural Acrylics with White Tips</li>
                                    <li>Solar Pink & White</li>
                                    <li>Color Powder</li>
                                    <li>Gel Powder</li>
                                    <li>Dip Powder</li>
                                </ul>
                                </div>         
                                <div className="col-2">
                                    <ul className="service-items text-start">
                                    <li>$35+</li>
                                    <li>$40+</li>
                                    <li>$55</li>
                                    <li>$60</li>
                                    <li>$50</li>
                                    <li>$45</li>
                                </ul>
                                </div>
                                </div>
                        </div>
                    )}
                <hr className="solid"/>
                </div>
            </div>

        {/* rebase */}
            <div className="row justify-content-center text-center">
                <div className="col-lg-5 col-md-8 col-sm-10">
                    {rebase ? (
                        <div>
                            <h2 onClick={displayRebase} className="rebase-down py-2">Rebase <i className="bi bi-chevron-down"></i></h2>
                        </div>
                    ) : (
                        <div>
                            <h2 onClick={hideRebase} className="rebase-up py-2">Rebase <i className="bi bi-chevron-up"></i></h2>
                                <div className="row">
                                    <div className="col-10">
                                        <ul className="service-items text-start">
                                            <li>Acrylics</li>
                                            <li>Pink</li>
                                            <li>Pink & Gel Top</li>
                                            <li>Pink & White</li>
                                            <li>Color Powder</li>
                                            <li>Gel Powder</li>
                                        </ul>
                                    </div>
                                    <div className="col-2">
                                        <ul className="service-items text-start">
                                            <li>$25+</li>
                                            <li>$25+</li>
                                            <li>$30+</li>
                                            <li>$45+</li>
                                            <li>$45+</li>
                                            <li>$40+</li>
                                        </ul>
                                    </div>
                                </div>
                        </div>
                    )}
                    <hr className="solid"/>
                </div>
            </div>

        {/* manicure */}
            <div className="row justify-content-center text-center">
                <div className="col-lg-5 col-md-8 col-sm-10">
                    {manicure ? (
                        <div> 
                            <h2 onClick={displayManicure} className="manicure-down py-2">Manicure <i className="bi bi-chevron-down"></i></h2>
                        </div>
                    ) : (
                        <div>
                            <h2 onClick={hideManicure} className="manicure-up py-2">Manicure <i className="bi bi-chevron-up"></i></h2>
                                <div className="row">
                                    <div className="col-10">
                                        <ul  className="service-items text-start">
                                            <li>Basic Manicure</li>
                                            <li>*Add Paraffin Wax*</li>
                                            <li>*Add Gel/Shellac Wax*</li>
                                        </ul>
                                    </div>
                                    <div className="col-2">
                                        <ul className="service-items text-start">
                                            <li>$20</li>
                                            <li>$7</li>
                                            <li>$15</li>
                                        </ul>
                                    </div>
                                    <div className="col-12">
                                        <p className="extra-text">Includes cuticle trim & quick hand/arm massage.</p>
                                    </div>
                                </div>
                        </div>
                    )}
                    <hr className="solid"/>
                </div>
            </div>

        {/* pedicure */}
            <div className="row justify-content-center text-center">
                <div className="col-lg-5 col-md-8 col-sm-10">
                    {pedicure ? (
                        <div>
                            <h2 className="pedicure-down py-2" onClick={displayPedicure}>Pedicure <i className="bi bi-chevron-down"></i></h2>
                        </div>
                    ) : (
                        <div>
                            <h2 className="pedicure-up py-2" onClick={hidePedicure}>Pedicure <i className="bi bi-chevron-up"></i></h2>
                                <div className="row">
                                    <div className="col-10">
                                        <ul className="service-items text-start">
                                            <li>Basic Pedicure</li>
                                            <li>*Add Paraffin Wax*</li>
                                            <li>*Add Callus Removal*</li>
                                            <li>*Add Gel/Shellac Polish</li>
                                        </ul>
                                    </div>
                                    <div className="col-2">
                                        <ul className="service-items text-start">
                                            <li>$30</li>
                                            <li>$10</li>
                                            <li>$5</li>
                                            <li>$15</li>
                                        </ul>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <p className="extra-text">Enjoy our spa pedicure by soaking your feet and maintaining your cuticles, toes, nails, and heels.</p>
                                            <p className="extra-text">Includes a relaxing massage on your legs and feet with a hot towel.</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    )}
                    <hr className="solid"/>
                </div>
            </div>

        {/* deluxe manicure */}
            <div className="row justify-content-center text-center">
                <div className="col-lg-5 col-md-8 col-sm-10">
                    {deluxeMani ? (
                        <div>
                            <h2 className="deluxe-mani-down py-2" onClick={displayDeluxeMani}>Deluxe Manicure <i className="bi bi-chevron-down"></i></h2>
                        </div>
                    ) : (
                        <div>
                            <h2 className="deluxe-mani-up py-2" onClick={hideDeluxeMani}>Deluxe Manicure <i className="bi bi-chevron-up"></i></h2>
                                <div className="row">
                                    <div className="col-10">
                                        <ul className="service-items text-start">
                                            <li>Deluxe Manicure</li>
                                            <li>*Add Gel/Shellac Polish</li>
                                        </ul>
                                    </div>
                                    <div className="col-2">
                                        <ul className="service-items">
                                            <li>$35</li>
                                            <li>$15</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                    <p className="extra-text">Enjoy yourself with an exfoliating sugar scrub, paraffin wax, and a massage with a hot towel.</p>
                                    <p className="extra-text">Includes a basic manicure to keep your nails looking healthy.</p>
                                    </div>
                                </div>
                        </div>
                    )}
                    <hr className="solid"/>
                </div>
            </div>

        {/* deluxe pedicure */}

            <div className="row justify-content-center text-center">
                <div className="col-lg-5 col-md-8 col-sm-10">
                    {deluxePedi ? (
                        <div>
                            <h2 className="deluxe-pedi-down py-2" onClick={displayDeluxePedi}>Deluxe Pedicure <i className="bi bi-chevron-down"></i></h2>
                        </div>
                    ) : (
                        <div>
                            <h2 className="deluxe-pedi-up py-2" onClick={hideDeluxePedi}>Deluxe Pedicure <i className="bi bi-chevron-up"></i></h2>
                                <div className="row">
                                    <div className="col-10">
                                        <ul className="service-items text-start">
                                            <li>Deluxe Pedicure</li>
                                            <li>*Add Gel/Shellac Polish*</li>
                                        </ul>
                                    </div>
                                    <div className="col-2">
                                        <ul className="service-items text-start">
                                            <li>$45</li>
                                            <li>$15</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <p className="extra-text">Enjoy our spa pedicure that includes callus removal for cracked heels.</p>
                                        <p className="extra-text">We use exfoliating sugar scrub for your legs and feet, and wrapped with a hot towel.</p>
                                        <p className="extra-text">Includes a moisturizing, hydrating parrafin treatment, and a stimulating massage with cuticle oil.</p>
                                    </div>
                                </div>
                        </div>
                    )}
                    <hr className="solid"/>
                </div>
            </div>

        {/* bc treatment */}

            <div className="row justify-content-center text-center">
                <div className="col-lg-5 col-md-8 col-sm-10">
                    {bcTreatment ? (
                        <div>
                            <h2 className="bc-treatment-down py-2" onClick={displayBcTreatment}>Bear Creek Treatment <i className="bi bi-chevron-down"></i></h2>
                        </div>
                    ) : (
                        <div>
                            <h2 className="bc-treatment-up py-2" onClick={hideBcTreatment}>Bear Creek Treatment <i className="bi bi-chevron-up"></i></h2>
                                <div className="row">
                                    <div className="col-10">
                                        <ul className="service-items text-start">
                                            <li>Bear Creek Manicure</li>
                                        </ul>
                                    </div>
                                    <div className="col-2">
                                        <ul className="service-items text-start">
                                            <li>$50</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <p className="extra-text">This luxurious manicure goes beyond your expectations.</p>
                                        <p className="extra-text">Includes a manicure with sea salt exfoliating scrub, hydrating paraffin wax treatment with a hot stone massage, and a hot towel.</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-10">
                                        <ul className="service-items text-start">
                                            <li>Bear Creek Pedicure</li>
                                        </ul>
                                    </div>
                                    <div className="col-2">
                                        <ul className="service-items text-start">
                                            <li>$60</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <p className="extra-text">For an extraordinary treatment of the day, it includes callus removal for cracked heels, exfoliating sea salt scrub for legs and feet, wrapped in a paraffin treatment to rehydrate your feet.</p>
                                        <p className="extra-text">Includes a longer relaxing massage with hot oil stones to promote circulation in your legs and feet</p>
                                    </div>
                                </div>
                        </div>
                    )}
                    <hr className="solid"/>
                </div>
            </div>

        {/* gel/shellac */}

            <div className="row justify-content-center text-center">
                <div className="col-lg-5 col-md-8 col-sm-10">
                    {gelShellac ? (
                        <div>
                            <h2 className="gel-shellac-down py-2" onClick={displayGelShellac}>Gel / Shellac Polish <i className="bi bi-chevron-down"></i></h2>
                        </div>
                    ) : (
                        <div>
                            <h2 className="gel-shellac-up py-2" onClick={hideGelShellac}>Gel / Shellac Polish <i className="bi bi-chevron-up"></i></h2>
                                <div className="row">
                                    <div className="col-10">
                                        <ul className="service-items text-start">
                                            <li>Gel/Shellac Polish Color</li>
                                            <li>Take Off Gel/Shellac</li>
                                            <li>Mani & Gel/Shellac Polish Color</li>
                                            <li>Deluxe Mani & Gel/Shellac Polish Color</li>
                                            <li>*Extra French Gel/Shellac Polish*</li>
                                        </ul>
                                    </div>
                                    <div className="col-2">
                                        <ul className="service-items text-start">
                                            <li>$25+</li>
                                            <li>$10+</li>
                                            <li>$35</li>
                                            <li>$47</li>
                                            <li>$5+</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <p className="extra-text">Maintain natural nails with gel/shellac for long lasting, stronger, and no drills with a complete dry and shiny look.</p>
                                    </div>
                                </div>
                        </div>
                    )}
                    <hr className="solid"/>
                </div>
            </div>

        {/* kids */}

            <div className="row justify-content-center text-center">
                <div className="col-lg-5 col-md-8 col-sm-10">
                    {kidServices ? (
                        <div>
                            <h2 className="kid-services-down py-2" onClick={displayKids}>Kids Services <i className="bi bi-chevron-down"></i></h2>
                        </div>
                    ) : (
                        <div>
                            <h2 className="kid-services-up py-2" onClick={hideKids}>Kids Services <i className="bi bi-chevron-up"></i></h2>
                                <div className="row">
                                    <div className="col-10">
                                        <ul className="service-items text-start">
                                            <li>Kids Manicure</li>
                                            <li>Kids Pedicure (Under 5 yrs)</li>
                                            <li>Kids Pedicure (Under 11 yrs)</li>
                                            <li>*Extra French Gel/Shellac Polish*</li>
                                            <li>Kids Polish Change for Nails (Under 5 yrs)</li>
                                            <li>Kids Polish Change for Nails (Under 11 yrs)</li>
                                            <li>*Additional charge for design*</li>
                                        </ul>
                                    </div>
                                    <div className="col-2">
                                        <ul className="service-items text-start">
                                            <li>$18+</li>
                                            <li>$25</li>
                                            <li>$30</li>
                                            <li>$5</li>
                                            <li>$6-8</li>
                                            <li>$8-10</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <p className="extra-text">Maintain natural nails with gel/shellac for long lasting, stronger, and no drills with a complete dry and shiny look.</p>
                                    </div>
                                </div>
                        </div>
                    )}
                    <hr className="solid"/>
                </div>
            </div>

        {/* additional */}

            <div className="row justify-content-center text-center">
                <div className="col-lg-5 col-md-8 col-sm-10">
                    {additional ? (
                        <div>
                            <h2 className="additional-down py-2" onClick={displayAdditional}>Additional Services <i className="bi bi-chevron-down"></i></h2>
                        </div>
                    ) : (
                        <div>
                            <h2 className="additional-up py-2" onClick={hideAdditional}>Additional Services <i className="bi bi-chevron-up"></i></h2>
                                <div className="row">
                                    <div className="col-9">
                                        <ul className="service-items text-start">
                                            <li>Polish Hands/Feet</li>
                                            <li>French Polish Hands/Feet</li>
                                            <li>Nail Repair</li>
                                            <li>Acrylic/Dip Nail Removal</li>
                                            <li>Paraffin Treatment Hands/Feet</li>
                                            <li>French Polish with Any Service</li>
                                            <li>10 Minute Additional Massage</li>
                                            <li>Cuticle Trim</li>
                                            <li>Nail Trimming & Shaping</li>
                                        </ul>
                                    </div>
                                    <div className="col-3">
                                        <ul className="service-items text-start">
                                            <li>$10-15+</li>
                                            <li>$15-17+</li>
                                            <li>$5+</li>
                                            <li>$5+</li>
                                            <li>$10-13+</li>
                                            <li>$5+</li>
                                            <li>$15</li>
                                            <li>$10+</li>
                                            <li>$8-10+</li>
                                        </ul>
                                    </div>
                                </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
        </div>
        </>
    )
}