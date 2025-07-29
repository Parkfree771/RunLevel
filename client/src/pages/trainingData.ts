// src/pages/trainingData.ts (새 파일)

export const trainingData = {
  // --- 10km ---
  "10km": {
    male: {
      ko: {
        belowAverageTitle: "B, B+ 등급 목표 주간 계획",
        belowAverageGoal: "목표: 기초 체력 향상과 꾸준한 달리기 습관 형성에 초점을 맞춥니다. (10km 54분 ~ 1시간 2분 목표)",
        belowAverageProgram: [
          { day: "mon", type: "지속주 (LSD)", content: "편안한 페이스로 40~50분간 쉬지 않고 달리기", tips: "🏃‍♂️ 기초 체력 다지기: 대화가 가능한 속도를 유지하며, 시간에 집중하세요." },
          { day: "tue", type: "휴식", content: "완전한 휴식", tips: "🛌 근육 회복: 훈련만큼 휴식도 중요합니다." },
          { day: "wed", type: "인터벌 훈련", content: "10분 워밍업, 본운동: (400m 빠르게 + 400m 걷기/조깅) x 5회, 10분 쿨다운", tips: "⚡️ 스피드 향상: 심폐지구력을 강화하여 달리기 속도를 높입니다." },
          { day: "thu", type: "휴식 또는 가벼운 활동", content: "완전한 휴식 또는 20분 가벼운 산책", tips: "🧘 능동적 회복: 몸의 소리에 귀 기울여 휴식을 선택하세요." },
          { day: "fri", type: "가벼운 조깅", content: "30분간 매우 편안한 속도로 조깅", tips: "😊 습관 형성: 달리기에 대한 부담을 줄이고 꾸준함을 유지합니다." },
          { day: "sat", type: "휴식", content: "완전한 휴식", tips: "☕️ 재충전의 시간: 주말 훈련을 위해 에너지를 비축합니다." },
          { day: "sun", type: "교차 훈련 또는 휴식", content: "자전거, 수영, 등산 등 40분 또는 휴식", tips: "🚴 부상 방지: 다른 근육을 사용하여 달리기 능력을 보완합니다." }
        ],
        averageTitle: "S, A+, A 등급 목표 주간 계획",
        averageGoal: "목표: 훈련의 강도와 다양성을 높여 정체기를 극복하고 기록 단축을 목표로 합니다. (10km 41분 ~ 49분 목표)",
        averageProgram: [
            { day: "mon", type: "휴식", content: "완전한 휴식", tips: "🛌 초기화: 주간 훈련 시작 전 완벽한 회복을 추구합니다." },
            { day: "tue", type: "템포 런", content: "15분 워밍업, 본운동: 20~30분간 '약간 힘든' 페이스 유지, 15분 쿨다운", tips: "🔥 지구력 강화: 힘든 페이스를 더 오래 유지하는 능력을 기릅니다." },
            { day: "wed", type: "회복 달리기", content: "30~40분간 매우 편안한 속도로 조깅", tips: "🍃 피로 해소: 어제 훈련으로 쌓인 피로를 부드럽게 풀어줍니다." },
            { day: "thu", type: "인터벌 훈련", content: "15분 워밍업, 본운동: (1km 목표 페이스로 달리기 + 3분 휴식) x 3~4회, 15분 쿨다운", tips: "🚀 최대 능력치 향상: 스피드를 한 단계 끌어올리는 핵심 훈련입니다." },
            { day: "fri", type: "휴식", content: "완전한 휴식", tips: "🧘 완전한 재충전: 주말 장거리 훈련을 대비합니다." },
            { day: "sat", type: "장거리주 (LSD)", content: "70~90분간 편안한 페이스로 달리기", tips: "🏞️ 자신감 향상: 장거리에 대한 심리적, 신체적 내성을 기릅니다." },
            { day: "sun", type: "가벼운 활동 또는 휴식", content: "가벼운 산책, 스트레칭 또는 완전 휴식", tips: "😊 유연한 마무리: 컨디션에 따라 자유롭게 활동하며 주간 훈련을 마칩니다." }
        ],
        aboveAverageTitle: "SS 등급 목표 주간 계획",
        aboveAverageGoal: "목표: 훈련의 질을 극대화하고 전략적인 레이스 운영 능력을 배양하여 기록의 한계를 넘습니다. (10km 41분 이내 목표)",
        aboveAverageProgram: [
            { day: "mon", type: "회복 달리기", content: "40분 이내의 가벼운 조깅", tips: "🍃 능동적 회복: 주말 훈련 후 쌓인 피로를 효과적으로 제거합니다." },
            { day: "tue", type: "레이스 페이스 훈련", content: "20분 워밍업, 본운동: (3km 목표 페이스 달리기) x 2회, 세트 간 5분 휴식, 15분 쿨다운", tips: "🎯 실전 감각 익히기: 목표 페이스에 몸을 적응시키는 훈련입니다." },
            { day: "wed", type: "회복 달리기 또는 휴식", content: "30분 가벼운 조깅 또는 완전 휴식", tips: "🧘 컨디션 조절: 다음 고강도 훈련을 위해 최상의 상태를 만듭니다." },
            { day: "thu", type: "고강도 인터벌", content: "20분 워밍업, 본운동: (800m 목표 페이스보다 빠르게 + 400m 조깅) x 5회, 15분 쿨다운", tips: "💥 스피드 한계 돌파: 막판 스퍼트 능력을 극대화합니다." },
            { day: "fri", type: "휴식", content: "완전한 휴식", tips: "🛌 초회복: 근육이 성장하고 강해지는 중요한 시간입니다." },
            { day: "sat", type: "장거리주 + 가속", content: "12km 지속주 후, 마지막 1km는 템포 런 페이스로 달리기", tips: "📈 레이스 후반 운영: 지친 상태에서 페이스를 올리는 능력을 기릅니다." },
            { day: "sun", type: "교차 훈련 또는 휴식", content: "수영, 자전거 등 40~50분 또는 완전 휴식", tips: "🏊‍♂️ 균형 잡힌 발달: 전신 근육을 사용하여 부상을 방지하고 회복을 돕습니다." }
        ]
      },
      en: {
        belowAverageTitle: "Weekly Plan for Runners Aiming for B, B+",
        belowAverageGoal: "Goal: To focus on improving foundational fitness and building a consistent running habit. (Target: 10km in 54:00 ~ 1:02:00)",
        belowAverageProgram: [
          { day: "mon", type: "Long Slow Distance (LSD)", content: "Run continuously for 40-50 minutes at a comfortable pace.", tips: "🏃‍♂️ Build Foundational Fitness: Maintain a conversational pace and focus on time, not distance." },
          { day: "tue", type: "Rest", content: "Complete rest.", tips: "🛌 Muscle Recovery: Rest is as important as training." },
          { day: "wed", type: "Interval Training", content: "10-min warm-up, Main set: (400m fast + 400m walk/jog) x 5 reps, 10-min cool-down", tips: "⚡️ Improve Speed: Enhance cardiovascular endurance to increase running speed." },
          { day: "thu", type: "Rest or Light Activity", content: "Complete rest or a 20-minute light walk.", tips: "🧘 Active Recovery: Listen to your body and choose to rest if needed." },
          { day: "fri", type: "Light Jog", content: "Jog for 30 minutes at a very comfortable pace.", tips: "😊 Form a Habit: Reduce the pressure of running and maintain consistency." },
          { day: "sat", type: "Rest", content: "Complete rest.", tips: "☕️ Recharge: Store up energy for the weekend's training." },
          { day: "sun", type: "Cross-Training or Rest", content: "40 minutes of cycling, swimming, hiking, etc., or rest.", tips: "🚴 Injury Prevention: Develop other muscles to complement your running and prevent injuries." }
        ],
        averageTitle: "Weekly Plan for Runners Aiming for S, A+, A",
        averageGoal: "Goal: To increase training intensity and variety to overcome plateaus and aim for a new personal best. (Target: 10km in 41:01 ~ 49:00)",
        averageProgram: [
            { day: "mon", type: "Rest", content: "Complete rest.", tips: "🛌 Reset: Aim for full recovery before starting the week's training." },
            { day: "tue", type: "Tempo Run", content: "15-min warm-up, Main set: Maintain a 'comfortably hard' pace for 20-30 minutes, 15-min cool-down", tips: "🔥 Enhance Endurance: Develop the ability to sustain a hard pace for longer." },
            { day: "wed", type: "Recovery Run", content: "Jog for 30-40 minutes at a very comfortable pace.", tips: "🍃 Relieve Fatigue: Gently loosen up to relieve fatigue from yesterday's workout." },
            { day: "thu", type: "Interval Training", content: "15-min warm-up, Main set: (1km at target pace + 3-min rest) x 3-4 reps, 15-min cool-down", tips: "🚀 Boost Max Potential: This is a key workout to take your speed to the next level." },
            { day: "fri", type: "Rest", content: "Complete rest.", tips: "🧘 Full Recharge: Prepare for the weekend's long run." },
            { day: "sat", type: "Long Run (LSD)", content: "Run for 70-90 minutes at a comfortable pace.", tips: "🏞️ Build Confidence: Develop the physical and mental endurance for long distances." },
            { day: "sun", type: "Light Activity or Rest", content: "Light walk, stretching, or complete rest.", tips: "😊 Flexible Finish: End the week by choosing an activity based on your condition." }
        ],
        aboveAverageTitle: "Weekly Plan for Runners Aiming for SS",
        aboveAverageGoal: "Goal: To maximize the quality of training and cultivate strategic race management skills to break personal limits. (Target: 10km in under 41:00)",
        aboveAverageProgram: [
            { day: "mon", type: "Recovery Run", content: "Jog for under 40 minutes at a very easy pace.", tips: "🍃 Active Recovery: Effectively eliminate fatigue from the weekend's training." },
            { day: "tue", type: "Race Pace Training", content: "20-min warm-up, Main set: (3km at target race pace) x 2 reps, with 5-min rest between sets, 15-min cool-down", tips: "🎯 Sharpen Race Sense: Acclimate your body to your target race pace." },
            { day: "wed", type: "Recovery Run or Rest", content: "30-minute light jog or complete rest.", tips: "🧘 Condition Control: Get in top shape for the next high-intensity workout." },
            { day: "thu", type: "High-Intensity Intervals", content: "20-min warm-up, Main set: (800m faster than target pace + 400m jog) x 5-6 reps, 15-min cool-down", tips: "💥 Break Speed Limits: Maximize your ability to sprint at the end of the race." },
            { day: "fri", type: "Rest", content: "Complete rest.", tips: "🛌 Supercompensation: A crucial time for muscles to grow stronger." },
            { day: "sat", type: "Long Run + Acceleration", content: "After a 12km steady run, run the last 1km at tempo pace.", tips: "📈 Late-Race Performance: Develop the ability to run fast even when tired." },
            { day: "sun", type: "Cross-Training or Rest", content: "40-50 minutes of swimming, cycling, etc., or rest.", tips: "🏊‍♂️ Balanced Development: Use other muscles to prevent injuries and aid recovery." }
        ]
      }
    },
    female: {
      ko: {
        belowAverageTitle: "B, B+ 등급 목표 주간 계획",
        belowAverageGoal: "목표: 꾸준히 달리는 즐거움을 느끼고, 부상 없이 10km를 완주할 기초 체력을 기르는 데 집중합니다. (목표 기록: 1시간 1분 ~ 1시간 9분)",
        belowAverageProgram: [
            { day: "mon", type: "지속주 (LSD)", content: "편안한 페이스로 40~50분간 쉬지 않고 달리기", tips: "🏃‍♀️ 기초 체력 다지기: 친구와 대화가 가능한 속도를 유지하며, 시간에 집중하세요." },
            { day: "tue", type: "휴식", content: "완전한 휴식", tips: "🛌 근육 회복: 훈련만큼 휴식도 중요합니다." },
            { day: "wed", type: "인터벌 맛보기", content: "10분 워밍업, 본운동: (2분 약간 빠르게 + 3분 걷기/조깅) x 5회, 10분 쿨다운", tips: "⚡️ 스피드 향상: 심폐지구력을 부드럽게 자극하여 달리기 속도를 높입니다." },
            { day: "thu", type: "휴식 또는 가벼운 활동", content: "완전 휴식 또는 요가, 필라테스 30분", tips: "🧘‍♀️ 능동적 회복: 코어 근력과 유연성을 길러 부상을 예방합니다." },
            { day: "fri", type: "가벼운 조깅", content: "30분간 매우 편안한 속도로 조깅", tips: "😊 습관 형성: 달리기에 대한 부담을 줄이고 꾸준함을 유지합니다." },
            { day: "sat", type: "휴식", content: "완전한 휴식", tips: "☕️ 재충전의 시간: 주말 훈련을 위해 에너지를 비축합니다." },
            { day: "sun", type: "교차 훈련 또는 휴식", content: "자전거, 수영, 등산 등 40분 또는 휴식", tips: "🚴‍♀️ 부상 방지: 다른 근육을 사용하여 달리기 능력을 보완합니다." }
        ],
        averageTitle: "S, A+, A 등급 목표 주간 계획",
        averageGoal: "목표: 1시간의 벽을 넘어 50분대 초중반 기록을 위해 훈련의 강도와 질을 높이는 데 집중합니다. (목표 기록: 48분 ~ 1시간 1분)",
        averageProgram: [
            { day: "mon", type: "휴식", content: "완전한 휴식", tips: "🛌 초기화: 주간 훈련 시작 전 완벽히 회복합니다." },
            { day: "tue", type: "템포 런", content: "15분 워밍업, 본운동: 20~25분간 '조금 힘든' 페이스 유지, 15분 쿨다운", tips: "🔥 지구력 강화: 힘든 페이스를 더 오래 유지하는 능력을 길러, 기록 단축의 핵심이 됩니다." },
            { day: "wed", type: "회복 달리기", content: "40분간 매우 편안한 속도로 조깅", tips: "🍃 피로 해소: 어제 훈련으로 쌓인 피로를 부드럽게 풀어줍니다." },
            { day: "thu", type: "인터벌 훈련", content: "15분 워밍업, 본운동: (1km 목표 페이스보다 빠르게 + 3분 휴식) x 3~4회, 15분 쿨다운", tips: "🚀 최대 능력치 향상: 스피드를 한 단계 끌어올리는 핵심 훈련입니다." },
            { day: "fri", type: "휴식", content: "완전한 휴식", tips: "🧘‍♀️ 완전한 재충전: 주말 장거리 훈련을 대비합니다." },
            { day: "sat", type: "장거리주 (LSD)", content: "60~80분간 편안한 페이스로 달리기", tips: "🏞️ 자신감 향상: 장거리에 대한 심리적, 신체적 내성을 기릅니다." },
            { day: "sun", type: "가벼운 활동 또는 휴식", content: "가벼운 산책, 스트레칭 또는 완전 휴식", tips: "😊 유연한 마무리: 컨디션에 따라 자유롭게 활동하며 주간 훈련을 마칩니다." }
        ],
        aboveAverageTitle: "SS 등급 목표 주간 계획",
        aboveAverageGoal: "목표: 48분 이내의 상급자 기록을 위해, 레이스 운영 능력과 스피드 지구력을 극대화합니다. (목표 기록: 48분 이내)",
        aboveAverageProgram: [
            { day: "mon", type: "회복 달리기", content: "40분 이내의 가벼운 조깅", tips: "🍃 능동적 회복: 주말 훈련 후 쌓인 피로를 효과적으로 제거합니다." },
            { day: "tue", type: "레이스 페이스 훈련", content: "20분 워밍업, 본운동: (2km 목표 페이스 달리기) x 3회, 세트 간 4분 휴식, 15분 쿨다운", tips: "🎯 실전 감각 익히기: 목표 페이스에 몸을 완벽히 적응시키고 심리적 자신감을 얻습니다." },
            { day: "wed", type: "회복 달리기 또는 휴식", content: "30분 가벼운 조깅 또는 완전 휴식", tips: "🧘‍♀️ 컨디션 조절: 다음 고강도 훈련을 위해 최상의 상태를 만듭니다." },
            { day: "thu", type: "고강도 인터벌", content: "20분 워밍업, 본운동: (400m 전력 질주 + 400m 조깅) x 8~10회, 15분 쿨다운", tips: "💥 스피드 한계 돌파: 막판 스퍼트 능력을 극대화하고 러닝 효율을 높입니다." },
            { day: "fri", type: "휴식", content: "완전한 휴식", tips: "🛌 초회복: 근육이 손상과 회복을 반복하며 강해지는 핵심 시간입니다." },
            { day: "sat", type: "장거리주 + 가속", content: "10~12km 지속주 후, 마지막 1km는 템포 런 페이스로 달리기", tips: "📈 레이스 시뮬레이션: 지친 상태에서 페이스를 올리는 능력을 길러 레이스 후반 경쟁력을 높입니다." },
            { day: "sun", type: "교차 훈련 또는 휴식", content: "수영, 자전거 등 40~50분 또는 완전 휴식", tips: "🏊‍♀️ 균형 잡힌 발달: 전신 근육을 사용하여 부상을 방지하고 회복을 돕습니다." }
        ]
      },
      en: {
        belowAverageTitle: "Weekly Plan for Runners Aiming for B, B+",
        belowAverageGoal: "Goal: To experience the joy of running consistently and to focus on building the foundational fitness to complete 10km without injury. (Target Time: 1:01:01 ~ 1:09:00)",
        belowAverageProgram: [
          { day: "mon", type: "Long Slow Distance (LSD)", content: "Run continuously for 40-50 minutes at a comfortable pace.", tips: "🏃‍♀️ Build Foundational Fitness: Maintain a conversational pace and focus on time, not distance." },
          { day: "tue", type: "Rest", content: "Complete rest.", tips: "🛌 Muscle Recovery: Rest is as important as training." },
          { day: "wed", type: "Intro to Intervals", content: "10-min warm-up, Main set: (2 min slightly fast + 3 min walk/jog) x 5 reps, 10-min cool-down", tips: "⚡️ Improve Speed: Gently stimulate cardiovascular endurance to increase running speed." },
          { day: "thu", type: "Rest or Light Activity", content: "Complete rest or 30 minutes of yoga, Pilates.", tips: "🧘‍♀️ Active Recovery: Build core strength and flexibility to prevent injuries." },
          { day: "fri", type: "Light Jog", content: "Jog for 30 minutes at a very comfortable pace.", tips: "😊 Form a Habit: Reduce the pressure of running and maintain consistency." },
          { day: "sat", type: "Rest", content: "Complete rest.", tips: "☕️ Recharge: Store up energy for the weekend's training." },
          { day: "sun", type: "Cross-Training or Rest", content: "40 minutes of cycling, swimming, hiking, etc., or rest.", tips: "🚴‍♀️ Injury Prevention: Use other muscles to complement your running and prevent injuries." }
        ],
        averageTitle: "Weekly Plan for Runners Aiming for S, A+, A",
        averageGoal: "Goal: To break the 1-hour barrier and focus on increasing training intensity and quality to achieve a time in the low-to-mid 50-minute range. (Target Time: 48:01 ~ 1:01:00)",
        averageProgram: [
            { day: "mon", type: "Rest", content: "Complete rest.", tips: "🛌 Reset: Fully recover before starting the week's training." },
            { day: "tue", type: "Tempo Run", content: "15-min warm-up, Main set: Maintain a 'comfortably hard' pace for 20-25 minutes, 15-min cool-down", tips: "🔥 Enhance Endurance: Key to improving your time by developing the ability to sustain a hard pace for longer." },
            { day: "wed", type: "Recovery Run", content: "Jog for 40 minutes at a very comfortable pace.", tips: "🍃 Relieve Fatigue: Gently loosen up to relieve fatigue from yesterday's workout." },
            { day: "thu", type: "Interval Training", content: "15-min warm-up, Main set: (1km faster than target pace + 3-min rest) x 3-4 reps, 15-min cool-down", tips: "🚀 Boost Max Potential: This is a key workout to take your speed to the next level." },
            { day: "fri", type: "Rest", content: "Complete rest.", tips: "🧘‍♀️ Full Recharge: Prepare for the weekend's long run." },
            { day: "sat", type: "Long Run (LSD)", content: "Run for 60-80 minutes at a comfortable pace.", tips: "🏞️ Build Confidence: Develop the physical and mental endurance for long distances." },
            { day: "sun", type: "Light Activity or Rest", content: "Light walk, stretching, or complete rest.", tips: "😊 Flexible Finish: End the week by choosing an activity based on your condition." }
        ],
        aboveAverageTitle: "Weekly Plan for Runners Aiming for SS",
        aboveAverageGoal: "Goal: To aim for an advanced time of under 48 minutes by maximizing race management skills and speed endurance. (Target Time: Under 48:00)",
        aboveAverageProgram: [
            { day: "mon", type: "Recovery Run", content: "Jog for under 40 minutes at a very easy pace.", tips: "🍃 Active Recovery: Effectively eliminate fatigue from the weekend's training." },
            { day: "tue", type: "Race Pace Training", content: "20-min warm-up, Main set: (2km at target race pace) x 3 reps, with 4-min rest between sets, 15-min cool-down", tips: "🎯 Sharpen Race Sense: Perfectly adapt your body to the target pace and gain psychological confidence." },
            { day: "wed", type: "Recovery Run or Rest", content: "30-minute light jog or complete rest.", tips: "🧘‍♀️ Condition Control: Get in top shape for the next high-intensity workout." },
            { day: "thu", type: "High-Intensity Intervals", content: "20-min warm-up, Main set: (400m all-out sprint + 400m jog) x 8-10 reps, 15-min cool-down", tips: "💥 Break Speed Limits: Maximize your finishing kick ability and improve running efficiency." },
            { day: "fri", type: "Rest", content: "Complete rest.", tips: "🛌 Supercompensation: A key time for muscles to become stronger through the cycle of damage and repair." },
            { day: "sat", type: "Long Run + Acceleration", content: "After a 10-12km steady run, run the last 1km at tempo pace.", tips: "📈 Race Simulation: Develop the ability to run fast even when tired, increasing competitiveness in the latter half of the race." },
            { day: "sun", type: "Cross-Training or Rest", content: "40-50 minutes of swimming, cycling, etc., or rest.", tips: "🏊‍♀️ Balanced Development: Use other muscles to prevent injuries and aid recovery." }
        ]
      }
    }
  },
  // --- Half Marathon ---
  "Half Marathon": {
    male: {
      ko: {
        belowAverageTitle: "B, B+ 등급 목표 주간 계획",
        belowAverageGoal: "목표: 부상 없이 하프 마라톤을 완주할 기초 체력과 근지구력을 기르는 데 집중합니다. (목표 기록: 2시간 2분 ~ 2시간 15분)",
        belowAverageProgram: [
            { day: "mon", type: "휴식", content: "완전한 휴식", tips: "🛌 근육 회복: 주말 장거리 훈련 후 회복에 집중합니다." },
            { day: "tue", type: "가벼운 조깅", content: "40~50분간 편안한 페이스로 조깅", tips: "😊 능동적 회복: 달리기에 대한 부담 없이 꾸준함을 유지합니다." },
            { day: "wed", type: "지속주 훈련", content: "15분 워밍업, 본운동: 6~8km를 편안한 페이스보다 약간 빠르게 달리기, 15분 쿨다운", tips: "🔥 지구력 향상: 하프 마라톤의 기본이 되는 체력을 다집니다." },
            { day: "thu", type: "휴식 또는 교차 훈련", content: "완전 휴식 또는 자전거, 수영 40분", tips: "🚴 부상 방지: 다른 운동을 통해 신체 균형을 맞추고 피로를 덜어냅니다." },
            { day: "fri", type: "가벼운 조깅", content: "30~40분간 매우 편안한 속도로 조깅", tips: "🍃 컨디션 조절: 주말 장거리 훈련을 대비하여 몸을 가볍게 풀어줍니다." },
            { day: "sat", type: "장거리주 (LSD)", content: "10~12km를 대화 가능한 속도로 천천히 달리기 (매주 1km씩 점진적 증가)", tips: "🏃‍♂️ 거리 적응: 가장 중요한 훈련으로, 장거리에 대한 신체적/정신적 적응력을 키웁니다." },
            { day: "sun", type: "휴식", content: "완전한 휴식", tips: "☕️ 재충전의 시간: 다음 주 훈련을 위해 에너지를 비축합니다." }
        ],
        averageTitle: "S, A+, A 등급 목표 주간 계획",
        averageGoal: "목표: 레이스 페이스 적응력을 높이고, 본격적인 기록 단축을 목표로 합니다. (목표 기록: 1시간 42분 ~ 2시간 2분)",
        averageProgram: [
            { day: "mon", type: "휴식", content: "완전한 휴식", tips: "🛌 초기화: 강도 높은 주간 훈련 시작 전 완벽히 회복합니다." },
            { day: "tue", type: "템포 런", content: "15분 워밍업, 본운동: 5~7km를 '조금 힘든' 페이스로 달리기, 15분 쿨다운", tips: "🚀 젖산 역치 훈련: 힘든 페이스를 오래 유지하는 능력을 길러, 기록 단축의 핵심이 됩니다." },
            { day: "wed", type: "회복 달리기", content: "40~50분간 매우 편안한 속도로 조깅", tips: "🍃 피로 해소: 어제 훈련으로 쌓인 피로를 부드럽게 풀어줍니다." },
            { day: "thu", type: "인터벌 훈련", content: "15분 워밍업, 본운동: (1.6km(1마일) 목표 페이스보다 빠르게 + 3~4분 조깅) x 3~4회, 15분 쿨다운", tips: "⚡️ 스피드 강화: 최대산소섭취량을 늘려 전반적인 페이스를 끌어올립니다." },
            { day: "fri", type: "휴식", content: "완전한 휴식", tips: "🧘 완전한 재충전: 주말 장거리 훈련을 대비합니다." },
            { day: "sat", type: "장거리주 (LSD)", content: "14~16km를 편안한 페이스로 달리기", tips: "🏞️ 핵심 지구력: 하프 마라톤 완주를 위한 절대적인 체력을 확보하는 날입니다." },
            { day: "sun", type: "가벼운 활동 또는 휴식", content: "가벼운 산책, 스트레칭 또는 완전 휴식", tips: "😊 유연한 마무리: 컨디션에 따라 자유롭게 활동하며 주간 훈련을 마칩니다." }
        ],
        aboveAverageTitle: "SS 등급 목표 주간 계획",
        aboveAverageGoal: "목표: 레이스 후반까지 페이스를 유지하는 능력과 효율적인 에너지 사용 능력을 극대화합니다. (목표 기록: 1시간 42분 이내)",
        aboveAverageProgram: [
            { day: "mon", type: "회복 달리기", content: "40~50분간 매우 가벼운 조깅", tips: "🍃 능동적 회복: 주말 장거리 훈련 후 혈액순환을 촉진하여 회복을 돕습니다." },
            { day: "tue", type: "하프 마라톤 페이스 훈련", content: "20분 워밍업, 본운동: 8~10km를 실제 목표 페이스(HMP)로 달리기, 15분 쿨다운", tips: "🎯 실전 감각 극대화: 목표 페이스에 몸을 완벽히 적응시키고 심리적 자신감을 얻습니다." },
            { day: "wed", type: "회복 달리기 또는 휴식", content: "40분 가벼운 조깅 또는 완전 휴식", tips: "🧘 컨디션 조절: 강도 높은 훈련 사이에서 몸의 균형을 맞춥니다." },
            { day: "thu", type: "템포 런 (장거리)", content: "15분 워밍업, 본운동: 25~30분 템포 런 + 5분 조깅 + 15~20분 템포 런, 15분 쿨다운", tips: "🔥 최강 지구력: 지친 상태에서도 템포를 유지하는 능력을 길러 레이스 후반 경쟁력을 높입니다." },
            { day: "fri", type: "휴식", content: "완전한 휴식", tips: "🛌 초회복: 근육이 손상과 회복을 반복하며 강해지는 핵심 시간입니다." },
            { day: "sat", type: "장거리주 + 마무리 가속", content: "16~18km 지속주 후, 마지막 2~3km는 목표 페이스(HMP)로 달리기", tips: "📈 레이스 시뮬레이션: 지친 상태에서 스피드를 내는 훈련으로, 실전에서 가장 큰 효과를 발휘합니다." },
            { day: "sun", type: "교차 훈련 또는 휴식", content: "수영, 자전거 등 50~60분 또는 완전 휴식", tips: "🏊‍♂️ 전신 균형: 달리기 근육의 피로를 줄이고 전신 근력을 보강합니다." }
        ]
      },
      en: {
        belowAverageTitle: "Weekly Plan for Runners Aiming for B, B+",
        belowAverageGoal: "Goal: To focus on building the foundational fitness and muscular endurance to complete a half marathon without injury. (Target Time: 2:02:01 ~ 2:15:00)",
        belowAverageProgram: [
            { day: "mon", type: "Rest", content: "Complete rest.", tips: "🛌 Muscle Recovery: Focus on recovery after the weekend's long run." },
            { day: "tue", type: "Light Jog", content: "Jog for 40-50 minutes at a comfortable pace.", tips: "😊 Active Recovery: Maintain consistency without the pressure of a hard workout." },
            { day: "wed", type: "Steady-State Run", content: "15-min warm-up, Main set: Run 6-8km at a slightly faster than comfortable pace, 15-min cool-down", tips: "🔥 Improve Endurance: Build the foundational fitness for the half marathon." },
            { day: "thu", type: "Rest or Cross-Training", content: "Complete rest or 40 minutes of cycling, swimming.", tips: "🚴 Injury Prevention: Balance your body and relieve fatigue with other exercises." },
            { day: "fri", type: "Light Jog", content: "Jog for 30-40 minutes at a very comfortable pace.", tips: "🍃 Conditioning: Loosen up your body to prepare for the weekend's long run." },
            { day: "sat", type: "Long Slow Distance (LSD)", content: "Run 10-12km at a slow, conversational pace (increase by 1km weekly).", tips: "🏃‍♂️ Distance Adaptation: The most important workout to build physical and mental adaptation for long distances." },
            { day: "sun", type: "Rest", content: "Complete rest.", tips: "☕️ Recharge: Store up energy for the next week's training." }
        ],
        averageTitle: "Weekly Plan for Runners Aiming for S, A+, A",
        averageGoal: "Goal: To improve race pace adaptation and aim for a significant time reduction. (Target Time: 1:42:01 ~ 2:02:00)",
        averageProgram: [
            { day: "mon", type: "Rest", content: "Complete rest.", tips: "🛌 Reset: Fully recover before starting a week of intense training." },
            { day: "tue", type: "Tempo Run", content: "15-min warm-up, Main set: Run 5-7km at a 'comfortably hard' pace, 15-min cool-down", tips: "🚀 Lactate Threshold Training: Key to improving your time by developing the ability to sustain a hard pace." },
            { day: "wed", type: "Recovery Run", content: "Jog for 40-50 minutes at a very comfortable pace.", tips: "🍃 Relieve Fatigue: Gently loosen up to relieve fatigue from yesterday's workout." },
            { day: "thu", type: "Interval Training", content: "15-min warm-up, Main set: (1.6km (1 mile) faster than target pace + 3-4 min jog) x 3-4 reps, 15-min cool-down", tips: "⚡️ Speed Enhancement: Increase VO2 max to improve your overall pace." },
            { day: "fri", type: "Rest", content: "Complete rest.", tips: "🧘 Full Recharge: Prepare for the weekend's long run." },
            { day: "sat", type: "Long Slow Distance (LSD)", content: "Run for 14-16km at a comfortable pace.", tips: "🏞️ Core Endurance: The day to secure the absolute fitness needed to complete a half marathon." },
            { day: "sun", type: "Light Activity or Rest", content: "Light walk, stretching, or complete rest.", tips: "😊 Flexible Finish: End the week by choosing an activity based on your condition." }
        ],
        aboveAverageTitle: "Weekly Plan for Runners Aiming for SS",
        aboveAverageGoal: "Goal: To maximize the ability to maintain pace until the end of the race and use energy efficiently. (Target Time: Under 1:42:00)",
        aboveAverageProgram: [
            { day: "mon", type: "Recovery Run", content: "Very light jog for 40-50 minutes.", tips: "🍃 Active Recovery: Promote blood circulation to aid recovery after the weekend's long run." },
            { day: "tue", type: "Half Marathon Pace (HMP) Run", content: "20-min warm-up, Main set: Run 8-10km at your actual target race pace (HMP), 15-min cool-down", tips: "🎯 Maximize Race Sense: Perfectly adapt your body to the target pace and gain psychological confidence." },
            { day: "wed", type: "Recovery Run or Rest", content: "40-minute light jog or complete rest.", tips: "🧘 Condition Control: Balance your body between high-intensity workouts." },
            { day: "thu", type: "Long Tempo Run", content: "15-min warm-up, Main set: 25-30 min tempo run + 5 min jog + 15-20 min tempo run, 15-min cool-down", tips: "🔥 Ultimate Endurance: Develop the ability to maintain tempo even when tired, increasing competitiveness in the latter half of the race." },
            { day: "fri", type: "Rest", content: "Complete rest.", tips: "🛌 Supercompensation: A key time for muscles to become stronger through the cycle of damage and repair." },
            { day: "sat", type: "Long Run + Fast Finish", content: "After a 16-18km steady run, run the last 2-3km at your target pace (HMP).", tips: "📈 Race Simulation: Training to produce speed when tired, which is most effective in a real race." },
            { day: "sun", type: "Cross-Training or Rest", content: "50-60 minutes of swimming, cycling, etc., or rest.", tips: "🏊‍♂️ Total Body Balance: Reduce fatigue in running muscles and strengthen the entire body." }
        ]
      }
    },
    female: {
      ko: {
        belowAverageTitle: "B, B+ 등급 목표 주간 계획",
        belowAverageGoal: "목표: 21.1km라는 거리에 대한 두려움을 없애고, 부상 없이 꾸준히 달려 완주하는 것에 최우선 목표를 둡니다. (목표 기록: 2시간 18분 ~ 2시간 33분)",
        belowAverageProgram: [
            { day: "mon", type: "휴식 또는 교차 훈련", content: "완전 휴식 또는 수영, 자전거 30~40분", tips: "🚴‍♀️ 관절 보호: 주말 훈련 후 관절에 부담이 적은 운동으로 회복을 돕습니다." },
            { day: "tue", type: "가벼운 조깅", content: "40~50분간 편안한 페이스로 조깅", tips: "😊 지속성 유지: 긴 거리를 달리기 위한 기본 체력을 꾸준히 쌓아 나갑니다." },
            { day: "wed", type: "지속주 훈련", content: "15분 워밍업, 본운동: 6~8km를 편안한 페이스보다 약간 빠르게 달리기, 15분 쿨다운", tips: "🔥 지구력 향상: 하프 마라톤의 기본이 되는 '오래 달리는 능력'을 강화합니다." },
            { day: "thu", type: "휴식", content: "완전한 휴식", tips: "🛌 완전한 회복: 강도 높은 훈련과 장거리 훈련 사이, 몸이 재충전할 시간을 줍니다." },
            { day: "fri", type: "가벼운 조깅", content: "30~40분간 매우 편안한 속도로 조깅", tips: "🍃 컨디션 조절: 주말 핵심 훈련인 장거리 달리기를 위해 몸을 가볍게 만듭니다." },
            { day: "sat", type: "장거리주 (LSD)", content: "10~12km를 대화 가능한 속도로 천천히 달리기 (매주 1km씩 점진적 증가)", tips: "🏃‍♀️ 거리 적응: 가장 중요한 훈련으로, 장거리에 대한 신체적/정신적 적응력을 키웁니다." },
            { day: "sun", type: "휴식", content: "완전한 휴식", tips: "☕️ 재충전의 시간: 다음 주 훈련을 위해 에너지를 비축하고 근육 성장을 돕습니다." }
        ],
        averageTitle: "S, A+, A 등급 목표 주간 계획",
        averageGoal: "목표: 본격적인 기록 단축을 위해 레이스 페이스 적응력을 높이고, 2시간 초반대 진입을 목표로 합니다. (목표 기록: 1시간 53분 ~ 2시간 18분)",
        averageProgram: [
            { day: "mon", type: "휴식", content: "완전한 휴식", tips: "🛌 초기화: 강도 높은 주간 훈련 시작 전 완벽히 회복합니다." },
            { day: "tue", type: "템포 런", content: "15분 워밍업, 본운동: 5~7km를 '조금 힘든' 페이스로 달리기, 15분 쿨다운", tips: "🚀 젖산 역치 훈련: 힘든 페이스를 오래 유지하는 능력을 길러, 기록 단축의 핵심이 됩니다." },
            { day: "wed", type: "회복 달리기", content: "40~50분간 매우 편안한 속도로 조깅", tips: "🍃 피로 해소: 어제 훈련으로 쌓인 피로를 부드럽게 풀어줍니다." },
            { day: "thu", type: "인터벌 훈련", content: "15분 워밍업, 본운동: (1km 목표 페이스보다 빠르게 + 3분 조깅) x 4~5회, 15분 쿨다운", tips: "⚡️ 스피드 강화: 최대산소섭취량을 늘려 전반적인 페이스를 끌어올립니다." },
            { day: "fri", type: "휴식", content: "완전한 휴식", tips: "🧘‍♀️ 완전한 재충전: 주말 장거리 훈련을 대비합니다." },
            { day: "sat", type: "장거리주 (LSD)", content: "14~16km를 편안한 페이스로 달리기", tips: "🏞️ 핵심 지구력: 하프 마라톤 완주를 위한 절대적인 체력을 확보하는 날입니다." },
            { day: "sun", type: "가벼운 활동 또는 휴식", content: "가벼운 산책, 스트레칭 또는 완전 휴식", tips: "😊 유연한 마무리: 컨디션에 따라 자유롭게 활동하며 주간 훈련을 마칩니다." }
        ],
        aboveAverageTitle: "SS 등급 목표 주간 계획",
        aboveAverageGoal: "목표: 2시간의 벽을 깨고 1시간 50분대 초반의 상급자 기록을 위해, 효율적인 에너지 분배 능력과 레이스 후반 운영 능력을 극대화합니다. (목표 기록: 1시간 53분 이내)",
        aboveAverageProgram: [
            { day: "mon", type: "회복 달리기", content: "40~50분간 매우 가벼운 조깅", tips: "🍃 능동적 회복: 높은 훈련량을 소화하기 위한 필수 과정입니다." },
            { day: "tue", type: "하프 마라톤 페이스 훈련", content: "20분 워밍업, 본운동: 8~10km를 실제 목표 페이스(HMP)로 달리기, 15분 쿨다운", tips: "🎯 실전 감각 극대화: 목표 페이스에 몸을 완벽히 적응시키고 심리적 자신감을 얻습니다." },
            { day: "wed", type: "회복 달리기 또는 휴식", content: "40분 가벼운 조깅 또는 완전 휴식", tips: "🧘‍♀️ 컨디션 조절: 강도 높은 훈련 사이에서 몸의 균형을 맞춥니다." },
            { day: "thu", type: "템포 런 (장거리)", content: "15분 워밍업, 본운동: 20분 템포 런 + 5분 조깅 + 15분 템포 런, 15분 쿨다운", tips: "🔥 최강 지구력: 지친 상태에서도 템포를 유지하는 능력을 길러 레이스 후반 경쟁력을 높입니다." },
            { day: "fri", type: "휴식", content: "완전한 휴식", tips: "🛌 초회복: 근육이 손상과 회복을 반복하며 강해지는 핵심 시간입니다." },
            { day: "sat", type: "장거리주 + 마무리 가속", content: "16~18km 지속주 후, 마지막 2km는 목표 페이스(HMP)로 달리기", tips: "📈 레이스 시뮬레이션: 지친 상태에서 스피드를 내는 훈련으로, 실전에서 가장 큰 효과를 발휘합니다." },
            { day: "sun", type: "교차 훈련 또는 휴식", content: "수영, 자전거 등 50~60분 또는 완전 휴식", tips: "🏊‍♀️ 전신 균형: 달리기 근육의 피로를 줄이고 전신 근력을 보강합니다." }
        ]
      },
      en: {
        belowAverageTitle: "Weekly Plan for Runners Aiming for B, B+",
        belowAverageGoal: "Goal: To eliminate the fear of the 21.1km distance and to place the highest priority on running consistently to the finish line without injury. (Target Time: 2:18:01 ~ 2:33:00)",
        belowAverageProgram: [
            { day: "mon", type: "Rest or Cross-Training", content: "Complete rest or 30-40 minutes of swimming, cycling.", tips: "🚴‍♀️ Protect Your Joints: Aid recovery with low-impact exercises after the weekend's training." },
            { day: "tue", type: "Light Jog", content: "Jog for 40-50 minutes at a comfortable pace.", tips: "😊 Maintain Consistency: Steadily build the foundational fitness required for long distances." },
            { day: "wed", type: "Steady-State Run", content: "15-min warm-up, Main set: Run 6-8km at a slightly faster than comfortable pace, 15-min cool-down", tips: "🔥 Improve Endurance: Strengthen the 'ability to run for a long time,' which is the basis of a half marathon." },
            { day: "thu", type: "Rest", content: "Complete rest.", tips: "🛌 Full Recovery: Gives your body time to recharge between intense workouts and long runs." },
            { day: "fri", type: "Light Jog", content: "Jog for 30-40 minutes at a very comfortable pace.", tips: "🍃 Conditioning: Loosen up your body to prepare for the weekend's key long run." },
            { day: "sat", type: "Long Slow Distance (LSD)", content: "Run 10-12km at a slow, conversational pace (increase by 1km weekly).", tips: "🏃‍♀️ Distance Adaptation: The most important workout to build physical and mental adaptation for long distances." },
            { day: "sun", type: "Rest", content: "Complete rest.", tips: "☕️ Recharge: Store up energy for the next week's training and aid muscle growth." }
        ],
        averageTitle: "Weekly Plan for Runners Aiming for S, A+, A",
        averageGoal: "Goal: To improve race pace adaptation for a significant time reduction and to aim for a time in the low 2-hour range. (Target Time: 1:53:01 ~ 2:18:00)",
        averageProgram: [
            { day: "mon", type: "Rest", content: "Complete rest.", tips: "🛌 Reset: Fully recover before starting a week of intense training." },
            { day: "tue", type: "Tempo Run", content: "15-min warm-up, Main set: Run 5-7km at a 'comfortably hard' pace, 15-min cool-down", tips: "🚀 Lactate Threshold Training: Key to improving your time by developing the ability to sustain a hard pace." },
            { day: "wed", type: "Recovery Run", content: "Jog for 40-50 minutes at a very comfortable pace.", tips: "🍃 Relieve Fatigue: Gently loosen up to relieve fatigue from yesterday's workout." },
            { day: "thu", type: "Interval Training", content: "15-min warm-up, Main set: (1km faster than target pace + 3 min jog) x 4-5 reps, 15-min cool-down", tips: "⚡️ Speed Enhancement: Increase VO2 max to improve your overall pace." },
            { day: "fri", type: "Rest", content: "Complete rest.", tips: "🧘‍♀️ Full Recharge: Prepare for the weekend's long run." },
            { day: "sat", type: "Long Slow Distance (LSD)", content: "Run for 14-16km at a comfortable pace.", tips: "🏞️ Core Endurance: The day to secure the absolute fitness needed to complete a half marathon." },
            { day: "sun", type: "Light Activity or Rest", content: "Light walk, stretching, or complete rest.", tips: "😊 Flexible Finish: End the week by choosing an activity based on your condition." }
        ],
        aboveAverageTitle: "Weekly Plan for Runners Aiming for SS",
        aboveAverageGoal: "Goal: To break the 2-hour barrier and aim for an advanced time in the low 1:50s by maximizing efficient energy distribution and late-race performance ability. (Target Time: Under 1:53:00)",
        aboveAverageProgram: [
            { day: "mon", type: "Recovery Run", content: "Very light jog for 40-50 minutes.", tips: "🍃 Active Recovery: An essential process to handle high training volume." },
            { day: "tue", type: "Half Marathon Pace (HMP) Run", content: "20-min warm-up, Main set: Run 8-10km at your actual target race pace (HMP), 15-min cool-down", tips: "🎯 Maximize Race Sense: Perfectly adapt your body to the target pace and gain psychological confidence." },
            { day: "wed", type: "Recovery Run or Rest", content: "40-minute light jog or complete rest.", tips: "🧘‍♀️ Condition Control: Balance your body between high-intensity workouts." },
            { day: "thu", type: "Long Tempo Run", content: "15-min warm-up, Main set: 20 min tempo run + 5 min jog + 15 min tempo run, 15-min cool-down", tips: "🔥 Ultimate Endurance: Develop the ability to maintain tempo even when tired, increasing competitiveness in the latter half of the race." },
            { day: "fri", type: "Rest", content: "Complete rest.", tips: "🛌 Supercompensation: A key time for muscles to become stronger through the cycle of damage and repair." },
            { day: "sat", type: "Long Run + Fast Finish", content: "After a 16-18km steady run, run the last 2km at your target pace (HMP).", tips: "📈 Race Simulation: Training to produce speed when tired, which is most effective in a real race." },
            { day: "sun", type: "Cross-Training or Rest", content: "50-60 minutes of swimming, cycling, etc., or rest.", tips: "🏊‍♀️ Total Body Balance: Reduce fatigue in running muscles and strengthen the entire body." }
        ]
      }
    }
  },
  // --- Full Marathon ---
  "Full Marathon": {
    male: {
      ko: {
        belowAverageTitle: "B, B+ 등급 목표 주간 계획",
        belowAverageGoal: "목표: 부상 없이 42.195km를 완주하는 강력한 기초 체력을 만들고, 장거리 달리기에 대한 자신감을 기르는 데 집중합니다. (목표 기록: 3시간 58분 ~ 4시간 35분)",
        belowAverageProgram: [
            { day: "mon", type: "휴식 또는 교차 훈련", content: "완전 휴식 또는 수영, 자전거 30~40분", tips: "🚴 부상 방지: 주말 장거리 훈련 후 관절에 부담이 적은 운동으로 회복을 돕습니다." },
            { day: "tue", type: "가벼운 조깅", content: "50~60분간 편안한 페이스로 조깅", tips: "😊 지속성 유지: 긴 거리를 달리기 위한 기본 체력을 꾸준히 쌓아 나갑니다." },
            { day: "wed", type: "지속주 훈련", content: "15분 워밍업, 본운동: 8~10km를 편안한 페이스보다 약간 빠르게 달리기, 15분 쿨다운", tips: "🔥 지구력 향상: 마라톤의 기본이 되는 '오래 달리는 능력'을 강화합니다." },
            { day: "thu", type: "휴식", content: "완전한 휴식", tips: "🛌 완전한 회복: 강도 높은 훈련과 장거리 훈련 사이, 몸이 재충전할 시간을 줍니다." },
            { day: "fri", type: "가벼운 조깅", content: "40분간 매우 편안한 속도로 조깅", tips: "🍃 컨디션 조절: 주말 핵심 훈련인 장거리 달리기를 위해 몸을 가볍게 만듭니다." },
            { day: "sat", type: "장거리주 (LSD)", content: "16~20km를 대화 가능한 속도로 천천히 달리기 (매주 1~2km씩 점진적 증가, 3주 훈련 후 1주는 거리 단축)", tips: "🏃‍♂️ 거리 적응: 가장 중요한 훈련입니다. 지방을 에너지원으로 쓰는 능력을 키웁니다." },
            { day: "sun", type: "휴식", content: "완전한 휴식", tips: "☕️ 재충전의 시간: 다음 주 훈련을 위해 에너지를 비축하고 근육 성장을 돕습니다." }
        ],
        averageTitle: "S, A+, A 등급 목표 주간 계획",
        averageGoal: "목표: '서브-4'(4시간 이내 완주)를 넘어 3시간 중반대 진입을 위해, 실제 마라톤 페이스(MP) 적응력을 높이는 데 집중합니다. (목표 기록: 3시간 3분 ~ 3시간 58분)",
        averageProgram: [
            { day: "mon", type: "휴식", content: "완전한 휴식", tips: "🛌 초기화: 강도 높은 주간 훈련 시작 전 완벽히 회복합니다." },
            { day: "tue", type: "마라톤 페이스 훈련(MP)", content: "15분 워밍업, 본운동: 8~12km를 실제 목표 마라톤 페이스로 달리기, 15분 쿨다운", tips: "🎯 실전 감각 훈련: 목표 페이스를 몸에 각인시켜 효율적인 에너지 분배 능력을 기릅니다." },
            { day: "wed", type: "회복 달리기", content: "50~60분간 매우 편안한 속도로 조깅", tips: "🍃 피로 해소: 어제 훈련으로 쌓인 피로를 부드럽게 풀어주고 혈액순환을 돕습니다." },
            { day: "thu", type: "템포 런", content: "15분 워밍업, 본운동: 7~9km를 '조금 힘든' 페이스로 달리기, 15분 쿨다운", tips: "🚀 젖산 역치 훈련: 힘든 페이스를 오래 유지하는 능력을 길러, 30km 이후 페이스 저하를 막습니다." },
            { day: "fri", type: "휴식", content: "완전한 휴식", tips: "🧘 완전한 재충전: 주말 장거리 훈련을 대비하여 글리코겐을 축적합니다." },
            { day: "sat", type: "장거리주 (LSD)", content: "22~28km를 편안한 페이스로 달리기", tips: "🏞️ 핵심 지구력: 마라톤 후반부를 버틸 수 있는 강력한 신체적, 정신적 기반을 다집니다." },
            { day: "sun", type: "가벼운 활동 또는 휴식", content: "가벼운 산책, 스트레칭 또는 완전 휴식", tips: "😊 유연한 마무리: 컨디션에 따라 자유롭게 활동하며 주간 훈련을 마칩니다." }
        ],
        aboveAverageTitle: "SS 등급 목표 주간 계획",
        aboveAverageGoal: "목표: '서브-3'(3시간 이내 완주)에 근접하는 엘리트 수준의 기록을 위해, 훈련의 총량을 늘리고 레이스 후반까지 페이스를 유지하는 능력을 극대화합니다. (목표 기록: 3시간 3분 이내)",
        aboveAverageProgram: [
            { day: "mon", type: "회복 달리기", content: "60분 이내의 매우 가벼운 조깅", tips: "🍃 능동적 회복: 높은 훈련량을 소화하기 위한 필수 과정입니다." },
            { day: "tue", type: "고강도 인터벌", content: "20분 워밍업, 본운동: (1.6km(1마일) 10km 페이스로 달리기 + 3분 조깅) x 4~5회, 15분 쿨다운", tips: "💥 스피드 한계 돌파: 전반적인 러닝 이코노미(효율)를 개선하여 마라톤 페이스를 더 쉽게 느끼게 합니다." },
            { day: "wed", type: "중거리 지속주", content: "70~80분간 편안한 페이스로 달리기", tips: "🔥 지속주 강화: 높은 훈련 볼륨을 유지하며 유산소 능력을 꾸준히 자극합니다." },
            { day: "thu", type: "마라톤 페이스 훈련 (장거리)", content: "15분 워밍업, 본운동: 16~20km를 목표 마라톤 페이스(MP)로 달리기, 15분 쿨다운", tips: "🎯 최강의 실전 훈련: 지친 상태에서도 목표 페이스를 유지하는 능력을 길러 '35km의 벽'을 극복합니다." },
            { day: "fri", type: "휴식", content: "완전한 휴식", tips: "🛌 초회복: 강도 높은 훈련으로 인한 미세 손상을 회복하고 더 강한 몸을 만듭니다." },
            { day: "sat", type: "장거리주 (LSD)", content: "30~35km를 편안한 페이스로 달리기 (실전 3주 전까지만)", tips: "marathon 최종 담금질: 마라톤 완주에 대한 모든 능력을 점검하고 완성하는 가장 중요한 훈련입니다." },
            { day: "sun", type: "회복 달리기 또는 휴식", content: "40분 가벼운 조깅 또는 완전 휴식", tips: "🧘‍♂️ 마무리 및 재정비: 컨디션을 세심하게 살피며 다음 주 훈련을 준비합니다." }
        ]
      },
      en: {
        belowAverageTitle: "Weekly Plan for Runners Aiming for B, B+",
        belowAverageGoal: "Goal: To focus on building strong foundational fitness to complete 42.195km without injury and to develop confidence in long-distance running. (Target Time: 3:58:01 ~ 4:35:00)",
        belowAverageProgram: [
            { day: "mon", type: "Rest or Cross-Training", content: "Complete rest or 30-40 minutes of swimming, cycling.", tips: "🚴 Injury Prevention: Aid recovery with low-impact exercises for your joints after the weekend's long run." },
            { day: "tue", type: "Light Jog", content: "Jog for 50-60 minutes at a comfortable pace.", tips: "😊 Maintain Consistency: Steadily build the foundational fitness required for long distances." },
            { day: "wed", type: "Steady-State Run", content: "15-min warm-up, Main set: Run 8-10km at a slightly faster than comfortable pace, 15-min cool-down", tips: "🔥 Improve Endurance: Strengthen the 'ability to run for a long time,' which is the basis of a marathon." },
            { day: "thu", type: "Rest", content: "Complete rest.", tips: "🛌 Full Recovery: Allows your body to recharge between intense workouts and long runs." },
            { day: "fri", type: "Light Jog", content: "Jog for 40 minutes at a very comfortable pace.", tips: "🍃 Conditioning: Loosen up your body to prepare for the weekend's key long run." },
            { day: "sat", type: "Long Slow Distance (LSD)", content: "Run 16-20km at a slow, conversational pace (increase by 1-2km weekly, with a reduced distance week after 3 weeks).", tips: "🏃‍♂️ Distance Adaptation: The most important workout. Develops the ability to use fat as an energy source." },
            { day: "sun", type: "Rest", content: "Complete rest.", tips: "☕️ Recharge: Store up energy for the next week's training and aid muscle growth." }
        ],
        averageTitle: "Weekly Plan for Runners Aiming for S, A+, A",
        averageGoal: "Goal: To move beyond a 'Sub-4' (sub-4-hour finish) and enter the mid-3-hour range by focusing on improving adaptation to actual Marathon Pace (MP). (Target Time: 3:03:01 ~ 3:58:00)",
        averageProgram: [
            { day: "mon", type: "Rest", content: "Complete rest.", tips: "🛌 Reset: Fully recover before starting a week of intense training." },
            { day: "tue", type: "Marathon Pace (MP) Run", content: "15-min warm-up, Main set: Run 8-12km at your actual target marathon pace, 15-min cool-down", tips: "🎯 Race-Sense Training: Engrain the target pace into your body to develop efficient energy distribution." },
            { day: "wed", type: "Recovery Run", content: "Jog for 50-60 minutes at a very comfortable pace.", tips: "🍃 Relieve Fatigue: Gently loosen up to relieve fatigue from yesterday's workout and aid blood circulation." },
            { day: "thu", type: "Tempo Run", content: "15-min warm-up, Main set: Run 7-9km at a 'comfortably hard' pace, 15-min cool-down", tips: "🚀 Lactate Threshold Training: Develops the ability to sustain a hard pace, preventing your pace from dropping after 30km." },
            { day: "fri", type: "Rest", content: "Complete rest.", tips: "🧘 Full Recharge: Store glycogen to prepare for the weekend's long run." },
            { day: "sat", "type": "Long Slow Distance (LSD)", "content": "Run for 22-28km at a comfortable pace.", "tips": "🏞️ Core Endurance: Build the strong physical and mental foundation to endure the latter half of the marathon." },
            { day: "sun", "type": "Light Activity or Rest", "content": "Light walk, stretching, or complete rest.", "tips": "😊 Flexible Finish: End the week by choosing an activity based on your condition." }
        ],
        "aboveAverageTitle": "Weekly Plan for Runners Aiming for SS",
        "aboveAverageGoal": "Goal: To approach an elite-level 'Sub-3' (sub-3-hour finish) by increasing total training volume and maximizing the ability to maintain pace until the end of the race. (Target Time: Under 3:03:00)",
        "aboveAverageProgram": [
            { day: "mon", "type": "Recovery Run", "content": "Very light jog for under 60 minutes.", "tips": "🍃 Active Recovery: An essential process to handle high training volume." },
            { day: "tue", "type": "High-Intensity Intervals", "content": "20-min warm-up, Main set: (1.6km (1 mile) at 10k pace + 3 min jog) x 4-5 reps, 15-min cool-down", "tips": "💥 Break Speed Limits: Improve overall running economy (efficiency) to make marathon pace feel easier." },
            { day: "wed", "type": "Mid-distance Steady Run", "content": "Run for 70-80 minutes at a comfortable pace.", "tips": "🔥 Strengthen Steady-State: Maintain high training volume and consistently stimulate your aerobic capacity." },
            { day: "thu", "type": "Long Marathon Pace (MP) Run", "content": "15-min warm-up, Main set: Run 16-20km at your target marathon pace (MP), 15-min cool-down", "tips": "🎯 The Ultimate Race-Specific Workout: Develops the ability to maintain pace when tired to overcome the '35km wall.'" },
            { day: "fri", "type": "Rest", "content": "Complete rest.", "tips": "🛌 Supercompensation: A key time for your body to recover from micro-damage caused by intense training and become stronger." },
            { day: "sat", "type": "Long Slow Distance (LSD)", "content": "Run 30-35km at a comfortable pace (only until 3 weeks before the race).", "tips": "marathon The Final Sharpening: The most important workout to check and complete all abilities for the marathon." },
            { day: "sun", "type": "Recovery Run or Rest", "content": "40-minute light jog or complete rest.", "tips": "🧘‍♂️ Finish and Readjust: Carefully check your condition and prepare for the next week's training." }
        ]
      }
    },
    female: {
      ko: {
        belowAverageTitle: "B, B+ 등급 목표 주간 계획",
        belowAverageGoal: "목표: 42.195km를 부상 없이 완주하는 강력한 정신력과 기초 체력을 기르고, '마라토너'라는 타이틀을 얻는 것에 집중합니다. (목표 기록: 4시간 35분 ~ 5시간)",
        belowAverageProgram: [
            { day: "mon", type: "휴식 또는 교차 훈련", content: "완전 휴식 또는 수영, 자전거 30~40분", tips: "🚴‍♀️ 부상 방지: 주말 장거리 훈련 후 관절에 부담이 적은 운동으로 회복을 돕습니다." },
            { day: "tue", type: "가벼운 조깅", content: "50~60분간 편안한 페이스로 조깅", tips: "😊 지속성 유지: 긴 거리를 달리기 위한 기본 체력을 꾸준히 쌓아 나갑니다." },
            { day: "wed", type: "지속주 훈련", content: "15분 워밍업, 본운동: 8~10km를 편안한 페이스보다 약간 빠르게 달리기, 15분 쿨다운", tips: "🔥 지구력 향상: 마라톤의 기본이 되는 '오래 달리는 능력'을 강화합니다." },
            { day: "thu", type: "휴식", content: "완전한 휴식", tips: "🛌 완전한 회복: 강도 높은 훈련과 장거리 훈련 사이, 몸이 재충전할 시간을 줍니다." },
            { day: "fri", type: "가벼운 조깅", content: "40분간 매우 편안한 속도로 조깅", tips: "🍃 컨디션 조절: 주말 핵심 훈련인 장거리 달리기를 위해 몸을 가볍게 만듭니다." },
            { day: "sat", type: "장거리주 (LSD)", content: "15~18km를 대화 가능한 속도로 천천히 달리기 (매주 1~2km씩 점진적 증가, 3주 훈련 후 1주는 거리 단축)", tips: "🏃‍♀️ 거리 적응: 가장 중요한 훈련입니다. 지방을 에너지원으로 쓰는 능력을 키웁니다." },
            { day: "sun", type: "휴식", content: "완전한 휴식", tips: "☕️ 재충전의 시간: 다음 주 훈련을 위해 에너지를 비축하고 근육 성장을 돕습니다." }
        ],
        averageTitle: "S, A+, A 등급 목표 주간 계획",
        averageGoal: "목표: 많은 러너의 꿈인 '서브-4'(4시간 이내 완주)를 넘어 3시간대 진입을 위해, 실제 마라톤 페이스(MP) 유지 능력을 기르는 데 집중합니다. (목표 기록: 3시간 32분 ~ 4시간 35분)",
        averageProgram: [
            { day: "mon", type: "휴식", content: "완전한 휴식", tips: "🛌 초기화: 강도 높은 주간 훈련 시작 전 완벽히 회복합니다." },
            { day: "tue", type: "마라톤 페이스 훈련(MP)", content: "15분 워밍업, 본운동: 10~12km를 실제 목표 마라톤 페이스로 달리기, 15분 쿨다운", tips: "🎯 실전 감각 훈련: 목표 페이스를 몸에 각인시켜 효율적인 에너지 분배 능력을 기릅니다." },
            { day: "wed", type: "회복 달리기", content: "50~60분간 매우 편안한 속도로 조깅", tips: "🍃 피로 해소: 어제 훈련으로 쌓인 피로를 부드럽게 풀어주고 혈액순환을 돕습니다." },
            { day: "thu", type: "템포 런", content: "15분 워밍업, 본운동: 7~9km를 '조금 힘든' 페이스로 달리기, 15분 쿨다운", tips: "🚀 젖산 역치 훈련: 힘든 페이스를 오래 유지하는 능력을 길러, 30km 이후 페이스 저하를 막습니다." },
            { day: "fri", type: "휴식", content: "완전한 휴식", tips: "🧘‍♀️ 완전한 재충전: 주말 장거리 훈련을 대비하여 글리코겐을 축적합니다." },
            { day: "sat", type: "장거리주 (LSD)", content: "22~28km를 편안한 페이스로 달리기", tips: "🏞️ 핵심 지구력: 마라톤 후반부를 버틸 수 있는 강력한 신체적, 정신적 기반을 다집니다." },
            { day: "sun", type: "가벼운 활동 또는 휴식", content: "가벼운 산책, 스트레칭 또는 완전 휴식", tips: "😊 유연한 마무리: 컨디션에 따라 자유롭게 활동하며 주간 훈련을 마칩니다." }
        ],
        aboveAverageTitle: "SS 등급 목표 주간 계획",
        aboveAverageGoal: "목표: 3시간 30분대 이내의 엘리트 수준 기록을 위해, 높은 훈련량을 소화하며 레이스 후반까지 스피드를 유지하는 능력을 극대화합니다. (목표 기록: 3시간 32분 이내)",
        aboveAverageProgram: [
            { day: "mon", type: "회복 달리기", content: "60분 이내의 매우 가벼운 조깅", tips: "🍃 능동적 회복: 높은 훈련량을 소화하기 위한 필수 과정입니다." },
            { day: "tue", type: "고강도 인터벌", content: "20분 워밍업, 본운동: (1.6km(1마일) 10km 페이스로 달리기 + 3분 조깅) x 4~5회, 15분 쿨다운", tips: "💥 스피드 한계 돌파: 전반적인 러닝 이코노미(효율)를 개선하여 마라톤 페이스를 더 쉽게 느끼게 합니다." },
            { day: "wed", type: "중거리 지속주", content: "70~80분간 편안한 페이스로 달리기", tips: "🔥 지속주 강화: 높은 훈련 볼륨을 유지하며 유산소 능력을 꾸준히 자극합니다." },
            { day: "thu", type: "마라톤 페이스 훈련 (장거리)", content: "15분 워밍업, 본운동: 16~18km를 목표 마라톤 페이스(MP)로 달리기, 15분 쿨다운", tips: "🎯 최강의 실전 훈련: 지친 상태에서도 목표 페이스를 유지하는 능력을 길러 '35km의 벽'을 극복합니다." },
            { day: "fri", type: "휴식", content: "완전한 휴식", tips: "🛌 초회복: 강도 높은 훈련으로 인한 미세 손상을 회복하고 더 강한 몸을 만듭니다." },
            { day: "sat", type: "장거리주 (LSD)", content: "30~35km를 편안한 페이스로 달리기 (실전 3주 전까지만)", tips: "marathon 최종 담금질: 마라톤 완주에 대한 모든 능력을 점검하고 완성하는 가장 중요한 훈련입니다." },
            { day: "sun", type: "회복 달리기 또는 휴식", content: "40분 가벼운 조깅 또는 완전 휴식", tips: "🧘‍♀️ 마무리 및 재정비: 컨디션을 세심하게 살피며 다음 주 훈련을 준비합니다." }
        ]
      },
      en: {
        belowAverageTitle: "Weekly Plan for Runners Aiming for B, B+",
        belowAverageGoal: "Goal: To build the strong mental fortitude and foundational fitness to complete 42.195km without injury, and to focus on earning the title of 'marathoner'. (Target Time: 4:35:01 ~ 5:00:00)",
        belowAverageProgram: [
            { day: "mon", type: "Rest or Cross-Training", content: "Complete rest or 30-40 minutes of swimming, cycling.", tips: "🚴‍♀️ Injury Prevention: Aid recovery with low-impact exercises for your joints after the weekend's long run." },
            { day: "tue", type: "Light Jog", content: "Jog for 50-60 minutes at a comfortable pace.", tips: "😊 Maintain Consistency: Steadily build the foundational fitness required for long distances." },
            { day: "wed", type: "Steady-State Run", content: "15-min warm-up, Main set: Run 8-10km at a slightly faster than comfortable pace, 15-min cool-down", tips: "🔥 Improve Endurance: Strengthen the 'ability to run for a long time,' which is the basis of a marathon." },
            { day: "thu", type: "Rest", content: "Complete rest.", tips: "🛌 Full Recovery: Gives your body time to recharge between intense workouts and long runs." },
            { day: "fri", type: "Light Jog", content: "Jog for 40 minutes at a very comfortable pace.", tips: "🍃 Conditioning: Loosen up your body to prepare for the weekend's key long run." },
            { day: "sat", type: "Long Slow Distance (LSD)", content: "Run 15-18km at a slow, conversational pace (increase by 1-2km weekly, with a reduced distance week after 3 weeks).", tips: "🏃‍♀️ Distance Adaptation: The most important workout. Develops the ability to use fat as an energy source." },
            { day: "sun", type: "Rest", content: "Complete rest.", tips: "☕️ Recharge: Store up energy for the next week's training and aid muscle growth." }
        ],
        averageTitle: "Weekly Plan for Runners Aiming for S, A+, A",
        averageGoal: "Goal: To move beyond the dream of many runners, a 'Sub-4' (sub-4-hour finish), and enter the 3-hour range by focusing on improving the ability to maintain Marathon Pace (MP). (Target Time: 3:32:01 ~ 4:35:00)",
        averageProgram: [
            { day: "mon", type: "Rest", content: "Complete rest.", tips: "🛌 Reset: Fully recover before starting a week of intense training." },
            { day: "tue", type: "Marathon Pace (MP) Run", content: "15-min warm-up, Main set: Run 10-12km at your actual target marathon pace, 15-min cool-down", tips: "🎯 Race-Sense Training: Engrain the target pace into your body to develop efficient energy distribution." },
            { day: "wed", type: "Recovery Run", content: "Jog for 50-60 minutes at a very comfortable pace.", tips: "🍃 Relieve Fatigue: Gently loosen up to relieve fatigue from yesterday's workout and aid blood circulation." },
            { day: "thu", type: "Tempo Run", content: "15-min warm-up, Main set: Run 7-9km at a 'comfortably hard' pace, 15-min cool-down", tips: "🚀 Lactate Threshold Training: Develops the ability to sustain a hard pace, preventing your pace from dropping after 30km." },
            { day: "fri", type: "Rest", content: "Complete rest.", tips: "🧘‍♀️ Full Recharge: Store glycogen to prepare for the weekend's long run." },
            { day: "sat", type: "Long Slow Distance (LSD)", content: "Run for 22-28km at a comfortable pace.", tips: "🏞️ Core Endurance: Build the strong physical and mental foundation to endure the latter half of the marathon." },
            { day: "sun", type: "Light Activity or Rest", content: "Light walk, stretching, or complete rest.", tips: "😊 Flexible Finish: End the week by choosing an activity based on your condition." }
        ],
        aboveAverageTitle: "Weekly Plan for Runners Aiming for SS",
        aboveAverageGoal: "Goal: To achieve an elite-level time under 3:32:00 by handling high training volume and maximizing the ability to maintain speed until the latter half of the race. (Target Time: Under 3:32:00)",
        aboveAverageProgram: [
            { day: "mon", type: "Recovery Run", content: "Very light jog for under 60 minutes.", tips: "🍃 Active Recovery: An essential process to handle high training volume." },
            { day: "tue", type: "High-Intensity Intervals", content: "20-min warm-up, Main set: (1.6km (1 mile) at 10k pace + 3 min jog) x 4-5 reps, 15-min cool-down", tips: "💥 Break Speed Limits: Improve overall running economy (efficiency) to make marathon pace feel easier." },
            { day: "wed", type: "Mid-distance Steady Run", content: "Run for 70-80 minutes at a comfortable pace.", tips: "🔥 Strengthen Steady-State: Maintain high training volume and consistently stimulate your aerobic capacity." },
            { day: "thu", type: "Long Marathon Pace (MP) Run", content: "15-min warm-up, Main set: Run 16-18km at your target marathon pace (MP), 15-min cool-down", tips: "🎯 The Ultimate Race-Specific Workout: Develops the ability to maintain pace when tired to overcome the '35km wall.'" },
            { day: "fri", type: "Rest", content: "Complete rest.", tips: "🛌 Supercompensation: A key time for your body to recover from micro-damage caused by intense training and become stronger." },
            { day: "sat", type: "Long Slow Distance (LSD)", content: "Run 30-35km at a comfortable pace (only until 3 weeks before the race).", tips: "marathon The Final Sharpening: The most important workout to check and complete all abilities for the marathon." },
            { day: "sun", type: "Recovery Run or Rest", content: "40-minute light jog or complete rest.", tips: "🧘‍♀️ Finish and Readjust: Carefully check your condition and prepare for the next week's training." }
        ]
      }
    }
  }
};

