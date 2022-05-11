var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin2022",
    database : "Parcial2_A00824927"
});

con.connect(function(err) {
  if (err) throw err;

con.query("SELECT * FROM Alumnos", function (err, result, fields){
  if (err) throw err;
  console.log(" ");
  console.log("=======  CONSULT  ======");
  console.log(result);
});

con.query("INSERT INTO Alumnos(Nombre, Identificador, Email, Carrera) VALUES('Stephany Cruv Vazquez','A00824927','A008249270@tec.mx','ISDR'),('Francisco Cruv Vazquez', 'A00830445','A00820445@tec.mx','ITC'),('Hanna Cruv Vazquez', 'A00836044','A00836044@tec.mx','LTM')",
 function (err, result) {
  if (err) throw err;
  console.log(" ");
  console.log("=======  INSERT  ======");
  console.log(" ");
  console.log("3 record inserted");
  console.log(" ");
});

con.query("SELECT * FROM Alumnos", function (err, result, fields){
  if (err) throw err;
  console.log(" ");
  console.log("=======  CONSULT  ======");
  console.log(result);
});
con.query("UPDATE Alumnos SET Nombre = 'BORRAR ALUMNO' WHERE Id = 2", function (err, result) {
  if (err) throw err;
  console.log(" ");
  console.log("=======  UPDATE  ======");
  console.log(result.affectedRows + " record(s) updated");
  console.log(result);
});

con.query("SELECT * FROM Alumnos", function (err, result, fields){
  if (err) throw err;
  console.log(" ");
  console.log("=======  CONSULT  ======");
  console.log(result);
});

con.query("DELETE FROM Alumnos WHERE Id = 2", function (err, result) {
  if (err) throw err;
  console.log(" ");
  console.log("=======  DELETE  ======");
  console.log(result);
});

con.query("SELECT * FROM Alumnos", function (err, result, fields){
  if (err) throw err;
  console.log(" ");
  console.log("=======  CONSULT  ======");
  console.log(result);
});
});
