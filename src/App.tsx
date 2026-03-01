/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  Zap, 
  Target, 
  MessageCircle, 
  ChevronRight, 
  Menu, 
  X, 
  CheckCircle2, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  MessageSquare,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

// --- Types ---
interface NavItem {
  label: string;
  href: string;
}

interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
}

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// --- Constants ---
const NAV_ITEMS: NavItem[] = [
  { label: '회사소개', href: '#about' },
  { label: '주요사업', href: '#services' },
  { label: '프로젝트', href: '#projects' },
  { label: '고객지원', href: '#contact' },
];

const SERVICES: Service[] = [
  {
    title: '레이저 가공 솔루션',
    description: 'Han\'s Laser의 최첨단 기술력을 바탕으로 정밀한 레이저 가공 및 엔지니어링 서비스를 제공합니다.',
    icon: <Zap className="w-6 h-6 text-emerald-500" />,
  },
  {
    title: '산업용 장비 설치',
    description: '대규모 산업 현장에 최적화된 장비 설치 및 유지보수 시스템을 구축하여 생산성을 극대화합니다.',
    icon: <Building2 className="w-6 h-6 text-emerald-500" />,
  },
  {
    title: '맞춤형 엔지니어링',
    description: '고객사의 요구사항에 맞춘 최적의 설계와 시공으로 완벽한 품질을 보장합니다.',
    icon: <Target className="w-6 h-6 text-emerald-500" />,
  },
];

