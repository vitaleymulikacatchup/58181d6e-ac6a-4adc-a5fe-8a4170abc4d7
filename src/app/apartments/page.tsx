"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Home, TrendingUp, Facebook, Twitter, Instagram } from "lucide-react";

export default function ApartmentsPage() {
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

      <div id="apartments" data-section="apartments">
        <ProductCardOne
          title="Featured Apartments"
          description="Discover our handpicked selection of premium rental properties available now"
          tag="Available Now"
          tagIcon={Home}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "apt1",
              name: "Studio Downtown",
              price: "$1,200/mo",
              imageSrc: "https://pixabay.com/get/gabb9116171adea2a8008663271c81a66aeaed82dc01af6104a55dac122443d5afeecba1338508c1b17bf06f3c8cc9c519dccc930a78f7225cdbbb0195a572c22_1280.jpg",
              imageAlt: "Modern studio apartment"
            },
            {
              id: "apt2",
              name: "1BR Garden View",
              price: "$1,650/mo",
              imageSrc: "https://pixabay.com/get/g74e564a5a9febe1c4a07098b4af7085d03cd8c92667ee025313716c45ba561dfce259cf18c2f83974832a252de08ee6a853cea0684c885341fdcd329c5492362_1280.jpg",
              imageAlt: "One bedroom apartment"
            },
            {
              id: "apt3",
              name: "2BR Family Unit",
              price: "$2,200/mo",
              imageSrc: "https://pixabay.com/get/g4e9e7fe55b32275bd1390926871e3edbc3d63673af4289052666377c573b9b25b0f438c71480ae09021922e211a2a8571c7244fc36bb40ae9e3b4be2c0b6f181_1280.jpg",
              imageAlt: "Two bedroom apartment"
            },
            {
              id: "apt4",
              name: "Luxury Penthouse",
              price: "$4,500/mo",
              imageSrc: "https://pixabay.com/get/gf697bcb3d758d365cf4b07b8f867271c6788fdb4b1309da67457c873af747fb4fa29d04290f6286e07684e982b3629b0b3c7c73bcab76b744d14405efe956c27_1280.jpg",
              imageAlt: "Luxury penthouse apartment"
            },
            {
              id: "apt5",
              name: "Modern Loft",
              price: "$2,800/mo",
              imageSrc: "https://pixabay.com/get/gabb9116171adea2a8008663271c81a66aeaed82dc01af6104a55dac122443d5afeecba1338508c1b17bf06f3c8cc9c519dccc930a78f7225cdbbb0195a572c22_1280.jpg",
              imageAlt: "Modern loft apartment"
            }
          ]}
          buttons={[
            {
              text: "View All Listings",
              href: "https://example.com"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Platform Success"
          description="Trusted by thousands of renters and property owners nationwide"
          tag="By The Numbers"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="opacity"
          metrics={[
            {
              id: "1",
              value: "50K+",
              description: "Active Listings"
            },
            {
              id: "2",
              value: "12K+",
              description: "Happy Tenants"
            },
            {
              id: "3",
              value: "98%",
              description: "Success Rate"
            },
            {
              id: "4",
              value: "24/7",
              description: "Customer Support"
            }
          ]}
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