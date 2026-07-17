-- Mengisi data Kelompok (Sesuaikan dengan data riil Anda)
INSERT INTO `kelompok` (`id`, `nama_kelompok`, `prodi`, `mata_kuliah`, `dosen`) VALUES
(1, 'Kelompok 6', 'Teknik Informatika', 'Media Pembelajaran Agama', 'dedy Susanto, S.Pd.I.,M.M.');

UPDATE `kelompok` 
SET `dosen` = 'Dedy Susanto, S.Pd.I,M.M.' 
WHERE `id` = 1;

UPDATE `kelompok` 
SET `nama_kelompok` = 'Muhammad Oscar Dzakwan(241220050),Faisal Gunawan(241220064),Muhamad Nabil Alfarizi(241220069),Mohamad Abrar Hafiz(241220058),Restu Riswar(241220065)' 
WHERE `id` = 1;

-- Mengisi data Kategori
INSERT INTO `kategori` (`id`, `nama`) VALUES
(1, 'Dewasa'),
(2, 'Anak');