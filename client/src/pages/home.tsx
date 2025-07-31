import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Timer, Route, Trophy, RotateCcw, Lightbulb, BarChart3, User, Moon, Sun, Globe } from "lucide-react";
import { Link, useLocation, useRoute } from 'wouter';
import logoSvg from '@/assets/logo.svg';

// --- START: 타입 정의 ---
type Grade = 'SS' | 'S' | 'A+' | 'A' | 'B+' | 'B' | 'C+' | 'C' | 'D+' | 'D';
type Gender = 'male' | 'female';
type Distance = '10km' | 'Half Marathon' | 'Full Marathon';
type Language = 'ko' | 'en';

const gradeOrder: Grade[] = ['D', 'D+', 'C', 'C+', 'B', 'B+', 'A', 'A+', 'S', 'SS'];

interface GradeData {
  distance: string;
  gender: Gender;
  grade: Grade;
  minTime: string | null;
  maxTime: string | null;
}
// --- END: 타입 정의 ---

const RUNNING_GRADES: GradeData[] = [
    // 10km - 남성
    { distance: "10km", gender: "male", grade: "SS", minTime: null, maxTime: "41:00" },
    { distance: "10km", gender: "male", grade: "S", minTime: "41:01", maxTime: "45:00" },
    { distance: "10km", gender: "male", grade: "A+", minTime: "45:01", maxTime: "49:00" },
    { distance: "10km", gender: "male", grade: "A", minTime: "49:01", maxTime: "54:00" },
    { distance: "10km", gender: "male", grade: "B+", minTime: "54:01", maxTime: "58:00" },
    { distance: "10km", gender: "male", grade: "B", minTime: "58:01", maxTime: "1:02:00" },
    { distance: "10km", gender: "male", grade: "C+", minTime: "1:02:01", maxTime: "1:06:00" },
    { distance: "10km", gender: "male", grade: "C", minTime: "1:06:01", maxTime: "1:10:00" },
    { distance: "10km", gender: "male", grade: "D+", minTime: "1:10:01", maxTime: "1:16:00" },
    { distance: "10km", gender: "male", grade: "D", minTime: "1:16:01", maxTime: null },
    // 하프 마라톤 - 남성
    { distance: "하프 마라톤", gender: "male", grade: "SS", minTime: null, maxTime: "1:42:00" },
    { distance: "하프 마라톤", gender: "male", grade: "S", minTime: "1:42:01", maxTime: "1:50:00" },
    { distance: "하프 마라톤", gender: "male", grade: "A+", minTime: "1:50:01", maxTime: "1:56:00" },
    { distance: "하프 마라톤", gender: "male", grade: "A", minTime: "1:56:01", maxTime: "2:02:00" },
    { distance: "하프 마라톤", gender: "male", grade: "B+", minTime: "2:02:01", maxTime: "2:08:00" },
    { distance: "하프 마라톤", gender: "male", grade: "B", minTime: "2:08:01", maxTime: "2:15:00" },
    { distance: "하프 마라톤", gender: "male", grade: "C+", minTime: "2:15:01", maxTime: "2:24:00" },
    { distance: "하프 마라톤", gender: "male", grade: "C", minTime: "2:24:01", maxTime: "2:35:00" },
    { distance: "하프 마라톤", gender: "male", grade: "D+", minTime: "2:35:01", maxTime: "2:50:00" },
    { distance: "하프 마라톤", gender: "male", grade: "D", minTime: "2:50:01", maxTime: null },
    // 풀 마라톤 - 남성
    { distance: "풀 마라톤", gender: "male", grade: "SS", minTime: null, maxTime: "3:03:00" },
    { distance: "풀 마라톤", gender: "male", grade: "S", minTime: "3:03:01", maxTime: "3:25:00" },
    { distance: "풀 마라톤", gender: "male", grade: "A+", minTime: "3:25:01", maxTime: "3:42:00" },
    { distance: "풀 마라톤", gender: "male", grade: "A", minTime: "3:42:01", maxTime: "3:58:00" },
    { distance: "풀 마라톤", gender: "male", grade: "B+", minTime: "3:58:01", maxTime: "4:18:00" },
    { distance: "풀 마라톤", gender: "male", grade: "B", minTime: "4:18:01", maxTime: "4:35:00" },
    { distance: "풀 마라톤", gender: "male", grade: "C+", minTime: "4:35:01", maxTime: "4:50:00" },
    { distance: "풀 마라톤", gender: "male", grade: "C", minTime: "4:50:01", maxTime: "5:10:00" },
    { distance: "풀 마라톤", gender: "male", grade: "D+", minTime: "5:10:01", maxTime: "5:40:00" },
    { distance: "풀 마라톤", gender: "male", grade: "D", minTime: "5:40:01", maxTime: null },
    // 10km - 여성
    { distance: "10km", gender: "female", grade: "SS", minTime: null, maxTime: "48:00" },
    { distance: "10km", gender: "female", grade: "S", minTime: "48:01", maxTime: "52:00" },
    { distance: "10km", gender: "female", grade: "A+", minTime: "52:01", maxTime: "57:00" },
    { distance: "10km", gender: "female", grade: "A", minTime: "57:01", maxTime: "1:01:00" },
    { distance: "10km", gender: "female", grade: "B+", minTime: "1:01:01", maxTime: "1:05:00" },
    { distance: "10km", gender: "female", grade: "B", minTime: "1:05:01", maxTime: "1:09:00" },
    { distance: "10km", gender: "female", grade: "C+", minTime: "1:09:01", maxTime: "1:13:00" },
    { distance: "10km", gender: "female", grade: "C", minTime: "1:13:01", maxTime: "1:18:00" },
    { distance: "10km", gender: "female", grade: "D+", minTime: "1:18:01", maxTime: "1:25:00" },
    { distance: "10km", gender: "female", grade: "D", minTime: "1:25:01", maxTime: null },
    // 하프 마라톤 - 여성
    { distance: "하프 마라톤", gender: "female", grade: "SS", minTime: null, maxTime: "1:53:00" },
    { distance: "하프 마라톤", gender: "female", grade: "S", minTime: "1:53:01", maxTime: "2:03:00" },
    { distance: "하프 마라톤", gender: "female", grade: "A+", minTime: "2:03:01", maxTime: "2:11:00" },
    { distance: "하프 마라톤", gender: "female", grade: "A", minTime: "2:11:01", maxTime: "2:18:00" },
    { distance: "하프 마라톤", gender: "female", grade: "B+", minTime: "2:18:01", maxTime: "2:25:00" },
    { distance: "하프 마라톤", gender: "female", grade: "B", minTime: "2:25:01", maxTime: "2:33:00" },
    { distance: "하프 마라톤", gender: "female", grade: "C+", minTime: "2:33:01", maxTime: "2:42:00" },
    { distance: "하프 마라톤", gender: "female", grade: "C", minTime: "2:42:01", maxTime: "2:55:00" },
    { distance: "하프 마라톤", gender: "female", grade: "D+", minTime: "2:55:01", maxTime: "3:10:00" },
    { distance: "하프 마라톤", gender: "female", grade: "D", minTime: "3:10:01", maxTime: null },
    // 풀 마라톤 - 여성
    { distance: "풀 마라톤", gender: "female", grade: "SS", minTime: null, maxTime: "3:32:00" },
    { distance: "풀 마라톤", gender: "female", grade: "S", minTime: "3:32:01", maxTime: "3:52:00" },
    { distance: "풀 마라톤", gender: "female", grade: "A+", minTime: "3:52:01", maxTime: "4:12:00" },
    { distance: "풀 마라톤", gender: "female", grade: "A", minTime: "4:12:01", maxTime: "4:35:00" },
    { distance: "풀 마라톤", gender: "female", grade: "B+", minTime: "4:35:01", maxTime: "4:45:00" },
    { distance: "풀 마라톤", gender: "female", grade: "B", minTime: "4:45:01", maxTime: "5:00:00" },
    { distance: "풀 마라톤", gender: "female", grade: "C+", minTime: "5:00:01", maxTime: "5:20:00" },
    { distance: "풀 마라톤", gender: "female", grade: "C", minTime: "5:20:01", maxTime: "5:40:00" },
    { distance: "풀 마라톤", gender: "female", grade: "D+", minTime: "5:40:01", maxTime: "6:05:00" },
    { distance: "풀 마라톤", gender: "female", grade: "D", minTime: "6:05:01", maxTime: null },
];
const gradeDefinitions: Record<Grade, { color: string }> = {
  'SS': { color: 'bg-gradient-to-r from-slate-900 via-purple-700 to-cyan-400' },
  'S': { color: 'bg-gradient-to-r from-slate-900 to-purple-600' },
  'A+': { color: 'bg-gradient-to-r from-teal-500 to-green-400' },
  'A': { color: 'bg-gradient-to-r from-green-500 to-green-400' },
  'B+': { color: 'bg-gradient-to-r from-cyan-500 to-blue-400' },
  'B': { color: 'bg-gradient-to-r from-blue-500 to-blue-400' },
  'C+': { color: 'bg-gradient-to-r from-yellow-400 to-orange-400' },
  'C': { color: 'bg-gradient-to-r from-orange-500 to-orange-400' },
  'D+': { color: 'bg-gradient-to-r from-gray-500 to-gray-400' },
  'D': { color: 'bg-gradient-to-r from-gray-600 to-gray-500' }
};

