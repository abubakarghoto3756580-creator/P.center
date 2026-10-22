/**
 * Approved Modern Clinical Confidence layout — content-only conversion for P. Center (Elite Specialists Clinic for Medical Care).
 * Preserves the established visual rhythm while providing mirrored Arabic RTL and English LTR experiences.
 */
import { type ComponentProps, type FormEvent, useEffect, useRef, useState } from "react";
import "../team-card-refinement.css";
import "../techniques-carousel.css";
import "../site-motion.css";
import "../service-card-fix.css";
import "../navbar-mobile-alignment.css";
import "../insurance-logo-cards.css";
import "../animated-stat-typography.css";
import "../service-card-images.css";
import "../share-float.css";
import "../new-healthcare-image-crops.css";
import "../mobile-reference.css";
import "../p-center.css";
import {
  ArrowUp,
  ArrowRight,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Dumbbell,
  HeartPulse,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Play,
  Search,
  Share2,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRound,
  Waves,
  Handshake,
  X,
} from "lucide-react";

type Language = "en" | "ar";

const heroImage = "/healthcare-images/hero-clinical-doctor.jpeg";
const diagnosticsImage = "/healthcare-images/about-clinic-doctor.jpeg";
const careTeamImage = "/healthcare-images/about-video-thumbnail.jpeg";
const appointmentImage = "/healthcare-images/appointment-rehabilitation-session.jpeg";
const generatedMark = "/brand/p-center-logo.png";
const officialLogo = "/brand/p-center-logo.png";
const whatsappBrandMark = "/brand/whatsapp.svg";
const whatsappUrl = "https://wa.me/966567844469";
const phoneHref = "tel:+966567844469";
const phoneDisplay = "+966 56 784 4469";
const instagramUrl = "https://www.instagram.com/p.center0/";
const linktreeUrl = "https://linktr.ee/p.center0";
const mapsUrl = linktreeUrl;

