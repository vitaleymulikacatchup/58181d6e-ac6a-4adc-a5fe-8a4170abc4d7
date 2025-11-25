"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import FaqBase from '@/components/sections/faq/FaqBase';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { HelpCircle, Building, Facebook, Twitter, Instagram } from "lucide-react";

export default function AboutPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="large"
      sizing="large"
      background="plain"
      cardStyle="solid-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="layered"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Browse", id: "/apartments" },
            { name: "Pricing", id: "/pricing" },
            { name: "About", id: "/about" },
            { name: "Contact", id: "/contact" }
          ]}
          brandName="RentSearch"
          button={{
            text: "List Property",
            href: "https://example.com"
          }}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about searching for and renting apartments"
          tag="Help"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "How do I search for apartments?",
              content: "Use our search filters to narrow down listings by location, price range, number of bedrooms, amenities, and more. You can also save your favorite searches and get alerts when new matching properties become available."
            },
            {
              id: "2",
              title: "Are there any fees to use the platform?",
              content: "Basic searching and browsing is completely free. We offer premium plans with additional features like advanced filters, unlimited saved favorites, and priority support starting at $19/month."
            },
            {
              id: "3",
              title: "How do I contact landlords?",
              content: "Each listing includes contact information for the property owner or manager. You can reach out directly via phone, email, or through our messaging system to schedule viewings and ask questions."
            },
            {
              id: "4",
              title: "Can I list my property on the platform?",
              content: "Yes! Property owners and managers can list their rentals on our platform. We offer various listing packages to help you reach qualified tenants quickly and efficiently."
            },
            {
              id: "5",
              title: "Is the information on listings accurate?",
              content: "We work closely with property owners to ensure listing information is current and accurate. However, we recommend verifying details directly with the landlord and viewing properties in person before making decisions."
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Leading Property Companies"
          description="Join thousands of property managers and landlords who use our platform"
          tag="Partners"
          tagIcon={Building}
          textboxLayout="default"
          logos={[
            "https://pixabay.com/get/g91aebd43c27c238f9c0cab50c74aa1f86ad8b5620d3e5ed9746cd07fc9d03523144e9c652a4c3ec272b34a6be11bebb324824ff9f713d2a11107e5b783174351_1280.jpg",
            "https://pixabay.com/get/g3ef4efc239f68c4782ea3e7c359de9742c8d7da49eb6bcd15206d92a098d37f67ee173971d10f17ba82bf656fef0982706d0f9f93669734ca2734880aa896af8_1280.jpg",
            "https://pixabay.com/get/g4ce7ec5a883db641917c9d23a72050ffb390e0e9c70d8d3026ccdcd3f8725ec9fd430d8479e00f6afa7e27bc4feb2d57b7870914d28a67a31742aff932aa88c0_1280.jpg",
            "https://pixabay.com/get/g7bebdb2c572dc097ae8d7a63af857086ca6631e400075d71ecfbe8038ee92c469ac030943e02b73cd4b03f516eb52db62cc3292968f13b4f9fe0771562ffa80a_1280.jpg",
            "https://pixabay.com/get/gf1ea5c10c487a128ff55839563f20a3f40c3706dbfe1d28ee0fe346d6832068492e1b679bc9a772d5e9c10ec29ea42de7659d97b81f747053789156ae94a5ed0_1280.jpg",
            "https://pixabay.com/get/gb6b1469f0789b2c1ce85fdd1201e2a96e2f3e5ae11fbec18e4bcf4f88ffb3c5d0cd8857a2617e04057cbe08fec4bd3896ef60f207ddd331bb5027caccdb9f497_1280.jpg",
            "https://pixabay.com/get/g6fa96e03683ffd295f939c02f6d0f55beaefe218a9641f7e03f50daec4c80f2ab0d029ff2fa6aeca7603b93545740b6d95a39f1b511d7771a3c4d007d44acc5a_1280.jpg"
          ]}
          speed={30}
          showCard={true}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          brandName="RentSearch"
          copyrightText="© 2025 RentSearch. All rights reserved."
          columns={[
            {
              title: "Platform",
              items: [
                {
                  label: "Search Apartments",
                  href: "/apartments"
                },
                {
                  label: "List Property",
                  href: "https://example.com"
                },
                {
                  label: "Pricing Plans",
                  href: "/pricing"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "Help Center",
                  href: "/faq"
                },
                {
                  label: "Contact Us",
                  href: "/contact"
                },
                {
                  label: "Report Issue",
                  href: "https://example.com"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "/about"
                },
                {
                  label: "Careers",
                  href: "https://example.com"
                },
                {
                  label: "Press",
                  href: "https://example.com"
                }
              ]
            },
            {
              title: "Legal",
              items: [
                {
                  label: "Privacy Policy",
                  href: "https://example.com"
                },
                {
                  label: "Terms of Service",
                  href: "https://example.com"
                },
                {
                  label: "Cookie Policy",
                  href: "https://example.com"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Facebook,
              href: "https://facebook.com",
              ariaLabel: "Follow us on Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com",
              ariaLabel: "Follow us on Twitter"
            },
            {
              icon: Instagram,
              href: "https://instagram.com",
              ariaLabel: "Follow us on Instagram"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}