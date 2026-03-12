/**
 * Alexandria National University Student Union - Main Script
 * Professional student union website with full data
 */

// ========== EVENTS DATA (Full Details) ==========
const eventsData = [
  {
    id: 1,
    titleAr: 'الإفطار الرمضاني السنوي 🌙✨',
    titleEn: 'Annual Ramadan Iftar 🌙✨',
    descAr: `رمضان دايمًا بيكون أحلى لما يجمعنا… واللمة الحلوة هي اللي بتصنع أجمل ذكريات الشهر الكريم. 🌙✨  
 الموعد: الجمعة 13/3  
 المكان: مقر الجامعة الرئيسي بأبيس`,
    descEn: `Ramadan is always better when it brings us together… Sweet gatherings create the most beautiful memories of the holy month. 🌙✨  
 Date: Friday, 13/3  
 Venue: University Main Campus, Abis`,
    date: '2026-03-13',
    time: '',
    locationAr: 'مقر الجامعة الرئيسي بأبيس',
    locationEn: 'University Main Campus, Abis',
    category: 'events',
    capacity: 300,
    image: 'iftarramdan.jpg'
  },
  {
    id: 2,
    titleAr: 'الدورة الرمضانية لخماسيات كرة القدم ⚽',
    titleEn: 'Ramadan Five-a-side Football Tournament ⚽',
    descAr: `يسر اللجنة الرياضية الإعلان عن الدورة الرمضانية لخماسيات كرة القدم لطلاب الجامعة.  

نظام البطولة:
- دور المجموعات: الأحد والإثنين 15 و16 مارس 2026
- دور خروج المغلوب: الثلاثاء والأربعاء 17 و18 مارس 2026
- كل فريق: 5 لاعبين (4 + حارس) + 2 احتياطي اختياري
- عدد الفرق: 16 فريق
- اللعب بنظام المجموعات ثم خروج المغلوب  
 الملاعب: استاد الجامعة`,
    descEn: `The Sports Committee is pleased to announce the Ramadan Five-a-side Football Tournament for university students.  

Tournament format:
- Group stage: Sunday & Monday, 15-16 March 2026
- Knockout stage: Tuesday & Wednesday, 17-18 March 2026
- Each team: 5 players (4 + goalkeeper) + 2 optional substitutes
- Total teams: 16
- Tournament played in group stage then knockout  
 Venue: University Stadium`,
    date: '2026-03-15',
    time: '',
    locationAr: 'استاد الجامعة',
    locationEn: 'University Stadium',
    category: 'sports',
    capacity: 200,
    image: 'دوره كوره.jpg'
  },
  {
    id: 3,
    titleAr: 'تهنئة شهد حسام ',
    titleEn: 'Congratulations to Shahd Hossam ',
    descAr: `اتحاد طلاب الجامعة يهنئ الطالبة شهد حسام جعفر على إنجازها الرائع في رياضة السباحة بالزعانف، في محاكاة دورة الألعاب الإفريقية ودورة الشهيد الرفاعي رقم ٥٣ للجامعات:  

 ميدالية فضية  ٤٠٠ متر مونو  
 ميدالية فضية  ٢٠٠ متر مونو`,
    descEn: `The Alexandria National University Student Union congratulates student Shahd Hossam Gaafar for her outstanding achievement in fin swimming, in the African Games Simulation and the 53rd Al-Rifai Memorial University Games:  

 Silver medal  400m Mono  
 Silver medal  200m Mono`,
    date: '',
    time: '',
    locationAr: '',
    locationEn: '',
    category: 'achievements',
    capacity: 1,
    image: 'تهنيه شهد.jpg'
  },
  {
    id: 4,
    titleAr: 'زيارة مستشفى سرطان الأطفال 57357 ',
    titleEn: 'Visit to Children’s Cancer Hospital 57357 ',
    descAr: `في إطار دعم المسؤولية المجتمعية، قام طلاب الأنشطة بزيارة يوم الأربعاء 5 نوفمبر 2025 لمستشفى 57357، لإدخال البهجة على الأطفال المرضى والتعرف على جهود المستشفى في تقديم الرعاية المتكاملة.  

 يوم مليء بالمشاعر الإنسانية والطاقة الإيجابية، شارك فيه الطلاب بابتسامتهم ووقتهم ليصنعوا لحظات لا تُنسى.`,
    descEn: `As part of supporting social responsibility, the Activity Students visited 57357 Hospital on Wednesday, 5 November 2025, to bring joy to sick children and learn about the hospital’s comprehensive care.  

 A day full of emotions and positive energy, where students shared their smiles and time to create unforgettable moments.`,
    date: '2025-11-05',
    time: '',
    locationAr: 'مستشفى 57357',
    locationEn: '57357 Children’s Cancer Hospital',
    category: 'community',
    capacity: 100,
    image: 'زياره الطلاب لمستشفي.jpg'
  },
  {
    id: 5,
    titleAr: 'مسابقة بادل 🎾',
    titleEn: 'Padel Competition 🎾',
    descAr: `يسر اللجنة الرياضية الإعلان عن مسابقة البادل لجميع طلاب الجامعة. شاركوا معنا لتستمتعوا بأجواء رياضية رائعة وتنافس ممتع بين الطلاب.`,
    descEn: `The Sports Committee is pleased to announce the Padel competition for all university students. Join us for a fun and competitive sports experience.`,
    date: '',
    time: '',
    locationAr: '',
    locationEn: '',
    category: 'sports',
    capacity: 64,
    image: 'مسابقه البادل.jpg'
  },
  {
    id: 6,
    titleAr: 'تكريم المنظمين في الأنشطة الطلابية',
    titleEn: 'Honoring the Student Activity Organizers',
    descAr: `يسر اتحاد طلاب جامعة الإسكندرية الأهلية أن يقدّم أسمى آيات الشكر والتقدير لجميع المنظمين والمساهمين في إنجاح الأنشطة والفعاليات الطلابية المختلفة.  
💫 جهودكم المتميزة ووقتكم المبذول ساهموا في خلق بيئة طلابية مليئة بالحيوية والإبداع.  

📅 موعد التكريم: سيتم الإعلان عنه قريبًا  
📍 المكان: مقر الجامعة الرئيسي`,
    descEn: `The Alexandria National University Student Union is pleased to extend its sincere gratitude and appreciation to all organizers and contributors who made the student activities and events successful.  
💫 Your outstanding efforts and dedicated time have helped create a vibrant and creative student environment.  

📅 Award Date: To be announced soon  
📍 Venue: University Main Campus`,
    date: '',
    time: '',
    locationAr: 'مقر الجامعة الرئيسي',
    locationEn: 'University Main Campus',
    category: 'awards',
    capacity: 100,
    image: 'تكريم المنظمين.jpg'
  }
];

