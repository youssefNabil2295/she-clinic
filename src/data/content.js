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
    priceImage: '/images/3/kashf.jpeg',
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
    priceImages: [
      '/images/3/laser-1.jpeg',
      '/images/3/laser-2.jpeg',
      '/images/3/laser-3.jpeg',
      '/images/3/laser-offers.jpeg',
      '/images/3/laser-packages.jpeg',
      '/images/3/laser-pulse.jpeg'
    ],
    instructions: {
      ar: [
        'قبل الجلسة: إزالة الشعر بالشفرة فقط قبل موعدك بـ 24 ساعة.',
        'قبل الجلسة: ممنوع تماماً استخدام الشمع، السويت، أو الخيط قبل 3 أسابيع.',
        'قبل الجلسة: تجنب الشمس أو التسمير (Tanning) قبل موعدك بأسبوع.',
        'بعد الجلسة: تجنب الماء الساخن لمدة 24 ساعة، والساونا والجيم لمدة 48 ساعة.',
        'بعد الجلسة: لا تستخدم عطور أو مزيلات عرق أو مقشرات لمدة 48 ساعة.',
        'الأعراض الطبيعية: احمرار بسيط، تورم خفيف حول البصيلات، تساقط الشعر تدريجياً خلال 14 يوم.'
      ],
      en: [
        'Before: Shave the area 24 hours before your session.',
        'Before: Avoid waxing, sugaring, or threading for at least 3 weeks.',
        'Before: Avoid sun exposure or tanning 1 week before your appointment.',
        'After: Avoid hot water for 24 hours, and sauna/gym for 48 hours.',
        'After: No perfumes, deodorants, or exfoliants for 48 hours.',
        'Normal Symptoms: Slight redness, mild follicular swelling, gradual hair shedding within 14 days.'
      ]
    },
    aftercare: {
      ar: [
        'تجنبي الماء الساخن لمدة 24 ساعة.',
        'لا تتعرضي للشمس المباشرة أو الحرارة لمدة 48 ساعة.',
        'ممنوع الساونا، البخار، والجيم لمدة 48 ساعة.',
        'لا تستخدمي عطور أو مزيلات عرق أو مقشرات لمدة 48 ساعة.',
        'استخدمي الكريمات المرطبة حسب تعليمات الطبيب.',
        'ضعي واقي شمس على المناطق المكشوفة.',
        'الاحمرار أو السخونة البسيطة تزول خلال ساعات.',
        'تساقط الشعر تدريجياً خلال 7–14 يوم.'
      ],
      en: [
        'Avoid hot water for 24 hours.',
        'Avoid direct sun or heat for 48 hours.',
        'No sauna, steam, or gym for 48 hours.',
        'No perfumes, deodorants, or exfoliants for 48 hours.',
        'Use prescribed moisturizing creams.',
        'Apply sunscreen to exposed areas.',
        'Mild redness or warmth resolves within hours.',
        'Hair shedding occurs gradually over 7–14 days.'
      ]
    }
  },
  {
    id: 'skin',
    icon: '🌿',
    name: { en: 'Skin Cleaning & Oxygeneo', ar: 'تنظيف البشرة والأوكسيجينيو' },
    desc: { en: 'Deep cleansing & oxygenation for glowing skin.', ar: 'تنظيف عميق وأكسجة للبشرة للحصول على نضارة فورية.' },
    seoTitle: { ar: 'تنظيف البشرة والأوكسيجينيو | She Clinic نضرة البشرة بمدينة نصر', en: 'Skin Cleaning & Oxygeneo | She Clinic Nasr City' },
    seoDesc: { ar: 'استعيدي إشراقة وجهك مع جلسات تنظيف البشرة والأوكسيجينيو في أفضل عيادة بشرة بمصر. نتائج مبهرة من الجلسة الأولى.', en: 'Restore your face glow with Skin Cleaning & Oxygeneo at the best skin clinic in Egypt. Amazing results from day one.' },
    h1: { ar: 'تنظيف البشرة والأوكسيجينيو | لبشرة مشرقة وناعمة', en: 'Skin Cleaning & Oxygeneo | For Radiant Smooth Skin' },
    priceImage: '/images/3/skin.jpeg',
    instructions: {
      ar: [
        'تجنبي وضع أي مساحيق تجميل يوم الجلسة.',
        'يُمنع استخدام أي مقشرات منزلية قبل الموعد بـ 3 أيام.',
        'الالتزام بوضع واقي الشمس الموصى به عند الخروج بعد الجلسة.',
        'شرب كميات وفيرة من الماء (3 لتر يومياً) للحفاظ على ترطيب البشرة.',
        'يمكن تكرار الجلسة كل شهر للحفاظ على أفضل النتائج المستمرة.'
      ],
      en: [
        'Avoid wearing any makeup on the day of the session.',
        'Stop using home exfoliants 3 days before your appointment.',
        'Commit to using the recommended sunscreen after the session.',
        'Drink plenty of water (3 liters daily) to maintain skin hydration.',
        'The session can be repeated monthly for consistent best results.'
      ]
    },
    aftercare: {
      ar: [
        'تجنبي المكياج لمدة 24 ساعة.',
        'استخدمي الروتين المكتوب بعد الجلسة.',
        'واقي شمس ضروري جداً (حتى لو في البيت).',
        'تجنبي الشمس المباشرة، الساونا، البخار، والتمارين الشاقة لمدة 48 ساعة.',
        'الاحمرار البسيط طبيعي ويختفي خلال ساعات.',
        'شرب 3 لتر مياه يومياً لتعزيز النتيجة.'
      ],
      en: [
        'Avoid makeup for 24 hours.',
        'Use the prescribed post-session routine.',
        'Sunscreen is essential (even at home).',
        'Avoid direct sun, sauna, steam, and intense exercise for 48 hours.',
        'Mild redness is normal and fades within hours.',
        'Drink 3 liters of water daily for best results.'
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
    priceImage: '/images/3/dermapen.jpeg',
    instructions: {
      ar: [
        'يُمنع غسل الوجه لمدة 8-12 ساعة بعد الجلسة.',
        'تجنب الشمس المباشرة والحرارة تماماً لمدة 3 أيام.',
        'الالتزام بالكريمات المرممة والملطفة التي يصفها الطبيب.',
        'ممنوع لمس الوجه أو محاولة تقشيره يدوياً.',
        'الأعراض الطبيعية: احمرار وشد بسيط قد يستمر لمدة يومين.'
      ],
      en: [
        'Do not wash your face for 8-12 hours after the session.',
        'Completely avoid direct sun and heat for 3 days.',
        'Use the restorative and soothing creams prescribed by the doctor.',
        'Do not touch your face or attempt to peel it manually.',
        'Normal Symptoms: Redness and mild tightness lasting for up to 2 days.'
      ]
    },
    aftercare: {
      ar: [
        'ممنوع غسل الوجه أو الشعر لمدة 4 ساعات بعد الجلسة.',
        'لمدة أسبوع كامل: ممنوع الحرارة (شمس، بخار، بوتاجاز، ساونا، جو حار).',
        'ممنوع استخدام أي مواد كيميائية أو مستحضرات غير موصوفة.',
        'ممنوع تقشير الجلد أو حك البشرة أو نزع القشور. اتركيها تقع لوحدها خلال 5 أيام.',
        'الترطيب المنتظم مهم جداً.',
        'المكياج مسموح بعد أسبوع من الجلسة.'
      ],
      en: [
        'Do not wash face or hair for 4 hours after session.',
        'For one week: Avoid any heat (sun, steam, stove, sauna, hot weather).',
        'No chemicals or non-prescribed products.',
        'Do not exfoliate, scratch, or peel off skin. Let flakes fall naturally within 5 days.',
        'Regular hydration is essential.',
        'Makeup is allowed after one week.'
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
    priceImage: '/images/3/filler.jpeg',
    instructions: {
      ar: [
        'أول 24 ساعة: ممنوع لمس أو تدليك مكان الحقن، وممنوع المكياج أو الرياضة العنيفة.',
        'أول 24 ساعة: تجنب الحرارة العالية (ساونا، بخار، حمام ساخن) وشرب مياه بكثرة.',
        'أول 3 أيام: النوم على الظهر فقط وتجنب الضغط على الوجه، وممنوع النوم على الجنب.',
        'أول 3 أيام: تجنب جلسات المساج أو أي أجهزة للوجه أو التعرض المباشر للشمس.',
        'الأعراض الطبيعية: تورم بسيط، احمرار، أو كدمات خفيفة تختفي خلال أيام.',
        'تنبيه: راجعي العيادة فوراً لو ظهر ألم شديد غير محتمل أو تغير مفاجئ في لون الجلد.'
      ],
      en: [
        'First 24h: No touching or massaging the injection site, no makeup, and no intense exercise.',
        'First 24h: Avoid high heat (sauna, steam) and drink plenty of water.',
        'First 3 days: Sleep only on your back, avoid pressure on the face, and do not sleep on your side.',
        'First 3 days: Avoid face massages, facial devices, or direct sun exposure.',
        'Normal Symptoms: Mild swelling, redness, or light bruising that fades within days.',
        'Warning: Contact the clinic immediately if you experience severe unbearable pain or sudden skin color change.'
      ]
    },
    aftercare: {
      ar: [
        'أول 24 ساعة: ممنوع لمس أو تدليك الشفايف أو مكان الحقن.',
        'أول 24 ساعة: ممنوع المكياج، وتجنبي الأكل أو المشروبات الساخنة.',
        'أول 48 ساعة: الامتناع عن التدخين، وتجنبي الحرارة العالية (سونا، بخار، شمس مباشرة).',
        'أول 48 ساعة: ممنوع الرياضة العنيفة أو الجيم، والنوم على الظهر فقط.',
        'الطبيعي بعد الفيلر: تورم بسيط، كدمات خفيفة، إحساس بشد.',
        'الشكل النهائي يظهر خلال 10–14 يوم.'
      ],
      en: [
        'First 24h: Do not touch or massage lips/injection site.',
        'First 24h: No makeup, avoid hot food or drinks.',
        'First 48h: No smoking, avoid high heat (sauna, steam, direct sun).',
        'First 48h: No intense exercise, sleep on back only.',
        'Normal after filler: Mild swelling, light bruising, tightness.',
        'Final results appear within 10–14 days.'
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
    priceImage: '/images/3/botox.jpeg',
    instructions: {
      ar: [
        'يُمنع الاستلقاء أو النوم لمدة 4-6 ساعات بعد الحقن.',
        'تجنب تدليك المنطقة المحقونة تماماً لضمان عدم توزيع المادة بشكل خاطئ.',
        'ممنوع الرياضة العنيفة أو الحرارة (ساونا/بخار) لمدة 24 ساعة.',
        'تظهر النتائج النهائية تدريجياً خلال 7-14 يوم من الجلسة.',
        'يمكن عمل رتوش بسيطة بعد أسبوعين إذا لزم الأمر.'
      ],
      en: [
        'Do not lie down or sleep for 4-6 hours after the injection.',
        'Avoid massaging the injected area to prevent improper product distribution.',
        'No intense exercise or high heat (sauna/steam) for 24 hours.',
        'Final results appear gradually within 7-14 days after the session.',
        'Touch-ups can be done after two weeks if necessary.'
      ]
    },
    aftercare: {
      ar: [
        'أول 6 ساعات: ممنوع لمس أو تدليك أماكن الحقن، والرأس مرفوعة (ممنوع توطيها).',
        'أول 48 ساعة: ممنوع المكياج، الرياضة العنيفة، الحرارة العالية، والكحوليات.',
        'النتيجة تبدأ في الظهور خلال 3-7 أيام، والنتيجة الكاملة خلال 10-14 يوم.',
        'الاحمرار أو التورم البسيط طبيعي ويختفي لوحده.'
      ],
      en: [
        'First 6h: Do not touch or massage injection sites, keep head upright.',
        'First 48h: No makeup, intense exercise, high heat, or alcohol.',
        'Results start appearing within 3–7 days, full results in 10–14 days.',
        'Mild redness or swelling is normal and resolves on its own.'
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
    priceImage: '/images/3/skin-booster.jpeg',
    instructions: {
      ar: [
        'تجنب غسل الوجه بالمنظفات القوية إلا بعد الوقت المحدد من قِبل الطبيب.',
        'استخدمي ماء فاتر أو درجة حرارة الغرفة فقط عند غسل البشرة.',
        'ممنوع أي تقشير أو عمل ماسكات للوجه لمدة أسبوع تقريباً.',
        'تجنبي التعرض المباشر للشمس لمدة أسبوع، واستخدمي واقي شمسي SPF 30+.',
        'تجنبي الحرارة العالية، البخار، الساونا، أو المواد الكيميائية القاسية.',
        'يجب شرب 3 لتر مياه يومياً بعد الجلسة لتعزيز مفعول الترطيب.'
      ],
      en: [
        'Avoid washing your face with harsh cleansers until the time specified by the doctor.',
        'Use lukewarm or room temperature water only when washing your skin.',
        'No peeling or face masks for about a week.',
        'Avoid direct sun for a week, and use SPF 30+ sunscreen.',
        'Avoid high heat, steam, saunas, or harsh chemicals.',
        'Drink 3 liters of water daily after the session to enhance hydration effects.'
      ]
    },
    aftercare: {
      ar: [
        'تجنبي غسل الوجه بالماء الساخن أو الصابون القوي لمدة 4-6 ساعات.',
        'لا تستخدمي أي تقشير لمدة أسبوع.',
        'استخدمي واقي شمس SPF 50+ عند الخروج.',
        'تجنبي الحرارة العالية، البخار، الساونا، والمنتجات المحتوية على أحماض أو كحول.',
        'الاحمرار الخفيف والشد طبيعي ويختفي خلال 48 ساعة.'
      ],
      en: [
        'Avoid washing face with hot water or strong soap for 4–6 hours.',
        'No exfoliation for one week.',
        'Use SPF 50+ sunscreen when going out.',
        'Avoid high heat, steam, sauna, and products with acids or alcohol.',
        'Mild redness and tightness are normal and fade within 48 hours.'
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
    priceImage: '/images/3/plasma.jpeg',
    instructions: {
      ar: [
        'يُفضل غسل الشعر جيداً قبل جلسة بلازما الشعر.',
        'تجنب غسل المنطقة المحقونة لمدة 12-24 ساعة بعد الجلسة.',
        'شرب كميات كبيرة من السوائل قبل وبعد الجلسة لزيادة فعالية الصفائح.',
        'تجنب استخدام الصبغات أو المواد الكيميائية القوية لمدة أسبوع.',
        'الانتظام على عدد الجلسات المحدد (غالباً 3-6 جلسات) لرؤية أفضل النتائج.'
      ],
      en: [
        'It is recommended to wash your hair thoroughly before a hair PRP session.',
        'Do not wash the injected area for 12-24 hours after the session.',
        'Drink plenty of fluids before and after the session to increase platelet efficacy.',
        'Avoid using dyes or harsh chemicals for one week.',
        'Stay committed to the prescribed number of sessions (usually 3-6) for best results.'
      ]
    },
    aftercare: {
      ar: [
        'تجنبي غسل المنطقة المحقونة لمدة 12-24 ساعة بعد الجلسة.',
        'شرب كميات كبيرة من الماء قبل وبعد الجلسة.',
        'تجنبي استخدام الصبغات أو المواد الكيميائية القوية لمدة أسبوع.',
        'النتائج تظهر تدريجياً بعد 3-6 جلسات.'
      ],
      en: [
        'Avoid washing the injected area for 12–24 hours after the session.',
        'Drink plenty of water before and after the session.',
        'Avoid dyes or harsh chemicals for one week.',
        'Results appear gradually after 3–6 sessions.'
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
    priceImage: '/images/3/fractional.jpeg',
    instructions: {
      ar: [
        'ممنوع غسل الوجه أو الشعر لمدة 4 ساعات بعد الجلسة.',
        'لمدة أسبوع كامل: ممنوع التعرض لأي حرارة (شمس، بخار، بوتاجاز، ساونا).',
        'لمدة أسبوع كامل: تجنب الأكل الحار، المخللات، المقليات، الحمضيات، والشوكولاتة.',
        'ممنوع استخدام أي مواد كيميائية، صابون قوي، أو مستحضرات تجميل لمدة أسبوع.',
        'ممنوع تماماً تقشير الجلد أو حك البشرة أو نزع القشور يدوياً.',
        'الأعراض الطبيعية: تغير لون البشرة لمربعات بنية وملمس رملي خشن (مرحلة شفاء طبيعية).'
      ],
      en: [
        'Do not wash your face or hair for 4 hours after the session.',
        'For a full week: No exposure to heat (sun, steam, stove, sauna).',
        'For a full week: Avoid spicy food, pickles, fried foods, citrus, and chocolate.',
        'No chemicals, harsh soaps, or cosmetics for one week.',
        'Strictly forbidden to peel, scratch, or manually remove skin flakes.',
        'Normal Symptoms: Skin turns into small brown squares with a sandy texture (natural healing phase).'
      ]
    },
    aftercare: {
      ar: [
        'ممنوع غسل الوجه أو الشعر لمدة 4 ساعات بعد الجلسة.',
        'لمدة أسبوع: ممنوع الحرارة (شمس، بخار، ساونا، جو حار).',
        'ممنوع استخدام أي مواد كيميائية أو مستحضرات تجميل لمدة أسبوع.',
        'ممنوع تقشير الجلد أو حك البشرة أو نزع القشور. اتركيها تقع لوحدها خلال 10-18 يوم.',
        'الترطيب المنتظم مهم جداً.',
        'المكياج مسموح بعد أسبوع.'
      ],
      en: [
        'Do not wash face or hair for 4 hours after session.',
        'For one week: No heat (sun, steam, sauna, hot weather).',
        'No chemicals or cosmetics for one week.',
        'Do not exfoliate, scratch, or peel off skin. Let it fall naturally within 10–18 days.',
        'Regular hydration is essential.',
        'Makeup is allowed after one week.'
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
    priceImage: '/images/3/peeling.jpeg',
    instructions: {
      ar: [
        'ممنوع غسل المنطقة تماماً إلا بعد الوقت الذي يحدده الطبيب وبماء فاتر فقط.',
        'بعد الغسل: ممنوع تعريض المنطقة لأي حرارة (شمس، بخار، ساونا، أو حرارة مطبخ).',
        'الأسبوع الأول: ممنوع ملامسة أي مواد كيميائية أو مستحضرات تجميل.',
        'الأسبوع الأول: تجنب الأكل الحار، الموالح، المشروبات الساخنة، أو العصائر الحمضية.',
        'ممنوع لمس القشور أو محاولة نزعها يدوياً؛ اتركيها تقع طبيعياً.',
        'مراحل التقشير: يبدأ غالباً من اليوم الثالث حول الفم أولاً ثم يمتد للوجه.'
      ],
      en: [
        'Do not wash the area at all until specified by the doctor, use only lukewarm water.',
        'After washing: No exposure to heat (sun, steam, sauna, or kitchen heat).',
        'First Week: No chemicals or cosmetics allowed.',
        'First Week: Avoid spicy food, salty food, hot drinks, or citrus juices.',
        'Do not touch or manually remove peeling skin; let it fall off naturally.',
        'Stages: Peeling usually starts around the 3rd day, beginning from the mouth area.'
      ]
    },
    aftercare: {
      ar: [
        'ممنوع غسل المنطقة إلا بعد الوقت المحدد من الطبيب، وبماء فاتر فقط.',
        'بعد الغسل: ممنوع الحرارة (شمس، بخار، ساونا).',
        'الأسبوع الأول: ممنوع المواد الكيميائية أو مستحضرات التجميل.',
        'الأسبوع الأول: تجنب الأكل الحار، الموالح، المشروبات الساخنة، والعصائر الحمضية.',
        'ممنوع لمس القشور أو نزعها يدوياً.',
        'التقشير يبدأ من اليوم الثالث حول الفم.'
      ],
      en: [
        'Do not wash area until specified by doctor, use only lukewarm water.',
        'After washing: No heat (sun, steam, sauna).',
        'First week: No chemicals or cosmetics.',
        'First week: Avoid spicy, salty, hot drinks, and citrus juices.',
        'Do not touch or remove peeling skin manually.',
        'Peeling starts around day 3 around the mouth area.'
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
    priceImage: '/images/3/scars.jpeg',
    instructions: {
      ar: [
        'تجنب غسل الوجه لمدة 24 ساعة بعد الجلسة.',
        'استخدام المضادات الحيوية الموضعية والكريمات الملطفة حسب وصف الطبيب.',
        'تجنب الشمس المباشرة والرياضة العنيفة لمدة أسبوع.',
        'قد يظهر زرقان بسيط أو تورم مكان التسليك وهو أمر طبيعي يزول بالكمادات الباردة.',
        'النتائج النهائية تظهر بعد التئام الأنسجة الداخلي (حوالي شهر).'
      ],
      en: [
        'Avoid washing your face for 24 hours after the session.',
        'Use topical antibiotics and soothing creams as prescribed by the doctor.',
        'Avoid direct sun and intense exercise for one week.',
        'Minor bruising or swelling at the subcision site is normal and fades with cold compresses.',
        'Final results appear after internal tissue healing (about a month).'
      ]
    },
    aftercare: {
      ar: [
        'تجنبي غسل الوجه لمدة 24 ساعة بعد الجلسة.',
        'استخدمي المضادات الحيوية الموضعية والكريمات الملطفة.',
        'تجنبي الشمس المباشرة والرياضة العنيفة لمدة أسبوع.',
        'الزرقان البسيط أو التورم طبيعي ويزول بالكمادات الباردة.',
        'النتائج النهائية تظهر بعد شهر تقريباً.'
      ],
      en: [
        'Avoid washing face for 24 hours after session.',
        'Use prescribed topical antibiotics and soothing creams.',
        'Avoid direct sun and intense exercise for one week.',
        'Minor bruising or swelling is normal and resolves with cold compresses.',
        'Final results appear after about one month.'
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