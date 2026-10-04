export interface Project {
	title: string;
	description: string;
	blogUrl?: string;
	repoUrl?: string;
	liveUrl?: {
		text: string;
		url: string;
	};
}

export const projects: Project[] = [
	{
		title: 'AirV - Hava Durumu Uygulaması',
		description:
			'Jetpack Compose, MVVM ve Open-Meteo API kullanılarak geliştirilmiş modern Android hava durumu uygulaması. GSB-Turkcell işbirliği ile düzenlenen Kamp+ Bilişim Kampı sürecinde geliştirildi. Kamp adımlarının ötesine geçilerek tam kapsamlı bir uygulamaya dönüştürülmüştür.',
		blogUrl: '/blog/kamp-ve-airv/',
		repoUrl: 'https://github.com/MuhammetTalhaDemir/Weather-App',
		liveUrl: {
			text: 'APK İndir',
			url: 'https://github.com/MuhammetTalhaDemir/Weather-App/releases/download/v1.0.0/app-release.apk',
		},
	},
	{
		title: 'LostChain',
		description:
			'Monad Blitz Kayseri Hackathonu için geliştirilmiş, blockchain tabanlı Erciyes Üniversitesi Kayıp Eşya Portalı.',
		blogUrl: '/blog/blitz-kayseri/',
		repoUrl: 'https://github.com/MuhammetTalhaDemir/LostChain',
		liveUrl: {
			text: 'Web Sitesi',
			url: 'https://lost-chain-nextjs.vercel.app/',
		},
	},
	{
		title: 'Hangi Manifest Kızısın Testi',
		description:
			'C dili ile geliştirilmiş, kullanıcı tercihlerine göre karakter analizi yapan modüler bir test projesi. Kontrol yapıları, fonksiyonlar ve döngüler kullanılarak yazılım geliştirme süreçleri (Git/GitHub) pratik edilmiştir.',
		blogUrl: '/blog/hangi-manifest-kizisin-testi/',
		repoUrl: 'https://github.com/MuhammetTalhaDemir/HangiManifestKizisinTesti',
	},
];
