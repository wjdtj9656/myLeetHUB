WITH
  user_rating AS (
    SELECT u.name, COUNT(*) AS rating_count
    FROM MovieRating r
    JOIN Users u ON r.user_id = u.user_id
    GROUP BY u.name
  ),
  movie_rating AS (
    SELECT m.title, AVG(r.rating) AS avg_rating
    FROM MovieRating r
    JOIN Movies m ON r.movie_id = m.movie_id
    WHERE r.created_at BETWEEN DATE '2020-02-01' AND DATE '2020-02-29'
    GROUP BY m.title
  )
  
SELECT results
FROM (
  SELECT name AS results, 1 AS sort_order
  FROM (
    SELECT name
    FROM user_rating
    ORDER BY rating_count DESC, name ASC
  )
  WHERE rownum = 1
  
  UNION ALL
  
  SELECT title AS results, 2 AS sort_order
  FROM (
    SELECT title
    FROM movie_rating
    ORDER BY avg_rating DESC, title ASC
  )
  WHERE rownum = 1
)
ORDER BY sort_order;
