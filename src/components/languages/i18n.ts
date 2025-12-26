import TwoDaisies from "@/assets/TwoDaisies.png";
import U from "@/assets/U.png";
import ONPOST from "@/assets/ONPOST.png";
import CREW from "@/assets/CREW.png";
import TicketPro from "@/assets/TicketPro.png";
import PhishDetector from "@/assets/Phishing Detector.png";

export type Lang = "en" | "ko";

export type NavItem = {
  name: string;
  href: string;
};

export type ProjectPlatform = "appstore" | "playstore" | "github" | "demo";

export type ProjectUrlType = {
  platform: ProjectPlatform;
  url: string;
  label?: string; // optional (e.g. "App Store", "GitHub")
};

export type ContactInputFieldType = {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
};

export type ProjectType = {
  id: number;
  title: string;
  period: string;
  description: string;
  highlights: string[];
  image: string;
  tags: string[];
  urls: ProjectUrlType[];
};

const PROJECT_IMAGES = {
  twodaisies: TwoDaisies,
  u: U,
  onpost: ONPOST,
  crew: CREW,
  phishiDetector: PhishDetector,
  ticketPro: TicketPro,
};

export type CardType = {
  title: string;
  description: string;
  iconName: cardIconName;
};

export type cardIconName = "smartphone" | "creditCard" | "cloud";

export type ContactInfoName = "email" | "phone" | "location";

export type ContactInfoType = {
  type: ContactInfoName;
  label: string;
  data: string;
};

export type SkillCategory =
  | "all"
  | "frontend"
  | "mobile"
  | "backend"
  | "cloud"
  | "tools";

export type SkillItemType = {
  name: string;
  level: number; // 0~100
  category: SkillCategory;
};

export type Messages = {
  nav: {
    items: NavItem[];
    toggleLabel: string;
    name: string;
    topic: string;
  };

  hero: {
    hi: string;
    firstName: string;
    lastName: string;
    tagline: string;
    jobTitle: string;
    ctaPrimary: string;
    scroll: string;
  };

  about: {
    title: string;
    subtitle: string;
    shortDesc: string;
    paragraphs: string[];
    ctaContact: string;
    ctaResume: string;
    cards: Array<CardType>;
  };

  skills: {
    title: string;
    subtitle?: string;
    categories: {
      all: string;
      frontend: string;
      mobile: string;
      backend: string;
      cloud: string;
      tools: string;
    };
    items: SkillItemType[];
  };

  projects: {
    title: string;
    subtitle: string;
    shortDesc: string;
    actionButton: string;
    actionUrl: string;
    items: ProjectType[];
  };

  contact: {
    title: string;
    subtitle: string;
    shortDesc: string;
    infoTitle: string;
    connectTitle: string;
    formTitle: string;
    fields: ContactInputFieldType;
    actions: {
      submit: string;
      submitting: string;
    };
    toast: {
      title: string;
      description: string;
    };
    failed: {
      title: string;
      description: string;
    };
    items: Array<ContactInfoType>;
  };

  footer: {
    copyright: string;
  };
};

