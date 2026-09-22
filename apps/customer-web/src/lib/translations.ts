export type Locale = 'en' | 'ar';

export interface TranslationDictionary {
  brand: string;
  nav: {
    aboutUs: string;
    ourBusOperators: string;
    faq: string;
    contactUs: string;
    selectLanguage: string;
    bookNow: string;
    signInSignUp: string;
  };
  hero: {
    tagline1: string;
    tagline2: string;
    bigSavings: string;
    guaranteed: string;
    subheading1: string;
    subheading2: string;
    saveBig: string;
  };
  services: {
    busTicket: string;
    umrah: string;
    madinahZiyarah: string;
    umrahMadinah: string;
    cargoService: string;
    hajj: string;
    tourism: string;
    busRental: string;
  };
  search: {
    title: string;
    from: string;
    to: string;
    date: string;
    passengers: string;
    placeholderDeparture: string;
    placeholderDate: string;
    placeholderCount: string;
    btnSearch: string;
  };
  places: {
    title: string;
    subtitle: string;
    fromPrice: string;
    cards: Array<{
      city: string;
      country: string;
      price: string;
    }>;
  };
  makkahBanner: {
    title: string;
    subtitle: string;
    cta: string;
  };
  topReasons: {
    title: string;
    cards: Array<{
      title: string;
      desc: string;
    }>;
  };
  ctaBanner: {
    title1: string;
    title2: string;
    btn: string;
  };
  operatorBanner: {
    title: string;
    desc: string;
    btn: string;
  };
  seatMap: {
    tag: string;
    title: string;
    description: string;
    avail: string;
    selected: string;
    occupied: string;
    ladies: string;
    busFront: string;
    cartTitle: string;
    selectedRoute: string;
    departureTime: string;
    operator: string;
    selectedSeats: string;
    baseFare: string;
    vat: string;
    total: string;
    btnCheckout: string;
    lockPill: string;
  };
  footer: {
    company: string;
    aboutUs: string;
    contactUs: string;
    faq: string;
    ourBusOperators: string;
    information: string;
    privacyPolicy: string;
    termsOfService: string;
    cancellationPolicy: string;
    cookiePolicy: string;
    weAccept: string;
    operatorLogin: string;
    copyright: string;
    unifiedNumber: string;
  };
}