const gradeColors: Record<Grade, string> = {
  'SS': '#8b5cf6', // A custom purple, can be adjusted
  'S':  '#a855f7', // A slightly lighter purple
  'A+': '#22c55e', // Green 500
  'A':  '#16a34a', // Green 600
  'B+': '#0ea5e9', // Sky 500
  'B':  '#2563eb', // Blue 600
  'C+': '#ca8a04', // Amber 600
  'C':  '#78716c', // Stone 500
  'D+': '#64748b', // Slate 500
  'D':  '#52525b'  // Zinc 600
};

const runnerProfiles: Record<Language, Record<Gender, Record<Distance, Record<Grade, string>>>> = {
  ko: {
    male: {
      '10km': {
        'SS': '각종 대회의 시상대를 노리는, 아마추어 최상위 그룹의 실력자.',
        'S': '수많은 땀으로 40분 초반대 기록을 달성한, 동호회 최상급 러너.',
        'A+': '50분이라는 상징적인 기록을 가뿐히 넘어선, 누구나 인정하는 실력파.',
        'A': '꾸준한 훈련이 만들어낸 결과. 안정적인 페이스를 유지하는 베테랑 러너.',
        'B+': '기록 단축의 재미를 아는 단계. 어제의 나를 이기며 성장하는 열정적인 주자.',
        'B': '대한민국 남성 러너의 가장 중심. 건강한 열정을 가진 기분 좋은 평균.',
        'C+': '1시간의 기록을 넘어선, 자신의 한계를 처음으로 돌파한 성공적인 도전자.',
        'C': '달리기의 즐거움에 눈뜨다. 이제 막 심장이 뛰기 시작한, 가능성으로 가득 찬 러너.',
        'D+': '포기하지 않는 마음. 10km라는 거리를 처음으로 몸에 새긴 입문자.',
        'D': '기록을 넘어 10km를 완주한, 자신과의 싸움에서 승리한 주자.'
      },
      'Half Marathon': {
        'SS': '아마추어의 한계를 넘어선 기록. 대회 연령별 시상식의 단골 주인공.',
        'S': '100분 이내 완주는 기본. 더 높은 경지를 향해 나아가는 최상급 러너.',
        'A+': '강철 심장. 21.1km를 지배하는 압도적인 페이스 컨트롤 능력을 갖춘 고수.',
        'A': '2시간 이내 완주라는, 러너들의 보편적인 꿈을 현실로 만든 실력자.',
        'B+': '2시간 완주를 목표로, 자신의 한계에 끊임없이 도전하는 집념의 러너.',
        'B': '하프 마라토너라는 이름의 자격. 2시간 넘게 뛸 수 있는 강인함을 갖춘 평균의 주자.',
        'C+': '나만의 리듬을 찾아서. 긴 호흡 속에서 달리기의 희열을 만끽하는 단계.',
        'C': '21.1km 완주 성공. 긴 여정의 즐거움을 깨닫고 더 큰 세상을 향해 나아가는 탐험가.',
        'D+': '두려움을 용기로 바꾼 도전자. 21.1km의 거리가 발아래 놓이기 시작했다.',
        'D': '완주의 경험 자체가 위대한 훈장. 인내의 가치를 아는 당신.'
      },
      'Full Marathon': {
        'SS': '모든 아마추어 러너의 경외를 받는 \'서브-3\'의 주인공. 재능과 노력이 빚어낸 최고의 경지.',
        'S': '초인적인 의지력으로 3시간 초반의 기록을 달성하는, 레이스 전체를 읽는 전략가.',
        'A+': '고통을 즐기는 단계. 42.195km의 모든 순간을 통제하는 레이스의 베테랑.',
        'A': '\'서브-4\', 이 목표의 무게를 아는 모든 이들의 존경을 받는 진정한 마라토너.',
        'B+': '대한민국 평균을 넘어, 풀코스 주자들 사이에서도 빛나는 실력을 갖춘 러너.',
        'B': '강인한 정신력의 소유자. 42.195km를 완주한 당신은 이미 보통 사람이 아니다.',
        'C+': '5시간 이내 완주 성공. 후반의 고비를 이겨내고 한계를 돌파한, 불굴의 의지.',
        'C': '5시간의 사투. 그 긴 시간 동안 포기하지 않은 스스로에게 박수를 보낼 자격이 있다.',
        'D+': '움직이는 모든 순간이 감동. 제한 시간을 향해 달려가는, 드라마의 주인공.',
        'D': '42.195km. 숫자만으로도 경이로운 이 거리를 두 발로 완주한 위대한 영웅.'
      }
    },
    female: {
        '10km': {
            'SS': '대회 시상대 단골. 재능과 노력이 빚어낸, 여성 아마추어 최상급 실력.',
            'S': '50분 이내 기록을 가뿐히 달성하는, 동호회에서도 손꼽히는 에이스.',
            'A+': '꾸준함으로 일궈낸 결실. 안정적인 페이스로 주로 위를 우아하게 달리는 실력자.',
            'A': '1시간이라는 상징적인 기록을 돌파한, 성실함과 꾸준함의 아이콘.',
            'B+': '1시간 완주를 목표로, 어제보다 나은 나를 만들어가는 긍정적인 러너.',
            'B': '달리기를 진정으로 즐기는 당신. 건강한 열정으로 가득 찬, 가장 아름다운 주자.',
            'C+': '성장의 기쁨. 땀방울 속에서 피어나는, 더 강해진 나를 만나는 시간.',
            'C': '10km 완주를 통해 무엇이든 할 수 있다는 자신감을 얻은, 멋진 도전자.',
            'D+': '달리기에 재미를 붙이며 10km 도전을 시작하는, 용기 있는 입문자.',
            'D': '자신과의 약속을 지킨 당신. 10km 완주 메달은 그 무엇과도 바꿀 수 없는 훈장.'
          },
          'Half Marathon': {
            'SS': '존경을 부르는 기록. 강인함과 아름다움을 모두 갖춘, 주로 위의 강자.',
            'S': '안정적인 1시간대 기록을 보유한, 주변의 부러움을 사는 뛰어난 실력자.',
            'A+': '2시간 이내 완주라는, 많은 노력을 통해 꿈의 목표를 현실로 만든 주인공.',
            'A': '2시간 완주를 목표로, 꾸준한 훈련을 통해 자신을 단련하는 성실한 러너.',
            'B+': '평균보다 앞서, 자신만의 레이스를 훌륭하게 펼쳐내는 꾸준함의 아이콘.',
            'B': '하프 코스를 완주할 수 있는 강인함을 갖춘, 가장 많은 여성 러너들의 평균.',
            'C+': '페이스 조절의 즐거움을 느끼며, 더 긴 거리에 대한 자신감을 얻는 단계.',
            'C': '21.1km의 긴 호흡 속에서 진정한 나를 만나는 시간.',
            'D+': '3시간 이내 완주를 목표로, 자신과의 싸움을 이겨내는 강인한 도전자.',
            'D': '완주, 그 자체가 감동. 모든 걸음이 모여 만들어낸 위대한 드라마의 주인공.'
          },
         'Full Marathon': {
            'SS': '보스턴 마라톤 참가 자격을 획득한, 모든 여성 러너들의 선망과 존경의 대상.',
            'S': '\'서브-4\',를 넘어, 더 높은 경지를 추구하는 엘리트 동호인.',
            'A+': '\'서브-4\', 달성. 강철같은 의지로 42.195km를 완주한 진정한 마라토너.',
            'A': '\'서브-4\',라는 위대한 성취를 향해 나아가는, 강한 정신력의 소유자.',
            'B+': '대한민국 여성 평균을 뛰어넘는 실력. 당신의 꾸준함이 만들어낸 자랑스러운 결과.',
            'B': '풀코스를 완주하는 강인함을 증명한, 존중받아 마땅한 진정한 주자.',
            'C+': '5시간 이내 완주 성공. 긴 사투를 이겨내고 한계를 돌파한, 불굴의 아이콘.',
            'C': '5시간이 넘는 긴 시간 동안 포기하지 않은, 스스로에게 박수받을 자격이 있는 러너.',
            'D+': '도전하는 모든 순간이 아름다운 당신. 완주 메달이 그 무엇보다 값진 이유.',
            'D': '메달의 무게보다 더 값진 감동의 드라마를 쓴, 이 시대의 가장 아름다운 도전자.'
          }
    }
  },
  en: {
    male: {
        '10km': {
            'SS': 'A top-tier amateur aiming for the podium in various competitions.',
            'S': 'An elite club runner who has achieved a low 40-minute record through countless hours of sweat.',
            'A+': 'A recognized talent who has easily surpassed the symbolic 50-minute mark.',
            'A': 'The result of consistent training. A veteran runner who maintains a stable pace.',
            'B+': 'An enthusiastic runner who knows the joy of shortening records and grows by beating yesterday\'s self.',
            'B': 'The heart of South Korean male runners. A pleasant average with healthy passion.',
            'C+': 'A successful challenger who has broken their own limits for the first time, surpassing the 1-hour record.',
            'C': 'Discovering the joy of running. A runner full of potential whose heart has just begun to race.',
            'D+': 'A mind that doesn\'t give up. A beginner who has engraved the 10km distance into their body for the first time.',
            'D': 'A runner who has won the battle against themselves by completing 10km beyond the record.'
          },
          'Half Marathon': {
            'SS': 'A record that transcends amateur limits. A regular on the age-group awards podium.',
            'S': 'Sub-100 minutes is a given. A top-class runner moving towards higher levels.',
            'A+': 'A master with a heart of steel and overwhelming pace control to dominate 21.1km.',
            'A': 'A talented runner who has made the common dream of finishing under 2 hours a reality.',
            'B+': 'A determined runner who constantly challenges their limits, aiming for a sub-2-hour finish.',
            'B': 'Qualified to be called a half-marathoner. The average runner with the toughness to run for over 2 hours.',
            'C+': 'Finding my own rhythm. A stage of enjoying the thrill of running in long breaths.',
            'C': 'Successfully completed 21.1km. An explorer who realizes the joy of a long journey and moves towards a bigger world.',
            'D+': 'A challenger who turned fear into courage. The 21.1km distance is now under your feet.',
            'D': 'The experience of completion itself is a great medal. You know the value of perseverance.'
          },
          'Full Marathon': {
            'SS': 'The star of \'Sub-3\', revered by all amateur runners. The highest level achieved through talent and effort.',
            'S': 'A strategist who reads the entire race, achieving a low 3-hour record with superhuman willpower.',
            'A+': 'A veteran of the race who enjoys the pain and controls every moment of the 42.195km.',
            'A': 'A true marathoner respected by all who know the weight of the \'Sub-4\' goal.',
            'B+': 'A runner with skills that shine even among full-course runners, surpassing the South Korean average.',
            'B': 'You are no longer an ordinary person for having completed 42.195km. A possessor of strong mental fortitude.',
            'C+': 'Successfully finished under 5 hours. An indomitable will that overcame the latter-half crisis and broke through limits.',
            'C': 'A 5-hour struggle. You deserve to applaud yourself for not giving up during that long time.',
            'D+': 'Every moving moment is touching. The protagonist of a drama, running towards the time limit.',
            'D': '42.195km. A great hero who completed this astonishing distance on two feet.'
          }
    },
    female: {
        '10km': {
            'SS': 'A regular on the competition podium. Top-tier female amateur skill born from talent and effort.',
            'S': 'An elite club runner who has achieved a low 50-minute record, envied by those around.',
            'A+': 'The fruit of consistency. A talented runner who gracefully glides on the course with a stable pace.',
            'A': 'An icon of sincerity and consistency who has broken the symbolic 1-hour record.',
            'B+': 'A positive runner who aims for a 1-hour completion, creating a better self than yesterday.',
            'B': 'You truly enjoy running. The most beautiful runner, full of healthy passion.',
            'C+': 'The joy of growth. A time to meet a stronger self, blooming amidst sweat.',
            'C': 'A wonderful challenger who has gained the confidence that they can do anything by completing 10km.',
            'D+': 'A courageous beginner who starts the 10km challenge while finding joy in running.',
            'D': 'You kept your promise to yourself. The 10km completion medal is a decoration that cannot be exchanged for anything.'
          },
          'Half Marathon': {
            'SS': 'A record that commands respect. A powerhouse on the course with both strength and beauty.',
            'S': 'An outstanding runner with a stable 1-hour range record, envied by those around.',
            'A+': 'The protagonist who made the dream goal of a sub-2-hour finish a reality through much effort.',
            'A': 'A sincere runner who trains themselves through consistent practice, aiming for a sub-2-hour completion.',
            'B+': 'An icon of consistency who runs their own race excellently, ahead of the average.',
            'B': 'The average of the most numerous female runners, equipped with the toughness to complete a half course.',
            'C+': 'A stage of feeling the joy of pace control and gaining confidence for longer distances.',
            'C': 'A time to meet my true self in the long breath of 21.1km.',
            'D+': 'A strong challenger who overcomes the battle against themselves, aiming for a sub-3-hour finish.',
            'D': 'Completion, itself, is a moving experience. The protagonist of a great drama created by every step.'
          },
         'Full Marathon': {
            'SS': 'The object of envy and respect for all female runners, qualified for the Boston Marathon.',
            'S': '\'Sub-4\', beyond, an elite club member who pursues higher levels.',
            'A+': 'Achieved \'Sub-4\'. A true marathoner who completed 42.195km with a will of steel.',
            'A': 'A possessor of strong mental fortitude, heading towards the great achievement of \'Sub-4\'.', 
            'B+': 'A proud result of your consistency, with skills surpassing the South Korean female average.',
            'B': 'A true runner worthy of respect, having proven the toughness to complete a full course.',
            'C+': 'An icon of indomitability who overcame a long struggle and broke through limits, finishing under 5 hours.',
            'C': 'A runner who deserves applause for not giving up for over 5 long hours.',
            'D+': 'Every moment of your challenge is beautiful. The reason why the completion medal is more valuable than anything.',
            'D': 'The most beautiful challenger of this era, who wrote a moving drama more valuable than the weight of the medal.'
          }
    }
  }
};