// ========== CLUBS DATA (Full Details) ==========
const clubsData = [
  {
    id: 1,
    icon: 'fa-code',
    nameAr: 'نادي البرمجة',
    nameEn: 'Programming Club',
    descAr: 'تعلم البرمجة من الصفر، تطوير التطبيقات والويب، المشاركة في المسابقات التقنية مثل ACM و Google Code Jam.',
    descEn: 'Learn programming from scratch, app and web development, compete in ACM and Google Code Jam.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=350&fit=crop',
    presidentAr: 'أحمد محمود',
    presidentEn: 'Ahmed Mahmoud',
    meetings: 'الأحد والأربعاء 4-6 مساءً',
    requirements: 'حب التعلم - لا يشترط خبرة',
    members: 85,
    achievements: ['الفوز في مسابقة ICPC المحلية 2024', '5 مشاريع تابعة للنادي نُشرت']
  },
  {
    id: 2,
    icon: 'fa-robot',
    nameAr: 'نادي الذكاء الاصطناعي',
    nameEn: 'AI Club',
    descAr: 'استكشف الذكاء الاصطناعي والتعلم الآلي. ورش عمل على TensorFlow و PyTorch. مشاريع عملية في التعرف على الصور والنصوص.',
    descEn: 'Explore AI and machine learning. Workshops on TensorFlow and PyTorch. Practical projects in image and text recognition.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=350&fit=crop',
    presidentAr: 'سارة محمد',
    presidentEn: 'Sara Mohamed',
    meetings: 'الثلاثاء 3-5 مساءً',
    requirements: 'أساسيات البرمجة (Python مفضل)',
    members: 52,
    achievements: ['فريق NLP حصل على المركز الثاني وطنياً', 'شراكات مع شركات تقنية']
  },
  {
    id: 3,
    icon: 'fa-video',
    nameAr: 'نادي الإعلام',
    nameEn: 'Media Club',
    descAr: 'التصوير الفوتوغرافي والفيديو، المونتاج، الصحافة الجامعية، الإعلام الرقمي وتصميم المحتوى.',
    descEn: 'Photography, video, editing, campus journalism, digital media and content design.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=500&h=350&fit=crop',
    presidentAr: 'محمد حسن',
    presidentEn: 'Mohamed Hassan',
    meetings: 'الاثنين والخميس 5-7 مساءً',
    requirements: 'الشغف بالإعلام - معدات أساسية',
    members: 70,
    achievements: ['تصوير جميع فعاليات الجامعة', 'قناة يوتيوب رسمية 10K متابع']
  },
  {
    id: 4,
    icon: 'fa-briefcase',
    nameAr: 'نادي الأعمال',
    nameEn: 'Business Club',
    descAr: 'ريادة الأعمال، إدارة المشاريع، التخطيط المالي، تطوير المهارات القيادية والتواصل مع رواد الأعمال.',
    descEn: 'Entrepreneurship, project management, financial planning, leadership and networking with entrepreneurs.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=350&fit=crop',
    presidentAr: 'نورا أحمد',
    presidentEn: 'Nora Ahmed',
    meetings: 'الأربعاء 2-4 مساءً',
    requirements: 'الانفتاح على التعلم',
    members: 45,
    achievements: ['3 شركات ناشئة من أعضاء النادي', 'شراكات مع مسرعات الأعمال']
  },
  {
    id: 5,
    icon: 'fa-stethoscope',
    nameAr: 'النادي الطبي',
    nameEn: 'Medical Club',
    descAr: 'التوعية الصحية، الإسعافات الأولية، المبادرات الطبية التطوعية، ورش التغذية والصحة النفسية.',
    descEn: 'Health awareness, first aid, medical volunteering, nutrition and mental health workshops.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=350&fit=crop',
    presidentAr: 'ياسمين علي',
    presidentEn: 'Yasmin Ali',
    meetings: 'السبت 10 صباحاً - 12 ظهراً',
    requirements: 'للطلاب من كليات الطب والصيدلة والتمريض',
    members: 60,
    achievements: ['حملات توعوية شهرية', 'شهادة إسعافات أولية لـ 120 طالب']
  },
  {
    id: 6,
    icon: 'fa-palette',
    nameAr: 'نادي الفنون',
    nameEn: 'Arts Club',
    descAr: 'الرسم، التصميم الجرافيكي، الموسيقى، المسرح. ورش إبداعية ومعارض فنية سنوية.',
    descEn: 'Drawing, graphic design, music, theater. Creative workshops and annual art exhibitions.',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500&h=350&fit=crop',
    presidentAr: 'كريم سعيد',
    presidentEn: 'Karim Said',
    meetings: 'الجمعة 4-6 مساءً',
    requirements: 'حب الفن والتعبير الإبداعي',
    members: 38,
    achievements: ['معرض فني سنوي', 'فرقة موسيقية جامعية']
  }
];

