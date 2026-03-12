/**
 * Alexandria National University Student Union - Main Script
 * Professional student union website with full data
 */

// ========== EVENTS DATA (Full Details) ==========
const eventsData = [
  {
    id: 1,
    titleAr: 'الإفطار الرمضاني السنوي',
    titleEn: 'Annual Ramadan Iftar',
    descAr: `رمضان دايمًا بيكون أحلى لما يجمعنا… واللمة الحلوة هي اللي بتصنع أجمل ذكريات الشهر الكريم.  
📅 الموعد: الجمعة 13/3  
📍 المكان: مقر الجامعة الرئيسي بأبيس`,
    descEn: `Ramadan is always better when it brings us together… Sweet gatherings create the most beautiful memories of the holy month.  
📅 Date: Friday, 13/3  
📍 Venue: University Main Campus, Abis`,
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
    titleAr: 'الدورة الرمضانية لخماسيات كرة القدم',
    titleEn: 'Ramadan Five-a-side Football Tournament',
    descAr: `يسر اللجنة الرياضية الإعلان عن الدورة الرمضانية لخماسيات كرة القدم لطلاب الجامعة.  

نظام البطولة:
- دور المجموعات: الأحد والإثنين 15 و16 مارس 2026
- دور خروج المغلوب: الثلاثاء والأربعاء 17 و18 مارس 2026
- كل فريق: 5 لاعبين (4 + حارس) + 2 احتياطي اختياري
- عدد الفرق: 16 فريق
- اللعب بنظام المجموعات ثم خروج المغلوب  
📍 الملاعب: استاد الجامعة`,
    descEn: `The Sports Committee is pleased to announce the Ramadan Five-a-side Football Tournament for university students.  

Tournament format:
- Group stage: Sunday & Monday, 15-16 March 2026
- Knockout stage: Tuesday & Wednesday, 17-18 March 2026
- Each team: 5 players (4 + goalkeeper) + 2 optional substitutes
- Total teams: 16
- Tournament played in group stage then knockout  
📍 Venue: University Stadium`,
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
    titleAr: 'تهنئة شهد حسام',
    titleEn: 'Congratulations to Shahd Hossam',
    descAr: `اتحاد طلاب الجامعة يهنئ الطالبة شهد حسام جعفر على إنجازها الرائع في رياضة السباحة بالزعانف، في محاكاة دورة الألعاب الإفريقية ودورة الشهيد الرفاعي رقم ٥٣ للجامعات:  

ميدالية فضية – ٤٠٠ متر مونو  
ميدالية فضية – ٢٠٠ متر مونو`,
    descEn: `The Alexandria National University Student Union congratulates student Shahd Hossam Gaafar for her outstanding achievement in fin swimming, in the African Games Simulation and the 53rd Al-Rifai Memorial University Games:  

Silver medal – 400m Mono  
Silver medal – 200m Mono`,
    date: '',
    time: '',
    locationAr: '',
    locationEn: '',
    category: 'achievements',
    capacity: 1,
    image: 'تهنيه شهد.jpg',
    isPast: true
  },
  {
    id: 4,
    titleAr: 'زيارة مستشفى سرطان الأطفال 57357',
    titleEn: 'Visit to Children’s Cancer Hospital 57357',
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
    image: 'زياره الطلاب لمستشفي.jpg',
    isPast: true
  },
  {
    id: 5,
    titleAr: 'مسابقة بادل',
    titleEn: 'Padel Competition',
    descAr: `يسر اللجنة الرياضية الإعلان عن مسابقة البادل لجميع طلاب الجامعة. شاركوا معنا لتستمتعوا بأجواء رياضية رائعة وتنافس ممتع بين الطلاب.`,
    descEn: `The Sports Committee is pleased to announce the Padel competition for all university students. Join us for a fun and competitive sports experience.`,
    date: '',
    time: '',
    locationAr: '',
    locationEn: '',
    category: 'sports',
    capacity: 64,
    image: 'مسابقه البادل.jpg',
    isPast: true
  },
  {
    id: 6,
    titleAr: 'تكريم المنظمين في الأنشطة الطلابية',
    titleEn: 'Honoring the Student Activity Organizers',
    descAr: `يسر اتحاد طلاب جامعة الإسكندرية الأهلية أن يقدّم أسمى آيات الشكر والتقدير لجميع المنظمين والمساهمين في إنجاح الأنشطة والفعاليات الطلابية المختلفة.  
جهودكم المتميزة ووقتكم المبذول ساهموا في خلق بيئة طلابية مليئة بالحيوية والإبداع.  

📅 موعد التكريم: سيتم الإعلان عنه قريبًا  
📍 المكان: مقر الجامعة الرئيسي`,
    descEn: `The Alexandria National University Student Union is pleased to extend its sincere gratitude and appreciation to all organizers and contributors who made the student activities and events successful.  
Your outstanding efforts and dedicated time have helped create a vibrant and creative student environment.  

📅 Award Date: To be announced soon  
📍 Venue: University Main Campus`,
    date: '',
    time: '',
    locationAr: 'مقر الجامعة الرئيسي',
    locationEn: 'University Main Campus',
    category: 'awards',
    capacity: 100,
    image: 'تكريم المنظمين.jpg',
    isPast: true
  },
  {
    id: 7,
    titleAr: 'ماراثون جامعة الإسكندرية الأهلية',
    titleEn: 'Alexandria National University Marathon',
    descAr: `ماراثون جري تنظمه جامعة الإسكندرية الأهلية بمشاركة طلاب من مختلف الكليات، لنشر روح الرياضة والتنافس الإيجابي بين الطلاب.`,
    descEn: `A running marathon organized by Alexandria National University with students from different faculties, promoting sports and positive competition among students.`,
    date: '',
    time: '',
    locationAr: '',
    locationEn: '',
    category: 'sports',
    capacity: 0,
    image: 'images/499787763_690456250586971_8141816869085428997_n.jpg',
    isPast: true
  },
  {
    id: 8,
    titleAr: 'رحلة الأقصر وأسوان',
    titleEn: 'Luxor & Aswan Trip',
    descAr: `رحلة طلابية إلى مدينتي الأقصر وأسوان للتعرف على الحضارة المصرية القديمة، وزيارة أهم المعابد والمعالم السياحية، في أجواء مليئة بالمتعة والمعرفة.`,
    descEn: `A student trip to Luxor and Aswan to explore ancient Egyptian civilization and visit major temples and tourist attractions in a fun and educational atmosphere.`,
    date: '',
    time: '',
    locationAr: 'الأقصر وأسوان',
    locationEn: 'Luxor & Aswan',
    category: 'trips',
    capacity: 0,
    image: 'images/607179885_874325598866701_5623277150375605247_n.jpg',
    isPast: true
  },
  {
    id: 9,
    titleAr: 'اختبارات اللجنة الفنية',
    titleEn: 'Arts Committee Auditions',
    descAr: `اختبارات اللجنة الفنية لاختيار المواهب في الغناء، التمثيل، العزف، والرسم، تمهيداً لتشكيل فرق وأنشطة فنية تمثل الجامعة في الفعاليات المختلفة.`,
    descEn: `Arts committee auditions to select talents in singing, acting, music, and drawing, in preparation for forming artistic teams to represent the university in various events.`,
    date: '',
    time: '',
    locationAr: 'مقر الجامعة الرئيسي',
    locationEn: 'University Main Campus',
    category: 'arts',
    capacity: 0,
    image: 'images/598681471_122112367407098160_5209031001934599676_n.jpg',
    isPast: true
  },
  {
    id: 10,
    titleAr: 'زيارة لمعرض الكتاب',
    titleEn: 'Visit to the Book Fair',
    descAr: `زيارة طلابية لمعرض الكتاب للتعرف على دور النشر المختلفة، واقتناء الكتب في مجالات علمية وثقافية متنوعة، وتشجيع الطلاب على القراءة والاطلاع.`,
    descEn: `A student visit to the Book Fair to explore different publishers, buy books in various scientific and cultural fields, and encourage students to read and learn.`,
    date: '',
    time: '',
    locationAr: 'معرض الكتاب',
    locationEn: 'Book Fair',
    category: 'trips',
    capacity: 0,
    image: 'images/608650692_878153645150563_4598797114810950441_n(1).jpg',
    isPast: true
  },
  {
    id: 11,
    titleAr: 'عرض مسرحية كابوس في العسل',
    titleEn: '"Nightmare in Honey" Theatre Show',
    descAr: `يسر فريق مسرح جامعة الإسكندرية الأهلية أن يعلن عن مشاركته في مهرجان المتنوع لجامعة الإسكندرية بأولى عروضه في المونودراما "كابوس في العسل" على خشبة مسرح الجامعة يوم السبت الموافق ٢٢/٢/٢٠٢٥ في تمام الساعة ٢:٣٠. 

تمثيل: سما وائل  
ديكور: زينة عمر  
ملابس ومكياج: سما وائل  
موسيقى: يوسف هشام  
تصميم بوستر: يوسف هشام  
تأليف: كيرلس صموئيل  
إخراج: مارينا منير.`,
    descEn: `Alexandria National University theatre team participates in Alexandria University’s "Motanawae" festival with its first monodrama show "Nightmare in Honey" on the university theatre stage on Saturday 22/02/2025 at 2:30 PM. 

Cast: Sama Wael  
Set design: Zeina Omar  
Costumes & makeup: Sama Wael  
Music: Youssef Hisham  
Poster design: Youssef Hisham  
Writer: Kyrillos Samuel  
Director: Marina Mounir.`,
    date: '2025-02-22',
    time: '14:30',
    locationAr: 'مسرح جامعة الإسكندرية الأهلية',
    locationEn: 'Alexandria National University Theatre',
    category: 'arts',
    capacity: 0,
    image: 'مسرح.jpg',
    isPast: true
  },
  {
    id: 12,
    titleAr: 'عرض مكرونة بالصلصة',
    titleEn: '"Pasta with Sauce" Sketch Show',
    descAr: `يسر فريق مسرح جامعة الإسكندرية الأهلية أن يعلن عن مشاركته في مسابقة جامعة الإسكندرية للاسكتشات والعروض الصغيرة بأولى عروضه "مكرونة بالصلصة" في مسابقة الاسكتشات يوم الأحد الموافق 9/2/2025 في تمام الساعة العاشرة صباحاً على خشبة مسرح الجامعة. 

مُعد موسيقي: يوسف هشام  
منفذ موسيقي: جنا خليل  
ديكور: ريتاج محمد، زينة عمرو  
مكياج: ريتاج محمد، كارين سمعان  
ملابس: سارة عطالله  
بوستر: يوسف هشام  
مساعد مخرج: مارينا منير  
مخرج منفذ: سما وائل  
تأليف: لوجين كريم  
إخراج: يوسف عبدالستار.`,
    descEn: `Alexandria National University theatre team participates in Alexandria University’s sketch and short shows competition with its first show "Pasta with Sauce" on Sunday 09/02/2025 at 10:00 AM on the university theatre stage. 

Music arranger: Youssef Hisham  
Music operator: Jana Khalil  
Set design: Retaj Mohamed, Zeina Amr  
Makeup: Retaj Mohamed, Karen Samaan  
Costumes: Sara Attallah  
Poster: Youssef Hisham  
Assistant director: Marina Mounir  
Executive director: Sama Wael  
Writer: Logyn Kareem  
Director: Youssef Abdel Sattar.`,
    date: '2025-02-09',
    time: '10:00',
    locationAr: 'مسرح جامعة الإسكندرية الأهلية',
    locationEn: 'Alexandria National University Theatre',
    category: 'arts',
    capacity: 0,
    image: 'مسرح س.jpg',
    isPast: true
  },
  {
    id: 13,
    titleAr: 'العرض المسرحي حوش اللي وقع منك',
    titleEn: '"Hosh Elly Wiʼeʼ Menak" Theatre Show',
    descAr: `تحت رعاية الأستاذ الدكتور/ عبدالعزيز قنصوة رئيس جامعة الإسكندرية، وتحت رعاية الأستاذ الدكتور/ محمود الخشن المشرف الأكاديمي على جامعة الإسكندرية الأهلية، وتحت إشراف الأستاذ الدكتور/ تامر حلمي مدير البرامج الهندسية ومستشار اتحاد طلاب الجامعة.

يقدم فريق جامعة الإسكندرية الأهلية للفنون المسرحية العرض المسرحي "حوش اللي وقع منك".

إعداد وإخراج: معتز عجمي.`,
    descEn: `Under the patronage of Prof. Dr. Abdelaziz Konsowa, President of Alexandria University, Prof. Dr. Mahmoud El-Khoshn, Academic Supervisor of Alexandria National University, and Prof. Dr. Tamer Helmy, Engineering Programs Director and Student Union Advisor.

The Alexandria National University theatre team presents the stage play "Hosh Elly Wiʼeʼ Menak".

Written and directed by: Moataz Agamy.`,
    date: '',
    time: '',
    locationAr: 'مسرح جامعة الإسكندرية الأهلية',
    locationEn: 'Alexandria National University Theatre',
    category: 'arts',
    capacity: 0,
    image: 'مسح.jpg',
    isPast: true
  },
  {
    id: 14,
    titleAr: 'تكريم منظمين ماراثون الجامعة',
    titleEn: 'Honoring the University Marathon Organizers',
    descAr: `تكريم منظمين ماراثون جامعة الإسكندرية الأهلية تقديراً لجهودهم في التنظيم، والمتابعة، وضمان خروج الفعالية في أفضل صورة لجميع المشاركين.`,
    descEn: `Honoring the organizers of Alexandria National University Marathon in appreciation of their efforts in organizing, coordinating, and ensuring the event runs perfectly for all participants.`,
    date: '',
    time: '',
    locationAr: 'مقر الجامعة الرئيسي',
    locationEn: 'University Main Campus',
    category: 'awards',
    capacity: 0,
    image: 'تكريم منظمين المارثون.jpg',
    isPast: true
  },
  {
    id: 15,
    titleAr: 'تجهيز وجبات رمضان للمحتاجين',
    titleEn: 'Preparing Ramadan Meals for the Needy',
    descAr: `مبادرة طلابية لتجهيز وتوزيع وجبات إفطار رمضانية على الأسر والمحتاجين، تعزيزاً لروح التكافل الاجتماعي في شهر رمضان.`,
    descEn: `A student initiative to prepare and distribute Ramadan iftar meals to families and people in need, strengthening the spirit of social solidarity during the holy month.`,
    date: '',
    time: '',
    locationAr: 'مقر الجامعة الرئيسي',
    locationEn: 'University Main Campus',
    category: 'community',
    capacity: 0,
    image: 'تكريم الفايزين بالمارثون.jpg',
    isPast: true
  },
  {
    id: 16,
    titleAr: 'رحلة دهب',
    titleEn: 'Dahab Trip',
    descAr: `رحلة طلابية إلى مدينة دهب للاستمتاع بالشواطئ والأنشطة الترفيهية والبحر الأحمر، في أجواء تجمع بين المتعة والاسترخاء.`,
    descEn: `A student trip to Dahab to enjoy beaches, Red Sea activities and entertainment in a relaxing and fun atmosphere.`,
    date: '',
    time: '',
    locationAr: 'دهب',
    locationEn: 'Dahab',
    category: 'trips',
    capacity: 0,
    image: 'رحله دهب.jpg',
    isPast: true
  },
  {
    id: 17,
    titleAr: 'رحلة الفيوم',
    titleEn: 'Fayoum Trip',
    descAr: `رحلة لجنة الشئون الاجتماعية والرحلات إلى الفيوم، للاستمتاع بالطبيعة والأنشطة المختلفة، في إطار تعزيز الروابط بين الطلاب خارج إطار الدراسة.`,
    descEn: `A Social & Trips Committee journey to Fayoum, enjoying nature and various activities while strengthening student bonds outside the classroom.`,
    date: '',
    time: '',
    locationAr: 'الفيوم',
    locationEn: 'Fayoum',
    category: 'trips',
    capacity: 0,
    image: 'رحله الفيوم.jpg',
    isPast: true
  },
  {
    id: 18,
    titleAr: 'الاحتفال باليوم العالمي لصحة الفم والأسنان',
    titleEn: 'Dentistry Program at Alexandria National University Celebrates World Oral and Dental Health Day',
    descAr: `برعاية الأستاذ الدكتور عبدالعزيز قنصوة رئيس جامعة الإسكندرية، وتحت إشراف وتوجيه الدكتور محمود الخشن المشرف الأكاديمي على جامعة الإسكندرية الأهلية، نظم برنامج طب الأسنان بجامعة الإسكندرية الأهلية بالتعاون مع كلية طب الأسنان جامعة الإسكندرية يوماً للتوعية بصحة الفم والأسنان لطلاب الجامعة الأهلية بأبيس، بمناسبة اليوم العالمي لصحة الفم والأسنان في 20 مارس.

شارك في الفعالية حوالي 600 طالب وطالبة من طلاب الجامعة الأهلية، وقدم أعضاء هيئة التدريس والهيئة المعاونة بكلية طب الأسنان بجامعة الإسكندرية المادة العلمية للطلاب، كما تم توزيع عينات من فرش ومعجون الأسنان على المشاركين.`,
    descEn: `Under the auspices of Professor Dr. Abdelaziz Konsowa, President of Alexandria University, and the supervision and guidance of Dr. Mahmoud El-Kheshen, Academic Supervisor of Alexandria National University, the Dentistry Program at Alexandria National University, in cooperation with the Faculty of Dentistry, Alexandria University, celebrated World Oral Health Day, which comes on the 20th of March, by organizing a day to raise awareness of oral health and dental care for students at the National University in Abis, in which about 600 students from the Alexandria National University participated.

Dentistry program students participated in organizing the day, and a group of the supporting staff and faculty members at Alexandria University presented the scientific material to the students, and some samples of toothbrushes and toothpaste were distributed to the participants.`,
    date: '',
    time: '',
    locationAr: 'مقر جامعة الإسكندرية الأهلية بأبيس',
    locationEn: 'Alexandria National University Campus, Abis',
    category: 'community',
    capacity: 600,
    image: 'dassa1_files/433487161_388347897476968_3850383984688903316_n.webp',
    isPast: true
  },
  {
    id: 19,
    titleAr: 'تهنئة DASSA ANU بالفوز في مسابقة اليوم العالمي لصحة الفم',
    titleEn: 'Congratulations to DSSA-ANU on Winning the WOHD National Contest',
    descAr: `بكل فخر وسعادة، تتقدم أسرة طب الأسنان بجامعة الإسكندرية الأهلية DASSA-ANU بالتهنئة لطلابها على الفوز في المسابقة القومية
التي نظمتها لجنة الـ Prophylaxis في DSSA-EGYPT احتفالاً باليوم العالمي لصحة الفم خلال الفترة من 1 حتى 31 مارس،
بالاشتراك مع DSSA-NUB (جامعة النهضة ببني سويف).

سيتم تتويج الفريق في المؤتمر السنوي القادم في أغسطس 2024، مع جوائز خاصة مقدمة من DSSA-EGYPT خلال الشهور القادمة.`,
    descEn: `With all the pride we have, it is our honor to congratulate:

DSSA-NUB Nahda University in Beni Suef
DSSA-ANU Alexandria National University

on winning the national contest organized by the Prophylaxis committee in DSSA-EGYPT to celebrate the World Oral Health Day starting from the 1st till the 31st of March.

They will be crowned in the next Annual congress held in August 2024, as well as having special prizes from DSSA-EGYPT over the next few months.`,
    date: '',
    time: '',
    locationAr: 'DSSA-EGYPT',
    locationEn: 'DSSA-EGYPT',
    category: 'awards',
    capacity: 0,
    image: 'dassa1_files/468137466_17948872811884199_2589658523087673072_n.jpg',
    isPast: true
  },
  {
    id: 20,
    titleAr: 'اليوم العلمي الأول لبرنامج طب الأسنان',
    titleEn: 'First Scientific Day of the Dental Program',
    descAr: `لقطات من اليوم العلمي الأول لبرنامج طب الأسنان بجامعة الإسكندرية الأهلية، الذي ركز على تمكين الطلاب لمواجهة تحديات وابتكارات المستقبل في طب الأسنان
من خلال محاضرات علمية وجلسات تفاعلية.`,
    descEn: `Highlights from the first Scientific Day of the Dental Program at Alexandria National University, empowering students for tomorrow's challenges and innovations in dentistry.`,
    date: '',
    time: '',
    locationAr: 'مقر جامعة الإسكندرية الأهلية',
    locationEn: 'Alexandria National University Campus',
    category: 'academic',
    capacity: 0,
    image: 'dassa1_files/649351894_17934711738037012_5637479264971328177_n.webp',
    isPast: true
  },
  {
    id: 21,
    titleAr: 'حملة Mouth Cancer Action Month',
    titleEn: 'Mouth Cancer Action Month Highlights',
    descAr: `حملة Mouth Cancer Action Month نظمها فريق DSSA-ANU عبر Booth توعوي بجامعة الإسكندرية الأهلية من 27 إلى 30 نوفمبر 2024،
حيث تفاعل طلاب الكليات المختلفة مع الحملة واكتسبوا معلومات مهمة عن صحة الفم وأهمية الاكتشاف المبكر لسرطان الفم، تحت إشراف إدارة برنامج طب الأسنان.`,
    descEn: `Mouth Cancer Action Month Highlights: the DSSA-ANU team successfully ran an awareness booth at Alexandria National University from November 27th to 30th, 2024.
Students from various faculties engaged with the campaign and gained valuable knowledge about oral health and the importance of early detection for mouth cancer.`,
    date: '2024-11-27',
    time: '',
    locationAr: 'مقر جامعة الإسكندرية الأهلية',
    locationEn: 'Alexandria National University Campus',
    category: 'community',
    capacity: 0,
    image: 'dassa1_files/649237956_17927485653240382_5336543923033072183_n.webp',
    isPast: true
  },
  {
    id: 22,
    titleAr: 'ورشة Problem Solving لطلاب المستوى الثاني',
    titleEn: 'Problem Solving Workshop – Level 2 FCDS',
    descAr: `نعلن عن أول سيشن Problem Solving لهذا الموسم لطلاب المستوى الثاني FCDS ضمن أنشطة أسرة Pivots،
لتقوية مهارات التفكير المنطقي وحل المشكلات في البرمجة.`,
    descEn: `We are happy to announce our first Problem Solving workshop this season for Level 2 FCDS students, helping them improve logical thinking and programming problem-solving skills.`,
    date: '',
    time: '',
    locationAr: 'مقر جامعة الإسكندرية الأهلية',
    locationEn: 'Alexandria National University Campus',
    category: 'academic',
    capacity: 0,
    image: 'pb.jpg',
    isPast: true
  },
  {
    id: 23,
    titleAr: 'فعالية Ping Pong لطلاب Pivots',
    titleEn: 'Pivots Ping Pong Activity',
    descAr: `فعالية Ping Pong ترفيهية لطلاب أسرة Pivots لخلق جو تفاعلي وكسر الروتين،
مع مسابقات خفيفة تجمع بين الترفيه وروح الفريق.`,
    descEn: `A fun Pivots Ping Pong activity for students to relax, connect, and enjoy friendly matches in a team spirit atmosphere.`,
    date: '',
    time: '',
    locationAr: 'مقر جامعة الإسكندرية الأهلية',
    locationEn: 'Alexandria National University Campus',
    category: 'sports',
    capacity: 0,
    image: 'ping pong.jpg',
    isPast: true
  },
  {
    id: 25,
    titleAr: 'شراكة مع GDG Damanhour',
    titleEn: 'Partnership with GDG Damanhour',
    descAr: `نعلن عن شراكتنا مع GDG Damanhour كأحد الشركاء التقنيين لهذا الموسم، لدعم طلاب أسرة Pivots بفرص أكبر في الفعاليات التقنية والمجتمع البرمجي.`,
    descEn: `We are happy to announce our partnership with GDG Damanhour as a tech community partner this season, supporting Pivots students with more opportunities in tech events and developer communities.`,
    date: '',
    time: '',
    locationAr: 'GDG Damanhour & ANU',
    locationEn: 'GDG Damanhour & ANU',
    category: 'academic',
    capacity: 0,
    image: 'damnhur.jpg',
    isPast: true
  },
  {
    id: 28,
    titleAr: 'رحلة دير سمعان',
    titleEn: 'Deir Samaan Monastery Trip',
    descAr: `رحلة طلابية إلى دير سمعان لزيارة أحد المعالم الدينية والتاريخية الهامة، والاستمتاع بالأجواء الروحانية والطبيعة المحيطة بالمكان.`,
    descEn: `A student trip to Deir Samaan Monastery to visit an important religious and historical site and enjoy the spiritual atmosphere and surrounding nature.`,
    date: '',
    time: '',
    locationAr: 'دير سمعان',
    locationEn: 'Deir Samaan Monastery',
    category: 'trips',
    capacity: 0,
    image: 'ير سمعان.jpg',
    isPast: true
  },
  {
    id: 29,
    titleAr: 'رحلة دير سانت كاترين 2025',
    titleEn: 'Saint Catherine Monastery Trip 2025',
    descAr: `رحلة جديدة إلى دير سانت كاترين لعام 2025، لاستكشاف التاريخ العريق للمنطقة وتسلق الجبل والاستمتاع بمشاهده شروق الشمس المميزة.`,
    descEn: `A new 2025 trip to Saint Catherine Monastery to explore the area’s rich history, hike the mountain and enjoy its iconic sunrise view.`,
    date: '2025-01-01',
    time: '',
    locationAr: 'سانت كاترين – سيناء',
    locationEn: 'Saint Catherine, Sinai',
    category: 'trips',
    capacity: 0,
    image: 'سانت كاترين 2025.jpg',
    isPast: true
  }
];

