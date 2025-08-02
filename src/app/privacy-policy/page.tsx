
import React from 'react';
import Link from 'next/link';
import { Home } from 'lucide-react';

export const metadata = {
  title: '개인정보처리방침 | RunLevel',
  description: 'RunLevel 개인정보처리방침',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">개인정보처리방침</h1>
          <Link href="/" className="p-2 rounded-md hover:bg-gray-100">
            <Home className="h-6 w-6 text-gray-600" />
            <span className="sr-only">홈으로</span>
          </Link>
        </div>
      </header>
      
      <main className="container mx-auto p-4 md:p-8 bg-white rounded-lg shadow-md mt-6">
        <div className="prose max-w-none">
          <h2>1. 총칙</h2>
          <p>RunLevel은(는) 귀하의 개인정보를 매우 중요시하며, 「개인정보 보호법」을 준수하고 있습니다. 본 개인정보처리방침을 통해 귀하께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.</p>

          <h2>2. 개인정보의 수집 및 이용 목적</h2>
          <p>RunLevel은(는) 다음의 목적을 위하여 개인정보를 수집하고 있습니다.</p>
          <ul>
            <li>서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금 정산</li>
            <li>회원 관리: 회원제 서비스 이용에 따른 본인확인, 개인 식별, 불량회원의 부정 이용 방지와 비인가 사용 방지, 가입 의사 확인</li>
            <li>마케팅 및 광고에 활용: 신규 서비스(제품) 개발 및 특화, 인구통계학적 특성에 따른 서비스 제공 및 광고 게재, 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계</li>
          </ul>
          <p><strong>Google AdSense 관련 안내:</strong> 본 웹사이트는 Google AdSense를 통해 광고를 제공하고 있습니다. Google 및 기타 광고 파트너는 사용자의 관심사에 기반한 광고를 제공하기 위해 쿠키(Cookie)를 사용할 수 있습니다. 사용자는 Google의 광고 및 콘텐츠 네트워크 개인정보처리방침을 방문하여 쿠키 사용을 거부할 수 있습니다.</p>

          <h2>3. 수집하는 개인정보의 항목</h2>
          <p>RunLevel은(는) 회원가입, 상담, 서비스 신청 등등을 위해 아래와 같은 개인정보를 수집하고 있습니다.</p>
          <ul>
            <li>수집항목: 본 서비스는 별도의 회원가입 절차 없이 모든 콘텐츠에 접근할 수 있으며, 개인정보를 수집하지 않습니다.</li>
            <li>다만, 서비스 이용과정에서 아래와 같은 정보들이 자동으로 생성되어 수집될 수 있습니다: IP Address, 쿠키, 방문 일시, 서비스 이용 기록, 불량 이용 기록</li>
          </ul>

          <h2>4. 개인정보의 보유 및 이용기간</h2>
          <p>원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.</p>

          <h2>5. 개인정보의 파기절차 및 방법</h2>
          <p>RunLevel은(는) 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.</p>
          <ul>
            <li>파기절차: 회원님이 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기되어집니다.</li>
            <li>파기방법: 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.</li>
          </ul>

          <h2>6. 개인정보 제공</h2>
          <p>RunLevel은(는) 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.</p>
          <ul>
            <li>이용자들이 사전에 동의한 경우</li>
            <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
          </ul>

          <h2>7. 개인정보처리방침의 변경</h2>
          <p>현 개인정보처리방침 내용 추가, 삭제 및 수정이 있을 시에는 개정 최소 7일전부터 홈페이지의 '공지사항'을 통해 고지할 것입니다.</p>

          <h2>8. 문의</h2>
          <p>개인정보 관련 문의사항은 아래의 이메일로 연락주시기 바랍니다.</p>
          <p>이메일: dbfh1498@gmail.com</p>
        </div>
      </main>
    </div>
  );
}
