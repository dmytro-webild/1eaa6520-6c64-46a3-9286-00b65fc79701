"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TeamCardSix from '@/components/sections/team/TeamCardSix';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="compact"
        sizing="medium"
        background="aurora"
        cardStyle="subtle-shadow"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "الرئيسية",
          id: "hero",
        },
        {
          name: "عن العيادة",
          id: "about",
        },
        {
          name: "خدماتنا",
          id: "features",
        },
        {
          name: "الفريق",
          id: "team",
        },
        {
          name: "اتصل بنا",
          id: "contact",
        },
      ]}
      brandName="عيادة سيد الأسنان"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      background={{
        variant: "gradient-bars",
      }}
      title="ابتسامتك هي أولويتنا في بغداد"
      description="نقدم خدمات طب الأسنان المتطورة بأعلى معايير الجودة والتعقيم لضمان راحتك وصحة أسنانك."
      testimonials={[
        {
          name: "أحمد علي",
          handle: "@ahmed",
          testimonial: "تجربة رائعة، طاقم طبي محترف جداً.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/dental-doctor-standing-clinic_1303-26408.jpg?_wi=1",
          imageAlt: "professional dentist clinic background",
        },
        {
          name: "سارة محمد",
          handle: "@sarah",
          testimonial: "خدمة ممتازة وعيادة نظيفة جداً.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-brunette-female-dentist-chair-stomatology-room_613910-11484.jpg?_wi=1",
          imageAlt: "professional dentist clinic background",
        },
        {
          name: "عمر حسن",
          handle: "@omar",
          testimonial: "أفضل عيادة أسنان في بغداد.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/old-man-sitting-dentist-s-office_1157-19444.jpg?_wi=1",
          imageAlt: "professional dentist clinic background",
        },
        {
          name: "ليلى محمود",
          handle: "@layla",
          testimonial: "اهتمام بالتفاصيل ونتائج مذهلة.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/dental-procedure-installing-braces-close-up-dentistry-braces-teeth_169016-67240.jpg?_wi=1",
          imageAlt: "professional dentist clinic background",
        },
        {
          name: "خالد ابراهيم",
          handle: "@khaled",
          testimonial: "عيادة مريحة وأطباء في قمة الرقي.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/dental-procedure-installing-braces-close-up-dentistry-braces-teeth_169016-67460.jpg?_wi=1",
          imageAlt: "professional dentist clinic background",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/dental-doctor-standing-clinic_1303-26408.jpg?_wi=2"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-female-dentist-woman-crossed-arms-standing-her-dentistry-office-near-chair_627829-14130.jpg",
          alt: "Portrait of female dentist",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiling-young-dentist-dentist-s-clinic_329181-20753.jpg",
          alt: "Portrait of smiling young dentist",
        },
        {
          src: "http://img.b2bpic.net/free-photo/female-doctor-showing-thumb-up-blue-uniform-looking-glad-space-text_176474-19612.jpg",
          alt: "Female doctor showing thumb up",
        },
        {
          src: "http://img.b2bpic.net/free-photo/female-doctor-holding-hands-chin-blue-uniform-looking-glad_176474-19545.jpg",
          alt: "Female doctor looking glad",
        },
        {
          src: "http://img.b2bpic.net/free-photo/front-view-female-doctor-medical-shirt-nurse-medic-emotion-pandemic_179666-24193.jpg",
          alt: "Front view female doctor",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "زراعة أسنان",
        },
        {
          type: "text",
          text: "تجميل الأسنان",
        },
        {
          type: "text",
          text: "تقويم احترافي",
        },
        {
          type: "text",
          text: "تبييض الأسنان",
        },
        {
          type: "text",
          text: "علاجات اللثة",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="نعتني بابتسامتك بأحدث التقنيات"
      description="عيادة سيد الأسنان هي وجهتك الأولى في بغداد للحصول على أفضل رعاية سنية. نجمع بين الخبرة العلمية والتقنيات الحديثة."
      bulletPoints={[
        {
          title: "تعقيم عالي المستوى",
          description: "نلتزم بأحدث معايير التعقيم العالمية.",
        },
        {
          title: "أجهزة حديثة",
          description: "أحدث تقنيات التشخيص والعلاج.",
        },
        {
          title: "طاقم خبير",
          description: "نخبة من أطباء الأسنان المتخصصين.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/attractive-brunette-female-dentist-chair-stomatology-room_613910-11484.jpg?_wi=2"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          title: "زراعة الأسنان",
          description: "حلول دائمة لتعويض الأسنان المفقودة.",
          imageSrc: "http://img.b2bpic.net/free-photo/old-man-sitting-dentist-s-office_1157-19444.jpg?_wi=2",
        },
        {
          title: "تبييض الأسنان",
          description: "ابتسامة ناصعة البياض في زيارة واحدة.",
          imageSrc: "http://img.b2bpic.net/free-photo/dental-procedure-installing-braces-close-up-dentistry-braces-teeth_169016-67240.jpg?_wi=2",
        },
        {
          title: "تقويم الأسنان",
          description: "تصحيح وترتيب الأسنان بأحدث الأنظمة.",
          imageSrc: "http://img.b2bpic.net/free-photo/dental-procedure-installing-braces-close-up-dentistry-braces-teeth_169016-67460.jpg?_wi=2",
        },
      ]}
      title="خدماتنا المتميزة"
      description="نقدم مجموعة متكاملة من خدمات طب الأسنان لتلبية كافة احتياجاتك."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "1",
          value: "2000+",
          title: "مريض سعيد",
          description: "استعدوا ابتسامتهم معنا.",
          imageSrc: "http://img.b2bpic.net/free-photo/dentist-examining-female-patient-with-tools_107420-74184.jpg",
        },
        {
          id: "2",
          value: "15+",
          title: "سنة خبرة",
          description: "في مجال طب الأسنان.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-whitening-teeth-dentistry-with-special-equipment_1303-26400.jpg",
        },
        {
          id: "3",
          value: "100%",
          title: "رضا المرضى",
          description: "هدفنا الأساسي دائماً.",
          imageSrc: "http://img.b2bpic.net/free-photo/dental-procedure-installing-braces-close-up-dentistry-braces-teeth_169016-67309.jpg",
        },
      ]}
      title="ثقتكم هي نجاحنا"
      description="نفتخر بتقديم رعاية استثنائية لآلاف المرضى."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardSix
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      members={[
        {
          id: "1",
          name: "د. علي حسين",
          role: "أخصائي زراعة",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-boy-dentist_23-2149206291.jpg",
        },
        {
          id: "2",
          name: "د. منى محمود",
          role: "أخصائية تقويم",
          imageSrc: "http://img.b2bpic.net/free-photo/nurse-dentist-showing-green-screen-display-stomatology-senior-doctor-while-examining-tooth-pain-man-patient-sittinh-dental-chair_482257-4900.jpg",
        },
        {
          id: "3",
          name: "د. يوسف صالح",
          role: "أخصائي تجميل",
          imageSrc: "http://img.b2bpic.net/free-photo/female-medical-assistant-performs-posture-assessment-old-man_482257-122730.jpg",
        },
      ]}
      title="أطباؤنا"
      description="فريقنا الطبي مستعد لتقديم أفضل رعاية ممكنة."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "أحمد",
          date: "2023-10",
          title: "ممتاز",
          quote: "تجربة رائعة.",
          tag: "زراعة",
          avatarSrc: "http://img.b2bpic.net/free-photo/blonde-lady-with-curly-hair-green-t-shirt-pointing-aside-with-thumb-looking-joyous-front-view_176474-112415.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-with-white-short-hair_23-2148262831.jpg",
        },
        {
          id: "2",
          name: "سارة",
          date: "2023-11",
          title: "رائع",
          quote: "خدمة احترافية.",
          tag: "تجميل",
          avatarSrc: "http://img.b2bpic.net/free-photo/female-patient-smiling-while-talking-doctor_107420-65663.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-african-american-healthcare-expert-looking-camera_637285-11471.jpg",
        },
        {
          id: "3",
          name: "عمر",
          date: "2023-12",
          title: "ممتاز",
          quote: "نظافة وأمان.",
          tag: "تقويم",
          avatarSrc: "http://img.b2bpic.net/free-photo/close-up-doctor-patient-clinic_23-2149103571.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/headshot-happy-young-woman-with-curly-hair-keeps-eyes-closed-hands-cheeks-grins-camera-wears-transparent-eyeglasses-formal-jacket-poses-against-pink-background-emotions-concept_273609-60148.jpg",
        },
        {
          id: "4",
          name: "نور",
          date: "2024-01",
          title: "رائع",
          quote: "أفضل اختيار.",
          tag: "علاج",
          avatarSrc: "http://img.b2bpic.net/free-photo/diversion-gente-alegria-felicidad-mujer_1301-1617.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-smiling-young-woman-kitchen-cooking-chopping-zucchini-holding-vegetables_1258-197977.jpg",
        },
        {
          id: "5",
          name: "خالد",
          date: "2024-02",
          title: "ممتاز",
          quote: "أنصح الجميع.",
          tag: "عام",
          avatarSrc: "http://img.b2bpic.net/free-photo/side-view-smiley-doctor-checking-patient_23-2149726926.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-patient-doctor-hugging_23-2149856221.jpg",
        },
      ]}
      title="آراء مرضانا"
      description="يسعدنا دائماً سماع تجارب مرضانا الناجحة."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "كم تستغرق عملية التبييض؟",
          content: "تستغرق عادة حوالي ساعة واحدة.",
        },
        {
          id: "2",
          title: "هل التعقيم مضمون؟",
          content: "نعم، نلتزم بأعلى معايير التعقيم.",
        },
        {
          id: "3",
          title: "هل لديكم أقساط؟",
          content: "نعم، نوفر تسهيلات للدفع.",
        },
      ]}
      title="أسئلة شائعة"
      description="إجابات على أكثر الأسئلة تكراراً."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="تواصل معنا"
      title="احجز موعدك الآن في بغداد"
      description="نحن هنا لخدمتك، تواصل معنا لحجز موعد أو للاستفسار عن خدماتنا."
      imageSrc="http://img.b2bpic.net/free-photo/full-shot-dentist-wearing-face-mask_23-2149164285.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "روابط سريعة",
          items: [
            {
              label: "الرئيسية",
              href: "#hero",
            },
            {
              label: "خدماتنا",
              href: "#features",
            },
          ],
        },
        {
          title: "تواصل",
          items: [
            {
              label: "واتساب",
              href: "#",
            },
            {
              label: "انستغرام",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 عيادة سيد الأسنان"
      bottomRightText="بغداد، العراق"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
