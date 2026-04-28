"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import TeamCardTen from '@/components/sections/team/TeamCardTen';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="medium"
        sizing="medium"
        background="fluid"
        cardStyle="glass-depth"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        { name: "الرئيسية", id: "hero" },
        { name: "عن العيادة", id: "about" },
        { name: "خدماتنا", id: "features" },
        { name: "الفريق", id: "team" },
        { name: "اتصل بنا", id: "contact" },
      ]}
      brandName="عيادة سيد الأسنان"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{ variant: "sparkles-gradient" }}
      title="ابتسامتك هي أولويتنا في بغداد"
      description="نقدم خدمات طب الأسنان المتطورة بأعلى معايير الجودة والتعقيم لضمان راحتك وصحة أسنانك."
      leftCarouselItems={[{ imageSrc: "http://img.b2bpic.net/free-photo/dental-doctor-standing-clinic_1303-26408.jpg?_wi=2" }]}
      rightCarouselItems={[{ imageSrc: "http://img.b2bpic.net/free-photo/attractive-brunette-female-dentist-chair-stomatology-room_613910-11484.jpg?_wi=2" }]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[{ type: "text", content: "نعتني بابتسامتك بأحدث التقنيات" }]}
      buttons={[{ text: "احجز الآن", href: "#contact" }]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwelve
      animationType="scale-rotate"
      textboxLayout="split"
      useInvertedBackground={false}
      title="خدماتنا المتميزة"
      description="نقدم مجموعة متكاملة من خدمات طب الأسنان المتطورة لضمان حصولك على ابتسامة مشرقة وصحية."
      features={[
        { id: "1", label: "زراعة", title: "زراعة الأسنان", items: ["حلول دائمة", "جودة عالية"] },
        { id: "2", label: "تجميل", title: "تبييض الأسنان", items: ["نتائج فورية", "آمنة تماماً"] },
        { id: "3", label: "تقويم", title: "تقويم الأسنان", items: ["تصحيح مثالي", "أنظمة حديثة"] },
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      title="إنجازاتنا"
      tag="الأرقام تتحدث"
      metrics={[
        { id: "1", value: "2000+", description: "مريض سعيد" },
        { id: "2", value: "15+", description: "سنة خبرة" },
        { id: "3", value: "100%", description: "رضا المرضى" },
      ]}
      metricsAnimation="slide-up"
      useInvertedBackground={false}
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardTen
      title="فريقنا الطبي"
      tag="الخبراء"
      memberVariant="card"
      useInvertedBackground={false}
      members={[
        { id: "1", name: "د. علي حسين", imageSrc: "http://img.b2bpic.net/free-photo/close-up-boy-dentist_23-2149206291.jpg" },
        { id: "2", name: "د. منى محمود", imageSrc: "http://img.b2bpic.net/free-photo/nurse-dentist-showing-green-screen-display-stomatology-senior-doctor-while-examining-tooth-pain-man-patient-sittinh-dental-chair_482257-4900.jpg" },
      ]}
      membersAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="depth-3d"
      title="آراء مرضانا"
      description="ماذا يقول مرضانا عن تجربتهم معنا"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "أحمد", role: "مريض", testimonial: "تجربة رائعة." },
        { id: "2", name: "سارة", role: "مريضة", testimonial: "خدمة احترافية." },
      ]}
      textboxLayout="default"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      title="أسئلة شائعة"
      description="كل ما تود معرفته عن خدماتنا"
      useInvertedBackground={false}
      faqs={[
        { id: "1", title: "كم تستغرق عملية التبييض؟", content: "تستغرق ساعة." },
        { id: "2", title: "هل التعقيم مضمون؟", content: "نعم، نلتزم بالمعايير." },
      ]}
      faqsAnimation="slide-up"
      textboxLayout="split"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      tag="تواصل معنا"
      title="جاهز لابتسامة جديدة؟"
      description="احجز موعدك اليوم."
      buttons={[{ text: "احجز الآن", href: "#contact" }]}
      background={{ variant: "sparkles-gradient" }}
      useInvertedBackground={false}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="عيادة سيد الأسنان"
      columns={[
        { title: "روابط", items: [{ label: "الرئيسية", href: "#" }] },
        { title: "معلومات", items: [{ label: "اتصل بنا", href: "#" }] },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}