const PROJECTS: Project[] = [
  {
    title: 'Han\'s Laser Korea 본사 설비',
    category: '산업 설비',
    image: 'https://picsum.photos/seed/laser-factory/800/600',
    description: '최첨단 레이저 가공 라인 구축 및 시스템 통합 프로젝트.',
  },
  {
    title: '스마트 팩토리 자동화 라인',
    category: '자동화',
    image: 'https://picsum.photos/seed/automation/800/600',
    description: '생산 효율성 증대를 위한 로봇 및 자동화 설비 도입.',
  },
  {
    title: '정밀 금속 가공 센터',
    category: '엔지니어링',
    image: 'https://picsum.photos/seed/metal-work/800/600',
    description: '고정밀 레이저 커팅 및 절곡 가공 전문 센터 구축.',
  },
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
            <Building2 className="text-white w-6 h-6" />
          </div>
          <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-zinc-900' : 'text-white'}`}>
            (주)원공사
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium hover:text-emerald-500 transition-colors ${
                scrolled ? 'text-zinc-600' : 'text-white/90'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className={scrolled ? 'text-zinc-900' : 'text-white'} />
          ) : (
            <Menu className={scrolled ? 'text-zinc-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-zinc-100 p-6 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-lg font-medium text-zinc-900"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-zinc-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/industrial-laser/1920/1080"
          alt="Industrial Background"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 md:pt-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
            <Zap className="w-3 h-3" />
            Han's Laser Korea Official Partner
          </div>
          <h1 className="text-3xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
            미래를 밝히는 <br />
            <span className="text-emerald-500 italic">레이저 기술의 정점</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed">
            (주)원공사는 Han's Laser Korea와 함께 최첨단 레이저 솔루션을 제공합니다. 
            정밀 엔지니어링부터 대규모 산업 설비까지, 고객의 성공을 위한 파트너가 되겠습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 group"
            >
              프로젝트 보기
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/10 flex items-center justify-center"
            >
              상담 문의
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
              <CheckCircle2 className="text-emerald-500 w-6 h-6" />
            </div>
            <div>
              <div className="text-white font-bold">100% 신뢰성</div>
              <div className="text-zinc-500 text-sm">정밀 가공 보장</div>
            </div>
          </div>
          <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "95%" }}
              transition={{ duration: 2, delay: 1 }}
              className="h-full bg-emerald-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/seed/factory-inside/800/800"
                alt="Factory Interior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-600 rounded-3xl -z-10 hidden md:block" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4">About Us</h2>
            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6 leading-tight">
              (주)원공사 <br />
              <span className="text-emerald-600">산업 엔지니어링의 새로운 기준</span>
            </h3>
            <p className="text-base md:text-lg text-zinc-600 mb-8 leading-relaxed">
              (주)원공사는 수년간의 현장 경험과 전문 지식을 바탕으로 대한민국 산업 발전에 기여해 왔습니다. 
              특히 Han's Laser Korea와의 전략적 파트너십을 통해 세계적인 수준의 레이저 가공 기술을 국내 시장에 공급하고 있습니다.
            </p>
            <div className="space-y-4">
              {[
                'Han\'s Laser Korea 공식 기술 파트너',
                '정밀 레이저 가공 및 시스템 통합 전문',
                'ISO 9001 품질 경영 시스템 인증',
                '전국 단위 신속한 유지보수 네트워크'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-500 w-5 h-5 flex-shrink-0" />
                  <span className="text-zinc-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">핵심 사업 분야</h3>
          <p className="text-base md:text-lg text-zinc-600">
            우리는 기술과 신뢰를 바탕으로 고객사의 비즈니스 가치를 극대화하는 최적의 솔루션을 제공합니다.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-zinc-100 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-zinc-900 mb-4">{service.title}</h4>
              <p className="text-zinc-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4">Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">주요 프로젝트 실적</h3>
            <p className="text-base md:text-lg text-zinc-600">
              Han's Laser Korea와 함께 수행한 다양한 산업 분야의 성공 사례를 확인하세요.
            </p>
          </div>
          <button className="flex items-center gap-2 text-emerald-600 font-bold hover:gap-3 transition-all">
            전체 보기 <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-zinc-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-emerald-600 transition-colors">
                {project.title}
              </h4>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [inquiry, setInquiry] = useState("");
  const [agreed, setAgreed] = useState(false);
  const submittingRef = useRef(false);

  const validateEmail = (val: string): "valid" | "invalid" => {
    // 1. 검증을 시작하기 전에 입력값의 앞뒤 공백을 반드시 제거(trim)한다.
    const trimmed = val.trim();
    
    // 2. trim 이후 문자열에 공백 문자(" ")가 하나라도 포함되어 있으면 즉시 invalid 처리한다.
    if (trimmed.includes(" ")) {
      return "invalid";
    }
    
    // 3. RFC를 엄격히 따르지 말고, 실사용 기준의 이메일 형식만 검증한다.
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(trimmed)) {
      return "invalid";
    }
    
    return "valid";
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let numbers = e.target.value.replace(/[^0-9]/g, "");
    let formatted = "";

    if (numbers.length < 4) {
      formatted = numbers;
    } else if (numbers.length < 8) {
      formatted = numbers.slice(0, 3) + "-" + numbers.slice(3);
    } else {
      formatted =
        numbers.slice(0, 3) + "-" +
        numbers.slice(3, 7) + "-" +
        numbers.slice(7, 11);
    }
    setPhone(formatted);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // 1. 검증 전 이메일 트리밍
    const trimmedEmail = email.trim();
    const validationResult = validateEmail(trimmedEmail);
    
    if (validationResult === "invalid") {
      e.preventDefault();
      setEmailError(true);
      alert("올바른 이메일 형식을 입력해주세요. (공백 포함 불가)");
      return;
    }

    // 트리밍된 이메일로 상태 업데이트 (전송 시 반영되도록)
    setEmail(trimmedEmail);
    setEmailError(false);
    
    console.log("상담 접수 데이터 전송 준비:", {
      companyName,
      userName,
      phone: phone.replace(/[^0-9]/g, ""),
      email: trimmedEmail,
      inquiry
    });
    
    submittingRef.current = true;
    setIsSubmitting(true);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-900 text-white overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-600/10 skew-x-12 translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xs font-bold text-emerald-500 uppercase tracking-[0.2em] mb-4">Contact Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
              전문가와 상담하여 <br />
              <span className="text-emerald-500">최적의 솔루션을 찾으세요</span>
            </h3>
            <p className="text-zinc-400 text-base md:text-lg mb-12">
              (주)원공사는 고객의 요구에 귀 기울입니다. 상담 내용을 남겨주시면 빠르게 연락드리겠습니다.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10">
                  <Phone className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <div className="text-zinc-500 text-sm font-bold uppercase mb-1">Phone</div>
                  <div className="text-xl font-medium">010-6355-8055</div>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10">
                  <Mail className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <div className="text-zinc-500 text-sm font-bold uppercase mb-1">Email</div>
                  <div className="text-xl font-medium">opendoor@jeonjadong.com</div>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10">
                  <MapPin className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <div className="text-zinc-500 text-sm font-bold uppercase mb-1">Office</div>
                  <div className="text-xl font-medium leading-snug">
                    경기도 안산시 단원구 산단로 123 <br />
                    (주)원공사 빌딩
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 text-zinc-900 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                </div>
                <h4 className="text-3xl font-bold mb-4">상담이 접수되었습니다</h4>
                <p className="text-zinc-600 text-lg mb-8">
                  빠른 시일 내에 담당자가 연락드리겠습니다. <br />
                  감사합니다.
                </p>
                <button 
                  onClick={() => {
                    setIsSubmitted(false);
                    setPhone("");
                    setCompanyName("");
                    setUserName("");
                    setEmail("");
                    setInquiry("");
                    setAgreed(false);
                  }}
                  className="text-emerald-600 font-bold hover:underline"
                >
                  새로 작성하기
                </button>
              </div>
            ) : (
              <>
                <h4 className="text-2xl md:text-3xl font-bold mb-4 text-center">전자동 상담 접수</h4>
                <p className="text-zinc-600 text-base md:text-lg mb-10 text-center leading-relaxed">
                  상담 내용을 남겨주시면 빠르게 연락드리겠습니다.
                </p>
                
                <form 
                  action="https://docs.google.com/forms/d/e/1FAIpQLSfzLvTe7lXKsZo39zx9N1Xer482rzw97x1L9eIqxZE6TJW9JA/formResponse" 
                  method="POST" 
                  target="hidden_iframe"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* Hidden inputs for Google Form submission - Ensure IDs match exactly */}
                  <input type="hidden" name="entry.1197734588" value={companyName} />
                  <input type="hidden" name="entry.410116931" value={userName} />
                  <input type="hidden" name="entry.220342773" value={phone.replace(/[^0-9]/g, "")} />
                  <input type="hidden" name="entry.1842282740" value={email.trim()} />
                  <input type="hidden" name="entry.1018759601" value={inquiry} />
                  <input type="hidden" name="entry.1745878659" value="동의합니다" />

                  {/* 회사명 */}
                  <div>
                    <label className="block text-sm font-bold text-zinc-700 mb-1">회사명</label>
                    <input 
                      type="text" 
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="회사명" 
                      required 
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                    />
                  </div>

                  {/* 이름 */}
                  <div>
                    <label className="block text-sm font-bold text-zinc-700 mb-1">이름</label>
                    <input 
                      type="text" 
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="이름" 
                      required 
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                    />
                  </div>

                  {/* 전화번호 */}
                  <div>
                    <label className="block text-sm font-bold text-zinc-700 mb-1">전화번호</label>
                    <input 
                      type="tel" 
                      value={phone}
                      onChange={handlePhoneChange}
                      inputMode="numeric"
                      placeholder="010-0000-0000" 
                      required 
                      maxLength={13}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                    />
                  </div>

                  {/* 의뢰인 이메일 */}
                  <div>
                    <label className="block text-sm font-bold text-zinc-700 mb-1">의뢰인 이메일</label>
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (emailError) setEmailError(false);
                      }}
                      placeholder="이메일" 
                      required 
                      className={`w-full bg-zinc-50 border ${emailError ? 'border-red-500' : 'border-zinc-200'} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all`}
                    />
                    {emailError && <p className="text-red-500 text-xs mt-1">올바른 이메일 형식을 입력해주세요.</p>}
                  </div>

                  {/* 문의내용 */}
                  <div>
                    <label className="block text-sm font-bold text-zinc-700 mb-1">문의내용</label>
                    <textarea 
                      value={inquiry}
                      onChange={(e) => setInquiry(e.target.value)}
                      placeholder="문의내용" 
                      rows={4}
                      required
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                    ></textarea>
                  </div>

                  {/* 개인정보 동의 */}
                  <label className="flex items-center gap-3 cursor-pointer group pt-2">
                    <input 
                      type="checkbox" 
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      required 
                      className="w-5 h-5 rounded border-zinc-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-sm text-zinc-600 group-hover:text-zinc-900 transition-colors">
                      개인정보 수집 및 이용에 동의합니다 (필수)
                    </span>
                  </label>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-zinc-400 text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-emerald-600/20 text-xl mt-4"
                  >
                    {isSubmitting ? "전송 중..." : "상담 접수하기"}
                  </button>
                </form>
              </>
            )}
            {/* Iframe stays in DOM to avoid race conditions */}
            <iframe 
              name="hidden_iframe" 
              id="hidden_iframe"
              style={{ display: 'none' }}
              onLoad={() => {
                if (submittingRef.current) {
                  console.log("구글 폼 전송 완료 확인 (Ref)");
                  setIsSubmitted(true);
                  setIsSubmitting(false);
                  submittingRef.current = false;
                }
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-500 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center">
                <Building2 className="text-white w-5 h-5" />
              </div>
              <span className="text-white font-bold">(주)원공사</span>
            </div>
            <p className="mt-2">
              대표이사: 한대리 | 사업자등록번호: 123-45-67890<br />
              이메일: opendoor@jeonjadong.com | 전화: 010-6355-8055
            </p>
          </div>
          <div className="flex gap-8 text-sm">
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
            <a href="#" className="hover:text-white transition-colors">이메일무단수집거부</a>
          </div>
          <div className="text-sm">
            © 2024 WonGongSa Co., Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingButtons = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToBottom = () => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-3">
      {/* 1. 전화 상담 (Mobile Only) */}
      <a
        href="tel:010-6355-8055"
        className="md:hidden w-10 h-10 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        title="전화 상담"
      >
        <Phone className="w-4 h-4" />
      </a>

      {/* 2. 문자 문의 (Mobile Only) */}
      <a
        href="sms:010-6355-8055"
        className="md:hidden w-10 h-10 bg-zinc-700 text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        title="문자 문의"
      >
        <MessageSquare className="w-4 h-4" />
      </a>

      {/* 4. 맨 위로 이동 */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="w-10 h-10 bg-white text-zinc-900 rounded-full shadow-lg flex items-center justify-center hover:bg-zinc-100 transition-colors border border-zinc-200"
            title="맨 위로"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* 5. 맨 아래로 이동 */}
      <button
        onClick={scrollToBottom}
        className="w-10 h-10 bg-white text-zinc-900 rounded-full shadow-lg flex items-center justify-center hover:bg-zinc-100 transition-colors border border-zinc-200"
        title="맨 아래로"
      >
        <ArrowDown className="w-4 h-4" />
      </button>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