// ========== SPORTS DATA (Full Details with Achievements) ==========
const sportsData = [
  {
    id: 1,
    icon: 'fa-futbol',
    nameAr: 'كرة القدم',
    nameEn: 'Football',
    descAr: 'فريق كرة القدم الجامعي يشارك في البطولات المحلية والإقليمية. تدريبات منتظمة مع مدرب محترف.',
    descEn: 'University football team competes in local and regional championships. Regular training with professional coach.',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500&h=350&fit=crop',
    
  },
  {
    id: 2,
    icon: 'fa-basketball-ball',
    nameAr: 'كرة السلة',
    nameEn: 'Basketball',
    descAr: 'فريق كرة السلة للرجال والسيدات. مشاركة فعالة في البطولات الجامعية.',
    descEn: 'Men and women basketball teams. Active participation in university championships.',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&h=350&fit=crop',
    coachAr: 'أحمد جمال',
    achievements: ['المركز الثالث - بطولة السيدات 2024', 'تصفيات وطنية']
  },
  {
    id: 3,
    icon: 'fa-hand-rock',
    nameAr: 'كرة اليد',
    nameEn: 'Handball',
    descAr: 'فريق كرة اليد النشط في المنافسات الجامعية. تدريبات 3 مرات أسبوعياً.',
    descEn: 'Active handball team in university competitions. Training 3 times weekly.',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=500&h=350&fit=crop',
    coachAr: 'عمرو إبراهيم',
    achievements: ['بطل الدوري الجامعي 2024']
  },
  {
    id: 4,
    icon: 'fa-volleyball-ball',
    nameAr: 'الكرة الطائرة',
    nameEn: 'Volleyball',
    descAr: 'فريق الكرة الطائرة ومشاركته الفعالة في البطولات. مزيج من الخبرة والطاقة.',
    descEn: 'Volleyball team with effective championship participation. Mix of experience and energy.',
    image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=500&h=350&fit=crop',
    coachAr: 'سلمى حسن',
    achievements: ['المركز الثاني - بطولة الساحل 2024']
  },
  {
    id: 5,
    icon: 'fa-gamepad',
    nameAr: 'الألعاب الإلكترونية',
    nameEn: 'Esports',
    descAr: 'فريق الألعاب الإلكترونية في FIFA و VALORANT و League of Legends. مشاركات في المسابقات الإقليمية.',
    descEn: 'Esports team in FIFA, VALORANT, League of Legends. Regional competition participation.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&h=350&fit=crop',
    coachAr: 'رائد إبراهيم',
    achievements: ['بطل FIFA الجامعات 2024', 'تصفيات VALORANT الوطنية']
  }
];

// ========== GALLERY (Professional Photos) ==========
const galleryImages = [
  { thumb: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=400&fit=crop', full: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=800&fit=crop', titleAr: 'حفل التخرج', titleEn: 'Graduation Ceremony' },
  { thumb: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop', full: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop', titleAr: 'ورشة عمل', titleEn: 'Workshop' },
  { thumb: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=400&fit=crop', full: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop', titleAr: 'حرم الجامعة', titleEn: 'Campus' },
  { thumb: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=400&fit=crop', full: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&h=800&fit=crop', titleAr: 'أنشطة طلابية', titleEn: 'Student Activities' },
  { thumb: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=400&fit=crop', full: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=800&fit=crop', titleAr: 'تكريم الطلاب', titleEn: 'Student Honors' },
  { thumb: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=400&fit=crop', full: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=800&fit=crop', titleAr: 'مكتبة الجامعة', titleEn: 'University Library' },
  { thumb: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&h=400&fit=crop', full: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200&h=800&fit=crop', titleAr: 'معرض المشاريع', titleEn: 'Projects Exhibition' },
  { thumb: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400&h=400&fit=crop', full: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1200&h=800&fit=crop', titleAr: 'بطولة رياضية', titleEn: 'Sports Championship' },
  { thumb: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&h=400&fit=crop', full: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=1200&h=800&fit=crop', titleAr: 'لقاء مع الخريجين', titleEn: 'Alumni Meeting' }
];

