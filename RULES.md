# AGENT DEVELOPMENT RULES & GUIDELINES (RULES.md)

Bu dosya, projede çalışan yapay zeka ajanının (AntiGravity IDE Agent) uymakla yükümlü olduğu temel kuralları, proje mimarisini ve kodlama standartlarını tanımlar.

---

## 1. Proje Mimarisi ve Teknoloji Yığını
- **Framework:** Astro (Statik Site Üretimi / SSG)
- **Stil & Tasarım:** Vanilla CSS (Global CSS değişkenleri ve Scoped Astro CSS)
- **İçerik:** Markdown (`.md`) ve Astro Content Collections
- **Hosting / Dağıtım:** Cloudflare Pages
- **Temel Konsept:** Kişisel Blog & Portfolyo (Oyun & Yazılım Geliştirici odağında)

---

## 2. Ajan Çalışma İlkeleri ve Güvenlik (Zero-Destruction)
1. **İzinsiz Dosya Silme/Taşıma Yasaktır:** Projedeki hiçbir dosya (`.astro`, `.css`, `.ts`, `.md`) kullanıcı açıkça talep etmedikçe silinemez veya taşınamaz.
2. **Minimal ve Odaklı Müdahale:** İstenen görev dışındaki çalışan bileşenlere ve sayfalara müdahale edilmeyecektir. Sadece hedeflenen dosya ve satırlar güncellenecektir.
3. **Mevcut Tasarımı ve Stili Koru:** 
   - Projenin renk paleti `src/styles/global.css` içerisindeki CSS değişkenlerine (`--accent`, `--black`, `--gray-light`, `--gray-dark`) bağlıdır. 
   - Sabit (hardcoded) HEX veya RGB değerleri doğrudan bileşenlere yazılmamalı, daima CSS değişkenleri kullanılmalıdır.
   - Dark mode (`html.dark`) uyumluluğu her değişiklikte korunmalıdır.
4. **Mobil Uyumluluk ve Duyarlı Tasarım (Responsive Design):** 
   - Yapılan tüm arayüz, stil ve düzen değişiklikleri mobil ekranlar (`@media (max-width: 720px)`) dikkate alınarak geliştirilmelidir.
   - Mobilde dikey taşmalara (horizontal overflow), okunaksız yazı boyutlarına veya orantısız boşluklara (`padding`, `margin`, `gap`) izin verilmemelidir.
   - Bileşenler mobil öncelikli (mobile-friendly) ve dokunmatik etkileşime uygun boyutlarda tutulmalıdır.

---

## 3. SEO ve Karakter Kodlaması (Encoding) Standartları
- **Encoding Standartı:** Tüm dosyalar istisnasız **UTF-8** kodlamasıyla kaydedilmelidir. Türkçe karakterler (`ç, ğ, ı, ö, ş, ü`) hiçbir koşulda bozulmamalıdır.
- **`<head>` Yapısı:**
  - `<meta charset="utf-8" />` etiketi daima `<head>` bloğunun ilk satırlarında yer almalıdır.
  - Sayfa başlıkları (`title`) 45–60 karakter aralığında, hedef anahtar kelimeleri (`Oyun & Yazılım Geliştirici`, `Portfolyo`) içerecek şekilde optimize edilmelidir.
  - Açıklama metinleri (`meta description`) 140–160 karakter aralığında olmalıdır.
- **XML Sitemap:** Eklenen yeni içerikler ve sayfalar Astro sitemap entegrasyonuyla uyumlu olmalıdır.

---

## 4. Blog ve İçerik Yönetimi
- Yeni blog yazıları `src/content/blog/` klasörü altına `.md` uzantısıyla eklenmelidir.
- Her `.md` dosyası zorunlu frontmatter alanlarını içermelidir:
  ```markdown
  ---
  title: "Yazı Başlığı"
  description: "Açıklama metni (SEO uyumlu)"
  pubDate: "Tarih"
  heroImage: "Görsel yolu (varsa)"
  ---
- **Kod Standartları:** Kodlar "Clean Code" prensiplerine uygun olmalı, değişken/fonksiyon isimlendirmeleri açıklayıcı ve tamamen İngilizce yazılmalıdır.