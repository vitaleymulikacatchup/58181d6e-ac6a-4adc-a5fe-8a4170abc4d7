"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Mail, Facebook, Twitter, Instagram } from "lucide-react";

export default function ContactPage() {
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

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          tagIcon={Mail}
          title="Ready to Find Your Perfect Rental?"
          description="Join thousands of renters who have found their dream home through our platform. Get started today with our free search tools."
          inputPlaceholder="Enter your email address"
          buttonText="Start Searching"
          termsText="By signing up, you agree to receive updates about new listings and platform features. Unsubscribe anytime."
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