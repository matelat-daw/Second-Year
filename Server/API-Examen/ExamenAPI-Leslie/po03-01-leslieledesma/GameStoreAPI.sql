-- Crear la base de datos GameStore
CREATE DATABASE GameStoreAPI;
GO
USE GameStoreAPI;
GO

-- Crear la tabla Genre
CREATE TABLE Genre (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    Description NVARCHAR(MAX)
);
GO

-- Insertar registros en la tabla Genre
INSERT INTO Genre (Name, Description)
VALUES
(N'Acción', N'Juegos centrados en combates, desafíos físicos y reflejos rápidos.'),
(N'Aventura', N'Juegos con énfasis en la exploración y resolución de acertijos.'),
(N'RPG', N'Juegos de rol donde los jugadores asumen el control de un personaje o grupo.'),
(N'Deportes', N'Juegos basados en disciplinas deportivas reales o ficticias.'),
(N'Estrategia', N'Juegos que requieren planificación y táctica para lograr objetivos.');
GO

-- Crear la tabla Game
CREATE TABLE Game (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Title NVARCHAR(150) NOT NULL,
    Description NVARCHAR(MAX),
    Stock INT CHECK (Stock >= 0),
    Price DECIMAL(10, 2) CHECK (Price >= 0),
    GenreId INT FOREIGN KEY REFERENCES Genre(Id)
);
GO

-- Insertar registros en la tabla Game
INSERT INTO Game (Title, Description, Stock, Price, GenreId)
VALUES
(N'Super Action Hero', N'Juego de acción trepidante con múltiples niveles.', 10, 49.99, 1),
(N'Space Explorer', N'Explora galaxias y resuelve acertijos alienígenas.', 5, 59.99, 2),
(N'Fantasy Quest', N'RPG épico ambientado en un mundo de fantasía.', 12, 69.99, 3),
(N'Soccer Pro 2024', N'Simulación de fútbol con las mejores ligas.', 0, 39.99, 4),
(N'Castle Siege', N'Estrategia en tiempo real para conquistar castillos.', 7, 29.99, 5),
(N'Alien Invasion', N'Juego de acción contra hordas de alienígenas.', 3, 44.99, 1),
(N'Mystery Island', N'Aventura en una isla llena de secretos.', 8, 34.99, 2),
(N'Heroes of Valor', N'RPG táctico con campañas desafiantes.', 6, 74.99, 3),
(N'Basketball Legends', N'Juego de baloncesto con gráficos realistas.', 0, 49.99, 4),
(N'Battle Tactics', N'Planea tu estrategia y vence al enemigo.', 9, 24.99, 5),
(N'Zombie Apocalypse', N'Acción y supervivencia en un mundo post-apocalíptico.', 2, 59.99, 1),
(N'The Lost City', N'Aventura gráfica con misterios por resolver.', 4, 54.99, 2),
(N'Dragon Slayer', N'RPG en un mundo medieval lleno de dragones.', 11, 64.99, 3),
(N'Tennis Champions', N'Simulación de tenis con torneos internacionales.', 0, 34.99, 4),
(N'War of Clans', N'Estrategia en un universo medieval.', 10, 39.99, 5),
(N'Cyberpunk Warriors', N'Acción futurista en un mundo distópico.', 1, 69.99, 1),
(N'Jungle Expedition', N'Explora junglas y encuentra tesoros.', 3, 29.99, 2),
(N'Mage’s Journey', N'RPG mágico con hechizos y aventuras.', 5, 74.99, 3),
(N'Extreme Football', N'Juego de fútbol callejero.', 6, 19.99, 4),
(N'Galactic Conquest', N'Estrategia espacial con batallas épicas.', 8, 49.99, 5);
GO
