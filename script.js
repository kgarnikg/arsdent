const phone = "34635431327";
const routeMessage = {
  es: "Hola ARSDENT, quiero reservar mi revisión dental gratuita.",
  ru: "Здравствуйте, ARSDENT! Хочу записаться на бесплатный осмотр.",
  uk: "Вітаю, ARSDENT! Хочу записатися на безкоштовний огляд.",
  hy: "Բարև, ARSDENT։ Ցանկանում եմ գրանցվել անվճար զննման։",
  en: "Hello ARSDENT, I want to book my free dental check-up.",
  ar: "مرحبا ARSDENT، أريد حجز فحص الأسنان المجاني.",
  de: "Hallo ARSDENT, ich moechte meine kostenlose Zahnkontrolle buchen."
};

const t = {
  es: {
    "nav.services": "Servicios", "nav.about": "Nosotros", "nav.route": "Ruta",
    "cta.free": "Revisión gratis", "cta.whatsapp": "Escríbenos ahora", "cta.call": "Llamar",
    "hero.eyebrow": "Clínica dental en Alicante · atención multilingüe",
    "hero.title": "Revisión dental gratuita en Alicante, explicada en tu idioma.",
    "hero.lead": "Sin dudas y sin presión: revisamos tu sonrisa, explicamos opciones y preparamos un plan personal antes de que decidas.",
    "trust.free": "Primera revisión gratis", "trust.languages": "7 idiomas", "trust.experience": "24 años de experiencia",
    "pain.title": "¿Qué preocupa al paciente?", "pain.copy": "Dolor, precio, idioma y confianza. Respondemos a las cuatro cosas antes de empezar.", "pain.cta": "Pregunta ahora",
    "comfort.eyebrow": "Pensado para el momento antes de reservar", "comfort.title": "Una visita dental debe sentirse clara antes que clínica.",
    "comfort.card1.title": "¿Entenderé el plan?", "comfort.card1.copy": "Explicamos diagnóstico, tiempos y opciones en español, ruso, ucraniano, armenio, inglés, árabe o alemán.",
    "comfort.card2.title": "¿Me dolerá?", "comfort.card2.copy": "La primera visita es tranquila: revisión, conversación y plan transparente. El tratamiento empieza cuando estás listo.",
    "comfort.card3.title": "¿Me presionarán para pagar?", "comfort.card3.copy": "La revisión es gratuita. Sales con próximos pasos claros y decides sin presión.",
    "services.eyebrow": "De prevención a tratamientos complejos", "services.title": "Servicios dentales clave en una clínica de Alicante.", "services.copy": "ARSDENT crea planes personalizados para una sonrisa sana, funcional y bonita.",
    "svc.implants": "Implantes dentales", "svc.implants.copy": "Solución duradera para dientes perdidos con estética y función natural.",
    "svc.ortho": "Brackets y alineadores", "svc.ortho.copy": "Ortodoncia fija, removible e invisible adaptada a tu boca.",
    "svc.cleaning": "Limpieza y prevención", "svc.cleaning.copy": "Eliminación de placa y sarro para prevenir caries y encías.",
    "svc.aesthetic": "Estética dental", "svc.aesthetic.copy": "Blanqueamiento, carillas y armonía de sonrisa.",
    "svc.children": "Odontopediatría", "svc.children.copy": "Atención amable para niños y primeras visitas cómodas.",
    "svc.perio": "Periodoncia y prótesis", "svc.perio.copy": "Tratamiento de encías, prótesis fijas y rehabilitación oral.",
    "about.eyebrow": "Clínica familiar · fundada en junio de 2024", "about.title": "24 años de experiencia con trato familiar.", "about.copy": "ARSDENT ofrece atención dental de alta calidad con tecnología avanzada y un equipo comprometido con sonrisas sanas y bonitas.",
    "stats.exp": "años de experiencia", "stats.lang": "idiomas", "stats.exam": "primera revisión",
    "map.eyebrow": "Fácil de encontrar en Alicante", "map.title": "Toca una vez y crea tu ruta a la clínica.", "map.route": "Crear ruta", "map.ask": "Preguntar antes de venir",
    "form.eyebrow": "¿Prefieres que te llamemos?", "form.title": "Deja tu número. Contactaremos en tu idioma.", "form.name": "Nombre", "form.phone": "Teléfono / WhatsApp", "form.submit": "Solicitar llamada",
    "reviews.eyebrow": "Confianza de pacientes", "reviews.title": "Lo que notan los pacientes tras la primera visita.", "reviews.count": "76 reseñas", "reviews.ratingCopy": "Valoración del perfil de Google y reseñas recientes de pacientes.", "reviews.prev": "Reseña anterior", "reviews.next": "Siguiente reseña",
    "social.eyebrow": "Sigue la clínica", "social.title": "Todos los canales de ARSDENT en un sitio.",
    "float.whatsapp": "WhatsApp", "float.callback": "Llamada", "cookie.copy": "Usamos cookies para mejorar la experiencia y entender la demanda de citas.", "cookie.accept": "Aceptar",
    "modal.eyebrow": "¿Aún lo estás pensando?", "modal.title": "Recibe una revisión gratis y un plan claro antes de decidir.", "modal.copy": "Escríbenos ahora. Respondemos en un par de minutos en tu idioma."
  },
  en: {
    "nav.services": "Services", "nav.about": "About", "nav.route": "Route", "cta.free": "Free check-up", "cta.whatsapp": "Write to us now", "cta.call": "Call clinic",
    "hero.eyebrow": "Alicante dental clinic · multilingual care", "hero.title": "Free dental check-up in Alicante, explained in your language.", "hero.lead": "No guessing, no pressure: we examine your smile, explain options clearly and build a personal treatment plan before you decide.",
    "trust.free": "Free first check-up", "trust.languages": "7 languages", "trust.experience": "24 years experience", "pain.title": "What worries patients most?", "pain.copy": "Pain, price, language and trust. We answer all four before treatment starts.", "pain.cta": "Ask now",
    "comfort.eyebrow": "Designed for the moment before you book", "comfort.title": "A clinic visit should feel clear before it feels clinical.", "comfort.card1.title": "Will I understand the plan?", "comfort.card1.copy": "We explain diagnosis, timing and options in Spanish, Russian, Ukrainian, Armenian, English, Arabic or German.", "comfort.card2.title": "Will it hurt?", "comfort.card2.copy": "The first visit is calm: exam, conversation and a transparent plan. Treatment begins only when you are ready.", "comfort.card3.title": "Will I be pushed to pay?", "comfort.card3.copy": "The check-up is free. You leave with clear next steps and can decide without pressure.",
    "services.eyebrow": "From prevention to complex care", "services.title": "All key dental services in one Alicante clinic.", "services.copy": "ARSDENT builds personalized care plans for a healthy, functional and beautiful smile.",
    "svc.implants": "Dental implants", "svc.implants.copy": "Durable replacement for missing teeth with natural aesthetics and function.", "svc.ortho": "Braces and aligners", "svc.ortho.copy": "Fixed, removable and invisible orthodontics adapted to your mouth.", "svc.cleaning": "Cleaning and prevention", "svc.cleaning.copy": "Plaque and tartar removal to prevent caries and gum disease.", "svc.aesthetic": "Aesthetic dentistry", "svc.aesthetic.copy": "Whitening, veneers and smile harmony for a brighter result.", "svc.children": "Children's dentistry", "svc.children.copy": "Friendly care for children with a comfortable first experience.", "svc.perio": "Periodontics and prosthetics", "svc.perio.copy": "Gum treatment, fixed prostheses and oral rehabilitation.",
    "about.eyebrow": "Family clinic · founded June 2024", "about.title": "24 years of experience, warm family care.", "about.copy": "ARSDENT offers high-quality dental care with advanced technology and a professional team committed to healthy, beautiful smiles.", "stats.exp": "years experience", "stats.lang": "languages", "stats.exam": "first check-up",
    "map.eyebrow": "Easy to find in Alicante", "map.title": "Tap once and build your route to the clinic.", "map.route": "Build route", "map.ask": "Ask before you come",
    "form.eyebrow": "Prefer a callback?", "form.title": "Leave your number. We will contact you in your language.", "form.name": "Name", "form.phone": "Phone / WhatsApp", "form.submit": "Request callback",
    "reviews.eyebrow": "Patient trust", "reviews.title": "What patients notice after the first visit.", "reviews.count": "76 reviews", "reviews.ratingCopy": "Rating from the clinic profile and recent patient feedback.", "reviews.prev": "Previous review", "reviews.next": "Next review",
    "social.eyebrow": "Follow the clinic", "social.title": "All ARSDENT channels in one place.", "float.whatsapp": "WhatsApp", "float.callback": "Callback", "cookie.copy": "We use cookies to improve the website experience and understand demand for appointments.", "cookie.accept": "Accept", "modal.eyebrow": "Still thinking?", "modal.title": "Get a free check-up and a clear plan before deciding.", "modal.copy": "Write to us now. We answer within a couple of minutes in your language."
  },
  ru: {
    "nav.services": "Услуги", "nav.about": "О нас", "nav.route": "Маршрут", "cta.free": "Осмотр бесплатно", "cta.whatsapp": "Напишите нам сейчас", "cta.call": "Позвонить",
    "hero.eyebrow": "Стоматология в Аликанте · говорим на вашем языке", "hero.title": "Бесплатный осмотр в Аликанте с понятным планом лечения.", "hero.lead": "Без догадок и давления: посмотрим улыбку, объясним варианты на вашем языке и подготовим персональный план до принятия решения.",
    "trust.free": "Первый осмотр бесплатно", "trust.languages": "7 языков", "trust.experience": "24 года опыта", "pain.title": "Что тревожит пациента?", "pain.copy": "Боль, цена, язык и доверие. Мы закрываем все четыре вопроса до начала лечения.", "pain.cta": "Задать вопрос",
    "comfort.eyebrow": "Продумано для момента перед записью", "comfort.title": "Визит к стоматологу должен быть понятным еще до кресла.", "comfort.card1.title": "Я пойму план?", "comfort.card1.copy": "Объясняем диагноз, сроки и варианты на испанском, русском, украинском, армянском, английском, арабском или немецком.", "comfort.card2.title": "Будет больно?", "comfort.card2.copy": "Первый визит спокойный: осмотр, разговор и прозрачный план. Лечение начинается только когда вы готовы.", "comfort.card3.title": "Меня будут заставлять платить?", "comfort.card3.copy": "Осмотр бесплатный. Вы уходите с понятными шагами и решаете без давления.",
    "services.eyebrow": "От профилактики до сложного лечения", "services.title": "Все ключевые стоматологические услуги в одной клинике Аликанте.", "services.copy": "ARSDENT составляет персональные планы для здоровой, функциональной и красивой улыбки.",
    "svc.implants": "Импланты", "svc.implants.copy": "Долговечная замена утраченных зубов с естественной эстетикой и функцией.", "svc.ortho": "Брекеты и элайнеры", "svc.ortho.copy": "Фиксированная, съемная и невидимая ортодонтия под вашу ситуацию.", "svc.cleaning": "Чистка и профилактика", "svc.cleaning.copy": "Удаление налета и камня для профилактики кариеса и болезней десен.", "svc.aesthetic": "Эстетическая стоматология", "svc.aesthetic.copy": "Отбеливание, виниры и гармония улыбки.", "svc.children": "Детская стоматология", "svc.children.copy": "Дружелюбный прием для детей и комфортный первый опыт.", "svc.perio": "Пародонтология и протезы", "svc.perio.copy": "Лечение десен, фиксированные протезы и реабилитация.",
    "about.eyebrow": "Семейная клиника · основана в июне 2024", "about.title": "24 года опыта и теплый семейный подход.", "about.copy": "ARSDENT предлагает качественную стоматологическую помощь с современными технологиями и командой, которая заботится о здоровых и красивых улыбках.", "stats.exp": "года опыта", "stats.lang": "языков", "stats.exam": "первый осмотр",
    "map.eyebrow": "Легко найти в Аликанте", "map.title": "Один клик, и маршрут до клиники готов.", "map.route": "Построить маршрут", "map.ask": "Спросить перед визитом",
    "form.eyebrow": "Удобнее обратный звонок?", "form.title": "Оставьте номер. Мы свяжемся на вашем языке.", "form.name": "Имя", "form.phone": "Телефон / WhatsApp", "form.submit": "Заказать звонок",
    "reviews.eyebrow": "Доверие пациентов", "reviews.title": "Что пациенты отмечают после первого визита.", "reviews.count": "76 отзывов", "reviews.ratingCopy": "Оценка из профиля Google и свежие отзывы пациентов.", "reviews.prev": "Предыдущий отзыв", "reviews.next": "Следующий отзыв",
    "social.eyebrow": "Соцсети клиники", "social.title": "Все каналы ARSDENT в одном месте.", "float.whatsapp": "WhatsApp", "float.callback": "Звонок", "cookie.copy": "Мы используем cookies, чтобы улучшать сайт и понимать спрос на запись.", "cookie.accept": "Принять", "modal.eyebrow": "Все еще думаете?", "modal.title": "Получите бесплатный осмотр и понятный план до решения.", "modal.copy": "Напишите нам сейчас, ответим в течение пары минут на вашем языке."
  }
};

