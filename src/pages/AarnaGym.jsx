import React from 'react';
import { CheckCircle2, Dumbbell, Users, Heart, Clock, Trophy, ArrowRight, Check, X } from 'lucide-react';
import aarnagym from '../assets/images/gym-ban.jpg'
import cardio from '../assets/images/gym-category/cardio.png'
import hiit from '../assets/images/gym-category/HIIT.jpg'
import yoga from '../assets/images/gym-category/yoga.jpg'
import pilates from '../assets/images/gym-category/pilates.jpg'
import strengthtraining from '../assets/images/gym-category/strength-training.jpg'
import zumba from '../assets/images/gym-category/zumba.jpg'

const AarnaGym = () => {
    const features = [
        { title: "Personal Training", icon: <Users className="w-6 h-6" />, description: "Get personalized workout plans from certified trainers" },
        { title: "Group Classes", icon: <Users className="w-6 h-6" />, description: "Join energetic group sessions including HIIT, yoga, and Pilates" },
        // { title: "Modern Equipment", icon: <Dumbbell className="w-6 h-6" />, description: "State-of-the-art cardio and strength training machines" },
        { title: "Expert Guidance", icon: <Trophy className="w-6 h-6" />, description: "Learn from experienced fitness professionals" },
        // { title: "24/7 Access", icon: <Clock className="w-6 h-6" />, description: "Work out on your schedule with round-the-clock access" },
        { title: "Wellness Support", icon: <Heart className="w-6 h-6" />, description: "Comprehensive nutrition and wellness guidance" }
    ];
    const category = [
        {name:"Yoga", image:yoga},
        {name:"Zumba", image:zumba},
        {name:"HIIT", image:hiit},
        {name:"Strength Training", image:strengthtraining},
        {name:"Pilates", image:pilates},
        {name:"Cardio", image:cardio}
    ]

    const services = [
        { name: "Yoga Classes", included: true },
        { name: "Zumba Dance", included: true },
        { name: "Personal Training", included: true },
        { name: "Nutrition Guidance", included: true },
        { name: "Group Fitness Classes", included: true }
    ];
    const comparisonData = [
        {
            category: "Membership Offers",
            aarna: [
                "Huge savings on gym memberships! Get 75% off",
                "All-inclusive access to facilities",
                "No hidden costs",
                "Flexible membership plans"
            ],
            others: [
                "Limited or no discounts",
                "Additional fees for premium services",
                "Hidden costs may apply",
                "Rigid membership structure"
            ]
        },
        {
            category: "Fitness Services",
            aarna: [
                "Group & personalized Yoga sessions",
                "High-energy Zumba classes included",
                "Customized personal training",
                "Nutrition counseling included"
            ],
            others: [
                "Limited class variety",
                "Extra charges for Yoga/Zumba",
                "Generic training programs",
                "Nutrition guidance costs extra"
            ]
        },
        {
            category: "Facilities",
            aarna: [
                "State-of-the-art equipment",
                "Dedicated Yoga & Zumba spaces",
                "Spacious workout areas",
                "Recovery & relaxation zones"
            ],
            others: [
                "Basic equipment only",
                "Limited space for classes",
                "Often crowded",
                "Minimal recovery areas"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Hero Section */}
            <div className="relative h-screen">
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent">
                    <img
                        src={aarnagym}
                        alt="Gym Background"
                        className="w-full h-full object-cover "
                    />
                </div>
                <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
                    <div className="max-w-3xl">
                        <h1 className="text-6xl font-bold mb-6 leading-tight">
                            Welcome to Aarna Gym
                            <span className="block text-red-500">Your Ultimate Fitness Destination</span>
                        </h1>
                        <p className="text-xl mb-8 text-gray-300">
                            Transform your life through fitness with state-of-the-art facilities, expert trainers, and a supportive community.
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
                    <p className="text-xl mb-8">Join now for just ₹99 for your first month!</p>
                    <button className="bg-white text-red-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2 mx-auto">
                        Claim Offer Now
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-24 bg-gray-800 ">
                <div className="container mx-auto px-4 ">
                    <h2 className="text-4xl font-bold text-center mb-16">Why Choose Aarna Gym?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
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

            {/* Membership Section */}
            <div className="py-24 bg-gradient-to-b from-gray-900 to-black">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-16">Membership Benefits</h2>
                        <div className="bg-gray-800 rounded-lg p-8">
                            <div className="text-3xl font-bold mb-2">₹99/month</div>
                            <div className="text-gray-400 mb-8">First Month Special Offer</div>
                            <div className="space-y-4">
                                {services.map((service, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-red-500 w-5 h-5 flex-shrink-0" />
                                        <span>{service.name}</span>
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

            {/* Classes Section */}
            <div className="py-24 bg-gray-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16">Our Classes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {category.map((category, index) => (
                            <div key={index} className="relative group overflow-hidden rounded-lg">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
                                <div className="absolute bottom-0 left-0 p-6">
                                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                                    {/* <button className="text-red-500 flex items-center gap-2 group-hover:text-red-400">
                                        Learn More <ArrowRight className="w-4 h-4"/>
                                    </button> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="py-24 bg-gradient-to-b from-gray-800 to-black">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-4xl font-bold text-center mb-6">Why We're Different</h2>
                    <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
                        See how Aarna Gym stands out from the competition with our comprehensive offerings and member-first approach.
                    </p>

                    {comparisonData.map((section, index) => (
                        <div key={index} className="mb-16 max-w-7xl mx-auto ">
                            <h3 className="text-3xl font-bold mb-8 text-center text-red-500">{section.category}</h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Aarna Gym Column */}
                                <div className="bg-gray-900 rounded-lg p-8">
                                    <div className="text-xl font-bold mb-6 flex items-center gap-3">
                                        <span className="text-red-500">Aarna Gym</span>
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

                                {/* Other Gyms Column */}
                                <div className="bg-gray-900/50 rounded-lg p-8">
                                    <div className="text-xl font-bold mb-6 flex items-center gap-3">
                                        <span className="text-gray-500">Other Gyms</span>
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

                    {/* <div className="text-center mt-16">
                        <button className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300 flex items-center gap-2 mx-auto">
                            Join Aarna Gym Today
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div> */}
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-5 bg-black">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Life?</h2>
                    <p className="text-xl text-gray-400 mb-8">Join Aarna Gym today and start your fitness journey!</p>
                    <button className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300">
                        Join Membership
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AarnaGym;
