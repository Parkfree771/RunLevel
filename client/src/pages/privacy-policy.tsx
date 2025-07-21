import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-6">
          <Link href="/">
            <button className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              홈으로 돌아가기
            </button>
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">개인정보처리방침</h1>
          
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">1. 개인정보의 처리목적</h2>
              <p>RunLevel('내 러닝 등급은?')은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>러닝 기록 분석 및 등급 평가 서비스 제공</li>
                <li>서비스 개선 및 통계 분석</li>
                <li>광고 서비스 제공 (Google AdSense)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2. 개인정보의 처리 및 보유기간</h2>
              <p>RunLevel은 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
              <p className="mt-2">현재 본 서비스는 사용자의 개인정보를 수집하거나 저장하지 않으며, 모든 계산은 사용자의 브라우저에서 로컬로 처리됩니다.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3. 개인정보의 제3자 제공</h2>
              <p>RunLevel은 원칙적으로 정보주체의 개인정보를 수집·이용 목적으로 명시한 범위 내에서 처리하며, 정보주체의 사전 동의 없이는 본래의 목적 범위를 초과하여 처리하거나 제3자에게 제공하지 않습니다.</p>
              <p className="mt-2">다만, Google AdSense 광고 서비스를 통해 다음과 같은 정보가 Google에 제공될 수 있습니다:</p>
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>쿠키 정보</li>
                <li>IP 주소</li>
                <li>브라우저 정보</li>
                <li>방문 페이지 정보</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4. 개인정보처리의 위탁</h2>
              <p>RunLevel은 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다:</p>
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>위탁받는 자: Google LLC</li>
                <li>위탁하는 업무의 내용: 광고 서비스 제공</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">5. 정보주체의 권리·의무 및 행사방법</h2>
              <p>정보주체는 RunLevel에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다:</p>
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>개인정보 처리정지 요구권</li>
                <li>개인정보 열람요구권</li>
                <li>개인정보 정정·삭제요구권</li>
                <li>개인정보 처리정지 요구권</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">6. 쿠키(Cookie) 사용에 관한 사항</h2>
              <p>RunLevel은 개인화되고 맞춤화된 서비스를 제공하기 위해서 이용자의 정보를 저장하고 수시로 불러오는 쿠키(cookie)를 사용합니다.</p>
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>쿠키의 사용목적: 맞춤형 광고 서비스 제공</li>
                <li>쿠키의 설치·운영 및 거부: 웹브라우저 상단의 도구 &gt; 인터넷 옵션 &gt; 개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부할 수 있습니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">7. 개인정보 보호책임자</h2>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <p><strong>개인정보 보호책임자</strong></p>
                <p>연락처: runlevel.support@example.com</p>
                <p>처리현황 신고는 개인정보보호위원회 개인정보보호 종합지원 포털(www.privacy.go.kr)의 '개인정보 신고센터'를 이용하시거나 개인정보 침해신고센터(privacy.go.kr / 전화: 국번없이 182)로 신고하실 수 있습니다.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">8. 개인정보처리방침 변경</h2>
              <p>이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.</p>
              <p className="mt-2"><strong>시행일자: 2025년 1월 19일</strong></p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}