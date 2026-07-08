const facebookUrl =
  'https://www.facebook.com/p/%E5%9C%9F%E5%9F%8E%E5%BB%A3%E5%8E%9A%E5%AE%AE%E7%A6%8F%E5%BE%B7%E6%AD%A3%E7%A5%9E%E7%8E%84%E5%A3%87%E8%B2%A1%E7%A5%9E-100080180056129/';

const navItems = [
  { label: '廟宇故事', href: '#story' },
  { label: '主祀信仰', href: '#deities' },
  { label: '參拜資訊', href: '#visit' },
  { label: '常見問題', href: '#faq' },
  { label: '公告聯絡', href: '#contact' },
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
    detail: '報導引述地方提報，樟樹下石刻土地公已有約 170 年歷史。',
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
    description: '以福德正神信仰為核心，承載信眾祈求地方平安、家宅順遂與福德庇佑。',
  },
  {
    title: '求財納福',
    description: '以玄壇財神信仰回應事業、財運與生活順遂的祈願。',
  },
  {
    title: '節慶活動',
    description: '宮廟活動、祭典與臨時公告，請以官方 Facebook 最新發布內容為準。',
  },
  {
    title: '聯絡詢問',
    description: '若需詢問參拜、祈福服務或活動協助，建議由官方 Facebook 取得最新回覆。',
  },
];

const noticeItems = [
  {
    label: '最新公告',
    title: '以官方 Facebook 發布為準',
    description: '活動、祭典、服務異動與臨時通知，統一導向官方 Facebook 查詢。',
  },
  {
    label: '資料更新',
    title: '本頁資料更新至 2026-07-08',
    description: '目前已整理老樟樹報導、功德會法人公告、主祀信仰背景與官方聯絡入口。',
  },
  {
    label: '待補資訊',
    title: '地址、電話、開放時間待官方確認',
    description: '未有可靠官方文字來源前，不在首頁寫死，避免信眾依錯誤資訊前往或聯絡。',
  },
];

