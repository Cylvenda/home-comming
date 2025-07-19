import React from 'react'
import './Doing.css'
import { MapPin, Phone, Mail, Menu, X, Home, Calculator, Truck, Package } from 'lucide-react'

const Doing = () => {


    const services = [
        {
            id: 1,
            title: 'Local Moving',
            description: 'Professional local moving services within the city',
            icon: <Home size={80} color='yellow'  />,
            price: 'Starting at TZS 20,000',
            features: ['Professional packers', 'Secure transportation', 'Insurance coverage', 'Same-day service']
        },
        {
            id: 2,
            title: 'Long Distance',
            description: 'Cross-country and interstate moving solutions',
            icon: <Truck size={80} color='yellow'  />,
            price: 'Starting at TZS 5,000',
            features: ['GPS tracking', 'Climate control', 'Storage options', 'Dedicated team']
        },
        {
            id: 3,
            title: 'Packing Services',
            description: 'Complete packing and unpacking solutions',
            icon: <Package size={80} color='yellow' />,
            price: 'Starting at TZS 10,000',
            features: ['Quality materials', 'Fragile item care', 'Labeling system', 'Unpacking service']
        },
        {
            id: 4,
            title: 'Packing Services',
            description: 'Complete packing and unpacking solutions',
            icon: <Package size={80} color='yellow' />,
            price: 'Starting at TZS 10,000',
            features: ['Quality materials', 'Fragile item care', 'Labeling system', 'Unpacking service']
        }
    ];

    return (
        <>
            <section data-aos="fade-up" data-aos-duration="1500" className='services-container'>
                <div className="head">
                    <h3>OUR SERVICES</h3>
                    <p>Comprehensive moving solutions tailored to your specific needs</p>
                </div>
                <div className="pricing-details">
                    {
                        services.map((content) => (
                            <div key={content.id} className="show-service">
                                <div className="service">
                                    <span className='icon'>{content.icon}</span>
                                    {content.title}
                                    <p>{content.description}</p>
                                    <span className='price'>{content.price} </span>
                                    <ul>
                                        {content.features.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <button type="button">Select Service</button>
                            </div>
                        ))
                    }

                </div>
            </section>

        </>

    )
}

export default Doing