t.uk = {
  "nav.services": "Послуги", "nav.about": "Про нас", "nav.route": "Маршрут", "cta.free": "Огляд безкоштовно", "cta.whatsapp": "Напишіть нам зараз", "cta.call": "Подзвонити",
  "hero.eyebrow": "Стоматологія в Аліканте · говоримо вашою мовою", "hero.title": "Безкоштовний огляд зубів в Аліканте з поясненням вашою мовою.", "hero.lead": "Без здогадок і тиску: оглянемо усмішку, спокійно пояснимо варіанти та підготуємо персональний план до вашого рішення.",
  "trust.free": "Перший огляд безкоштовно", "trust.languages": "7 мов", "trust.experience": "24 роки досвіду", "pain.title": "Що хвилює пацієнта?", "pain.copy": "Біль, ціна, мова і довіра. Ми відповідаємо на всі чотири питання до початку лікування.", "pain.cta": "Поставити питання",
  "comfort.eyebrow": "Продумано для моменту перед записом", "comfort.title": "Візит до стоматолога має бути зрозумілим ще до крісла.", "comfort.card1.title": "Чи зрозумію я план?", "comfort.card1.copy": "Пояснюємо діагноз, терміни та варіанти іспанською, російською, українською, вірменською, англійською, арабською або німецькою.", "comfort.card2.title": "Чи буде боляче?", "comfort.card2.copy": "Перший візит спокійний: огляд, розмова і прозорий план. Лікування починається лише коли ви готові.", "comfort.card3.title": "Чи будуть тиснути з оплатою?", "comfort.card3.copy": "Огляд безкоштовний. Ви йдете з чіткими наступними кроками і вирішуєте без тиску.",
  "services.eyebrow": "Від профілактики до складного лікування", "services.title": "Усі ключові стоматологічні послуги в одній клініці Аліканте.", "services.copy": "ARSDENT створює персональні плани для здорової, функціональної та красивої усмішки.",
  "svc.implants": "Зубні імпланти", "svc.implants.copy": "Довговічна заміна втрачених зубів із природною естетикою та функцією.", "svc.ortho": "Брекети та елайнери", "svc.ortho.copy": "Фіксована, знімна та невидима ортодонтія під вашу ситуацію.", "svc.cleaning": "Чистка і профілактика", "svc.cleaning.copy": "Видалення нальоту і каменю для профілактики карієсу та хвороб ясен.", "svc.aesthetic": "Естетична стоматологія", "svc.aesthetic.copy": "Відбілювання, вініри та гармонія усмішки.", "svc.children": "Дитяча стоматологія", "svc.children.copy": "Дружній прийом для дітей і комфортний перший досвід.", "svc.perio": "Пародонтологія і протези", "svc.perio.copy": "Лікування ясен, фіксовані протези та реабілітація.",
  "about.eyebrow": "Сімейна клініка · заснована у червні 2024", "about.title": "24 роки досвіду і теплий сімейний підхід.", "about.copy": "ARSDENT пропонує якісну стоматологічну допомогу з сучасними технологіями та командою, яка дбає про здорові й красиві усмішки.", "stats.exp": "роки досвіду", "stats.lang": "мов", "stats.exam": "перший огляд",
  "map.eyebrow": "Легко знайти в Аліканте", "map.title": "Один дотик, і маршрут до клініки готовий.", "map.route": "Прокласти маршрут", "map.ask": "Запитати перед візитом",
  "form.eyebrow": "Зручніше, щоб вам передзвонили?", "form.title": "Залиште номер. Ми зв'яжемося вашою мовою.", "form.name": "Ім'я", "form.phone": "Телефон / WhatsApp", "form.submit": "Замовити дзвінок",
  "reviews.eyebrow": "Довіра пацієнтів", "reviews.title": "Що пацієнти помічають після першого візиту.", "reviews.count": "76 відгуків", "reviews.ratingCopy": "Оцінка з профілю Google і свіжі відгуки пацієнтів.", "reviews.prev": "Попередній відгук", "reviews.next": "Наступний відгук",
  "social.eyebrow": "Соцмережі клініки", "social.title": "Усі канали ARSDENT в одному місці.", "float.whatsapp": "WhatsApp", "float.callback": "Дзвінок", "cookie.copy": "Ми використовуємо cookies, щоб покращувати сайт і розуміти попит на записи.", "cookie.accept": "Прийняти", "modal.eyebrow": "Ще думаєте?", "modal.title": "Отримайте безкоштовний огляд і зрозумілий план до рішення.", "modal.copy": "Напишіть нам зараз, відповімо протягом кількох хвилин вашою мовою."
};

