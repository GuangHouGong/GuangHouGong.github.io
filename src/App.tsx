import { useEffect, useRef, useState } from 'react';

const facebookUrl =
  'https://www.facebook.com/p/%E5%9C%9F%E5%9F%8E%E5%BB%A3%E5%8E%9A%E5%AE%AE%E7%A6%8F%E5%BE%B7%E6%AD%A3%E7%A5%9E%E7%8E%84%E5%A3%87%E8%B2%A1%E7%A5%9E-100080180056129/';

const preferenceKey = 'guanghougong.site.preferences.v1';
const drawUrl = 'https://guanghougong.github.io/fortune-draw-wheel/';

const navItems = [
  { label: '廟宇故事', href: '#story' },
  { label: '主祀信仰', href: '#deities' },
  { label: '參拜資訊', href: '#visit' },
  { label: '常見問題', href: '#faq' },
  { label: '公告與聯絡', href: '#announcements' },
  { label: '活動工具', href: '#tools' },
  { label: '資料來源', href: '#sources' },
];

const verifiedFacts = [
  {
    value: '1048',
    label: '珍貴樹木列管編號',
    detail: '土城廣厚宮旁大樟樹於 2018 年經報導列管。',
  },
  {
    value: '105 cm',
    label: '大樟樹胸徑記載',
    detail: '公開報導記載掛牌時胸徑達 105 公分。',
  },
  {
    value: '約 170 年',
    label: '石刻土地公記憶',
    detail: '2018 年報導引述地方提報，石刻土地公當時已有約 170 年歷史。',
  },
  {
    value: '1550',
    label: '功德會登記號數',
    detail: '司法院法人登記公告列載社團法人新北市土城廣厚福德正神功德會。',
  },
];

const storyItems = [
  {
    year: '開墾記憶',
    title: '樟樹、田中央與土地公',
    description:
      '公開報導提到，廣厚宮旁大樟樹早年位於田中央，提供先民耕作時乘涼與休憩，也與樹下石刻土地公信仰相連。',
  },
  {
    year: '信眾協力',
    title: '由土地公廟改建為廣厚宮',
    description:
      '報導記載，在社區信徒與熱心人士協力下，土地公廟逐步改建成今日廣厚宮，延續地方守護與祈福信仰。',
  },
  {
    year: '2018',
    title: '大樟樹列管珍貴樹木',
    description:
      '新北市政府樹木保護委員會通過列管，土城區廣厚宮大樟樹成為編號 1,048 的珍貴樹木。',
  },
  {
    year: '2021',
    title: '功德會法人登記公告',
    description:
      '司法院法人登記公告列有「社團法人新北市土城廣厚福德正神功德會」變更登記紀錄，公告日期為 2021 年 1 月 20 日。',
  },
];

const deityItems = [
  {
    seal: '福',
    title: '福德正神',
    subtitle: '土地守護・鄰里安定',
    description:
      '福德正神俗稱土地公，民間信仰中常被視為守護地方、庇佑家宅平安、農事順遂與鄰里安定的神明。廣厚宮在地故事也以土地公信仰與老樟樹記憶為核心。',
    points: ['地方守護', '家宅平安', '福德庇佑'],
  },
  {
    seal: '財',
    title: '玄壇財神',
    subtitle: '迎祥納福・求財順遂',
    description:
      '玄壇財神亦稱玄壇真君、趙公明，民間多奉為財神信仰之一，象徵招財進寶、事業順利與迎祥納福。廣厚宮以福德與財神信仰並重，承接地方祈願。',
    points: ['招財納福', '事業順遂', '迎祥進寶'],
  },
];

const visitItems = [
  {
    title: '平安祈福',
    description: '向福德正神祈求地方平安、家宅順遂與福德庇佑。',
  },
  {
    title: '求財納福',
    description: '向玄壇財神祈求事業、財運與生活順遂。',
  },
  {
    title: '節慶活動',
    description: '宮廟活動、祭典與臨時公告，請以官方 Facebook 最新發布內容為準。',
  },
  {
    title: '聯絡詢問',
    description: '想了解參拜、祈福服務或活動安排，可透過官方 Facebook 聯絡廟方。',
  },
];

