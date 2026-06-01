"use client";

import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MediaAbout from '@/components/sections/about/MediaAbout';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Linkedin, Twitter, Instagram } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="smallMedium"
      sizing="medium"
      background="grid"
      cardStyle="layered-gradient"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Luxury Estate Group"
          navItems={[
            { name: "Home", id: "#home" },
            { name: "About", id: "#about" },
            { name: "Properties", id: "#properties" },
            { name: "Services", id: "#features" },
            { name: "Team", id: "#team" },
            { name: "Contact", id: "#contact" },
          ]}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=l1cuhe"
          logoAlt="Luxury Estate Group Logo"
          button={{ text: "Enquire Now", href: "#contact" }}
          animateOnLoad={true}
        />
      </div>
      <div id="home" data-section="home">
        <HeroCentered
          title="Discover Your Next Exclusive Residence"
          description="Unrivaled Luxury, Personalized Service, Exceptional Results for Discerning Clients."
          background={{
            variant: "downward-rays-static-grid"}}
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/elegant-woman-looking-away-low-angle-shot_23-2148230175.jpg", alt: "Senior Agent Michael" },
            { src: "http://img.b2bpic.net/free-photo/proud-entrepreneur-with-employees-background_1098-3585.jpg", alt: "Lead Broker Sarah" },
            { src: "http://img.b2bpic.net/free-photo/medium-shot-man-working-as-real-estate-agent_23-2151064844.jpg", alt: "Founding Partner David" },
            { src: "http://img.b2bpic.net/free-photo/medium-shot-smiley-man-holding-document_23-2149445754.jpg", alt: "Property Specialist Emily" },
          ]}
          avatarText="Trusted by over 100+ discerning clients worldwide"
          buttons={[
            { text: "View Properties", href: "#properties" },
            { text: "Contact Agent", href: "#contact" },
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>
      <div id="about" data-section="about">
        <MediaAbout
          title="Curating the Finest Luxury Real Estate"
          description="With decades of experience in the high-end market, we specialize in connecting discerning clients with their dream homes. Our expertise spans exquisite estates, penthouses, and waterfront properties, offering unparalleled market insight and a bespoke acquisition process."
          tag="Our Legacy"
          buttons={[{ text: "Learn More", href: "#team" }]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/business-professionals-gather-lobby_482257-75506.jpg"
          imageAlt="Luxury Real Estate Office Interior"
          useInvertedBackground={true}
        />
      </div>
      <div id="features" data-section="features">
        <FeatureCardTwentyNine
          features={[
            {
              title: "Global Network Access",              description: "Leverage our extensive international network to discover off-market opportunities and connect with exclusive properties worldwide.",              imageSrc: "http://img.b2bpic.net/free-photo/high-tech-view-futuristic-earth_23-2151100329.jpg",              imageAlt: "Global Network Map",              titleImageSrc: "http://img.b2bpic.net/free-photo/high-tech-view-futuristic-earth_23-2151100329.jpg",              buttonText: "Explore"},
            {
              title: "Personalized Private Viewings",              description: "Experience discreet and bespoke property tours tailored to your schedule and preferences, ensuring privacy and exclusivity.",              imageSrc: "http://img.b2bpic.net/free-photo/financial-independent-woman-buying-new-house_23-2149571927.jpg",              imageAlt: "Private Property Viewing",              titleImageSrc: "http://img.b2bpic.net/free-photo/financial-independent-woman-buying-new-house_23-2149571927.jpg",              buttonText: "Arrange"},
            {
              title: "Strategic Investment Advisory",              description: "Benefit from expert market analysis and insights, guiding you toward sound investment decisions in prime luxury markets.",              imageSrc: "http://img.b2bpic.net/free-photo/data-hand_23-2151957116.jpg",              imageAlt: "Investment Advisory Chart",              titleImageSrc: "http://img.b2bpic.net/free-photo/data-hand_23-2151957116.jpg",              buttonText: "Consult"},
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          title="Redefining Luxury Property Experiences"
          description="We offer a suite of services designed to exceed expectations, ensuring every transaction is seamless and rewarding."
          tag="Exclusive Services"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>
      <div id="properties" data-section="properties">
        <ProductCardOne
          products={[
            {
              id: "p1",              name: "Oceanfront Modern Villa",              price: "$15,000,000",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-young-asian-woman-smile-happy-relax-around-swimming-pool-hotel-resort-leisure_74190-8389.jpg",              imageAlt: "Oceanfront Modern Villa"},
            {
              id: "p2",              name: "Downtown Penthouse Suite",              price: "$8,500,000",              imageSrc: "http://img.b2bpic.net/free-photo/charming-african-american-woman-model-black-jacket-hat-waist-bag-relaxing-cafe-free-time-with-mobile-phone_627829-5382.jpg",              imageAlt: "Downtown Penthouse Suite"},
            {
              id: "p3",              name: "Historic Country Estate",              price: "$12,000,000",              imageSrc: "http://img.b2bpic.net/free-photo/river-passing-through-area-with-many-trees_23-2148293943.jpg",              imageAlt: "Historic Country Estate"},
            {
              id: "p4",              name: "Waterfront Designer Home",              price: "$9,800,000",              imageSrc: "http://img.b2bpic.net/free-photo/governor-s-palace-daytime-williamsburg-usa_181624-29182.jpg",              imageAlt: "Waterfront Designer Home"},
            {
              id: "p5",              name: "Mountain Ski Chalet",              price: "$7,200,000",              imageSrc: "http://img.b2bpic.net/free-photo/view-luxurious-villa-with-modern-architectural-design_23-2151694014.jpg",              imageAlt: "Mountain Ski Chalet"},
            {
              id: "p6",              name: "Desert Architectural Marvel",              price: "$6,500,000",              imageSrc: "http://img.b2bpic.net/free-photo/blending-futuristic-building-seamlessly-into-desert-landscape_23-2151248330.jpg",              imageAlt: "Desert Architectural Marvel"},
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          title="Exceptional Properties, Unmatched Elegance"
          description="Explore our curated collection of the most prestigious homes and estates available on the market."
          tag="Featured Listings"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSixteen
          testimonials={[
            {
              id: "t1",              name: "Eleanor Vance",              role: "CEO, Vance Holdings",              company: "Vance Holdings",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/american-african-black-beautiful-business_1303-1344.jpg",              imageAlt: "Eleanor Vance"},
            {
              id: "t2",              name: "Marcus Thorne",              role: "Founder, Thorne Group",              company: "Thorne Group",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-businessman-with-folded-arms-looking-camera_23-2147955314.jpg",              imageAlt: "Marcus Thorne"},
            {
              id: "t3",              name: "Isabella Rossi",              role: "Philanthropist",              company: "Private Client",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-executives-showing-thumbs-up_1098-1828.jpg",              imageAlt: "Isabella Rossi"},
            {
              id: "t4",              name: "Julian Chen",              role: "Tech Investor",              company: "Chen Innovations",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/concentrated-young-colleagues-holding-documents_171337-752.jpg",              imageAlt: "Julian Chen"},
            {
              id: "t5",              name: "Victoria Sterling",              role: "Art Collector",              company: "Sterling Arts",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-female-with-glasses_23-2148415937.jpg",              imageAlt: "Victoria Sterling"},
          ]}
          kpiItems={[
            { value: "$2B+", label: "Luxury Sales" },
            { value: "25+", label: "Years Expertise" },
            { value: "500+", label: "Clients Served" },
          ]}
          animationType="depth-3d"
          title="Trusted by Discerning Buyers & Sellers"
          description="Hear from our clients about their unparalleled experiences in buying and selling luxury real estate."
          tag="Client Success Stories"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>
      <div id="team" data-section="team">
        <TeamCardTwo
          members={[
            {
              id: "m1",              name: "Arthur P. Sterling",              role: "Founding Partner & CEO",              description: "Arthur's visionary leadership and unparalleled market insight have positioned Luxury Estate Group at the forefront of the global luxury real estate market.",              imageSrc: "http://img.b2bpic.net/free-photo/businessman_23-2148006268.jpg",              imageAlt: "Arthur P. Sterling",              socialLinks: [{ icon: Linkedin, url: "#" }, { icon: Twitter, url: "#" }],
            },
            {
              id: "m2",              name: "Isabelle Dubois",              role: "Director of Exclusive Listings",              description: "With a keen eye for architectural masterpieces and a vast network, Isabelle curates our portfolio of truly exceptional properties.",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-businessman-wearing-glasses_329181-677.jpg",              imageAlt: "Isabelle Dubois",              socialLinks: [{ icon: Linkedin, url: "#" }, { icon: Instagram, url: "#" }],
            },
            {
              id: "m3",              name: "Julian Carter",              role: "Head of Client Relations",              description: "Julian ensures every client receives a bespoke and seamless experience, managing relationships with discretion and precision.",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-bright-curly-woman-dressed-blue-jacket-glasses-stands-with-serious-emotions-pink_291650-1099.jpg",              imageAlt: "Julian Carter",              socialLinks: [{ icon: Linkedin, url: "#" }, { icon: Twitter, url: "#" }],
            },
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          title="Meet Our Esteemed Real Estate Advisors"
          description="Our team of dedicated professionals offers profound market knowledge and a commitment to client satisfaction, ensuring your luxury journey is seamless."
          tag="Our Experts"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>
      <div id="partners" data-section="partners">
        <SocialProofOne
          names={[
            "Global Finance Elite",            "Sovereign Interiors",            "Apex Auto Group",            "Curator's Vault Art",            "SkyBound Private Charters",            "Oceanic Yacht Brokerage",            "The Grandeur Collection Hotels"]}
          title="Partnering with the Best in Luxury"
          description="We collaborate with leading luxury brands and financial institutions to provide comprehensive solutions and an elevated experience."
          tag="Our Network"
          textboxLayout="default"
          useInvertedBackground={false}
          speed={40}
          showCard={true}
        />
      </div>
      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Connect with Us"
          title="Your Journey to Luxury Starts Here"
          description="Contact our expert team today for a confidential consultation and discover exclusive opportunities tailored to your needs."
          buttons={[
            { text: "Schedule a Consultation", href: "mailto:info@luxuryestategroup.com" },
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={true}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Luxury Estate Group"
          leftLink={{ text: "Privacy Policy", href: "#" }}
          rightLink={{ text: "Terms of Service", href: "#" }}
        />
      </div>
    </ThemeProvider>
  );
}
