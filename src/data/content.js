// src/data/content.js
// ============================================================
//  📝 ملف البيانات — كل التعديلات هنا
//  🏥 She Clinic - ليزر وتجميل
// ============================================================

export const DOCTOR = {
  name: { en: 'SheClinic', ar: 'عيادة شى كلينك' },
  title: { en: 'SheClinic', ar: 'عيادة شى كلينك' },
  subtitle: { en: 'Where Beauty Meets Precision', ar: 'حيث الجمال يلتقي بالدقة' },
  about: {
    en: 'Welcome to She Clinic, your trusted destination for advanced laser treatments, skin care, and aesthetic procedures. With state-of-the-art technology including Telyound and React devices, we provide safe and effective treatments tailored to your needs.',
    ar: 'مرحباً بكم في عيادة شي، وجهتكم الموثوقة للعلاجات المتقدمة بالليزر والعناية بالبشرة والجراحات التجميلية. باستخدام أحدث التقنيات بما فيها أجهزة تليوند ورياكت، نقدم لكِ علاجات آمنة وفعالة تناسب احتياجاتك.',
  },
  phone: '201288881178',
  address: {
    en: 'T2 Business Complex, 3rd Floor, Clinic 3 - Aviation St., in front of Health Insurance, Nasr City',
    ar: 'برج T2 Business Complex - الدور الثالث - عيادة 3 - ش الطيران - أمام التأمين الصحي - مدينة نصر'
  },
  hours: { en: 'Sat – Thu: 11AM – 9PM', ar: 'السبت – الخميس: ١١ص – ٩م' },
  email: 'info@sheclinic.com',
  instagram: 'https://www.instagram.com/she_clinic_official/?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExRmlQSFp6VktxS3N1UGNSenNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR7KJGCl5IKIdGuIUWsx4FgV-s7juFIaGAZXca7YrvG2bAk2AeGGuwPMyUSKyw_aem_bsQXBN9nGz52HJGmUhA_9whttps://instagram.com/sheclinic',
  facebook: 'https://www.facebook.com/sheclinic1',
  tiktok: 'https://www.tiktok.com/@she_clinic_official?is_from_webapp=1&sender_device=pc',

}

export const IMAGES = {
  heroBg: '/images/cover2.jpg',
  doctorHero: '/images/cover2.jpg',
  doctorAbout: '/images/logo2.jpeg.jpg',
}

export const VIDEOS = [
  '/videos/video1.mp4',
  '/videos/video2.mp4',
  '/videos/video3.mp4',
  '/videos/video4.mp4',
  '/videos/5.mp4',
  '/videos/6.mp4',
]

export const SERVICES = [
  {
    id: 1,
    category: 'laser',     // ✅ أضف هذا
    icon: '✨',
    name: { en: 'Laser Hair Removal', ar: 'إزالة الشعر بالليزر' },
    desc: {
      en: 'Hair removal, pigmentation, and vascular lesions with Telyound & React lasers.',
      ar: 'إزالة الشعر، التصبغات، والشعيرات الدموية بأجهزة تليوند ورياكت.'
    }
  },
  {
    id: 2,
    category: 'laser',     // ✅ أضف هذا
    icon: '⚡',
    name: { en: 'Laser Pigmentation Removal', ar: 'إزالة التصبغات بالليزر' },
    desc: {
      en: 'Remove dark spots, melasma, and uneven skin tone.',
      ar: 'إزالة البقع الداكنة والكلف وتوحيد لون البشرة.'
    }
  },
  {
    id: 3,
    category: 'skin',      // ✅ أضف هذا
    icon: '💆‍♀️',
    name: { en: 'Hydrafacial', ar: 'هيدرا فيشل' },
    desc: {
      en: 'Deep cleansing, exfoliation, and hydration for glowing skin.',
      ar: 'تنظيف عميق، تقشير، وترطيب لبشرة مشرقة.'
    }
  },
  {
    id: 4,
    category: 'skin',      // ✅ أضف هذا
    icon: '🧪',
    name: { en: 'Chemical Peels', ar: 'التقشير الكيميائي' },
    desc: {
      en: 'Treat acne scars, fine lines, and hyperpigmentation.',
      ar: 'علاج آثار حب الشباب، الخطوط الدقيقة، والتصبغات.'
    }
  },

  {
    id: 6,
    category: 'surgery',   // ✅ أضف هذا
    icon: '💉',
    name: { en: 'Liposuction', ar: 'شفط الدهون' },
    desc: {
      en: 'Body contouring and fat removal.',
      ar: 'نحت الجسم وإزالة الدهون الموضعية.'
    }
  },
  {
    id: 7,
    category: 'injectables', // ✅ أضف هذا
    icon: '🧴',
    name: { en: 'Botox & Fillers', ar: 'بوتكس وفيلر' },
    desc: {
      en: 'Smooth wrinkles and restore facial volume.',
      ar: 'تنعيم التجاعيد واستعادة حيوية الوجه.'
    }
  },
  {
    id: 8,
    category: 'injectables', // ✅ أضف هذا
    icon: '💉',
    name: { en: 'PRP Therapy', ar: 'البلازما (PRP)' },
    desc: {
      en: 'Stimulate collagen and hair growth.',
      ar: 'تحفيز الكولاجين وإنبات الشعر.'
    }
  },
]

export const NAV_LINKS = [
  { hash: 'hero', en: 'Home', ar: 'الرئيسية' },
  { hash: 'about', en: 'About', ar: 'عن العيادة' },
  { hash: 'services', en: 'Services', ar: 'الخدمات' },
  { hash: 'gallery', en: 'Gallery', ar: 'المعرض' },
  { hash: 'booking', en: 'Booking', ar: 'الحجز' },
]

export const TIME_SLOTS = [
  '10:00 AM', '11:00 AM', '12:00 PM',
  '01:00 PM', '02:00 PM', '03:00 PM',
  '04:00 PM', '05:00 PM', '06:00 PM',
  '07:00 PM', '08:00 PM',
]

export const UI = {
  bookNow: { en: 'Book Now', ar: 'احجز الآن' },
  aboutTitle: { en: 'About She Clinic', ar: 'عن عيادة شي' },
  servicesTitle: { en: 'Our Services', ar: 'خدماتنا' },
  bookingTitle: { en: 'Book Appointment', ar: 'احجز موعدك' },
  bookingBtn: { en: 'Send Booking Request', ar: 'أرسل طلب حجز' },
  namePlaceholder: { en: 'Your Name', ar: 'اسمك' },
  phonePlaceholder: { en: 'Phone Number', ar: 'رقم الهاتف' },
  selectDate: { en: 'Select Date', ar: 'اختر التاريخ' },
  selectTime: { en: 'Select Time', ar: 'اختر الوقت' },
  selectService: { en: 'Select Service', ar: 'اختر الخدمة' },
  alreadyBooked: { en: 'This time is not available.', ar: 'هذا الوقت غير متاح.' },
  successMsg: { en: 'We will contact you within 24 hours to confirm your booking!', ar: 'سيتم التواصل معك خلال ٢٤ ساعة لتأكيد حجزك!' },
  required: { en: 'This field is required.', ar: 'هذا الحقل مطلوب.' },
  footerCopy: { en: '© She Clinic — Laser & Aesthetic Clinic. All Rights Reserved', ar: '© عيادة شي — الليزر والتجميل. جميع الحقوق محفوظة' },
}