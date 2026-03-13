---
title: "Hangi Manifest Kızısın?"
description: "Bilgisayar Mühendisliği öğrencisi olarak C dilini öğrenirken geliştirdiğim interaktif kişilik testi projemin detayları."
pubDate: "Feb 20 2026"
heroImage: "./hangi-manifest-kizisin.jpeg"
---

Merhaba, Size **C dilinin** temellerini öğrenirken geliştirdiğim **Hangi Manifest Kızısın Testi** projemi tanıtmak istiyorum.

Bu proje, C dilini öğrenme maceramı eğlenceli bir hale getirdi. Öğrenmeye devam ettikçe projeyi geliştirmeye devam edeceğim. Geliştirme aşamasında olduğu için eksik yanları fazla. Final sürümünde sizi gerçek bir test karşılayacak.

## 💡 Projenin Amacı ve Hikayesi
Kullanıcılara Onedio tarzı sorular yönelterek, verdikleri cevapların ağırlığına göre Manifest grubunun hangi üyesinin karakter tipine daha yakın olduklarını hesaplayan interaktif bir terminal uygulaması geliştirdim. 

## 🛠️ Teknik Özellikler
Proje basit görünse de, arka planda C dilinin en kritik yapılarını verimli kullanmayı hedefledim:

* **Dil:** C
* **Kütüphaneler:** `<stdio.h>`, `<windows.h>` `<string.h>`
* **Veri Yapıları:** **Paralel Diziler (Parallel Arrays)** kullanılarak sorular, şıklar ve sonuçlar dinamik olarak yönetilir.
* **Algoritma Mantığı:** Kullanıcı girdileri ASCII matematiği ile dizi indekslerine dönüştürülür ve "Maximum Search" algoritması ile sonuç hesaplanır
* **Modüler Tasarım:** Fonksiyon bazlı mimari kullanılarak `main` fonksiyonu sadeleştirilmiş ve her görev (soru sorma, puan hesaplama) ayrı fonksiyonlara atanmıştır.
* **Döngü Yönetimi:** `do-while` mekanizması ile sonsuz döngü ve kullanıcı kontrollü çıkış.
* **Hafıza Kullanımı:** Statik bellek yönetimi tercih edilerek düşük kaynak tüketimi sağlanmıştır.

## 📈 Gelişim Süreci
İlk 4 versiyon kendi içinde kapalı bir süreç olduğu için ayrı blog yazıları bulunmuyor; ancak genel özetlerini aşağıda bulabilirsiniz (Daha ayrıntılı teknik inceleme için repo commit'lerime göz atabilirsiniz). v0.4'ten sonraki geliştirme süreçlerini (devlog) ise düzenli blog yazıları haline getirerek detaylandırdım, ilgili bağlantılara aşağıdan ulaşabilirsiniz:

**v0.1:** Temeller ve Karar Yapıları: İlk adımda sadece `scanf` ve `switch-case` yapısını kullanarak, kullanıcının girdiği bir sayıya karşılık gelen ismi ekrana yazdıran en basit prototipi oluşturdum.

**v0.2:** Veri Saklama Girişi: Statik isim listesini bir karakter dizisi (string array) içinde saklayarak, kodu satırlarca süren `printf` kalabalığından kurtarıp daha derli toplu bir hale getirdim.

**v0.3:** Kullanıcı Deneyimi ve Döngüler: `do-while` döngüsünü entegre ederek, programın her seferinde kapanması yerine kullanıcının istediği kadar test yapabilmesini sağlayan ilk interaktif yapıyı kurdum.

**v0.4:** Fonksiyonel Programlama ve Puanlama: Projenin dönüm noktası oldu. `soru_sor` ve `sonucu_goster` gibi fonksiyonlar tanımlayarak modüler kod yapısına geçtim. Her karakter için ayrı puan değişkenleri tanımlayarak basit bir "kişilik testi" algoritmasının temelini attım.

-[v0.5 Blog](https://muhammettalhademir.com/blog/manifest-v05)
-[v0.6 Blog](https://muhammettalhademir.com/blog/manifest-v06)

## 💻 Nasıl Çalıştırılır?
Eğer siz de hangi üye olduğunuzu bulmak isterseniz:

1.  GitHub repomdaki `.c` kaynak kodunu indirin.
2.  Bir C derleyicisi (GCC/MinGW gibi) ile derleyin.
3.  Oluşan dosyayı çalıştırarak testi çözmeye başlayın!

---

[Projeyi GitHub'da İncele](https://github.com/MuhammetTalhaDemir/HangiManifestKizisinTesti)