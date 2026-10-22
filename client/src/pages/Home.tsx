/**
 * Approved Modern Clinical Confidence layout — content-only conversion for Specialists Center for Physiotherapy.
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
  X,
} from "lucide-react";

type Language = "en" | "ar";

const heroImage = "/healthcare-images/hero-clinical-doctor.jpeg";
const diagnosticsImage = "/healthcare-images/about-clinic-doctor.jpeg";
const careTeamImage = "/healthcare-images/about-video-thumbnail.jpeg";
const appointmentImage = "/healthcare-images/appointment-rehabilitation-session.jpeg";
const generatedMark = "/manus-storage/american-hospital-mark_4ba65579.png";
const officialLogo = "/manus-storage/the-specialists-official-logo_65f45172.jpg";
const whatsappBrandMark = "/manus-storage/whatsapp-official-mark_1c42a00b.png";
const medgulfLogo = "/manus-storage/medgulf-official-logo_6bf1acb0.png";
const malathLogo = "/manus-storage/malath-insurance-official-logo_91d7d0e2.png";
const medgulfInfoUrl = "https://www.medgulf.com.sa/home/";
const malathInfoUrl = "https://www.malath.com.sa/en";
const whatsappUrl = "https://wa.me/966558008066";
const mapsUrl = "https://www.google.com/maps?q=21.2431596,40.4113092";

const content = {
  en: {
    name: "Specialists Center for Physiotherapy",
    shortName: "Specialists Center",
    tagline: "Your treatment is in specialist hands",
    nav: [
      ["Services", "#services"], ["Team", "#team"], ["About", "#about"], ["Contact", "#contact"],
    ],
    utility: "King Abdullah Road, Ma'ashi, Taif",
    badges: ["Physiotherapy & Rehabilitation", "Neurological care", "Sports injuries"],
    appointment: "Book appointment",
    heroEyebrow: "Physiotherapy & Rehabilitation · Taif",
    heroLead: "Your treatment is in",
    heroStrong: "specialist hands.",
    heroBody: "Specialists Center for Physiotherapy offers focused rehabilitation pathways for neurological conditions, musculoskeletal concerns, sports injuries, and women's health.",
    services: "Explore services",
    guidance: "Care centered on rehabilitation",
    quickAppointment: "Appointments",
    quickTitle: "Begin your rehabilitation journey.",
    quickAction: "Book through WhatsApp",
    quickServiceNumber: "01",
    quickServiceTitle: "Find the right physiotherapy service.",
    quickServiceBody: "Explore the center’s real rehabilitation specialties before arranging a visit.",
    quickServiceAction: "View services",
    quickContact: "Contact the center",
    quickContactTitle: "Have a question before booking?",
    quickContactAction: "Message on WhatsApp",
    aboutEyebrow: "The center",
    aboutTitle: "Rehabilitation guided by",
    aboutAccent: "specialist hands.",
    aboutBody: "Specialists Center for Physiotherapy is a Taif-based physiotherapy and rehabilitation center. It is the first center in Taif specializing in nervous system and sports injuries.",
    aboutPoints: ["Neurological physiotherapy", "Musculoskeletal rehabilitation", "Sports injuries & women’s health"],
    aboutAction: "Contact the center",
    aboutStampTop: "Taif",
    aboutStampMain: "specialist care",
    serviceEyebrow: "Services",
    serviceTitle: "Specialist care for",
    serviceAccent: "each rehabilitation pathway.",
    serviceBody: "Explore six core physiotherapy categories and the conditions supported by the center.",
    learnMore: "Explore care areas",
    facilitiesEyebrow: "Treatment approach",
    facilitiesTitle: "Techniques selected for",
    facilitiesAccent: "focused rehabilitation.",
    facilitiesAction: "Book appointment",
    featureTitle: "A focused approach to movement, recovery, and rehabilitation.",
    featureLabel: "Specialists Center",
    techniqueDescription: "Techniques listed by the center",
    teamEyebrow: "Medical team",
    teamTitle: "Meet the specialists who support",
    teamAccent: "your recovery.",
    teamBody: "The center’s team includes physiotherapy specialists across neurological care, musculoskeletal rehabilitation, sports injuries, women’s health, and rehabilitation after surgery or fracture.",
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
    insuranceEyebrow: "Insurance",
    insuranceTitle: "Confirmed insurance",
    insuranceAccent: "partners.",
    insuranceBody: "The supplied confirmed partners are listed below. Ask the center about eligibility before your visit.",
    contactEyebrow: "Contact the center",
    contactTitle: "Start with a",
    contactAccent: "simple message.",
    contactBody: "Book an appointment or ask a general question through WhatsApp or phone. Please avoid sharing sensitive health information through this website form.",
    map: "Open Google Maps",
    hours: "Working hours",
    phone: "Phone",
    whatsapp: "WhatsApp",
    address: "Address",
    message: "How can the center help?",
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
    formConsent: "I understand this demonstration form should not contain sensitive health information.",
    formSend: "Continue to WhatsApp",
    footerAbout: "A physiotherapy and rehabilitation center in Taif, Saudi Arabia.",
    footerExplore: "Explore",
    footerAccess: "Patient access",
    footerNotes: "Find us",
    footerMessage: "Professional physiotherapy and rehabilitation information for Taif.",
    backTop: "Back to top",
    note: "© 2026 Specialists Center for Physiotherapy",
    socials: "Social media",
    language: "العربية",
    otherLanguage: "English",
    rating: "Google rating",
    reviews: "reviews",
    instagram: "Instagram",
    posts: "posts",
    messageNotice: "Opening WhatsApp so you can contact Specialists Center for Physiotherapy.",
    searchNotice: "Search is not connected in this prototype.",
    profilePhotoPending: "The client’s real photo is required before this team card can display a portrait.",
  },
  ar: {
    name: "مركز المختصون للعلاج الطبيعي",
    shortName: "مركز المختصون",
    tagline: "علاجك بأيدي مختصة",
    nav: [
      ["الخدمات", "#services"], ["الطاقم الطبي", "#team"], ["من نحن", "#about"], ["تواصل معنا", "#contact"],
    ],
    utility: "طريق الملك عبدالله، معشي، الطائف",
    badges: ["علاج طبيعي وإعادة تأهيل", "العلاج العصبي", "الإصابات الرياضية"],
    appointment: "احجز موعدًا",
    heroEyebrow: "علاج طبيعي وإعادة تأهيل · الطائف",
    heroLead: "علاجك بأيدي",
    heroStrong: "مختصة.",
    heroBody: "يقدم مركز المختصون للعلاج الطبيعي مسارات تأهيل متخصصة للحالات العصبية ومشاكل العظام والعضلات والإصابات الرياضية وصحة المرأة.",
    services: "استعرض الخدمات",
    guidance: "تأهيل يركز على احتياجك",
    quickAppointment: "المواعيد",
    quickTitle: "ابدأ رحلة التأهيل الخاصة بك.",
    quickAction: "احجز عبر واتساب",
    quickServiceNumber: "01",
    quickServiceTitle: "ابحث عن خدمة العلاج الطبيعي المناسبة.",
    quickServiceBody: "تعرّف على تخصصات التأهيل الفعلية في المركز قبل حجز الزيارة.",
    quickServiceAction: "استعرض الخدمات",
    quickContact: "تواصل مع المركز",
    quickContactTitle: "لديك سؤال قبل الحجز؟",
    quickContactAction: "راسلنا عبر واتساب",
    aboutEyebrow: "عن المركز",
    aboutTitle: "تأهيل تقوده",
    aboutAccent: "أيدٍ مختصة.",
    aboutBody: "مركز المختصون للعلاج الطبيعي هو مركز للعلاج الطبيعي وإعادة التأهيل في الطائف. وهو أول مركز في الطائف متخصص في إصابات الجهاز العصبي والإصابات الرياضية.",
    aboutPoints: ["العلاج الطبيعي العصبي", "تأهيل العظام والعضلات", "الإصابات الرياضية وصحة المرأة"],
    aboutAction: "تواصل مع المركز",
    aboutStampTop: "الطائف",
    aboutStampMain: "رعاية متخصصة",
    serviceEyebrow: "الخدمات",
    serviceTitle: "رعاية متخصصة لكل",
    serviceAccent: "مسار من مسارات التأهيل.",
    serviceBody: "استعرض ست فئات رئيسية للعلاج الطبيعي والحالات التي يدعمها المركز.",
    learnMore: "استعرض مجالات العلاج",
    facilitiesEyebrow: "أسلوب العلاج",
    facilitiesTitle: "تقنيات مختارة من أجل",
    facilitiesAccent: "تأهيل أكثر تركيزًا.",
    facilitiesAction: "احجز موعدًا",
    featureTitle: "منهج يركز على الحركة والتعافي وإعادة التأهيل.",
    featureLabel: "مركز المختصون",
    techniqueDescription: "تقنيات مذكورة من قبل المركز",
    teamEyebrow: "الطاقم الطبي",
    teamTitle: "تعرّف على المختصين الذين يدعمون",
    teamAccent: "رحلة تعافيك.",
    teamBody: "يضم فريق المركز مختصين في العلاج العصبي وإعادة تأهيل العظام والعضلات والإصابات الرياضية وصحة المرأة والتأهيل بعد العمليات أو الكسور.",
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
    insuranceEyebrow: "التأمين",
    insuranceTitle: "شركاء التأمين",
    insuranceAccent: "المؤكدون.",
    insuranceBody: "الشركاء المؤكدون المذكورون في المعلومات الموردة أدناه. يُرجى الاستفسار من المركز عن الأهلية قبل الزيارة.",
    contactEyebrow: "تواصل مع المركز",
    contactTitle: "ابدأ بـ",
    contactAccent: "رسالة بسيطة.",
    contactBody: "احجز موعدًا أو اطرح سؤالًا عامًا عبر واتساب أو الهاتف. يرجى عدم مشاركة معلومات صحية حساسة من خلال نموذج الموقع.",
    map: "افتح خرائط Google",
    hours: "ساعات العمل",
    phone: "الهاتف",
    whatsapp: "واتساب",
    address: "العنوان",
    message: "كيف يمكن للمركز مساعدتك؟",
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
    formConsent: "أفهم أن هذا النموذج التجريبي لا ينبغي أن يتضمن معلومات صحية حساسة.",
    formSend: "المتابعة إلى واتساب",
    footerAbout: "مركز للعلاج الطبيعي وإعادة التأهيل في الطائف، المملكة العربية السعودية.",
    footerExplore: "استكشف",
    footerAccess: "خدمات المراجعين",
    footerNotes: "اعثر علينا",
    footerMessage: "معلومات احترافية عن العلاج الطبيعي وإعادة التأهيل في الطائف.",
    backTop: "العودة للأعلى",
    note: "© 2026 مركز المختصون للعلاج الطبيعي",
    socials: "التواصل الاجتماعي",
    language: "English",
    otherLanguage: "العربية",
    rating: "تقييم Google",
    reviews: "تقييمًا",
    instagram: "إنستغرام",
    posts: "منشورًا",
    messageNotice: "يتم فتح واتساب لتتمكن من التواصل مع مركز المختصون للعلاج الطبيعي.",
    searchNotice: "البحث غير متصل في هذا النموذج التجريبي.",
    profilePhotoPending: "صورة المختص الفعلية من العميل مطلوبة قبل عرض صورة شخصية في هذه البطاقة.",
  },
} as const;

const services = [
  {
    id: "01", icon: HeartPulse, tone: "emerald",
    en: { title: "Shoulder & Joint Rehabilitation", conditions: ["Shoulder & Joint Problems", "Joint Mobility & Function", "Shoulder Rehabilitation", "Movement & Strength Recovery"] },
    ar: { title: "تأهيل الكتف والمفاصل", conditions: ["مشاكل الكتف والمفاصل", "حركة المفاصل ووظائفها", "تأهيل الكتف", "استعادة الحركة والقوة"] },
  },
  {
    id: "02", icon: Dumbbell, tone: "gold",
    en: { title: "Spine, Vestibular & Nerve Rehabilitation", conditions: ["Spine & Disc Problems", "Vestibular Rehabilitation", "Balance & Postural Training", "7th Nerve Rehabilitation"] },
    ar: { title: "تأهيل العمود الفقري والجهاز الدهليزي والعصب", conditions: ["مشاكل العمود الفقري والغضاريف", "تأهيل الجهاز الدهليزي", "تدريب التوازن ووضعية الجسم", "تأهيل العصب السابع"] },
  },
  {
    id: "03", icon: ShieldCheck, tone: "navy",
    en: { title: "Sports & Muscle Rehabilitation", conditions: ["Sports Injury Rehabilitation", "Muscle Rehabilitation", "Muscle & Ligament Injuries", "Strength & Functional Recovery"] },
    ar: { title: "تأهيل الإصابات الرياضية والعضلات", conditions: ["تأهيل الإصابات الرياضية", "تأهيل العضلات", "إصابات العضلات والأربطة", "استعادة القوة والوظائف الحركية"] },
  },
  {
    id: "04", icon: HeartPulse, tone: "coral",
    en: { title: "Post-Operative & Musculoskeletal Rehabilitation", conditions: ["Post-Operative Rehabilitation", "Musculoskeletal Therapy", "Mobility & Strength Recovery", "Sports Injury Rehabilitation"] },
    ar: { title: "التأهيل بعد العمليات والعلاج العضلي الهيكلي", conditions: ["التأهيل بعد العمليات", "العلاج العضلي الهيكلي", "استعادة الحركة والقوة", "تأهيل الإصابات الرياضية"] },
  },
  {
    id: "05", icon: Dumbbell, tone: "emerald",
    en: { title: "Post-Fracture & Sports Rehabilitation", conditions: ["Post-Fracture Rehabilitation", "Sports Injury Rehabilitation", "Lower-Limb Recovery", "Balance & Functional Training"] },
    ar: { title: "تأهيل ما بعد الكسور والإصابات الرياضية", conditions: ["التأهيل بعد الكسور", "تأهيل الإصابات الرياضية", "استعادة وظائف الطرف السفلي", "تدريب التوازن والوظائف الحركية"] },
  },
  {
    id: "06", icon: Stethoscope, tone: "navy",
    en: { title: "Tendon & Fracture Rehabilitation", conditions: ["Tendon Rehabilitation", "Fracture Rehabilitation", "Strength & Mobility Recovery", "Functional Rehabilitation"] },
    ar: { title: "تأهيل الأوتار والكسور", conditions: ["تأهيل الأوتار", "تأهيل الكسور", "استعادة القوة والحركة", "التأهيل الوظيفي"] },
  },
];

const techniques = [
  ["Manual Therapy (COMT)", "العلاج اليدوي"], ["Dry Needling", "الإبر الجافة"], ["Dynamic Fascia Therapy", "العلاج الديناميكي للّفافة"],
  ["Dry Cupping", "الأكواب الجافة"], ["Joint Manipulation", "طقطقة المفاصل"], ["Schroth Technique", "تقنية Schroth للجنف"],
  ["ANF Therapy", "تقنية ANF"], ["Vestibular Rehabilitation", "علاج اضطرابات الجهاز الدهليزي"], ["Lymphedema Management", "علاج الوذمة اللمفاوية"],
];

const team = [
  { initials: "MA", en: { name: "Muhammad Al-Ghalabi", specialty: "Shoulder & Joint Problems", experience: "8+ years", certifications: ["FIFA Sports Medicine Diploma", "COMT Manual Therapy", "Corrective Therapy", "ANF Technique"], areas: ["Shoulder & Joint Problems"] }, ar: { name: "محمد الغالبي", specialty: "مشاكل الكتف والمفاصل", experience: "٨+ سنوات", certifications: ["دبلوم FIFA للطب الرياضي", "العلاج اليدوي COMT", "العلاج التصحيحي", "تقنية ANF"], areas: ["مشاكل الكتف والمفاصل"] } },
  { initials: "FA", en: { name: "Fahad Al-Baqmi", specialty: "Spine, Vestibular Disorders & 7th Nerve Rehabilitation", experience: "4 years", certifications: ["COMT — Cabri Institute", "Dry Needling", "Neck & Spine Disc Treatment"], areas: ["Spine", "Vestibular Disorders", "7th Nerve Rehabilitation"] }, ar: { name: "فهد البقمي", specialty: "العمود الفقري واضطرابات التوازن وتأهيل العصب السابع", experience: "٤ سنوات", certifications: ["COMT — معهد كابري", "الإبر الجافة", "علاج الغضاريف في الرقبة والعمود الفقري"], areas: ["العمود الفقري", "اضطرابات الجهاز الدهليزي", "تأهيل العصب السابع"] } },
  { initials: "AA", en: { name: "Abdulaziz Al-Thamali", specialty: "Musculoskeletal, Sports Injuries & Muscle Rehabilitation", experience: "5+ years", certifications: ["Master's in Musculoskeletal Physiotherapy", "Foot Manual Therapy", "FIFA Sports Medicine Diploma", "International Dry Needling"], areas: ["Musculoskeletal", "Sports Injuries", "Muscle Rehabilitation"] }, ar: { name: "عبدالعزيز الثمالي", specialty: "تأهيل العظام والعضلات والإصابات الرياضية والعضلات", experience: "٥+ سنوات", certifications: ["ماجستير العلاج الطبيعي للعضلات والعظام", "العلاج اليدوي للقدم", "دبلوم FIFA للطب الرياضي", "الإبر الجافة الدولية"], areas: ["العظام والعضلات", "الإصابات الرياضية", "تأهيل العضلات"] } },
  { initials: "MT", en: { name: "Mishari Al-Thubaiti", specialty: "Post-operative Rehabilitation, Sports Injuries & Musculoskeletal Therapy", experience: "6 years", certifications: ["FIFA Diploma", "Davide Simon Academy — Switzerland", "Thurst — Italian Academy", "Manual Therapy — Upper & Lower Limbs", "Primephysio — British Institute"], areas: ["Post-operative Rehabilitation", "Sports Injuries", "Musculoskeletal Therapy"] }, ar: { name: "مشاري الثبيتي", specialty: "تأهيل ما بعد العمليات والإصابات الرياضية والعلاج العضلي الهيكلي", experience: "٦ سنوات", certifications: ["دبلوم FIFA", "أكاديمية دافيدي سيمون — سويسرا", "أكاديمية ثيرست الإيطالية", "العلاج اليدوي للأطراف العلوية والسفلية", "Primephysio — المعهد البريطاني"], areas: ["التأهيل بعد العمليات", "الإصابات الرياضية", "العلاج العضلي الهيكلي"] } },
  { initials: "TM", en: { name: "Turki Majeed", specialty: "Post-Fracture & Sports Injury Rehabilitation", experience: "1 year", certifications: ["National Center for Alternative Medicine — Cupping", "Dry Cupping", "Joint Manipulation", "Dynamic Fascia Academy"], areas: ["Post-Fracture Rehabilitation", "Sports Injury Rehabilitation"] }, ar: { name: "تركي مجيد", specialty: "تأهيل ما بعد الكسور والإصابات الرياضية", experience: "سنة واحدة", certifications: ["المركز الوطني للطب البديل — الحجامة", "الأكواب الجافة", "طقطقة المفاصل", "أكاديمية العلاج الديناميكي للّفافة"], areas: ["تأهيل ما بعد الكسور", "تأهيل الإصابات الرياضية"] } },
  { initials: "KR", en: { name: "Khalid Al-Rubai'i", specialty: "Tendon & Fracture Rehabilitation", experience: "1 year", certifications: ["Primephysio — Manual Therapy / Bone Assessment", "Dynamic Fascia Academy"], areas: ["Tendon Rehabilitation", "Fracture Rehabilitation"] }, ar: { name: "خالد الريبيعي", specialty: "تأهيل الأوتار والكسور", experience: "سنة واحدة", certifications: ["Primephysio — العلاج اليدوي وتقييم العظام", "أكاديمية العلاج الديناميكي للّفافة"], areas: ["تأهيل الأوتار", "تأهيل الكسور"] } },
  { initials: "RH", en: { name: "Raghad Al-Harbi", specialty: "Neurological Physiotherapy / Nervous System Specialist", experience: "6+ years", certifications: ["Master's — Imam Abdulrahman bin Faisal University"], areas: ["Multiple Sclerosis", "Parkinson's", "Guillain-Barré Syndrome", "Elderly neurological conditions", "Children with Cerebral Palsy", "Down Syndrome", "Pre/Post Surgery Rehabilitation"] }, ar: { name: "رغد الحربي", specialty: "العلاج الطبيعي العصبي / أخصائية الجهاز العصبي", experience: "٦+ سنوات", certifications: ["ماجستير — جامعة الإمام عبدالرحمن بن فيصل"], areas: ["التصلب اللويحي", "باركنسون", "متلازمة غيان باريه", "الحالات العصبية لكبار السن", "الأطفال المصابون بالشلل الدماغي", "متلازمة داون", "التأهيل قبل وبعد العمليات"] } },
  { initials: "YA", en: { name: "Yusra Al-Thaqafi", specialty: "Musculoskeletal, Sports & Post-operative Rehabilitation", experience: "3–5 years", certifications: ["ANF Technique", "Dry Needling", "Manual Therapy", "FIFA Sports Medicine Diploma"], areas: ["Musculoskeletal", "Sports Rehabilitation", "Post-operative Rehabilitation"] }, ar: { name: "يسرا الثقفي", specialty: "تأهيل العظام والعضلات والإصابات الرياضية وما بعد العمليات", experience: "٣–٥ سنوات", certifications: ["تقنية ANF", "الإبر الجافة", "العلاج اليدوي", "دبلوم FIFA للطب الرياضي"], areas: ["العظام والعضلات", "التأهيل الرياضي", "التأهيل بعد العمليات"] } },
  { initials: "RD", en: { name: "Raghad Al-Duwaibi", specialty: "Sports Injuries, Spine, Post-operative & Fracture Rehabilitation", experience: "3–5 years", certifications: ["Dry Needling", "Manual Therapy"], areas: ["Sports Injuries", "Spine", "Post-operative Rehabilitation", "Fracture Rehabilitation"] }, ar: { name: "رغد الذويبي", specialty: "الإصابات الرياضية والعمود الفقري والتأهيل بعد العمليات والكسور", experience: "٣–٥ سنوات", certifications: ["الإبر الجافة", "العلاج اليدوي"], areas: ["الإصابات الرياضية", "العمود الفقري", "التأهيل بعد العمليات", "تأهيل الكسور"] } },
  { initials: "AH", en: { name: "Ahd Al-Harthi", specialty: "Musculoskeletal, Lymphedema & Scoliosis", experience: null, certifications: ["Schroth Technique", "Manual Therapy for Bones", "Primephysio — Lymphedema"], areas: ["Musculoskeletal", "Lymphedema", "Scoliosis"] }, ar: { name: "عهد الحارثي", specialty: "العظام والعضلات والوذمة اللمفاوية والجنف", experience: null, certifications: ["تقنية شروث", "العلاج اليدوي للعظام", "Primephysio — الوذمة اللمفاوية"], areas: ["العظام والعضلات", "الوذمة اللمفاوية", "الجنف"] } },
  { initials: "NZ", en: { name: "Nouf Al-Zuhofi", specialty: "Women's Health Physiotherapy", experience: "4 years", certifications: ["Women's Health Diploma", "Dry Needling Diploma", "Manual Therapy — Spine & Upper/Lower Limbs"], areas: ["Pelvic Pain", "Pregnancy", "Post-natal Rehabilitation", "Pelvic Floor Weakness"] }, ar: { name: "نوف الزحوفي", specialty: "العلاج الطبيعي لصحة المرأة", experience: "٤ سنوات", certifications: ["دبلوم صحة المرأة", "دبلوم الإبر الجافة", "العلاج اليدوي للعمود الفقري والأطراف العلوية والسفلية"], areas: ["آلام الحوض", "الحمل", "التأهيل بعد الولادة", "ضعف عضلات قاع الحوض"] } },
];

const clinicianPhotos: Record<string, string> = {
  FA: "/manus-storage/fahad-al-buqmi-transparent_ced7d8d9.png",
  TM: "/manus-storage/turki-majeed-transparent_94711bb4.png",
  AA: "/manus-storage/abdulaziz-al-shamali-transparent_7d8b99d1.png",
  KR: "/manus-storage/khaled-al-rubaie-transparent_01261db2.png",
  MT: "/manus-storage/mishari-al-otaibi-transparent_eaf4db88.png",
  MA: "/manus-storage/mohammed-al-ghali-transparent_796ef478.png",
};

const suppliedEnglishNames: Record<string, string> = {
  FA: "Fahad Al-Buqmi",
  TM: "Turki Majeed",
  AA: "Abdulaziz Al-Shamali",
  KR: "Khaled Al-Rubaie",
  MT: "Mishari Al-Otaibi",
  MA: "Mohammed Al-Ghali",
};

const clinicianAvatarGender: Record<string, "female" | "male"> = {
  RH: "female",
  YA: "female",
  RD: "female",
  AH: "female",
  NZ: "female",
};

const hours = {
  en: [["Saturday", "1:30 PM – 9:30 PM"], ["Sunday", "10:00 AM – 9:00 PM"], ["Monday", "10:00 AM – 9:00 PM"], ["Tuesday", "10:00 AM – 9:00 PM"], ["Wednesday", "10:00 AM – 9:00 PM"], ["Thursday", "10:00 AM – 9:00 PM"], ["Friday", "Closed"], ["Ramadan", "8:30 AM – 2:30 PM"]],
  ar: [["السبت", "١:٣٠ مساءً – ٩:٣٠ مساءً"], ["الأحد", "١٠:٠٠ صباحًا – ٩:٠٠ مساءً"], ["الاثنين", "١٠:٠٠ صباحًا – ٩:٠٠ مساءً"], ["الثلاثاء", "١٠:٠٠ صباحًا – ٩:٠٠ مساءً"], ["الأربعاء", "١٠:٠٠ صباحًا – ٩:٠٠ مساءً"], ["الخميس", "١٠:٠٠ صباحًا – ٩:٠٠ مساءً"], ["الجمعة", "مغلق"], ["رمضان", "٨:٣٠ صباحًا – ٢:٣٠ مساءً"]],
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
  const [language, setLanguage] = useState<Language>("en");
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
  const shareUrl = "https://amhospclinic-tgksi7tz.manus.space/";
  const shareText = isArabic ? "اكتشف مركز المختصون للعلاج الطبيعي في الطائف." : "Discover Specialists Center for Physiotherapy in Taif.";
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
          "مرحبًا، أود طلب حجز موعد في مركز المختصون للعلاج الطبيعي.",
          `الاسم: ${name}`,
          `رقم الهاتف: ${phone}`,
          `البريد الإلكتروني: ${email}`,
          `الخدمة المطلوبة: ${service}`,
          `التاريخ المفضل: ${preferredDate}`,
          bookingDoctor ? `المختص المفضل: ${bookingDoctor}` : "",
          message ? `ملاحظات: ${message}` : "",
        ].filter(Boolean).join("\n")
      : [
          "Hello, I would like to request an appointment at Specialists Center for Physiotherapy.",
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
              <LazyImage className="official-logo" src={officialLogo} alt={isArabic ? "المختصون" : "The Specialists"} />
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
            <div className="hero-copy"><p className="eyebrow"><span /> {t.heroEyebrow}</p><h1><em>{isArabic ? t.heroLead : <><span className="hero-word-your">Your</span> <span className="hero-word-treatment">treatment</span><br /><span className="hero-word-is-in">is in</span></>}</em> <strong>{t.heroStrong}</strong></h1><p className="hero-description">{t.heroBody}</p>
              <div className="hero-actions"><button className="primary-button" onClick={() => scrollToBookingForm()}><CalendarDays size={18} /> {t.appointment}</button><a className="text-button" href="#services">{t.services} <ArrowRight size={17} /></a></div>
            </div><div className="hero-bottom-note"><span className="pulse-dot" /> {t.guidance}</div>
          </div>
        </section>

        <section className="stats-section section-container" aria-label={isArabic ? "إحصاءات المركز" : "Center statistics"}>
          <div className="stats-band">
            <article><Stethoscope size={29} /><strong><CountUpStat value={6} /></strong><span>{t.nav[0][0]}</span></article>
            <article><HeartPulse size={29} /><strong><CountUpStat value={11} /></strong><span>{t.nav[1][0]}</span></article>
            <article><Sparkles size={29} /><strong><CountUpStat value={4.7} decimals={1} /></strong><span>{t.rating}</span></article>
            <article><ShieldCheck size={29} /><strong><CountUpStat value={2} /></strong><span>{t.insuranceEyebrow}</span></article>
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

        <section className="reputation-section insurance-partners-section section-container" data-reveal><div className="insurance-block"><p className="eyebrow"><span /> {t.insuranceEyebrow}</p><h3>{t.insuranceTitle} <em>{t.insuranceAccent}</em></h3><p>{t.insuranceBody}</p><div className="insurance-names"><a className="insurance-partner" href={medgulfInfoUrl} target="_blank" rel="noreferrer" aria-label={isArabic ? "افتح معلومات ميدغلف الرسمية" : "Open official MedGulf information"}><LazyImage src={medgulfLogo} alt="MedGulf | ميدغلف" /><span>{isArabic ? "ميدغلف" : "MedGulf"}</span><small>{isArabic ? "تتطلب الأهلية وثيقة سارية ومنافع معتمدة. أكّد التغطية قبل الزيارة." : "Eligibility requires an active policy and approved benefits. Confirm coverage before your visit."}</small></a><a className="insurance-partner" href={malathInfoUrl} target="_blank" rel="noreferrer" aria-label={isArabic ? "افتح معلومات ملاذ الرسمية" : "Open official Malath Insurance information"}><LazyImage src={malathLogo} alt="Malath Insurance | ملاذ للتأمين" /><span>{isArabic ? "ملاذ للتأمين" : "Malath Insurance"}</span><small>{isArabic ? "تتطلب الأهلية وثيقة سارية ومنافع معتمدة. أكّد التغطية قبل الزيارة." : "Eligibility requires an active policy and approved benefits. Confirm coverage before your visit."}</small></a></div></div></section>

        <section id="contact" className="contact-section section-container" data-reveal><div className="contact-intro"><span className="brand-motif motif-contact" aria-hidden="true"><LazyImage src={generatedMark} alt="" /></span><p className="eyebrow"><span /> {t.contactEyebrow}</p><h2>{t.contactTitle} <em>{t.contactAccent}</em></h2><p>{t.contactBody}</p><div className="contact-meta"><a href={mapsUrl} target="_blank" rel="noreferrer"><MapPin size={18} /> {isArabic ? "طريق الملك عبدالله، معشي، الطائف 26522، المملكة العربية السعودية" : "King Abdullah Road, Ma'ashi, Taif 26522, Saudi Arabia"}</a><a href="tel:+966127500008"><Phone size={18} /> +966 12 750 0008</a><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} /> +966 55 800 8066</a></div></div><form className="contact-form" onSubmit={submitBookingToWhatsApp}><div className="form-row"><label>{t.formName}<input required name="firstName" placeholder={t.formName} /></label><label>{t.formEmail}<input required type="email" name="email" placeholder="you@example.com" /></label></div><div className="form-row"><label>{t.formPhone}<input required name="phone" placeholder="+966" /></label><label>{t.formServiceNeeded}<select required name="service" defaultValue=""><option value="" disabled>{t.formServicePlaceholder}</option>{services.map((service) => <option key={service.id} value={service[language].title}>{service[language].title}</option>)}</select></label></div><div className="form-row"><label>{t.formPreferredDate}<input required type="date" name="preferredDate" /></label><label>{t.message}<textarea name="message" rows={3} placeholder={t.message} /></label></div><div className="form-footer"><label className="consent"><input required type="checkbox" /><span>{t.formConsent}</span></label><button className="primary-button" type="submit">{t.formSend} <ArrowRight size={18} /></button></div></form></section>

        <section className="hours-section section-container" data-reveal><div className="hours-heading"><p className="eyebrow"><span /> {t.hours}</p><h2>{isArabic ? "خطّط لزيارتك" : "Plan your visit"}</h2><a className="secondary-button" href={mapsUrl} target="_blank" rel="noreferrer">{t.map} <ArrowRight size={17} /></a></div><div className="hours-grid">{hours[language].map(([day, time]) => <div key={day}><span>{day}</span><strong>{time}</strong></div>)}</div></section>
      </main>

      <footer className="site-footer"><div className="section-container footer-top"><a className="brand footer-brand" href="#top"><LazyImage className="official-logo" src={officialLogo} alt={isArabic ? "المختصون" : "The Specialists"} /></a><p>{t.footerAbout}</p><a className="footer-top-link" href="#top">{t.backTop} <ArrowRight size={17} /></a></div><div className="section-container footer-links"><div><p>{t.footerExplore}</p><a href="#services">{t.nav[0][0]}</a><a href="#team">{t.nav[1][0]}</a><a href="#about">{t.nav[2][0]}</a></div><div><p>{t.footerAccess}</p><button onClick={() => scrollToBookingForm()}>{t.appointment}</button><a href="#contact">{t.nav[3][0]}</a><a href={mapsUrl} target="_blank" rel="noreferrer">{t.map}</a></div><div><p>{t.footerNotes}</p><span>{t.footerMessage}</span><span>{t.socials}: @tsp.center · @tsp_center</span><span>Snapchat · TikTok: @tsp.center</span></div></div><div className="section-container footer-bottom"><span>{t.note}</span><span>Taif · Saudi Arabia</span></div></footer>

      {selectedProfile && selectedPerson && <div className="profile-dialog-backdrop" role="presentation" onMouseDown={() => setSelectedProfile(null)}><section className="profile-dialog" role="dialog" aria-modal="true" aria-labelledby="profile-dialog-title" onMouseDown={(event) => event.stopPropagation()}><button className="profile-dialog-close" onClick={() => setSelectedProfile(null)} aria-label={isArabic ? "إغلاق الملف الشخصي" : "Close profile"}><X size={19} /></button><div className="profile-dialog-image">{selectedProfilePhoto ? <LazyImage src={selectedProfilePhoto} alt={`${selectedProfileName} — ${selectedPerson.specialty}`} /> : <div className={`professional-avatar-glyph profile-avatar avatar-${clinicianAvatarGender[selectedProfile.initials] ?? "male"}`} role="img" aria-label={`${selectedProfileName} — ${isArabic ? "صورة رمزية لمختص" : "professional clinician avatar"}`}><UserRound size={72} strokeWidth={1.45} /></div>}</div><div className="profile-dialog-body"><p className="eyebrow"><span /> {t.teamEyebrow}</p><h2 id="profile-dialog-title">{selectedProfileName}</h2><p className="profile-dialog-specialty">{selectedPerson.specialty}</p><p className="team-experience"><Clock3 size={15} /> {selectedPerson.experience ? `${t.experience}: ${selectedPerson.experience}` : experienceUnavailable}</p><div className="profile-detail-grid"><div><h3>{t.credentials}</h3><ul>{selectedPerson.certifications.map((certification) => <li key={certification}>{certification}</li>)}</ul></div><div><h3>{t.careAreas}</h3><ul>{selectedPerson.areas.map((area) => <li key={area}>{area}</li>)}</ul></div><button className="team-book profile-book" onClick={() => { setSelectedProfile(null); scrollToBookingForm(selectedProfileName); }}>{t.appointment}</button></div></div></section></div>}
      <a className="floating-contact" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={t.whatsapp}><LazyImage className="whatsapp-brand-mark" src={whatsappBrandMark} alt="" /></a><div className="floating-share"><button className="floating-share-trigger" type="button" onClick={() => setShareOpen((open) => !open)} aria-label={isArabic ? "مشاركة الموقع" : "Share website"} data-tooltip={isArabic ? "فتح خيارات المشاركة" : "Open share options"} title={isArabic ? "فتح خيارات المشاركة" : "Open share options"} aria-expanded={shareOpen} aria-controls="share-menu"><Share2 size={20} /></button>{shareOpen && <div id="share-menu" className="floating-share-menu" role="menu" aria-label={isArabic ? "خيارات المشاركة" : "Share options"}><a href={whatsappShareUrl} target="_blank" rel="noreferrer" role="menuitem" onClick={() => setShareOpen(false)} data-tooltip={isArabic ? "مشاركة عبر واتساب" : "Share via WhatsApp"} title={isArabic ? "مشاركة عبر واتساب" : "Share via WhatsApp"}><MessageCircle size={17} /> WhatsApp</a><a href={twitterShareUrl} target="_blank" rel="noreferrer" role="menuitem" onClick={() => setShareOpen(false)} data-tooltip={isArabic ? "مشاركة عبر إكس" : "Share via Twitter / X"} title={isArabic ? "مشاركة عبر إكس" : "Share via Twitter / X"}><span className="share-x-mark" aria-hidden="true">X</span> Twitter / X</a></div>}</div><button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label={t.backTop}><ArrowUp size={20} /></button>{notice && <div className="notice" role="status"><Check size={18} /> {notice}</div>}<div className="carousel-control" aria-label="Example carousel controls"><button onClick={() => setActiveDot((activeDot + 3) % 4)} aria-label="Previous slide"><ChevronLeft size={18} /></button>{[0, 1, 2, 3].map((dot) => <button className={activeDot === dot ? "dot active" : "dot"} aria-label={`Go to slide ${dot + 1}`} key={dot} onClick={() => setActiveDot(dot)} />)}<button onClick={() => setActiveDot((activeDot + 1) % 4)} aria-label="Next slide"><ChevronRight size={18} /></button></div>
    </div>
  );
}