t.hy = {
  "nav.services": "Ծառայություններ", "nav.about": "Մեր մասին", "nav.route": "Երթուղի", "cta.free": "Անվճար զննում", "cta.whatsapp": "Գրեք մեզ հիմա", "cta.call": "Զանգահարել",
  "hero.eyebrow": "Ատամնաբուժարան Ալիկանտեում · սպասարկում ձեր լեզվով", "hero.title": "Անվճար ատամնաբուժական զննում Ալիկանտեում՝ պարզ բուժման պլանով։", "hero.lead": "Առանց անորոշության և ճնշման․ կզննենք ձեր ժպիտը, ձեր լեզվով կբացատրենք տարբերակները և մինչև որոշում կայացնելը կկազմենք անհատական բուժման պլան։",
  "trust.free": "Առաջին զննումն անվճար է", "trust.languages": "7 լեզու", "trust.experience": "24 տարվա փորձ", "pain.title": "Ի՞նչն է անհանգստացնում պացիենտին", "pain.copy": "Ցավը, գինը, լեզուն և վստահությունը․ այս ամենը պարզաբանում ենք մինչև բուժումը սկսելը։", "pain.cta": "Հարց տվեք հիմա",
  "comfort.eyebrow": "Մտածված է գրանցվելուց առաջ", "comfort.title": "Ատամնաբույժի այցը պետք է պարզ լինի դեռ մինչև բուժասենյակ մտնելը։", "comfort.card1.title": "Կհասկանա՞մ պլանը", "comfort.card1.copy": "Բացատրում ենք ախտորոշումը, ժամկետները և տարբերակները իսպաներեն, ռուսերեն, ուկրաիներեն, հայերեն, անգլերեն, արաբերեն կամ գերմաներեն։", "comfort.card2.title": "Ցավոտ կլինի՞", "comfort.card2.copy": "Առաջին այցը հանգիստ է՝ զննում, զրույց և թափանցիկ պլան։ Բուժումը սկսվում է միայն այն ժամանակ, երբ պատրաստ եք։", "comfort.card3.title": "Կճնշե՞ն վճարելու համար", "comfort.card3.copy": "Զննումն անվճար է։ Դուք ստանում եք հստակ հաջորդ քայլեր և որոշում եք առանց ճնշման։",
  "services.eyebrow": "Կանխարգելումից մինչև բարդ բուժում", "services.title": "Հիմնական ատամնաբուժական ծառայությունները մեկ կլինիկայում՝ Ալիկանտեում։", "services.copy": "ARSDENT-ը կազմում է անհատական պլաններ առողջ, ֆունկցիոնալ և գեղեցիկ ժպիտի համար։",
  "svc.implants": "Ատամնային իմպլանտներ", "svc.implants.copy": "Կորցրած ատամների երկարատև փոխարինում՝ բնական տեսքով և գործառույթով։", "svc.ortho": "Բրեկետներ և էլայներներ", "svc.ortho.copy": "Ֆիքսված, շարժական և անտեսանելի օրթոդոնտիա՝ ձեր իրավիճակին համապատասխան։", "svc.cleaning": "Մաքրում և կանխարգելում", "svc.cleaning.copy": "Ատամնափառի և ատամնաքարի հեռացում՝ կարիեսի ու լնդերի հիվանդությունների կանխարգելման համար։", "svc.aesthetic": "Էսթետիկ ստոմատոլոգիա", "svc.aesthetic.copy": "Սպիտակեցում, վինիրներ և ժպիտի ներդաշնակություն։", "svc.children": "Մանկական ստոմատոլոգիա", "svc.children.copy": "Բարյացակամ մոտեցում երեխաների համար և հարմար առաջին այց։", "svc.perio": "Պարոդոնտոլոգիա և պրոթեզավորում", "svc.perio.copy": "Լնդերի բուժում, ֆիքսված պրոթեզներ և բերանի խոռոչի վերականգնում։",
  "about.eyebrow": "Ընտանեկան կլինիկա · հիմնադրվել է 2024 թվականի հունիսին", "about.title": "24 տարվա փորձ և ջերմ ընտանեկան մոտեցում։", "about.copy": "ARSDENT-ն առաջարկում է բարձրորակ ատամնաբուժական օգնություն ժամանակակից տեխնոլոգիաներով և թիմով, որը հոգ է տանում առողջ ու գեղեցիկ ժպիտների մասին։", "stats.exp": "տարվա փորձ", "stats.lang": "լեզու", "stats.exam": "առաջին զննում",
  "map.eyebrow": "Հեշտ է գտնել Ալիկանտեում", "map.title": "Մեկ սեղմում, և երթուղին դեպի կլինիկա պատրաստ է։", "map.route": "Կառուցել երթուղի", "map.ask": "Հարցնել մինչև այցը",
  "form.eyebrow": "Նախընտրո՞ւմ եք հետզանգ", "form.title": "Թողեք ձեր համարը․ կապ կհաստատենք ձեր լեզվով։", "form.name": "Անուն", "form.phone": "Հեռախոս / WhatsApp", "form.submit": "Պատվիրել զանգ",
  "reviews.eyebrow": "Պացիենտների վստահությունը", "reviews.title": "Ինչ են պացիենտները նշում առաջին այցից հետո։", "reviews.count": "76 կարծիք", "reviews.ratingCopy": "Գնահատականը Google-ի պրոֆիլից և պացիենտների վերջին կարծիքներից։", "reviews.prev": "Նախորդ կարծիք", "reviews.next": "Հաջորդ կարծիք",
  "social.eyebrow": "Հետևեք կլինիկային", "social.title": "ARSDENT-ի բոլոր ալիքները մեկ տեղում։", "float.whatsapp": "WhatsApp", "float.callback": "Հետզանգ", "cookie.copy": "Մենք օգտագործում ենք cookies՝ կայքի փորձը բարելավելու և գրանցումների պահանջարկը հասկանալու համար։", "cookie.accept": "Ընդունել", "modal.eyebrow": "Դեռ մտածո՞ւմ եք", "modal.title": "Ստացեք անվճար զննում և հստակ պլան մինչև որոշում կայացնելը։", "modal.copy": "Գրեք մեզ հիմա․ կպատասխանենք մի քանի րոպեի ընթացքում ձեր լեզվով։"
};

