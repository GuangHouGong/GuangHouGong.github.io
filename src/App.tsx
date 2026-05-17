const facebookUrl =
  'https://www.facebook.com/p/%E5%9C%9F%E5%9F%8E%E5%BB%A3%E5%8E%9A%E5%AE%AE%E7%A6%8F%E5%BE%B7%E6%AD%A3%E7%A5%9E%E7%8E%84%E5%A3%87%E8%B2%A1%E7%A5%9E-100080180056129/';

const navItems = [
  { label: '關於廣厚宮', href: '#about' },
  { label: '在地故事', href: '#story' },
  { label: '主祀神明', href: '#deities' },
  { label: '參拜服務', href: '#services' },
  { label: '聯絡資訊', href: '#contact' },
];

const serviceItems = [
  '祈求地方平安與家宅順遂',
  '求財納福與事業順利',
  '宮廟活動與節慶公告',
  '信眾服務與線上聯絡',
];

const sourceLinks = [
  {
    label: '中時新聞網：土城廣厚宮旁大樟樹列管珍貴樹木',
    href: 'https://www.chinatimes.com/realtimenews/20180302001368-260405',
  },
  {
    label: '司法院法人登記公告：社團法人新北市土城廣厚福德正神功德會',
    href: 'https://www.judicial.gov.tw/tw/lp-144-1-592-60.html',
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
          <p className="eyebrow">土城在地信仰・福德庇佑・財源廣進</p>
          <h1 id="hero-title">土城廣厚宮</h1>
          <p className="hero-subtitle">福德正神・玄壇財神</p>
          <p className="hero-copy">
            以福德正神守護一方土地，以玄壇財神祝願財源順遂。廣厚宮承載地方記憶、信眾祈願與社區服務，是土城在地信仰的重要入口。
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#about">
              認識廣厚宮
            </a>
            <a className="button secondary" href={facebookUrl} target="_blank" rel="noreferrer">
              Facebook
            </a>
          </div>
        </div>

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
      </section>

      <section className="section intro-grid" id="about" aria-labelledby="about-title">
        <div>
          <p className="section-kicker">關於廣厚宮</p>
          <h2 id="about-title">土城在地信仰入口</h2>
        </div>
        <p>
          土城廣厚宮福德正神・玄壇財神，秉持在地信仰與服務精神，提供信眾祈福、求財、平安與各項宮廟活動資訊。本網站以宮廟介紹與聯絡資訊為主，協助信眾認識廣厚宮、主祀神明與最新公告。
        </p>
      </section>

      <section className="section story-section" id="story" aria-labelledby="story-title">
        <div className="section-heading">
          <p className="section-kicker">在地故事</p>
          <h2 id="story-title">老樟樹與土地公廟的地方記憶</h2>
          <p>
            公開報導記載，土城廣厚宮旁的大樟樹於 2018 年經新北市政府樹木保護委員會通過列管，成為編號 1,048 的珍貴樹木；樹齡推估逾百年，胸徑達 105
            公分。報導亦提到，樟樹下石刻土地公已有約 170 年歷史，早年守護地方風調雨順、五穀豐收，後在信眾協力下由土地公廟改建為今日廣厚宮。
          </p>
        </div>
        <div className="story-facts">
          <div>
            <strong>100+</strong>
            <span>大樟樹推估樹齡逾百年</span>
          </div>
          <div>
            <strong>1048</strong>
            <span>新北市珍貴樹木列管編號</span>
          </div>
          <div>
            <strong>170</strong>
            <span>石刻土地公公開報導記載約百七十年</span>
          </div>
        </div>
      </section>

      <section className="section" id="deities" aria-labelledby="deities-title">
        <div className="section-heading">
          <p className="section-kicker">主祀神明</p>
          <h2 id="deities-title">福德庇佑，財源廣進</h2>
        </div>
        <div className="deity-grid">
          <article className="deity-card">
            <div className="seal">福</div>
            <h3>福德正神</h3>
            <p>福德正神又稱土地公，象徵土地守護、地方平安、福德庇佑與鄰里安定，是地方生活與信仰記憶的核心。</p>
          </article>
          <article className="deity-card">
            <div className="seal">財</div>
            <h3>玄壇財神</h3>
            <p>玄壇財神為民間熟悉的財神信仰，象徵招財進寶、財源廣進、事業順遂與迎祥納福。</p>
          </article>
        </div>
      </section>

      <section className="section service-band" id="services" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="section-kicker">參拜服務</p>
          <h2 id="services-title">以信眾需求為中心的宮廟資訊</h2>
          <p>
            本網站將作為土城廣厚宮的線上入口，優先提供宮廟介紹、主祀神明、祈福求財資訊、活動公告與官方聯絡方式。
          </p>
        </div>
        <ul className="service-list">
          {serviceItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section project-section" id="opensource" aria-labelledby="opensource-title">
        <div className="section-heading">
          <p className="section-kicker">數位活動工具</p>
          <h2 id="opensource-title">抽獎輪盤 App</h2>
          <p>抽獎輪盤是活動輔助工具，不是本網站主軸；主要用途是支援宮廟活動、互動抽獎與現場流程。</p>
        </div>
        <div className="project-panel">
          <div>
            <h3>活動輔助與開源連結</h3>
            <p>此工具以 GitHub Pages 發佈，保留給活動使用者與開源貢獻者查閱；宮廟資訊仍以本首頁與官方 Facebook 公告為準。</p>
          </div>
          <div className="project-links">
            <a href="https://github.com/GuangHouGong/fortune-draw-wheel" target="_blank" rel="noreferrer">
              GitHub repo
            </a>
            <a href="https://guanghougong.github.io/fortune-draw-wheel/" target="_blank" rel="noreferrer">
              Demo
            </a>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact" aria-labelledby="contact-title">
        <div>
          <p className="section-kicker">聯絡資訊</p>
          <h2 id="contact-title">追蹤土城廣厚宮最新消息</h2>
          <p>活動資訊、祈福服務與公告，請以官方 Facebook 頁面發布內容為準。公開登記資料亦可查得「社團法人新北市土城廣厚福德正神功德會」相關資訊。</p>
        </div>
        <a className="button primary" href={facebookUrl} target="_blank" rel="noreferrer">
          前往 Facebook
        </a>
      </section>

      <section className="section source-section" aria-labelledby="source-title">
        <div className="section-heading">
          <p className="section-kicker">公開資料補充</p>
          <h2 id="source-title">資料來源</h2>
          <p>本頁新增的在地故事與公開登記資訊，採用公開可查資料整理；正式活動與服務仍以土城廣厚宮官方公告為準。</p>
        </div>
        <ul className="source-list">
          {sourceLinks.map((source) => (
            <li key={source.href}>
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