const noticeItems = [
  {
    label: '最新公告',
    title: '以官方 Facebook 發布為準',
    description: '最新活動、祭典及服務調整，請查看官方 Facebook 公告。',
  },
  {
    label: '前往參拜',
    title: '出發前，先確認參拜安排',
    description: '地址、開放時間與服務細節，請透過官方 Facebook 向廟方確認。',
  },
  {
    label: '聯絡廟方',
    title: '參拜與活動問題，直接詢問',
    description: '需要了解祈福服務或活動安排，可由官方 Facebook 聯絡廟方。',
  },
];

const faqItems = [
  {
    question: '最新活動與公告要去哪裡看？',
    answer: '請到土城廣厚宮官方 Facebook 查看最新消息。活動時間與服務安排，請以廟方公告為準。',
  },
  {
    question: '出發參拜前，需要確認哪些資訊？',
    answer:
      '請先向廟方確認地址、開放時間與參拜安排。您可以透過本頁的官方 Facebook 連結查看公告，或直接聯絡詢問。',
  },
  {
    question: '神明介紹和廣厚宮的故事有什麼不同？',
    answer:
      '神明介紹說明福德正神與玄壇財神的民間信仰背景；廣厚宮的故事則依地方報導與公開紀錄整理，可在「廟宇故事」與「資料來源」查看。',
  },
  {
    question: '活動抽獎工具怎麼使用？',
    answer:
      '從「活動工具」開啟功德會抽獎，建立活動、輸入名單與獎項，先試抽再正式開始。結束後請下載中獎名單與活動備份；換裝置時再匯入備份。',
  },
];

