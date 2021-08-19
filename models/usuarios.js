const usuariosQueries = {
    insertUsuario: `
       insert into
       usuarios(
           nombre,
           email,
           password,
           status
       )
       values
        (?, ?, ?, ?)
       `,
       selectUsuarios:
        SELECT
          *
        FROM
          usuarios 
        WHERE 
          status = 1   
      `  
        };