t.ar = {
  "nav.services": "الخدمات", "nav.about": "من نحن", "nav.route": "الطريق", "cta.free": "فحص مجاني", "cta.whatsapp": "اكتب لنا الآن", "cta.call": "اتصل بالعيادة",
  "hero.eyebrow": "عيادة أسنان في أليكانتي · رعاية متعددة اللغات", "hero.title": "فحص أسنان مجاني في أليكانتي مع شرح بلغتك.", "hero.lead": "بدون تخمين وبدون ضغط: نفحص ابتسامتك، نشرح الخيارات بوضوح ونضع خطة علاج شخصية قبل أن تقرر.",
  "trust.free": "الفحص الأول مجاني", "trust.languages": "7 لغات", "trust.experience": "24 سنة خبرة", "pain.title": "ما الذي يقلق المريض؟", "pain.copy": "الألم والسعر واللغة والثقة. نوضح هذه النقاط قبل بدء العلاج.", "pain.cta": "اسأل الآن",
  "comfort.eyebrow": "مصمم للحظة ما قبل الحجز", "comfort.title": "يجب أن تكون زيارة طبيب الأسنان واضحة قبل أن تكون علاجية.", "comfort.card1.title": "هل سأفهم الخطة؟", "comfort.card1.copy": "نشرح التشخيص والمدة والخيارات بالإسبانية أو الروسية أو الأوكرانية أو الأرمنية أو الإنجليزية أو العربية أو الألمانية.", "comfort.card2.title": "هل سيكون هناك ألم؟", "comfort.card2.copy": "الزيارة الأولى هادئة: فحص، حديث وخطة شفافة. يبدأ العلاج فقط عندما تكون جاهزا.", "comfort.card3.title": "هل سأتعرض للضغط للدفع؟", "comfort.card3.copy": "الفحص مجاني. تغادر بخطوات واضحة وتقرر بدون ضغط.",
  "services.eyebrow": "من الوقاية إلى العلاج المتقدم", "services.title": "كل خدمات الأسنان الأساسية في عيادة واحدة في أليكانتي.", "services.copy": "تضع ARSDENT خططا شخصية لابتسامة صحية وعملية وجميلة.",
  "svc.implants": "زراعة الأسنان", "svc.implants.copy": "حل طويل الأمد لتعويض الأسنان المفقودة بمظهر ووظيفة طبيعيين.", "svc.ortho": "تقويم ومصففات", "svc.ortho.copy": "تقويم ثابت ومتحرك وشفاف يناسب فمك.", "svc.cleaning": "تنظيف ووقاية", "svc.cleaning.copy": "إزالة البلاك والجير للوقاية من التسوس وأمراض اللثة.", "svc.aesthetic": "تجميل الأسنان", "svc.aesthetic.copy": "تبييض، قشور وتحسين تناغم الابتسامة.", "svc.children": "طب أسنان الأطفال", "svc.children.copy": "رعاية لطيفة للأطفال وتجربة أولى مريحة.", "svc.perio": "اللثة والتعويضات", "svc.perio.copy": "علاج اللثة، تعويضات ثابتة وإعادة تأهيل الفم.",
  "about.eyebrow": "عيادة عائلية · تأسست في يونيو 2024", "about.title": "24 سنة خبرة مع رعاية عائلية دافئة.", "about.copy": "تقدم ARSDENT رعاية أسنان عالية الجودة بتقنيات متقدمة وفريق يهتم بابتسامات صحية وجميلة.", "stats.exp": "سنة خبرة", "stats.lang": "لغات", "stats.exam": "الفحص الأول",
  "map.eyebrow": "سهل الوصول في أليكانتي", "map.title": "اضغط مرة واحدة لإنشاء الطريق إلى العيادة.", "map.route": "إنشاء الطريق", "map.ask": "اسأل قبل الزيارة",
  "form.eyebrow": "تفضل مكالمة عودة؟", "form.title": "اترك رقمك. سنتواصل معك بلغتك.", "form.name": "الاسم", "form.phone": "الهاتف / واتساب", "form.submit": "طلب اتصال",
  "reviews.eyebrow": "ثقة المرضى", "reviews.title": "ما يلاحظه المرضى بعد الزيارة الأولى.", "reviews.count": "76 مراجعة", "reviews.ratingCopy": "التقييم من ملف Google وآراء حديثة من المرضى.", "reviews.prev": "المراجعة السابقة", "reviews.next": "المراجعة التالية",
  "social.eyebrow": "تابع العيادة", "social.title": "كل قنوات ARSDENT في مكان واحد.", "float.whatsapp": "واتساب", "float.callback": "اتصال", "cookie.copy": "نستخدم ملفات cookies لتحسين تجربة الموقع وفهم طلبات المواعيد.", "cookie.accept": "موافق", "modal.eyebrow": "ما زلت تفكر؟", "modal.title": "احصل على فحص مجاني وخطة واضحة قبل القرار.", "modal.copy": "اكتب لنا الآن. نرد خلال دقيقتين تقريبا بلغتك."
};

