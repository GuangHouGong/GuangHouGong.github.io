const facebookUrl =
  'https://www.facebook.com/p/%E5%9C%9F%E5%9F%8E%E5%BB%A3%E5%8E%9A%E5%AE%AE%E7%A6%8F%E5%BE%B7%E6%AD%A3%E7%A5%9E%E7%8E%84%E5%A3%87%E8%B2%A1%E7%A5%9E-100080180056129/';

const navItems = [
  { label: '關於廣厚宮', href: '#about' },
  { label: '主祀神明', href: '#deities' },
  { label: '活動與服務', href: '#services' },
  { label: '開源專案', href: '#opensource' },
  { label: '聯絡資訊', href: '#contact' },
];

const serviceItems = ['祈福與平安資訊', '求財與納福活動', '宮廟活動公告', '數位互動工具'];

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
          <p className="eyebrow">在地信仰・清淨祈福・數位服務</p>
          <h1 id="hero-title">土城廣厚宮福德正神・玄壇財神</h1>
          <p className="hero-subtitle">祈福納財・平安順遂・財源廣進</p>
          <div className="hero-actions">
            <a className="button primary" href="/fortune-draw-wheel/">
              進入抽獎輪盤
            </a>
            <a className="button secondary" href={facebookUrl} target="_blank" rel="noreferrer">
              Facebook
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="halo" />
          <div className="fortune-wheel">
            <span>福</span>
            <span>財</span>
            <span>安</span>
            <span>順</span>
            <span>祿</span>
            <span>吉</span>
          </div>
          <div className="gold-ingot">
            <span>廣厚宮</span>
          </div>
        </div>
      </section>

      <section className="section intro-grid" id="about" aria-labelledby="about-title">
        <div>
          <p className="section-kicker">關於廣厚宮</p>
          <h2 id="about-title">土城在地信仰的線上入口</h2>
        </div>
        <p>
          土城廣厚宮福德正神・玄壇財神，秉持在地信仰與服務精神，提供信眾祈福、求財、平安與各項宮廟活動資訊。
        </p>
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
            <p>福德正神象徵土地守護、地方平安與福德庇佑。</p>
          </article>
          <article className="deity-card">
            <div className="seal">財</div>
            <h3>玄壇財神</h3>
            <p>玄壇財神象徵招財進寶、財源廣進與事業順遂。</p>
          </article>
        </div>
      </section>

      <section className="section service-band" id="services" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="section-kicker">活動與服務</p>
          <h2 id="services-title">整合宮廟資訊與數位互動</h2>
          <p>
            本網站將作為土城廣厚宮的線上入口，提供活動資訊、祈福資訊、數位互動工具與開源專案連結。
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
          <p className="section-kicker">開源專案</p>
          <h2 id="opensource-title">抽獎輪盤 App</h2>
          <p>提供活動抽獎、祈福互動與現場活動使用的開源工具。</p>
        </div>
        <div className="project-panel">
          <div>
            <h3>抽獎輪盤 App</h3>
            <p>以 GitHub Pages 發佈的互動式抽獎輪盤，可作為宮廟活動、祈福互動與公開活動工具。</p>
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
          <p>活動資訊、祈福服務與公告，請以官方 Facebook 頁面發布內容為準。</p>
        </div>
        <a className="button primary" href={facebookUrl} target="_blank" rel="noreferrer">
          前往 Facebook
        </a>
      </section>

      <footer className="site-footer">
        <span>© 土城廣厚宮福德正神・玄壇財神</span>
        <a href="/fortune-draw-wheel/">抽獎輪盤 App</a>
      </footer>
    </main>
  );
}

export default App;
