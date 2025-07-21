import { ArrowLeft, Mail, MessageSquare, Phone } from 'lucide-react';
import { Link } from 'wouter';

export default function Contact() {
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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">문의하기</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">RunLevel 서비스에 대한 문의사항이나 의견을 보내주세요.</p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <MessageSquare className="text-blue-500 mr-3 h-6 w-6" />
                연락처 정보
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Mail className="text-blue-500 mr-3 h-6 w-6" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">이메일 문의</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    서비스 관련 문의, 기술적 이슈, 개선 제안 등 모든 문의를 환영합니다.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                    <p className="font-mono text-blue-600 dark:text-blue-400">runlevel.support@example.com</p>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    ※ 영업일 기준 24-48시간 내 답변드립니다.
                  </p>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Phone className="text-green-500 mr-3 h-6 w-6" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">고객지원</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    긴급한 기술적 문제나 서비스 장애 신고는 이메일로 연락주시면 우선 처리해드립니다.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>운영시간:</strong> 평일 09:00 - 18:00 (KST)
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>휴무:</strong> 주말 및 공휴일
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">자주 묻는 질문</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Q: 등급은 어떤 기준으로 산정되나요?</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    대한민국 러너들의 실제 대회 기록 데이터를 바탕으로 정규분포 이론을 적용하여 산정됩니다. 
                    성별과 거리별로 세분화된 통계를 사용하여 정확한 등급을 제공합니다.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Q: 개인정보가 저장되나요?</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    RunLevel은 사용자의 개인정보를 수집하거나 저장하지 않습니다. 
                    모든 계산은 브라우저에서 로컬로 처리되며, 입력한 기록은 페이지를 새로고침하면 삭제됩니다.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Q: 더 다양한 거리의 분석을 제공할 예정인가요?</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    현재 10km, 하프마라톤, 풀마라톤을 지원하며, 향후 5km, 5마일 등 
                    다양한 거리의 분석을 추가할 예정입니다. 새로운 기능에 대한 의견을 보내주세요!
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">피드백 및 제안</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                RunLevel을 더욱 발전시키기 위한 여러분의 의견을 기다립니다. 
                새로운 기능 제안, 사용성 개선점, 버그 신고 등 모든 피드백을 소중히 검토하겠습니다.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">기능 제안</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• 새로운 분석 지표 추가</li>
                    <li>• 다양한 거리 지원</li>
                    <li>• 목표 설정 및 훈련 가이드</li>
                    <li>• 기록 히스토리 관리</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">개선 사항</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• 사용자 인터페이스 개선</li>
                    <li>• 모바일 최적화</li>
                    <li>• 접근성 향상</li>
                    <li>• 번역 및 다국어 지원</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="text-center bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                RunLevel 팀이 최고의 러닝 분석 서비스를 제공하기 위해 노력하고 있습니다.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                여러분의 러닝 여정을 응원합니다! 🏃‍♂️🏃‍♀️
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}