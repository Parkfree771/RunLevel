import { ArrowLeft, Target, Users, BarChart3, Award } from 'lucide-react';
import { Link } from 'wouter';

export default function About() {
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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">RunLevel 소개</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">내 러닝 등급은? - 과학적 데이터로 분석하는 러닝 퍼포먼스</p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Target className="text-blue-500 mr-3 h-6 w-6" />
                서비스 목적
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                RunLevel은 러닝을 사랑하는 모든 사람들이 자신의 기록을 객관적으로 평가하고, 
                더 나은 목표를 설정할 수 있도록 도와주는 러닝 퍼포먼스 분석 플랫폼입니다. 
                과학적인 통계 데이터를 바탕으로 성별, 거리별 맞춤형 등급과 퍼센타일을 제공하여 
                러너들의 실력 향상에 기여하고자 합니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <BarChart3 className="text-green-500 mr-3 h-6 w-6" />
                주요 기능
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">정확한 등급 평가</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    SS부터 D등급까지 세분화된 등급 시스템으로 정확한 실력 평가
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">퍼센타일 분석</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    전체 러너들 중 나의 위치를 정확한 수치로 확인
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">성별·거리별 분석</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    10km, 하프마라톤, 풀마라톤 각 거리별 맞춤 분석
                  </p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">개인화된 조언</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    등급별 맞춤형 러닝 가이드와 목표 설정 도움말
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Award className="text-yellow-500 mr-3 h-6 w-6" />
                등급 시스템
              </h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-500 to-purple-400 rounded-lg text-white">
                  <span className="font-bold text-lg">SS등급</span>
                  <span className="text-sm">엘리트 러너 (상위 1%)</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-lg text-white">
                  <span className="font-bold text-lg">S등급</span>
                  <span className="text-sm">최상급 러너 (상위 5%)</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-500 to-green-400 rounded-lg text-white">
                  <span className="font-bold text-lg">A등급</span>
                  <span className="text-sm">상급 러너 (상위 20%)</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg text-white">
                  <span className="font-bold text-lg">B등급</span>
                  <span className="text-sm">중급 러너 (평균 수준)</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-500 to-orange-400 rounded-lg text-white">
                  <span className="font-bold text-lg">C등급</span>
                  <span className="text-sm">초급 러너</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-500 to-gray-400 rounded-lg text-white">
                  <span className="font-bold text-lg">D등급</span>
                  <span className="text-sm">입문 러너</span>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Users className="text-indigo-500 mr-3 h-6 w-6" />
                데이터 기반 분석
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                RunLevel의 분석 결과는 실제 러닝 대회 기록과 통계 데이터를 바탕으로 제작되었습니다. 
                정규분포 이론을 적용하여 보다 정확하고 신뢰할 수 있는 등급 평가를 제공합니다.
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">분석 기준</h3>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• 대한민국 러너들의 실제 기록 데이터 활용</li>
                  <li>• 성별, 연령, 거리별 세분화된 통계 분석</li>
                  <li>• 정규분포 기반의 과학적 등급 산출</li>
                  <li>• 지속적인 데이터 업데이트로 정확성 향상</li>
                </ul>
              </div>
            </section>

            <section className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">RunLevel과 함께하는 러닝 여정</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                단순한 기록 측정을 넘어, RunLevel은 러너들이 자신의 현재 실력을 정확히 파악하고 
                체계적인 목표를 설정할 수 있도록 돕습니다. 과학적 데이터와 개인화된 분석으로 
                더욱 즐겁고 의미 있는 러닝 라이프를 만들어 보세요.
              </p>
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>연락처:</strong> runlevel.support@example.com<br/>
                  <strong>서비스 시작:</strong> 2025년 1월<br/>
                  <strong>언어 지원:</strong> 한국어, English
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}