// ========== CLUBS DATA (Full Details) ==========
const clubsData = [
  {
    id: 7,
    icon: 'fa-users',
    nameAr: 'أسرة ESP ANU – صيدلة',
    nameEn: 'ESP ANU Pharmacy Family',
    descAr: 'أسرة طلاب كلية الصيدلة (Community-based)، تهتم بالأنشطة العلمية، التوعوية والخدمة المجتمعية، إلى جانب الأنشطة الاجتماعية والثقافية.',
    descEn: 'Community-based student family of the Faculty of Pharmacy, focusing on scientific, awareness and community service activities, as well as social and cultural events.',
    image: 'espf anu.jpg',
    presidentAr: '',
    presidentEn: '',
    meetings: '',
    requirements: '',
    members: 0,
    achievements: []
  },
  {
    id: 8,
    icon: 'fa-tooth',
    nameAr: 'أسرة DASSA ANU – طب أسنان',
    nameEn: 'DASSA ANU Dentistry Family',
    descAr: 'أسرة طلاب كلية طب الأسنان، تهتم بالأنشطة العلمية، الزيارات الميدانية وخدمة المجتمع، وتعتبر من أكثر الأسر نشاطاً وتميزاً.',
    descEn: 'One of the most active and distinguished student families in the Faculty of Dentistry, focusing on scientific activities, field visits and community service.',
    image: 'Dassa  logo.jpg',
    presidentAr: '',
    presidentEn: '',
    meetings: '',
    requirements: '',
    members: 0,
    achievements: []
  },
  {
    id: 10,
    icon: 'fa-laptop-code',
    nameAr: 'أسرة Pivots – حاسبات وعلوم وعلوم بيانات',
    nameEn: 'Pivots CS & Data Family',
    descAr: `إحدى أقوى الأسر في كليات الحاسبات وعلوم البيانات والعلوم، تركز على البرمجة، الذكاء الاصطناعي، المسابقات التقنية والمشروعات العملية.

الهيكل القيادي:
KHALED GHALWASH – President
AHMED SABRY – Media Head
AHMED GHAZAL – Media Co-Head
MARWAN KHALED – PR & HR Head
RAWAN MOHAMED – OC Head
MOSTAFA ELSAYED – Educational Head
ZEYAD MOHAMED – Educational Co-Head
AHMED METWALLY – Entertainment Head
MOHAMED HANY – Entertainment Co-Head`,
    descEn: `One of the strongest families for Computer Science, Data Science and Science students, focusing on programming, AI, tech competitions and hands-on projects.

Leadership structure:
KHALED GHALWASH – President
AHMED SABRY – Media Head
AHMED GHAZAL – Media Co-Head
MARWAN KHALED – PR & HR Head
RAWAN MOHAMED – OC Head
MOSTAFA ELSAYED – Educational Head
ZEYAD MOHAMED – Educational Co-Head
AHMED METWALLY – Entertainment Head
MOHAMED HANY – Entertainment Co-Head`,
    image: 'pivots.jpg',
    presidentAr: '',
    presidentEn: '',
    meetings: '',
    requirements: '',
    members: 0,
    achievements: []
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
    image: 'كره قدم.jpg',
    coachAr: 'محمد الشناوي',
    achievements: ['بطل الجامعات الخاصة 2023-2024', 'وصيف بطولة الإسكندرية']
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
    image: 'images/485792050_646359458329984_6980519911529053821_n.jpg',
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
  },
  {
    id: 6,
    icon: 'fa-table-tennis',
    nameAr: 'فريق البادل',
    nameEn: 'Padel Team',
    descAr: 'فريق البادل الجامعي يشارك في البطولات والمنافسات الودية، مع تدريبات منتظمة لرفع اللياقة والمهارات.',
    descEn: 'University padel team competing in tournaments and friendly matches, with regular training to develop skills and fitness.',
    image: 'فريق البادل.jpg',
    coachAr: '',
    achievements: []
  }
];