t.de = {
  "nav.services": "Leistungen", "nav.about": "Über uns", "nav.route": "Route", "cta.free": "Gratis Check-up", "cta.whatsapp": "Jetzt schreiben", "cta.call": "Anrufen",
  "hero.eyebrow": "Zahnarztpraxis in Alicante · mehrsprachige Betreuung", "hero.title": "Kostenloser Zahn-Check-up in Alicante, erklärt in Ihrer Sprache.", "hero.lead": "Keine Unsicherheit und kein Druck: Wir prüfen Ihr Lächeln, erklären Optionen klar und erstellen einen persönlichen Plan, bevor Sie entscheiden.",
  "trust.free": "Erster Check-up gratis", "trust.languages": "7 Sprachen", "trust.experience": "24 Jahre Erfahrung", "pain.title": "Was beschäftigt Patienten?", "pain.copy": "Schmerz, Preis, Sprache und Vertrauen. Wir klären alle vier Punkte vor Behandlungsbeginn.", "pain.cta": "Jetzt fragen",
  "comfort.eyebrow": "Für den Moment vor der Buchung gedacht", "comfort.title": "Ein Zahnarztbesuch sollte klar sein, bevor er klinisch wird.", "comfort.card1.title": "Verstehe ich den Plan?", "comfort.card1.copy": "Wir erklären Diagnose, Dauer und Optionen auf Spanisch, Russisch, Ukrainisch, Armenisch, Englisch, Arabisch oder Deutsch.", "comfort.card2.title": "Wird es weh tun?", "comfort.card2.copy": "Der erste Besuch ist ruhig: Untersuchung, Gespräch und transparenter Plan. Die Behandlung beginnt erst, wenn Sie bereit sind.", "comfort.card3.title": "Werde ich zum Bezahlen gedrängt?", "comfort.card3.copy": "Der Check-up ist kostenlos. Sie gehen mit klaren nächsten Schritten und entscheiden ohne Druck.",
  "services.eyebrow": "Von Vorsorge bis komplexe Behandlung", "services.title": "Alle wichtigen zahnmedizinischen Leistungen in einer Praxis in Alicante.", "services.copy": "ARSDENT erstellt persönliche Behandlungspläne für ein gesundes, funktionales und schönes Lächeln.",
  "svc.implants": "Zahnimplantate", "svc.implants.copy": "Langlebiger Ersatz fehlender Zähne mit natürlicher Ästhetik und Funktion.", "svc.ortho": "Brackets und Aligner", "svc.ortho.copy": "Feste, herausnehmbare und unsichtbare Kieferorthopädie passend zu Ihrem Mund.", "svc.cleaning": "Reinigung und Vorsorge", "svc.cleaning.copy": "Entfernung von Plaque und Zahnstein zur Vorbeugung von Karies und Zahnfleischerkrankungen.", "svc.aesthetic": "Ästhetische Zahnmedizin", "svc.aesthetic.copy": "Bleaching, Veneers und Harmonie des Lächelns.", "svc.children": "Kinderzahnmedizin", "svc.children.copy": "Freundliche Betreuung für Kinder und ein angenehmer erster Besuch.", "svc.perio": "Parodontologie und Prothetik", "svc.perio.copy": "Zahnfleischbehandlung, festsitzender Zahnersatz und orale Rehabilitation.",
  "about.eyebrow": "Familienpraxis · gegründet im Juni 2024", "about.title": "24 Jahre Erfahrung mit herzlicher Familienbetreuung.", "about.copy": "ARSDENT bietet hochwertige Zahnmedizin mit moderner Technologie und einem Team, das sich für gesunde, schöne Lächeln einsetzt.", "stats.exp": "Jahre Erfahrung", "stats.lang": "Sprachen", "stats.exam": "erster Check-up",
  "map.eyebrow": "Leicht zu finden in Alicante", "map.title": "Ein Klick und Ihre Route zur Praxis ist bereit.", "map.route": "Route starten", "map.ask": "Vor dem Besuch fragen",
  "form.eyebrow": "Lieber Rückruf?", "form.title": "Hinterlassen Sie Ihre Nummer. Wir melden uns in Ihrer Sprache.", "form.name": "Name", "form.phone": "Telefon / WhatsApp", "form.submit": "Rückruf anfragen",
  "reviews.eyebrow": "Patientenvertrauen", "reviews.title": "Was Patienten nach dem ersten Besuch bemerken.", "reviews.count": "76 Bewertungen", "reviews.ratingCopy": "Bewertung aus dem Google-Profil und aktuelle Patientenstimmen.", "reviews.prev": "Vorherige Bewertung", "reviews.next": "Nächste Bewertung",
  "social.eyebrow": "Folgen Sie der Praxis", "social.title": "Alle ARSDENT-Kanäle an einem Ort.", "float.whatsapp": "WhatsApp", "float.callback": "Rückruf", "cookie.copy": "Wir verwenden Cookies, um die Website-Erfahrung zu verbessern und Terminbedarf zu verstehen.", "cookie.accept": "Akzeptieren", "modal.eyebrow": "Noch unsicher?", "modal.title": "Erhalten Sie einen kostenlosen Check-up und einen klaren Plan vor Ihrer Entscheidung.", "modal.copy": "Schreiben Sie uns jetzt. Wir antworten innerhalb weniger Minuten in Ihrer Sprache."
};

