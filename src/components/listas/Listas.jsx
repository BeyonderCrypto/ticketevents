const arrayOfPeople = [
  {"id": 1, "nombre": "Juan", "edad": 25},
  {"id": 2, "nombre": "María", "edad": 30},
  {"id": 3, "nombre": "Luis", "edad": 28},
  {"id": 4, "nombre": "Ana", "edad": 22},
  {"id": 5, "nombre": "Carlos", "edad": 35},
  {"id": 6, "nombre": "Laura", "edad": 27},
  {"id": 7, "nombre": "Pedro", "edad": 40},
  {"id": 8, "nombre": "Sofía", "edad": 29},
  {"id": 9, "nombre": "Miguel", "edad": 33},
  {"id": 10, "nombre": "Lucía", "edad": 26},
  {"id": 11, "nombre": "Elena", "edad": 31},
  {"id": 12, "nombre": "Diego", "edad": 24},
  {"id": 13, "nombre": "Patricia", "edad": 32},
  {"id": 14, "nombre": "Javier", "edad": 37},
  {"id": 15, "nombre": "Isabel", "edad": 23},
  {"id": 16, "nombre": "Andrea", "edad": 34},
  {"id": 17, "nombre": "Gabriel", "edad": 28},
  {"id": 18, "nombre": "Natalia", "edad": 36},
  {"id": 19, "nombre": "Roberto", "edad": 39},
  {"id": 20, "nombre": "Carmen", "edad": 31}
];
  const peopleItems = arrayOfPeople.map((person) => (<li key={`x-${person.id}`}>{person.nombre}</li>));

const Listas = () => {
  return (
    <>
    <div>listas</div>
    <ul>{peopleItems}</ul>
    </>
  )
}

export default Listas