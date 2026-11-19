import type { Metadata } from 'next';
import Link from 'next/link';
import { codes } from '@/lib/codes';
import CopyCodeButton from './CopyCodeButton';

export const metadata: Metadata = {
  title: { absolute: '아카유키 코드 (2026년 11월) - 최신 코드와 보상 | Akayuki Codes' },
  description: 'AKAYUKI: Steel Blossoms Red의 최신 코드와 보상, 제보된 사용 상태, 입력 방법을 한국어로 확인하세요. 출처 확인일과 미확인 코드를 구분해 안내합니다.',
  alternates: {
    canonical: '/ko/akayuki-codes/',
    languages: {
      en: '/codes/',
      ko: '/ko/akayuki-codes/',
      'x-default': '/codes/',
    },
  },
  openGraph: {
    type: 'article',
    locale: 'ko_KR',
    title: '아카유키 코드 - 최신 코드와 보상',
    description: 'AKAYUKI: Steel Blossoms Red 코드와 보상, 상태, 입력 방법을 확인하세요.',
    url: '/ko/akayuki-codes/',
  },
};

const rewardKo: Record<string, string> = {
  'R0NIN!TIDE_5K': '게임 내 재화 5,000 + 이름 변경 스핀 5,000개 (출처별 상태가 다름)',
  'BLOSSOMVEIL_4K': '게임 내 재화 4,000 + 이름 변경 스핀 4,000개 (출처별 상태가 다름)',
  '!2k2k2k!': '게임 내 재화 2,000 + 이름 변경 스핀 2,000개',
  'Jolly3k___': '게임 내 재화 3,000 + 이름 변경 스핀 3,000개 (출처별 상태가 다름)',
  'CT4WK2KDNT': '게임 내 재화 500 + 이름 변경 스핀 500개',
  'DISCOMEMBA': 'Discombobulate 무기 스킨',
  'AKAYUKI': '게임 내 재화 5,000 + 이름 변경 스핀 10개',
  'AKAYUKITHANKYOU': '게임 내 재화 1,000 + 이름 변경 스핀 100개 + XP 1,000',
  'SHOGUNATE': 'Communiblade 무기 스킨',
  'THANKYOU1K': '게임 내 재화 5,000 + 이름 변경 스핀 1,000개',
  'TRIPLESPIN': '현재 확인 가능한 출처에서 보상을 확인하지 못했습니다.',
  'HALLOWEEN': '현재 확인 가능한 출처에서 보상을 확인하지 못했습니다.',
  'FIRST500': '현재 확인 가능한 출처에서 보상을 확인하지 못했습니다.',
  'HAPPYWEEKEND2': '과거 보상 제보: 게임 내 재화 2,000 + 이름 변경 스핀 200개 + XP 2,000 + 2일간 XP 2배',
};

const sourceNoteKo: Record<string, string> = {\n  'R0NIN!TIDE_5K': '2026년 11월 19일 출처 확인: Destructoid와 GachaPocket은 사용 가능으로 표시하지만 Roblox Den은 확인 필요로 표시합니다. 출처 간 상태가 달라 확인 필요로 분류했습니다.',\n  'BLOSSOMVEIL_4K': '2026년 11월 19일 출처 확인: Destructoid와 GachaPocket은 사용 가능으로 표시하지만 Roblox Den은 확인 필요로 표시합니다. 출처 간 상태가 달라 확인 필요로 분류했습니다.',\n  'Jolly3k___': '2026년 11월 19일 출처 확인: Destructoid와 GachaPocket은 사용 가능으로 표시하지만 Roblox Den은 확인 필요로 표시합니다. 출처 간 상태가 달라 확인 필요로 분류했습니다.',\n  'THANKYOU1K': '2026년 11월 19일 출처 확인: Roblox Den과 GachaPocket은 사용 가능으로 표시하지만 Destructoid 목록에는 없습니다. 보상과 상태를 게임에서 직접 테스트하지 않았습니다.',\n  'AKAYUKITHANKYOU': '2026년 11월 19일 출처 확인: Roblox Den과 Destructoid는 사용 가능으로 표시합니다. XP 보상은 출처별 설명이 다르므로 게임 내 결과를 확인하세요.',\n};\n\nconst statusKo = {
  'reported-active': { label: '제보상 사용 가능', className: 'ko-status-active' },
  unverified: { label: '확인 필요', className: 'ko-status-review' },
  'reported-expired': { label: '제보상 만료', className: 'ko-status-expired' },
} as const;

