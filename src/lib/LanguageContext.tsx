import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface TranslationContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    nav_home: "Home",
    nav_impact: "Impact",
    nav_programs: "Programs",
    nav_speaker: "Speaker",
    nav_register: "Secure Access",
    hero_tagline: "SECURE BHARAT // 2026",
    excellence_tag: "EXCELLENCE REWARDED",
    hero_title: "CYBER SURAKSHA CONCLAVE 2026",
    hero_subtitle: "Empowering citizens through India's premier cyber security experts. Join the movement to secure Bharat's digital future.",
    hero_cta_primary: "Register Now",
    hero_cta_secondary: "Explore Path",
    impact_title: "THE DIGITAL CRISIS",
    impact_subtitle: "REALITY & IMPACT",
    impact_stat_1: "72%",
    impact_stat_1_label: "Rise in attacks",
    impact_stat_2: "15M",
    impact_stat_2_label: "Accounts exposed",
    impact_stat_3: "₹2.4B",
    impact_stat_3_label: "Economic loss",
    programs_title: "CHOOSE YOUR EXPERIENCE",
    programs_subtitle: "EVENT PROGRAMS",
    speaker_title: "KEYNOTE SPEAKER",
    threats_title: "THREATS TO KNOW",
    audience_title: "WHO MUST ATTEND?",
    career_title: "FUTURE IN CYBER SECURITY",
    cta_final_title: "SECURE YOUR DIGITAL LIFE",
    perk_cert: "Certified IIESP Access",
    perk_dinner: "Expert Networking",
    footer_desc: "International Institute of Education & Skill Progress (IIESP) is committed to building a safer digital India.",
    limited_seats: "Limited capacity available"
  },
  hi: {
    nav_home: "मुख्य पृष्ठ",
    nav_impact: "प्रभाव",
    nav_programs: "कार्यक्रम",
    nav_speaker: "वक्ता",
    nav_register: "पहुंच सुरक्षित करें",
    hero_tagline: "सुरक्षित भारत // 2026",
    excellence_tag: "हुनर से कदर तक",
    hero_title: "साइबर सुरक्षा कॉन्क्लेव 2026",
    hero_subtitle: "भारत के प्रमुख साइबर सुरक्षा विशेषज्ञों के माध्यम से नागरिकों को सशक्त बनाना। भारत के डिजिटल भविष्य को सुरक्षित करने के आंदोलन में शामिल हों।",
    hero_cta_primary: "अभी पंजीकरण करें",
    hero_cta_secondary: "कार्यक्रम देखें",
    impact_title: "डिजिटल संकट",
    impact_subtitle: "वास्तविकता और प्रभाव",
    impact_stat_1: "72%",
    impact_stat_1_label: "हमलों में वृद्धि",
    impact_stat_2: "15M",
    impact_stat_2_label: "एक्सपोज़्ड अकाउंट्स",
    impact_stat_3: "₹2.4B",
    impact_stat_3_label: "आर्थिक हानि",
    programs_title: "अपना अनुभव चुनें",
    programs_subtitle: "कार्यक्रम",
    speaker_title: "मुख्य वक्ता",
    threats_title: "जोखिम जिन्हें जानना जरूरी है",
    audience_title: "किसे शामिल होना चाहिए?",
    career_title: "साइबर सुरक्षा में भविष्य",
    cta_final_title: "अपना डिजिटल जीवन सुरक्षित करें",
    perk_cert: "IIESP प्रमाणित पहुंच",
    perk_dinner: "विशेषज्ञ नेटवर्क",
    footer_desc: "इंटरनेशनल इंस्टीट्यूट ऑफ एजुकेशन एंड स्किल प्रोग्रेस (IIESP) सुरक्षित डिजिटल भारत बनाने के लिए प्रतिबद्ध है।",
    limited_seats: "सीमित सीटें उपलब्ध हैं"
  }
};

const LanguageContext = createContext<TranslationContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en');

  const t = (key: string) => {
    return translations[lang][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}