// ========== GALLERY (Professional Photos) ==========
const galleryImages = [
  { thumb: 'images/499787763_690456250586971_8141816869085428997_n.jpg', full: 'images/499787763_690456250586971_8141816869085428997_n.jpg', titleAr: 'ماراثون الجامعة', titleEn: 'University Marathon' },
  { thumb: 'مسرح.jpg', full: 'مسرح.jpg', titleAr: 'عرض كابوس في العسل', titleEn: '"Nightmare in Honey" Show' },
  { thumb: 'مسرح س.jpg', full: 'مسرح س.jpg', titleAr: 'عرض مكرونة بالصلصة', titleEn: '"Pasta with Sauce" Show' },
  { thumb: 'كره قدم.jpg', full: 'كره قدم.jpg', titleAr: 'فريق كرة القدم', titleEn: 'Football Team' },
  { thumb: 'فريق المسرح واللجنه لفنيه.jpg', full: 'فريق المسرح واللجنه لفنيه.jpg', titleAr: 'فريق المسرح واللجنة الفنية', titleEn: 'Theatre & Arts Committee Team' },
  { thumb: 'مسح.jpg', full: 'مسح.jpg', titleAr: 'العرض المسرحي حوش اللي وقع منك', titleEn: '"Hosh Elly Wiʼeʼ Menak" Show' },
  { thumb: 'فريق البادل.jpg', full: 'فريق البادل.jpg', titleAr: 'فريق البادل', titleEn: 'Padel Team' },
  { thumb: 'تكريم منظمين المارثون.jpg', full: 'تكريم منظمين المارثون.jpg', titleAr: 'تكريم منظمين ماراثون الجامعة', titleEn: 'Marathon Organizers Award' },
  { thumb: 'رحله دهب.jpg', full: 'رحله دهب.jpg', titleAr: 'رحلة دهب', titleEn: 'Dahab Trip' },
  { thumb: 'رحله الفيوم.jpg', full: 'رحله الفيوم.jpg', titleAr: 'رحلة الفيوم', titleEn: 'Fayoum Trip' },
  { thumb: 'رله الفيوم 2.jpg', full: 'رله الفيوم 2.jpg', titleAr: 'رحلة الفيوم (صورة ٢)', titleEn: 'Fayoum Trip (Photo 2)' },
  { thumb: 'تكريم الفايزين بالمارثون.jpg', full: 'تكريم الفايزين بالمارثون.jpg', titleAr: 'تكريم الفائزين بالماراثون', titleEn: 'Honoring Marathon Winners' },
  { thumb: 'dassa1_files/433487161_388347897476968_3850383984688903316_n.webp', full: 'dassa1_files/433487161_388347897476968_3850383984688903316_n.webp', titleAr: 'اليوم العالمي لصحة الفم والأسنان', titleEn: 'World Oral and Dental Health Day Event' },
  { thumb: 'dassa1_files/468137466_17948872811884199_2589658523087673072_n.jpg', full: 'dassa1_files/468137466_17948872811884199_2589658523087673072_n.jpg', titleAr: 'فوز DASSA ANU في مسابقة اليوم العالمي لصحة الفم', titleEn: 'DSSA-ANU Winning the WOHD National Contest' },
  { thumb: 'dassa1_files/649351894_17934711738037012_5637479264971328177_n.webp', full: 'dassa1_files/649351894_17934711738037012_5637479264971328177_n.webp', titleAr: 'اليوم العلمي الأول لبرنامج طب الأسنان', titleEn: 'First Scientific Day of the Dental Program' },
  { thumb: 'dassa1_files/649237956_17927485653240382_5336543923033072183_n.webp', full: 'dassa1_files/649237956_17927485653240382_5336543923033072183_n.webp', titleAr: 'حملة Mouth Cancer Action Month', titleEn: 'Mouth Cancer Action Month Highlights' },
  { thumb: 'pb work shop.jpg', full: 'pb work shop.jpg', titleAr: 'ورشة Problem Solving (لقطة ١)', titleEn: 'Problem Solving Workshop (Shot 1)' },
  { thumb: 'pb workshop.jpg', full: 'pb workshop.jpg', titleAr: 'ورشة Problem Solving (لقطة ٢)', titleEn: 'Problem Solving Workshop (Shot 2)' },
  { thumb: 'ping pong.jpg', full: 'ping pong.jpg', titleAr: 'فعالية Ping Pong لطلاب Pivots', titleEn: 'Pivots Ping Pong Activity' },
  { thumb: 'sim.jpg', full: 'sim.jpg', titleAr: 'اليوم التعريفي الأول – SIM & IS', titleEn: 'Orientation Day 1 – SIM & IS' },
  { thumb: 'damnhur.jpg', full: 'damnhur.jpg', titleAr: 'شراكة مع GDG Damanhour', titleEn: 'Partnership with GDG Damanhour' },
  { thumb: 'saint.jpg', full: 'saint.jpg', titleAr: 'رحلة دير سانت كاترين 2024', titleEn: 'Saint Catherine’s Monastery Trip 2024' },
  { thumb: 'kora.jpg', full: 'kora.jpg', titleAr: 'نهائي بطولة الخماسيات لكرة القدم', titleEn: 'Five-a-side Football Tournament Finals' },
  { thumb: 'kor.jpg', full: 'kor.jpg', titleAr: 'لقطة من بطولة الخماسيات', titleEn: 'Five-a-side Tournament Highlight' },
  { thumb: 'persentatin workshop.jpg', full: 'persentatin workshop.jpg', titleAr: 'ورشة مهارات العرض والتقديم', titleEn: 'Presentation Skills Workshop' },
  { thumb: 'gaming workshop.jpg', full: 'gaming workshop.jpg', titleAr: 'ورشة تطوير ألعاب 2D', titleEn: '2D Game Development Workshop' },
  { thumb: 'gaming workshdop.jpg', full: 'gaming workshdop.jpg', titleAr: 'ختام ورشة تطوير الألعاب', titleEn: 'End of Gaming Workshop' },
  { thumb: 'real.jpg', full: 'real.jpg', titleAr: 'شراكة Rally Startup Festival 2024', titleEn: 'Rally Startup Festival 2024 Partnership' },
  { thumb: 'parn.jpg', full: 'parn.jpg', titleAr: 'إعلان شراكة Rally Startup Festival', titleEn: 'Rally Partnership Announcement Visual' },
  { thumb: 'pivots oc team.jpg', full: 'pivots oc team.jpg', titleAr: 'فريق تنظيم Pivots OC', titleEn: 'Pivots OC Organizing Team' },
  { thumb: 'ير سمعان.jpg', full: 'ير سمعان.jpg', titleAr: 'رحلة دير سمعان', titleEn: 'Deir Samaan Monastery Trip' },
  { thumb: 'سانت كاترين 2025.jpg', full: 'سانت كاترين 2025.jpg', titleAr: 'رحلة دير سانت كاترين 2025', titleEn: 'Saint Catherine Monastery Trip 2025' },
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
  { roleAr: 'نائب رئيس الاتحاد', roleEn: 'Vice President', name: 'مايا جوده', image: 'WhatsApp Image 2026-03-12 at 2.15.08 PM.jpeg' },
  { roleAr: 'أمين لجنة الأسر', roleEn: 'Families Committee Secretary', name: 'أحمد محمد بركات', image: 'WhatsApp Image 2026-03-12 at 2.15.12 PM (1).jpeg' },
  { roleAr: 'أمين مساعد لجنة الأسر', roleEn: 'Assistant Families Committee Secretary', name: 'أحمد متولي' },
  { roleAr: 'أمين اللجنة الاجتماعية والرحلات', roleEn: 'Social & Trips Committee Secretary', name: 'زياد محمد', image: 'WhatsApp Image 2026-03-12 at 2.15.11 PM (1).jpeg' },
  { roleAr: 'أمين اللجنة الرياضية', roleEn: 'Sports Committee Secretary', name: 'أحمد محمد السيد جوده', image: 'WhatsApp Image 2026-03-12 at 2.15.13 PM.jpeg' },
  { roleAr: 'أمين مساعد اللجنة الرياضية', roleEn: 'Assistant Sports Committee Secretary', name: 'اسامة علاء', image: 'WhatsApp Image 2026-03-12 at 2.15.09 PM.jpeg' },
  { roleAr: 'أمين اللجنة الثقافية', roleEn: 'Cultural Committee Secretary', name: 'لؤي عزت محمد', image: 'WhatsApp Image 2026-03-12 at 2.15.11 PM (2).jpeg' },
  { roleAr: 'أمين اللجنة الفنية', roleEn: 'Arts Committee Secretary', name: 'مارينا منير ابراهيم', image: 'WhatsApp Image 2026-03-12 at 2.15.08 PM (2).jpeg' },
  { roleAr: 'أمين مساعد اللجنة الفنية', roleEn: 'Assistant Arts Committee Secretary', name: 'محمد تامر الصيرفي' },
  { roleAr: 'أمين اللجنة العلمية', roleEn: 'Scientific Committee Secretary', name: 'خالد وليد غلوش', image: 'WhatsApp Image 2026-03-12 at 2.15.08 PM (1).jpeg' },
  { roleAr: 'أمين لجنة الجوالة', roleEn: 'Scouts Committee Secretary', name: 'عبدالرحمن حسن', image: 'WhatsApp Image 2026-03-12 at 2.15.12 PM.jpeg' },
  { roleAr: 'أمين مساعد لجنة الجوالة', roleEn: 'Assistant Scouts Committee Secretary', name: 'رضوي رضا احمد', image: 'WhatsApp Image 2026-03-12 at 2.14.55 PM.jpeg' }
];

