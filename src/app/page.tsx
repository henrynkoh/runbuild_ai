import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030303] text-white overflow-x-hidden">
      {/* Header */}
      <nav className="fixed w-full z-50 glass-effect animate-fade-in">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <span className="px-3 py-1 bg-purple-600/10 border border-purple-600/20 rounded-full text-sm text-purple-400 hover:bg-purple-600/20 transition-smooth">PWA</span>
              <span className="px-3 py-1 bg-green-600/10 border border-green-600/20 rounded-full text-sm text-green-400 hover:bg-green-600/20 transition-smooth">Manifest</span>
              <span className="px-3 py-1 bg-blue-600/10 border border-blue-600/20 rounded-full text-sm text-blue-400 hover:bg-blue-600/20 transition-smooth">Service</span>
            </div>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 rounded-lg flex items-center gap-2 transition-smooth hover:scale-105">
                <span>📝</span> 저장
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-purple-600/80 to-pink-600/80 hover:from-purple-600 hover:to-pink-600 rounded-lg flex items-center gap-2 transition-smooth hover:scale-105">
                <span>🚀</span> 프로젝트
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/5 to-transparent animate-fade-in"></div>
        <div className="absolute -top-1/2 left-1/2 transform -translate-x-1/2 w-[1000px] h-[1000px] bg-purple-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-6 pt-20">
          <h1 className="text-6xl font-bold mb-6 text-gradient animate-slide-up">AI 개발 교육 플랫폼</h1>
          <p className="text-xl text-gray-400 max-w-2xl mb-8 animate-slide-up animate-delay-1">최신 AI 기술과 개발 트렌드를 배우고 실무에 적용하세요. 실전 프로젝트부터 기초 이론까지 체계적인 커리큘럼을 제공합니다.</p>
          <div className="flex gap-4 animate-slide-up animate-delay-2">
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition-smooth hover:scale-105">
              시작하기
            </button>
            <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg font-semibold hover:bg-white/10 transition-smooth hover:scale-105">
              더 알아보기
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="relative py-16 border-t border-b border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "15K+", label: "수강생" },
              { number: "200+", label: "강의 콘텐츠" },
              { number: "98%", label: "수강 만족도" },
              { number: "24/7", label: "학습 지원" }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-4xl font-bold text-gradient-gold mb-2 hover:scale-110 transition-smooth">{stat.number}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Resources Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 relative">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-3 animate-slide-up">
          <span className="text-pink-400 glow">●</span>
          <span className="text-gradient">인기 무료 자료</span>
        </h2>
        <p className="text-gray-400 mb-6 max-w-2xl animate-slide-up animate-delay-1">무료로 활용하고 다운로드 받을 수 있는 자료 입니다. AI 웹앱 개발부터 업무 자동화까지 다양한 리소스를 제공합니다.</p>
        <p className="text-gray-500 mb-12 max-w-2xl animate-slide-up animate-delay-2">초보자부터 전문가까지 모두가 활용할 수 있는 실용적인 자료들을 엄선했습니다.</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "→",
              color: "blue",
              title: "AI 웹앱",
              desc: "유용한 AI웹앱 자료",
              items: ["ChatGPT 활용 가이드", "AI 모델 통합 예제", "성능 최적화 팁"]
            },
            {
              icon: "✓",
              color: "green",
              title: "스크립트",
              desc: "업무자동화 자료",
              items: ["자동화 스크립트 모음", "데이터 처리 도구", "워크플로우 템플릿"]
            },
            {
              icon: "+",
              color: "purple",
              title: "교육자료",
              desc: "강의와 도서 자료",
              items: ["입문자 가이드", "실전 프로젝트", "참고 자료 모음"]
            }
          ].map((card, index) => (
            <div key={index} 
                 className="dark-card rounded-2xl p-8 hover-float cursor-pointer group animate-scale-in" 
                 style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`text-${card.color}-400 text-4xl mb-6 transform group-hover:scale-110 transition-transform`}>{card.icon}</div>
              <h3 className={`text-xl font-bold mb-3 group-hover:text-${card.color}-400 transition-colors`}>{card.title}</h3>
              <p className="text-gray-400 mb-4">{card.desc}</p>
              <ul className="space-y-2 text-gray-500">
                {card.items.map((item, i) => (
                  <li key={i} className="transition-smooth hover:text-gray-300">• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Video Lectures Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-600/5 to-transparent"></div>
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-3 animate-slide-up">
          <span className="text-orange-400 glow">●</span>
          <span className="text-gradient">인기 동영상 강의</span>
        </h2>
        <p className="text-gray-400 mb-6 max-w-2xl animate-slide-up animate-delay-1">가장 인기있는 AI를 활용한 웹만들기 강의입니다. 실전 프로젝트를 통해 배우는 현장 중심 교육을 제공합니다.</p>
        <p className="text-gray-500 mb-12 max-w-2xl animate-slide-up animate-delay-2">현업 전문가들의 실무 경험과 노하우를 바탕으로 제작된 프리미엄 콘텐츠를 만나보세요.</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              color: "red",
              title: "AI코딩 마스터",
              items: ["실전 프로젝트 중심 학습", "단계별 실습 가이드", "현업 활용 사례 분석"],
              students: "1.2만명",
              rating: "4.9/5"
            },
            {
              color: "blue",
              title: "API활용 엔만들기",
              items: ["API 기초부터 실전까지", "실무 활용 예제", "성능 최적화 가이드"],
              students: "8.5천명",
              rating: "4.8/5"
            },
            {
              color: "green",
              title: "AI활용 홈페이지 개발",
              items: ["AI 도구 활용 전략", "최신 개발 트렌드", "실전 프로젝트 구현"],
              students: "5.3천명",
              rating: "4.9/5"
            }
          ].map((course, index) => (
            <div key={index} 
                 className="dark-card rounded-2xl p-8 hover-float cursor-pointer relative group animate-scale-in"
                 style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`absolute inset-0 bg-gradient-to-b from-${course.color}-600/5 to-transparent rounded-2xl transition-opacity opacity-0 group-hover:opacity-100`}></div>
              <div className="relative">
                <div className={`bg-${course.color}-900/30 text-${course.color}-500 px-4 py-2 rounded-lg inline-block mb-6 shimmer`}>
                  YOUTUBE
                </div>
                <h3 className={`text-2xl font-bold mb-6 group-hover:text-${course.color}-400 transition-colors`}>{course.title}</h3>
                <ul className="space-y-3 text-gray-400">
                  {course.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 transition-smooth hover:text-gray-300">
                      <span className={`text-${course.color}-400`}>•</span> {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-white/5">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">수강생 {course.students}</span>
                    <span className={`text-${course.color}-400`}>⭐ {course.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 to-transparent animate-fade-in"></div>
        <div className="absolute -bottom-1/2 left-1/2 transform -translate-x-1/2 w-[1000px] h-[1000px] bg-purple-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient animate-slide-up">지금 시작하세요</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto animate-slide-up animate-delay-1">
            AI 개발의 미래를 함께 만들어갈 준비가 되셨나요?<br/>
            지금 바로 무료 강의로 시작해보세요.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-lg hover:opacity-90 transition-smooth hover:scale-105 animate-slide-up animate-delay-2">
            무료 강의 시작하기
          </button>
        </div>
      </section>
    </main>
  );
}
