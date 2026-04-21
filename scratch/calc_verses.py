
surah_verses = [
    7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 
    123, 111, 43, 52, 99, 128, 111, 110, 98, 135, 
    112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 
    34, 30, 73, 54, 45, 83, 182, 88, 75, 85, 
    54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 
    60, 49, 62, 55, 78, 96, 29, 22, 24, 13, 
    14, 11, 11, 18, 12, 12, 30, 52, 52, 44, 
    28, 28, 20, 56, 40, 31, 50, 40, 46, 42, 
    29, 19, 36, 25, 22, 17, 19, 26, 30, 20, 
    15, 21, 11, 8, 8, 19, 5, 8, 8, 11, 
    11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 
    5, 4, 5, 6
]

def get_absolute_index(surah, ayah):
    return sum(surah_verses[:surah-1]) + ayah

# Examples for Juz 30:
j30_examples = [
    (80, 18), # min ayyi (Idzhar)
    (101, 11), # narun hamiyah (Idzhar)
    (98, 8),  # jannatu adnin (Idzhar)
    (106, 4), # min khawf (Idzhar)
    (99, 7),  # man ya'mal (Idgham)
    (111, 1), # lahabiw watabb (Idgham)
    (78, 36), # mir rabbihim (Idgham)
    (112, 4), # yakul lahu (Idgham)
    (113, 2), # min sharri (Ikhfa)
    (78, 40), # yanzhur (Ikhfa)
    (82, 11), # kiraman katibin (Ikhfa)
    (101, 6), # man thaqulat (Ikhfa)
    (98, 4),  # mim ba'di (Iqlab)
    (96, 15), # lanasfa'am bin nasiyah (Iqlab)
    (81, 9),  # bi ayyi dzanbim (Iqlab)
    (105, 2), # alam yaj'al (Idzhar Syafawi)
    (105, 4), # tarmihim bihijarah (Ikhfa Syafawi)
    (104, 8), # alaihim mu'sadah (Idgham Mimi)
    (78, 1),  # amma (Ghunnah)
    (78, 21), # inna (Ghunnah)
    (102, 3), # thumma (Ghunnah)
    (113, 1), # al-falaq (Qalqalah/Al)
    (112, 1), # ahad (Qalqalah)
    (114, 1), # an-nas (Al)
    (101, 1), # al-qari'ah (Al)
    (110, 1), # ja'a (Mad)
    (97, 2),  # wa ma adraka (Mad)
    (107, 7), # al-ma'un (Mad)
    (80, 33), # as-shakhah (Mad)
    (96, 1),  # rabbika (Tafkhim)
    (93, 10), # as-sa'ila (Tafkhim)
    (93, 4),  # khayrul laka (Tarqiq)
]

for s, a in j30_examples:
    print(f"QS {s}:{a} -> {get_absolute_index(s, a)}")