// ========== FAQs ==========
const faqsData = [
  { qAr: 'كيف أنضم لنادي طلابي؟', qEn: 'How do I join a student club?', aAr: 'التسجيل يتم عبر نموذج "تسجيل نشاط" أو التوجه لمقر الاتحاد في أوقات العمل. يمكنك أيضاً حضور أول اجتماع للنادي الذي يهمك.', aEn: 'Register via the "Register Activity" form or visit the union office during work hours. You can also attend the first meeting of your chosen club.' },
  { qAr: 'هل الأنشطة الطلابية تؤثر على الدراسة؟', qEn: 'Do student activities affect studies?', aAr: 'لا، بل تدعمها. الأنشطة تنظم خارج أوقات المحاضرات وتُعزز المهارات العملية والقيادية.', aEn: 'No, they support it. Activities are scheduled outside lecture times and enhance practical and leadership skills.' },
  { qAr: 'كيف أقدم شكوى أو اقتراحاً؟', qEn: 'How do I submit a complaint or suggestion?', aAr: 'من خلال قسم "خدمات الطلاب" في الموقع، اختر نموذج الشكوى أو الاقتراح واملأ البيانات. سنرد خلال 48 ساعة.', aEn: 'Via "Student Services" on the site, choose the complaint or suggestion form and fill in the details. We respond within 48 hours.' },
  { qAr: 'ما هي ساعات عمل مقر الاتحاد؟', qEn: 'What are the union office hours?', aAr: 'من الأحد للخميس، 9 صباحاً حتى 3 عصراً. الجمعة والسبت إجازة.', aEn: 'Sunday to Thursday, 9 AM to 3 PM. Friday and Saturday are off.' }
];

// ========== BOARD MEMBERS (2024-2025) ==========
// تحت رعاية الأستاذ الدكتور / تامر حلمي مستشار اتحاد الطلاب
const boardMembersData = [
  { roleAr: 'رئيس الاتحاد', roleEn: 'Union President', name: 'أحمد هشام' },
  { roleAr: 'نائب رئيس الاتحاد', roleEn: 'Vice President', name: 'مايا جوده' },
  { roleAr: 'أمين لجنة الأسر', roleEn: 'Families Committee Secretary', name: 'أحمد محمد بركات' },
  { roleAr: 'أمين مساعد لجنة الأسر', roleEn: 'Assistant Families Committee Secretary', name: 'أحمد متولي' },
  { roleAr: 'أمين اللجنة الاجتماعية والرحلات', roleEn: 'Social & Trips Committee Secretary', name: 'زياد محمد' },
  { roleAr: 'أمين اللجنة الرياضية', roleEn: 'Sports Committee Secretary', name: 'أحمد محمد السيد جوده' },
  { roleAr: 'أمين مساعد اللجنة الرياضية', roleEn: 'Assistant Sports Committee Secretary', name: 'اسامة علاء' },
  { roleAr: 'أمين اللجنة الثقافية', roleEn: 'Cultural Committee Secretary', name: 'لؤي عزت محمد' },
  { roleAr: 'أمين اللجنة الفنية', roleEn: 'Arts Committee Secretary', name: 'مارينا منير ابراهيم' },
  { roleAr: 'أمين مساعد اللجنة الفنية', roleEn: 'Assistant Arts Committee Secretary', name: 'محمد تامر الصيرفي' },
  { roleAr: 'أمين اللجنة العلمية', roleEn: 'Scientific Committee Secretary', name: 'خالد وليد غلوش' },
  { roleAr: 'أمين لجنة الجوالة', roleEn: 'Scouts Committee Secretary', name: 'عبدالرحمن حسن' },
  { roleAr: 'أمين مساعد لجنة الجوالة', roleEn: 'Assistant Scouts Committee Secretary', name: 'رضوي رضا احمد' }
];

// ========== COMMITTEES ==========
const committeesData = [
  { nameAr: 'لجنة الأسر', nameEn: 'Families Committee', descAr: 'تنظيم أنشطة الأسر الطلابية', descEn: 'Organizing student families activities', icon: 'fa-users', secretaryAr: 'أحمد محمد بركات', secretaryEn: 'Ahmed Mohamed Barakat' },
  { nameAr: 'اللجنة الاجتماعية والرحلات', nameEn: 'Social & Trips Committee', descAr: 'الفعاليات الاجتماعية والرحلات الطلابية', descEn: 'Social events and student trips', icon: 'fa-bus', secretaryAr: 'زياد محمد', secretaryEn: 'Ziad Mohamed' },
  { nameAr: 'اللجنة الرياضية', nameEn: 'Sports Committee', descAr: 'الإشراف على الفرق الرياضية والبطولات', descEn: 'Supervising sports teams and championships', icon: 'fa-trophy', secretaryAr: 'أحمد محمد السيد جوده', secretaryEn: 'Ahmed Mohamed El-Sayed Gawda' },
  { nameAr: 'اللجنة الثقافية', nameEn: 'Cultural Committee', descAr: 'تنظيم المحاضرات والندوات والمعارض الثقافية', descEn: 'Organizing lectures, seminars and cultural exhibitions', icon: 'fa-book-open', secretaryAr: 'لؤي عزت محمد', secretaryEn: 'Loay Ezzat Mohamed' },
  { nameAr: 'اللجنة الفنية', nameEn: 'Arts Committee', descAr: 'الفعاليات الفنية والمسرحية', descEn: 'Arts and theater events', icon: 'fa-palette', secretaryAr: 'مارينا منير ابراهيم', secretaryEn: 'Marina Mounir Ibrahim' },
  { nameAr: 'اللجنة العلمية', nameEn: 'Scientific Committee', descAr: 'الأنشطة العلمية والمسابقات', descEn: 'Scientific activities and competitions', icon: 'fa-flask', secretaryAr: 'خالد وليد غلوش', secretaryEn: 'Khaled Waleed Ghaloush' },
  { nameAr: 'لجنة الجوالة', nameEn: 'Scouts Committee', descAr: 'أنشطة الكشافة والجوالة', descEn: 'Scouting and rover activities', icon: 'fa-hiking', secretaryAr: 'عبدالرحمن حسن', secretaryEn: 'Abdelrahman Hassan' }
];

