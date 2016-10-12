# Barbelo Backend
### Pre-Requirements:
* PostgreSQL (our DBMS of choice)
* Insomnia (to test the api)
* PG Admin (to create databases and view their content)

### Post clone instructions:
1. Edit development settings in config/database.yml to suit your installation and existing db in postgresql (make sure adapter: postgresql)
2. Install all the gems from the gemfiles by typing this in terminal:
   
    ```
    bundle install
    ```
3. Run all migrations to the database (changes to the database made by other users) by running this command in terminal:
   
    ```
    rake db:migrate
    ```
4. Populate the database according to the seed file (located in db/seeds.rb) by running the following command in terminal:
    
    ```
    rake db:seed
    ```

### Maintenance instructions:
* Make sure that all changes you make in the database are in the form of migrations so that all other users can emulate your database when they pull from github
* Push your project once a day if it is functional (do not if it is not)
* When you pull from github, make sure to run "rake db:migrate" and "bundle install" to make sure your database is up to date with other collaborators and all gems are installed
