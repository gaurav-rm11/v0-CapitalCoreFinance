"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
    {
        tempId: 0,
        testimonial: "Capital Core Finance made my home loan process incredibly smooth. The team guided me through every step and I got approval within 10 days. Highly recommended!",
        by: "Rajesh Kumar, Bangalore",
        imgSrc: "https://i.pravatar.cc/150?img=12"
    },
    {
        tempId: 1,
        testimonial: "I was worried about getting a business loan for my startup, but Capital Core Finance believed in my vision. Their interest rates are competitive and the process was transparent.",
        by: "Priya Sharma, Mumbai",
        imgSrc: "https://i.pravatar.cc/150?img=5"
    },
    {
        tempId: 2,
        testimonial: "Best decision to choose Capital Core for my personal loan. No hidden charges, quick disbursal, and excellent customer support. Thank you team!",
        by: "Amit Patel, Ahmedabad",
        imgSrc: "https://i.pravatar.cc/150?img=13"
    },
    {
        tempId: 3,
        testimonial: "The home loan EMI calculator on their website helped me plan my finances perfectly. Got my dream home loan at the best rates. Very satisfied customer!",
        by: "Sneha Reddy, Hyderabad",
        imgSrc: "https://i.pravatar.cc/150?img=9"
    },
    {
        tempId: 4,
        testimonial: "Capital Core Finance helped me consolidate my debts with a single loan at lower interest. My financial stress has reduced significantly. Grateful for their support!",
        by: "Vikram Singh, Delhi",
        imgSrc: "https://i.pravatar.cc/150?img=14"
    },
    {
        tempId: 5,
        testimonial: "I needed urgent funds for my daughter's education. Capital Core processed my education loan in just 5 days. Professional and caring team!",
        by: "Meena Iyer, Chennai",
        imgSrc: "https://i.pravatar.cc/150?img=10"
    },
    {
        tempId: 6,
        testimonial: "As a first-time home buyer, I was nervous about the loan process. Capital Core's team explained everything clearly and made it hassle-free. Excellent service!",
        by: "Arjun Nair, Kochi",
        imgSrc: "https://i.pravatar.cc/150?img=15"
    },
    {
        tempId: 7,
        testimonial: "Got my vehicle loan approved in record time! The documentation was minimal and the interest rate was better than other banks. Very happy with Capital Core!",
        by: "Kavita Desai, Pune",
        imgSrc: "https://i.pravatar.cc/150?img=8"
    },
    {
        tempId: 8,
        testimonial: "Capital Core Finance understood my business needs and offered a customized loan solution. Their flexibility and support helped me expand my business successfully.",
        by: "Suresh Gupta, Jaipur",
        imgSrc: "https://i.pravatar.cc/150?img=16"
    },
    {
        tempId: 9,
        testimonial: "The entire loan process was digital and paperless. I could track my application status online. Modern banking at its best! Thank you Capital Core!",
        by: "Anjali Mehta, Surat",
        imgSrc: "https://i.pravatar.cc/150?img=11"
    },
    {
        tempId: 10,
        testimonial: "I refinanced my existing home loan with Capital Core and saved lakhs in interest. Their team did all the hard work. Highly professional service!",
        by: "Karthik Krishnan, Coimbatore",
        imgSrc: "https://i.pravatar.cc/150?img=17"
    },
    {
        tempId: 11,
        testimonial: "Capital Core gave me a personal loan when other banks rejected my application. They looked beyond my credit score and understood my situation. Forever grateful!",
        by: "Deepak Rao, Mangalore",
        imgSrc: "https://i.pravatar.cc/150?img=18"
    },
    {
        tempId: 12,
        testimonial: "The best part about Capital Core is their post-loan support. Any query I have, they respond immediately. True customer-first approach!",
        by: "Pooja Agarwal, Indore",
        imgSrc: "https://i.pravatar.cc/150?img=7"
    },
    {
        tempId: 13,
        testimonial: "I got my loan sanctioned even with a moderate credit score. Capital Core's team worked with me to improve my eligibility. They really care about their customers!",
        by: "Ramesh Pillai, Trivandrum",
        imgSrc: "https://i.pravatar.cc/150?img=19"
    },
    {
        tempId: 14,
        testimonial: "From application to disbursal, everything was smooth and transparent. No last-minute surprises. Capital Core Finance has earned my trust and recommendation!",
        by: "Nisha Kapoor, Chandigarh",
        imgSrc: "https://i.pravatar.cc/150?img=6"
    }
];

interface TestimonialCardProps {
    position: number;
    testimonial: typeof testimonials[0];
    handleMove: (steps: number) => void;
    cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    position,
    testimonial,
    handleMove,
    cardSize
}) => {
    const isCenter = position === 0;

    return (
        <div
            onClick={() => handleMove(position)}
            className={cn(
                "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
                isCenter
                    ? "z-10 bg-primary text-primary-foreground border-primary"
                    : "z-0 bg-card text-card-foreground border-border hover:border-primary/50"
            )}
            style={{
                width: cardSize,
                height: cardSize,
                clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
                transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
                boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent"
            }}
        >
            <span
                className="absolute block origin-top-right rotate-45 bg-border"
                style={{
                    right: -2,
                    top: 48,
                    width: SQRT_5000,
                    height: 2
                }}
            />
            <img
                src={testimonial.imgSrc}
                alt={`${testimonial.by.split(',')[0]}`}
                className="mb-4 h-14 w-12 bg-muted object-cover object-top"
                style={{
                    boxShadow: "3px 3px 0px hsl(var(--background))"
                }}
            />
            <h3 className={cn(
                "text-base sm:text-xl font-medium",
                isCenter ? "text-primary-foreground" : "text-foreground"
            )}>
                "{testimonial.testimonial}"
            </h3>
            <p className={cn(
                "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
                isCenter ? "text-primary-foreground/80" : "text-muted-foreground"
            )}>
                - {testimonial.by}
            </p>
        </div>
    );
};

export const StaggerTestimonials: React.FC = () => {
    const [cardSize, setCardSize] = useState(365);
    const [testimonialsList, setTestimonialsList] = useState(testimonials);

    const handleMove = (steps: number) => {
        const newList = [...testimonialsList];
        if (steps > 0) {
            for (let i = steps; i > 0; i--) {
                const item = newList.shift();
                if (!item) return;
                newList.push({ ...item, tempId: Math.random() });
            }
        } else {
            for (let i = steps; i < 0; i++) {
                const item = newList.pop();
                if (!item) return;
                newList.unshift({ ...item, tempId: Math.random() });
            }
        }
        setTestimonialsList(newList);
    };

    useEffect(() => {
        const updateSize = () => {
            const { matches } = window.matchMedia("(min-width: 640px)");
            setCardSize(matches ? 365 : 290);
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return (
        <div
            className="relative w-full overflow-hidden"
            style={{ height: 600 }}
        >
            {testimonialsList.map((testimonial, index) => {
                const position = testimonialsList.length % 2
                    ? index - (testimonialsList.length + 1) / 2
                    : index - testimonialsList.length / 2;
                return (
                    <TestimonialCard
                        key={testimonial.tempId}
                        testimonial={testimonial}
                        handleMove={handleMove}
                        position={position}
                        cardSize={cardSize}
                    />
                );
            })}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                <button
                    onClick={() => handleMove(-1)}
                    className={cn(
                        "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
                        "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    )}
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft />
                </button>
                <button
                    onClick={() => handleMove(1)}
                    className={cn(
                        "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
                        "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    )}
                    aria-label="Next testimonial"
                >
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
};
