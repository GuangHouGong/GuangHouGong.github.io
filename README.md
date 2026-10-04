# 土城廣厚宮福德正神・玄壇財神官方網站

土城廣厚宮福德正神・玄壇財神官方網站，以介紹土城廣厚宮、主祀神明、老樟樹在地信仰故事、參拜資訊與官方聯絡方式為主。「土城廣厚宮功德會抽獎」在次要的數位活動工具區提供正式入口、使用說明與開源連結。

## 網站網址

- 官方首頁：https://guanghougong.github.io/
- 抽獎輪盤 App：https://guanghougong.github.io/fortune-draw-wheel/

## 本地開發方式

```bash
npm install
npm run dev
```

常用指令：

```bash
npm run lint
npm run build
npm run preview
```

## GitHub Pages 部署方式

本 repository 是 GitHub Pages organization root site，預期網址為 `https://guanghougong.github.io/`，因此 Vite `base` 設定為 `/`。

部署流程使用 `.github/workflows/deploy.yml`：

1. push 到 `main`。
2. GitHub Actions 使用 Node.js 24，執行 `npm ci`、`npm run lint` 與 `npm run build`。
3. 將 `dist` 上傳並部署到 GitHub Pages。

GitHub repository 的 Pages 設定需選擇 GitHub Actions 作為部署來源。

## 專案維護規則

- Codex 與其他 coding agents 的 repo 指引請看 [AGENTS.md](./AGENTS.md)。
- 修改網站內容、部署方式、SEO 設定或相關專案連結時，請同步更新 `README.md` 與必要的 public metadata。
- 首頁內容應以土城廣厚宮與主祀神明介紹為核心，抽獎輪盤僅放在「數位活動工具」或相關專案區塊。
- 廣厚宮專屬廟史、地址、電話、祭典日期、服務項目與開放時間，未有官方來源前不要自行補寫；可先引導至官方 Facebook。
- 若公開資料仍不足，首頁可使用「公告與資料狀態」與「常見問題」說明資料邊界，讓信眾知道哪些資訊已確認、哪些待官方補充。
- 修改程式、素材、設定或 metadata 後，至少執行 `npm run lint` 與 `npm run build`。
- 修改可視 UI 後，建議執行 `npm run dev` 並用瀏覽器檢查首頁顯示。
- 本專案使用 Conventional Commits。

## 目前整理的公開資料

- 2018 年中時新聞網報導：土城廣厚宮旁大樟樹經新北市政府樹木保護委員會列管，編號 1,048；報導亦記載樟樹胸徑 105 公分、樹齡推估逾百年，樹下石刻土地公約 170 年歷史。
- 司法院法人登記公告：`社團法人新北市土城廣厚福德正神功德會`，臺灣新北地方法院登記號數 1550，公告日期 2021-01-20。
- 2021 年法人公告使用永久來源：https://www.judicial.gov.tw/tw/cp-144-361173-a21a8-1.html 。公告日期為 2021-01-20，內文登記日期為 2021-01-18，兩者不可混用。
- 地址、電話、開放時間與具體服務安排仍以廟方確認為準。法人主事務所不等於寺廟地址；不將登記地址自動放入參拜資訊。
- 來源、日期與維護範圍整理在 [資料來源紀錄](./docs/content-sources.md)。
- 官方聯絡與公告連結保留 Facebook 頁面：
  `https://www.facebook.com/p/%E5%9C%9F%E5%9F%8E%E5%BB%A3%E5%8E%9A%E5%AE%AE%E7%A6%8F%E5%BE%B7%E6%AD%A3%E7%A5%9E%E7%8E%84%E5%A3%87%E8%B2%A1%E7%A5%9E-100080180056129/`
- 福德正神與玄壇財神介紹屬信仰背景整理，應與廣厚宮專屬沿革分開呈現，避免把通用信仰資料寫成廟方史實。

## SEO 說明

本專案已設定：

- `zh-Hant-TW` HTML 語系。
- title、description、canonical。
- Open Graph 與 Twitter Card。
- `PlaceOfWorship` JSON-LD structured data。
- `robots.txt`。
- `sitemap.xml`。
- `manifest.webmanifest`。
- `favicon.svg`、`logo.svg`，以及 `og-image.png`（1200×630）與 `apple-touch-icon.png`（180×180）；SVG 來源仍保留，PNG 供社群分享與裝置圖示使用。

## 相關專案連結

