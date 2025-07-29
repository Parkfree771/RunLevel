import { ArrowLeft, Clock, Heart, Target, TrendingUp, Trophy, Users, Link as LinkIcon } from 'lucide-react';
import { Link } from 'wouter';

export default function RunningGuide() {
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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">러닝 가이드</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">과학적 트레이닝으로 기록 향상하기</p>
          
          <div className="space-y-12">
            {/* 초보자 가이드 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <Users className="text-green-500 mr-3 h-6 w-6" />
                러닝 입문자를 위한 완벽 가이드
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">1단계: 걷기에서 시작하기</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• <strong>1-2주차:</strong> 30분 빠른 걷기 (주 3-4회)</li>
                    <li>• <strong>3-4주차:</strong> 걷기 25분 + 천천히 뛰기 5분</li>
                    <li>• <strong>5-6주차:</strong> 걷기 20분 + 천천히 뛰기 10분</li>
                    <li>• <strong>7-8주차:</strong> 걷기 15분 + 천천히 뛰기 15분</li>
                  </ul>
                  <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <p className="text-sm text-green-700 dark:text-green-300">
                      <strong>핵심 포인트:</strong> 무리하지 않고 점진적으로 뛰는 시간을 늘려가세요.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">2단계: 지속적인 러닝 능력 기르기</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• <strong>9-10주차:</strong> 걷기 10분 + 뛰기 20분</li>
                    <li>• <strong>11-12주차:</strong> 걷기 5분 + 뛰기 25분</li>
                    <li>• <strong>13주차 이후:</strong> 30분 연속 러닝</li>
                    <li>• <strong>목표:</strong> 5km 연속 러닝 완성</li>
                  </ul>
                  <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      <strong>주의사항:</strong> 부상 방지를 위해 휴식일을 반드시 지키세요.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">RunLevel 등급 연계 팁</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">이 가이드를 성공적으로 마치면, 당신은 <strong>D등급</strong>을 넘어 <strong>C등급</strong> 러너로 성장할 수 있는 기반을 다지게 됩니다. 꾸준함이 가장 중요합니다!</p>
              </div>
            </section>

            {/* 거리별 훈련법 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <Target className="text-purple-500 mr-3 h-6 w-6" />
                거리별 전문 트레이닝 방법
              </h2>
              
              <div className="space-y-6">
                {/* 10km 훈련 */}
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm mr-3">10KM</span>
                    10km 마스터하기
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">주간 훈련 스케줄</h4>
                      <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        <li><strong>월요일:</strong> 휴식 또는 가벼운 걷기 30분</li>
                        <li><strong>화요일:</strong> 인터벌 훈련 (400m × 8회, 회복 200m 조깅)</li>
                        <li><strong>수요일:</strong> 이지런 30-40분 (편안한 대화 속도)</li>
                        <li><strong>목요일:</strong> 템포런 20분 (10km 목표 속도보다 약간 빠르게)</li>
                        <li><strong>금요일:</strong> 휴식</li>
                        <li><strong>토요일:</strong> 롱런 60-90분 (천천히)</li>
                        <li><strong>일요일:</strong> 회복 러닝 20-30분</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">목표 시간별 전략</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                          <p className="text-sm"><strong>서브 50분 목표 (A등급):</strong> 5:00/km 페이스 유지 훈련</p>
                        </div>
                        <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                          <p className="text-sm"><strong>서브 45분 목표 (S등급):</strong> 4:30/km 페이스, 강도 높은 인터벌 필수</p>
                        </div>
                        <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                          <p className="text-sm"><strong>서브 40분 목표 (SS등급):</strong> 4:00/km 페이스, 전문적 코칭 권장</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 하프마라톤 훈련 */}
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm mr-3">21.1KM</span>
                    하프마라톤 정복하기
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">12주 훈련 프로그램</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                          <p className="text-sm font-medium text-blue-800 dark:text-blue-300">1-4주차: 기초 체력 단계</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">주간 러닝량: 20-30km, 최대 거리: 10-12km</p>
                        </div>
                        <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                          <p className="text-sm font-medium text-green-800 dark:text-green-300">5-8주차: 지구력 향상 단계</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">주간 러닝량: 35-45km, 최대 거리: 15-18km</p>
                        </div>
                        <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                          <p className="text-sm font-medium text-purple-800 dark:text-purple-300">9-12주차: 레이스 준비 단계</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">주간 러닝량: 40-50km, 시뮬레이션 러닝</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">핵심 워크아웃</h4>
                      <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        <li><strong>LSD (Long Slow Distance):</strong> 목표 페이스보다 1-2분/km 느리게</li>
                        <li><strong>템포런:</strong> 하프 목표 페이스로 8-12km</li>
                        <li><strong>인터벌:</strong> 1km × 5회 (목표 페이스보다 30초/km 빠르게)</li>
                        <li><strong>페이스런:</strong> 목표 페이스로 15-18km</li>
                        <li><strong>회복런:</strong> 매우 천천히 30-45분</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 풀마라톤 훈련 */}
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm mr-3">42.195KM</span>
                    풀마라톤 완전 정복
                  </h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                        <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">초급자 (서브 5시간, C등급)</h4>
                        <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
                          <li>• 주간 러닝량: 40-60km</li>
                          <li>• 롱런: 최대 32km</li>
                          <li>• 훈련 기간: 16-20주</li>
                          <li>• 목표 페이스: 7:00-7:30/km</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                        <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">중급자 (서브 4시간, A등급)</h4>
                        <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
                          <li>• 주간 러닝량: 60-80km</li>
                          <li>• 롱런: 최대 35km</li>
                          <li>• 훈련 기간: 16-20주</li>
                          <li>• 목표 페이스: 5:40/km</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                        <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">고급자 (서브 3시간, SS등급)</h4>
                        <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
                          <li>• 주간 러닝량: 80-120km</li>
                          <li>• 롱런: 최대 38km</li>
                          <li>• 훈련 기간: 20-24주</li>
                          <li>• 목표 페이스: 4:15/km</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 운동생리학적 기초 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <Heart className="text-red-500 mr-3 h-6 w-6" />
                운동 생리학의 기초
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">심박수 기반 훈련</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">최대심박수 계산법</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">220 - 나이 = 최대심박수 (추정치)</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 bg-green-100 dark:bg-green-900/30 rounded">
                        <span className="text-sm font-medium text-green-800 dark:text-green-300">회복존 (60-70%)</span>
                        <span className="text-xs text-green-600 dark:text-green-400">회복러닝</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-blue-100 dark:bg-blue-900/30 rounded">
                        <span className="text-sm font-medium text-blue-800 dark:text-blue-300">유산소존 (70-80%)</span>
                        <span className="text-xs text-blue-600 dark:text-blue-400">LSD, 이지런</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-orange-100 dark:bg-orange-900/30 rounded">
                        <span className="text-sm font-medium text-orange-800 dark:text-orange-300">임계존 (80-90%)</span>
                        <span className="text-xs text-orange-600 dark:text-orange-400">템포런, 마라톤 페이스</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-red-100 dark:bg-red-900/30 rounded">
                        <span className="text-sm font-medium text-red-800 dark:text-red-300">VO₂Max존 (90-95%)</span>
                        <span className="text-xs text-red-600 dark:text-red-400">인터벌</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">에너지 시스템 이해</h3>
                  <div className="space-y-4">
                    <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">ATP-CP 시스템 (0-10초)</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">순간적인 폭발력, 단거리 스프린트</p>
                    </div>
                    <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">젖산 시스템 (10초-2분)</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">고강도 운동, 800m-1500m 달리기</p>
                    </div>
                    <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">유산소 시스템 (2분 이상)</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">장거리 달리기의 주 에너지원</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">더 알아보기</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">심박수 훈련에 대한 더 깊이 있는 정보는 <a href="https://www.runnersworld.com/training/a20812270/heart-rate-training-can-make-you-a-better-runner/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Runner's World의 가이드</a>를 참고하세요.</p>
              </div>
            </section>

            {/* 영양과 회복 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <TrendingUp className="text-orange-500 mr-3 h-6 w-6" />
                영양 섭취와 회복 전략
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">러닝 전 영양 섭취</h3>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li><strong>3-4시간 전:</strong> 복합 탄수화물 중심의 식사</li>
                    <li><strong>1-2시간 전:</strong> 가벼운 탄수화물 (바나나, 토스트)</li>
                    <li><strong>30분 전:</strong> 소량의 스포츠드링크</li>
                    <li><strong>피해야 할 것:</strong> 고지방, 고섬유질, 새로운 음식</li>
                  </ul>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">러닝 중 보급</h3>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li><strong>수분:</strong> 15-20분마다 150-200ml</li>
                    <li><strong>전해질:</strong> 60분 이상 운동 시 필수</li>
                    <li><strong>탄수화물:</strong> 시간당 30-60g (장거리)</li>
                    <li><strong>온도:</strong> 10-15°C의 시원한 음료</li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">러닝 후 회복</h3>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li><strong>30분 이내:</strong> 탄수화물:단백질 = 3:1 비율</li>
                    <li><strong>수분 보충:</strong> 체중 감소량의 150%</li>
                    <li><strong>스트레칭:</strong> 10-15분 정적 스트레칭</li>
                    <li><strong>수면:</strong> 하루 7-9시간 양질의 수면</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 부상 예방 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <Trophy className="text-yellow-500 mr-3 h-6 w-6" />
                부상 예방과 관리
              </h2>
              
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">주요 러닝 부상과 예방법</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                        <h4 className="font-medium text-gray-900 dark:text-white text-sm">러너스 니 (무릎 통증)</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">대퇴사두근 강화, 점진적 훈련량 증가</p>
                      </div>
                      <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                        <h4 className="font-medium text-gray-900 dark:text-white text-sm">족저근막염</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">적절한 러닝화, 종아리 스트레칭</p>
                      </div>
                      <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                        <h4 className="font-medium text-gray-900 dark:text-white text-sm">정강이 통증</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">점진적 훈련, 앞정강이근 강화</p>
                      </div>
                      <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                        <h4 className="font-medium text-gray-900 dark:text-white text-sm">아킬레스건염</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">종아리 근육 유연성, 적절한 워밍업</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">부상 예방 체크리스트</h3>
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <li>✓ 훈련량은 주당 10% 이내로 증가</li>
                      <li>✓ 적절한 러닝화 착용 (500km마다 교체)</li>
                      <li>✓ 워밍업 10분, 쿨다운 10분 필수</li>
                      <li>✓ 주 1-2일 완전 휴식일 확보</li>
                      <li>✓ 근력 운동 주 2-3회 실시</li>
                      <li>✓ 몸의 이상 신호 무시하지 않기</li>
                      <li>✓ 다양한 지면에서 훈련하기</li>
                      <li>✓ 적절한 수면과 영양 섭취</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">RunLevel 등급 연계 팁</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">부상은 모든 등급의 러너에게 찾아올 수 있습니다. 특히 기록 단축을 목표로 하는 <strong>B등급 이상</strong>의 러너들은 부상 예방에 각별히 신경 써야 합니다. 통증이 느껴지면 즉시 휴식을 취하고 전문가의 진료를 받으세요.</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">부상 예방에 대한 자세한 정보는 <a href="https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/running/art-20047897" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Mayo Clinic의 가이드</a>를 참고하세요.</p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
      
    </div>
  );
}