const content = {
  en: {
    name: "P. Center — Elite Specialists Clinic",
    shortName: "P. Center",
    tagline: "Enhance your health",
    nav: [
      ["Services", "#services"], ["Team", "#team"], ["About", "#about"], ["Contact", "#contact"],
    ],
    utility: "Saudi Arabia",
    badges: ["Physiotherapy & Rehabilitation", "Sports injuries", "Spine & nerve care"],
    appointment: "Book appointment",
    heroEyebrow: "Physiotherapy & Rehabilitation · Saudi Arabia",
    heroLead: "Enhance your",
    heroStrong: "health.",
    heroBody: "P. Center, the Elite Specialists Clinic for Medical Care, offers physiotherapy and rehabilitation for musculoskeletal conditions, sports injuries, spine and nerve care, lymphedema, and women's health.",
    services: "Explore services",
    guidance: "Care centered on rehabilitation",
    quickAppointment: "Appointments",
    quickTitle: "Begin your rehabilitation journey.",
    quickAction: "Book through WhatsApp",
    quickServiceNumber: "01",
    quickServiceTitle: "Find the right physiotherapy service.",
    quickServiceBody: "Explore the clinic's specialties before arranging a visit.",
    quickServiceAction: "View services",
    quickContact: "Contact the clinic",
    quickContactTitle: "Have a question before booking?",
    quickContactAction: "Message on WhatsApp",
    aboutEyebrow: "The clinic",
    aboutTitle: "Rehabilitation guided by",
    aboutAccent: "elite specialists.",
    aboutBody: "P. Center is a physiotherapy and rehabilitation clinic in Saudi Arabia, led by Dr. Khaled Yaseen as Medical Director. Its team of consultants and physiotherapists covers musculoskeletal care, sports injuries, spine and nerve conditions, lymphedema, and women's health. The clinic partners with the Saudi Swimming Federation and Rewaaq Psych-behavioral Therapy.",
    aboutPoints: ["Musculoskeletal & sports rehabilitation", "Spine & nerve care", "Lymphedema & women's health"],
    aboutAction: "Contact the clinic",
    aboutStampTop: "P. Center",
    aboutStampMain: "elite specialists",
    serviceEyebrow: "Services",
    serviceTitle: "Specialist care for",
    serviceAccent: "each rehabilitation pathway.",
    serviceBody: "Explore six core care areas and the conditions supported by the clinic.",
    learnMore: "Explore care areas",
    facilitiesEyebrow: "Treatment approach",
    facilitiesTitle: "Techniques selected for",
    facilitiesAccent: "focused rehabilitation.",
    facilitiesAction: "Book appointment",
    featureTitle: "A focused approach to movement, recovery, and rehabilitation.",
    featureLabel: "P. Center",
    techniqueDescription: "Techniques used by the clinic",
    teamEyebrow: "Medical team",
    teamTitle: "Meet the specialists who support",
    teamAccent: "your recovery.",
    teamBody: "The clinic's team includes consultants and physiotherapists across musculoskeletal rehabilitation, sports injuries, spine and nerve care, lymphedema, women's health, and reflexology.",
    allTeam: "View the team",
    imageNotice: "Clinician photo to be added",
    credentials: "Credentials",
    careAreas: "Relevant treatment areas",
    experience: "Experience",
    years: "years",
    yearsPlus: "years+",
    techniqueEyebrow: "Treatment techniques",
    techniqueTitle: "Clinical techniques used across",
    techniqueAccent: "rehabilitation pathways.",
    techniqueBody: "Treatment approach is selected by the physiotherapy team based on the relevant rehabilitation pathway.",
    insuranceEyebrow: "Partners",
    insuranceTitle: "Success",
    insuranceAccent: "partners.",
    insuranceBody: "Organizations P. Center collaborates with to care for athletes and patients.",
    contactEyebrow: "Contact the clinic",
    contactTitle: "Start with a",
    contactAccent: "simple message.",
    contactBody: "Book an appointment or ask a general question through WhatsApp or phone. Please avoid sharing sensitive health information through this website form.",
    map: "Location & links",
    hours: "Working hours",
    phone: "Phone",
    whatsapp: "WhatsApp",
    address: "Address",
    message: "How can the clinic help?",
    formName: "Your name",
    formEmail: "Email address",
    formPhone: "Phone number",
    formServiceNeeded: "Service needed",
    formServicePlaceholder: "Select a service",
    formPreferredDate: "Preferred date",
    formTopic: "Topic",
    formDefault: "Appointment request",
    formGeneral: "General question",
    formService: "Service enquiry",
    formConsent: "I understand this form should not contain sensitive health information.",
    formSend: "Continue to WhatsApp",
    footerAbout: "Elite Specialists Clinic for Medical Care — physiotherapy and rehabilitation in Saudi Arabia.",
    footerExplore: "Explore",
    footerAccess: "Patient access",
    footerNotes: "Find us",
    footerMessage: "Physiotherapy and rehabilitation information from P. Center.",
    backTop: "Back to top",
    note: "© 2026 P. Center",
    socials: "Social media",
    language: "العربية",
    otherLanguage: "English",
    rating: "Google rating",
    followers: "Instagram followers",
    partnersLabel: "Partners",
    reviews: "reviews",
    instagram: "Instagram",
    posts: "posts",
    messageNotice: "Opening WhatsApp so you can contact P. Center.",
    searchNotice: "Search is not connected in this prototype.",
    profilePhotoPending: "Clinician portraits will be added soon.",
  },
  ar: {
    name: "P. Center — عيادة نخبة الأخصائيون",
    shortName: "P. Center",
    tagline: "عزز صحتك",
    nav: [
      ["الخدمات", "#services"], ["الطاقم الطبي", "#team"], ["من نحن", "#about"], ["تواصل معنا", "#contact"],
    ],
    utility: "المملكة العربية السعودية",
    badges: ["علاج طبيعي وتأهيل", "الإصابات الرياضية", "العمود الفقري والأعصاب"],
    appointment: "احجز موعدًا",
    heroEyebrow: "علاج طبيعي وتأهيل · المملكة العربية السعودية",
    heroLead: "عزز",
    heroStrong: "صحتك.",
    heroBody: "تقدم عيادة نخبة الأخصائيون للرعاية الطبية (P. Center) خدمات العلاج الطبيعي والتأهيل للحالات العضلية الهيكلية والإصابات الرياضية وآلام العمود الفقري والأعصاب والوذمة اللمفاوية وصحة المرأة.",
    services: "استعرض الخدمات",
    guidance: "تأهيل يركز على احتياجك",
    quickAppointment: "المواعيد",
    quickTitle: "ابدأ رحلة التأهيل الخاصة بك.",
    quickAction: "احجز عبر واتساب",
    quickServiceNumber: "01",
    quickServiceTitle: "ابحث عن خدمة العلاج الطبيعي المناسبة.",
    quickServiceBody: "تعرّف على تخصصات العيادة قبل حجز الزيارة.",
    quickServiceAction: "استعرض الخدمات",
    quickContact: "تواصل مع العيادة",
    quickContactTitle: "لديك سؤال قبل الحجز؟",
    quickContactAction: "راسلنا عبر واتساب",
    aboutEyebrow: "عن العيادة",
    aboutTitle: "تأهيل يقوده",
    aboutAccent: "نخبة من الأخصائيين.",
    aboutBody: "P. Center عيادة للعلاج الطبيعي والتأهيل في المملكة العربية السعودية، يديرها طبيًا د. خالد ياسين. يضم فريقها استشاريين وأخصائيين في العلاج الطبيعي للحالات العضلية الهيكلية والإصابات الرياضية وآلام العمود الفقري والأعصاب والوذمة اللمفاوية وصحة المرأة. وللعيادة شراكات مع الاتحاد السعودي للسباحة ومركز رواق للعلاج النفسي والسلوكي.",
    aboutPoints: ["تأهيل العظام والعضلات والإصابات الرياضية", "العمود الفقري والأعصاب", "الوذمة اللمفاوية وصحة المرأة"],
    aboutAction: "تواصل مع العيادة",
    aboutStampTop: "P. Center",
    aboutStampMain: "نخبة الأخصائيين",
    serviceEyebrow: "الخدمات",
    serviceTitle: "رعاية متخصصة لكل",
    serviceAccent: "مسار من مسارات التأهيل.",
    serviceBody: "استعرض ست مجالات رئيسية للرعاية والحالات التي تدعمها العيادة.",
    learnMore: "استعرض مجالات العلاج",
    facilitiesEyebrow: "أسلوب العلاج",
    facilitiesTitle: "تقنيات مختارة من أجل",
    facilitiesAccent: "تأهيل أكثر تركيزًا.",
    facilitiesAction: "احجز موعدًا",
    featureTitle: "منهج يركز على الحركة والتعافي وإعادة التأهيل.",
    featureLabel: "P. Center",
    techniqueDescription: "تقنيات تستخدمها العيادة",
    teamEyebrow: "الطاقم الطبي",
    teamTitle: "تعرّف على المختصين الذين يدعمون",
    teamAccent: "رحلة تعافيك.",
    teamBody: "يضم فريق العيادة استشاريين وأخصائيين في تأهيل العظام والعضلات والإصابات الرياضية والعمود الفقري والأعصاب والوذمة اللمفاوية وصحة المرأة والعلاج الانعكاسي.",
    allTeam: "استعرض الطاقم",
    imageNotice: "تُضاف صورة المختص عند توفرها",
    credentials: "الشهادات والخبرات",
    careAreas: "مجالات العلاج ذات الصلة",
    experience: "الخبرة",
    years: "سنوات",
    yearsPlus: "سنوات+",
    techniqueEyebrow: "تقنيات العلاج",
    techniqueTitle: "تقنيات علاجية تستخدم ضمن",
    techniqueAccent: "مسارات التأهيل.",
    techniqueBody: "يختار فريق العلاج الطبيعي أسلوب العلاج وفقًا لمسار التأهيل ذي الصلة.",
    insuranceEyebrow: "الشركاء",
    insuranceTitle: "شركاء",
    insuranceAccent: "النجاح.",
    insuranceBody: "جهات تتعاون معها P. Center للعناية بالرياضيين والمراجعين.",
    contactEyebrow: "تواصل مع العيادة",
    contactTitle: "ابدأ بـ",
    contactAccent: "رسالة بسيطة.",
    contactBody: "احجز موعدًا أو اطرح سؤالًا عامًا عبر واتساب أو الهاتف. يرجى عدم مشاركة معلومات صحية حساسة من خلال نموذج الموقع.",
    map: "الموقع وروابط التواصل",
    hours: "ساعات العمل",
    phone: "الهاتف",
    whatsapp: "واتساب",
    address: "العنوان",
    message: "كيف يمكن للعيادة مساعدتك؟",
    formName: "الاسم",
    formEmail: "البريد الإلكتروني",
    formPhone: "رقم الهاتف",
    formServiceNeeded: "الخدمة المطلوبة",
    formServicePlaceholder: "اختر الخدمة",
    formPreferredDate: "التاريخ المفضل",
    formTopic: "الموضوع",
    formDefault: "طلب موعد",
    formGeneral: "سؤال عام",
    formService: "استفسار عن خدمة",
    formConsent: "أفهم أن هذا النموذج لا ينبغي أن يتضمن معلومات صحية حساسة.",
    formSend: "المتابعة إلى واتساب",
    footerAbout: "عيادة نخبة الأخصائيون للرعاية الطبية — علاج طبيعي وتأهيل في المملكة العربية السعودية.",
    footerExplore: "استكشف",
    footerAccess: "خدمات المراجعين",
    footerNotes: "اعثر علينا",
    footerMessage: "معلومات عن العلاج الطبيعي والتأهيل من P. Center.",
    backTop: "العودة للأعلى",
    note: "© 2026 P. Center",
    socials: "التواصل الاجتماعي",
    language: "English",
    otherLanguage: "العربية",
    rating: "تقييم Google",
    followers: "متابعو إنستغرام",
    partnersLabel: "الشركاء",
    reviews: "تقييمًا",
    instagram: "إنستغرام",
    posts: "منشورًا",
    messageNotice: "يتم فتح واتساب لتتمكن من التواصل مع P. Center.",
    searchNotice: "البحث غير متصل في هذا النموذج التجريبي.",
    profilePhotoPending: "ستتم إضافة صور الفريق قريبًا.",
  },
} as const;

