
-- Restituisce tutti i nomi degli studenti e se supera lunghezza 5 restituisce solo le iniziali

SELECT CASE WHEN LENGTH(name) > 5
  THEN CONCAT(SUBSTRING(name, 1, 1), '.')
  ELSE name
  END AS Abbrev
 FROM students


--Esempio con inner join  
--risultato= unione dei record delle tue tab che sono correlati

SELECT students.name AS name, degrees.address, degrees.name 
FROM students, degrees
JOIN students ON students.degree_id = degrees.id


--Esempio con left join 
--risultato= tutti i record della tabella a sinistra "students" anche non correlati e solo i record correlati di "degrees" e nei campi vuoti inserisce null

SELECT * 
FROM students LEFT JOIN degrees 
ON students.degree_id = degrees.id


--Esempio con right join 
--risultato= tutti i record della tabella a destra "degrees" anche non correlati e solo i record correlati di "students" e nei campi vuoti inserisce null

SELECT * 
FROM students RIGHT JOIN degrees 
ON students.degree_id = degrees.id


--Esempio con full join 
--risultato= tutti i record di entrambe tabelle e nei campi vuoti inserisce null

SELECT * 
FROM students FULL JOIN degrees 
ON students.degree_id = degrees.id


--Esempio con order by
--risultato= i record della select ordinati per il valore di order by che rispanno le condizioni della join e del where
SELECT students.name, students.surname, students.date_of_birth
FROM students JOIN degrees
	ON students.degree_id = degrees.id
WHERE degrees.id = 1
ORDER BY students.surname