const aliases = {};

const reviewData = {
  es: [
    { name: "Alexandra", meta: "5 estrellas · hace 7 meses", text: "Fui a ARSDENT para una limpieza profesional y tratamiento de caries. Quedé muy satisfecha con la calidad del servicio y la atención del equipo. Todo se hizo con cuidado y sin molestias." },
    { name: "Nadia Nafikova", meta: "5 estrellas · hace 8 meses", text: "La mejor clínica de la ciudad. Todo el equipo cuida cada detalle, desde la administración hasta el doctor con manos de oro. Gracias por un trabajo impecable." },
    { name: "Anet Moz", meta: "5 estrellas · hace 10 meses", text: "Me encantó la clínica: implante, limpieza y tratamiento de caries. Me gustó todo, desde el precio hasta la calidad. Siempre muestran el antes y después en pantalla." },
    { name: "Mikhail Khokhlov", meta: "5 estrellas · hace 4 meses", text: "Visité la clínica varias veces. Los doctores son muy amables, se puede hablar en inglés y ruso, explican todo y ofrecen varias opciones de tratamiento." }
  ],
  ru: [
    { name: "Alexandra", meta: "5 звезд · 7 месяцев назад", text: "Обращалась в клинику ARSDENT для профессиональной чистки зубов и лечения кариеса. Осталась очень довольна качеством услуг и отношением персонала. Все выполнено аккуратно, без дискомфорта." },
    { name: "Nadia Nafikova", meta: "5 звезд · 8 месяцев назад", text: "Лучшая клиника в городе. Вся команда заботится о вас, начиная от внимательной к деталям администрации и до доктора с золотыми руками. Спасибо за вашу безупречную работу." },
    { name: "Anet Moz", meta: "5 звезд · 10 месяцев назад", text: "Клиника мне очень понравилась: ставила имплант, делала чистку и лечила кариес. Понравилось все от цены до качества. Всегда показывают до и после лечения на экране." },
    { name: "Михаил Хохлов", meta: "5 звезд · 4 месяца назад", text: "Посещал эту клинику несколько раз. Врачи очень доброжелательные, можно общаться на английском и русском. Все объясняют, показывают и предлагают несколько вариантов лечения." }
  ],
  uk: [
    { name: "Alexandra", meta: "5 зірок · 7 місяців тому", text: "Зверталася в ARSDENT для професійної чистки зубів і лікування карієсу. Залишилася дуже задоволена якістю послуг і ставленням персоналу. Все виконано акуратно, без дискомфорту." },
    { name: "Nadia Nafikova", meta: "5 зірок · 8 місяців тому", text: "Найкраща клініка в місті. Уся команда піклується про вас, від уважної до деталей адміністрації до лікаря із золотими руками. Дякую за бездоганну роботу." },
    { name: "Anet Moz", meta: "5 зірок · 10 місяців тому", text: "Клініка дуже сподобалася: ставила імплант, робила чистку і лікувала карієс. Сподобалося все, від ціни до якості. Завжди показують до і після лікування на екрані." },
    { name: "Михайло Хохлов", meta: "5 зірок · 4 місяці тому", text: "Відвідував цю клініку кілька разів. Лікарі дуже доброзичливі, можна спілкуватися англійською та російською. Все пояснюють, показують і пропонують кілька варіантів лікування." }
  ],
  hy: [
    { name: "Alexandra", meta: "5 աստղ · 7 ամիս առաջ", text: "Դիմել եմ ARSDENT կլինիկա ատամների պրոֆեսիոնալ մաքրման և կարիեսի բուժման համար։ Շատ գոհ եմ ծառայությունների որակից և անձնակազմի վերաբերմունքից։ Ամեն ինչ կատարվել է խնամքով և առանց անհարմարության։" },
    { name: "Nadia Nafikova", meta: "5 աստղ · 8 ամիս առաջ", text: "Քաղաքի լավագույն կլինիկան է։ Ամբողջ թիմը հոգատար է՝ սկսած մանրուքներին ուշադիր ադմինիստրացիայից մինչև ոսկե ձեռքեր ունեցող բժիշկը։ Շնորհակալություն անթերի աշխատանքի համար։" },
    { name: "Anet Moz", meta: "5 աստղ · 10 ամիս առաջ", text: "Կլինիկան ինձ շատ դուր եկավ․ իմպլանտ եմ տեղադրել, մաքրում եմ արել և կարիես բուժել։ Դուր եկավ ամեն ինչ՝ գներից մինչև որակը։ Բուժումից առաջ և հետո արդյունքը միշտ ցույց են տալիս էկրանին։" },
    { name: "Միխայիլ Խոխլով", meta: "5 աստղ · 4 ամիս առաջ", text: "Մի քանի անգամ այցելել եմ այս կլինիկա։ Բժիշկները շատ բարեհամբույր են, հնարավոր է շփվել անգլերեն և ռուսերեն։ Ամեն ինչ բացատրում են, ցույց են տալիս և առաջարկում բուժման մի քանի տարբերակ։" }
  ],
  en: [
    { name: "Alexandra", meta: "5 stars · 7 months ago", text: "I visited ARSDENT for a professional cleaning and caries treatment. I was very happy with the service quality and the attitude of the team. Everything was done carefully and without discomfort." },
    { name: "Nadia Nafikova", meta: "5 stars · 8 months ago", text: "The best clinic in the city. The whole team takes care of you, from the detail-oriented reception to the doctor with golden hands. Thank you for flawless work." },
    { name: "Anet Moz", meta: "5 stars · 10 months ago", text: "I really liked the clinic: I had an implant, cleaning and caries treatment. Everything was great, from price to quality. They always show before and after on the screen." },
    { name: "Mikhail Khokhlov", meta: "5 stars · 4 months ago", text: "I visited this clinic several times. The doctors are very friendly, you can speak English and Russian, and they explain, show and offer several treatment options." }
  ],
  ar: [
    { name: "Alexandra", meta: "5 نجوم · قبل 7 أشهر", text: "زرت ARSDENT لتنظيف احترافي وعلاج التسوس. كنت راضية جدا عن جودة الخدمة وتعامل الفريق. تم كل شيء بعناية وبدون انزعاج." },
    { name: "Nadia Nafikova", meta: "5 نجوم · قبل 8 أشهر", text: "أفضل عيادة في المدينة. يهتم الفريق كله بك، من الإدارة الدقيقة في التفاصيل إلى الطبيب صاحب اليدين الذهبيتين. شكرا على العمل المتقن." },
    { name: "Anet Moz", meta: "5 نجوم · قبل 10 أشهر", text: "أعجبتني العيادة كثيرا: أجريت زراعة وتنظيفا وعلاج تسوس. أعجبني كل شيء من السعر إلى الجودة. يعرضون دائما قبل وبعد العلاج على الشاشة." },
    { name: "Mikhail Khokhlov", meta: "5 نجوم · قبل 4 أشهر", text: "زرت هذه العيادة عدة مرات. الأطباء ودودون جدا، ويمكن التواصل بالإنجليزية والروسية. يشرحون كل شيء ويعرضون عدة خيارات للعلاج." }
  ],
  de: [
    { name: "Alexandra", meta: "5 Sterne · vor 7 Monaten", text: "Ich war bei ARSDENT für eine professionelle Zahnreinigung und Kariesbehandlung. Ich war sehr zufrieden mit der Qualität und dem Umgang des Teams. Alles wurde sorgfältig und ohne Beschwerden gemacht." },
    { name: "Nadia Nafikova", meta: "5 Sterne · vor 8 Monaten", text: "Die beste Klinik der Stadt. Das ganze Team kümmert sich um einen, von der detailorientierten Verwaltung bis zum Arzt mit goldenen Händen. Danke für die makellose Arbeit." },
    { name: "Anet Moz", meta: "5 Sterne · vor 10 Monaten", text: "Mir hat die Klinik sehr gefallen: Implantat, Reinigung und Kariesbehandlung. Alles stimmte, vom Preis bis zur Qualität. Vorher und nachher wird immer auf dem Bildschirm gezeigt." },
    { name: "Mikhail Khokhlov", meta: "5 Sterne · vor 4 Monaten", text: "Ich war mehrmals in dieser Klinik. Die Ärzte sind sehr freundlich, man kann Englisch und Russisch sprechen, und sie erklären, zeigen und bieten mehrere Behandlungsoptionen an." }
  ]
};