const distanceStandards: Record<Gender, Record<Distance, { name: Record<Language, string>; mean: number; sigma: number; standards: Record<Grade, number> }>> = {
  male: {
    '10km': {
      name: { ko: '10km', en: '10km' },
      mean: 3720,
      sigma: 600,
      standards: { 'SS': 2460, 'S': 2700, 'A+': 2940, 'A': 3240, 'B+': 3480, 'B': 3720, 'C+': 3960, 'C': 4200, 'D+': 4560, 'D': Infinity }
    },
    'Half Marathon': {
      name: { ko: '하프마라톤 (21.1km)', en: 'Half Marathon (21.1km)' },
      mean: 8100,
      sigma: 1200,
      standards: { 'SS': 6120, 'S': 6600, 'A+': 6960, 'A': 7320, 'B+': 7680, 'B': 8100, 'C+': 8640, 'C': 9300, 'D+': 10200, 'D': Infinity }
    },
    'Full Marathon': {
      name: { ko: '풀마라톤 (42.2km)', en: 'Full Marathon (42.2km)' },
      mean: 16500,
      sigma: 1680,
      standards: { 'SS': 10980, 'S': 12300, 'A+': 13320, 'A': 14280, 'B+': 15480, 'B': 16500, 'C+': 17400, 'C': 18600, 'D+': 20400, 'D': Infinity }
    }
  },
  female: {
    '10km': {
      name: { ko: '10km', en: '10km' },
      mean: 4140,
      sigma: 720,
      standards: { 'SS': 2880, 'S': 3120, 'A+': 3420, 'A': 3660, 'B+': 3900, 'B': 4140, 'C+': 4380, 'C': 4680, 'D+': 5100, 'D': Infinity }
    },
    'Half Marathon': {
      name: { ko: '하프마라톤 (21.1km)', en: 'Half Marathon (21.1km)' },
      mean: 9180,
      sigma: 1500,
      standards: { 'SS': 6780, 'S': 7380, 'A+': 7860, 'A': 8280, 'B+': 8700, 'B': 9180, 'C+': 9720, 'C': 10500, 'D+': 11400, 'D': Infinity }
    },
    'Full Marathon': {
      name: { ko: '풀마라톤 (42.2km)', en: 'Full Marathon (42.2km)' },
      mean: 18000,
      sigma: 1920,
      standards: { 'SS': 12720, 'S': 13920, 'A+': 15120, 'A': 16500, 'B+': 17100, 'B': 18000, 'C+': 19200, 'C': 20400, 'D+': 21900, 'D': Infinity }
    }
  }
};