// ========== State ==========
let currentLang = localStorage.getItem('lang') || 'ar';
let currentTheme = localStorage.getItem('theme') || 'light';
let chatbotHistory = [];

// ========== DOM Ready ==========
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initTheme();
  initNavbar();
  initMobileNav();
  initScrollProgress();
  initBackToTop();
  initCounters();
  initEvents();
  initEventCalendar();
  initClubs();
  initSports();
  initGallery();
  initFAQs();
  initBoardMembers();
  initCommittees();
  initServices();
  initContactForm();
  initChatbot();
  initAOS();
});

// ========== Language System ==========
function initLanguage() {
  const html = document.documentElement;
  html.lang = currentLang;
  html.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  applyTranslations();
  updateLangButton();
}

function applyTranslations() {
  const t = i18n[currentLang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = getNestedValue(t, key);
    if (value) el.textContent = value;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const value = getNestedValue(i18n[currentLang], key);
    if (value) el.placeholder = value;
  });

  const welcomeMsg = document.querySelector('.chat-msg.bot p');
  if (welcomeMsg) {
    welcomeMsg.textContent = currentLang === 'ar'
      ? 'مرحباً! أنا مساعدك الجامعي. أسألني عن الأنشطة، الفعاليات، الأندية أو خدمات الطلاب.'
      : 'Hello! I am your university assistant. Ask me about activities, events, clubs or student services.';
  }
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((o, k) => o?.[k], obj);
}

function updateLangButton() {
  const btn = document.getElementById('langToggle');
  if (btn) btn.textContent = i18n[currentLang]?.ui?.lang || (currentLang === 'ar' ? 'English' : 'العربية');
}

function toggleLanguage() {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  localStorage.setItem('lang', currentLang);
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  applyTranslations();
  updateLangButton();
  initEvents();
  initClubs();
  initSports();
  initFAQs();
  initBoardMembers();
  initCommittees();
  populateEventDropdown();
}

// ========== Theme ==========
function initTheme() {
  const html = document.documentElement;
  if (currentTheme === 'dark') {
    html.setAttribute('data-theme', 'dark');
    const icon = document.querySelector('.theme-toggle i');
    if (icon) { icon.classList.remove('fa-moon'); icon.classList.add('fa-sun'); }
  }
}

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
  const html = document.documentElement;
  const icon = document.querySelector('.theme-toggle i');
  if (currentTheme === 'dark') {
    html.setAttribute('data-theme', 'dark');
    if (icon) { icon.classList.remove('fa-moon'); icon.classList.add('fa-sun'); }
  } else {
    html.removeAttribute('data-theme');
    if (icon) { icon.classList.remove('fa-sun'); icon.classList.add('fa-moon'); }
  }
}

// ========== Navbar ==========
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  function onScroll() {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll);
  onScroll();

  const sections = document.querySelectorAll('section[id]');
  function setActiveLink() {
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 100;
      const height = sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) current = sec.getAttribute('id');
    });
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      link.classList.toggle('active', href === `#${current}`);
    });
  }
  window.addEventListener('scroll', setActiveLink);
}

// ========== Mobile Nav ==========
function initMobileNav() {
  const toggler = document.getElementById('navToggler');
  const menu = document.getElementById('navbarMenu');
  if (!toggler || !menu) return;

  toggler.addEventListener('click', () => {
    toggler.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
  });

  menu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      toggler.classList.remove('active');
      menu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// ========== Scroll Progress ==========
function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = `${percent}%`;
  });
}

// ========== Back to Top ==========
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ========== Counters ==========
function initCounters() {
  const cards = document.querySelectorAll('.stat-card');
  if (!cards.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const num = entry.target.querySelector('.stat-number');
        const target = parseInt(num.getAttribute('data-target'), 10);
        animateCounter(num, 0, target, 1500);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  cards.forEach(card => observer.observe(card));
}

function animateCounter(el, start, end, duration) {
  const startTime = performance.now();
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (end - start) * easeOut);
    el.textContent = current.toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en');
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = end.toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en');
  }
  requestAnimationFrame(update);
}