const faqItems = [
  {
    question: '最新活動與公告要去哪裡看？',
    answer: '請以土城廣厚宮官方 Facebook 頁面為準。本網站保留官方連結，避免重複轉載後產生版本落差。',
  },
  {
    question: '為什麼目前沒有列地址、電話或開放時間？',
    answer:
      '目前公開搜尋沒有找到足以確認的官方文字來源；為避免誤導信眾，這些資訊會等廟方提供或正式公告後再補上。',
  },
  {
    question: '福德正神與玄壇財神介紹是廟史嗎？',
    answer:
      '不是。神明介紹屬於民間信仰背景整理；廣厚宮專屬廟史只採可查來源與官方資訊，兩者在頁面上分開呈現。',
  },
  {
    question: '抽獎輪盤 App 是首頁主功能嗎？',
    answer:
      '不是。抽獎輪盤是活動輔助工具，首頁主軸仍是土城廣厚宮介紹、在地故事、主祀信仰與公告聯絡。',
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
    label: '司法院法人登記公告',
    href: 'https://www.judicial.gov.tw/tw/lp-144-1-592-60.html',
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
  return (
    <main className="site-shell">
      <header className="site-header" aria-label="主要導覽">
        <a className="brand" href="/" aria-label="土城廣厚宮首頁">
          <img src="/assets/logo.svg" alt="" className="brand-mark" />
          <span>
            <strong>土城廣厚宮</strong>
            <small>福德正神・玄壇財神</small>
          </span>
        </a>
        <nav className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-content">
          <p className="eyebrow">土城在地信仰・福德庇佑・財神護持</p>
          <h1 id="hero-title">土城廣厚宮</h1>
          <p className="hero-subtitle">福德正神・玄壇財神官方網站</p>
          <p className="hero-copy">
            廣厚宮承載土地公信仰、老樟樹地方記憶與信眾祈願。此處整理可查公開資料、主祀神明背景與官方聯絡管道，協助信眾認識土城廣厚宮。
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#story">
              閱讀廟宇故事
            </a>
            <a className="button secondary" href={facebookUrl} target="_blank" rel="noreferrer">
              聯絡廟方
            </a>
          </div>
        </div>

        <aside className="hero-summary" aria-label="公開資料摘要">
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
          <dl className="hero-facts">
            {verifiedFacts.slice(0, 3).map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
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

      <section className="section notice-section" aria-labelledby="notice-title">
        <div className="section-heading">
          <p className="section-kicker">公告與資料狀態</p>
          <h2 id="notice-title">先確認來源，再補上首頁資訊</h2>
          <p>第二輪整理後，仍未找到可直接確認地址、電話與開放時間的官方公開文字；目前採保守呈現，讓信眾知道下一步該看哪裡。</p>
        </div>
        <div className="notice-grid">
          {noticeItems.map((item) => (
            <article key={item.label}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section story-section" id="story" aria-labelledby="story-title">
        <div className="section-heading">
          <p className="section-kicker">廟宇故事</p>
          <h2 id="story-title">老樟樹、土地公與廣厚宮的地方記憶</h2>
          <p>
            目前可公開查得的廣厚宮在地資料，主要來自 2018 年地方報導與司法院法人登記公告。下列內容採「公開資料整理」方式呈現，正式活動與服務仍以廟方公告為準。
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
            <p className="section-kicker">資料邊界</p>
            <h3>不把未查證傳聞寫成廟史</h3>
            <p>
              已確認內容會標明來源；尚未有官方文字佐證的地址、開放時間、祭典細節或服務項目，保留由官方 Facebook 公告更新。
            </p>
          </aside>
        </div>
      </section>

      <section className="section deity-section" id="deities" aria-labelledby="deities-title">
        <div className="section-heading centered">
          <p className="section-kicker">主祀信仰</p>
          <h2 id="deities-title">福德守土，玄壇納財</h2>
          <p>廣厚宮名稱與公開資訊指向福德正神與玄壇財神信仰。神明背景採民間信仰通說整理，與廣厚宮專屬沿革分開呈現。</p>
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

      <section className="section visit-section" id="visit" aria-labelledby="visit-title">
        <div className="section-heading">
          <p className="section-kicker">參拜資訊</p>
          <h2 id="visit-title">信眾常見需求</h2>
          <p>下列資訊以信仰方向與聯絡方式整理，具體活動、時程與服務細節請以官方 Facebook 最新公告為準。</p>
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

      <section className="section faq-section" id="faq" aria-labelledby="faq-title">
        <div className="section-heading">
          <p className="section-kicker">常見問題</p>
          <h2 id="faq-title">先回答信眾最容易疑惑的事</h2>
          <p>FAQ 用於說明資料邊界、官方公告入口與抽獎輪盤定位，降低首頁資訊不足造成的誤解。</p>
        </div>
        <div className="faq-list">
          {faqItems.map((item) => (
            <article key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact-section" id="contact" aria-labelledby="contact-title">
        <div>
          <p className="section-kicker">公告聯絡</p>
          <h2 id="contact-title">最新消息以官方 Facebook 為準</h2>
          <p>
            宮廟活動、祈福服務、臨時公告與聯絡詢問，請以前往官方 Facebook 頁面取得最新資訊。若後續提供正式地址、電話或祭典日程，可再補入此區。
          </p>
        </div>
        <a className="button primary" href={facebookUrl} target="_blank" rel="noreferrer">
          前往 Facebook
        </a>
      </section>

      <section className="section project-section" aria-labelledby="project-title">
        <div className="section-heading">
          <p className="section-kicker">數位活動工具</p>
          <h2 id="project-title">抽獎輪盤 App</h2>
          <p>抽獎輪盤是宮廟活動輔助工具，首頁主軸仍以廣厚宮介紹、主祀信仰、公告與聯絡資訊為主。</p>
        </div>
        <div className="project-panel">
          <div>
            <h3>活動互動與開源專案</h3>
            <p>輪盤工具保留於相關專案區，方便活動使用者與開源貢獻者查閱。</p>
          </div>
          <div className="project-links" aria-label="抽獎輪盤相關連結">
            <a href="https://github.com/GuangHouGong/fortune-draw-wheel" target="_blank" rel="noreferrer">
              GitHub repo
            </a>
            <a href="https://guanghougong.github.io/fortune-draw-wheel/" target="_blank" rel="noreferrer">
              線上 Demo
            </a>
          </div>
        </div>
      </section>

      <section className="section source-section" id="sources" aria-labelledby="source-title">
        <div className="section-heading">
          <p className="section-kicker">資料來源</p>
          <h2 id="source-title">公開資料與信仰背景參考</h2>
          <p>頁面內容以公開可查資料整理，並保留來源連結，方便後續校對與補充。</p>
        </div>
        <ul className="source-list">
          {sourceLinks.map((source) => (
            <li key={source.href}>
              <span>{source.note}</span>
              <a href={source.href} target="_blank" rel="noreferrer">
                {source.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <footer className="site-footer">
        <span>© 土城廣厚宮福德正神・玄壇財神</span>
        <a href="/fortune-draw-wheel/">抽獎輪盤 App</a>
      </footer>
    </main>
  );
}

export default App;
