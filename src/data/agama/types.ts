export interface MateriChapter {
  id: string;
  title: string;
  content: string;
  arabicContent?: string;
}

export interface QuizItem {
  bab: string;
  ayat?: string;
  soal: string;
  pilihan: string[];
  jawaban: number;
  penjelasan: string;
}

export interface SubjectMateri {
  id: string;
  subject: string;
  description: string;
  pdfUrl?: string;
  chapters: MateriChapter[];
  quizzes?: QuizItem[];
}