- 功德會抽獎正式入口：https://guanghougong.github.io/fortune-draw-wheel/
- 功德會抽獎原始碼：https://github.com/GuangHouGong/fortune-draw-wheel

## 介面與資料保護

- 正文預設 18px，可切換 22px 大字模式；手機使用可收合選單，支援鍵盤、焦點提示與減少動畫。
- 首頁仍以廣厚宮故事、主祀信仰、參拜確認與官方聯絡為主；活動工具區在頁面後段。
- 主站與 `../fortune-draw-wheel` 是獨立 repository、獨立建置與部署。主站 `base: '/'`，抽獎 `base: '/fortune-draw-wheel/'`；不合併原始碼或備份資料。
- 主站只使用 `guanghougong.site.preferences.v1` 儲存字級偏好；不讀寫抽獎名單、結果或歷史資料，不呼叫 `localStorage.clear()`。
- 同一個 GitHub Pages origin 下的 localStorage 並不按 URL 路徑隔離，因此必須維持專案各自的 storage key，不能清理其他專案 key。
- 主站不註冊根路徑 service worker，避免控制抽獎工具的離線範圍。主站本身不承諾斷網重開。
- 抽獎資料由抽獎工具管理並保存在當前瀏覽器，不會自動同步；換裝置／清除瀏覽器資料前請下載 JSON 備份。詳細操作見 [抽獎使用說明](https://guanghougong.github.io/fortune-draw-wheel/#/help)。

## 素材維護

`public/assets/draw-mascot.webp` 是新版功德會抽獎迎賓吉祥物的本機副本，只用於數位活動工具區。來源為獨立抽獎專案的 `public/assets/mascot-welcome.webp`（2026-10-05 版本）；未使用外部圖片 URL，未改動主站既有宮廟識別。兩站各自保有素材，抽獎專案改檔不會自動覆蓋主站。

分享圖與圖示可由現有 SVG 重新轉出（需本機 `rsvg-convert`，CI 不需額外安裝）：

```bash
rsvg-convert -w 1200 -h 630 public/assets/og-image.svg -o public/assets/og-image.png
rsvg-convert -w 180 -h 180 public/assets/logo.svg -o public/assets/apple-touch-icon.png
```

## ChatGPT 首頁插畫

首頁 `public/assets/temple-faith-hero.webp` 使用 ChatGPT 內建 `image_gen` 於 2026-10-05 生成，以紅金色立體微縮宮廟、老樟樹與元寶呈現福德信仰意象。它是裝飾性插畫，不是真實廣厚宮建築、現場照片或廟方史料。網站名稱、按鈕與文字仍以 HTML 顯示；圖片載入失敗時使用原有 CSS 意象。

透明原圖為 1254×1254，僅縮為 1024×1024 並壓縮為 WebP，保留 alpha。圖片存在本專案，不依賴外部 URL 或付費 API；正式網站只載入成品，不執行圖片生成。完整生成提示詞、用途與處理紀錄見 [artwork-prompts.json](./public/assets/artwork-prompts.json)。

重新輸出成品可使用 ImageMagick：

```bash
magick generated-hero.png -resize 1024x1024 -quality 88 -define webp:alpha-quality=100 public/assets/temple-faith-hero.webp
```

## 改版驗證紀錄

2026-10-05 使用 Chrome 檢查 320px／390px 手機視窗、820×1180／1180×820 平板視窗與 1920×1080 桌機視窗；標準／大字均無水平溢出。實際 Chrome 200% 縮放加大字模式亦確認錨點標題不被導覽遮住。選單 Escape、Tab 離開收合、錨點焦點、FAQ 鍵盤展開與字級重新載入已檢查。

執行 `npm run lint`、`npm run build`、`git diff --check`；相容修復後 `npm audit` 回報 0 弱點。CI 使用 Node.js 24。尚未執行 iOS Safari／Android 實機或 VoiceOver／TalkBack 驗收；桌面視窗模擬不等於實機驗收。社群分享圖檔已生成並檢視，第三方平台舊預覽快取需待平台重新擷取。

同日追加 ChatGPT 首頁插畫驗收：1024×1024 透明 WebP 352 KB；手機 320／390px、平板直橫向與大字模式均確認圖片載入且沒有水平溢出，桌機主視覺比例已檢視。

## 開源授權

本專案原始碼以 MIT License 授權，詳見 [LICENSE](./LICENSE)。

宮廟名稱、文案與識別素材用於本官方網站；若需作為其他用途或對外代表土城廣厚宮，請先取得授權。