// ========== COMMITTEES ==========
const committeesData = [
  { nameAr: 'لجنة الأسر', nameEn: 'Families Committee', descAr: 'تنظيم أنشطة الأسر الطلابية', descEn: 'Organizing student families activities', icon: 'fa-users', secretaryAr: 'أحمد محمد بركات', secretaryEn: 'Ahmed Mohamed Barakat' },
  { nameAr: 'اللجنة الاجتماعية والرحلات', nameEn: 'Social & Trips Committee', descAr: 'الفعاليات الاجتماعية والرحلات الطلابية', descEn: 'Social events and student trips', icon: 'fa-bus', secretaryAr: 'زياد محمد', secretaryEn: 'Ziad Mohamed' },
  { nameAr: 'اللجنة الرياضية', nameEn: 'Sports Committee', descAr: 'الإشراف على الفرق الرياضية والبطولات', descEn: 'Supervising sports teams and championships', icon: 'fa-trophy', secretaryAr: 'أحمد محمد السيد جوده', secretaryEn: 'Ahmed Mohamed El-Sayed Gawda' },
  { nameAr: 'اللجنة الثقافية', nameEn: 'Cultural Committee', descAr: 'تنظيم المحاضرات والندوات والمعارض الثقافية', descEn: 'Organizing lectures, seminars and cultural exhibitions', icon: 'fa-book-open', secretaryAr: 'لؤي عزت محمد', secretaryEn: 'Loay Ezzat Mohamed' },
  { nameAr: 'اللجنة الفنية', nameEn: 'Arts Committee', descAr: 'الفعاليات الفنية والمسرحية', descEn: 'Arts and theater events', icon: 'fa-palette', secretaryAr: 'مارينا منير ابراهيم', secretaryEn: 'Marina Mounir Ibrahim' },
  { nameAr: 'اللجنة العلمية', nameEn: 'Scientific Committee', descAr: 'الأنشطة العلمية والمسابقات', descEn: 'Scientific activities and competitions', icon: 'fa-flask', secretaryAr: 'خالد وليد غلوش', secretaryEn: 'Khaled Waleed Ghaloush' },
  { nameAr: 'لجنة الجوالة', nameEn: 'Scouts Committee', descAr: 'أنشطة الكشافة والجوالة', descEn: 'Scouting and rover activities', icon: 'fa-hiking', secretaryAr: 'عبدالرحمن حسن', secretaryEn: 'Abdelrahman Hassan', logo: 'images/565296562_122142411524737620_3547839214841668058_n.jpg' }
];

