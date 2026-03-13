---
title: "Hangi Manifest Kızısın Testi v0.6 Güncellemesi"
description: "v0.6 güncellemesiyle birlikte; paralel diziler ve string yönetimi ile test sistemi guncellendi."
pubDate: "Mar 13 2026"
heroImage: "./manifest-v0.6.jpg"
---

v0.6 güncellemesiyle birlikte kodun arka planındaki "if-else" kalabalığına veda ettik ve yerini çok daha profesyonel, ölçeklenebilir bir **Dizi (Array)** mimarisine bıraktık.

### Neler Ekledim?

- **Paralel Dizi Mimarisi:** Sorular, şıklar ve isimler artık birbirine paralel çalışan `const char*` dizilerinde saklanıyor. Bu sayede kodun okunabilirliği arttı ve yeni sorular eklemek çok daha kolay.
    
- **İndeks Tabanlı Puanlama:** Kullanıcının verdiği cevaplar (A-F), ASCII matematiği kullanılarak doğrudan dizi indekslerine dönüştürülüyor. `index = cevap - 'A'` formülüyle hızı ve verimliliği artırdık.
    
- **Dinamik Sonuç Algoritması:** En yüksek puanı alan karakteri belirlemek için dizideki en büyük değeri bulan (Maximum Search) algoritmasını devreye aldık.

Dıştan aynı test olabilir ama içerisi artık çok daha zeki ve sistematik.

**⚠️ Hâlâ buffer sorunu var** 

📝 **Not:** Bu projenin ne olduğunu, nasıl başladığını ve teknik detaylarını merak ediyorsanız, serinin ilk yazısına [buradan](https://muhammettalhademir.com/blog/hangi-manifest-kizisin-testi/) ulaşabilirsiniz.

👉 [GitHub Repo](https://github.com/MuhammetTalhaDemir/HangiManifestKizisinTesti)