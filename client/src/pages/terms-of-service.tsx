import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

export default function TermsOfService() {
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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">서비스 이용약관</h1>
          
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">제1조 (목적)</h2>
              <p>이 약관은 RunLevel('내 러닝 등급은?', 이하 "서비스")이 제공하는 러닝 기록 분석 및 등급 평가 서비스의 이용조건 및 절차에 관한 사항과 기타 필요한 사항을 규정함을 목적으로 합니다.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">제2조 (정의)</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>"서비스"</strong>란 "RunLevel"이 제공하는 러닝 기록 분석, 등급 평가, 퍼센타일 계산 등의 온라인 서비스를 의미합니다.</li>
                <li><strong>"이용자"</strong>란 이 약관에 따라 서비스를 이용하는 회원 및 비회원을 통틀어 이르는 말입니다.</li>
                <li><strong>"콘텐츠"</strong>란 서비스에서 제공하는 러닝 데이터, 분석 결과, 등급 정보 등을 말합니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">제3조 (약관의 효력 및 변경)</h2>
              <p>① 이 약관은 서비스를 이용하고자 하는 모든 이용자에 대하여 그 효력을 발생합니다.</p>
              <p>② 서비스는 약관의 내용을 이용자가 쉽게 알 수 있도록 서비스의 초기 서비스화면에 게시합니다.</p>
              <p>③ 서비스는 필요한 경우 관련 법령을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">제4조 (서비스의 제공)</h2>
              <p>서비스는 다음과 같은 업무를 수행합니다:</p>
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>러닝 기록 입력 및 분석</li>
                <li>성별, 거리별 등급 평가</li>
                <li>퍼센타일 계산 및 비교 분석</li>
                <li>러닝 가이드 및 조언 제공</li>
                <li>기타 러닝 관련 정보 제공</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">제5조 (서비스 이용)</h2>
              <p>① 서비스는 연중무휴, 1일 24시간 제공함을 원칙으로 합니다.</p>
              <p>② 서비스는 컴퓨터 등 정보통신설비의 보수점검·교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">제6조 (이용자의 의무)</h2>
              <p>이용자는 다음 행위를 하여서는 안됩니다:</p>
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>허위 정보 입력</li>
                <li>타인의 정보도용</li>
                <li>서비스의 정상적인 운영을 방해하는 행위</li>
                <li>관련 법령을 위반하는 행위</li>
                <li>서비스의 지적재산권을 침해하는 행위</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">제7조 (면책조항)</h2>
              <p>① 서비스는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</p>
              <p>② 서비스는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.</p>
              <p>③ 서비스에서 제공하는 등급 및 분석 결과는 참고용이며, 정확성을 보장하지 않습니다.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">제8조 (분쟁해결)</h2>
              <p>① 서비스는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치·운영합니다.</p>
              <p>② 서비스와 이용자간에 발생한 전자거래 분쟁에 관한 소송은 대한민국 법을 적용하며, 서비스의 본사 소재지를 관할하는 법원에서 진행합니다.</p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">부칙</h2>
              <p>이 약관은 2025년 1월 19일부터 적용됩니다.</p>
              <p className="mt-2">문의사항이 있으시면 runlevel.support@example.com으로 연락주시기 바랍니다.</p>
            </section>
          </div>
        </div>
      </div>
      
    </div>
  );
}