export default function Privacy() {
  return (
    <main className="min-h-screen bg-[#030303] text-white">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-8 text-gradient">개인정보 처리방침</h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">1. 개인정보의 처리 목적</h2>
            <p className="mb-4">AI 개발 교육 플랫폼은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>회원 가입 및 관리</li>
              <li>교육 서비스 제공</li>
              <li>콘텐츠 제공</li>
              <li>서비스 개선 및 개발</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">2. 개인정보의 처리 및 보유기간</h2>
            <p>회원 탈퇴 시까지 또는 법정 보유기간까지</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">3. 정보주체의 권리, 의무 및 행사방법</h2>
            <p className="mb-4">이용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>개인정보 열람 요구</li>
              <li>개인정보 정정 및 삭제 요구</li>
              <li>개인정보 처리정지 요구</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">4. 개인정보의 안전성 확보조치</h2>
            <p className="mb-4">회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>관리적 조치: 내부관리계획 수립 및 시행</li>
              <li>기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치</li>
              <li>물리적 조치: 전산실, 자료보관실 등의 접근통제</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">5. 개인정보 보호책임자</h2>
            <p>개인정보 보호책임자: 홍길동<br />
            이메일: privacy@your-domain.com<br />
            전화번호: 02-XXX-XXXX</p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            본 개인정보 처리방침은 2024년 1월 1일부터 적용됩니다.
          </p>
        </div>
      </div>
    </main>
  );
} 