"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { MapPin, Home, MessageSquare, Facebook, Twitter, Instagram, ArrowUpRight } from "lucide-react";

export default function HomePage() {
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

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Find Your Perfect Rental"
          description="Search thousands of apartments and homes across the city. Filter by location, price, amenities and more to find your ideal place to call home."
          tag="Apartment Search"
          tagIcon={MapPin}
          buttons={[
            {
              text: "Start Searching",
              href: "/apartments"
            },
            {
              text: "List Property",
              href: "https://example.com"
            }
          ]}
          mediaItems={[
            {
              imageSrc: "https://pixabay.com/get/g259c5e48bd571e07cd86295d32ad4742d43cf254ecc11a01f60e4fbe5a229f6b39453050a338bbf697da729cd38a63a83db56a3da101a2cc426830dba46f6b82_1280.jpg",
              imageAlt: "Modern apartment building"
            },
            {
              imageSrc: "https://pixabay.com/get/g2bb7735fe9a9dca6db708a652327fc4704478c3cd07e2e1ed783ac12e1dc5136064a827d6a368d54dcbcf188f0674d539afb0994b10e7f777370d46f57ad5dec_1280.jpg",
              imageAlt: "Luxury apartment interior"
            },
            {
              imageSrc: "https://pixabay.com/get/g0cc308ccfea904464cff26a950eb27ff9db21cc667bed336abc18bc2018f7f45086cd08dc2157f2803931f09cb23d1bd296a8e317f8537d35b0814b81bb29dac_1280.jpg",
              imageAlt: "Apartment with city view"
            },
            {
              imageSrc: "https://pixabay.com/get/g4737bd433d5a24b06af91971f078fc7880288c40f9f21a46ad5e4c74f7ea6de4e3362ff0ff03d19cd9eb649ef27ade27985001adecf0df1fa441f127f1c6ca3a_1280.jpg",
              imageAlt: "Contemporary apartment kitchen"
            },
            {
              imageSrc: "https://pixabay.com/get/g0fcbbf981b67b6d10d3310a7c81504a3eea8203711f5c87e3367a8671954a51a7f37fa8e305845f955ddf294d1957dbf070bdaf1c56e993deddf561c9a4cb8a3_1280.jpg",
              imageAlt: "Residential apartment facade"
            }
          ]}
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

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Users Say"
          description="Real feedback from renters who found their perfect home through our platform"
          tag="Reviews"
          tagIcon={MessageSquare}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="blur-reveal"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Marketing Manager",
              company: "Tech Startup",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g3be2cbbb57dce0b1b07f72b60d14faf2717be22501a0e29e67047abda51a9d1e64d29dd3a4f6221915f6d432d307d4246d76bfd054956b8508d2851b94cdaf80_1280.png",
              imageAlt: "Sarah Johnson portrait"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Software Developer",
              company: "Digital Agency",
              rating: 5,
              imageSrc: "https://pixabay.com/get/ga0dcbc3eee41c2083be3cbba1fc2136c5f36ed9fc1dcfcf79023626e54247033c0d7407f31b3ebe500be69adeec42fbba62538a5b5820df091adc4a8ec61b7a0_1280.jpg",
              imageAlt: "Michael Chen portrait"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Nurse",
              company: "City Hospital",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g8c66d3b839549ec067dd0bd5429de5a71c015fc7f75c391eff38cbaa885367ae71749e9565ec16d5828a9fcc9abec86c07d9ee33c97fbf5aeb7beb87079ccf44_1280.jpg",
              imageAlt: "Emily Rodriguez portrait"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Teacher",
              company: "Public School",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g38e80f28906d9aff3129344a73fd71647b1458d6b1aa6558cce033195c20ba8cd3bcc886ec1a18babcbf798a275e39160f1f229f9a2b20c70433ecc74ddfef5c_1280.jpg",
              imageAlt: "David Kim portrait"
            },
            {
              id: "5",
              name: "Lisa Thompson",
              role: "Real Estate Agent",
              company: "Premium Realty",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g98e14e6de29cc12dea97bad3c20ca1367a0a6943c4537941ce89bef1999de9d7aed1db5085f6dc613729d9e64313af0033d5a7c14bbe7067984e6ee3b5c48f35_1280.jpg",
              imageAlt: "Lisa Thompson portrait"
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Latest Rental Tips"
          description="Expert advice and insights to help you find and secure your perfect rental property"
          tag="Blog"
          tagIcon={ArrowUpRight}
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {
              id: "1",
              category: "Tips",
              title: "First-Time Renter's Guide",
              excerpt: "Essential tips and tricks for navigating your first apartment search and lease signing",
              imageSrc: "https://pixabay.com/get/g3be2cbbb57dce0b1b07f72b60d14faf2717be22501a0e29e67047abda51a9d1e64d29dd3a4f6221915f6d432d307d4246d76bfd054956b8508d2851b94cdaf80_1280.png",
              imageAlt: "First-time renter guide",
              authorName: "Sarah Mitchell",
              authorAvatar: "https://pixabay.com/get/g3be2cbbb57dce0b1b07f72b60d14faf2717be22501a0e29e67047abda51a9d1e64d29dd3a4f6221915f6d432d307d4246d76bfd054956b8508d2851b94cdaf80_1280.png",
              date: "Jan 15, 2025",
              onBlogClick: () => console.log('Blog clicked')
            },
            {
              id: "2",
              category: "Finance",
              title: "Understanding Rental Costs",
              excerpt: "Breaking down all the costs involved in renting an apartment beyond just monthly rent",
              imageSrc: "https://pixabay.com/get/g0cc308ccfea904464cff26a950eb27ff9db21cc667bed336abc18bc2018f7f45086cd08dc2157f2803931f09cb23d1bd296a8e317f8537d35b0814b81bb29dac_1280.jpg",
              imageAlt: "Rental costs guide",
              authorName: "Michael Rodriguez",
              authorAvatar: "https://pixabay.com/get/ga0dcbc3eee41c2083be3cbba1fc2136c5f36ed9fc1dcfcf79023626e54247033c0d7407f31b3ebe500be69adeec42fbba62538a5b5820df091adc4a8ec61b7a0_1280.jpg",
              date: "Jan 12, 2025",
              onBlogClick: () => console.log('Blog clicked')
            },
            {
              id: "3",
              category: "Legal",
              title: "Tenant Rights & Responsibilities",
              excerpt: "Know your rights as a tenant and understand your lease obligations",
              imageSrc: "https://pixabay.com/get/g2bb7735fe9a9dca6db708a652327fc4704478c3cd07e2e1ed783ac12e1dc5136064a827d6a368d54dcbcf188f0674d539afb0994b10e7f777370d46f57ad5dec_1280.jpg",
              imageAlt: "Tenant rights guide",
              authorName: "Emma Johnson",
              authorAvatar: "https://pixabay.com/get/g8c66d3b839549ec067dd0bd5429de5a71c015fc7f75c391eff38cbaa885367ae71749e9565ec16d5828a9fcc9abec86c07d9ee33c97fbf5aeb7beb87079ccf44_1280.jpg",
              date: "Jan 10, 2025",
              onBlogClick: () => console.log('Blog clicked')
            },
            {
              id: "4",
              category: "Moving",
              title: "Moving Day Checklist",
              excerpt: "Complete checklist to ensure a smooth and stress-free moving experience",
              imageSrc: "https://pixabay.com/get/g4737bd433d5a24b06af91971f078fc7880288c40f9f21a46ad5e4c74f7ea6de4e3362ff0ff03d19cd9eb649ef27ade27985001adecf0df1fa441f127f1c6ca3a_1280.jpg",
              imageAlt: "Moving day checklist",
              authorName: "David Chen",
              authorAvatar: "https://pixabay.com/get/g38e80f28906d9aff3129344a73fd71647b1458d6b1aa6558cce033195c20ba8cd3bcc886ec1a18babcbf798a275e39160f1f229f9a2b20c70433ecc74ddfef5c_1280.jpg",
              date: "Jan 8, 2025",
              onBlogClick: () => console.log('Blog clicked')
            }
          ]}
          buttons={[
            {
              text: "View All Articles",
              href: "/blog"
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