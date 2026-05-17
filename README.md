# 土城廣厚宮福德正神・玄壇財神官方網站

土城廣厚宮福德正神・玄壇財神官方網站，作為宮廟資訊、祈福求財、活動服務與數位互動工具的線上入口。

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
以台灣宮廟美學設計一張正式乾淨的網站主視覺，主題為「土城廣厚宮福德正神・玄壇財神」。使用金色、紅色、深棕、米白色，畫面包含廟宇牌樓、金色光暈、元寶、福字與財字元素。風格莊重、現代、清晰，避免過度花俏，適合官方網站首頁與社群分享圖。16:9 橫式構圖，保留中央文字安全區，不要出現假地址或假電話。
```

## 開源授權

本專案原始碼以 MIT License 授權，詳見 [LICENSE](./LICENSE)。

宮廟名稱、文案與識別素材用於本官方網站；若需作為其他用途或對外代表土城廣厚宮，請先取得授權。