const translations = {
  ko: {
    title: "RunLevel",
    subtitle: "내 러닝 등급은?",
    inputTitle: "러닝 기록을 입력해주세요",
    inputDesc: "거리와 시간을 입력하면 당신의 러닝 등급을 확인할 수 있습니다",
    gender: "성별",
    male: "남성",
    female: "여성",
    distance: "러닝 거리",
    totalTime: "총 시간",
    hours: "시간",
    minutes: "분",
    seconds: "초",
    checkGrade: "등급 확인하기",
    yourGrade: "당신의 러닝 등급",
    normalDist: "나는 어디쯤 달리고 있을까?",
    myRecord: "내 기록",
    retryButton: "다시 측정하기",
    disclaimer: "※ 재미로만 확인해주세요!",
    disclaimerText: "본 등급은 수많은 러너들의 평균적인 기록을 바탕으로 한 참고 자료예요. 개인의 나이, 컨디션, 코스 난이도 등 다양한 변수는 담겨있지 않답니다. 숫자 등급보다 중요한 건, 어제의 나보다 성장하는 즐거움이니까요! 😊",
    importantNoticeContent: "어떤 기록이든 <span class=\"text-yellow-600\">완주 자체만으로도 대단한 것<\/span>입니다! 🏃‍♀️🏃‍♂️",
    footer: "© 2025 RunLevel - 당신의 러닝 여정을 응원합니다!",
    selectGender: "성별을 선택하세요",
    selectDistance: "거리를 선택하세요",
    importantNoticeTitle: "중요한 안내사항",
    calculatorTitle: "러닝 계산기",
    paceCalculation: "페이스 계산",
    timeCalculation: "시간 계산",
    distanceCalculation: "거리 계산",
    distanceKm: "거리 (km)",
    example: "예",
    fullCourse: "풀코스",
    half: "하프",
    km10: "10km",
    km5: "5km",
    time: "시간",
    hoursShort: "시",
    minutesShort: "분",
    secondsShort: "초",
    paceMinSecPerKm: "페이스 (분:초/km)",
    calculatePace: "페이스 계산",
    calculateTime: "시간 계산",
    calculateDistance: "거리 계산",
    reset: "초기화",
    paceResult: "페이스: {minutes}분 {seconds}초/km",
    enterValidDistanceTime: "유효한 거리와 시간을 입력하세요.",
    timeResult: "{hours}시간 {minutes}분 {seconds}초",
    enterValidDistancePace: "유효한 거리와 페이스를 입력하세요.",
    distanceResult: "{distance} km",
    enterValidTimePace: "유효한 시간과 페이스를 입력하세요.",
    gradeTable: "등급 기준표",
    distanceAnalysis: "거리별 분석",
    distanceAnalysisDesc: "10km, 하프, 풀마라톤 각 거리별 맞춤 분석",
    percentileAnalysis: "퍼센타일 분석", 
    percentileAnalysisDesc: "전체 러너들 중 나의 정확한 위치 확인",
    genderSpecific: "성별 맞춤형",
    genderSpecificDesc: "남녀 러너의 생리적 차이를 반영한 정확한 분석",
    personalizedAdvice: "맞춤형 조언",
    personalizedAdviceDesc: "등급별 개인화된 러닝 가이드와 목표 설정",
    gradeDescriptionNotAvailable: "등급 설명을 찾을 수 없습니다.",
    trainingTitle: "맞춤 훈련 프로그램",
  },
  en: {
    title: "RunLevel", 
    subtitle: "What's My Running Grade?",
    inputTitle: "Enter Your Running Record",
    inputDesc: "Enter distance and time to check your running grade",
    gender: "Gender",
    male: "Male",
    female: "Female", 
    distance: "Running Distance",
    totalTime: "Total Time",
    hours: "Hours",
    minutes: "Minutes", 
    seconds: "Seconds",
    checkGrade: "Check Grade",
    yourGrade: "Your Running Grade",
    normalDist: "Where am I running among others?",
    myRecord: "My Record",
    retryButton: "Try Again",
    disclaimer: "※ For entertainment purposes only!",
    disclaimerText: "This grade is based on average records of many runners. Individual factors like age, condition, course difficulty are not included. What matters more than the grade is the joy of growing better than yesterday! 😊",
    importantNoticeContent: "Finishing is an incredible achievement in itself, regardless of your time. 🏃‍♀️🏃‍♂️",
    footer: "© 2025 RunLevel - Supporting your running journey!",
    selectGender: "Select gender",
    selectDistance: "Select distance", 
    importantNoticeTitle: "Important Notice",
    calculatorTitle: "Running Calculator",
    paceCalculation: "Pace Calculation",
    timeCalculation: "Time Calculation",
    distanceCalculation: "Distance Calculation",
    distanceKm: "Distance (km)",
    example: "e.g.",
    fullCourse: "Full Course",
    half: "Half",
    km10: "10km",
    km5: "5km",
    time: "Time",
    hoursShort: "H",
    minutesShort: "M",
    secondsShort: "S",
    paceMinSecPerKm: "Pace (min:sec/km)",
    calculatePace: "Calculate Pace",
    calculateTime: "Calculate Time",
    calculateDistance: "Calculate Distance",
    reset: "Reset",
    paceResult: "Pace: {minutes}min {seconds}sec/km",
    enterValidDistanceTime: "Enter valid distance and time.",
    timeResult: "{hours}h {minutes}m {seconds}s",
    enterValidDistancePace: "Enter valid distance and pace.",
    distanceResult: "{distance} km",
    enterValidTimePace: "Enter valid time and pace.",
    gradeTable: "Grade Standards",
    distanceAnalysis: "Distance Analysis",
    distanceAnalysisDesc: "Customized analysis for 10K, Half, and Full Marathon",
    percentileAnalysis: "Percentile Analysis", 
    percentileAnalysisDesc: "Find your exact position among all runners",
    genderSpecific: "Gender-Specific",
    genderSpecificDesc: "Accurate analysis reflecting physiological differences",
    personalizedAdvice: "Personalized Advice",
    personalizedAdviceDesc: "Personalized running guide and goal setting by grade",
    gradeDescriptionNotAvailable: "Grade description not available.",
    trainingTitle: "Customized Training Program for Your Next Level",
  }
};

