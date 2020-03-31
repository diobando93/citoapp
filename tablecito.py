import psycopg2
con = psycopg2.connect(host="localhost",database="sammy", user="sammy", password="hola")
cur = con.cursor()
cur.execute('''CREATE TABLE PERSONA
      (Cedula      REAL PRIMARY KEY NOT NULL,
        HClinica       INT     NOT NULL,
        Apellidos       TEXT     NOT NULL,
        Nombres       TEXT     NOT NULL,
        Fnacimiento       DATE     NOT NULL,
        Edad       INT     NOT NULL,
        Pais       TEXT     NOT NULL,
        Provincia       TEXT     NOT NULL,
        Canton       TEXT     NOT NULL,
        Parroquia       TEXT     NOT NULL,
        Ciudad       TEXT     NOT NULL,
        Barrio       TEXT     NOT NULL,
        Direccion       TEXT    NOT NULL,
        Sector       TEXT     NOT NULL,
        Instruccion       TEXT     NOT NULL,
        Ocupacion       TEXT     NOT NULL,
        Ifamilia       TEXT     NOT NULL,
        Ofamilia    TEXT     NOT NULL);''')

print("Table created successfully")
con.commit()
con.close()