const sourceLinks = [
  {
    label: '官方 Facebook：土城廣厚宮福德正神玄壇財神',
    href: facebookUrl,
    note: '公告與聯絡',
  },
  {
    label: '中時新聞網：伴隨土地公廟！這棵大樟樹是土城人美好記憶',
    href: 'https://www.chinatimes.com/realtimenews/20180302001368-260405',
    note: '大樟樹與在地故事',
  },
  {
    label: '新北市政府綠美化環境景觀處：珍貴樹木查詢',
    href: 'https://www.landscaping.ntpc.gov.tw/cht/index.php?act=precious_trees&code=search',
    note: '樹木列管查詢（1048）',
  },
  {
    label: '司法院法人登記公告',
    href: 'https://www.judicial.gov.tw/tw/cp-144-361173-a21a8-1.html',
    note: '功德會登記紀錄',
  },
  {
    label: '土地公／福德正神信仰背景',
    href: 'https://zh.wikipedia.org/wiki/%E5%9C%9F%E5%9C%B0%E5%85%AC',
    note: '信仰背景參考',
  },
  {
    label: '玄壇真君／趙公明信仰背景',
    href: 'https://zh.wikipedia.org/wiki/%E7%8E%84%E5%A3%87%E7%9C%9F%E5%90%9B',
    note: '信仰背景參考',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroImageFailed, setHeroImageFailed] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const [largeText, setLargeText] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(preferenceKey) ?? '{}').largeText === true;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    document.documentElement.dataset.largeText = String(largeText);
    try {
      localStorage.setItem(preferenceKey, JSON.stringify({ largeText }));
    } catch {
      // Reading remains available when saving a display preference is blocked.
    }
  }, [largeText]);

  useEffect(() => {
    if (!menuOpen) return;
    const closeMenu = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener('keydown', closeMenu);
    return () => document.removeEventListener('keydown', closeMenu);
  }, [menuOpen]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">跳到主要內容</a>
      <span className="sr-only" id="external-link-note">此連結會另開視窗。</span>
      <header className="site-header" aria-label="主要導覽" onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setMenuOpen(false);
      }}>
        <a className="brand" href="/" aria-label="土城廣厚宮首頁">
          <img src="/assets/logo.svg" alt="" className="brand-mark" />
          <span>
            <strong>土城廣厚宮</strong>
            <small>福德正神・玄壇財神</small>
          </span>
        </a>
        <div className="header-controls">
          <button className="text-toggle" type="button" aria-pressed={largeText} onClick={() => setLargeText(!largeText)}>
            {largeText ? '一般字體' : '大字模式'}
          </button>
          <button className="menu-toggle" type="button" ref={menuButton} aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '關閉選單' : '選單'}
          </button>
        </div>
        <nav id="site-navigation" aria-label="網站導覽" className={`nav-links${menuOpen ? ' is-open' : ''}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-content">
            <p className="eyebrow">土城在地信仰・福德庇佑・財神護持</p>
            <h1 id="hero-title">土城廣厚宮</h1>
            <p className="hero-subtitle">福德正神・玄壇財神官方網站</p>
            <p className="hero-copy">
              認識廣厚宮的在地故事與福德、財神信仰，查詢參拜安排、活動公告及官方聯絡方式。
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#story">
                認識廣厚宮
              </a>
              <a className="button secondary" href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-describedby="external-link-note">
                聯絡廟方
              </a>
            </div>
          </div>

          <aside className="hero-summary" aria-label="廣厚宮信仰意象">
            {heroImageFailed ? (
              <div className="temple-visual" aria-hidden="true">
                <div className="tree-canopy" />
                <div className="temple-roof" />
                <div className="temple-hall">
                  <span className="temple-plaque">土城廣厚宮</span>
                  <div className="deity-seals">
                    <span>福</span>
                    <span>財</span>
                  </div>
                </div>
                <div className="temple-base">平安・福德・納財</div>
              </div>
            ) : (
              <img
                className="temple-hero-image"
                src="/assets/temple-faith-hero.webp"
                alt=""
                width={1024}
                height={1024}
                fetchPriority="high"
                onError={() => setHeroImageFailed(true)}
              />
            )}
            <p className="visual-caption">老樟樹與福德信仰意象插畫</p>
          </aside>
        </section>

        <section className="section notice-section" id="announcements" tabIndex={-1} aria-labelledby="notice-title">
          <div className="section-heading">
            <p className="section-kicker">公告與參拜</p>
            <h2 id="notice-title">最新公告與參拜安排</h2>
            <p>祭典、活動與服務安排，以廟方最新公告為準。出發前可先查看消息，或向廟方詢問。</p>
          </div>
          <div className="notice-grid">
            {noticeItems.map((item) => (
              <article key={item.label}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a className="notice-link" href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-describedby="external-link-note">{item.label === '最新公告' ? '查看官方公告' : '前往官方 Facebook'}</a>
              </article>
            ))}
          </div>
        </section>

        <section className="fact-band" aria-label="土城廣厚宮公開資料摘要">
          {verifiedFacts.map((fact) => (
            <article key={fact.label}>
              <strong>{fact.value}</strong>
              <span>{fact.label}</span>
              <p>{fact.detail}</p>
            </article>
          ))}
        </section>

        <section className="section story-section" id="story" tabIndex={-1} aria-labelledby="story-title">
          <div className="section-heading">
            <p className="section-kicker">廟宇故事</p>
            <h2 id="story-title">老樟樹、土地公與廣厚宮的地方記憶</h2>
            <p>
              從老樟樹與土地公的故事，認識廣厚宮與地方居民的連結。以下內容依 2018 年地方報導與司法院法人登記公告整理。
            </p>
          </div>
          <div className="story-layout">
            <div className="story-timeline">
              {storyItems.map((item) => (
                <article key={`${item.year}-${item.title}`} className="timeline-item">
                  <span>{item.year}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
            <aside className="story-note">
              <p className="section-kicker">故事來源</p>
              <h3>從公開記載，認識地方記憶</h3>
              <p>
                本頁在地故事依 2018 年報導與法人登記公告整理，年份與數字保留原記載。您可在資料來源區閱讀全文；近期活動請查看官方公告。
              </p>
            </aside>
          </div>
        </section>

        <section className="section deity-section" id="deities" tabIndex={-1} aria-labelledby="deities-title">
          <div className="section-heading centered">
            <p className="section-kicker">主祀信仰</p>
            <h2 id="deities-title">福德守土，玄壇納財</h2>
            <p>認識福德正神與玄壇財神，了解守護地方、祈求平安與招財納福的民間信仰。以下為信仰背景介紹，廣厚宮的在地故事請見「廟宇故事」。</p>
          </div>
          <div className="deity-grid">
            {deityItems.map((deity) => (
              <article className="deity-card" key={deity.title}>
                <div className="deity-card-header">
                  <div className="seal">{deity.seal}</div>
                  <div>
                    <h3>{deity.title}</h3>
                    <p>{deity.subtitle}</p>
                  </div>
                </div>
                <p>{deity.description}</p>
                <ul>
                  {deity.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section visit-section" id="visit" tabIndex={-1} aria-labelledby="visit-title">
          <div className="section-heading">
            <p className="section-kicker">參拜資訊</p>
            <h2 id="visit-title">參拜與祈福</h2>
            <p>想了解參拜、祈福或節慶活動，可先查看以下說明。實際時間與服務安排，請查看官方 Facebook 公告，或向廟方詢問。</p>
          </div>
          <div className="visit-grid">
            {visitItems.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section faq-section" id="faq" tabIndex={-1} aria-labelledby="faq-title">
          <div className="section-heading">
            <p className="section-kicker">常見問題</p>
            <h2 id="faq-title">參拜與活動常見問題</h2>
            <p>點選問題查看說明，也可透過官方 Facebook 聯絡廟方。</p>
          </div>
          <div className="faq-list">
            {faqItems.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact" tabIndex={-1} aria-labelledby="contact-title">
          <div>
            <p className="section-kicker">公告與聯絡</p>
            <h2 id="contact-title">最新消息以官方 Facebook 為準</h2>
            <p>
              宮廟活動、祈福服務、臨時公告與聯絡詢問，請前往官方 Facebook 查看最新資訊，或向廟方詢問參拜安排。
            </p>
          </div>
          <a className="button primary" href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-describedby="external-link-note">
            前往 Facebook
          </a>
        </section>

        <section className="section project-section" id="tools" tabIndex={-1} aria-labelledby="project-title">
          <div className="section-heading">
            <p className="section-kicker">數位活動工具</p>
            <h2 id="project-title">土城廣厚宮功德會抽獎</h2>
            <p>免費的活動抽獎工具，手機、平板與電腦都能使用。名單與紀錄儲存在目前使用的瀏覽器。</p>
          </div>
          <div className="project-panel">
            <img className="draw-mascot" src="/assets/draw-mascot.webp" alt="功德會抽獎吉祥物迎賓公仔" width="400" height="400" loading="lazy" />
            <div className="project-content">
              <h3>從準備到開獎，一步一步完成</h3>
              <ol className="draw-steps">
                <li><strong>準備活動</strong><span>貼上姓名、產生連號，或匯入 Excel 名單；設定獎項與組別後先試抽。</span></li>
                <li><strong>現場開獎</strong><span>選擇轉盤、跳號或快速開獎；按開始、停止，再抽下一位。缺席可保留紀錄並補抽。</span></li>
                <li><strong>帶走紀錄</strong><span>下載中獎名單與活動備份。換裝置時匯入備份，繼續管理活動。</span></li>
              </ol>
              <div className="project-links" aria-label="功德會抽獎相關連結">
                <a className="button primary" href={drawUrl}>開啟功德會抽獎</a>
                <a href={`${drawUrl}#/help`}>查看抽獎使用說明</a>
                <a href="https://github.com/GuangHouGong/fortune-draw-wheel" target="_blank" rel="noopener noreferrer" aria-describedby="external-link-note">查看開源程式</a>
              </div>
              <p className="data-note">不需帳號。活動資料不會自動同步；清除瀏覽器資料或換裝置前，請先下載備份。抽獎工具顯示「已準備離線使用」後，才能在斷網時重開。</p>
            </div>
          </div>
        </section>

        <section className="section source-section" id="sources" tabIndex={-1} aria-labelledby="source-title">
          <div className="section-heading">
            <p className="section-kicker">資料來源</p>
            <h2 id="source-title">公開資料與信仰背景參考</h2>
            <p>歷史年份與數字依原始報導記載；神明介紹提供民間信仰背景參考。網站內容整理日期：2026 年 10 月 5 日。</p>
          </div>
          <ul className="source-list">
            {sourceLinks.map((source) => (
              <li key={source.href}>
                <span>{source.note}</span>
                <a href={source.href} target="_blank" rel="noopener noreferrer" aria-describedby="external-link-note">
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

      </main>

      <footer className="site-footer">
        <span>© 土城廣厚宮福德正神・玄壇財神</span>
        <div className="footer-links"><a href="#main-content">回到頁首</a><a href={drawUrl}>功德會抽獎</a></div>
      </footer>
    </div>
  );
}

export default App;