export const translations: Record<Locale, TranslationDictionary> = {
  en: {
    brand: 'Bus Arabia',
    nav: {
      aboutUs: 'About Us',
      ourBusOperators: 'Our Bus Operators',
      faq: 'FAQ',
      contactUs: 'Contact Us',
      selectLanguage: 'Select Language:',
      bookNow: 'Book Now',
      signInSignUp: 'Sign in / Sign up',
    },
    hero: {
      tagline1: 'EFFORTLESS BOOKING.',
      tagline2: 'SEAMLESS TRAVEL.',
      bigSavings: 'BIG SAVINGS',
      guaranteed: 'GUARANTEED!',
      subheading1: 'Find your Bus with just One Search!',
      subheading2: 'Your Ride. Your Way.',
      saveBig: 'Travel with us and Save Big!',
    },
    services: {
      busTicket: 'Bus Ticket',
      umrah: 'Umrah',
      madinahZiyarah: 'Madinah Ziyarah',
      umrahMadinah: 'Umrah & Madinah Ziyarah',
      cargoService: 'Cargo Service',
      hajj: 'Hajj',
      tourism: 'Tourism',
      busRental: 'Bus Rental',
    },
    search: {
      title: 'Book Your Bus Ticket',
      from: 'From',
      to: 'To',
      date: 'Date',
      passengers: 'Passengers',
      placeholderDeparture: 'Departure City',
      placeholderDate: 'Select Date',
      placeholderCount: 'Count',
      btnSearch: 'Search',
    },
    places: {
      title: 'PLACES We Cover',
      subtitle: 'Unforgettable journeys across the Middle East with fast and seamless service.',
      fromPrice: 'From',
      cards: [
        { city: 'Jeddah', country: 'Saudi Arabia', price: '45 SAR' },
        { city: 'Madinah', country: 'Saudi Arabia', price: '45 SAR' },
        { city: 'Amman', country: 'Jordan', price: '45 SAR' },
      ],
    },
    makkahBanner: {
      title: 'MAKKAH & MADINAH PACKAGES',
      subtitle: 'Comfortable journeys to the Holy Cities with trusted service and great savings.',
      cta: 'Discover Exciting Deals',
    },
    topReasons: {
      title: 'TOP REASONS TO BOOK TICKETS WITH BUS ARABIA',
      cards: [
        {
          title: 'Online Bus Booking',
          desc: 'We provide real-time updates on bus availability, schedules, and ticket prices, ensuring you always have the latest information at your fingertips. You can easily find and compare options and book a ticket as per your preferences anytime, anywhere. No need to visit the Bus Operator’s Office.',
        },
        {
          title: 'Special Deals and Discounts',
          desc: 'Looking to save on your next journey? Watch out for special deals and discounts available exclusively to our members. With our competitive prices and exclusive deals offered through coupon codes, you can enjoy more savings when you book a bus from Saudi Arabia to Yemen and other countries with us.',
        },
        {
          title: 'Flexible Booking Options',
          desc: 'Life can be unpredictable, but your travel plans should not be. We offer flexible booking options, including the ability to change or cancel your reservation. This means you can book with confidence, knowing that you can adjust your plans if needed.',
        },
        {
          title: '24/7 Customer Support',
          desc: "Our friendly support is ready to assist you 24/7. Whether you need help with booking, making changes to your reservation, or resolving any issues, we are here to ensure that your travel experience is smooth and stress-free. No need to visit Bus Operator's Offices anymore.",
        },
        {
          title: 'Secure Payment Options',
          desc: 'Your safety and security are our top priorities. Therefore, we offer multiple safe, secure and trusted payment options including credit/debit cards, mobile wallets, bank transfers, and other popular payment methods so you can book your tickets with peace of mind.',
        },
        {
          title: 'Wide Selection of Routes',
          desc: 'From major cities to remote destinations, we offer several options to meet your travel needs. So, whether you are planning a short trip or a cross-country journey, we have you covered with our extensive network of bus routes across the Middle East and North Africa.',
        },
      ],
    },
    ctaBanner: {
      title1: 'YOUR TICKET AWAITS - BOOK NOW AND',
      title2: 'EXPERIENCE SEAMLESS TRAVEL!',
      btn: 'Book Your Ticket Now',
    },
    operatorBanner: {
      title: 'ARE YOU A BUS OPERATOR PLANNING TO GROW YOUR BUSINESS?',
      desc: 'Partner with Bus Arabia and reach millions of travelers across the region. Increase your bookings and expand your presence with our powerful platform.',
      btn: 'Get Registered With Us',
    },
    seatMap: {
      tag: 'LIVE SEAT SELECTION',
      title: 'Select Your Seat & Lock in 10 Minutes',
      description: 'Real-time interactive seat layout matching Bus Arabia VIP coach. Select your preferred seat to proceed.',
      avail: 'Available',
      selected: 'Selected',
      occupied: 'Booked',
      ladies: 'Ladies Only',
      busFront: 'Bus Front / Driver',
      cartTitle: 'Trip Summary',
      selectedRoute: 'Route',
      departureTime: 'Departure',
      operator: 'Operator',
      selectedSeats: 'Selected Seats',
      baseFare: 'Base Fare',
      vat: 'VAT (15%)',
      total: 'Total Price',
      btnCheckout: 'Proceed to Passenger Details',
      lockPill: 'Seats locked temporarily during selection',
    },
    footer: {
      company: 'Company',
      aboutUs: 'About Us',
      contactUs: 'Contact Us',
      faq: 'FAQ',
      ourBusOperators: 'Our Bus Operators',
      information: 'Information',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      cancellationPolicy: 'Cancellation, Modification & Refund Policy',
      cookiePolicy: 'Cookie Policy',
      weAccept: 'We accept',
      operatorLogin: 'Bus Operator Sign in / Sign up',
      copyright: 'Copyright (c) BUS ARABIA Company LLC. All Rights Reserved',
      unifiedNumber: 'Unified National Number: 7054393199',
    },
  },
  ar: {
    brand: 'باص أرابيا',
    nav: {
      aboutUs: 'من نحن',
      ourBusOperators: 'شركات النقل المشغلة',
      faq: 'الأسئلة الشائعة',
      contactUs: 'اتصل بنا',
      selectLanguage: 'اختر اللغة:',
      bookNow: 'احجز الآن',
      signInSignUp: 'تسجيل الدخول / حساب جديد',
    },
    hero: {
      tagline1: 'حجز سهل وسريع.',
      tagline2: 'سفر بدون عناء.',
      bigSavings: 'توفير كبير',
      guaranteed: 'مضمون!',
      subheading1: 'اعثر على حافلتك ببحث واحد فقط!',
      subheading2: 'رحلتك، على طريقتك.',
      saveBig: 'سافر معنا ووفر الكثير!',
    },
    services: {
      busTicket: 'تذاكر الحافلات',
      umrah: 'العمرة',
      madinahZiyarah: 'زيارة المدينة',
      umrahMadinah: 'العمرة وزيارة المدينة',
      cargoService: 'خدمات الشحن',
      hajj: 'الحج',
      tourism: 'السياحة',
      busRental: 'تأجير الحافلات',
    },
    search: {
      title: 'احجز تذكرة الحافلة الخاصة بك',
      from: 'من',
      to: 'إلى',
      date: 'التاريخ',
      passengers: 'الركاب',
      placeholderDeparture: 'مدينة المغادرة',
      placeholderDate: 'اختر التاريخ',
      placeholderCount: 'العدد',
      btnSearch: 'بحث',
    },
    places: {
      title: 'الوجهات التي نغطيها',
      subtitle: 'رحلات لا تُنسى في جميع أنحاء الشرق الأوسط مع خدمة سريعة وموثوقة.',
      fromPrice: 'تبدأ من',
      cards: [
        { city: 'جدة', country: 'المملكة العربية السعودية', price: '45 ر.س' },
        { city: 'المدينة المنورة', country: 'المملكة العربية السعودية', price: '45 ر.س' },
        { city: 'عمّان', country: 'الأردن', price: '45 ر.س' },
      ],
    },
    makkahBanner: {
      title: 'باقات مكة والمدينة المنورة',
      subtitle: 'رحلات مريحة إلى المدن المقدسة مع خدمة موثوقة وأسعار موفرة.',
      cta: 'اكتشف العروض المميزة',
    },
    topReasons: {
      title: 'أهم الأسباب لحجز التذاكر عبر باص أرابيا',
      cards: [
        {
          title: 'حجز الحافلات عبر الإنترنت',
          desc: 'نوفر تحديثات فورية حول توفر الحافلات والمواعيد والأسعار، مما يضمن حصولك على أحدث المعلومات دائماً. يمكنك مقارنة الخيارات والحجز من أي مكان وفي أي وقت دون الحاجة لزيارة مكاتب النقل.',
        },
        {
          title: 'عروض وخصومات حصرية',
          desc: 'تتطلع للتوفير في رحلتك القادمة؟ ترقب عروضنا وخصوماتنا الحصرية لأعضاء باص أرابيا مع أكواد الخصم الترويجية للرحلات بين مدن المملكة وإلى اليمن والدول المجاورة.',
        },
        {
          title: 'خيارات حجز مرنة',
          desc: 'الحياة مليئة بالمفاجآت، ولكن خطط سفرك يجب ألا تكون كذلك. نقدم خيارات حجز مرنة تتيح لك تعديل أو إلغاء حجزك بكل سهولة وثقة عند الحاجة.',
        },
        {
          title: 'دعم العملاء على مدار الساعة 24/7',
          desc: 'فريق دعم العملاء جاهز لخدمتك على مدار الساعة طوال أيام الأسبوع. سواء كنت بحاجة إلى مساعدة في الحجز أو التعديل، نحن هنا لضمان تجربة سفر سلسة ومريحة.',
        },
        {
          title: 'خيارات دفع آمنة وموثوقة',
          desc: 'أمانك أولويتنا القصوى. نوفر وسائل دفع متعددة وآمنة تشمل مدى، أبل باي، البطاقات الائتمانية، والمحافظ الرقمية لتتمكن من حجز تذكرتك براحة بال تامة.',
        },
        {
          title: 'شبكة واسعة ومتنوعة من المسارات',
          desc: 'من المدن الرئيسية إلى الوجهات البعيدة، نوفر شبكة حافلات متكاملة تلبي جميع احتياجات سفرك عبر المملكة العربية السعودية ودول الشرق الأوسط.',
        },
      ],
    },
    ctaBanner: {
      title1: 'تذكرتك بانتظارك - احجز الآن و',
      title2: 'عش تجربة سفر استثنائية!',
      btn: 'احجز تذكرتك الآن',
    },
    operatorBanner: {
      title: 'هل أنت شركة نقل ترغب في توسيع أعمالك؟',
      desc: 'شارك مع باص أرابيا وتواصل مع ملايين المسافرين عبر المنطقة. ضاعف حجوزاتك وعزز حضورك من خلال منصتنا الرقمية المتقدمة.',
      btn: 'سجّل شركتك معنا',
    },
    seatMap: {
      tag: 'اختيار المقاعد المباشر',
      title: 'اختر مقعدك وثبّته خلال 10 دقائق',
      description: 'مخطط المقاعد التفاعلي المباشر لحافلات باص أرابيا VIP. اختر مقعدك المفضل للمتابعة.',
      avail: 'متاح',
      selected: 'محدد',
      occupied: 'محجوز',
      ladies: 'سيدات فقط',
      busFront: 'مقدمة الحافلة / السائق',
      cartTitle: 'ملخص الحجز',
      selectedRoute: 'المسار',
      departureTime: 'المغادرة',
      operator: 'المشغل',
      selectedSeats: 'المقاعد المحددة',
      baseFare: 'الأجرة الأساسية',
      vat: 'ضريبة القيمة المضافة (15%)',
      total: 'السعر الإجمالي',
      btnCheckout: 'المتابعة لبيانات الركاب',
      lockPill: 'يتم حجز المقاعد مؤقتاً أثناء التحديد',
    },
    footer: {
      company: 'الشركة',
      aboutUs: 'من نحن',
      contactUs: 'اتصل بنا',
      faq: 'الأسئلة الشائعة',
      ourBusOperators: 'شركات النقل المشغلة',
      information: 'المعلومات القانونية',
      privacyPolicy: 'سياسة الخصوصية',
      termsOfService: 'شروط الخدمة',
      cancellationPolicy: 'سياسة الإلغاء والتعديل والاسترداد',
      cookiePolicy: 'سياسة ملفات تعريف الارتباط',
      weAccept: 'طرق الدفع المعتمدة',
      operatorLogin: 'تسجيل دخول / تسجيل المشغلين',
      copyright: 'جميع الحقوق محفوظة (c) شركة باص أرابيا ذ.م.م.',
      unifiedNumber: 'الرقم الوطني الموحد: 7054393199',
    },
  },
};