const faqs = [
  {
    q: '아카유키 코드는 어디에 입력하나요?',
    a: 'AKAYUKI: Steel Blossoms Red를 실행하고 메인 메뉴에서 Codes 옵션을 찾아보세요. 일부 외부 가이드는 데스크톱에서 M 키를 눌러 Codes가 포함된 메뉴를 열 수 있다고 설명합니다. 현재 게임 버전에 표시되는 안내와 메뉴 이름을 기준으로 코드를 입력하고 Redeem 또는 이에 해당하는 버튼을 선택하세요.',
  },
  {
    q: '코드가 작동하지 않는 이유는 무엇인가요?',
    a: '대소문자와 기호를 포함해 정확히 입력했는지 확인하고, 이미 사용한 코드인지 또는 만료된 코드인지 살펴보세요. 제3자 사이트의 사용 가능 표시는 게임에서 실제로 보상이 지급된다는 보장이 아닙니다.',
  },
  {
    q: '이 페이지의 코드는 게임에서 직접 테스트했나요?',
    a: '아닙니다. 각 상태는 연결된 제3자 코드 사이트의 게시 내용을 비교한 결과입니다. 저희가 게임 계정에서 직접 입력해 성공 여부를 확인한 것은 아닙니다. 최종 확인은 게임 내 REDEEM 결과를 기준으로 해주세요.',
  },
  {
    q: '“확인 필요”는 무슨 뜻인가요?',
    a: '확인한 사이트 사이에 상태 표시가 다르거나, 현재 자료만으로 사용 가능 여부를 판단하기 어려운 코드입니다. 확정된 사용 가능 코드로 간주하지 말고 게임에서 직접 시도한 뒤 결과를 확인해 주세요.',
  },
  {
    q: '코드 목록은 얼마나 자주 업데이트되나요?',
    a: '코드 출처를 다시 확인할 때 목록과 출처 확인일을 업데이트합니다. 출처 확인일은 해당 코드가 게임에서 성공적으로 사용되었다는 뜻은 아닙니다.',
  },
];