// General translations for the page UI
export const pageTranslations = {
  ko: {
    title: "RunLevel",
    subtitle: "내 러닝 등급은?",
    trainingGuideTitle: "맞춤형 주간 훈련 프로그램",
    goBack: "결과로 돌아가기",
    weekdays: {
      mon: "월요일", tue: "화요일", wed: "수요일", thu: "목요일", fri: "금요일", sat: "토요일", sun: "일요일"
    },
    trainingType: "훈련 종류",
    trainingContent: "훈련 내용",
    detailsAndTips: "훈련 목표 및 팁",
    generalGuide: "모든 훈련 전에는 동적 스트레칭으로 몸을 풀고, 훈련 후에는 정적 스트레칭으로 마무리하여 부상을 예방하는 것이 중요합니다.",
    femaleRunnerGuide: "여성의 경우 신체 주기(생리 주기)에 따라 컨디션 변동이 있을 수 있으니, 몸의 소리에 귀 기울여 훈련 강도를 유연하게 조절하는 것이 중요합니다.",
    halfMarathonGuide: "장거리 훈련인 만큼, 충분한 영양 섭취와 수분 보충, 그리고 휴식은 부상 방지와 기록 향상에 필수적입니다.",
    fullMarathonGuide: "풀 마라톤은 장거리 중에서도 가장 긴 도전이므로, 점진적인 훈련량 증가, 전략적인 영양 섭취(카보로딩), 그리고 충분한 휴식이 무엇보다 중요합니다.",

  commonGuide: {
      title: "모든 러너를 위한 맞춤 훈련 프로그램 공동 가이드",
      intro: "앞서 제공된 모든 맞춤 훈련 프로그램의 효과를 극대화하고, 부상 없이 즐겁게 달리기 위해 모든 러너가 반드시 기억해야 할 7가지 핵심 원칙이 있습니다. 이 가이드는 당신의 성별, 목표 거리, 현재 등급과 관계없이 모든 훈련의 기초가 되는 공통 원칙입니다.",
      principles: [
        { title: "1. 점진적 과부하의 원칙 (Progressive Overload)", content: "몸이 성장하고 강해지는 유일한 방법은 현재 수준보다 약간 더 강한 자극을 받는 것입니다. 하지만 너무 과격한 변화는 부상으로 이어집니다.", application: "적용법: 매주 총 달리기 거리를 10% 이상 늘리지 마세요. 인터벌 훈련의 횟수를 한 번에 너무 많이 늘리거나, 템포 런의 시간을 급격하게 늘리는 것을 피해야 합니다. 모든 훈련 계획은 이 원칙에 기반하여 점진적으로 강도가 높아지도록 설계되었습니다." },
        { title: "2. 일관성(규칙성)의 원칙 (Consistency)", content: "가끔 하는 고강도 훈련보다 꾸준히 하는 보통의 훈련이 훨씬 더 효과적입니다. 러닝은 정직한 운동으로, 꾸준함이 실력으로 직결됩니다.", application: "적용법: 일주일에 최소 3일 이상 달리는 습관을 들이세요. 피치 못할 사정으로 훈련을 걸렀다고 해서 좌절하지 말고, 다음 훈련일에 계획대로 다시 시작하는 것이 중요합니다. 일관된 훈련은 심폐지구력과 근력을 안정적으로 향상시킵니다." },
        { title: "3. 회복의 원칙 (Recovery)", content: "기억하세요: \"성장은 훈련할 때가 아니라, 쉴 때 이루어집니다.\" 훈련으로 근육에 미세한 손상을 입히고, 휴식을 통해 더 강하게 회복되는 과정이 반복되면서 실력이 향상됩니다.", application: "적용법:\n충분한 수면: 매일 7~8시간의 양질의 수면은 최고의 회복제입니다.\n휴식일 준수: 계획표에 있는 '휴식' 또는 '회복 달리기'는 훈련의 일부입니다. 죄책감 없이 쉬세요.\n몸의 신호 존중: 통증이 느껴진다면 즉시 훈련을 중단하고 휴식을 취해야 합니다. '그냥 참고 뛰면 되겠지'라는 생각은 심각한 부상으로 이어질 수 있습니다." },
        { title: "4. 특이성의 원칙 (Specificity)", content: "몸은 훈련하는 방식에 맞게 적응합니다. 풀 마라톤을 준비한다면, 단거리 인터벌 훈련만으로는 충분하지 않습니다. 목표에 맞는 훈련을 해야 합니다.", application: "적용법: 10km 기록 단축이 목표라면 10km 목표 페이스에 맞는 템포 런과 인터벌 훈련이 중요합니다. 풀 마라톤 완주가 목표라면, 장거리주(LSD)를 통해 오래 달리는 능력을 기르는 것이 핵심입니다. 각 계획표는 목표 거리에 특화된 훈련으로 구성되어 있습니다." },
        { title: "5. 다양성의 원칙 (Variety)", content: "매일 똑같은 속도와 거리로 달리면 몸이 적응하여 발전이 더뎌지고, 특정 부위에만 스트레스가 쌓여 부상 위험이 커집니다.", application: "적용법: 계획표에 제시된 것처럼 지속주(LSD), 템포 런, 인터벌, 회복 달리기 등 다양한 훈련을 조합하세요. 또한, 달리기 외에 수영, 자전거, 근력 운동 같은 교차 훈련(Cross-training)을 병행하면 심폐지구력을 향상시키고 부상을 예방하는 데 큰 도움이 됩니다." },
        { title: "6. 개별성의 원칙 (Individuality)", content: "제시된 훈련 계획은 훌륭한 '청사진'이지만, 모든 사람에게 100% 완벽하게 맞을 수는 없습니다. 사람마다 회복 속도, 생활 패턴, 신체적 강점과 약점이 모두 다릅니다.", application: "적용법: 제시된 계획을 기본으로 삼되, 자신의 컨디션에 따라 훈련 강도나 순서를 유연하게 조절하세요. 특히 여성 러너의 경우 생리 주기에 따라 컨디션이 크게 달라질 수 있으므로, 몸이 무겁게 느껴지는 날에는 고강도 훈련 대신 가벼운 조깅이나 휴식을 선택하는 지혜가 필요합니다." },
        { title: "7. 영양과 수분 섭취의 중요성 (Nutrition & Hydration)", content: "자동차에 올바른 연료를 넣어야 잘 달리듯, 우리 몸도 마찬가지입니다. 훈련의 효과를 제대로 보려면 잘 먹고 마셔야 합니다.", application: "적용법:\n영양: 훈련 전에는 탄수화물 위주로 에너지를 보충하고, 훈련 후에는 단백질과 탄수화물을 함께 섭취하여 근육 회복을 도와주세요.\n수분: 훈련 전, 중, 후에 꾸준히 수분을 섭취하는 습관을 들이세요. 특히 90분 이상 달리는 장거리 훈련 시에는 전해질 보충을 고려하는 것이 좋습니다." }
      ]
    }
  },
  en: {
    title: "RunLevel",
    subtitle: "What's my running grade?",
    trainingGuideTitle: "Weekly Customized Training Program",
    goBack: "Back to Results",
    weekdays: {
      mon: "Monday", tue: "Tuesday", wed: "Wednesday", thu: "Thursday", fri: "Friday", sat: "Saturday", sun: "Sunday"
    },
    trainingType: "Workout Type",
    trainingContent: "Workout Details",
    detailsAndTips: "Training Goal & Tips",
    generalGuide: "It is crucial to prevent injuries by performing dynamic stretching before all workouts and finishing with static stretching afterward.",
    femaleRunnerGuide: "For female runners, it's important to listen to your body and flexibly adjust training intensity, as your condition can vary with your menstrual cycle.",
    halfMarathonGuide: "As this is long-distance training, sufficient nutrition, hydration, and rest are essential for injury prevention and performance improvement.",
    fullMarathonGuide: "As the full marathon is the longest of all long-distance challenges, gradual increases in training volume, strategic nutrition (carb-loading), and sufficient rest are paramount.",
commonGuide: {
      title: "A Common Training Guide for All Runners",
      intro: "Here are 7 core principles that every runner must remember to maximize the effectiveness of all the provided customized training programs, prevent injuries, and enjoy running. This guide serves as the foundation for all training, regardless of your gender, target distance, or current grade.",
      principles: [
        { title: "1. Principle of Progressive Overload", content: "The only way for the body to grow and become stronger is to receive a stimulus that is slightly stronger than its current level. However, a change that is too drastic will lead to injury.", application: "Application: Do not increase your total weekly running distance by more than 10%. Avoid increasing the number of interval repetitions too much at once or drastically extending the duration of your tempo runs. All training plans are designed to gradually increase in intensity based on this principle." },
        { title: "2. Principle of Consistency", content: "Regular, moderate training is far more effective than occasional high-intensity workouts. Running is an honest sport where consistency directly translates to improvement.", application: "Application: Make it a habit to run at least 3 days a week. If you have to miss a workout for an unavoidable reason, don't get discouraged. It's important to just start again as planned on your next training day. Consistent training steadily improves cardiovascular endurance and muscular strength." },
        { title: "3. Principle of Recovery", content: "Remember: \"Growth happens during rest, not during training.\" Your skills improve through a repeated process of inflicting micro-damage to your muscles during training and then recovering stronger through rest.", application: "Application:\nSufficient Sleep: 7-8 hours of quality sleep each day is the best recovery aid.\nAdhere to Rest Days: The 'Rest' or 'Recovery Run' days in your plan are part of the training. Rest without guilt.\nRespect Your Body's Signals: If you feel pain, you must stop training immediately and rest. The thought that \"I can just push through it\" can lead to serious injury." },
        { title: "4. Principle of Specificity", content: "Your body adapts to the way you train. If you are preparing for a full marathon, short-distance interval training alone will not be sufficient. You must train for your specific goal.", application: "Application: If your goal is to improve your 10km time, tempo runs and interval training at your 10km target pace are important. If your goal is to complete a full marathon, developing the ability to run for a long time through Long Slow Distance (LSD) runs is key. Each training plan is composed of workouts specialized for the target distance." },
        { title: "5. Principle of Variety", content: "If you run the same distance at the same speed every day, your body will adapt, your progress will slow, and stress will accumulate on specific parts of your body, increasing the risk of injury.", application: "Application: As shown in the training plans, combine various types of workouts such as Long Slow Distance (LSD), tempo runs, intervals, and recovery runs. Additionally, incorporating Cross-training like swimming, cycling, and strength training can greatly help improve cardiovascular endurance and prevent injuries." },
        { title: "6. Principle of Individuality", content: "The provided training plans are an excellent 'blueprint,' but they cannot be a 100% perfect fit for everyone. Each person has a different recovery rate, lifestyle, and physical strengths and weaknesses.", application: "Application: Use the provided plans as a foundation, but flexibly adjust the intensity or order of your workouts according to your own condition. For female runners in particular, your condition can vary significantly with your menstrual cycle, so it is wise to choose a light jog or rest instead of a high-intensity workout on days when you feel heavy." },
        { title: "7. Importance of Nutrition & Hydration", content: "Just as a car needs the right fuel to run well, so does our body. To get the full effect of your training, you must eat and drink well.", application: "Application:\nNutrition: Before training, focus on carbohydrates to replenish energy. After training, consume a mix of protein and carbohydrates to help with muscle recovery.\nHydration: Make it a habit to hydrate consistently before, during, and after training. Especially for long runs lasting more than 90 minutes, it is a good idea to consider replenishing electrolytes." }
      ]
    }
  }
};