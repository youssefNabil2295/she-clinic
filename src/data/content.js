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
  instagram: 'https://www.instagram.com/she_clinic_official/',
  facebook: 'https://www.facebook.com/sheclinic1',
  tiktok: 'https://www.tiktok.com/@she_clinic_official',
}

export const IMAGES = {
  heroBg: '/images/cover2.jpg',
  doctorHero: '/images/logo1.jpg',
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
    id: 'kashf',
    icon: '🩺',
    name: { en: 'Consultations', ar: 'الكشوفات' },
    desc: { en: 'Expert skin & laser consultations.', ar: 'كشف متخصص لتقييم البشرة واختيار أنسب العلاجات.' },
    seoTitle: { ar: 'كشف بشرة وتجميل | أفضل عيادة تجميل في مصر - She Clinic', en: 'Skin & Beauty Consultation | Best Clinic in Egypt - She Clinic' },
    seoDesc: { ar: 'احجزي كشفك الآن في She Clinic أفضل عيادة تجميل وليزر في مصر بمدينة نصر. خبرة واحترافية عالية لتقييم حالتك.', en: 'Book your consultation at She Clinic, the best laser & beauty clinic in Egypt, Nasr City. Expert assessment for your skin.' },
    h1: { ar: 'كشوفات تجميل وبشرة في أفضل عيادة بمصر', en: 'Expert Skin & Beauty Consultations in Egypt' },
    priceImage: '/images/services/kashf/prices.jpg',
    instructions: {
      ar: [
        'يتم الكشف من قِبل طبيب متخصص لتقييم الحالة وتحديد البروتوكول المناسب.',
        'يُرجى الحضور للعيادة بدون وضع أي مساحيق تجميل (Make-up).',
        'إحضار نتائج أي تحاليل طبية سابقة تتعلق بالجلدية أو الهرمونات.',
        'يمكن اصطحاب مرافق واحد فقط لضمان الخصوصية والراحة داخل العيادة.'
      ],
      en: [
        'Examination by a certified specialist to determine the best protocol.',
        'Please arrive without any makeup or cosmetics.',
        'Bring any previous medical or hormonal test results.',
        'Only one companion is allowed to ensure privacy and comfort.'
      ]
    },
    aftercare: {
      ar: [
        'لا توجد تعليمات خاصة لما بعد الكشف، يمكنك ممارسة حياتك الطبيعية فوراً.',
        'يُفضل تطبيق أي روتين أو علاج يصفه الطبيب في نفس اليوم.'
      ],
      en: [
        'No specific aftercare instructions, you can resume normal activities immediately.',
        'It is recommended to follow any prescribed routine or treatment on the same day.'
      ]
    }
  },
  {
    id: 'laser',
    icon: '⚡',
    name: { en: 'Laser Hair Removal', ar: 'ليزر إزالة الشعر' },
    desc: { en: 'Permanent hair removal with latest laser technology.', ar: 'إزالة الشعر نهائياً بأحدث أجهزة الليزر العالمية.' },
    seoTitle: { ar: 'إزالة الشعر بالليزر بمدينة نصر | أفضل عيادة ليزر - She Clinic', en: 'Laser Hair Removal Nasr City | Best Laser Clinic - She Clinic' },
    seoDesc: { ar: 'استمتعي بنعومة دائمة مع ليزر إزالة الشعر في She Clinic. أحدث الأجهزة ونتائج مضمونة من أول جلسة في مدينة نصر.', en: 'Enjoy permanent smoothness with laser hair removal at She Clinic. Latest devices and guaranteed results in Nasr City.' },
    h1: { ar: 'أفضل جلسات ليزر إزالة الشعر في مصر | She Clinic', en: 'Best Laser Hair Removal Sessions in Egypt | She Clinic' },
    priceImage: '/images/services/laser/prices.jpg',
    instructions: {
      ar: [
        'أزاله الشعر بالشفره فقط قبل ٢٤ ساعة من موعد الجلسة.',
        'ممنوع الشمع أو السويت أو الخيط قبل ٣ أسابيع على الأقل.',
        'لا تستخدم كريمات تفتيح أو مقشرات قبل الموعد بـ ٣ أيام.',
        'تجنب الشمس أو التسمير (Tanning) قبل الموعد بأسبوع.',
        'يوم الجلسة: يجب أن يكون الجلد نظيفاً وخالياً من أي كريمات أو مزيلات عرق.'
      ],
      en: [
        'Shave the area with a razor only 24 hours before your session.',
        'No waxing, sugaring, or threading for at least 3 weeks.',
        'Stop using whitening creams or exfoliants 3 days before.',
        'Avoid sun exposure or tanning 1 week before.',
        'On session day: Skin must be clean and free of creams or deodorants.'
      ]
    },
    aftercare: {
      ar: [
        'تجنب الماء الساخن لمدة ٢٤ ساعة بعد الجلسة.',
        'لا تتعرض للشمس المباشرة أو الحرارة العالية لمدة ٤٨ ساعة.',
        'ممنوع الساونا، البخار، والجيم لمدة ٤٨ ساعة.',
        'لا تستخدم عطور أو مزيلات عرق أو مقشرات لمدة ٤٨ ساعة.',
        'استخدام الكريمات المرطبة حسب تعليمات الطبيب ووضع واقي شمس على المناطق المكشوفة.',
        'الأعراض الطبيعية: احمرار أو سخونة بسيطة تزول خلال ساعات، تورم خفيف حول بصيلات الشعر، وتساقط الشعر تدريجياً خلال ٧-١٤ يوم.'
      ],
      en: [
        'Avoid hot water for 24 hours.',
        'Avoid direct sun or high heat for 48 hours.',
        'No sauna, steam, or gym for 48 hours.',
        'No perfumes, deodorants, or exfoliants for 48 hours.',
        'Use moisturizing creams as prescribed and apply sunscreen to exposed areas.',
        'Normal Symptoms: Mild redness/warmth for a few hours, slight follicular swelling, and hair shedding over 7-14 days.'
      ]
    }
  },
  {
    id: 'skin',
    icon: '🧼',
    name: { en: 'Deep Skin Cleaning', ar: 'تنظيف البشرة العميق' },
    desc: { en: 'Deep cleansing & oxygenation for glowing skin.', ar: 'تنظيف عميق وأكسجة للبشرة للحصول على نضارة فورية.' },
    seoTitle: { ar: 'تنظيف البشرة والأوكسيجينيو | She Clinic نضرة البشرة بمدينة نصر', en: 'Skin Cleaning & Oxygeneo | She Clinic Nasr City' },
    seoDesc: { ar: 'استعيدي إشراقة وجهك مع جلسات تنظيف البشرة والأوكسيجينيو في أفضل عيادة بشرة بمصر. نتائج مبهرة من الجلسة الأولى.', en: 'Restore your face glow with Skin Cleaning & Oxygeneo at the best skin clinic in Egypt. Amazing results from day one.' },
    h1: { ar: 'تنظيف البشرة والأوكسيجينيو | لبشرة مشرقة وناعمة', en: 'Skin Cleaning & Oxygeneo | For Radiant Smooth Skin' },
    priceImage: '/images/services/skin/prices.jpg',
    instructions: {
      ar: [
        'تجنبي وضع أي مساحيق تجميل يوم الجلسة.',
        'يُمنع استخدام أي مقشرات منزلية قبل الموعد بـ ٣ أيام.',
        'إحضار واقي الشمس الخاص بكِ لاستخدامه بعد الجلسة مباشرة.'
      ],
      en: [
        'Avoid wearing any makeup on the day of the session.',
        'Stop using home exfoliants 3 days before your appointment.',
        'Bring your sunscreen to use immediately after the session.'
      ]
    },
    aftercare: {
      ar: [
        'تجنب الميكب تماماً لمدة ٢٤ ساعة بعد الجلسة.',
        'استخدام الروتين الموصوف من الطبيب بانتظام.',
        'واقي شمس ضروري جداً يومياً (حتى لو في البيت).',
        'تجنب: الشمس المباشرة، الساونا والبخار، التمارين الشاقة والمسببة للتعرق، والتقشير لمدة ٤٨ ساعة.',
        'الأعراض الطبيعية: إحمرار بسيط يختفي خلال ساعات، إحساس بسخونة خفيفة، أو ظهور حباية صغيرة أو اثنتين نتيجة تنظيف المسام.',
        'يُفضل تكرار الجلسة كل ٤-٦ أسابيع حسب نوع البشرة.'
      ],
      en: [
        'Avoid makeup completely for 24 hours.',
        'Follow the prescribed post-session routine strictly.',
        'Sunscreen is mandatory daily (even indoors).',
        'Avoid: Direct sun, sauna, steam, intense exercise, and exfoliation for 48 hours.',
        'Normal Symptoms: Mild redness for hours, slight warmth, or 1-2 small pimples due to pore cleansing.',
        'Recommended every 4-6 weeks depending on skin type.'
      ]
    }
  },
  {
    id: 'dermapen',
    icon: '💉',
    name: { en: 'Dermapen', ar: 'الديرمابن' },
    desc: { en: 'Stimulate collagen and treat scars.', ar: 'تحفيز الكولاجين وتجديد البشرة لعلاج المسام والندبات.' },
    seoTitle: { ar: 'جلسات ديرمابن للوجه بمدينة نصر | علاج الندبات - She Clinic', en: 'Dermapen for Face Nasr City | Scar Treatment - She Clinic' },
    seoDesc: { ar: 'علاج فعال للمسام الواسعة وآثار حب الشباب بجلسات الديرمابن في She Clinic مدينة نصر. بشرة أكثر شباباً وحيوية.', en: 'Effective treatment for large pores and acne scars with Dermapen sessions at She Clinic Nasr City.' },
    h1: { ar: 'ديرمابن الوجه | تجديد الكولاجين وعلاج عيوب البشرة', en: 'Dermapen | Collagen Renewal & Skin Repair' },
    priceImage: '/images/services/dermapen/prices.jpg',
    instructions: {
      ar: [
        'تجنبي التعرض للشمس أو الحرارة الشديدة قبل الجلسة بـ ٣ أيام.',
        'التوقف عن استخدام كريمات التقشير المنزلية قبل الموعد بـ ٥ أيام.',
        'التأكد من عدم وجود التهابات نشطة أو حبوب ملتهبة في المنطقة.'
      ],
      en: [
        'Avoid sun or intense heat for 3 days before.',
        'Stop using home peeling creams 5 days before.',
        'Ensure no active inflammation or inflamed acne in the area.'
      ]
    },
    aftercare: {
      ar: [
        'ممنوع غسل الوجه أو الشعر لمدة ٤ ساعات بعد الجلسة.',
        'لمدة أسبوع كامل: ممنوع الحرارة (شمس، بخار، بوتاجاز، ساونا، جو حار).',
        'ممنوع استخدام أي مواد كيميائية، صابون قوي، تونر، أو مستحضرات تجميل لمدة أسبوع.',
        'الامتناع عن الأطعمة الحارة والمخللات والمقليات والحمضيات والشوكولاتة لمدة أسبوع.',
        'ممنوع تماماً تقشير الجلد أو حك البشرة أو نزع القشور يدوياً؛ اتركيها تقع لوحدها خلال ٥ أيام.',
        'الترطيب المنتظم والمكياج مسموح بعد أسبوع من الجلسة.'
      ],
      en: [
        'Do not wash face or hair for 4 hours after.',
        'For 1 week: No heat (sun, steam, stove, sauna, hot weather).',
        'No chemicals, harsh soaps, toners, or makeup for 1 week.',
        'Avoid spicy food, pickles, fried food, citrus, and chocolate for 1 week.',
        'Strictly no peeling, scratching, or removing flakes manually; let them fall within 5 days.',
        'Regular hydration is key. Makeup is allowed after 1 week.'
      ]
    }
  },
  {
    id: 'filler',
    icon: '👄',
    name: { en: 'Filler', ar: 'الفيلر' },
    desc: { en: 'Restore volume and sculpt features naturally.', ar: 'استعادة حجم الوجه ونحت الملامح بشكل طبيعي وجذاب.' },
    seoTitle: { ar: 'حقن الفيلر للوجه والشفايف | أفضل سعر في مصر - She Clinic', en: 'Filler for Face & Lips | Best Price in Egypt - She Clinic' },
    seoDesc: { ar: 'حقن فيلر احترافي للشفايف والوجه في She Clinic مدينة نصر. مواد معتمدة وأطباء متخصصين لنتائج طبيعية 100%.', en: 'Professional filler for lips and face at She Clinic Nasr City. Certified materials and expert doctors for 100% natural results.' },
    h1: { ar: 'حقن الفيلر | جمال طبيعي وتحديد احترافي للملامح', en: 'Filler Injection | Natural Beauty & Professional Sculpting' },
    priceImage: '/images/services/filler/prices.jpg',
    instructions: {
      ar: [
        'تجنبي تناول المسكنات (بروفين/أسبرين) قبل الجلسة بـ ٣ أيام لتجنب الكدمات.',
        'إبلاغ الطبيب في حال وجود تاريخ سابق للإصابة بـ "هيربس" الشفايف.',
        'يُفضل عدم وضع مكياج يوم الجلسة.'
      ],
      en: [
        'Avoid painkillers (Ibuprofen/Aspirin) 3 days before to prevent bruising.',
        'Inform the doctor if you have a history of lip herpes.',
        'Preferably no makeup on the day of the session.'
      ]
    },
    aftercare: {
      ar: [
        'أول ٢٤ ساعة: ممنوع لمس أو تدليك مكان الحقن، وممنوع المكياج، وتجنبي الأكل والمشروبات الساخنة.',
        'أول ٤٨ ساعة: الامتناع عن التدخين، وتجنب الحرارة العالية (ساونا، بخار، شمس مباشرة).',
        'أول ٤٨ ساعة: ممنوع ممارسة مجهود بدني عنيف، والنوم على الظهر فقط وتجنب الضغط على الوجه.',
        'الأعراض الطبيعية: تورم بسيط، كدمات خفيفة، إحساس بصلابة أو شد يختفي تدريجياً.',
        'الشكل النهائي والنتيجة الكاملة تظهر خلال ٧-١٤ يوم بعد زوال التورم.'
      ],
      en: [
        'First 24h: No touching/massaging site, no makeup, avoid hot food/drinks.',
        'First 48h: No smoking, avoid high heat (sauna, steam, direct sun).',
        'First 48h: No intense exercise, sleep on your back only and avoid pressure.',
        'Normal Symptoms: Mild swelling, light bruising, feeling of firmness or tightness.',
        'Final results appear within 7-14 days after swelling subsides.'
      ]
    }
  },
  {
    id: 'botox',
    icon: '✨',
    name: { en: 'Botox', ar: 'البوتوكس' },
    desc: { en: 'Smooth wrinkles and maintain a youthful look.', ar: 'تنعيم التجاعيد والحصول على مظهر شاب ومشرق.' },
    seoTitle: { ar: 'حقن البوتوكس للتجاعيد بمدينة نصر | She Clinic مصر', en: 'Botox for Wrinkles Nasr City | She Clinic Egypt' },
    seoDesc: { ar: 'تخلصي من تجاعيد الجبهة وحول العين مع جلسات البوتوكس في She Clinic. دقة عالية في الحقن لنتائج طبيعية ومبهرة.', en: 'Get rid of forehead and eye wrinkles with Botox sessions at She Clinic. High precision for natural results.' },
    h1: { ar: 'حقن البوتوكس | للتخلص من التجاعيد وعلامات تقدم السن', en: 'Botox Injection | Erase Wrinkles & Signs of Aging' },
    priceImage: '/images/services/botox/prices.jpg',
    instructions: {
      ar: [
        'تجنبي الانحناء الشديد للأمام قبل الجلسة وبعدها.',
        'التوقف عن تناول أدوية السيولة قبل الموعد بـ ٣ أيام.',
        'الحضور للعيادة بوجه نظيف بدون مكياج.'
      ],
      en: [
        'Avoid excessive forward bending before and after.',
        'Stop blood thinners 3 days before.',
        'Arrive with a clean face, no makeup.'
      ]
    },
    aftercare: {
      ar: [
        'أول ٦ ساعات: ممنوع منعاً باتاً لمس أو تدليك أماكن الحقن، والحفاظ على وضعية الرأس مستقيمة (ممنوع التوطية).',
        'أول ٢٤ ساعة: ممنوع المكياج، الرياضة العنيفة، والتعرض للحرارة العالية (ساونا، بخار، حمام ساخن).',
        'أول ٤٨ ساعة: ممنوع جلسات مساج للوجه، أو استخدام أجهزة شد وتنظيف عميق، وتجنب الكحوليات والتدخين.',
        'النتائج: تبدأ بالظهور خلال ٣-٧ أيام والنتيجة الكاملة خلال ١٤ يوم، ويُفضل رتوش (Retouch) بعد أسبوعين.',
        'يُفضل تحريك العضلات المعالجة بلطف (مثل الابتسام أو رفع الحواجب).'
      ],
      en: [
        'First 6h: Strictly no touching/massaging injection sites, keep head upright (no bending).',
        'First 24h: No makeup, intense exercise, or high heat (sauna, steam, hot bath).',
        'First 48h: No face massages or skin tightening/cleaning devices, avoid alcohol and smoking.',
        'Results: Start in 3-7 days, full effect in 14 days. Touch-up recommended after 2 weeks.',
        'Gently move the treated muscles (e.g., smiling or raising eyebrows).'
      ]
    }
  },
  {
    id: 'skin-booster',
    icon: '💧',
    name: { en: 'Skin Booster', ar: 'الاسكين بوستر' },
    desc: { en: 'Deep hydration for glowing and refreshed skin.', ar: 'حقن الترطيب العميق للحصول على بشرة نضرة ولامعة.' },
    seoTitle: { ar: 'جلسات اسكين بوستر بمدينة نصر | ترطيب عميق - She Clinic', en: 'Skin Booster Nasr City | Deep Hydration - She Clinic' },
    seoDesc: { ar: 'نضرة فورية وترطيب عميق بجلسات الاسكين بوستر في She Clinic مدينة نصر. سر جمال النجمات الآن بين يديكِ.', en: 'Instant glow and deep hydration with Skin Booster sessions at She Clinic Nasr City. The secret to star beauty is now yours.' },
    h1: { ar: 'اسكين بوستر | لترطيب فائق ونضارة تدوم طويلاً', en: 'Skin Booster | For Extreme Hydration & Lasting Glow' },
    priceImage: '/images/services/skin-booster/prices.jpg',
    instructions: {
      ar: [
        'يُفضل شرب كميات كبيرة من الماء قبل الجلسة بـ ٢٤ ساعة.',
        'تجنب استخدام أي منتجات تحتوي على أحماض قوية قبل الموعد بـ ٣ أيام.',
        'الجلد يجب أن يكون خالياً من أي جروح أو التهابات نشطة.'
      ],
      en: [
        'Drink plenty of water 24 hours before.',
        'Avoid products with strong acids 3 days before.',
        'Skin must be free of wounds or active inflammation.'
      ]
    },
    aftercare: {
      ar: [
        'تجنب غسل الوجه بالمنظفات القوية إلا بعد الوقت المحدد، واستخدام ماء فاتر فقط.',
        'ممنوع أي تقشير أو ماسكات لمدة أسبوع، وتجنب الشمس المباشرة والحرارة العالية.',
        'استخدمي واقي شمسي SPF 30+ وكريمات الترطيب الموصى بها من الطبيب.',
        'الأعراض الطبيعية: احمرار خفيف، شد في البشرة، أو كدمات بسيطة تزول خلال أيام.',
        'يجب شرب ٣ لتر مياه يومياً بعد الجلسة لتعزيز مفعول الترطيب العميق.'
      ],
      en: [
        'Avoid harsh cleansers for the specified time, use lukewarm water only.',
        'No peeling or masks for 1 week, avoid direct sun and high heat.',
        'Use SPF 30+ sunscreen and recommended moisturizing creams.',
        'Normal Symptoms: Mild redness, tightness, or minor bruising resolving in days.',
        'Drink 3 liters of water daily post-session to maximize hydration results.'
      ]
    }
  },
  {
    id: 'plasma',
    icon: '🩸',
    name: { en: 'Plasma & Mesotherapy', ar: 'البلازما والميزوثيرابي' },
    desc: { en: 'Platelet-rich plasma for skin and hair rejuvenation.', ar: 'البلازما والميزوثيرابي لتجديد البشرة وعلاج تساقط الشعر.' },
    seoTitle: { ar: 'جلسات بلازما وميزوثيرابي للشعر والوجه | She Clinic مصر', en: 'Plasma & Mesotherapy for Hair & Face | She Clinic Egypt' },
    seoDesc: { ar: 'علاج تساقط الشعر وتحفيز نضارة الوجه بجلسات البلازما الغنية بالصفائح الدموية في She Clinic مدينة نصر.', en: 'Treat hair loss and stimulate facial glow with Platelet-Rich Plasma (PRP) sessions at She Clinic Nasr City.' },
    h1: { ar: 'البلازما والميزوثيرابي | تجديد طبيعي للبشرة وتقوية الشعر', en: 'PRP & Mesotherapy | Natural Skin Renewal & Hair Strengthening' },
    priceImage: '/images/services/plasma/prices.jpg',
    instructions: {
      ar: [
        'يُفضل غسل الشعر جيداً قبل جلسة بلازما الشعر.',
        'شرب كميات وفيرة من السوائل قبل الجلسة لسهولة سحب العينة.',
        'إبلاغ الطبيب في حال وجود أي مشاكل في تجلط الدم أو فقر الدم.'
      ],
      en: [
        'Wash your hair thoroughly before a hair PRP session.',
        'Drink plenty of fluids before for easier sample collection.',
        'Inform the doctor if you have blood clotting issues or anemia.'
      ]
    },
    aftercare: {
      ar: [
        'تجنبي غسل المنطقة المحقونة لمدة ١٢-٢٤ ساعة بعد الجلسة.',
        'شرب كميات كبيرة من الماء لتعزيز فعالية الصفائح الدموية.',
        'تجنبي استخدام الصبغات أو المواد الكيميائية القوية لمدة أسبوع.',
        'النتائج تظهر تدريجياً وتتراكم مع الالتزام بعدد الجلسات (٣-٦ جلسات).'
      ],
      en: [
        'Avoid washing the injected area for 12-24 hours.',
        'Drink plenty of water to enhance platelet efficacy.',
        'Avoid dyes or harsh chemicals for 1 week.',
        'Results appear gradually and improve with consistency (3-6 sessions).'
      ]
    }
  },
  {
    id: 'fractional',
    icon: '🌟',
    name: { en: 'Fractional Laser', ar: 'الفراكشنال ليزر' },
    desc: { en: 'Advanced laser for skin resurfacing and scar reduction.', ar: 'ليزر متطور لتجديد البشرة وتقليل المسام والندبات.' },
    seoTitle: { ar: 'فراكشنال ليزر بمدينة نصر | علاج المسام والندبات - She Clinic', en: 'Fractional Laser Nasr City | Scar & Pore Treatment - She Clinic' },
    seoDesc: { ar: 'تخلصي من آثار الحبوب والندبات مع الفراكشنال ليزر في She Clinic. أحدث تقنية لتجديد سطح البشرة في مصر.', en: 'Remove acne scars and large pores with Fractional Laser at She Clinic. The latest skin resurfacing technology in Egypt.' },
    h1: { ar: 'الفراكشنال ليزر | التقنية الأقوى لتجديد البشرة وإزالة الآثار', en: 'Fractional Laser | The Most Powerful Tech for Skin Resurfacing' },
    priceImage: '/images/services/fractional/prices.jpg',
    instructions: {
      ar: [
        'تجنب الشمس المباشرة قبل الجلسة بأسبوع.',
        'التوقف عن استخدام منتجات التفتيح أو التقشير قبل الموعد بـ ٥ أيام.',
        'الحضور بدون مكياج وببشرة نظيفة تماماً.'
      ],
      en: [
        'Avoid direct sun for 1 week before.',
        'Stop using whitening or peeling products 5 days before.',
        'Arrive without makeup and with completely clean skin.'
      ]
    },
    aftercare: {
      ar: [
        'ممنوع غسل الوجه أو الشعر لمدة ٤ ساعات بعد الجلسة.',
        'لمدة أسبوع كامل: ممنوع الحرارة (شمس، بخار، بوتاجاز، ساونا، جو حار).',
        'لمدة أسبوع: تجنب الأكل الحار، المخللات، المقليات، الحمضيات، الشوكولاتة، والمشروبات الساخنة.',
        'ممنوع استخدام مواد كيميائية أو صابون قوي أو مكياج لمدة أسبوع.',
        'الأعراض الطبيعية: لون البشرة يغمق لمربعات بنية وملمس خشن (رملي)؛ اتركي القشور تقع لوحدها خلال ٧-١٠ أيام.',
        'الترطيب المنتظم ضروري جداً والمكياج مسموح بعد أسبوع.'
      ],
      en: [
        'Do not wash face or hair for 4 hours after.',
        'For 1 week: No heat (sun, steam, stove, sauna, hot weather).',
        'For 1 week: Avoid spicy food, pickles, fried food, citrus, chocolate, and hot drinks.',
        'No chemicals, harsh soaps, or makeup for 1 week.',
        'Normal Symptoms: Skin turns into brown squares with a sandy texture; let flakes fall naturally within 7-10 days.',
        'Regular hydration is essential. Makeup allowed after 1 week.'
      ]
    }
  },
  {
    id: 'peeling',
    icon: '🌸',
    name: { en: 'Chemical Peeling', ar: 'التقشير' },
    desc: { en: 'Chemical & laser peeling for skin renewal.', ar: 'تقشير كيميائي وليزر للحصول على بشرة متجددة وخالية من التصبغات.' },
    seoTitle: { ar: 'جلسات تقشير كيميائي وبارد بمدينة نصر | She Clinic مصر', en: 'Chemical & Cold Peeling Nasr City | She Clinic Egypt' },
    seoDesc: { ar: 'تخلصي من التصبغات والبقع الداكنة بجلسات التقشير الكيميائي والبارد في She Clinic مدينة نصر. تفتيح فوري وتوحيد للون.', en: 'Get rid of pigmentation and dark spots with Chemical and Cold Peeling at She Clinic Nasr City. Instant brightening.' },
    h1: { ar: 'جلسات التقشير | لتجديد خلايا البشرة وتوحيد لونها', en: 'Peeling Sessions | For Skin Cell Renewal & Tone Correction' },
    priceImage: '/images/services/peeling/prices.jpg',
    instructions: {
      ar: [
        'تجنب إزالة الشعر في المنطقة قبل التقشير بـ ٣ أيام.',
        'عدم وضع أي كريمات طبية قبل الموعد بـ ٢٤ ساعة.',
        'تجنب التعرض للشمس المباشرة قبل الجلسة.'
      ],
      en: [
        'Avoid hair removal in the area 3 days before.',
        'Do not apply any medical creams 24 hours before.',
        'Avoid direct sun exposure before the session.'
      ]
    },
    aftercare: {
      ar: [
        'ممنوع غسل المنطقة إلا بعد الوقت المحدد من الطبيب وبماء فاتر (درجة حرارة الغرفة).',
        'بعد الغسل: ممنوع الحرارة (شمس، بخار، ساونا، أو حرارة مطبخ).',
        'الأسبوع الأول: ممنوع المواد الكيميائية، المكياج، الأكل الحار، الموالح، والمشروبات الساخنة.',
        'ممنوع تماماً لمس القشور أو نزعها يدوياً؛ اتركيها تقع طبيعياً (تبدأ عادة من اليوم الثالث حول الفم).',
        'الكريمات المسموح بها فقط هي الموصوفة من الطبيب.'
      ],
      en: [
        'Do not wash until specified by the doctor, use only lukewarm water (room temp).',
        'After washing: No heat (sun, steam, sauna, or kitchen heat).',
        'First week: No chemicals, makeup, spicy food, salty food, or hot drinks.',
        'Strictly no touching or peeling flakes manually; let them fall naturally (usually starts day 3 around the mouth).',
        'Only use creams prescribed by the doctor.'
      ]
    }
  },
  {
    id: 'scars',
    icon: '🩹',
    name: { en: 'Scar Treatment', ar: 'تسليك الندبات' },
    desc: { en: 'Specialized treatment for subcision and skin texture improvement.', ar: 'علاج متخصص لتسليك الندبات وتحسين ملمس البشرة.' },
    seoTitle: { ar: 'علاج وتسليك الندبات بمدينة نصر | She Clinic أفضل عيادة تجميل', en: 'Scar Treatment & Subcision Nasr City | She Clinic' },
    seoDesc: { ar: 'علاج نهائي لندبات حب الشباب العميقة بتقنية تسليك الندبات (Subcision) في She Clinic مدينة نصر. استعيدي ملمس بشرتك الأملس.', en: 'Final treatment for deep acne scars using Subcision technology at She Clinic Nasr City. Restore your smooth skin texture.' },
    h1: { ar: 'تسليك وعلاج الندبات | لأفضل ملمس بشرة أملس وموحد', en: 'Scar Subcision & Treatment | For the Smoothest Skin Texture' },
    priceImage: '/images/services/scars/prices.jpg',
    instructions: {
      ar: [
        'إبلاغ الطبيب بجميع الأدوية التي تتناولينها، خاصة مسيلات الدم.',
        'التوقف عن التدخين قبل الجلسة بـ ٢٤ ساعة إن أمكن.',
        'الجلد يجب أن يكون نظيفاً وخالياً من الالتهابات.'
      ],
      en: [
        'Inform the doctor of all medications, especially blood thinners.',
        'Stop smoking 24 hours before if possible.',
        'Skin must be clean and free of inflammation.'
      ]
    },
    aftercare: {
      ar: [
        'تجنب غسل الوجه لمدة ٢٤ ساعة بعد الجلسة.',
        'استخدام المضادات الحيوية الموضعية والكريمات الملطفة بانتظام.',
        'تجنب الشمس المباشرة والرياضة العنيفة لمدة أسبوع.',
        'الزرقان أو التورم البسيط طبيعي ويزول بالكمادات الباردة والنتائج النهائية تظهر بعد شهر.',
        'الالتزام بالروتين العلاجي يضمن عدم عودة الندبات للالتصاق.'
      ],
      en: [
        'Avoid washing face for 24 hours.',
        'Use topical antibiotics and soothing creams regularly.',
        'Avoid direct sun and intense exercise for 1 week.',
        'Minor bruising or swelling is normal and fades with cold compresses. Results take 1 month.',
        'Consistency with the routine prevents scars from re-attaching.'
      ]
    }
  }
]

export const NAV_LINKS = [
  { hash: 'hero', en: 'Home', ar: 'الرئيسية' },
  { hash: 'services', en: 'Services', ar: 'الخدمات' },
  { hash: 'gallery', en: 'Gallery', ar: 'المعرض' },
  { hash: 'reviews', en: 'Reviews', ar: 'التقييمات' },
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