const services = [
  {
    id: "01", icon: HeartPulse, tone: "emerald",
    en: { title: "Musculoskeletal Rehabilitation", conditions: ["Musculoskeletal Injuries", "Joint & Muscle Rehabilitation", "Movement & Strength Recovery", "Manual Therapy"] },
    ar: { title: "تأهيل الجهاز العضلي الهيكلي", conditions: ["إصابات الجهاز العضلي الهيكلي", "تأهيل المفاصل والعضلات", "استعادة الحركة والقوة", "العلاج اليدوي"] },
  },
  {
    id: "02", icon: ShieldCheck, tone: "gold",
    en: { title: "Sports Injury Rehabilitation", conditions: ["Sports Injury Rehabilitation", "Injury Prevention Programs", "Performance Support", "Return-to-Play Training"] },
    ar: { title: "تأهيل الإصابات الرياضية", conditions: ["تأهيل الإصابات الرياضية", "برامج الوقاية من الإصابات", "دعم الأداء الرياضي", "التدريب للعودة إلى الملعب"] },
  },
  {
    id: "03", icon: Dumbbell, tone: "navy",
    en: { title: "Spine & Neck Pain Treatment", conditions: ["Neck Pain", "Lower Back Pain", "Spine Pain", "Neck-related Tinnitus"] },
    ar: { title: "علاج آلام العمود الفقري والرقبة", conditions: ["آلام الرقبة", "آلام أسفل الظهر", "آلام العمود الفقري", "الطنين المرتبط بالرقبة"] },
  },
  {
    id: "04", icon: Stethoscope, tone: "coral",
    en: { title: "Neurological & Nerve Rehabilitation", conditions: ["Nerve Disease Rehabilitation", "Neurological Conditions", "ANF Technique", "Functional Recovery"] },
    ar: { title: "تأهيل الأعصاب والجهاز العصبي", conditions: ["تأهيل أمراض الأعصاب", "الحالات العصبية", "تقنية ANF", "التأهيل الوظيفي"] },
  },
  {
    id: "05", icon: HeartPulse, tone: "emerald",
    en: { title: "Lymphedema & Lipedema Care", conditions: ["Lymphedema Management", "Lipedema Treatment", "Lymphatic Massage", "Post-treatment Follow-up"] },
    ar: { title: "علاج الوذمة اللمفاوية والشحمية", conditions: ["علاج الوذمة اللمفاوية", "علاج الوذمة الشحمية", "التدليك اللمفاوي", "المتابعة بعد العلاج"] },
  },
  {
    id: "06", icon: Sparkles, tone: "navy",
    en: { title: "Women's Health & Reflexology", conditions: ["Women's Health Physiotherapy", "Female Physiotherapy Team", "Hand, Foot & Ear Reflexology", "Muscle Trigger Point Therapy"] },
    ar: { title: "صحة المرأة والعلاج الانعكاسي", conditions: ["العلاج الطبيعي لصحة المرأة", "فريق علاج طبيعي نسائي", "العلاج الانعكاسي لليدين والقدمين والأذنين", "علاج نقاط الزناد العضلية"] },
  },
];

const techniques = [
  ["Manual Therapy", "العلاج اليدوي"], ["Dry Needling", "الإبر الجافة"], ["ANF Technique", "تقنية ANF"],
  ["Reflexology", "العلاج الانعكاسي"], ["Muscle Trigger Point Therapy", "علاج نقاط الزناد العضلية"], ["Sports Massage", "التدليك الرياضي"],
  ["Lymphatic Massage", "التدليك اللمفاوي"], ["Lymphedema Management", "علاج الوذمة اللمفاوية"],
];