// home.tsx 파일의 GradeDistributionBarChart 부분을 이 코드로 교체하세요.

// home.tsx 파일의 GradeDistributionBarChart 부분을 이 코드로 교체하세요.

// home.tsx 파일의 GradeDistributionBarChart 부분을 이 코드로 교체하세요.

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const GradeDistributionBarChart = ({ userGrade }: { userGrade?: Grade }) => {
  // B/B+가 가장 높고, 양 옆으로 갈수록 낮아지는 삼각형 모양으로 데이터 수정
  const gradeDistribution: { grade: Grade, percent: number}[] = [
    { grade: 'D', percent: 2 },
    { grade: 'D+', percent: 4 },
    { grade: 'C', percent: 8 },
    { grade: 'C+', percent: 16 },
    { grade: 'B', percent: 20 },
    { grade: 'B+', percent: 20 },
    { grade: 'A', percent: 16 },
    { grade: 'A+', percent: 8 },
    { grade: 'S', percent: 4 },
    { grade: 'SS', percent: 2 },
  ];

  const maxPercent = Math.max(...gradeDistribution.map(d => d.percent));

  return (
    <TooltipProvider>
      <div className="w-full" aria-label="등급별 러너 분포 막대그래프">
        <div className="flex justify-center items-end gap-1 h-64 md:h-80 pt-4">
          {gradeDistribution.map((data) => {
            const isUserGrade = data.grade === userGrade;
            const barHeight = `${(data.percent / maxPercent) * 100}%`;
            
            return (
              <Tooltip key={data.grade}>
                <TooltipTrigger asChild>
                  <div className="flex-1 h-full flex flex-col justify-end items-center">
                    <div
                      className={`w-full rounded-t-md transition-all duration-300 ${isUserGrade ? 'opacity-100 ring-2 ring-offset-2 ring-blue-500 dark:ring-offset-gray-800' : 'opacity-60 hover:opacity-90'}`}
                      style={{ height: barHeight, backgroundColor: gradeColors[data.grade] }}
                    />
                    <div className={`mt-2 text-xs font-semibold ${isUserGrade ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'}`}>
                      {data.grade}
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{data.grade}: {data.percent}%</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </div>
    </TooltipProvider>
  );
};

export default function Home() {
    const [match] = useRoute("/results");
    const [location, navigate] = useLocation();

    // State declarations
    const [selectedDistance, setSelectedDistance] = useState<Distance | ''>('');
    const [gender, setGender] = useState<Gender>('male');
    const [hours, setHours] = useState<string>('');
    const [minutes, setMinutes] = useState<string>('');
    const [seconds, setSeconds] = useState<string>('');
    
    const [calcDistance, setCalcDistance] = useState<string>('');
    const [calcHours, setCalcHours] = useState<string>('');
    const [calcMinutes, setCalcMinutes] = useState<string>('');
    const [calcSeconds, setCalcSeconds] = useState<string>('');
    const [calcPaceMinutes, setCalcPaceMinutes] = useState<string>('');
    const [calcPaceSeconds, setCalcPaceSeconds] = useState<string>('');
    const [calcResult, setCalcResult] = useState<string>('');
    const [calculatedTotalSeconds, setCalculatedTotalSeconds] = useState<number | null>(null);

    const [language, setLanguage] = useState<Language>('ko');
    const [results, setResults] = useState<any>(null);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const t = translations[language];

    // --- Effects ---

    // Effect to sync theme from localStorage and apply it on initial load
    useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
      const initialTheme = savedTheme === 'dark' ? 'dark' : 'light';
      setTheme(initialTheme);
      if (initialTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, []);

    // Effect to sync language from URL when it changes (e.g., back/forward buttons)
    useEffect(() => {
      const queryParams = new URLSearchParams(window.location.search);
      const langFromUrl = queryParams.get('lang');
      const currentLang = (langFromUrl === 'en' || langFromUrl === 'ko') ? langFromUrl : 'ko';
      if (language !== currentLang) {
          setLanguage(currentLang);
      }
    }, [location]);

    // Effect to sync results data from URL. Re-runs when URL or language state changes.
    useEffect(() => {
      if (match) { // On /results page
          const queryParams = new URLSearchParams(window.location.search);
          const totalSeconds = queryParams.get('totalSeconds');
          const grade = queryParams.get('grade') as Grade;
          const formattedTime = queryParams.get('formattedTime');
          const genderParam = queryParams.get('gender') as Gender;
          const selectedDistanceParam = queryParams.get('selectedDistance');

          if (totalSeconds && grade && formattedTime && genderParam && selectedDistanceParam) {
              const decodedDistance = decodeURIComponent(selectedDistanceParam) as Distance;
              const distanceName = distanceStandards[genderParam]?.[decodedDistance]?.name[language];
              
              if (distanceName) {
                  setResults({
                      totalSeconds: parseInt(totalSeconds),
                      grade,
                      formattedTime: decodeURIComponent(formattedTime),
                      distanceName: distanceName,
                      gender: genderParam,
                      selectedDistance: decodedDistance
                  });
                  setSelectedDistance(decodedDistance);
              } else {
                  navigate(`/?lang=${language}`, { replace: true });
              }
          }
      } else {
          setResults(null);
      }
    }, [match, location, language]);

    // --- Helper Functions ---

    const getGradeLevel = (grade: Grade): 'belowAverage' | 'average' | 'aboveAverage' => {
      if (['D', 'D+', 'C', 'C+'].includes(grade)) {
        return 'belowAverage';
      } else if (['B', 'B+'].includes(grade)) {
        return 'average';
      } else {
        return 'aboveAverage';
      }
    };

    const handleNumberInput = (value: string, setter: (value: string) => void, max?: number) => {
      const num = parseInt(value);
      if (value === '' || (!isNaN(num) && num >= 0 && (!max || num <= max))) {
        setter(value);
      }
    };

    const determineGrade = (totalSeconds: number, distance: Distance, gender: Gender): Grade => {
      const standards = distanceStandards[gender][distance].standards;
      if (totalSeconds <= standards.SS) return 'SS';
      if (totalSeconds <= standards.S) return 'S';
      if (totalSeconds <= standards['A+']) return 'A+';
      if (totalSeconds <= standards.A) return 'A';
      if (totalSeconds <= standards['B+']) return 'B+';
      if (totalSeconds <= standards.B) return 'B';
      if (totalSeconds <= standards['C+']) return 'C+';
      if (totalSeconds <= standards.C) return 'C';
      if (totalSeconds <= standards['D+']) return 'D+';
      return 'D';
    };

    const formatTime = (totalSeconds: number): string => {
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = Math.floor(totalSeconds % 60);
  
      if (hours > 0) {
        return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      }
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    // --- Event Handlers ---

    const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
      if (newTheme === 'dark') {
          document.documentElement.classList.add('dark');
      } else {
          document.documentElement.classList.remove('dark');
      }
    };
  
    const toggleLanguage = () => {
      const newLang = language === 'ko' ? 'en' : 'ko';
      // 1. Update state directly to trigger re-render with new language
      setLanguage(newLang);
      
      // 2. Sync the URL to match the new state
      const queryParams = new URLSearchParams(window.location.search);
      queryParams.set('lang', newLang);
      navigate(`${window.location.pathname}?${queryParams.toString()}`, { replace: true });
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!selectedDistance) {
        alert(t.selectDistance);
        return;
      }
      const hoursNum = parseInt(hours) || 0;
      const minutesNum = parseInt(minutes) || 0;
      const secondsNum = parseInt(seconds) || 0;
      const totalSeconds = (hoursNum * 3600) + (minutesNum * 60) + secondsNum;

      if (totalSeconds <= 0) {
        alert('올바른 시간을 입력해주세요.');
        return;
      }

      const grade = determineGrade(totalSeconds, selectedDistance, gender);
      const formattedTime = formatTime(totalSeconds);
      
      const queryParams = new URLSearchParams({
        totalSeconds: totalSeconds.toString(),
        grade,
        formattedTime: encodeURIComponent(formattedTime),
        gender,
        selectedDistance: encodeURIComponent(selectedDistance),
        lang: language,
      });
      
      navigate(`/results?${queryParams.toString()}`);
    };

    const resetForm = () => {
      setSelectedDistance('');
      setGender('male');
      setHours('');
      setMinutes('');
      setSeconds('');
      setResults(null);
      navigate(`/?lang=${language}`);
    };

    // --- Calculator Functions ---
    const calculatePace = () => {
        const distance = parseFloat(calcDistance);
        const h = parseInt(calcHours) || 0;
        const m = parseInt(calcMinutes) || 0;
        const s = parseInt(calcSeconds) || 0;
    
        if (distance > 0 && (h > 0 || m > 0 || s > 0)) {
          const totalSeconds = h * 3600 + m * 60 + s;
          const paceInSeconds = totalSeconds / distance;
          const paceMinutes = Math.floor(paceInSeconds / 60);
          const paceSeconds = Math.round(paceInSeconds % 60);
          setCalcResult(t.paceResult.replace('{minutes}', paceMinutes.toString()).replace('{seconds}', paceSeconds.toString()));
          setCalculatedTotalSeconds(totalSeconds);
        } else {
          setCalcResult(t.enterValidDistanceTime);
        }
      };
    
      const calculateTime = () => {
        const distance = parseFloat(calcDistance);
        const paceM = parseInt(calcPaceMinutes) || 0;
        const paceS = parseInt(calcPaceSeconds) || 0;
    
        if (distance > 0 && (paceM > 0 || paceS > 0)) {
          const paceInSeconds = paceM * 60 + paceS;
          const totalSeconds = paceInSeconds * distance;
          const h = Math.floor(totalSeconds / 3600);
          const m = Math.floor((totalSeconds % 3600) / 60);
          const s = Math.round(totalSeconds % 60);
          setCalcResult(t.timeResult.replace('{hours}', h.toString()).replace('{minutes}', m.toString()).replace('{seconds}', s.toString()));
          setCalculatedTotalSeconds(totalSeconds);
        } else {
          setCalcResult(t.enterValidDistancePace);
        }
      };
    
      const calculateDistance = () => {
        const h = parseInt(calcHours) || 0;
        const m = parseInt(calcMinutes) || 0;
        const s = parseInt(calcSeconds) || 0;
        const paceM = parseInt(calcPaceMinutes) || 0;
        const paceS = parseInt(calcPaceSeconds) || 0;
    
        if ((h > 0 || m > 0 || s > 0) && (paceM > 0 || paceS > 0)) {
          const totalSeconds = h * 3600 + m * 60 + s;
          const paceInSeconds = paceM * 60 + paceS;
          const distance = totalSeconds / paceInSeconds;
          setCalcResult(t.distanceResult.replace('{distance}', distance.toFixed(2)));
        } else {
          setCalcResult(t.enterValidTimePace);
        }
      };

      const resetCalcFields = () => {
        setCalcDistance('');
        setCalcHours('');
        setCalcMinutes('');
        setCalcSeconds('');
        setCalcPaceMinutes('');
        setCalcPaceSeconds('');
        setCalcResult('');
        setCalculatedTotalSeconds(null);
      };

      const renderBadges = () => {
        if (calculatedTotalSeconds && parseFloat(calcDistance) === 42.195) {
            if (calculatedTotalSeconds <= 10800) return <Badge variant="destructive">Sub-3</Badge>;
            if (calculatedTotalSeconds <= 14400) return <Badge className="bg-blue-500 text-white">Sub-4</Badge>;
            if (calculatedTotalSeconds <= 18000) return <Badge className="bg-green-500 text-white">Sub-5</Badge>;
        }
        return null;
      };

    // --- Render Logic ---
    if (match && !results) {
      return (
          <div className="text-center p-10">
              <Card className="inline-block p-8">
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                      Loading results...
                  </p>
              </Card>
          </div>
      );
    }



  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 min-h-screen transition-colors">
      <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
          <div className="relative flex items-center justify-center">
            <Link href={`/?lang=${language}`} className="text-center cursor-pointer">
                <div className="flex items-center justify-center mb-1 sm:mb-2">
                    <img src={logoSvg} alt="RunLevel Logo" className="mr-2 sm:mr-3 h-8 w-8 sm:h-10 sm:w-10" />
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">{t.title}</h1>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg">{t.subtitle}</p>
            </Link>
            <div className="absolute right-0 flex items-center gap-1 sm:gap-2">
              <Button variant="outline" size="sm" onClick={toggleLanguage} className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-xs sm:text-sm px-2 sm:px-3">
                <Globe className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                <span className="hidden xs:inline">{language === 'ko' ? 'EN' : '한글'}</span>
                <span className="xs:hidden">{language === 'ko' ? 'EN' : '한'}</span>
              </Button>
              <Button variant="outline" size="sm" onClick={toggleTheme} className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 px-2 sm:px-3">
                {theme === 'light' ? <Moon className="h-3 w-3 sm:h-4 sm:w-4" /> : <Sun className="h-3 w-3 sm:h-4 sm:w-4" />} 
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
        {!results ? (
          <>
            <Card className="rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-0">
                <div className="text-center mb-6 sm:mb-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-2">{t.inputTitle}</h2>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{t.inputDesc}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <Label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      <User className="inline text-blue-600 dark:text-blue-400 mr-2 h-4 w-4" />
                      {t.gender}
                    </Label>
                    <ToggleGroup type="single" value={gender} onValueChange={(value) => value && setGender(value as Gender)} className="grid grid-cols-2 gap-2">
                      <ToggleGroupItem value="male" variant="outline" className="px-4 py-3 text-lg">{t.male}</ToggleGroupItem>
                      <ToggleGroupItem value="female" variant="outline" className="px-4 py-3 text-lg">{t.female}</ToggleGroupItem>
                    </ToggleGroup>
                  </div>

                  <div>
                    <Label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      <Route className="inline text-blue-600 dark:text-blue-400 mr-2 h-4 w-4" />
                      {t.distance}
                    </Label>
                    <ToggleGroup type="single" value={selectedDistance} onValueChange={(value) => value && setSelectedDistance(value as Distance)} className="grid grid-cols-3 gap-2">
                      <ToggleGroupItem value="10km" variant="outline" className="px-4 py-3 text-lg">10km</ToggleGroupItem>
                      <ToggleGroupItem value="Half Marathon" variant="outline" className="px-4 py-3 text-lg">21.1km</ToggleGroupItem>
                      <ToggleGroupItem value="Full Marathon" variant="outline" className="px-4 py-3 text-lg">42.195km</ToggleGroupItem>
                    </ToggleGroup>
                  </div>

                  <div>
                    <Label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      <Timer className="inline text-blue-600 dark:text-blue-400 mr-2 h-4 w-4" />
                      {t.totalTime}
                    </Label>
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <Input type="number" min="0" max="23" className="w-full px-3 py-3 border-2 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 text-lg text-center bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" placeholder="0" value={hours} onChange={(e) => handleNumberInput(e.target.value, setHours, 23)} />
                        <Label className="block text-xs text-gray-500 dark:text-gray-400 text-center mt-1">{t.hours}</Label>
                      </div>
                      <div>
                        <Input type="number" min="0" max="59" className="w-full px-3 py-3 border-2 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 text-lg text-center bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" placeholder="22" value={minutes} onChange={(e) => handleNumberInput(e.target.value, setMinutes, 59)} required />
                        <Label className="block text-xs text-gray-500 dark:text-gray-400 text-center mt-1">{t.minutes}</Label>
                      </div>
                      <div>
                        <Input type="number" min="0" max="59" className="w-full px-3 py-3 border-2 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 text-lg text-center bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" placeholder="30" value={seconds} onChange={(e) => handleNumberInput(e.target.value, setSeconds, 59)} />
                        <Label className="block text-xs text-gray-500 dark:text-gray-400 text-center mt-1">{t.seconds}</Label>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600 text-white font-bold py-4 px-6 rounded-xl transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                    <Trophy className="mr-2 h-5 w-5" />
                    {t.checkGrade}
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <Card className="rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
                  <Trophy className="mr-3 h-6 w-6 text-yellow-500" />
                  {t.gradeTable}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedDistance ? (
                   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 text-white">
                    {RUNNING_GRADES
                      .filter(grade => grade.distance === (selectedDistance === '10km' ? '10km' : selectedDistance === 'Half Marathon' ? '하프 마라톤' : '풀 마라톤') && grade.gender === gender)
                      .sort((a, b) => gradeOrder.indexOf(b.grade) - gradeOrder.indexOf(a.grade))
                      .map((gradeItem) => (
                        <div key={gradeItem.grade} className={`rounded-xl shadow-lg p-3 flex flex-col items-center justify-center text-center min-h-[110px] transition-transform hover:scale-105 relative ${gradeDefinitions[gradeItem.grade]?.color || 'bg-gray-500'} ${['SS', 'S', 'A+', 'A'].includes(gradeItem.grade) ? 'animate-aurora' : ''}`}>
                            <div className="font-bold text-3xl">{gradeItem.grade}</div>
                            <div className="text-xs font-semibold mt-1">
                              {gradeItem.minTime && gradeItem.maxTime ? `${gradeItem.minTime} ~ ${gradeItem.maxTime}` : gradeItem.minTime ? `${gradeItem.minTime} ~` : `~ ${gradeItem.maxTime}`}
                            </div>
                        </div>
                      ))}
                  </div>
                ) : (
                  <div className="text-center text-gray-500 dark:text-gray-400 py-4">
                    <p>{language === 'ko' ? '상단의 성별과 거리를 선택하면 등급표가 나타납니다.' : 'Select a gender and distance above to see the grade table.'}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">{t.calculatorTitle}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <ToggleGroup type="single" value={calcDistance} onValueChange={(value) => value && setCalcDistance(value)} className="w-full grid grid-cols-3">
                    <ToggleGroupItem value="pace">{t.paceCalculation}</ToggleGroupItem>
                    <ToggleGroupItem value="time">{t.timeCalculation}</ToggleGroupItem>
                    <ToggleGroupItem value="distance">{t.distanceCalculation}</ToggleGroupItem>
                </ToggleGroup>

                {(calcDistance === 'pace' || calcDistance === 'time') && (
                  <div className="space-y-2">
                    <Label htmlFor="calcDistance">{t.distanceKm}</Label>
                    <Input id="calcDistance" type="number" value={calcDistance} onChange={(e) => setCalcDistance(e.target.value)} placeholder={`${t.example}: 10`} />
                    <div className="flex space-x-2 mt-2">
                      <Button variant="outline" onClick={() => setCalcDistance('42.195')}>{t.fullCourse}</Button>
                      <Button variant="outline" onClick={() => setCalcDistance('21.1')}>{t.half}</Button>
                      <Button variant="outline" onClick={() => setCalcDistance('10')}>{t.km10}</Button>
                      <Button variant="outline" onClick={() => setCalcDistance('5')}>{t.km5}</Button>
                    </div>
                  </div>
                )}

                {(calcDistance === 'pace' || calcDistance === 'distance') && (
                  <div className="space-y-2">
                    <Label>{t.time}</Label>
                    <div className="flex space-x-2">
                      <Input type="number" value={calcHours} onChange={(e) => setCalcHours(e.target.value)} placeholder={t.hoursShort} className="w-1/3" />
                      <Input type="number" value={calcMinutes} onChange={(e) => setCalcMinutes(e.target.value)} placeholder={t.minutesShort} className="w-1/3" />
                      <Input type="number" value={calcSeconds} onChange={(e) => setCalcSeconds(e.target.value)} placeholder={t.secondsShort} className="w-1/3" />
                    </div>
                  </div>
                )}

                {(calcDistance === 'time' || calcDistance === 'distance') && (
                  <div className="space-y-2">
                    <Label>{t.paceMinSecPerKm}</Label>
                    <div className="flex space-x-2">
                      <Input type="number" value={calcPaceMinutes} onChange={(e) => setCalcPaceMinutes(e.target.value)} placeholder={t.minutesShort} className="w-1/2" />
                      <Input type="number" value={calcPaceSeconds} onChange={(e) => setCalcPaceSeconds(e.target.value)} placeholder={t.secondsShort} className="w-1/2" />
                    </div>
                  </div>
                )}

                <div className="flex justify-center space-x-4">
                  {calcDistance === 'pace' && <Button onClick={calculatePace}>{t.calculatePace}</Button>}
                  {calcDistance === 'time' && <Button onClick={calculateTime}>{t.calculateTime}</Button>}
                  {calcDistance === 'distance' && <Button onClick={calculateDistance}>{t.calculateDistance}</Button>}
                  <Button variant="outline" onClick={resetCalcFields}>{t.reset}</Button>
                </div>

                {calcResult && (
                  <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-md text-center text-lg font-semibold flex items-center justify-center">
                    {calcResult}
                    <span style={{ marginRight: '8px' }}></span>
                    {renderBadges()}
                  </div>
                )}
              </CardContent>
            </Card>
          </>
        ) : (
          <div id="results-section" className="space-y-4 sm:space-y-6">
            <Card className="rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 text-center bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-0">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
                  {results.gender === 'male' ? t.male : t.female} · {results.distanceName} {language === 'ko' ? '완주 시간' : 'Completion Time'}
                </h3>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">{results.formattedTime}</div>
                <p className="text-gray-600 dark:text-gray-400">{language === 'ko' ? '시:분:초' : 'H:M:S'}</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-0">
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4 sm:mb-6">{t.yourGrade}</h3>
                  <div className={`inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-4xl sm:text-5xl md:text-6xl font-bold shadow-xl animate-grade-reveal mb-3 sm:mb-4 ${gradeDefinitions[results.grade as Grade].color} text-white ${['SS', 'S', 'A+', 'A'].includes(results.grade) ? 'animate-aurora' : ''}`}>
                    {results.grade}
                  </div>
                  <div className="text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300 mb-4 animate-bounce-gentle px-2">
                    {runnerProfiles[language][results.gender as Gender][results.selectedDistance as Distance][results.grade as Grade] || t.gradeDescriptionNotAvailable}
                  </div>
                </div>
              </CardContent>
            </Card>

             <Card className="rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 animate-grade-reveal">
            <CardContent className="p-0">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4 flex items-center">
                <BarChart3 className="text-blue-500 dark:text-blue-400 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                {t.normalDist}
              </h3>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-3 sm:p-4 md:p-6 rounded-xl">
                {/* 👇 기존 NormalDistributionChart를 아래 코드로 교체 */}
                <GradeDistributionBarChart userGrade={results.grade} />
              </div>
            </CardContent>
          </Card>


<Card className="rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 animate-grade-reveal">
              <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
                      <Trophy className="mr-3 h-6 w-6 text-yellow-500" />
                      {t.gradeTable}
                  </CardTitle>
              </CardHeader>
              <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 text-white">
                      {RUNNING_GRADES
                        .filter(
                          (grade) =>
                            grade.distance ===
                            (results.selectedDistance === '10km'
                              ? '10km'
                              : results.selectedDistance === 'Half Marathon'
                              ? '하프 마라톤'
                              : '풀 마라톤') && grade.gender === results.gender
                        )
                        .sort((a, b) => gradeOrder.indexOf(b.grade) - gradeOrder.indexOf(a.grade))
                        .map((gradeItem) => (
                          <div
                            key={gradeItem.grade}
                            className={`rounded-xl shadow-lg p-3 flex flex-col items-center justify-center text-center min-h-[110px] transition-transform hover:scale-105 relative ${gradeDefinitions[gradeItem.grade]?.color || 'bg-gray-500'}`}
                          >
                            <div className="font-bold text-3xl">{gradeItem.grade}</div>
                            <div className="text-xs font-semibold mt-1">
                              {gradeItem.minTime && gradeItem.maxTime ? `${gradeItem.minTime} ~ ${gradeItem.maxTime}` : gradeItem.minTime ? `${gradeItem.minTime} ~` : `~ ${gradeItem.maxTime}`}
                            </div>
                          </div>
                        ))}
                    </div>
              </CardContent>
          </Card>
        

              <div className="text-center">
            <Button 
                onClick={() => navigate(`/training-program/${encodeURIComponent(selectedDistance)}/${encodeURIComponent(results.gender)}/${getGradeLevel(results.grade)}?totalSeconds=${results.totalSeconds}&grade=${results.grade}&formattedTime=${encodeURIComponent(results.formattedTime)}&distanceName=${encodeURIComponent(results.distanceName)}&gender=${results.gender}&selectedDistance=${encodeURIComponent(selectedDistance)}&lang=${language}`)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105"
            >
                {t.trainingTitle}
            </Button>
          </div>


          
            <div className="text-center">
              <Button onClick={resetForm} className="bg-gray-600 dark:bg-gray-700 text-white font-semibold py-3 px-8 rounded-xl hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-200">
                <RotateCcw className="mr-2 h-4 w-4" />
                {t.retryButton}
              </Button>
            </div>
          </div>

          
        )}
      </main>

      

      <div className="max-w-4xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
        <Card className="rounded-2xl shadow-lg p-4 sm:p-6 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-0">
            <div className="text-center">
              <h4 className="text-base sm:text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2 sm:mb-3">{t.disclaimer}</h4>
              <p className="text-sm sm:text-base text-blue-700 dark:text-blue-200 leading-relaxed">
                {t.disclaimerText}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-6 sm:mt-8">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
          <div className="text-center mb-4">
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{t.footer}</p>
            <div className="mt-2">
              <p className="text-xs text-gray-500 dark:text-gray-500">
                © 2025 RunLevel.데이터 기반 러닝 퍼포먼스 분석 서비스
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}