// ========== State ==========
let currentLang = localStorage.getItem('lang') || 'ar';
let currentTheme = localStorage.getItem('theme') || 'light';
let chatbotHistory = [];
let eventsShowAll = false;
let galleryShowAll = false;

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
  const calendar = document.getElementById('eventCalendar');
  const loadMoreWrapper = document.getElementById('eventsLoadMoreWrapper');
  const loadMoreBtn = document.getElementById('eventsLoadMoreBtn');
  if (!grid) return;

  function renderEvents(filter = '') {
    const MAX_EVENTS = 6;
    const term = filter.toLowerCase();
    const filtered = eventsData.filter(ev => {
      const title = currentLang === 'ar' ? ev.titleAr : ev.titleEn;
      const desc = currentLang === 'ar' ? ev.descAr : ev.descEn;
      return !term || title.toLowerCase().includes(term) || desc.toLowerCase().includes(term);
    });

    if (filtered.length === 0) {
      grid.innerHTML = `<p class="section-subtitle" style="grid-column:1/-1;text-align:center;">${i18n[currentLang]?.events?.noEvents || 'لا توجد فعاليات'}</p>`;
      if (loadMoreWrapper) loadMoreWrapper.style.display = 'none';
      return;
    }

    const visible = eventsShowAll ? filtered : filtered.slice(0, MAX_EVENTS);

    grid.innerHTML = visible.map(ev => {
      const title = currentLang === 'ar' ? ev.titleAr : ev.titleEn;
      const desc = currentLang === 'ar' ? ev.descAr : ev.descEn;
      const loc = currentLang === 'ar' ? ev.locationAr : ev.locationEn;
      const img = ev.image || `https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop`;
      const isPast = ev.isPast;
      const pastLabel = currentLang === 'ar' ? 'فعالية سابقة' : 'Past event';
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
              ${isPast ? `<span class="event-past"><i class="fas fa-history"></i> ${pastLabel}</span>` : `<span class="event-capacity"><i class="fas fa-users"></i> ${ev.capacity} ${currentLang === 'ar' ? 'مقعد' : 'seats'}</span>`}
              ${isPast ? '' : `<a href="#services" class="btn btn-primary btn-sm">${i18n[currentLang]?.events?.register || 'تسجيل'}</a>`}
            </div>
          </div>
        </article>
      `;
    }).join('');

    if (loadMoreWrapper && loadMoreBtn) {
      if (filtered.length > MAX_EVENTS) {
        loadMoreWrapper.style.display = 'block';
        const showMoreText = currentLang === 'ar' ? 'عرض المزيد' : 'Show more';
        const showLessText = currentLang === 'ar' ? 'عرض أقل' : 'Show less';
        loadMoreBtn.textContent = eventsShowAll ? showLessText : showMoreText;
      } else {
        loadMoreWrapper.style.display = 'none';
      }
    }

    AOS?.refresh();
  }

  function renderCalendar() {
    if (!calendar) return;

    // Upcoming events: those without isPast true, and with a date value
    const upcoming = eventsData
      .filter(ev => !ev.isPast && ev.date)
      .sort((a, b) => (a.date || '').localeCompare(b.date || ''));

    if (!upcoming.length) {
      calendar.innerHTML = '';
      return;
    }

    const title = currentLang === 'ar' ? 'الفعاليات القادمة' : 'Upcoming Events';
    calendar.innerHTML = `
      <div class="event-calendar-day" data-aos="fade-up">
        <div class="event-calendar-date">
          <i class="far fa-calendar-alt"></i>
          <span>${title}</span>
        </div>
        <div class="event-calendar-items">
          ${upcoming.map(ev => {
            const evTitle = currentLang === 'ar' ? ev.titleAr : ev.titleEn;
            const loc = currentLang === 'ar' ? ev.locationAr : ev.locationEn;
            const img = ev.image || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop';
            return `
              <div class="event-calendar-item">
                <div class="event-calendar-thumb">
                  <img src="${img}" alt="${evTitle}" loading="lazy" />
                </div>
                <div class="event-calendar-info">
                  <h4>${evTitle}</h4>
                  <div class="event-calendar-meta">
                    <span>${ev.date || ''}</span>
                    ${loc ? ` • <span>${loc}</span>` : ''}
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  renderEvents();
  renderCalendar();
  if (searchInput) {
    searchInput.addEventListener('input', (e) => renderEvents(e.target.value));
    searchInput.placeholder = i18n[currentLang]?.events?.search || 'بحث...';
  }

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      eventsShowAll = !eventsShowAll;
      renderEvents(searchInput ? searchInput.value : '');
    });
  }
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
    const familyPages = {
      'ESP ANU Pharmacy Family': 'esp.html',
      'DASSA ANU Dentistry Family': 'dassa.html',
      'MSB Medicine Family': 'msb.html',
      'Pivots CS & Data Family': 'pivots.html',
      'IDEA Engineering Family': 'idea.html'
    };
    const joinHref = familyPages[club.nameEn] || '#services';
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
          <a href="${joinHref}" class="btn btn-primary btn-sm">${t.join || 'انضم الآن'}</a>
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
  const loadMoreWrapper = document.getElementById('galleryLoadMoreWrapper');
  const loadMoreBtn = document.getElementById('galleryLoadMoreBtn');
  if (!grid) return;

  const PAGE_SIZE = 9;

  function renderGallery() {
    const visible = galleryShowAll ? galleryImages : galleryImages.slice(0, PAGE_SIZE);

    grid.innerHTML = visible.map(img => {
      const title = currentLang === 'ar' ? img.titleAr : img.titleEn;
      return `
        <div class="gallery-item" data-aos="fade-up">
          <img src="${img.thumb}" alt="${title}" loading="lazy" />
          <div class="gallery-overlay"><span>${title}</span></div>
        </div>
      `;
    }).join('');

    const items = grid.querySelectorAll('.gallery-item');
    items.forEach((item, i) => {
      const imgData = visible[i];
      item.addEventListener('click', () => {
        if (lightbox && lightboxImg && imgData) {
          lightboxImg.src = imgData.full;
          lightboxImg.alt = imgData.titleAr;
          if (lightboxTitle) {
            lightboxTitle.textContent = currentLang === 'ar' ? imgData.titleAr : imgData.titleEn;
          }
          lightbox.classList.add('active');
        }
      });
    });

    if (loadMoreWrapper && loadMoreBtn) {
      if (galleryImages.length > PAGE_SIZE) {
        loadMoreWrapper.style.display = 'block';
        const showMoreText = currentLang === 'ar' ? 'عرض المزيد' : 'Show more';
        const showLessText = currentLang === 'ar' ? 'عرض أقل' : 'Show less';
        loadMoreBtn.textContent = galleryShowAll ? showLessText : showMoreText;
      } else {
        loadMoreWrapper.style.display = 'none';
      }
    }
  }

  renderGallery();

  if (lightboxClose) lightboxClose.addEventListener('click', () => lightbox?.classList.remove('active'));
  lightbox?.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.classList.remove('active'); });

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      galleryShowAll = !galleryShowAll;
      renderGallery();
    });
  }
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
        <div class="board-avatar">
          ${m.image ? `<img src="${m.image}" alt="${m.name}" loading="lazy" />` : `<i class="fas fa-user"></i>`}
        </div>
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
    const hasLogo = !!c.logo;
    return `
      <div class="committee-card" data-aos="fade-up">
        <div class="committee-icon">
          ${hasLogo ? `<img src="${c.logo}" alt="${name}" loading="lazy" />` : `<i class="fas ${c.icon}"></i>`}
        </div>
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