// ========== Events ==========
function initEvents() {
  const grid = document.getElementById('eventsGrid');
  const searchInput = document.getElementById('eventSearch');
  if (!grid) return;

  function renderEvents(filter = '') {
    const term = filter.toLowerCase();
    const filtered = eventsData.filter(ev => {
      const title = currentLang === 'ar' ? ev.titleAr : ev.titleEn;
      const desc = currentLang === 'ar' ? ev.descAr : ev.descEn;
      return !term || title.toLowerCase().includes(term) || desc.toLowerCase().includes(term);
    });

    if (filtered.length === 0) {
      grid.innerHTML = `<p class="section-subtitle" style="grid-column:1/-1;text-align:center;">${i18n[currentLang]?.events?.noEvents || 'لا توجد فعاليات'}</p>`;
      return;
    }

    grid.innerHTML = filtered.map(ev => {
      const title = currentLang === 'ar' ? ev.titleAr : ev.titleEn;
      const desc = currentLang === 'ar' ? ev.descAr : ev.descEn;
      const loc = currentLang === 'ar' ? ev.locationAr : ev.locationEn;
      const img = ev.image || `https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop`;
      return `
        <article class="event-card" data-aos="fade-up">
          <div class="event-card-img">
            <img src="${img}" alt="${title}" loading="lazy" />
            <span class="event-badge">${ev.category}</span>
          </div>
          <div class="event-card-body">
            <h3>${title}</h3>
            <p>${desc}</p>
            <div class="event-card-meta">
              <span><i class="far fa-calendar"></i> ${ev.date}</span>
              <span><i class="far fa-clock"></i> ${ev.time}</span>
              <span><i class="fas fa-map-marker-alt"></i> ${loc}</span>
            </div>
            <div class="event-card-footer">
              <span class="event-capacity"><i class="fas fa-users"></i> ${ev.capacity} ${currentLang === 'ar' ? 'مقعد' : 'seats'}</span>
              <a href="#services" class="btn btn-primary btn-sm">${i18n[currentLang]?.events?.register || 'تسجيل'}</a>
            </div>
          </div>
        </article>
      `;
    }).join('');

    AOS?.refresh();
  }

  renderEvents();
  if (searchInput) {
    searchInput.addEventListener('input', (e) => renderEvents(e.target.value));
    searchInput.placeholder = i18n[currentLang]?.events?.search || 'بحث...';
  }
}

// ========== Events Calendar ==========
function initEventCalendar() {
  const calendarEl = document.getElementById('eventCalendar');
  if (!calendarEl) return;

  // Group events by date
  const byDate = {};
  eventsData.forEach(ev => {
    if (!byDate[ev.date]) byDate[ev.date] = [];
    byDate[ev.date].push(ev);
  });

  const dates = Object.keys(byDate).sort();
  if (!dates.length) {
    calendarEl.innerHTML = `<p class="section-subtitle" style="text-align:center;">${i18n[currentLang]?.events?.noEvents || 'لا توجد فعاليات'}</p>`;
    return;
  }

  calendarEl.innerHTML = dates.map(date => {
    const items = byDate[date]
      .map(ev => {
        const title = currentLang === 'ar' ? ev.titleAr : ev.titleEn;
        const img = ev.image || '';
        return `
          <div class="event-calendar-item" data-event-id="${ev.id}">
            ${img ? `<div class="event-calendar-thumb"><img src="${img}" alt="${title}" loading="lazy" /></div>` : ''}
            <div class="event-calendar-info">
              <h4>${title}</h4>
              <span class="event-calendar-meta">${ev.time} • ${ev.locationAr}</span>
            </div>
          </div>
        `;
      })
      .join('');

    return `
      <article class="card event-calendar-day" data-aos="fade-up">
        <div class="event-calendar-date">
          <i class="far fa-calendar"></i>
          <span>${date}</span>
        </div>
        <div class="event-calendar-items">
          ${items}
        </div>
      </article>
    `;
  }).join('');

  AOS?.refresh();
}

// ========== Clubs (Full Details) ==========
function initClubs() {
  const grid = document.getElementById('clubsGrid');
  if (!grid) return;

  const t = i18n[currentLang]?.clubs || {};
  grid.innerHTML = clubsData.map(club => {
    const name = currentLang === 'ar' ? club.nameAr : club.nameEn;
    const desc = club.descAr && club.descEn ? (currentLang === 'ar' ? club.descAr : club.descEn) : (getNestedValue(i18n[currentLang], club.descKey) || club.descAr);
    const president = currentLang === 'ar' ? club.presidentAr : club.presidentEn;
    const achievements = club.achievements || [];
    const achList = achievements.map(a => `<li>${a}</li>`).join('');
    return `
      <div class="club-card club-card-detailed" data-aos="fade-up">
        <div class="club-card-img">
          <img src="${club.image}" alt="${name}" loading="lazy" />
          <div class="club-icon-overlay"><i class="fas ${club.icon}"></i></div>
        </div>
        <div class="club-card-body">
          <h3>${name}</h3>
          <p class="club-desc">${desc}</p>
          <div class="club-meta">
            <span><i class="fas fa-user-tie"></i> ${president || ''}</span>
            <span><i class="fas fa-users"></i> ${club.members || ''} ${currentLang === 'ar' ? 'عضو' : 'members'}</span>
            <span><i class="fas fa-calendar-check"></i> ${club.meetings || ''}</span>
          </div>
          ${achievements.length ? `<ul class="club-achievements">${achList}</ul>` : ''}
          <a href="#services" class="btn btn-primary btn-sm">${t.join || 'انضم الآن'}</a>
        </div>
      </div>
    `;
  }).join('');

  AOS?.refresh();
}

// ========== Sports (Full Details) ==========
function initSports() {
  const grid = document.getElementById('sportsGrid');
  if (!grid) return;

  grid.innerHTML = sportsData.map(sport => {
    const name = currentLang === 'ar' ? sport.nameAr : sport.nameEn;
    const desc = sport.descAr && sport.descEn ? (currentLang === 'ar' ? sport.descAr : sport.descEn) : (getNestedValue(i18n[currentLang], sport.descKey) || sport.descAr);
    const coach = sport.coachAr || '';
    const achievements = (sport.achievements || []).map(a => `<li><i class="fas fa-trophy"></i> ${a}</li>`).join('');
    const img = sport.image || `https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500&h=350&fit=crop`;
    return `
      <div class="sport-card sport-card-detailed" data-aos="fade-up">
        <div class="sport-card-img">
          <img src="${img}" alt="${name}" loading="lazy" />
          <div class="sport-icon-overlay"><i class="fas ${sport.icon}"></i></div>
        </div>
        <div class="sport-card-body">
          <h3>${name}</h3>
          <p>${desc}</p>
          ${coach ? `<p class="sport-coach"><i class="fas fa-user"></i> ${currentLang === 'ar' ? 'المدرب:' : 'Coach:'} ${coach}</p>` : ''}
          ${achievements ? `<ul class="sport-achievements">${achievements}</ul>` : ''}
        </div>
      </div>
    `;
  }).join('');

  AOS?.refresh();
}

