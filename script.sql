//INSERT INTO
db.estudiante.insertOne(
	{
		nombre:"Pepe",
		edad:23,
		boleta:2013090348
	}
)
db.estudiante.insertMany([
	{nombre:"Daniel", edad:25, boleta:54524585},
	{nombre:"Roman", edad:23, boleta:745424585},
	{nombre:"Juan", edad:84, boleta:5485855}
])
//similar a SELECT * FROM
db.estudiante.find();
db.estudiante.find().pretty();
//greater than
db.estudiante.find({edad:{$gt:24}});
//SET
db.estudiante.updateOne(
	{ "nombre" : "Pepe" },
	{ $set: { "nombre" : "José Ricardo"} }
);
//SET (Multiple)
db.estudiante.updateMany(
	{ edad: {$gt:24} },
	{ $set: {"entidad" : "CDMX"} }
);
//REPLACE
db.estudiante.replaceOne(
	{"edad": "25"},
	{"nombre" : "Pepe", "edad" : 21, "boleta" : "201309745"}
);