CREATE TABLE albums (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title varchar(255) NOT NULL,
    artist varchar(255) NOT NULL,
    genre varchar(255) NOT NULL,
    cover varchar(255) NOT NULL
);

CREATE TABLE tracks (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title varchar(255) NOT NULL,
    youtube_url varchar(255) NOT NULL,
    picture varchar(255) NULL,
    album_id INT,
    FOREIGN KEY(album_id) REFERENCES albums(id) ON DELETE NO ACTION   
);


INSERT INTO `albums` (`title`, `artist`, `genre`, `cover`) VALUES ("L'école du micro d'argent", "IAM", "rap", "https://images-na.ssl-images-amazon.com/images/I/51jO-X7LDYL._SX425_.jpg");

INSERT INTO `albums` (`title`, `artist`, `genre`, `cover`) VALUES ("To Pimp A butterfly", "Kendrick Lamar", "rap", "https://miro.medium.com/max/2400/1*4igWXdYX6qoXcWiYsjRUiw.jpeg");

INSERT INTO `tracks` (`album_id`, `title`, `youtube_url`) VALUES 
	("1", "L'École du Micro d'Argent", "wwww.com.com" ),
	("1", "Dangereux", "wwww.com.com" ),
	("1", "L'École du Micro d'Argent", "wwww.com.com" ),
	("1", "Dangereux", "wwww.com.com"),
	("1", "Nés sous la même étoile", "wwww.com.com"),
	("1", "La Saga", "wwww.com.com"),
	("1", "Petit frère", "wwww.com.com"),
	("1", "Elle donne son corps avant son nom", "wwww.com.com"),
	("1", "L'Empire du Côté Obscur", "wwww.com.com"),
	("1", "Regarde", "wwww.com.com"),
	("1", "L'Enfer", "wwww.com.com"),
	("1", "Demain, c'est loin", "wwww.com.com"),
	("2", "For Free", "wwww.com.com" ),
	("2", "King Kouta", "wwww.com.com" );

SELECT DISTINCT tr.*, al.title as album
from `tracks` tr
LEFT JOIN albums al
	ON tr.album_id = al.id
	WHERE tr.album_id = 1;

SELECT DISTINCT tr.*, al.title as album
from `tracks` tr
LEFT JOIN albums al
	ON tr.album_id = al.id
	WHERE tr.album_id = 2;

