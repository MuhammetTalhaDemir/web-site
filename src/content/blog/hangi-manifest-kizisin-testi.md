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
* **Kütüphaneler:** `<stdio.h>`, `<windows.h>`
* **IDE/Derleyici:** Visual Studio Code, GCC veya MSVC.
* **Modüler Tasarım:** Fonksiyon bazlı mimari kullanılarak `main` fonksiyonu sadeleştirilmiş ve her görev (soru sorma, puan hesaplama) ayrı fonksiyonlara atanmıştır.
* **Döngü Yönetimi:** `do-while` mekanizması ile sonsuz döngü ve kullanıcı kontrollü çıkış.
* **Score Algorithm:** Puanlama sistemi, 6 farklı karakter değişkeni ve karşılaştırmalı `max_puan` mantığı üzerine kurulmuştur.
* **Hafıza Kullanımı:** Statik bellek yönetimi tercih edilerek düşük kaynak tüketimi sağlanmıştır.

## 📈 Gelişim Süreci
Projenin bu blogdan sonraki gelişmelerine (devlog) aşağıdaki bloglardan inceleyebilirsiniz:
-[v0.5](https://muhammettalhademir.com/blog/manifest-v05)

## 💻 Nasıl Çalıştırılır?
Eğer siz de hangi üye olduğunuzu bulmak isterseniz:

1.  GitHub repomdaki `.c` kaynak kodunu indirin.
2.  Bir C derleyicisi (GCC/MinGW gibi) ile derleyin.
3.  Oluşan dosyayı çalıştırarak testi çözmeye başlayın!

---

[Projeyi GitHub'da İncele](https://github.com/MuhammetTalhaDemir/HangiManifestKizisinTesti)