export const messages = {
  en: {
    nav: {
      toggleLabel: "KO",
      items: [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
      ],
      name: "Kisang Hwang",
      topic: "Portfolio",
    },

    hero: {
      hi: "Hi, I'm",
      firstName: "Kisang",
      lastName: "Hwang",
      tagline:
        "React Native engineer who has built and shipped multiple iOS & Android apps-covering commerce (WooCommerce + Stripe), AWS Amplify (Gen1/Gen2), auth, notifications, Mapbox features, plus backend-driven school projects like TicketPro and a phishing detector Chrome extension.",
      jobTitle: "React Native Mobile Engineer · Software Engineer (TS / AWS)",
      ctaPrimary: "View My Work",
      scroll: "Scroll",
    },

    about: {
      title: "About ",
      subtitle: "Me",
      shortDesc:
        "React Native engineer focused on building and refining real mobile products from idea to deployment.",
      paragraphs: [
        "I’m a React Native mobile engineer who has built and shipped multiple apps for iOS & Android. I’ve launched 4 full mobile apps across wellness & supplements, e-commerce, campus utilities, and on-base transportation tools for U.S. soldiers, and also completed school projects like TicketPro (event ticketing platform) and a phishing detector Chrome extension.",
        "Although I was the sole mobile developer on each app, I worked closely with a 3–4 person product team to define features, shape UX flows, and iterate based on real user feedback after launch.",
        "Right now I’m looking for React Native / Mobile / Frontend roles where I can ship quickly with a small team, own features end-to-end, and turn early-stage ideas into polished apps people use daily.",
      ],
      ctaContact: "Get In Touch",
      ctaResume: "Download Resume",
      cards: [
        {
          title: "Mobile Engineering (iOS/Android)",
          description:
            "Production React Native apps: architecture, navigation, performance, deep links, testing, release & maintenance.",
          iconName: "smartphone",
        },
        {
          title: "Commerce & Payments",
          description:
            "WooCommerce REST/Store API, cart/token persistence, Stripe PaymentSheet, Apple Pay & Google Pay integrations.",
          iconName: "creditCard",
        },
        {
          title: "Cloud & Integrations",
          description:
            "AWS Amplify (Gen1/Gen2), Cognito, Lambda, GraphQL, Firebase, notifications, and Mapbox-based custom maps.",
          iconName: "cloud",
        },
      ],
    },

    skills: {
      title: "My ",
      subtitle: "Skills",
      categories: {
        all: "All",
        frontend: "Frontend",
        mobile: "Mobile",
        backend: "Backend",
        cloud: "Cloud",
        tools: "Tools",
      },
      items: [
        // Mobile
        { name: "React Native", level: 80, category: "mobile" },
        { name: "TypeScript", level: 75, category: "mobile" },
        { name: "React Navigation", level: 90, category: "mobile" },
        { name: "Deep Linking", level: 70, category: "mobile" },
        {
          name: "Push Notifications (FCM/APNS)",
          level: 80,
          category: "mobile",
        },
        {
          name: "Mobile Performance / Optimization",
          level: 65,
          category: "mobile",
        },

        // Frontend
        { name: "React", level: 70, category: "frontend" },
        { name: "JavaScript (ES6+)", level: 90, category: "frontend" },
        { name: "Tailwind CSS", level: 50, category: "frontend" },

        // Backend / API
        { name: "REST APIs", level: 50, category: "backend" },
        { name: "GraphQL", level: 60, category: "backend" },
        { name: "Node.js", level: 70, category: "backend" },

        // Cloud
        { name: "AWS Amplify (Gen1/Gen2)", level: 77, category: "cloud" },
        { name: "Amazon Cognito", level: 50, category: "cloud" },
        { name: "AWS Lambda", level: 50, category: "cloud" },
        {
          name: "Firebase (Auth/Firestore/Storage)",
          level: 78,
          category: "cloud",
        },

        // Commerce / Tools
        { name: "WooCommerce REST/Store API", level: 85, category: "tools" },
        { name: "Stripe PaymentSheet", level: 55, category: "tools" },
        { name: "Git/GitHub", level: 75, category: "tools" },
        { name: "Xcode / Android Studio", level: 66, category: "tools" },
      ],
    },

    projects: {
      title: "Featured ",
      subtitle: "Projects",
      shortDesc:
        "A mix of production mobile apps I’ve built and shipped for iOS & Android, plus school projects like TicketPro and a phishing detector-focused on real users, data modeling, and end-to-end ownership.",

      actionButton: "Check My Linkedin",
      actionUrl: "https://www.linkedin.com/in/kisang-hwang-068745219",
      items: [
        {
          id: 1,
          title: "Two Daisies - Wellness & Supplement Tracking",
          period: "Aug 2025 – Oct 2025",
          description:
            "A wellness app for supplement tracking with smart reminders and integrated WooCommerce commerce + Stripe payments.",
          highlights: [
            "Built end-to-end in React Native (iOS/Android) as the sole mobile developer.",
            "WooCommerce (REST/Store API) commerce flows + Stripe PaymentSheet (Apple Pay / Google Pay).",
            "Auth + token/cookie persistence + notification scheduling.",
            "AWS Amplify Gen2 (Cognito, Lambda, GraphQL) + WordPress custom endpoints.",
          ],
          image: PROJECT_IMAGES.twodaisies,
          tags: [
            "React Native",
            "TypeScript",
            "AWS Amplify Gen2",
            "Cognito",
            "Lambda",
            "GraphQL",
            "WooCommerce",
            "Stripe",
            "WordPress",
            "Notifications",
          ],
          urls: [
            {
              platform: "appstore",
              url: "https://apps.apple.com/us/app/two-daisies/id6753789528",
              label: "App Store",
            },
            {
              platform: "playstore",
              url: "https://play.google.com/store/apps/details?id=com.uth.twodaisies1",
              label: "Google Play",
            },
          ],
        },
        {
          id: 2,
          title: "U - Campus Utility & Collaboration App",
          period: "Aug 2024 – Mar 2025",
          description:
            "A student platform for college email verification, schedule building, note-taking/sharing, and campus navigation.",
          highlights: [
            "Built end-to-end in React Native while collaborating with a 3–4 person product team.",
            "AWS Amplify Gen1 + Cognito/Lambda + GraphQL for core backend flows.",
            "Firebase + analytics tooling for stability and product insights.",
          ],
          image: PROJECT_IMAGES.u,
          tags: [
            "React Native",
            "JavaScript",
            "AWS Amplify Gen1",
            "Cognito",
            "Lambda",
            "GraphQL",
            "Firebase",
            "Analytics",
            "FCM",
          ],
          urls: [
            {
              platform: "appstore",
              url: "https://apps.apple.com/us/app/u-college-schedule-note/id6477337923",
              label: "App Store",
            },
            {
              platform: "playstore",
              url: "https://play.google.com/store/apps/details?id=com.quantum.uandus",
              label: "Google Play",
            },
          ],
        },
        {
          id: 3,
          title: "ONPOST - Base Transport & Community App",
          period: "May 2023 – Nov 2023",
          description:
            "A transportation & facility guide for Camp Humphreys soldiers with Mapbox maps, routing, POIs, and community features.",
          highlights: [
            "11,000+ downloads.",
            "1.2K active users in the last 28 days (Google Analytics).",
            "Mapbox-based custom map UX for base navigation and POI discovery.",
            "Firebase/AWS integrations + monetization tooling (ads).",
          ],
          image: PROJECT_IMAGES.onpost,
          tags: [
            "React Native",
            "React",
            "JavaScript",
            "Mapbox",
            "Firebase",
            "AWS Amplify Gen1",
            "GraphQL",
            "Google Analytics",
            "AdMob",
            "WebView",
          ],
          urls: [
            {
              platform: "appstore",
              url: "https://apps.apple.com/us/app/onpost-humphreys/id6444140879",
              label: "App Store",
            },
            {
              platform: "playstore",
              url: "https://play.google.com/store/apps/details?id=com.quantum.onpost",
              label: "Google Play",
            },
          ],
        },
        {
          id: 4,
          title: "Crew - Self-Improvement Challenge App",
          period: "Aug 2022 – May 2023",
          description:
            'A behavior-change app where users join paid "Steps," submit proof photos, and earn rewards based on completion.',
          highlights: [
            "Collaborated with a 3–4 person team to shape challenge mechanics and UX.",
            "Implemented authentication, notifications, and photo-proof flows.",
            "Firebase-based data + storage architecture.",
          ],
          image: PROJECT_IMAGES.crew,
          tags: [
            "React Native",
            "JavaScript",
            "Firebase Auth",
            "Firestore",
            "Firebase Storage",
            "Notifications",
            "WebView Payments",
          ],
          urls: [
            {
              platform: "appstore",
              url: "https://apps.apple.com/us/app/crew-%EA%B6%81%EA%B7%B9%EC%A0%81%EC%9D%B8-%EC%84%B1%EC%9E%A5/id1632395146",
              label: "App Store",
            },
            {
              platform: "playstore",
              url: "https://play.google.com/store/apps/details?id=com.quantum.crew",
              label: "Google Play",
            },
          ],
        },
        {
          id: 5,
          title: "Phishing Detector - Chrome Extension (LLM)",
          period: "Mar 2024",
          description:
            "A Chrome extension that uses an LLM to score phishing suspicion (0–100) from sender/subject/body with short explanations.",
          highlights: [
            "Built UI with HTML/CSS and logic with vanilla JavaScript (fetch, async/await).",
            "Designed a quick scoring + explanation UX for email triage.",
          ],
          image: PROJECT_IMAGES.phishiDetector,
          tags: ["JavaScript", "HTML", "CSS", "OpenAI API", "Chrome Extension"],
          urls: [
            {
              platform: "github",
              url: "https://github.com/KisangHwang/PhishDetector.git",
              label: "GitHub",
            },
          ],
        },
        {
          id: 6,
          title: "TicketPro - Event Ticketing Platform",
          period: "2025",
          description:
            "A web-based event management and ticketing platform that allows organizers to create, promote, and manage events while enabling attendees to discover events, purchase tickets, and manage their reservations.",
          highlights: [
            "Designed and implemented MySQL database schema covering users, organizations, events, tickets, payments, subscriptions, and waitlists.",
            "Built features for event creation, ticket purchasing, seat availability, and attendance history tracking.",
            "Supported both available & waitlisted event states with capacity logic and automated updates.",
            "Focused on usability, performance, and security across the platform.",
          ],
          image: PROJECT_IMAGES.ticketPro,
          tags: [
            "Next.js",
            "MySQL",
            "Database Design",
            "Web App Architecture",
            "EER Modeling",
            "Backend",
          ],
          urls: [
            {
              platform: "github",
              url: "https://github.com/KisangHwang/TicketPro.git",
              label: "GitHub",
            },
          ],
        },
      ],
    },

    contact: {
      title: "Get In ",
      subtitle: "Touch",
      shortDesc:
        "Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.",
      infoTitle: "Contact Information",
      connectTitle: "Connect With Me",
      formTitle: "Send a Message",

      fields: {
        nameLabel: "Your Name",
        namePlaceholder: "Kisang Hwang",
        emailLabel: "Your Email",
        emailPlaceholder: "you@email.com",
        messageLabel: "Your Message",
        messagePlaceholder: "Hello, I'd like to talk about...",
      },

      actions: {
        submit: "Send Message",
        submitting: "Sending...",
      },

      toast: {
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      },

      failed: {
        title: "Oops!",
        description: "Failed to send a message. Please try later.",
      },

      items: [
        {
          label: "Email",
          type: "email",
          data: "hgd4859@gmail.com",
        },
        {
          label: "Phone",
          type: "phone",
          data: "+14082050020",
        },
        {
          label: "Location",
          type: "location",
          data: "San Jose, CA, United States",
        },
      ],
    },

    footer: {
      copyright:
        "© " + new Date().getFullYear() + " Kisang Hwang. All rights reserved.",
    },
  },

  ko: {
    nav: {
      toggleLabel: "EN",
      items: [
        { name: "홈", href: "#hero" },
        { name: "소개", href: "#about" },
        { name: "스킬", href: "#skills" },
        { name: "프로젝트", href: "#projects" },
        { name: "연락", href: "#contact" },
      ],
      name: "황기상",
      topic: "포트폴리오",
    },

    hero: {
      hi: "안녕하세요, 저는",
      firstName: "황기상",
      lastName: "입니다.",
      tagline:
        "iOS/Android 프로덕션 앱을 직접 설계·개발·출시해본 React Native 엔지니어입니다. WooCommerce + Stripe 커머스, AWS Amplify(Gen1/Gen2), 인증/푸시/Mapbox 기능과 함께 TicketPro, 피싱 탐지 크롬 익스텐션 같은 학교 프로젝트도 경험했습니다.",
      jobTitle: "React Native 모바일 엔지니어 · Software Engineer (TS / AWS)",
      ctaPrimary: "프로젝트 보기",
      scroll: "스크롤",
    },

    about: {
      title: "간단 ",
      subtitle: "소개",
      shortDesc:
        "아이디어 단계부터 배포까지 모바일 제품을 설계하고 다듬는 데 집중하는 React Native 엔지니어입니다.",
      paragraphs: [
        "저는 iOS/Android 프로덕션 앱을 개발·출시해온 React Native 모바일 엔지니어로, 웰니스/영양제, 이커머스, 대학생 유틸리티, 미군 부대 교통/시설 앱까지 총 4개의 앱을 런칭했습니다. 또한 TicketPro(이벤트 티켓팅 플랫폼), 피싱 탐지 크롬 익스텐션과 같은 학교 프로젝트도 수행하며 웹/백엔드와 연동되는 서비스 전체 흐름을 경험했습니다.",
        "각 앱에서 모바일 개발은 단독으로 맡았지만, 3–4명의 프로덕트 팀과 함께 기능 기획, UX 흐름 설계, 로드맵 우선순위 정리, 출시 후 사용자 피드백 기반 반복 개선을 꾸준히 진행했습니다.",
        "현재는 작은 팀에서 빠르게 기능을 출시하고, 제품의 일부를 엔드투엔드로 오너십 있게 성장시킬 수 있는 React Native / Mobile / Frontend 포지션을 찾고 있습니다.",
      ],
      ctaContact: "연락하기",
      ctaResume: "이력서 다운로드",
      cards: [
        {
          title: "모바일 엔지니어링 (iOS/Android)",
          description:
            "React Native 프로덕션 앱 아키텍처, 내비게이션/성능/딥링크, 테스트/릴리즈/운영까지 엔드투엔드.",
          iconName: "smartphone",
        },
        {
          title: "커머스 & 결제",
          description:
            "WooCommerce REST/Store API, 장바구니/토큰 유지, Stripe PaymentSheet, Apple Pay/Google Pay 연동.",
          iconName: "creditCard",
        },
        {
          title: "클라우드 & 연동",
          description:
            "AWS Amplify(Gen1/Gen2), Cognito, Lambda, GraphQL, Firebase, 푸시/알림, Mapbox 커스텀 지도.",
          iconName: "cloud",
        },
      ],
    },

    skills: {
      title: "기술 ",
      subtitle: "스택",
      categories: {
        all: "전체",
        frontend: "프론트엔드",
        mobile: "모바일",
        backend: "백엔드",
        cloud: "클라우드",
        tools: "툴",
      },
      items: [
        // Mobile
        { name: "React Native", level: 80, category: "mobile" },
        { name: "TypeScript", level: 75, category: "mobile" },
        { name: "React Navigation", level: 90, category: "mobile" },
        { name: "딥링크(Deep Linking)", level: 70, category: "mobile" },
        { name: "푸시 알림(FCM/APNS)", level: 80, category: "mobile" },
        { name: "모바일 성능 최적화", level: 65, category: "mobile" },

        // Frontend
        { name: "React", level: 70, category: "frontend" },
        { name: "JavaScript (ES6+)", level: 90, category: "frontend" },
        { name: "Tailwind CSS", level: 50, category: "frontend" },

        // Backend
        { name: "REST API", level: 50, category: "backend" },
        { name: "GraphQL", level: 60, category: "backend" },
        { name: "Node.js", level: 70, category: "backend" },

        // Cloud
        { name: "AWS Amplify (Gen1/Gen2)", level: 77, category: "cloud" },
        { name: "Amazon Cognito", level: 50, category: "cloud" },
        { name: "AWS Lambda", level: 50, category: "cloud" },
        {
          name: "Firebase(Auth/Firestore/Storage)",
          level: 78,
          category: "cloud",
        },

        // Commerce / Tool
        { name: "WooCommerce REST/Store API", level: 85, category: "tools" },
        { name: "Stripe PaymentSheet", level: 55, category: "tools" },
        { name: "Git/GitHub", level: 75, category: "tools" },
        { name: "Xcode / Android Studio", level: 66, category: "tools" },
      ],
    },

    projects: {
      title: "주요 ",
      subtitle: "프로젝트",
      shortDesc:
        "iOS/Android 프로덕션 앱과 TicketPro, 피싱 탐지 크롬 익스텐션 같은 학교 프로젝트를 함께 모은 작업들입니다. 실제 사용자 경험, 데이터 모델링, 운영까지 고려해 만들었습니다.",

      actionButton: "Linkedin 보러가기",
      actionUrl: "https://www.linkedin.com/in/kisang-hwang-068745219",
      items: [
        {
          id: 1,
          title: "Two Daisies - 웰니스 & 영양제 트래킹",
          period: "2025.08 – 2025.10",
          description:
            "영양제 트래킹과 스마트 리마인더, WooCommerce 커머스 + Stripe 결제를 통합한 웰니스 앱.",
          highlights: [
            "React Native(iOS/Android) 엔드투엔드 개발(모바일 단독 개발).",
            "WooCommerce(REST/Store API) 커머스 플로우 + Stripe PaymentSheet(Apple Pay/Google Pay).",
            "인증 + 토큰/쿠키 유지 + 알림 스케줄링 구현.",
            "AWS Amplify Gen2(Cognito/Lambda/GraphQL) + WordPress 커스텀 엔드포인트 연동.",
          ],
          image: PROJECT_IMAGES.twodaisies,
          tags: [
            "React Native",
            "TypeScript",
            "AWS Amplify Gen2",
            "Cognito",
            "Lambda",
            "GraphQL",
            "WooCommerce",
            "Stripe",
            "WordPress",
            "Notifications",
          ],
          urls: [
            {
              platform: "appstore",
              url: "https://apps.apple.com/us/app/two-daisies/id6753789528",
              label: "App Store",
            },
            {
              platform: "playstore",
              url: "https://play.google.com/store/apps/details?id=com.uth.twodaisies1",
              label: "Google Play",
            },
          ],
        },
        {
          id: 2,
          title: "U - 대학생 유틸리티 & 협업 앱",
          period: "2024.08 – 2025.03",
          description:
            "학교 이메일 인증, 시간표 생성, 노트 작성/공유, 캠퍼스 기능을 제공하는 학생용 플랫폼.",
          highlights: [
            "React Native로 엔드투엔드 개발 + 3–4명 팀과 기획/UX 플로우 협업.",
            "AWS Amplify Gen1 + Cognito/Lambda + GraphQL로 핵심 백엔드 플로우 구현.",
            "Firebase 및 Analytics 기반으로 안정성과 지표 개선.",
          ],
          image: PROJECT_IMAGES.u,
          tags: [
            "React Native",
            "JavaScript",
            "AWS Amplify Gen1",
            "Cognito",
            "Lambda",
            "GraphQL",
            "Firebase",
            "Analytics",
            "FCM",
          ],
          urls: [
            {
              platform: "appstore",
              url: "https://apps.apple.com/us/app/u-college-schedule-note/id6477337923",
              label: "App Store",
            },
            {
              platform: "playstore",
              url: "https://play.google.com/store/apps/details?id=com.quantum.uandus",
              label: "Google Play",
            },
          ],
        },
        {
          id: 3,
          title: "ONPOST - 미군 부대 교통 & 커뮤니티 앱",
          period: "2023.05 – 2023.11",
          description:
            "버스/택시 정보, Mapbox 커스텀 지도, 시설 정보, 커뮤니티 기능을 제공하는 부대 가이드 앱.",
          highlights: [
            "11,000+ 다운로드.",
            "최근 28일 1.2K 활성 사용자(Google Analytics).",
            "Mapbox 기반 커스텀 지도 UX로 탐색/POI 경험 구현.",
            "Firebase/AWS 연동 및 광고 기반 수익화 구성.",
          ],
          image: PROJECT_IMAGES.onpost,
          tags: [
            "React Native",
            "React",
            "JavaScript",
            "Mapbox",
            "Firebase",
            "AWS Amplify Gen1",
            "GraphQL",
            "Google Analytics",
            "AdMob",
            "WebView",
          ],
          urls: [
            {
              platform: "appstore",
              url: "https://apps.apple.com/us/app/onpost-humphreys/id6444140879",
              label: "App Store",
            },
            {
              platform: "playstore",
              url: "https://play.google.com/store/apps/details?id=com.quantum.onpost",
              label: "Google Play",
            },
          ],
        },
        {
          id: 4,
          title: "Crew - 자기계발 챌린지 앱",
          period: "2022.08 – 2023.05",
          description:
            "유료 스텝 참여, 인증 사진 제출, 완료 기반 보상 구조의 목표/습관 형성 앱.",
          highlights: [
            "3–4명 팀과 챌린지 메커니즘/UX를 함께 설계.",
            "인증/알림/인증 사진 제출 플로우 구현.",
            "Firebase 기반 데이터/스토리지 아키텍처 구축.",
          ],
          image: PROJECT_IMAGES.crew,
          tags: [
            "React Native",
            "JavaScript",
            "Firebase Auth",
            "Firestore",
            "Firebase Storage",
            "Notifications",
            "WebView Payments",
          ],
          urls: [
            {
              platform: "appstore",
              url: "https://apps.apple.com/us/app/crew-%EA%B6%81%EA%B7%B9%EC%A0%81%EC%9D%B8-%EC%84%B1%EC%9E%A5/id1632395146",
              label: "App Store",
            },
            {
              platform: "playstore",
              url: "https://play.google.com/store/apps/details?id=com.quantum.crew",
              label: "Google Play",
            },
          ],
        },
        {
          id: 5,
          title: "피싱 탐지 - 크롬 익스텐션(LLM)",
          period: "2024.03",
          description:
            "LLM으로 이메일 발신자/제목/본문을 분석해 피싱 의심 점수(0–100)와 짧은 설명을 제공하는 크롬 익스텐션.",
          highlights: [
            "HTML/CSS로 UI 구성, vanilla JS(fetch/async-await)로 로직 구현.",
            "빠르게 판단할 수 있도록 점수 + 설명 UX 설계.",
          ],
          image: PROJECT_IMAGES.phishiDetector,
          tags: ["JavaScript", "HTML", "CSS", "OpenAI API", "Chrome Extension"],
          urls: [
            {
              platform: "github",
              url: "https://github.com/KisangHwang/PhishDetector.git",
              label: "GitHub",
            },
          ],
        },
        {
          id: 6,
          title: "TicketPro - 이벤트 티켓팅 플랫폼",
          period: "2025",
          description:
            "이벤트 주최자가 손쉽게 이벤트를 생성·관리·홍보하고, 참가자는 이벤트를 검색하고 티켓을 구매 및 관리할 수 있는 웹 기반 이벤트 관리 및 티켓팅 플랫폼입니다.",
          highlights: [
            "사용자, 조직, 이벤트, 티켓, 결제, 구독, 웨이팅 리스트를 포함한 MySQL DB 스키마 설계 및 구현.",
            "이벤트 생성, 티켓 구매, 잔여 좌석 관리, 참가 이력 관리 기능 구현.",
            "수용 인원에 따른 ‘가능 / 대기’ 이벤트 상태 지원 및 자동 처리 로직 설계.",
            "사용성, 성능, 보안을 고려한 플랫폼 구조 설계.",
          ],
          image: PROJECT_IMAGES.ticketPro,
          tags: [
            "Next.js",
            "MySQL",
            "데이터베이스 설계",
            "웹 앱 아키텍처",
            "EER 모델링",
            "백엔드",
          ],
          urls: [
            {
              platform: "github",
              url: "https://github.com/KisangHwang/TicketPro.git",
              label: "GitHub",
            },
          ],
        },
      ],
    },

    contact: {
      title: "연락",
      subtitle: "하기",
      shortDesc:
        "프로젝트를 함께 만들거나 협업을 원하시나요? 편하게 메시지 주세요. 새로운 기회에 대해 언제든 이야기할 준비가 되어 있어요.",
      infoTitle: "연락처",
      connectTitle: "소셜 링크",
      formTitle: "메시지 보내기",

      fields: {
        nameLabel: "이름",
        namePlaceholder: "홍길동",
        emailLabel: "이메일",
        emailPlaceholder: "you@email.com",
        messageLabel: "메시지",
        messagePlaceholder:
          "안녕하세요. 프로젝트 관련해서 이야기 나누고 싶습니다...",
      },

      actions: {
        submit: "보내기",
        submitting: "전송 중...",
      },

      toast: {
        title: "전송 완료!",
        description: "메시지 감사합니다. 확인 후 빠르게 답변드릴게요.",
      },

      failed: {
        title: "Oops!",
        description: "메시지 전송에 실패했어요. 나중에 다시 시도해 주세요.",
      },

      items: [
        {
          label: "이메일",
          type: "email",
          data: "hgd4859@gmail.com",
        },
        {
          label: "전화번호",
          type: "phone",
          data: "+82 -",
        },
        {
          label: "지역",
          type: "location",
          data: "부천시, 원미구",
        },
      ],
    },
    footer: {
      copyright:
        "© " + new Date().getFullYear() + " Kisang Hwang. All rights reserved.",
    },
  },
} as const satisfies Record<Lang, Messages>;

export const getMessages = (lang: Lang): Messages => messages[lang];

export const toggleLang = (lang: Lang): Lang => (lang === "en" ? "ko" : "en");