const team = [
  { initials: "KY", en: { name: "Dr. Khaled Yaseen", specialty: "Medical Director · Consultant Physiotherapist", experience: "15 years", certifications: ["Master's & PhD — University of Nottingham (UK)", "Faculty member — King Abdulaziz University", "Qualified in Dry Needling & Manual Therapy", "CEO — PhysioGate Group"], areas: ["Joint stiffness", "Chronic pain"] }, ar: { name: "د. خالد ياسين", specialty: "المدير الطبي · استشاري علاج طبيعي", experience: "١٥ سنة", certifications: ["الماجستير والدكتوراه — جامعة نوتنغهام البريطانية", "عضو هيئة تدريس — جامعة الملك عبدالعزيز", "مؤهل في العلاج اليدوي والإبر الجافة", "الرئيس التنفيذي — مجموعة PhysioGate"], areas: ["خشونة المفاصل", "الآلام المزمنة"] } },
  { initials: "MM", en: { name: "Mohammed Monshi", specialty: "Physiotherapist · Musculoskeletal & Sports Injuries", experience: null, certifications: ["BSc — Umm Al-Qura University", "Board member — Saudi Physical Therapy Association"], areas: ["Musculoskeletal injuries", "Sports injuries"] }, ar: { name: "محمد منشي", specialty: "أخصائي علاج طبيعي · العظام والعضلات والإصابات الرياضية", experience: null, certifications: ["بكالوريوس — جامعة أم القرى", "عضو مجلس إدارة الجمعية السعودية للعلاج الطبيعي"], areas: ["إصابات الجهاز العضلي الهيكلي", "الإصابات الرياضية"] } },
  { initials: "FD", en: { name: "Feras Duman", specialty: "Physiotherapist · Neurological Rehabilitation", experience: "12+ years", certifications: ["BSc — Umm Al-Qura University"], areas: ["Nerve disease rehabilitation", "Treatment with the ANF technique"] }, ar: { name: "فراس دومان", specialty: "أخصائي علاج طبيعي · تأهيل الأعصاب", experience: "١٢+ سنة", certifications: ["بكالوريوس — جامعة أم القرى"], areas: ["تأهيل أمراض الأعصاب", "العلاج بتقنية ANF"] } },
  { initials: "AD", en: { name: "Dr. Ahmed Dhalnoun", specialty: "Consultant Physiotherapist · Spine & Sports Injuries", experience: null, certifications: ["PhD — University of Nottingham"], areas: ["Spine pain — neck and lower back", "Neck-related tinnitus", "Sports injury rehabilitation"] }, ar: { name: "د. أحمد ذالنون", specialty: "استشاري علاج طبيعي · العمود الفقري والإصابات الرياضية", experience: null, certifications: ["دكتوراه — جامعة نوتنغهام"], areas: ["آلام العمود الفقري — الرقبة وأسفل الظهر", "الطنين المرتبط بالرقبة", "تأهيل الإصابات الرياضية"] } },
  { initials: "OA", en: { name: "Dr. Omar Al-Abbasi", specialty: "Consultant Physiotherapist · Musculoskeletal & Sports Injuries", experience: null, certifications: ["PhD in Orthopedics — University of Florida"], areas: ["Musculoskeletal injuries", "Sports injuries"] }, ar: { name: "د. عمر العباسي", specialty: "استشاري علاج طبيعي · العظام والعضلات والإصابات الرياضية", experience: null, certifications: ["دكتوراه في العظام — جامعة فلوريدا"], areas: ["إصابات الجهاز العضلي الهيكلي", "الإصابات الرياضية"] } },
  { initials: "NG", en: { name: "Dr. Nabil Al-Ghamdi", specialty: "Consultant Physiotherapist · Musculoskeletal & Sports Injuries", experience: "20+ years", certifications: ["PhD in Orthopedics — University of Delaware"], areas: ["Musculoskeletal injuries", "Sports injuries"] }, ar: { name: "د. نبيل الغامدي", specialty: "استشاري علاج طبيعي · العظام والعضلات والإصابات الرياضية", experience: "٢٠+ سنة", certifications: ["دكتوراه في العظام — جامعة ديلاوير"], areas: ["الإصابات العضلية الهيكلية", "الإصابات الرياضية"] } },
  { initials: "EB", en: { name: "Emad Bukhari", specialty: "Physiotherapist · Nerve, Spine & Sports Rehabilitation", experience: "12+ years", certifications: ["BSc — Umm Al-Qura University", "Dry Needling Diploma"], areas: ["Nerve conditions", "Sports injuries", "Musculoskeletal conditions", "Neck & spine pain"] }, ar: { name: "عماد بخاري", specialty: "أخصائي علاج طبيعي · الأعصاب والعمود الفقري والإصابات الرياضية", experience: "١٢+ سنة", certifications: ["بكالوريوس — جامعة أم القرى", "دبلوم الإبر الجافة"], areas: ["حالات الأعصاب", "الإصابات الرياضية", "الجهاز العضلي الهيكلي", "آلام الرقبة والعمود الفقري"] } },
  { initials: "HT", en: { name: "Hazem Turkistani", specialty: "Physiotherapist · Sports Injuries & Musculoskeletal", experience: null, certifications: ["BSc — Umm Al-Qura University", "FIFA Diploma in Sports Injuries", "Certified Manual Therapy Practitioner"], areas: ["Musculoskeletal rehabilitation", "Sports injuries"] }, ar: { name: "حازم تركستاني", specialty: "أخصائي علاج طبيعي · الإصابات الرياضية والعظام والعضلات", experience: null, certifications: ["بكالوريوس — جامعة أم القرى", "دبلوم الفيفا للإصابات الرياضية", "ممارس معتمد للعلاج اليدوي"], areas: ["تأهيل الجهاز العضلي الهيكلي", "الإصابات الرياضية"] } },
  { initials: "LB", en: { name: "Layan Barasin", specialty: "Physiotherapist · Women's Health & Musculoskeletal", experience: null, certifications: ["BSc — King Abdulaziz University"], areas: ["Women's health", "Musculoskeletal rehabilitation", "Sports injuries"] }, ar: { name: "ليان باراسين", specialty: "أخصائية علاج طبيعي · صحة المرأة والعظام والعضلات", experience: null, certifications: ["بكالوريوس — جامعة الملك عبدالعزيز"], areas: ["صحة المرأة", "تأهيل الجهاز العضلي الهيكلي", "الإصابات الرياضية"] } },
  { initials: "AA", en: { name: "Abdulrahim Assas", specialty: "Physiotherapist · Musculoskeletal & Neck Rehabilitation", experience: null, certifications: ["BSc — Umm Al-Qura University", "Certified Manual Therapy Practitioner"], areas: ["Musculoskeletal rehabilitation", "Neck rehabilitation"] }, ar: { name: "عبدالرحيم عساس", specialty: "أخصائي علاج طبيعي · العظام والعضلات وتأهيل الرقبة", experience: null, certifications: ["بكالوريوس — جامعة أم القرى", "ممارس معتمد للعلاج اليدوي"], areas: ["تأهيل الجهاز العضلي الهيكلي", "تأهيل الرقبة"] } },
  { initials: "AG", en: { name: "Abeer Al-Ghamdi", specialty: "Physiotherapist · Musculoskeletal & Sports Injuries", experience: null, certifications: ["BSc — King Abdulaziz University", "Certified Manual Therapy Practitioner"], areas: ["Musculoskeletal rehabilitation", "Sports injuries"] }, ar: { name: "عبير الغامدي", specialty: "أخصائية علاج طبيعي · العظام والعضلات والإصابات الرياضية", experience: null, certifications: ["بكالوريوس — جامعة الملك عبدالعزيز", "ممارسة معتمدة للعلاج اليدوي"], areas: ["تأهيل الجهاز العضلي الهيكلي", "الإصابات الرياضية"] } },
  { initials: "AI", en: { name: "Ali Al Ismail", specialty: "Physiotherapist · Lymphedema & Lipedema", experience: null, certifications: ["BSc — Taif University"], areas: ["Lymphedema treatment", "Lipedema treatment"] }, ar: { name: "علي آل إسماعيل", specialty: "أخصائي علاج طبيعي · الوذمة اللمفاوية والشحمية", experience: null, certifications: ["بكالوريوس — جامعة الطائف"], areas: ["علاج الوذمة اللمفاوية", "علاج الوذمة الشحمية"] } },
  { initials: "DH", en: { name: "Duha Al-Hazmi", specialty: "Physiotherapist · Musculoskeletal & Sports Injuries", experience: "14+ years", certifications: ["Master's in Orthopedics — University of Birmingham (UK)"], areas: ["Musculoskeletal rehabilitation", "Sports injuries"] }, ar: { name: "ضحى الحازمي", specialty: "أخصائية علاج طبيعي · العظام والعضلات والإصابات الرياضية", experience: "١٤+ سنة", certifications: ["ماجستير في العظام — جامعة برمنجهام (بريطانيا)"], areas: ["تأهيل الجهاز العضلي الهيكلي", "الإصابات الرياضية"] } },
  { initials: "DN", en: { name: "Dana Al-Nafiei", specialty: "Physiotherapist · Lymphedema & Musculoskeletal", experience: null, certifications: ["BSc — Umm Al-Qura University", "Certified Manual Therapy Practitioner"], areas: ["Lymphedema", "Musculoskeletal rehabilitation", "Sports injuries"] }, ar: { name: "دانا النفيعي", specialty: "أخصائية علاج طبيعي · الوذمة اللمفاوية والعظام والعضلات", experience: null, certifications: ["بكالوريوس — جامعة أم القرى", "ممارسة معتمدة للعلاج اليدوي"], areas: ["الوذمة اللمفاوية", "تأهيل الجهاز العضلي الهيكلي", "الإصابات الرياضية"] } },
  { initials: "MS", en: { name: "Manar Al-Sharif", specialty: "Physiotherapist · Musculoskeletal & Sports Injuries", experience: null, certifications: ["BSc — Umm Al-Qura University"], areas: ["Musculoskeletal rehabilitation", "Sports injuries"] }, ar: { name: "منار الشريف", specialty: "أخصائية علاج طبيعي · العظام والعضلات والإصابات الرياضية", experience: null, certifications: ["بكالوريوس — جامعة أم القرى"], areas: ["تأهيل الجهاز العضلي الهيكلي", "الإصابات الرياضية"] } },
  { initials: "AS", en: { name: "Ammar Sibki", specialty: "Physiotherapist · Musculoskeletal, Neck & Back Pain", experience: "12+ years", certifications: ["BSc — Umm Al-Qura University", "ANF Technique"], areas: ["Musculoskeletal conditions", "Neck & back pain (ANF technique)"] }, ar: { name: "عمار سبكي", specialty: "أخصائي علاج طبيعي · العظام والعضلات وآلام الرقبة والظهر", experience: "١٢+ سنة", certifications: ["بكالوريوس — جامعة أم القرى", "تقنية ANF"], areas: ["الحالات العضلية الهيكلية", "آلام الرقبة والظهر بتقنية ANF"] } },
  { initials: "AH", en: { name: "Ahdab Al-Sharif", specialty: "Physiotherapist · Lymphedema & Musculoskeletal", experience: null, certifications: ["BSc — Taibah University"], areas: ["Lymphedema", "Musculoskeletal rehabilitation"] }, ar: { name: "أهداب الشريف", specialty: "أخصائية علاج طبيعي · الوذمة اللمفاوية والعظام والعضلات", experience: null, certifications: ["بكالوريوس — جامعة طيبة"], areas: ["الوذمة اللمفاوية", "تأهيل الجهاز العضلي الهيكلي"] } },
  { initials: "SH", en: { name: "Shaimaa Al-Harbi", specialty: "Physiotherapist · Musculoskeletal & Sports Injuries", experience: null, certifications: ["BSc — King Abdulaziz University"], areas: ["Musculoskeletal rehabilitation", "Sports injuries"] }, ar: { name: "شيماء الحربي", specialty: "أخصائية علاج طبيعي · العظام والعضلات والإصابات الرياضية", experience: null, certifications: ["بكالوريوس — جامعة الملك عبدالعزيز"], areas: ["تأهيل الجهاز العضلي الهيكلي", "الإصابات الرياضية"] } },
  { initials: "FZ", en: { name: "Faiza Abdullah", specialty: "Reflexology Therapist", experience: null, certifications: ["Graduate — San Francisco school of massage & bodywork (California)"], areas: ["Hand, foot & ear reflexology", "Muscle trigger point treatment", "Sports massage", "Lymphatic massage"] }, ar: { name: "فايزة عبدالله", specialty: "أخصائية العلاج الانعكاسي", experience: null, certifications: ["خريجة مدرسة سان فرانسيسكو — كاليفورنيا للتدليك والعلاج الجسدي"], areas: ["العلاج الانعكاسي لليدين والقدمين والأذنين", "علاج نقاط الزناد العضلية", "التدليك الرياضي", "التدليك اللمفاوي"] } },
];

