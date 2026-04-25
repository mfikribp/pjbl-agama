import { SubjectMateri } from './agama/types';
import { alquranHadisMateri } from './agama/alquran-hadis/materi';
import { alquranHadisQuiz } from './agama/alquran-hadis/quiz';
import { aqidahAkhlakMateri } from './agama/aqidah-akhlak/materi';
import { aqidahAkhlakQuiz } from './agama/aqidah-akhlak/quiz';
import { fiqihMateri } from './agama/fiqih/materi';
import { fiqihQuiz } from './agama/fiqih/quiz';
import { skiMateri } from './agama/ski/materi';
import { skiQuiz } from './agama/ski/quiz';
import { bahasaArabMateri } from './agama/bahasa-arab/materi';
import { bahasaArabQuiz } from './agama/bahasa-arab/quiz';

export type { MateriChapter, SubjectMateri, QuizItem } from './agama/types';

export const materiAgama: Record<string, SubjectMateri> = {
  "alquran-hadis": { ...alquranHadisMateri, quizzes: alquranHadisQuiz },
  "aqidah-akhlak": { ...aqidahAkhlakMateri, quizzes: aqidahAkhlakQuiz },
  "fiqih": { ...fiqihMateri, quizzes: fiqihQuiz },
  "ski": { ...skiMateri, quizzes: skiQuiz },
  "bahasa-arab": { ...bahasaArabMateri, quizzes: bahasaArabQuiz },
};
