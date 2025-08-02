export interface TrainingProgram {
  level: string;
  title: string;
  description: string;
  mainTraining: {
    title: string;
    description: string;
  }[];
  subTraining: {
    title: string;
    description: string;
  };
}

export const trainingData: Record<string, Record<string, Record<string, TrainingProgram>>> = {
  '10km': {
    male: {
      belowAverage: {
        level: 'D, D+, C',
        title: '10km 완주 및 꾸준한 달리기 습관 형성',
        description: '10km라는 거리를 처음으로 완주하고, 달리기에 대한 즐거움을 느끼며 부상 없이 꾸준히 달릴 수 있는 몸을 만드는 것을 목표로 합니다.',
        mainTraining: [
          { title: '조깅 (주 3회)', description: '30~40분간 편안하게 대화하며 달릴 수 있는 속도로 조깅합니다.' },
          { title: '걷기-달리기 반복', description: '아직 10km를 쉬지 않고 달리기가 어렵다면, 5분 달리기 후 2분 걷기를 반복하며 점진적으로 달리기 시간을 늘려갑니다.' },
        ],
        subTraining: {
          title: '기초 근력 및 유연성',
          description: '부상 예방을 위해 달리기 전후 스트레칭을 습관화하고, 스쿼트, 런지, 플랭크 같은 기본적인 코어 및 하체 운동을 주 1-2회 실시합니다.',
        },
      },
      average: {
        level: 'C+, B, B+',
        title: '1시간 이내 완주 및 기록 단축의 시작',
        description: '1시간의 벽을 깨고, 기록 단축의 재미를 알아가는 단계입니다. 페이스 조절 능력을 기르고, 스피드를 향상시키는 훈련을 시작합니다.',
        mainTraining: [
          { title: '페이스 조절주 (주 2회)', description: '5~7km를 목표 페이스(예: 5:45/km)에 맞춰 달리는 연습을 합니다.' },
          { title: '인터벌 트레이닝 (주 1회)', description: '400m를 빠르게 달린 후 400m를 조깅으로 회복하는 훈련을 6~8회 반복하여 스피드를 향상시킵니다.' },
          { title: '장거리 조깅 (주 1회)', description: '10km 이상을 편안한 속도로 완주하여 지구력을 기릅니다.' },
        ],
        subTraining: {
          title: '러닝 자세 교정 및 보강 운동',
          description: '효율적인 러닝 자세를 의식하며 달리고, 코어 및 하체 근력 운동의 강도를 점진적으로 높여나갑니다.',
        },
      },
      aboveAverage: {
        level: 'A, A+, S, SS',
        title: '40분대 진입 및 아마추어 상급 러너로의 도약',
        description: '안정적인 페이스 유지 능력을 바탕으로, 50분의 벽을 넘어 40분대 진입을 목표로 합니다. 강도 높은 훈련을 통해 스피드와 지구력을 극한으로 끌어올립니다.',
        mainTraining: [
          { title: '템포 런 (주 1회)', description: '5~8km를 10km 목표 페이스보다 약간 빠른 속도로 꾸준히 달리는 훈련을 합니다.' },
          { title: '고강도 인터벌 (주 1회)', description: '1km를 목표 페이스보다 빠르게 달린 후 400m 조깅으로 회복하는 훈련을 4~6회 반복합니다.' },
          { title: '지속주 (주 1회)', description: '12km 이상을 목표 레이스 페이스보다 20~30초 느린 페이스로 꾸준히 달립니다.' },
        ],
        subTraining: {
          title: '전문적인 훈련 및 회복',
          description: '자신의 달리기 자세를 영상으로 촬영하여 분석하고 개선합니다. 훈련 강도가 높은 만큼, 폼롤러, 마사지 등 적극적인 회복과 충분한 영양 섭취가 필수적입니다.',
        },
      },
    },
    female: {
        belowAverage: {
            level: 'D, D+, C',
            title: '10km 완주 및 자신감 획득',
            description: '10km 완주를 통해 무엇이든 할 수 있다는 자신감을 얻고, 달리기를 삶의 일부로 만드는 것을 목표로 합니다.',
            mainTraining: [
              { title: '조깅 (주 3회)', description: '30~40분간 편안하게 대화하며 달릴 수 있는 속도로 조깅합니다.' },
              { title: '걷기-달리기 반복', description: '5분 달리기 후 3분 걷기를 반복하며 점진적으로 달리기 시간을 늘려갑니다.' },
            ],
            subTraining: {
              title: '기초 다지기',
              description: '부상 예방을 위한 스트레칭과 가벼운 코어 운동(브릿지 등)을 병행하여 기초 체력을 다집니다.',
            },
          },
          average: {
            level: 'C+, B, B+',
            title: '1시간 10분 이내 완주 및 기록 단축',
            description: '성장의 기쁨을 느끼며, 1시간 10분의 벽을 깨고 1시간 이내 완주를 목표로 하는 단계입니다.',
            mainTraining: [
              { title: '페이스 조절주 (주 2회)', description: '5~7km를 목표 페이스(예: 6:30/km)에 맞춰 달리는 연습을 합니다.' },
              { title: '인터벌 트레이닝 (주 1회)', description: '400m를 빠르게 달린 후 400m 조깅으로 회복하는 훈련을 6~8회 반복합니다.' },
              { title: '장거리 조깅 (주 1회)', description: '10km를 현재보다 약간 빠른 속도로 꾸준히 달립니다.' },
            ],
            subTraining: {
              title: '회복과 영양',
              description: '훈련 후 충분한 스트레칭과 영양 섭취, 수면을 통해 회복에 집중하고, 주 2회 근력 운동을 꾸준히 합니다.',
            },
          },
          aboveAverage: {
            level: 'A, A+, S, SS',
            title: '50분대 진입 및 상급 러너로의 성장',
            description: '1시간의 벽을 넘어, 50분대 진입을 목표로 하는 상급 러너 단계입니다. 강도 높은 훈련을 통해 새로운 한계에 도전합니다.',
            mainTraining: [
              { title: '템포 런 (주 1회)', description: '6~7km를 10km 목표 페이스(예: 5:30/km)로 꾸준히 달리는 훈련을 합니다.' },
              { title: '고강도 인터벌 (주 1회)', description: '1km를 목표 페이스보다 빠르게 달린 후 400m 조깅으로 회복하는 훈련을 4~5회 반복합니다.' },
              { title: '지속주 (주 1회)', description: '10~12km를 현재보다 약간 빠른 속도로 꾸준히 달립니다.' },
            ],
            subTraining: {
              title: '체계적인 관리',
              description: '회복을 위한 폼롤러 및 마사지를 적극 활용하고, 부상 방지를 위해 근력 운동을 주 2회 철저히 수행합니다.',
            },
          },
    }
  },
  'Half Marathon': {
      male: {
        belowAverage: {
            level: 'D, D+, C',
            title: '하프 마라톤 첫 완주 도전',
            description: '21.1km라는 긴 거리에 대한 두려움을 없애고, 부상 없이 완주하는 경험 자체를 목표로 합니다.',
            mainTraining: [
              { title: '장거리 조깅 (주 1회)', description: '10~12km를 시작으로, 매주 1~2km씩 거리를 늘려 18km까지 달릴 수 있도록 훈련합니다.' },
              { title: '지속주 (주 2회)', description: '40~60분간 대화가 가능한 편안한 속도로 조깅을 합니다.' },
            ],
            subTraining: {
              title: '장거리 대비 기초 체력',
              description: '부상 방지를 위한 스트레칭과 코어 근력 운동에 집중하며, 장거리 달리기에 몸이 적응할 수 있도록 합니다.',
            },
          },
          average: {
            level: 'C+, B, B+',
            title: '2시간 이내 완주 목표',
            description: '하프 마라토너의 상징적인 목표인 2시간 이내 완주를 위해, 페이스 조절 능력과 지구력을 함께 강화합니다.',
            mainTraining: [
              { title: '페이스 런 (주 1회)', description: '10~12km를 하프 마라톤 목표 페이스(예: 5:30/km)에 맞춰 달리는 연습을 합니다.' },
              { title: '롱 런 (주 1회)', description: '18~22km를 편안한 페이스로 달립니다. 후반부 2~3km는 목표 페이스로 달려봅니다.' },
              { title: '템포 런 (주 1회)', description: '30~40분간 목표 페이스보다 살짝 빠른 속도로 달리는 훈련을 합니다.' },
            ],
            subTraining: {
              title: '에너지 보급 및 근력 강화',
              description: '훈련 중 에너지젤, 수분 보급 연습을 시작합니다. 코어 및 하체 근력 운동을 주 2회 실시하여 후반부 지지력을 강화합니다.',
            },
          },
          aboveAverage: {
            level: 'A, A+, S, SS',
            title: '1시간 40분대 진입 및 상급자 레벨',
            description: '2시간의 벽을 넘어, 100분(1시간 40분) 이내 완주를 목표로 하는 상급자 단계입니다. 강도 높은 훈련으로 스피드와 지구력을 극대화합니다.',
            mainTraining: [
              { title: '고강도 인터벌 (주 1회)', description: '1km를 목표 페이스(예: 4:30/km)보다 빠르게, 또는 2km를 목표 페이스에 맞춰 달리는 훈련을 4~5회 반복합니다.' },
              { title: '템포 런 (주 1회)', description: '12~15km를 하프 마라톤 목표 페이스(예: 4:40/km)로 꾸준히 달립니다.' },
              { title: '장거리 페이스 런 (주 1회)', description: '25~30km를 레이스 페이스보다 20~30초 느린 페이스로 꾸준히 달립니다.' },
            ],
            subTraining: {
              title: '레이스 전략 및 회복',
              description: '달리기 경제성을 높이기 위한 근력 운동을 강화하고, 실제 레이스 시뮬레이션을 해봅니다. 훈련 강도 증가에 따른 피로 관리가 중요하며, 전문적인 코칭을 고려해볼 시기입니다.',
            },
          },
      },
      female: {
        belowAverage: {
            level: 'D, D+, C',
            title: '하프 마라톤 완주의 감동 느끼기',
            description: '완주 그 자체가 감동인 하프 마라톤에 도전하며, 긴 거리를 달릴 수 있는 지구력과 자신감을 기릅니다.',
            mainTraining: [
              { title: '장거리 조깅 (주 1회)', description: '10~12km를 시작으로, 매주 1~2km씩 거리를 늘려 18km까지 달릴 수 있도록 훈련합니다.' },
              { title: '지속주 (주 2회)', description: '40~60분간 대화가 가능한 편안한 속도로 조깅을 합니다.' },
            ],
            subTraining: {
              title: '장거리 적응력 향상',
              description: '수분 섭취와 탄수화물 위주의 식단으로 장거리 훈련에 대비하고, 부상 방지를 위한 스트레칭과 코어 운동에 집중합니다.',
            },
          },
          average: {
            level: 'C+, B, B+',
            title: '2시간 20분 이내 완주 및 페이스 조절 능력 향상',
            description: '평균보다 앞서, 자신만의 레이스를 훌륭하게 펼쳐내는 꾸준함의 아이콘이 되는 것을 목표로 합니다.',
            mainTraining: [
              { title: '페이스 런 (주 1회)', description: '12~15km를 하프 마라톤 목표 페이스(예: 6:00/km)로 꾸준히 달리는 훈련을 합니다.' },
              { title: '롱 런 (주 1회)', description: '20~22km를 편안한 페이스로 달립니다.' },
              { title: '인터벌 트레이닝 (주 1회)', description: '800m를 목표 페이스보다 빠르게(예: 5:30/km) 달린 후 400m 조깅으로 회복하는 훈련을 5~7회 반복합니다.' },
            ],
            subTraining: {
              title: '후반부 대비 근력 강화',
              description: '코어 및 하체 근력 운동을 주 2회 실시하여 후반부 지지력을 강화하고, 충분한 수면과 균형 잡힌 식사를 합니다.',
            },
          },
          aboveAverage: {
            level: 'A, A+, S, SS',
            title: '2시간 이내 완주 및 상급 러너 도전',
            description: '2시간 이내 완주라는 꿈의 목표를 현실로 만들고, 주변의 부러움을 사는 뛰어난 실력자로 거듭나는 것을 목표로 합니다.',
            mainTraining: [
              { title: '고강도 인터벌 (주 1회)', description: '1km를 목표 페이스(예: 5:00/km)보다 빠르게, 또는 2km를 목표 페이스에 맞춰 달리는 훈련을 4~5회 반복합니다.' },
              { title: '템포 런 (주 1회)', description: '12~15km를 하프 마라톤 목표 페이스(예: 5:10/km)로 꾸준히 달립니다.' },
              { title: '장거리 페이스 런 (주 1회)', description: '25~30km를 레이스 페이스보다 20~30초 느린 페이스로 꾸준히 달립니다.' },
            ],
            subTraining: {
              title: '레이스 운영 능력 및 전문적 관리',
              description: '달리기 경제성을 높이기 위한 근력 운동을 강화하고, 레이스 전략 수립 및 시뮬레이션 훈련을 합니다. 훈련량 증가에 따른 피로 관리가 중요하며, 전문적인 코칭을 고려해볼 시기입니다.',
            },
          },
      }
  },
  'Full Marathon': {
      male: {
        belowAverage: {
            level: 'D, D+, C',
            title: '풀코스 완주라는 위대한 도전',
            description: '42.195km라는 경이로운 거리를 두 발로 완주하는 경험을 통해, 인생의 어떤 어려움도 이겨낼 수 있다는 자신감을 얻는 것을 목표로 합니다.',
            mainTraining: [
              { title: '장거리 조깅 (주 1회)', description: '15~20km를 시작으로, 매주 2~3km씩 거리를 늘려 32km까지 달릴 수 있도록 훈련합니다.' },
              { title: '지속주 (주 2회)', description: '60~90분간 편안한 페이스로 달립니다.' },
            ],
            subTraining: {
              title: '부상 방지 및 에너지 보급',
              description: '가장 중요한 것은 부상 방지입니다. 충분한 스트레칭과 기초 근력 운동을 꾸준히 하고, 장거리 훈련 시 에너지 보급(에너지젤, 음료)을 연습합니다.',
            },
          },
          average: {
            level: 'C+, B, B+',
            title: '서브-4 달성, 진정한 마라토너로 거듭나기',
            description: '모든 러너들의 꿈인 \'서브-4\'를 목표로, 강인한 정신력과 체계적인 훈련을 통해 한계를 돌파합니다.',
            mainTraining: [
              { title: '마라톤 페이스 런 (주 1회)', description: '20~25km를 실제 풀코스 목표 페이스(예: 5:30/km)로 꾸준히 달리는 훈련을 합니다.' },
              { title: '롱 런 (주 1회)', description: '32~38km를 레이스 페이스보다 10~20초 느린 페이스로 꾸준히 달립니다.' },
              { title: '빌드업 런 (주 1회)', description: '15~20km를 시작은 느리게 하여 점진적으로 속도를 올려 마지막 5km는 목표 페이스로 달립니다.' },
            ],
            subTraining: {
              title: '대회 시뮬레이션 및 자세 교정',
              description: '꾸준한 수분 및 에너지 보급 연습을 통해 몸이 장거리에 적응하도록 합니다. 전문가의 도움을 받아 달리기 자세를 교정하면 좋습니다.',
            },
          },
          aboveAverage: {
            level: 'A, A+, S, SS',
            title: '서브-3를 향한 도전, 아마추어 최상위권 러너',
            description: '아마추어 러너의 경외의 대상인 \'서브-3\'를 목표로, 재능과 노력을 바탕으로 한계에 도전하는 최고 수준의 훈련을 진행합니다.',
            mainTraining: [
              { title: '초장거리 롱 런 (주 1회)', description: '40km 이상을 목표 서브-3 페이스(4:15/km 전후)에 근접하게 달리는 훈련을 반복합니다.' },
              { title: '마라톤 페이스 인터벌 (주 1회)', description: '5km를 풀코스 목표 페이스(4:20/km 전후)로 달린 후 1km 조깅으로 회복하는 훈련을 4~5회 반복합니다.' },
              { title: '고강도 인터벌 (주 1회)', description: '2~3km를 목표 서브-3 페이스보다 빠르게(4:00/km 전후) 달린 후 충분히 회복하는 훈련을 3~4회 반복합니다.' },
            ],
            subTraining: {
              title: '프로 수준의 관리',
              description: '컨디션 피크를 위한 철저한 테이퍼링, 심리적 압박감 관리를 위한 멘탈 트레이닝, 그리고 필요시 스포츠 전문의와의 상담을 통해 최상의 컨디션을 만듭니다.',
            },
          },
      },
      female: {
        belowAverage: {
            level: 'D, D+, C',
            title: '풀코스 완주, 감동의 드라마 쓰기',
            description: '메달의 무게보다 더 값진 감동의 드라마를 쓰며, 42.195km 완주라는 위대한 도전을 성공시키는 것을 목표로 합니다.',
            mainTraining: [
              { title: '장거리 조깅 (주 1회)', description: '15~20km를 시작으로, 매주 2~3km씩 거리를 늘려 32km까지 달릴 수 있도록 훈련합니다.' },
              { title: '지속주 (주 2회)', description: '60~90분간 편안한 페이스로 달립니다.' },
            ],
            subTraining: {
              title: '기초 체력 및 부상 방지',
              description: '가장 중요한 것은 부상 방지입니다. 충분한 스트레칭과 기초 근력 운동을 꾸준히 하고, 장거리 훈련 시 에너지 보급을 연습합니다.',
            },
          },
          average: {
            level: 'C+, B, B+',
            title: '서브-5 달성 및 자신감 있는 풀코스 주자',
            description: '풀코스를 완주하는 강인함을 증명하고, \'서브-5\' 달성을 통해 대한민국 여성 평균을 뛰어넘는 실력을 갖추는 것을 목표로 합니다.',
            mainTraining: [
              { title: '마라톤 페이스 런 (주 1회)', description: '20~25km를 실제 풀코스 목표 페이스(예: 6:30/km)로 꾸준히 달리는 훈련을 합니다.' },
              { title: '롱 런 (주 1회)', description: '30~35km를 레이스 페이스보다 20~30초 느린 페이스로 꾸준히 달립니다.' },
              { title: '인터벌 트레이닝 (주 1회)', description: '1km를 목표 페이스보다 빠르게(6:00/km 전후) 달린 후 400m 조깅으로 회복하는 훈련을 4~5회 반복합니다.' },
            ],
            subTraining: {
              title: '장거리 적응 및 회복',
              description: '꾸준한 수분 및 에너지 보급 연습을 통해 몸이 장거리에 적응하도록 합니다. 폼롤러와 마사지를 활용한 회복에 신경 씁니다.',
            },
          },
          aboveAverage: {
            level: 'A, A+, S, SS',
            title: '서브-4 달성, 존경받는 여성 마라토너',
            description: '강철 같은 의지로 \'서브-4\'를 달성하고, 모든 여성 러너들의 선망과 존경의 대상이 되는 것을 목표로 합니다.',
            mainTraining: [
              { title: '초장거리 롱 런 (주 1회)', description: '38~40km를 풀코스 레이스 페이스(5:10/km 전후)에 맞춰 달리는 훈련을 합니다.' },
              { title: '마라톤 페이스 인터벌 (주 1회)', description: '5km를 목표 페이스(4:40/km 전후)로 달린 후 1km 조깅으로 회복하는 훈련을 4~5회 반복합니다.' },
              { title: '고강도 인터벌 (주 1회)', description: '2~3km를 목표 페이스보다 빠르게(4:30/km 전후) 달린 후 충분히 회복하는 훈련을 3~4회 반복합니다.' },
            ],
            subTraining: {
              title: '전문적인 레이스 준비',
              description: '대회 당일의 날씨, 코스, 보급 전략 등을 시뮬레이션하여 만반의 준비를 합니다. 체계적인 회복 프로그램과 멘탈 트레이닝을 병행합니다.',
            },
          },
      }
  }
};