// Clinician portraits will be added later: map each member's initials to an image path, e.g. KY: "/team/khaled-yaseen.png"
const clinicianPhotos: Record<string, string> = {};

const suppliedEnglishNames: Record<string, string> = {};

const clinicianAvatarGender: Record<string, "female" | "male"> = {
  LB: "female",
  AG: "female",
  DH: "female",
  DN: "female",
  MS: "female",
  AH: "female",
  SH: "female",
  FZ: "female",
};

const partners = [
  {
    id: "swimming",
    icon: Waves,
    en: { name: "Saudi Swimming Federation", note: "Cooperation agreement to prevent sports injuries, provide physiotherapy programs, and support performance through sports nutrition." },
    ar: { name: "الاتحاد السعودي للسباحة", note: "اتفاقية تعاون تهدف إلى الوقاية من الإصابات الرياضية وتقديم برامج العلاج الطبيعي ودعم الأداء عبر التغذية الرياضية." },
  },
  {
    id: "rewaaq",
    icon: Handshake,
    en: { name: "Rewaaq Psych-behavioral Therapy", note: "Strategic partnership combining physiotherapy, rehabilitation, and psychological support for better treatment outcomes." },
    ar: { name: "رواق للعلاج النفسي والسلوكي", note: "شراكة استراتيجية تجمع بين العلاج الطبيعي والتأهيل والدعم النفسي لتحقيق أفضل نتائج علاجية." },
  },
] as const;

const hours = {
  en: [["Working hours", "Confirm via WhatsApp"], ["Phone / WhatsApp", "+966 56 784 4469"]],
  ar: [["ساعات العمل", "تأكد عبر واتساب"], ["الهاتف / واتساب", "+966 56 784 4469"]],
} as const;


function LazyImage({ className = "", onLoad, onError, loading, decoding, ...props }: ComponentProps<"img">) {
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  return <img
    {...props}
    className={`lazy-image ${className}`.trim()}
    loading={loading ?? "lazy"}
    decoding={decoding ?? "async"}
    data-image-state={status}
    onLoad={(event) => {
      setStatus("ready");
      onLoad?.(event);
    }}
    onError={(event) => {
      setStatus("error");
      onError?.(event);
    }}
  />;
}

