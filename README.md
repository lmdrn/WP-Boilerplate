## régler le nom de la base de donnée du projet

au besoin, dans docker/docker-compose.yml :

modifier les valeurs de (pour y mettre dans les 2 cas le nom de bdd souhaité :

MYSQL_DATABASE

WORDPRESS_DB_NAME


## faire tourner le projet avec docker en local

`cd docker`

démarrer le container --> `docker-compose up -d`

stopper le container -->  `docker-compose down`

## mettre à jour la base de donnée via docker

`docker exec -i docker_db-wordpress_1 mysql -uroot -psomewordpress wp-digitallab < ../BDD/FICHIER-SQL-A-UTILISER.sql`
