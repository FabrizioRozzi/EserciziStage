
-- Restituisce tutti i nomi degli studenti e se supera lunghezza 5 restituisce solo le iniziali
SELECT CASE WHEN LENGTH(name) > 5
  THEN CONCAT(SUBSTRING(name, 1, 1), '.')
  ELSE name
  END AS Abbrev
 FROM students