export type Mentor = {
	name: string;
	slug: string;
	role: string;
	exp: string;
	students: string;
	rating: string;
	desc: string;
};

export const mentors: Mentor[] = [
	{
		name: 'Li Wei',
		slug: 'li-wei',
		role: 'Native Speaker',
		exp: '8+ Tahun Mengajar',
		students: '500+ Siswa',
		rating: '4.9',
		desc: 'Spesialis membantu siswa berbicara natural seperti penutur asli.'
	},
	{
		name: 'Chen Yu',
		slug: 'chen-yu',
		role: 'HSK Specialist',
		exp: '6+ Tahun Pengalaman',
		students: '300+ Siswa',
		rating: '4.8',
		desc: 'Fokus pada strategi cepat dan efektif untuk lulus HSK.'
	},
	{
		name: 'Andi',
		slug: 'andi',
		role: 'Bilingual Coach',
		exp: '5+ Tahun Mengajar',
		students: '400+ Siswa',
		rating: '4.9',
		desc: 'Pendekatan santai dan mudah dipahami untuk pemula.'
	},
	{
		name: 'Zhang Min',
		slug: 'zhang-min',
		role: 'Conversation Expert',
		exp: '7+ Tahun Mengajar',
		students: '450+ Siswa',
		rating: '4.8',
		desc: 'Fokus meningkatkan kepercayaan diri dalam percakapan sehari-hari.'
	},
	{
		name: 'Liu Fang',
		slug: 'liu-fang',
		role: 'Grammar Specialist',
		exp: '9+ Tahun Pengalaman',
		students: '600+ Siswa',
		rating: '4.9',
		desc: 'Ahli dalam menjelaskan grammar dengan cara sederhana.'
	},
	{
		name: 'Wang Lei',
		slug: 'wang-lei',
		role: 'Business Chinese Coach',
		exp: '10+ Tahun Mengajar',
		students: '700+ Siswa',
		rating: '5.0',
		desc: 'Spesialis bahasa Mandarin untuk kebutuhan profesional.'
	},
	{
		name: 'Dewi',
		slug: 'dewi',
		role: 'Beginner Mentor',
		exp: '4+ Tahun Mengajar',
		students: '350+ Siswa',
		rating: '4.7',
		desc: 'Cocok untuk kamu yang baru mulai belajar dari nol.'
	},
	{
		name: 'Huang Jie',
		slug: 'huang-jie',
		role: 'Pronunciation Coach',
		exp: '6+ Tahun Pengalaman',
		students: '420+ Siswa',
		rating: '4.8',
		desc: 'Fokus pada pelafalan dan tone Mandarin yang tepat.'
	},
	{
		name: 'Rina',
		slug: 'rina',
		role: 'Daily Conversation Coach',
		exp: '5+ Tahun Mengajar',
		students: '380+ Siswa',
		rating: '4.9',
		desc: 'Belajar Mandarin praktis untuk kehidupan sehari-hari.'
	},
	{
		name: 'Sun Hao',
		slug: 'sun-hao',
		role: 'HSK Advanced Trainer',
		exp: '8+ Tahun Pengalaman',
		students: '550+ Siswa',
		rating: '4.9',
		desc: 'Membantu siswa mencapai level HSK tinggi dengan cepat.'
	},
	{
		name: 'Mei Lin',
		slug: 'mei-lin',
		role: 'Kids Specialist',
		exp: '7+ Tahun Mengajar',
		students: '300+ Siswa',
		rating: '4.8',
		desc: 'Pendekatan fun dan interaktif untuk anak-anak.'
	},
	{
		name: 'Budi',
		slug: 'budi',
		role: 'Speaking Coach',
		exp: '6+ Tahun Pengalaman',
		students: '410+ Siswa',
		rating: '4.7',
		desc: 'Latihan intensif untuk meningkatkan skill berbicara.'
	},
	{
		name: 'Zhao Yun',
		slug: 'zhao-yun',
		role: 'Intensive Trainer',
		exp: '9+ Tahun Mengajar',
		students: '620+ Siswa',
		rating: '4.9',
		desc: 'Program belajar cepat dengan hasil maksimal.'
	},
	{
		name: 'Siti',
		slug: 'siti',
		role: 'Friendly Tutor',
		exp: '4+ Tahun Pengalaman',
		students: '290+ Siswa',
		rating: '4.8',
		desc: 'Gaya mengajar santai dan mudah dipahami.'
	},
	{
		name: 'Guo Ming',
		slug: 'guo-ming',
		role: 'Listening Expert',
		exp: '7+ Tahun Mengajar',
		students: '500+ Siswa',
		rating: '4.9',
		desc: 'Melatih kemampuan listening hingga level native.'
	},
	{
		name: 'Kevin',
		slug: 'kevin',
		role: 'Exam Coach',
		exp: '5+ Tahun Pengalaman',
		students: '360+ Siswa',
		rating: '4.7',
		desc: 'Strategi jitu menghadapi ujian Mandarin.'
	},
	{
		name: 'Tang Wei',
		slug: 'tang-wei',
		role: 'Fluency Coach',
		exp: '8+ Tahun Mengajar',
		students: '540+ Siswa',
		rating: '4.9',
		desc: 'Membantu siswa berbicara lebih lancar dan natural.'
	},
	{
		name: 'Nina',
		slug: 'nina',
		role: 'Beginner Friendly',
		exp: '3+ Tahun Pengalaman',
		students: '250+ Siswa',
		rating: '4.7',
		desc: 'Mentor ramah untuk pemula tanpa pengalaman.'
	},
	{
		name: 'Lin Tao',
		slug: 'lin-tao',
		role: 'Accent Trainer',
		exp: '6+ Tahun Mengajar',
		students: '430+ Siswa',
		rating: '4.8',
		desc: 'Fokus pada aksen dan intonasi yang tepat.'
	},
	{
		name: 'Agus',
		slug: 'agus',
		role: 'Casual Coach',
		exp: '4+ Tahun Pengalaman',
		students: '300+ Siswa',
		rating: '4.6',
		desc: 'Belajar santai tanpa tekanan tapi tetap efektif.'
	},
	{
		name: 'Zhou Li',
		slug: 'zhou-li',
		role: 'Writing Specialist',
		exp: '9+ Tahun Mengajar',
		students: '600+ Siswa',
		rating: '4.9',
		desc: 'Ahli dalam penulisan karakter Mandarin.'
	},
	{
		name: 'Clara',
		slug: 'clara',
		role: 'Speaking Partner',
		exp: '5+ Tahun Pengalaman',
		students: '370+ Siswa',
		rating: '4.8',
		desc: 'Partner latihan speaking yang interaktif.'
	},
	{
		name: 'Chen Hao',
		slug: 'chen-hao',
		role: 'Advanced Coach',
		exp: '10+ Tahun Mengajar',
		students: '750+ Siswa',
		rating: '5.0',
		desc: 'Mentor untuk level advanced dan profesional.'
	},
	{
		name: 'Yuni',
		slug: 'yuni',
		role: 'Motivation Coach',
		exp: '4+ Tahun Pengalaman',
		students: '310+ Siswa',
		rating: '4.7',
		desc: 'Membantu siswa tetap konsisten belajar.'
	},
	{
		name: 'Feng Li',
		slug: 'feng-li',
		role: 'Vocabulary Expert',
		exp: '7+ Tahun Mengajar',
		students: '520+ Siswa',
		rating: '4.9',
		desc: 'Fokus memperkaya kosakata secara cepat.'
	},
	{
		name: 'Dian',
		slug: 'dian',
		role: 'Interactive Tutor',
		exp: '5+ Tahun Pengalaman',
		students: '400+ Siswa',
		rating: '4.8',
		desc: 'Metode belajar interaktif dan tidak membosankan.'
	},
	{
		name: 'Xu Jian',
		slug: 'xu-jian',
		role: 'Professional Trainer',
		exp: '11+ Tahun Mengajar',
		students: '800+ Siswa',
		rating: '5.0',
		desc: 'Pengalaman luas dalam mengajar berbagai level.'
	},
	{
		name: 'Aulia',
		slug: 'aulia',
		role: 'Flexible Coach',
		exp: '3+ Tahun Pengalaman',
		students: '280+ Siswa',
		rating: '4.6',
		desc: 'Jadwal fleksibel dan metode adaptif sesuai siswa.'
	}
];