let reviewIndex = 0;

const currentLang = () => document.documentElement.lang || "es";
const supported = ["es", "ru", "uk", "hy", "en", "ar", "de"];

function dictFor(lang) {
  return t[lang] || t[aliases[lang]] || t.es;
}

function applyLanguage(lang) {
  const selected = supported.includes(lang) ? lang : "es";
  const dict = dictFor(selected);
  document.documentElement.lang = selected;
  document.body.dir = selected === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key]) el.placeholder = dict[key];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.dataset.i18nAria;
    if (dict[key]) el.setAttribute("aria-label", dict[key]);
  });
  document.getElementById("languageSelect").value = selected;
  localStorage.setItem("arsdentLang", selected);
  refreshWhatsappLinks();
  renderReview();
}

function renderReview() {
  const reviews = reviewData[currentLang()] || reviewData.es;
  const review = reviews[reviewIndex % reviews.length];
  document.getElementById("reviewText").textContent = review.text;
  document.getElementById("reviewName").textContent = review.name;
  document.getElementById("reviewMeta").textContent = review.meta;
}

function refreshWhatsappLinks(extra = "") {
  const lang = currentLang();
  const text = extra || routeMessage[lang] || routeMessage.es;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  document.querySelectorAll("[data-whatsapp]").forEach((el) => {
    el.setAttribute("href", url);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });
}

