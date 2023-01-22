CREATE TABLE `locali`
(
 `id_locale`            int NOT NULL ,
 `nome_locale`   varchar(45) NOT NULL ,
 `long`          float NOT NULL ,
 `lat`           float NOT NULL ,
 `prezzo_spritz` float NOT NULL ,
 `descrizione`   text NULL ,
 `ip_creazione`  varchar(15) NOT NULL ,
 `data`          datetime NOT NULL ,

PRIMARY KEY (`id_locale`)
);

CREATE TABLE `recensioni`
(
 `id_recensione` int NOT NULL ,
 `id_locale`     int NOT NULL ,
 `utente`        text NOT NULL ,
 `testo`         text NOT NULL ,

PRIMARY KEY (`id_recensione`),
KEY `FK_2` (`id_locale`),
CONSTRAINT `FK_1` FOREIGN KEY `FK_2` (`id_locale`) REFERENCES `locali` (`id_locale`)
);