export default function KoreanAkayukiCodesPage() {
  const orderedCodes = [...codes].sort((a, b) => {
    const rank = { 'reported-active': 0, unverified: 1, 'reported-expired': 2 };
    return rank[a.status] - rank[b.status];
  });
  const active = codes.filter((item) => item.status === 'reported-active').length;
  const review = codes.filter((item) => item.status === 'unverified').length;
  const expired = codes.filter((item) => item.status === 'reported-expired').length;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: '아카유키 코드 - 최신 코드와 보상',
    inLanguage: 'ko-KR',
    description: 'AKAYUKI: Steel Blossoms Red 코드와 보상, 제보된 상태 및 입력 방법을 안내합니다.',
    url: 'https://akayuki.codes/ko/akayuki-codes/',
    isPartOf: { '@type': 'WebSite', name: 'Akayuki Codes', url: 'https://akayuki.codes/' },
  };

  return (
    <main className="container page-wrap ko-page" lang="ko">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav className="ko-breadcrumb" aria-label="breadcrumb">
        <Link href="/">홈</Link><span aria-hidden="true">/</span><span>아카유키 코드</span>
      </nav>
      <div className="eyebrow">AKAYUKI 보상 데이터베이스 · 한국어</div>
      <h1 className="page-title">아카유키 코드 – <span>최신 코드와 무료 보상</span></h1>
      <p className="page-intro">
        <em>AKAYUKI: Steel Blossoms Red</em>에서 사용할 수 있다고 보고된 코드를 모았습니다.
        코드별 보상과 출처 상태를 확인하고, 정확한 코드를 복사해 게임에서 입력해 보세요.
        제3자 사이트의 목록은 서로 다를 수 있으므로 게임 내 사용 결과가 최종 확인 기준입니다.
      </p>
      <p className="ko-updated">출처 확인일: <strong>2026년 11월 19일</strong> · 게임 내 직접 테스트 여부와는 별개입니다.</p>

      <div className="codes-summary ko-summary" aria-label="코드 상태 요약">
        <div><strong>{codes.length}</strong><span>목록에 있는 코드</span></div>
        <div><strong>{active}</strong><span>사용 가능 제보</span></div>
        <div><strong>{review}</strong><span>확인 필요</span></div>
        <div><strong>{expired}</strong><span>만료 제보</span></div>
      </div>

      <aside className="notice ko-notice">
        <strong>중요: 상태 표시는 실시간 게임 테스트가 아닙니다</strong>
        <p>“제보상 사용 가능”과 “제보상 만료”는 연결된 외부 사이트의 게시 내용을 요약한 것입니다. 개발자의 공식 확인이나 저희의 게임 내 테스트를 의미하지 않습니다. 특히 “확인 필요” 코드는 출처 간 정보가 일치하지 않습니다.</p>
      </aside>

      <section className="ko-section" aria-labelledby="ko-codes-heading">
        <div className="codes-section-heading">
          <div><div className="eyebrow">코드 목록</div><h2 id="ko-codes-heading">아카유키 코드 및 보상</h2></div>
          <p>코드를 복사한 뒤 게임의 CODES 메뉴에서 입력하세요.</p>
        </div>
        <div className="ko-code-list">
          {orderedCodes.map((item) => {
            const status = statusKo[item.status];
            return (
              <article className="ko-code-card" key={item.code}>
                <div className="ko-code-top">
                  <code>{item.code}</code>
                  <span className={`ko-status ${status.className}`}>{status.label}</span>
                </div>
                <p className="ko-reward"><strong>보상:</strong> {rewardKo[item.code] ?? '보상 정보 확인 중'}</p>
                <p className="ko-source-note">{sourceNoteKo[item.code] ?? (item.status === 'reported-active' ? '2026년 11월 19일 확인한 외부 출처에서 사용 가능으로 표시했습니다. 이 사이트는 게임 내 입력을 테스트하지 않았습니다.' : item.status === 'reported-expired' ? '2026년 11월 19일 확인한 외부 출처에서 만료로 표시했습니다. 이 사이트는 게임 내 입력 실패를 직접 확인하지 않았습니다.' : '외부 출처의 상태 정보가 충분하지 않거나 서로 일치하지 않아 추가 확인이 필요합니다.')}</p>
                <div className="ko-code-footer">
                  <span>출처 확인일: {item.lastChecked.replaceAll('-', '.')}</span>
                  <CopyCodeButton code={item.code} />
                </div>
                <details className="ko-source-details">
                  <summary>참고한 출처 보기</summary>
                  <ul>{item.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a></li>)}</ul>
                </details>
              </article>
            );
          })}
        </div>
      </section>

      <section className="content-block ko-section">
        <h2>아카유키 코드 입력 방법</h2>
        <ol>
          <li>Roblox에서 <em>AKAYUKI: Steel Blossoms Red</em>를 실행합니다.</li>
          <li>메인 메뉴에서 <strong>CODES</strong> 버튼을 선택합니다.</li>
          <li><strong>ENTER CODE</strong> 입력란에 코드를 정확히 붙여 넣습니다.</li>
          <li><strong>REDEEM</strong> 버튼을 눌러 게임 내 결과를 확인합니다.</li>
        </ol>
        <p>게임 업데이트에 따라 메뉴 배치가 달라질 수 있습니다. 코드가 거부되면 철자, 대소문자, 기호를 다시 확인하고 이미 사용했거나 만료된 코드인지 살펴보세요.</p>
      </section>

      <section className="content-block ko-section">
        <h2>코드 상태는 어떻게 구분하나요?</h2>
        <p><strong>제보상 사용 가능:</strong> 확인한 외부 코드 사이트에서 사용 가능으로 게시한 코드입니다. 게임 내 작동을 보장하지 않습니다.</p>
        <p><strong>확인 필요:</strong> 외부 출처 간 상태가 다르거나 현재 자료가 충분하지 않은 코드입니다.</p>
        <p><strong>제보상 만료:</strong> 확인한 외부 출처에서 만료 또는 비활성으로 게시한 코드입니다. 저희가 직접 실패를 확인했다는 뜻은 아닙니다.</p>
        <p>출처 확인일은 외부 자료를 다시 살펴본 날짜입니다. 코드 출시일이나 성공적인 보상 수령 날짜가 아닙니다.</p>
      </section>

      <section className="content-block ko-faq ko-section" aria-labelledby="ko-faq-heading">
        <h2 id="ko-faq-heading">자주 묻는 질문</h2>
        {faqs.map((faq) => <details className="codes-faq-item" key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}
      </section>

      <section className="ko-related">
        <div><strong>영어 코드 페이지</strong><p>영어로 된 전체 코드 데이터베이스도 확인할 수 있습니다.</p><Link className="text-link" href="/codes/">Akayuki Codes ↗</Link></div>
        <div><strong>아카유키 게임 가이드</strong><p>게임 시스템과 초보자 정보를 확인하세요.</p><Link className="text-link" href="/guides/">게임 가이드 ↗</Link></div>
      </section>
      <p className="ko-editorial-note">이 사이트는 팬이 운영하는 독립 정보 사이트이며 Roblox 또는 게임 개발사와 제휴하거나 공식적으로 운영되지 않습니다.</p>
    </main>
  );
}
