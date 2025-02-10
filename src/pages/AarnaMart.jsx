import React from 'react';
import { ShoppingCart, Package, Award, Truck, Clock, Shield, ArrowRight, Check, X } from 'lucide-react';

import mart from '../assets/images/martbanner.jpg'
import skincare from '../assets/images/mart-category/personal-care.jpg'
import grocery from '../assets/images/mart-category/grocery.jpg'
import beverages from '../assets/images/mart-category/beverages.webp'
import dairyproduct from '../assets/images/mart-category/dairy-products.jpg'
import freshproduct from '../assets/images/mart-category/fresh-product.png'
import homeessential from '../assets/images/mart-category/home-essential.webp'

const AarnaMart = () => {
    const features = [
        { title: "Wide Selection", icon: <ShoppingCart className="w-6 h-6" />, description: "Everything you need under one roof" },
        { title: "Premium Quality", icon: <Award className="w-6 h-6" />, description: "Top brands and fresh items" },
        { title: "Fast Delivery", icon: <Truck className="w-6 h-6" />, description: "Quick and reliable delivery service" },
        // { title: "24/7 Shopping", icon: <Clock className="w-6 h-6" />, description: "Shop anytime, anywhere" },
        // { title: "Secure Shopping", icon: <Shield className="w-6 h-6" />, description: "100% secure transactions" },
        { title: "Bulk Discounts", icon: <Package className="w-6 h-6" />, description: "Save more on bulk purchases" }
    ];

    const categories = [
        {name:"Fresh Produce", image:freshproduct},
        {name:"Groceries & Staples", image:grocery},
        {name:"Beverages & Snacks", image:beverages},
        {name:"Dairy & Frozen", image:dairyproduct},
        {name:"Personal Care", image:skincare},
        {name:"Household Essentials", image:homeessential},  
    ];

    const premiumBenefits = [
        { name: "10%-90% OFF on all items", included: true },
        { name: "Priority Delivery", included: true },
        { name: "Early Access to Deals", included: true },
        { name: "Premium Customer Support", included: true },
        { name: "Exclusive Member Events", included: true },
        { name: "Special Seasonal Offers", included: true }
    ];

    const comparisonData = [
        {
            category: "Membership Benefits",
            aarna: [
                "Huge savings Get upto 90% off",
                
                "No hidden costs",
                "Flexible shopping plans"
            ],
            others: [
                "Limited or no discounts",
                
                "Hidden costs may apply",
                "Rigid membership structure"
            ]
        },
        {
            category: "Shopping Experience",
            aarna: [
                "Wide product selection",
                "Premium quality assured",
                "Doorstep delivery included"
            ],
            others: [
                "Limited product range",
                "Varying product quality",
                "Delivery charges extra"
            ]
        },
        {
            category: "Exclusive Features",
            aarna: [
                
                "Priority customer service",
                "Member-only events",
                "Bulk purchase discounts"
            ],
            others: [
                
                "Regular customer service",
                "No exclusive events",
                "Limited bulk discounts"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <div className="relative h-screen">
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent">
                    <img
                        src={mart}
                        alt="Mart Background"
                        className="w-full h-full object-cover "
                    />
                </div>
                <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
                    <div className="max-w-3xl">
                        <h1 className="text-6xl font-bold mb-6 leading-tight">
                            Welcome to <span className='text-red-500'>Aarna Mart</span>
                            <span className="block text-white">Your Premium Shopping Destination</span>
                        </h1>
                        <p className="text-xl mb-8 text-gray-300">
                            Experience premium shopping with incredible discounts, wide selection, and exceptional service.
                        </p>
                        <div className="space-x-4">
                            <button className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300">
                                Join Now for ₹99
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Special Offer Section */}
            <div className="bg-red-500 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-4">Special Offer: 75% OFF</h2>
                    <p className="text-xl mb-8">Premium membership for just ₹99 for a month!</p>
                    <button className="bg-white text-red-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2 mx-auto">
                        Claim Offer Now
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-24 bg-gray-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16">Why Choose Aarna Mart?</h2>
                    <div className="grid grid-cols-1 max-w-5xl mx-auto md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-gray-900 p-8 rounded-lg hover:transform hover:scale-105 transition-transform duration-300 shadow-md shadow-red-500">
                                <div className="text-red-500 mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Categories Section */}
            <div className="py-24 bg-gray-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16">Our Categories</h2>
                    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categories.map((category, index) => (
                            <div key={index} className="relative group overflow-hidden rounded-lg">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
                                <div className="absolute bottom-0 left-0 p-6">
                                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Premium Membership Section */}
            <div className="py-24 bg-gradient-to-b from-gray-900 to-black">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-16"> Membership Benefits</h2>
                        <div className="bg-gray-800 rounded-lg p-8">
                            <div className="text-3xl font-bold mb-2">₹99/month</div>
                            <div className="text-gray-400 mb-8">First Month Special Offer</div>
                            <div className="space-y-4">
                                {premiumBenefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <Check className="text-red-500 w-5 h-5 flex-shrink-0" />
                                        <span>{benefit.name}</span>
                                    </div>
                                ))}
                            </div>
                            <button className="mt-8 bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300">
                                Become a Member
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Comparison Section */}
            <div className="py-24 bg-gradient-to-b from-gray-800 to-black">
                <div className="container mx-auto px-4 max-w-5xl ">
                    <h2 className="text-4xl font-bold text-center mb-6">Why We're Different</h2>
                    <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
                        See how Aarna Mart stands out from the competition with our comprehensive offerings and member-first approach.
                    </p>

                    {comparisonData.map((section, index) => (
                        <div key={index} className="mb-16">
                            <h3 className="text-2xl font-bold mb-8 text-center text-red-500">{section.category}</h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-black border border-gray-800 rounded-lg p-8">
                                    <div className="text-xl font-bold mb-6 flex items-center gap-3">
                                        <span className="text-red-500">Aarna Mart</span>
                                        <div className="h-1 flex-grow bg-red-500/20 rounded"></div>
                                    </div>
                                    <div className="space-y-4">
                                        {section.aarna.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <Check className="text-red-500 w-5 h-5 flex-shrink-0" />
                                                <span className="text-gray-300">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-black border border-gray-800 rounded-lg p-8">
                                    <div className="text-xl font-bold mb-6 flex items-center gap-3">
                                        <span className="text-gray-500">Other Marts</span>
                                        <div className="h-1 flex-grow bg-gray-500/20 rounded"></div>
                                    </div>
                                    <div className="space-y-4">
                                        {section.others.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <X className="text-gray-500 w-5 h-5 flex-shrink-0" />
                                                <span className="text-gray-400">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-5 bg-black ">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-8">Start Shopping Smarter Today</h2>
                    <p className="text-xl text-gray-400 mb-8">Join Aarna Mart and transform your shopping experience!</p>
                    <button className="bg-red-500 text-white text-lg px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300">
                        Join Membership
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AarnaMart;