function CountUpStat({ value, decimals = 0, suffix = "" }: { value: number; decimals?: number; suffix?: string }) {
  const [currentValue, setCurrentValue] = useState(0);
  const statRef = useRef<HTMLSpanElement>(null);
  const didAnimate = useRef(false);

  useEffect(() => {
    const showFinalValue = () => setCurrentValue(value);
    const animate = () => {
      if (didAnimate.current) return;
      didAnimate.current = true;
      const duration = 1700;
      const startedAt = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const scale = 10 ** decimals;
        setCurrentValue(Math.round(value * eased * scale) / scale);
        if (progress < 1) window.requestAnimationFrame(step);
        else showFinalValue();
      };
      window.requestAnimationFrame(step);
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      showFinalValue();
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      animate();
      observer.disconnect();
    }, { threshold: 0.35 });

    if (statRef.current) observer.observe(statRef.current);
    return () => observer.disconnect();
  }, [decimals, value]);

  return <span ref={statRef} data-count-up>{currentValue.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}</span>;
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("ar");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [notice, setNotice] = useState("");
  const [activeDot, setActiveDot] = useState(0);
  const [activeTechniqueIndex, setActiveTechniqueIndex] = useState(0);
  const [techniqueAutoplayPaused, setTechniqueAutoplayPaused] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<(typeof team)[number] | null>(null);
  const [bookingDoctor, setBookingDoctor] = useState("");
  const techniqueTouchStart = useRef<number | null>(null);
  const techniquePauseTimer = useRef<number | null>(null);
  const t = content[language];
  const isArabic = language === "ar";
  const selectedPerson = selectedProfile ? selectedProfile[language] : null;
  const selectedProfileName = selectedProfile && selectedPerson ? (isArabic ? selectedPerson.name : suppliedEnglishNames[selectedProfile.initials] ?? selectedPerson.name) : "";
  const selectedProfilePhoto = selectedProfile ? clinicianPhotos[selectedProfile.initials] : undefined;
  const experienceUnavailable = isArabic ? "الخبرة غير مذكورة" : "Experience not listed";
  const shareUrl = linktreeUrl;
  const shareText = isArabic ? "اكتشف عيادة P. Center للعلاج الطبيعي والتأهيل." : "Discover P. Center for physiotherapy and rehabilitation.";
  const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [isArabic, language]);

  useEffect(() => {
    const updateHeaderState = () => setIsScrolled(window.scrollY > 24);
    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });
    return () => window.removeEventListener("scroll", updateHeaderState);
  }, []);

  const showNotice = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 4200);
  };

  const openWhatsApp = () => {
    showNotice(t.messageNotice);
    window.setTimeout(() => window.open(whatsappUrl, "_blank", "noopener,noreferrer"), 260);
  };

  const scrollToBookingForm = (doctorName = "") => {
    setBookingDoctor(doctorName);
    setMenuOpen(false);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const submitBookingToWhatsApp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const details = new FormData(event.currentTarget);
    const name = String(details.get("firstName") ?? "").trim();
    const email = String(details.get("email") ?? "").trim();
    const phone = String(details.get("phone") ?? "").trim();
    const service = String(details.get("service") ?? "").trim();
    const preferredDate = String(details.get("preferredDate") ?? "").trim();
    const message = String(details.get("message") ?? "").trim();
    const bookingMessage = isArabic
      ? [
          "مرحبًا، أود طلب حجز موعد في عيادة P. Center.",
          `الاسم: ${name}`,
          `رقم الهاتف: ${phone}`,
          `البريد الإلكتروني: ${email}`,
          `الخدمة المطلوبة: ${service}`,
          `التاريخ المفضل: ${preferredDate}`,
          bookingDoctor ? `المختص المفضل: ${bookingDoctor}` : "",
          message ? `ملاحظات: ${message}` : "",
        ].filter(Boolean).join("\n")
      : [
          "Hello, I would like to request an appointment at P. Center.",
          `Name: ${name}`,
          `Phone: ${phone}`,
          `Email: ${email}`,
          `Service needed: ${service}`,
          `Preferred date: ${preferredDate}`,
          bookingDoctor ? `Preferred clinician: ${bookingDoctor}` : "",
          message ? `Notes: ${message}` : "",
        ].filter(Boolean).join("\n");
    window.open(`${whatsappUrl}?text=${encodeURIComponent(bookingMessage)}`, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    if (techniqueAutoplayPaused) return;
    const autoplayInterval = window.setInterval(() => {
      setActiveTechniqueIndex((currentIndex) => (currentIndex + 1) % techniques.length);
    }, 2800);
    return () => window.clearInterval(autoplayInterval);
  }, [techniqueAutoplayPaused]);

  useEffect(() => () => {
    if (techniquePauseTimer.current) window.clearTimeout(techniquePauseTimer.current);
  }, []);

  useEffect(() => {
    const motionRoot = document.documentElement;
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section, .site-footer"));
    const staggerGroups: Array<[string, string]> = [
      [".quick-links", ":scope > .quick-card"],
      [".about-points", ":scope > span"],
      [".department-card-grid", ":scope > .department-card"],
      [".facility-cards", ":scope > article"],
      [".team-grid", ":scope > .team-card"],
      [".reputation-section", ":scope > .reputation-lead, :scope > .reputation-card, :scope > .insurance-block"],
      [".hours-grid", ":scope > div"],
      [".footer-links", ":scope > div"],
    ];
    const staggerItems: HTMLElement[] = [];

    sections.forEach((section) => {
      section.dataset.motionSection = "true";
    });
    staggerGroups.forEach(([groupSelector, itemSelector]) => {
      document.querySelectorAll<HTMLElement>(groupSelector).forEach((group) => {
        group.querySelectorAll<HTMLElement>(itemSelector).forEach((item, index) => {
          item.classList.add("motion-stagger-item");
          item.style.setProperty("--motion-delay", `${Math.min(index, 6) * 80}ms`);
          staggerItems.push(item);
        });
      });
    });

    motionRoot.classList.add("motion-ready");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || !("IntersectionObserver" in window)) {
      sections.forEach((section) => section.classList.add("is-in-view"));
      return () => {
        motionRoot.classList.remove("motion-ready");
      };
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in-view");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -7% 0px" });

    sections.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      motionRoot.classList.remove("motion-ready");
      sections.forEach((section) => {
        delete section.dataset.motionSection;
        section.classList.remove("is-in-view");
      });
      staggerItems.forEach((item) => {
        item.classList.remove("motion-stagger-item");
        item.style.removeProperty("--motion-delay");
      });
    };
  }, []);

  const pauseTechniqueAutoplay = () => {
    setTechniqueAutoplayPaused(true);
    if (techniquePauseTimer.current) window.clearTimeout(techniquePauseTimer.current);
    techniquePauseTimer.current = window.setTimeout(() => setTechniqueAutoplayPaused(false), 4200);
  };

  const selectTechnique = (nextIndex: number) => {
    setActiveTechniqueIndex((nextIndex + techniques.length) % techniques.length);
    pauseTechniqueAutoplay();
  };

  const moveTechnique = (direction: number) => selectTechnique(activeTechniqueIndex + direction);

  return (
    <div className={`site-shell ${isArabic ? "rtl" : "ltr"}`} dir={isArabic ? "rtl" : "ltr"} lang={language}>
      <a className="skip-link" href="#main-content">{isArabic ? "انتقل إلى المحتوى الرئيسي" : "Skip to main content"}</a>
      <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
        <div className="nav-wrap">
          <div className="nav-inner">
            <a className="brand" href="#top" aria-label={`${t.name} ${isArabic ? "الرئيسية" : "home"}`}>
              <LazyImage className="official-logo" src={officialLogo} alt="P. Center" /><span className="brand-wordmark"><strong>P. Center</strong><small>{isArabic ? "عيادة نخبة الأخصائيون" : "Elite Specialists Clinic"}</small></span>
            </a>
            <nav className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label={isArabic ? "التنقل الرئيسي" : "Primary navigation"}>
              {t.nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
              <button className="mobile-appointment" onClick={() => scrollToBookingForm()}>{t.appointment} <ArrowRight size={16} /></button>
            </nav>
            <div className="nav-actions">
              <button className="language-switch" onClick={() => setLanguage(isArabic ? "en" : "ar")} aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}>{t.language}</button>
              <button className="icon-button" onClick={() => showNotice(t.searchNotice)} aria-label={isArabic ? "بحث" : "Search"}><Search size={19} /></button>
              <button className="top-cta" onClick={() => scrollToBookingForm()}>{t.appointment} <ArrowRight size={16} /></button>
              <button className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label={isArabic ? "فتح التنقل" : "Toggle navigation"}>{menuOpen ? <X size={23} /> : <Menu size={23} />}</button>
            </div>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section id="top" className="hero-section section-container">
          <div className="hero-card"><div className="hero-art" aria-hidden="true"><LazyImage src={heroImage} alt="" /></div>
            <div className="hero-copy"><p className="eyebrow"><span /> {t.heroEyebrow}</p><h1><em>{isArabic ? t.heroLead : <><span className="hero-word-your">Enhance</span> <span className="hero-word-treatment">your</span></>}</em> <strong>{t.heroStrong}</strong></h1><p className="hero-description">{t.heroBody}</p>
              <div className="hero-actions"><button className="primary-button" onClick={() => scrollToBookingForm()}><CalendarDays size={18} /> {t.appointment}</button><a className="text-button" href="#services">{t.services} <ArrowRight size={17} /></a></div>
            </div><div className="hero-bottom-note"><span className="pulse-dot" /> {t.guidance}</div>
          </div>
        </section>

        <section className="stats-section section-container" aria-label={isArabic ? "إحصاءات المركز" : "Center statistics"}>
          <div className="stats-band">
            <article><Stethoscope size={29} /><strong><CountUpStat value={6} /></strong><span>{t.nav[0][0]}</span></article>
            <article><HeartPulse size={29} /><strong><CountUpStat value={team.length} /></strong><span>{t.nav[1][0]}</span></article>
            <article><Sparkles size={29} /><strong><CountUpStat value={2.6} decimals={1} suffix="K+" /></strong><span>{t.followers}</span></article>
            <article><ShieldCheck size={29} /><strong><CountUpStat value={partners.length} /></strong><span>{t.partnersLabel}</span></article>
          </div>
        </section>

        <section className="quick-links section-container" aria-label={isArabic ? "إجراءات سريعة" : "Quick actions"}>
          <article className="quick-card quick-image-card"><LazyImage src={appointmentImage} alt="" /><div className="quick-image-overlay" /><div className="quick-image-content"><p>{t.quickAppointment}</p><h2>{t.quickTitle}</h2><button onClick={() => scrollToBookingForm()}>{t.quickAction} <ArrowRight size={17} /></button></div></article>
          <article className="quick-card quick-outline-card"><span className="card-number">{t.quickServiceNumber}</span><div className="orbit-line" /><h2>{t.quickServiceTitle}</h2><p>{t.quickServiceBody}</p><a href="#services">{t.quickServiceAction} <ArrowRight size={18} /></a></article>
          <article className="quick-card quick-contact-card"><div className="quick-contact-icon"><MessageCircle size={25} /></div><p>{t.quickContact}</p><h2>{t.quickContactTitle}</h2><button onClick={openWhatsApp}>{t.quickContactAction} <ArrowRight size={17} /></button></article>
        </section>

        <section id="about" className="about-section section-container" data-reveal>
          <div className="about-copy"><span className="brand-motif motif-about" aria-hidden="true"><LazyImage src={generatedMark} alt="" /></span><p className="eyebrow"><span /> {t.aboutEyebrow}</p><h2>{t.aboutTitle} <em>{t.aboutAccent}</em></h2><p>{t.aboutBody}</p><div className="about-points">{t.aboutPoints.map((point) => <span key={point}><Check size={17} /> {point}</span>)}</div><button className="secondary-button" onClick={openWhatsApp}>{t.aboutAction} <ArrowRight size={18} /></button></div>
          <div className="about-visual"><div className="about-photo"><LazyImage src={diagnosticsImage} alt="" /></div><div className="about-stamp"><span>{t.aboutStampTop}</span><strong>{t.aboutStampMain}</strong><i>01</i></div></div>
          <div className="about-video"><LazyImage src={careTeamImage} alt="" /><button type="button" onClick={() => showNotice(t.searchNotice)} aria-label={t.featureTitle}><Play size={24} fill="currentColor" /></button></div>
        </section>

        <section id="services" className="departments-section"><div className="section-container"><div className="section-heading split-heading"><div><p className="eyebrow light"><span /> {t.serviceEyebrow}</p><h2>{t.serviceTitle} <em>{t.serviceAccent}</em></h2></div><p>{t.serviceBody}</p></div><div className="department-card-grid">{services.map(({ id, icon: Icon, tone, ...service }) => { const item = service[language]; return <article className={`department-card service-${id}`} key={id}><span className="department-id">{id}</span><span className={`department-icon icon-${tone}`}><Icon size={24} /></span><div className="service-card-title"><h3>{item.title}</h3></div><div className="service-card-checklist">{item.conditions.map((condition) => <span key={condition}><Check size={14} /> {condition}</span>)}</div><a className="service-card-link" href="#contact">{t.learnMore} <ArrowRight size={16} /></a></article>; })}</div></div></section>

        <section className="facilities-section section-container" data-reveal>
          <div className="section-heading facility-heading"><div><p className="eyebrow"><span /> {t.facilitiesEyebrow}</p><h2>{t.facilitiesTitle} <em>{t.facilitiesAccent}</em></h2></div><button className="text-button" onClick={() => scrollToBookingForm()}>{t.facilitiesAction} <ArrowRight size={17} /></button></div>
          <div className="facility-grid"><article className="facility-main"><LazyImage src={careTeamImage} alt="" /><div className="facility-main-shade" /><span className="brand-motif motif-facility" aria-hidden="true"><LazyImage src={generatedMark} alt="" /></span><div><span>{t.featureLabel}</span><h3>{t.featureTitle}</h3></div></article><div className="facility-cards">{techniques.slice(0,4).map(([english, arabic], index) => <article key={english}><span className={`small-icon ${index === 1 ? "gold" : index === 2 ? "red" : index === 3 ? "navy" : ""}`}><Sparkles size={21} /></span><h3>{isArabic ? arabic : english}</h3><p>{t.techniqueDescription}</p></article>)}</div></div>
        </section>

        <section id="team" className="care-team-section"><div className="section-container care-team-inner"><div className="team-copy"><span className="brand-motif motif-team" aria-hidden="true"><LazyImage src={generatedMark} alt="" /></span><p className="eyebrow light"><span /> {t.teamEyebrow}</p><h2>{t.teamTitle} <em>{t.teamAccent}</em></h2><p>{t.teamBody}</p><a className="outline-light-button" href="#team-directory">{t.allTeam} <ArrowRight size={17} /></a></div><div className="team-feature-card"><LazyImage src={diagnosticsImage} alt="" /><div className="team-feature-content"><span>{t.teamEyebrow}</span><h3>{t.shortName}</h3><button onClick={() => scrollToBookingForm()}>{t.appointment} <ArrowRight size={17} /></button></div></div><div className="team-rail" aria-label={t.teamEyebrow}><button className="active">{t.teamEyebrow}</button><button onClick={() => scrollToBookingForm()}>{t.appointment}</button><button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>{t.quickContact}</button></div></div></section>

        <section id="team-directory" className="team-directory section-container" data-reveal><div className="section-heading team-directory-heading"><div><p className="eyebrow"><span /> {t.teamEyebrow}</p><h2>{isArabic ? "طاقم متخصص يمتد عبر" : "A specialist team across"} <em>{isArabic ? "مسارات التأهيل." : "rehabilitation pathways."}</em></h2></div><p>{t.profilePhotoPending}</p></div><div className="team-grid">{team.map((member) => { const person = member[language]; const photo = clinicianPhotos[member.initials]; const displayName = isArabic ? person.name : suppliedEnglishNames[member.initials] ?? person.name; const avatarGender = clinicianAvatarGender[member.initials] ?? "male"; return <article className="team-card" key={member.en.name}>{photo ? <div className="team-photo-pending has-photo"><LazyImage src={photo} loading="lazy" alt={`${displayName} — ${person.specialty}`} /></div> : <div className={`team-photo-pending professional-avatar avatar-${avatarGender}`} role="img" aria-label={`${displayName} — ${isArabic ? "صورة رمزية لمختص" : "professional clinician avatar"}`}><div className="professional-avatar-glyph"><UserRound size={58} strokeWidth={1.55} /></div></div>}<div className="team-card-content"><h3>{displayName}</h3><p className="team-specialty">{person.specialty}</p><p className="team-experience"><Clock3 size={15} /> {person.experience ? `${t.experience}: ${person.experience}` : experienceUnavailable}</p><div className="team-card-actions"><button className="team-book" onClick={() => scrollToBookingForm(displayName)} aria-label={`${t.appointment} — ${displayName}`}>{t.appointment}</button><button className="team-view" onClick={() => setSelectedProfile(member)} aria-haspopup="dialog" aria-label={`${isArabic ? "عرض الملف الشخصي" : "View profile"} — ${displayName}`}>{isArabic ? "عرض الملف الشخصي" : "View Profile"}</button></div></div></article>; })}</div></section>

        <section className="techniques-section"><div className="section-container techniques-inner"><div className="pathway-intro"><p className="eyebrow light"><span /> {t.techniqueEyebrow}</p><h2>{t.techniqueTitle} <em>{t.techniqueAccent}</em></h2><p>{t.techniqueBody}</p></div><div className="technique-carousel" aria-roledescription="carousel" aria-label={t.techniqueEyebrow}><div className="technique-carousel-window" onPointerDown={(event) => { techniqueTouchStart.current = event.clientX; }} onPointerUp={(event) => { if (techniqueTouchStart.current === null) return; const swipeDistance = event.clientX - techniqueTouchStart.current; if (Math.abs(swipeDistance) > 36) moveTechnique(swipeDistance > 0 ? -1 : 1); techniqueTouchStart.current = null; }} onPointerCancel={() => { techniqueTouchStart.current = null; }}>{techniques.map(([english, arabic], index) => { const isActive = index === activeTechniqueIndex; return <article className={`technique-slide ${isActive ? "is-active" : ""}`} key={english} aria-hidden={!isActive}><span className="technique-slide-number">{String(index + 1).padStart(2, "0")}</span><Sparkles className="technique-slide-icon" size={26} /><div><p>{t.techniqueEyebrow}</p><h3>{isArabic ? arabic : english}</h3></div></article>; })}</div><div className="technique-carousel-controls"><button type="button" className="technique-carousel-arrow" onClick={() => moveTechnique(-1)} aria-label={isArabic ? "التقنية السابقة" : "Previous technique"}><ChevronLeft size={19} /></button><div className="technique-carousel-status"><div className="technique-carousel-dots" role="tablist" aria-label={t.techniqueEyebrow}>{techniques.map(([,], index) => <button type="button" key={index} className={`technique-carousel-dot ${index === activeTechniqueIndex ? "is-active" : ""}`} onClick={() => selectTechnique(index)} role="tab" aria-selected={index === activeTechniqueIndex} aria-label={`${isArabic ? "التقنية" : "Technique"} ${index + 1}`} />)}</div><div className="technique-carousel-progress" aria-hidden="true"><span style={{ transform: `scaleX(${(activeTechniqueIndex + 1) / techniques.length})` }} /></div></div><button type="button" className="technique-carousel-arrow" onClick={() => moveTechnique(1)} aria-label={isArabic ? "التقنية التالية" : "Next technique"}><ChevronRight size={19} /></button></div></div></div></section>

        <section className="reputation-section insurance-partners-section section-container" data-reveal><div className="insurance-block"><p className="eyebrow"><span /> {t.insuranceEyebrow}</p><h3>{t.insuranceTitle} <em>{t.insuranceAccent}</em></h3><p>{t.insuranceBody}</p><div className="partner-cards">{partners.map(({ id, icon: Icon, ...partner }) => { const item = partner[language]; return <article className="partner-card" key={id}><span className="partner-icon"><Icon size={24} /></span><h4>{item.name}</h4><p>{item.note}</p></article>; })}</div></div></section>

        <section id="contact" className="contact-section section-container" data-reveal><div className="contact-intro"><span className="brand-motif motif-contact" aria-hidden="true"><LazyImage src={generatedMark} alt="" /></span><p className="eyebrow"><span /> {t.contactEyebrow}</p><h2>{t.contactTitle} <em>{t.contactAccent}</em></h2><p>{t.contactBody}</p><div className="contact-meta"><a href={linktreeUrl} target="_blank" rel="noreferrer"><MapPin size={18} /> {isArabic ? "المملكة العربية السعودية — الموقع عبر Linktree" : "Saudi Arabia — location via Linktree"}</a><a href={phoneHref}><Phone size={18} /> {phoneDisplay}</a><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} /> {phoneDisplay}</a></div></div><form className="contact-form" onSubmit={submitBookingToWhatsApp}><div className="form-row"><label>{t.formName}<input required name="firstName" placeholder={t.formName} /></label><label>{t.formEmail}<input required type="email" name="email" placeholder="you@example.com" /></label></div><div className="form-row"><label>{t.formPhone}<input required name="phone" placeholder="+966" /></label><label>{t.formServiceNeeded}<select required name="service" defaultValue=""><option value="" disabled>{t.formServicePlaceholder}</option>{services.map((service) => <option key={service.id} value={service[language].title}>{service[language].title}</option>)}</select></label></div><div className="form-row"><label>{t.formPreferredDate}<input required type="date" name="preferredDate" /></label><label>{t.message}<textarea name="message" rows={3} placeholder={t.message} /></label></div><div className="form-footer"><label className="consent"><input required type="checkbox" /><span>{t.formConsent}</span></label><button className="primary-button" type="submit">{t.formSend} <ArrowRight size={18} /></button></div></form></section>

        <section className="hours-section section-container" data-reveal><div className="hours-heading"><p className="eyebrow"><span /> {t.hours}</p><h2>{isArabic ? "خطّط لزيارتك" : "Plan your visit"}</h2><a className="secondary-button" href={mapsUrl} target="_blank" rel="noreferrer">{t.map} <ArrowRight size={17} /></a></div><div className="hours-grid">{hours[language].map(([day, time]) => <div key={day}><span>{day}</span><strong>{time}</strong></div>)}</div></section>
      </main>

      <footer className="site-footer"><div className="section-container footer-top"><a className="brand footer-brand" href="#top"><LazyImage className="official-logo" src={officialLogo} alt="P. Center" /><span className="brand-wordmark"><strong>P. Center</strong><small>{isArabic ? "عيادة نخبة الأخصائيون" : "Elite Specialists Clinic"}</small></span></a><p>{t.footerAbout}</p><a className="footer-top-link" href="#top">{t.backTop} <ArrowRight size={17} /></a></div><div className="section-container footer-links"><div><p>{t.footerExplore}</p><a href="#services">{t.nav[0][0]}</a><a href="#team">{t.nav[1][0]}</a><a href="#about">{t.nav[2][0]}</a></div><div><p>{t.footerAccess}</p><button onClick={() => scrollToBookingForm()}>{t.appointment}</button><a href="#contact">{t.nav[3][0]}</a><a href={mapsUrl} target="_blank" rel="noreferrer">{t.map}</a></div><div><p>{t.footerNotes}</p><span>{t.footerMessage}</span><span>{t.socials}: <a href={instagramUrl} target="_blank" rel="noreferrer">@p.center0</a></span><span><a href={linktreeUrl} target="_blank" rel="noreferrer">linktr.ee/p.center0</a></span></div></div><div className="section-container footer-bottom"><span>{t.note}</span><span>{isArabic ? "المملكة العربية السعودية" : "Saudi Arabia"}</span></div></footer>

      {selectedProfile && selectedPerson && <div className="profile-dialog-backdrop" role="presentation" onMouseDown={() => setSelectedProfile(null)}><section className="profile-dialog" role="dialog" aria-modal="true" aria-labelledby="profile-dialog-title" onMouseDown={(event) => event.stopPropagation()}><button className="profile-dialog-close" onClick={() => setSelectedProfile(null)} aria-label={isArabic ? "إغلاق الملف الشخصي" : "Close profile"}><X size={19} /></button><div className="profile-dialog-image">{selectedProfilePhoto ? <LazyImage src={selectedProfilePhoto} alt={`${selectedProfileName} — ${selectedPerson.specialty}`} /> : <div className={`professional-avatar-glyph profile-avatar avatar-${clinicianAvatarGender[selectedProfile.initials] ?? "male"}`} role="img" aria-label={`${selectedProfileName} — ${isArabic ? "صورة رمزية لمختص" : "professional clinician avatar"}`}><UserRound size={72} strokeWidth={1.45} /></div>}</div><div className="profile-dialog-body"><p className="eyebrow"><span /> {t.teamEyebrow}</p><h2 id="profile-dialog-title">{selectedProfileName}</h2><p className="profile-dialog-specialty">{selectedPerson.specialty}</p><p className="team-experience"><Clock3 size={15} /> {selectedPerson.experience ? `${t.experience}: ${selectedPerson.experience}` : experienceUnavailable}</p><div className="profile-detail-grid"><div><h3>{t.credentials}</h3><ul>{selectedPerson.certifications.map((certification) => <li key={certification}>{certification}</li>)}</ul></div><div><h3>{t.careAreas}</h3><ul>{selectedPerson.areas.map((area) => <li key={area}>{area}</li>)}</ul></div><button className="team-book profile-book" onClick={() => { setSelectedProfile(null); scrollToBookingForm(selectedProfileName); }}>{t.appointment}</button></div></div></section></div>}
      <a className="floating-contact" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={t.whatsapp}><LazyImage className="whatsapp-brand-mark" src={whatsappBrandMark} alt="" /></a><div className="floating-share"><button className="floating-share-trigger" type="button" onClick={() => setShareOpen((open) => !open)} aria-label={isArabic ? "مشاركة الموقع" : "Share website"} data-tooltip={isArabic ? "فتح خيارات المشاركة" : "Open share options"} title={isArabic ? "فتح خيارات المشاركة" : "Open share options"} aria-expanded={shareOpen} aria-controls="share-menu"><Share2 size={20} /></button>{shareOpen && <div id="share-menu" className="floating-share-menu" role="menu" aria-label={isArabic ? "خيارات المشاركة" : "Share options"}><a href={whatsappShareUrl} target="_blank" rel="noreferrer" role="menuitem" onClick={() => setShareOpen(false)} data-tooltip={isArabic ? "مشاركة عبر واتساب" : "Share via WhatsApp"} title={isArabic ? "مشاركة عبر واتساب" : "Share via WhatsApp"}><MessageCircle size={17} /> WhatsApp</a><a href={twitterShareUrl} target="_blank" rel="noreferrer" role="menuitem" onClick={() => setShareOpen(false)} data-tooltip={isArabic ? "مشاركة عبر إكس" : "Share via Twitter / X"} title={isArabic ? "مشاركة عبر إكس" : "Share via Twitter / X"}><span className="share-x-mark" aria-hidden="true">X</span> Twitter / X</a></div>}</div><button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label={t.backTop}><ArrowUp size={20} /></button>{notice && <div className="notice" role="status"><Check size={18} /> {notice}</div>}<div className="carousel-control" aria-label="Example carousel controls"><button onClick={() => setActiveDot((activeDot + 3) % 4)} aria-label="Previous slide"><ChevronLeft size={18} /></button>{[0, 1, 2, 3].map((dot) => <button className={activeDot === dot ? "dot active" : "dot"} aria-label={`Go to slide ${dot + 1}`} key={dot} onClick={() => setActiveDot(dot)} />)}<button onClick={() => setActiveDot((activeDot + 1) % 4)} aria-label="Next slide"><ChevronRight size={18} /></button></div>
    </div>
  );
}
