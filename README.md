# 土城廣厚宮福德正神・玄壇財神官方網站

土城廣厚宮福德正神・玄壇財神官方網站，以介紹土城廣厚宮、主祀神明、老樟樹在地信仰故事、參拜資訊與官方聯絡方式為主。抽獎輪盤 App 僅作為宮廟活動的數位輔助工具連結。

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
2. GitHub Actions 執行 `npm ci` 與 `npm run build`。
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
- 第二輪查詢後，仍未找到可直接確認地址、電話與開放時間的官方公開文字來源；首頁目前以資料狀態與 FAQ 保守呈現。
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
- `favicon.svg`、`logo.svg`、`og-image.svg`。

## 相關專案連結

- 抽獎輪盤 App Demo：https://guanghougong.github.io/fortune-draw-wheel/
- 抽獎輪盤 App GitHub repo：https://github.com/GuangHouGong/fortune-draw-wheel

## 視覺素材建議

目前網站使用 SVG 與 CSS 製作金紅色宮廟風格主視覺，不依賴外部圖片。若後續要產生正式社群分享圖或首頁主視覺，可以使用下列提示詞：

```text
以台灣宮廟美學設計一張正式乾淨的網站主視覺，主題為「土城廣厚宮福德正神・玄壇財神」。畫面重點是宮廟、福德正神、玄壇財神與土城在地信仰，可加入老樟樹、金色光暈、元寶、福字與財字元素。使用金色、紅色、深棕、米白色，風格莊重、現代、清晰，避免過度花俏，不要把抽獎輪盤當主視覺。16:9 橫式構圖，保留中央文字安全區，不要出現假地址或假電話。
```

## 開源授權

本專案原始碼以 MIT License 授權，詳見 [LICENSE](./LICENSE)。

宮廟名稱、文案與識別素材用於本官方網站；若需作為其他用途或對外代表土城廣厚宮，請先取得授權。
