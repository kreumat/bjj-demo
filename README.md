# XYZ Academy — GitHub Pages sürümü

Bu klasör, ana `site` projesine dokunulmadan GitHub Pages için hazırlanmıştır. Vite çıktısı göreli dosya yolları kullandığı için hem kullanıcı hem de proje Pages adreslerinde çalışır.

## Yerelde çalıştırma

```bash
npm install
npm run dev
```

Üretim çıktısını doğrulamak için:

```bash
npm run build
npm run preview
```

## GitHub Pages'e gönderme

1. Bu klasörün içeriğini yeni bir GitHub deposunun `main` dalına gönderin.
2. GitHub'da **Settings → Pages** bölümünü açın.
3. **Source** alanında **GitHub Actions** seçin.
4. `main` dalına yapılan her gönderim `.github/workflows/deploy-pages.yml` üzerinden siteyi derleyip yayınlar.

Siteyi elle yüklemek isterseniz `npm run build` sonrası oluşan `dist/` klasörü tamamen statiktir.
