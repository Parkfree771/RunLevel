import { ArrowLeft, Calendar, Clock, Target, Zap } from 'lucide-react';
import { Link } from 'wouter';

export default function TrainingPrograms() {
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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">맞춤형 훈련 프로그램</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">목표와 실력에 맞는 체계적인 훈련 계획</p>
          
          <div className="space-y-12">
            {/* 8주 5km 프로그램 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <Target className="text-green-500 mr-3 h-6 w-6" />
                초보자를 위한 8주 5km 완주 프로그램
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">프로그램 목표</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• 8주 후 5km 논스톱 완주</li>
                    <li>• 기초 체력과 지구력 향상</li>
                    <li>• 올바른 러닝 폼 습득</li>
                    <li>• 부상 없는 안전한 러닝</li>
                  </ul>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">참여 조건</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• 러닝 경험이 거의 없는 초보자</li>
                    <li>• 20분 빠른 걸음이 가능한 체력</li>
                    <li>• 주 3-4회 훈련 시간 확보</li>
                    <li>• 건강한 무릎과 발목 상태</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                {[1,2,3,4,5,6,7,8].map(week => (
                  <div key={week} className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                    <div className="flex items-center mb-3">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">{week}주차</span>
                      {week <= 2 && <span className="text-xs text-gray-600 dark:text-gray-400">기초 적응 단계</span>}
                      {week >= 3 && week <= 5 && <span className="text-xs text-gray-600 dark:text-gray-400">점진적 향상 단계</span>}
                      {week >= 6 && <span className="text-xs text-gray-600 dark:text-gray-400">목표 완성 단계</span>}
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">운동 1일차</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {week <= 2 ? `걷기 ${15 + week * 2}분 + 뛰기 ${week * 2}분` :
                           week <= 4 ? `걷기 ${18 - week}분 + 뛰기 ${week * 3}분` :
                           week <= 6 ? `걷기 ${10}분 + 뛰기 ${week * 4}분` :
                           `뛰기 ${week * 4}분 (걷기 휴식 2-3회)`}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">운동 2일차</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {week <= 3 ? "활동적 휴식 (걷기 20분)" :
                           week <= 5 ? `걷기 ${20 - week}분 + 가벼운 뛰기 ${week * 2}분` :
                           `연속 뛰기 ${week * 3}분 + 걷기 회복`}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">운동 3일차</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {week <= 2 ? `걷기 ${20}분 + 뛰기 ${week}분` :
                           week <= 5 ? `인터벌: 뛰기 ${week}분 + 걷기 2분 (3세트)` :
                           week === 6 ? "목표: 5km 도전 (걷기 휴식 허용)" :
                           week === 7 ? "5km 연속 러닝 연습" :
                           "5km 완주 테스트"}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 12주 10km 프로그램 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <Zap className="text-orange-500 mr-3 h-6 w-6" />
                12주 10km 기록 단축 프로그램
              </h2>
              
              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">목표별 맞춤 프로그램</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">서브 60분 달성</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">현재 기록: 65-70분</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">목표 페이스: 6:00/km</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">서브 50분 달성</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">현재 기록: 52-58분</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">목표 페이스: 5:00/km</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">서브 45분 달성</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">현재 기록: 46-50분</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">목표 페이스: 4:30/km</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-4 gap-4">
                  {['기초 체력 단계 (1-3주)', '속도 향상 단계 (4-6주)', '지구력 강화 단계 (7-9주)', '레이스 준비 단계 (10-12주)'].map((phase, index) => (
                    <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm">{phase}</h4>
                      <div className="space-y-2">
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          <strong>주요 훈련:</strong> 
                          {index === 0 && " 이지런, 기초 인터벌"}
                          {index === 1 && " 템포런, 1km 인터벌"}
                          {index === 2 && " 장거리 러닝, 페이스런"}
                          {index === 3 && " 시뮬레이션, 테이퍼링"}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          <strong>주간 거리:</strong>
                          {index === 0 && " 20-30km"}
                          {index === 1 && " 30-40km"}
                          {index === 2 && " 35-45km"}
                          {index === 3 && " 25-35km"}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">주간 훈련 구성 예시 (서브 50분 목표)</h3>
                  <div className="grid md:grid-cols-7 gap-2">
                    {[
                      { day: '월', workout: '휴식 또는 크로스 트레이닝' },
                      { day: '화', workout: '인터벌: 1km × 5회 (목표 페이스)' },
                      { day: '수', workout: '이지런 6km (6:30/km)' },
                      { day: '목', workout: '템포런 4km (5:00/km)' },
                      { day: '금', workout: '휴식' },
                      { day: '토', workout: '롱런 8-12km (6:00/km)' },
                      { day: '일', workout: '회복 러닝 4km (7:00/km)' }
                    ].map(item => (
                      <div key={item.day} className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <div className="font-medium text-blue-800 dark:text-blue-300 mb-1">{item.day}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">{item.workout}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 16주 하프마라톤 프로그램 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <Calendar className="text-purple-500 mr-3 h-6 w-6" />
                16주 하프마라톤 완주/기록 단축 프로그램
              </h2>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl mb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">프로그램 특징</h3>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• 체계적인 4단계 훈련 과정</li>
                      <li>• 주간 러닝량 점진적 증가</li>
                      <li>• 다양한 훈련법 혼합</li>
                      <li>• 부상 예방 중점 관리</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">목표 시간대별 접근</h3>
                    <div className="space-y-2">
                      <div className="p-2 bg-white dark:bg-gray-800 rounded text-sm">
                        <strong>서브 2시간:</strong> 5:40/km 페이스 유지 훈련
                      </div>
                      <div className="p-2 bg-white dark:bg-gray-800 rounded text-sm">
                        <strong>서브 1시간 50분:</strong> 5:10/km 고강도 훈련
                      </div>
                      <div className="p-2 bg-white dark:bg-gray-800 rounded text-sm">
                        <strong>서브 1시간 40분:</strong> 4:45/km 전문가 훈련
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { phase: "기초 체력 구축 (1-4주)", distance: "20-35km", focus: "이지런, 기초 지구력" },
                  { phase: "지구력 향상 (5-8주)", distance: "35-50km", focus: "롱런, 템포런 강화" },
                  { phase: "스피드 개발 (9-12주)", distance: "45-60km", focus: "인터벌, 페이스런" },
                  { phase: "레이스 준비 (13-16주)", distance: "35-50km", focus: "시뮬레이션, 테이퍼링" }
                ].map((stage, index) => (
                  <div key={index} className="bg-white dark:bg-gray-700 p-5 rounded-lg border border-gray-200 dark:border-gray-600">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{stage.phase}</h4>
                      <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <span>주간 거리: {stage.distance}</span>
                        <span>주요 훈련: {stage.focus}</span>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-4 gap-4">
                      {Array.from({length: 4}).map((_, weekIndex) => {
                        const weekNum = index * 4 + weekIndex + 1;
                        return (
                          <div key={weekIndex} className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                            <h5 className="font-medium text-purple-800 dark:text-purple-300 mb-2">{weekNum}주차</h5>
                            <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                              <li>롱런: {8 + index * 2 + weekIndex}km</li>
                              <li>템포런: {3 + index}km</li>
                              <li>인터벌: {index >= 2 ? '1km × 4-6회' : '800m × 4회'}</li>
                              <li>주간 총량: {20 + index * 8 + weekIndex * 3}km</li>
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 20주 마라톤 프로그램 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <Clock className="text-red-500 mr-3 h-6 w-6" />
                20주 풀마라톤 완주 프로그램
              </h2>
              
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl mb-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">42.195km의 위대한 도전</h3>
                  <p className="text-gray-700 dark:text-gray-300">체계적인 20주 훈련으로 인생의 목표를 달성하세요</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">완주 목표 (5-6시간)</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">마라톤 입문자 추천</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">평균 페이스: 7:00-8:30/km</p>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">서브 4시간 목표</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">아마추어 마라토너의 꿈</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">평균 페이스: 5:40/km</p>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">서브 3시간 30분</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">숙련된 마라토너 도전</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">평균 페이스: 5:00/km</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">훈련 단계별 구성</h3>
                  <div className="grid md:grid-cols-5 gap-4">
                    {[
                      { phase: "기초 준비", weeks: "1-4주", km: "30-50km" },
                      { phase: "체력 구축", weeks: "5-8주", km: "50-70km" },
                      { phase: "지구력 강화", weeks: "9-12주", km: "70-90km" },
                      { phase: "스피드 개발", weeks: "13-16주", km: "80-100km" },
                      { phase: "레이스 준비", weeks: "17-20주", km: "60-80km" }
                    ].map((stage, index) => (
                      <div key={index} className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg text-center">
                        <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">{stage.phase}</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">{stage.weeks}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">주간: {stage.km}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">핵심 훈련 워크아웃</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">지구력 훈련</h4>
                      <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        <li><strong>LSD (Long Slow Distance):</strong> 주말 장거리 러닝 (최대 35km)</li>
                        <li><strong>마라톤 페이스 런:</strong> 목표 속도로 15-25km</li>
                        <li><strong>프로그레시브 런:</strong> 점진적 속도 증가 러닝</li>
                        <li><strong>백투백 런:</strong> 연속 이틀 장거리 훈련</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">스피드 훈련</h4>
                      <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        <li><strong>VO2Max 인터벌:</strong> 1km × 5-6회 (3분 휴식)</li>
                        <li><strong>템포런:</strong> 하프마라톤 페이스로 8-12km</li>
                        <li><strong>야소 800:</strong> 800m × 10회 (마라톤 시간 예측)</li>
                        <li><strong>파틀렉:</strong> 자유로운 속도 변화 훈련</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">마라톤 성공을 위한 필수 체크리스트</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">훈련 관련</h4>
                      <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <li>✓ 주간 훈련량 점진적 증가 (10% 룰)</li>
                        <li>✓ 장거리 훈련 최소 8회 완료</li>
                        <li>✓ 목표 페이스 체득 (20km 이상)</li>
                        <li>✓ 다양한 지형에서 훈련</li>
                        <li>✓ 크로스 트레이닝 병행</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">레이스 준비</h4>
                      <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <li>✓ 레이스 시뮬레이션 2-3회</li>
                        <li>✓ 보급 전략 연습</li>
                        <li>✓ 러닝 장비 점검</li>
                        <li>✓ 3주 테이퍼링 실시</li>
                        <li>✓ 멘탈 준비 완료</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}