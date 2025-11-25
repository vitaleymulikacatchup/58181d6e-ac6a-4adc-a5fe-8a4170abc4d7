"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import FeatureCardOne from "@/components/sections/feature/FeatureCardOne";
import AboutMetric from "@/components/sections/about/AboutMetric";
import TestimonialCardOne from "@/components/sections/testimonial/TestimonialCardOne";
import PricingCardOne from "@/components/sections/pricing/PricingCardOne";
import TeamCardOne from "@/components/sections/team/TeamCardOne";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterBase from "@/components/sections/footer/FooterBase";
import Link from "next/link";
import { TrendingUp, Search, Heart, DollarSign, Users, MapPin, Star, Check, Mail } from 'lucide-react';

export default function HomePage() {
  return (
    <ThemeProvider 
      defaultButtonVariant="hover-magnetic" 
      defaultTextAnimation="entrance-slide" 
      borderRadius="rounded" 
      contentWidth="medium" 
      sizing="medium" 
      background="none" 
      cardStyle="glass-elevated" 
      primaryButtonStyle="gradient" 
      secondaryButtonStyle="glass" 
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Features", id: "features" },
            { name: "About", id: "about" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="RentSearch"
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Find Your Dream Rental Home"
          description="Search thousands of apartments and houses with our advanced filtering system. Find the perfect place to call home."
          tag="Rental Search"
          imageSrc="/placeholders/placeholder1.webp"
          imageAlt="Beautiful apartment interior"
          buttons={[
            { text: "Start Searching", href: "#features" },
            { text: "Learn More", href: "#about" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardOne
          title="Why Choose RentSearch"
          description="Discover the features that make finding your next home effortless"
          tag="Features"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              title: "Advanced Search",
              description: "Filter by location, price, amenities, and more to find exactly what you're looking for",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Advanced search interface"
            },
            {
              title: "Verified Listings",
              description: "All properties are verified by our team to ensure accuracy and legitimacy",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Verified property listing"
            },
            {
              title: "Instant Notifications",
              description: "Get notified immediately when new properties matching your criteria become available",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Notification on mobile device"
            },
            {
              title: "Virtual Tours",
              description: "Take immersive virtual tours of properties from the comfort of your home",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Virtual tour experience"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="Trusted by thousands of renters across the country, RentSearch has become the go-to platform for finding quality rental properties with ease and confidence"
          metrics={[
            { icon: TrendingUp, label: "Properties Listed", value: "50,000+" },
            { icon: Users, label: "Happy Renters", value: "25,000+" },
            { icon: MapPin, label: "Cities Covered", value: "150+" },
            { icon: Star, label: "Average Rating", value: "4.9/5" }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Users Say"
          description="Real experiences from real renters who found their perfect home"
          tag="Testimonials"
          tagIcon={Heart}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Marketing Manager",
              company: "Tech Startup",
              rating: 5,
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Mike Chen",
              role: "Software Engineer",
              company: "Remote Company",
              rating: 5,
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Mike Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Graphic Designer",
              company: "Creative Agency",
              rating: 5,
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Emily Rodriguez"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Choose Your Plan"
          description="Find the perfect plan that fits your rental search needs"
          tag="Pricing"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "1",
              badge: "Basic",
              badgeIcon: Search,
              price: "Free",
              subtitle: "Perfect for casual browsing",
              features: [
                "Browse unlimited listings",
                "Basic search filters",
                "Save up to 10 favorites",
                "Email support"
              ]
            },
            {
              id: "2",
              badge: "Pro",
              badgeIcon: Star,
              price: "$19/month",
              subtitle: "Ideal for active searchers",
              features: [
                "Everything in Basic",
                "Advanced filters",
                "Unlimited favorites",
                "Instant notifications",
                "Priority support"
              ]
            },
            {
              id: "3",
              badge: "Premium",
              badgeIcon: Heart,
              price: "$39/month",
              subtitle: "For serious home hunters",
              features: [
                "Everything in Pro",
                "Virtual tour access",
                "Personal assistant",
                "Market insights",
                "24/7 phone support"
              ]
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Team"
          description="The dedicated professionals helping you find your perfect home"
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Alex Thompson",
              role: "CEO & Founder",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Alex Thompson"
            },
            {
              id: "2",
              name: "Maria Garcia",
              role: "Head of Product",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Maria Garcia"
            },
            {
              id: "3",
              name: "David Kim",
              role: "Lead Engineer",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "David Kim"
            },
            {
              id: "4",
              name: "Lisa Zhang",
              role: "Customer Success",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Lisa Zhang"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about using RentSearch"
          tag="Help"
          tagIcon={Check}
          textboxLayout="default"
          faqs={[
            {
              id: "1",
              title: "How do I search for apartments?",
              content: "Simply enter your desired location, price range, and preferred amenities in our search bar. You can further refine results using our advanced filters."
            },
            {
              id: "2",
              title: "Are all listings verified?",
              content: "Yes, our team verifies every listing to ensure accuracy and legitimacy. We work directly with landlords and property managers to maintain quality standards."
            },
            {
              id: "3",
              title: "How much does RentSearch cost?",
              content: "RentSearch offers a free basic plan with essential features. For advanced features like priority notifications and virtual tours, we offer affordable premium plans starting at $19/month."
            },
            {
              id: "4",
              title: "Can I schedule property viewings?",
              content: "Absolutely! You can schedule in-person viewings directly through our platform, or take virtual tours for many properties from the comfort of your home."
            },
            {
              id: "5",
              title: "How do I contact landlords?",
              content: "Once you find a property you're interested in, you can contact the landlord or property manager directly through our secure messaging system or provided contact information."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          tagIcon={Mail}
          title="Ready to Find Your Perfect Home?"
          description="Join thousands of satisfied renters who found their dream home through RentSearch. Start your search today!"
          inputPlaceholder="Enter your email address"
          buttonText="Start Searching"
          termsText="By signing up, you agree to our Terms of Service and Privacy Policy. Unsubscribe anytime."
          onSubmit={(email) => console.log('Signup email:', email)}
        />
      </div>

      <FooterBase
        columns={[
          {
            title: "Product",
            items: [
              { label: "Features", href: "features" },
              { label: "Pricing", href: "pricing" },
              { label: "Virtual Tours", href: "#" },
              { label: "Mobile App", href: "#" }
            ]
          },
          {
            title: "Company",
            items: [
              { label: "About Us", href: "about" },
              { label: "Our Team", href: "team" },
              { label: "Careers", href: "#" },
              { label: "Press", href: "#" }
            ]
          },
          {
            title: "Support",
            items: [
              { label: "Help Center", href: "faq" },
              { label: "Contact Us", href: "contact" },
              { label: "Community", href: "#" },
              { label: "Status", href: "#" }
            ]
          }
        ]}
        logoText="RentSearch"
        copyrightText="© 2025 | RentSearch"
        onPrivacyClick={() => console.log('Privacy policy clicked')}
      />
    </ThemeProvider>
  );
}