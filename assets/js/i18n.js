/**
 * Translation object for Arabic/English language switching
 * All site text must be defined here for RTL/LTR support.
 *
 * Exposed globally as `i18n` to match app.js.
 */
const i18n = {
  ar: {
    // Nav
    nav: {
      home: 'الرئيسية',
      about: 'اتحاد الطلاب',
      activities: 'الأنشطة',
      sports: 'الفرق الرياضية',
      events: 'الفعاليات',
      gallery: 'المعرض',
      video: 'فيديو',
      services: 'خدمات الطلاب',
      faq: 'الأسئلة الشائعة',
      contact: 'تواصل معنا'
    },
    // Hero
    hero: {
      title: 'اتحاد طلاب جامعة الإسكندرية الأهلية',
      subtitle: 'منصة موحدة لخدمة طلابنا وتنمية مهاراتهم وإثراء تجربتهم الجامعية',
      ctaActivities: 'الأنشطة',
      ctaEvents: 'الفعاليات'
    },
    // Stats
    stats: {
      students: 'عدد الطلاب',
      clubs: 'عدد الأندية',
      events: 'عدد الفعاليات',
      teams: 'عدد الفرق الرياضية'
    },
    // Announcements
    announcements: {
      title: 'الإعلانات',
      subtitle: 'آخر أخبار وإعلانات اتحاد الطلاب',
      readMore: 'اقرأ المزيد'
    },
    // Events
    events: {
      title: 'الفعاليات القادمة',
      subtitle: 'استكشف الفعاليات والأنشطة المقبلة',
      register: 'تسجيل',
      search: 'بحث...',
      filterAll: 'الكل',
      noEvents: 'لا توجد فعاليات حالياً'
    },
    // About
    about: {
      title: 'اتحاد الطلاب',
      brief: 'نبذة عن اتحاد الطلاب',
      briefText: 'اتحاد طلاب جامعة الإسكندرية الأهلية هو الهيئة التمثيلية للطلاب، يعمل على تعزيز المشاركة الطلابية وتنظيم الأنشطة والفعاليات التي تخدم مصالح الطلاب.',
      vision: 'الرؤية',
      visionText: 'أن نكون الاتحاد الرائد في تمثيل طلاب الجامعة وإثراء تجربتهم الجامعية عبر أنشطة متميزة وخدمات مبتكرة.',
      mission: 'الرسالة',
      missionText: 'تمثيل الطلاب والدفاع عن حقوقهم، وتنظيم الأنشطة الثقافية والرياضية والاجتماعية، ودعم التميز الأكاديمي.',
      structure: 'الهيكل التنظيمي',
      structureText: 'يتكون الاتحاد من اللجنة التنفيذية ومجموعة من الأندية والفرق الرياضية والمجموعات الطلابية المتخصصة.',
      boardTitle: 'مجلس اتحاد الطلاب للعام الجامعي ٢٠٢٤-٢٠٢٥',
      boardSubtitle: 'نتيجة انتخابات مجلس الاتحاد'
    },
    // Clubs
    clubs: {
      title: 'الأندية والأنشطة',
      subtitle: 'انضم إلى أحد أنديتنا وطور مهاراتك',
      join: 'انضم الآن',
      programming: 'نادي البرمجة',
      programmingDesc: 'تعلم البرمجة وتطوير التطبيقات والمشاركة في المسابقات التقنية.',
      ai: 'نادي الذكاء الاصطناعي',
      aiDesc: 'استكشف الذكاء الاصطناعي والتعلم الآلي والتقنيات الحديثة.',
      media: 'نادي الإعلام',
      mediaDesc: 'التصوير والمونتاج والصحافة والإعلام الرقمي.',
      business: 'نادي الأعمال',
      businessDesc: 'ريادة الأعمال وإدارة المشاريع وتطوير المهارات المهنية.',
      medical: 'النادي الطبي',
      medicalDesc: 'التوعية الصحية والمبادرات الطبية والتطوع الطبي.'
    },
    // Sports
    sports: {
      title: 'الفرق الرياضية',
      subtitle: 'فرقنا الرياضية وإنجازاتها',
      football: 'كرة القدم',
      footballDesc: 'فريق كرة القدم الجامعي، بطل العديد من البطولات المحلية.',
      basketball: 'كرة السلة',
      basketballDesc: 'فريق كرة السلة المتميز والمتنافس في البطولات الجامعية.',
      handball: 'كرة اليد',
      handballDesc: 'فريق كرة اليد النشط في المنافسات الجامعية.',
      volleyball: 'الكرة الطائرة',
      volleyballDesc: 'فريق الكرة الطائرة ومشاركته الفعالة في البطولات.',
      esports: 'الألعاب الإلكترونية',
      esportsDesc: 'فريق الألعاب الإلكترونية ومشاركاته في المسابقات.'
    },
    // Gallery
    gallery: {
      title: 'المعرض',
      subtitle: 'لقطات من أنشطتنا وفعالياتنا',
      close: 'إغلاق'
    },
    // Services
    services: {
      title: 'خدمات الطلاب',
      subtitle: 'نماذج رقمية لخدمتك',
      activityReg: 'تسجيل نشاط',
      activityRegDesc: 'تسجيل نشاط أو مبادرة طلابية جديدة',
      complaint: 'تقديم شكوى',
      complaintDesc: 'تقديم شكوى رسمية للاتحاد',
      suggestion: 'تقديم اقتراح',
      suggestionDesc: 'اقتراح أفكار أو تحسينات',
      eventReg: 'التسجيل في فعالية',
      eventRegDesc: 'التسجيل للمشاركة في فعالية',
      submit: 'إرسال',
      required: 'هذا الحقل مطلوب',
      success: 'تم الإرسال بنجاح'
    },
    // Contact
    contact: {
      title: 'تواصل معنا',
      subtitle: 'نحن هنا لمساعدتك',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      subject: 'الموضوع',
      message: 'الرسالة',
      send: 'إرسال',
      info: 'معلومات الاتصال',
      address: 'جامعة الإسكندرية الأهلية - سموحة الجديدة',
      phone: 'الهاتف',
      followUs: 'تابعنا'
    },
    // Footer
    footer: {
      quickLinks: 'روابط سريعة',
      contact: 'تواصل',
      copyright: '© اتحاد طلاب جامعة الإسكندرية الأهلية. جميع الحقوق محفوظة.'
    },
    // Chatbot
    chatbot: {
      title: 'مساعد الطالب',
      placeholder: 'اكتب رسالتك...',
      send: 'إرسال',
      poweredBy: 'مدعوم بـ Groq AI'
    },
    // UI
    ui: {
      darkMode: 'الوضع الداكن',
      lightMode: 'الوضع الفاتح',
      lang: 'English',
      backToTop: 'العودة للأعلى'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Union',
      activities: 'Activities',
      sports: 'Sports Teams',
      events: 'Events',
      gallery: 'Gallery',
      video: 'Video',
      services: 'Student Services',
      faq: 'FAQ',
      contact: 'Contact'
    },
    hero: {
      title: 'Alexandria National University Student Union',
      subtitle: 'A unified platform serving our students, developing their skills, and enriching their university experience',
      ctaActivities: 'Activities',
      ctaEvents: 'Events'
    },
    stats: {
      students: 'Students',
      clubs: 'Clubs',
      events: 'Events',
      teams: 'Sports Teams'
    },
    announcements: {
      title: 'Announcements',
      subtitle: 'Latest news and announcements from the Student Union',
      readMore: 'Read More'
    },
    events: {
      title: 'Upcoming Events',
      subtitle: 'Explore upcoming events and activities',
      register: 'Register',
      search: 'Search...',
      filterAll: 'All',
      noEvents: 'No events at the moment'
    },
    about: {
      title: 'About the Union',
      brief: 'About the Student Union',
      briefText: 'Alexandria National University Student Union is the representative body of students, working to enhance student participation and organize activities and events that serve student interests.',
      vision: 'Vision',
      visionText: 'To be the leading union in representing university students and enriching their experience through distinguished activities and innovative services.',
      mission: 'Mission',
      missionText: 'Represent students and defend their rights, organize cultural, sports and social activities, and support academic excellence.',
      structure: 'Organizational Structure',
      structureText: 'The union consists of the executive committee and a set of clubs, sports teams and specialized student groups.',
      boardTitle: 'Student Union Council 2024-2025',
      boardSubtitle: 'Election results'
    },
    clubs: {
      title: 'Activities & Clubs',
      subtitle: 'Join one of our clubs and develop your skills',
      join: 'Join Now',
      programming: 'Programming Club',
      programmingDesc: 'Learn programming, app development, and participate in tech competitions.',
      ai: 'AI Club',
      aiDesc: 'Explore artificial intelligence, machine learning and modern technologies.',
      media: 'Media Club',
      mediaDesc: 'Photography, video editing, journalism and digital media.',
      business: 'Business Club',
      businessDesc: 'Entrepreneurship, project management and professional skill development.',
      medical: 'Medical Club',
      medicalDesc: 'Health awareness, medical initiatives and medical volunteering.'
    },
    sports: {
      title: 'Sports Teams',
      subtitle: 'Our teams and their achievements',
      football: 'Football',
      footballDesc: 'University football team, champion of many local tournaments.',
      basketball: 'Basketball',
      basketballDesc: 'Distinguished basketball team competing in university championships.',
      handball: 'Handball',
      handballDesc: 'Active handball team in university competitions.',
      volleyball: 'Volleyball',
      volleyballDesc: 'Volleyball team with effective participation in championships.',
      esports: 'Esports',
      esportsDesc: 'Esports team and its participation in competitions.'
    },
    gallery: {
      title: 'Gallery',
      subtitle: 'Moments from our activities and events',
      close: 'Close'
    },
    services: {
      title: 'Student Services',
      subtitle: 'Digital forms at your service',
      activityReg: 'Register Activity',
      activityRegDesc: 'Register a new student activity or initiative',
      complaint: 'Submit Complaint',
      complaintDesc: 'Submit an official complaint to the union',
      suggestion: 'Submit Suggestion',
      suggestionDesc: 'Suggest ideas or improvements',
      eventReg: 'Register for Event',
      eventRegDesc: 'Register to participate in an event',
      submit: 'Submit',
      required: 'This field is required',
      success: 'Submitted successfully'
    },
    contact: {
      title: 'Contact Us',
      subtitle: "We're here to help",
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send',
      info: 'Contact Info',
      address: 'Alexandria National University - Smouha',
      phone: 'Phone',
      followUs: 'Follow Us'
    },
    footer: {
      quickLinks: 'Quick Links',
      contact: 'Contact',
      copyright: '© Alexandria National University Student Union. All rights reserved.'
    },
    chatbot: {
      title: 'Student Assistant',
      placeholder: 'Type your message...',
      send: 'Send',
      poweredBy: 'Powered by Groq AI'
    },
    ui: {
      darkMode: 'Dark Mode',
      lightMode: 'Light Mode',
      lang: 'العربية',
      backToTop: 'Back to Top'
    }
  }
};