const preferred = localStorage.getItem("arsdentLang") || (navigator.languages || [navigator.language || "es"])
  .map((lang) => lang.slice(0, 2).toLowerCase())
  .find((lang) => supported.includes(lang)) || "es";
applyLanguage(preferred);

document.getElementById("languageSelect").addEventListener("change", (event) => applyLanguage(event.target.value));

document.getElementById("reviewPrev").addEventListener("click", () => {
  const reviews = reviewData[currentLang()] || reviewData.es;
  reviewIndex = (reviewIndex - 1 + reviews.length) % reviews.length;
  renderReview();
});

document.getElementById("reviewNext").addEventListener("click", () => {
  const reviews = reviewData[currentLang()] || reviewData.es;
  reviewIndex = (reviewIndex + 1) % reviews.length;
  renderReview();
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });
document.querySelectorAll("[data-reveal]").forEach((el) => revealObserver.observe(el));

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", (event) => {
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

document.querySelectorAll(".magnetic").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) / 18;
    const y = (event.clientY - rect.top - rect.height / 2) / 18;
    card.style.transform = `translateY(-2px) rotateX(${-y}deg) rotateY(${x}deg)`;
  });
  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
  });
});

const cookieBanner = document.getElementById("cookieBanner");
if (!localStorage.getItem("arsdentCookies")) cookieBanner.classList.add("show");
document.getElementById("acceptCookies").addEventListener("click", () => {
  localStorage.setItem("arsdentCookies", "accepted");
  cookieBanner.classList.remove("show");
});

const modal = document.getElementById("callbackModal");
let modalShown = false;
function showModal() {
  if (modalShown || sessionStorage.getItem("arsdentModal")) return;
  modalShown = true;
  sessionStorage.setItem("arsdentModal", "shown");
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
}
setTimeout(showModal, 60000);
window.addEventListener("scroll", () => {
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120;
  if (atBottom) setTimeout(showModal, 900);
}, { passive: true });
document.getElementById("modalClose").addEventListener("click", () => {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
});
modal.addEventListener("click", (event) => {
  if (event.target === modal) document.getElementById("modalClose").click();
});

document.getElementById("callbackForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const lang = currentLang();
  const message = `${routeMessage[lang] || routeMessage.es}\nName: ${data.get("name")}\nPhone: ${data.get("phone")}\nPreferred language: ${data.get("language")}`;
  refreshWhatsappLinks(message);
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  event.currentTarget.reset();
});