// ========== Gallery ==========
function initGallery() {
  const grid = document.getElementById('galleryGrid');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxTitle = document.getElementById('lightboxTitle');
  if (!grid) return;

  grid.innerHTML = galleryImages.map((img, i) => {
    const title = currentLang === 'ar' ? img.titleAr : img.titleEn;
    return `
      <div class="gallery-item" data-aos="fade-up" data-index="${i}">
        <img src="${img.thumb}" alt="${title}" loading="lazy" />
        <div class="gallery-overlay"><span>${title}</span></div>
      </div>
    `;
  }).join('');

  grid.querySelectorAll('.gallery-item').forEach((item, i) => {
    item.addEventListener('click', () => {
      if (lightbox && lightboxImg) {
        lightboxImg.src = galleryImages[i].full;
        lightboxImg.alt = galleryImages[i].titleAr;
        if (lightboxTitle) lightboxTitle.textContent = currentLang === 'ar' ? galleryImages[i].titleAr : galleryImages[i].titleEn;
        lightbox.classList.add('active');
      }
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', () => lightbox?.classList.remove('active'));
  lightbox?.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.classList.remove('active'); });
}

// ========== FAQs ==========
function initFAQs() {
  const container = document.getElementById('faqsContainer');
  if (!container) return;

  container.innerHTML = faqsData.map((faq, i) => {
    const q = currentLang === 'ar' ? faq.qAr : faq.qEn;
    const a = currentLang === 'ar' ? faq.aAr : faq.aEn;
    return `
      <div class="faq-item" data-aos="fade-up">
        <button class="faq-question" aria-expanded="false" data-faq="${i}">
          <span>${q}</span>
          <i class="fas fa-chevron-down"></i>
        </button>
        <div class="faq-answer">${a}</div>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      container.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
      btn.setAttribute('aria-expanded', !isOpen);
    });
  });

  AOS?.refresh();
}

// ========== Board Members ==========
function initBoardMembers() {
  const grid = document.getElementById('boardGrid');
  if (!grid) return;

  grid.innerHTML = boardMembersData.map((m, i) => {
    const role = currentLang === 'ar' ? m.roleAr : m.roleEn;
    return `
      <div class="card board-card" data-aos="zoom-in" data-aos-delay="${Math.min(i * 50, 200)}">
        <div class="board-avatar"><i class="fas fa-user"></i></div>
        <h4>${m.name}</h4>
        <span>${role}</span>
      </div>
    `;
  }).join('');

  AOS?.refresh();
}

// ========== Committees ==========
function initCommittees() {
  const grid = document.getElementById('committeesGrid');
  if (!grid) return;

  grid.innerHTML = committeesData.map(c => {
    const name = currentLang === 'ar' ? c.nameAr : c.nameEn;
    const desc = currentLang === 'ar' ? c.descAr : c.descEn;
    const secretary = c.secretaryAr ? (currentLang === 'ar' ? c.secretaryAr : c.secretaryEn) : '';
    return `
      <div class="committee-card" data-aos="fade-up">
        <div class="committee-icon"><i class="fas ${c.icon}"></i></div>
        <h4>${name}</h4>
        <p>${desc}</p>
        ${secretary ? `<p class="committee-secretary"><i class="fas fa-user-tie"></i> ${secretary}</p>` : ''}
      </div>
    `;
  }).join('');

  AOS?.refresh();
}

// ========== Services ==========
function initServices() {
  const tabs = document.querySelectorAll('.service-tab');
  const forms = document.querySelectorAll('.service-form');
  const formIdMap = { activity: 'Activity', complaint: 'Complaint', suggestion: 'Suggestion', eventReg: 'EventReg' };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const formKey = tab.getAttribute('data-form');
      const formId = 'form' + (formIdMap[formKey] || formKey);
      tabs.forEach(t => t.classList.remove('active'));
      forms.forEach(f => {
        f.classList.remove('active');
        if (f.id === formId) f.classList.add('active');
      });
      tab.classList.add('active');
    });
  });

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validateForm(form)) return;

      let successDiv = form.querySelector('.form-success');
      if (!successDiv) {
        successDiv = document.createElement('div');
        successDiv.className = 'form-success';
        form.appendChild(successDiv);
      }
      successDiv.textContent = i18n[currentLang]?.services?.success || 'تم الإرسال بنجاح';
      successDiv.style.display = 'block';
      form.reset();
      setTimeout(() => { successDiv.style.display = 'none'; }, 3000);
    });
  });

  populateEventDropdown();
}

function populateEventDropdown() {
  const eventSelect = document.querySelector('#formEventReg select[name="event"]');
  if (!eventSelect) return;
  const placeholder = currentLang === 'ar' ? 'اختر الفعالية' : 'Select Event';
  if (eventSelect.options[0]) eventSelect.options[0].textContent = placeholder;
  while (eventSelect.options.length > 1) eventSelect.remove(1);
  eventsData.forEach(ev => {
    const opt = document.createElement('option');
    opt.value = ev.id;
    opt.textContent = currentLang === 'ar' ? ev.titleAr : ev.titleEn;
    eventSelect.appendChild(opt);
  });
}

function validateForm(form) {
  const required = form.querySelectorAll('[required]');
  let valid = true;
  const t = i18n[currentLang]?.services;

  form.querySelectorAll('.form-error').forEach(el => el.remove());

  required.forEach(input => {
    if (!input.value.trim()) {
      valid = false;
      const err = document.createElement('div');
      err.className = 'form-error';
      err.textContent = t?.required || 'هذا الحقل مطلوب';
      input.parentNode.insertBefore(err, input.nextSibling);
    }
  });
  return valid;
}

// ========== Contact Form ==========
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm(form)) return;

    const successDiv = document.createElement('div');
    successDiv.className = 'form-success';
    successDiv.textContent = i18n[currentLang]?.services?.success || 'تم الإرسال بنجاح';
    form.appendChild(successDiv);
    form.reset();
    setTimeout(() => successDiv.remove(), 3000);
  });
}

// ========== Chatbot ==========
function initChatbot() {
  const toggle = document.getElementById('chatbotToggle');
  const windowEl = document.getElementById('chatbotWindow');
  const closeBtn = document.getElementById('chatbotClose');
  const input = document.getElementById('chatInput');
  const sendBtn = document.getElementById('chatSend');
  const messagesEl = document.getElementById('chatbotMessages');

  if (!toggle || !windowEl) return;

  toggle.addEventListener('click', () => windowEl.classList.toggle('open'));
  closeBtn?.addEventListener('click', () => windowEl.classList.remove('open'));

  async function sendMessage() {
    const text = input?.value?.trim();
    if (!text) return;

    const userDiv = document.createElement('div');
    userDiv.className = 'chat-msg user';
    userDiv.innerHTML = `<p>${escapeHtml(text)}</p>`;
    messagesEl.appendChild(userDiv);
    input.value = '';
    messagesEl.scrollTop = messagesEl.scrollHeight;

    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'chat-msg bot loading';
    loadingDiv.innerHTML = '<span></span><span></span><span></span>';
    messagesEl.appendChild(loadingDiv);
    messagesEl.scrollTop = messagesEl.scrollHeight;

    chatbotHistory.push({ role: 'user', content: text });

    try {
      const response = await fetchGroq(text);
      loadingDiv.remove();
      const botDiv = document.createElement('div');
      botDiv.className = 'chat-msg bot';
      botDiv.innerHTML = `<p>${escapeHtml(response)}</p>`;
      messagesEl.appendChild(botDiv);
      chatbotHistory.push({ role: 'assistant', content: response });
    } catch (err) {
      loadingDiv.remove();
      const errDiv = document.createElement('div');
      errDiv.className = 'chat-msg bot';
      errDiv.innerHTML = `<p>${
        currentLang === 'ar'
          ? 'عذراً، حدث خطأ. لتجربة المساعد محلياً يمكنك إضافة مفتاح Groq API في ملف config.js، أما في بيئة الإنتاج فيُنصح باستخدام خادم خلفي لحماية المفتاح.'
          : 'Sorry, an error occurred. For local testing you can add your Groq API key in config.js. For production, use a backend proxy to keep the key secret.'
      }</p>`;
      messagesEl.appendChild(errDiv);
    }
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  sendBtn?.addEventListener('click', sendMessage);
  input?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  });
}

async function fetchGroq(userMessage) {
  const config = typeof CONFIG !== 'undefined' ? CONFIG : {};
  if (!config.GROQ_API_KEY || config.GROQ_API_KEY === 'YOUR_GROQ_API_KEY_HERE') {
    throw new Error('API key not configured');
  }

  const systemPrompt = currentLang === 'ar'
    ? 'أنت مساعد طلاب جامعة الإسكندرية الأهلية. أجب عن أسئلة الطلاب حول الأنشطة، الفعاليات، الأندية، الفرق الرياضية وخدمات الطلاب. كن مفيداً وودوداً ومحترفاً.'
    : 'You are the student assistant for Alexandria National University. Answer questions about activities, events, clubs, sports teams and student services. Be helpful, friendly and professional.';

  const messages = [
    { role: 'system', content: systemPrompt },
    ...chatbotHistory.slice(-10)
  ];

  const apiUrl = config.GROQ_API_URL || 'https://api.groq.com/openai/v1/chat/completions';
  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${config.GROQ_API_KEY}` },
    body: JSON.stringify({ model: config.GROQ_MODEL || 'openai/gpt-oss-120b', messages })
  });

  if (!res.ok) throw new Error(`API error: ${res.status}`);
  const data = await res.json();
  return data.choices?.[0]?.message?.content || 'No response';
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ========== Event Delegation ==========
document.getElementById('langToggle')?.addEventListener('click', toggleLanguage);
document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);

// ========== AOS ==========
function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 600, offset: 80, once: true });
  }
}

// Add btn-sm utility
const style = document.createElement('style');
style.textContent = '.btn-sm { padding: 0.5rem 1rem; font-size: 0.9rem; }';
document.head.appendChild(style);
