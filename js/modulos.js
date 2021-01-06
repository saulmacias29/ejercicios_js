
import {ejercicios} from "./ejercicios.js";
let a = {
  personna :"sa"
};
//console.log(ejercicios.primero("Hola mundo mmmnnm nnmnm"));
//console.log(ejercicios.segundo("Hola mundo",4));
//console.log(ejercicios.tercera("Hola mundo"," "));
//console.log(ejercicios.cuarta("Hola mundo",5) );
//console.log(ejercicios.cinco("Hola mundo") );
//console.log(ejercicios.seis("hola mundo adios mundo", "mundo") );
//console.log(ejercicios.siete(" Edipo la mama lo pide") );
//console.log(ejercicios.ocho("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") );
//console.log(ejercicios.nueve());
//console.log(ejercicios.diez(-754));

//console.log(ejercicios.once(7));

//console.log(ejercicios.doce(98));
//console.log(ejercicios.trece(8784545));
//console.log(ejercicios.catorce(0,"C"));
//console.log(ejercicios.quince(100011000111000,10));
//console.log(ejercicios.dieciseis(1000,20));
//console.log(ejercicios.diecisiete(new Date(1984,4,23)));
//console.log(ejercicios.diesiocho("Hola Mundo asasd jdsajhd jhdsajh rdsadas esfnsdjhsdajh dsadjah"));
//console.log(ejercicios.diecinueve("Jonathan MirCha1"));
//console.log(ejercicios.veinte("saulacias29@gamial.com"));
//console.log(ejercicios.veintiuno([1,4]));
//console.log(ejercicios.veintidos([1, 4, 5, 99, -60,3213,12,123,-97,-2]))
//console.log(ejercicios.veintitres([1,2,3,4,5,6,7,8,9,0]))
console.log(ejercicios.veiticuatro([7,5,7,8,6]))
//console.log(ejercicios.veinticinco(["x", 10, "x", 2, "10", 10, true, true,123,213,3213,123]))
//console.log(ejercicios.ventiseis([9,8,7,6,5,4,3,2,1,0]))
/*id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD. */
let datos = {
  id_pelicula : "as3217896",
  titulo : "La Forma del Agua",
  director : "Guillermo del Toro",
  anio_estreno: 1000,
  paises_origen: ["Mexico", "USA"],
  generos : ["Action","Adult","Crime"],
  calificacion : 32.1
}
class Pelicula{
  
             constructor(datos ){
               
                this.id_pelicula =  datos.id_pelicula;
  this.titulo = datos.titulo;
  this.director = datos.director;
  this.anio_estreno = datos.anio_estreno;
  this.paises_origen = datos.paises_origen;
  this.generos = datos.generos;
  this.calificacion = datos.calificacion;
  this.aceptados = ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
             }
             
             validaciones (){
               
             if ( this.idPelicula.length !== 9)  return console.log("Ingresa ID de 9 caracteres" );
             const r = /^([a-z]){2}([0-9])*$/; 
            if(!r.test(this.idPelicula)) return console.log("Ingresa ID valido")
            if(this.obtenerTitulo.length>100) return console.log("El titulo no debe rebasar los 100 caracteres")
            if(this.obtenerDirector.length>50) return console.log("El director no debe rebasar los 50 caracteres")
            if( !(typeof(this.obtenerAnioEstreno) === "number") 
                            || this.obtenerAnioEstreno>9999) 
            return console.log("En anio estreno debe ser un entero de 4 digitos")
           if(!Array.isArray(this.obtenerPaisesOrigen)) return console.log("El/los pais/es deben ingresarse en forma de Array")
           if(!Array.isArray(this.obtenerGeneros)) return console.log("Los generos deben ingresarse en forma de Array")
           for (let i = 0; i < this.obtenerGeneros.length; i++) {
             if( !this.aceptados.includes(this.obtenerGeneros[i])) return console.log("Hay algun genero no valido");
             /**Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición. */
             const dos = /^([0-9]{1}\.?[0-9]{0,2})$/;
             //return console.log(dos.test(2.2)) 
            return true;
             
           }
           }
           get idPelicula(){
             return this.id_pelicula;
           }
           get obtenerTitulo(){
             return this.titulo;
           }
           get obtenerDirector(){
             return this.director;
           }
           get obtenerAnioEstreno(){
             return this.anio_estreno;
           }
           get obtenerPaisesOrigen(){
             return this.paises_origen;
           }
           get obtenerGeneros(){
             return this.generos;
           }
           get obtenerCalificacion(){
             return this.calificacion;
           }
           get fichaTecnica(){
             return console.log(
               `ID de Pelicula => ${this.idPelicula} \nTitulo => ${this.obtenerTitulo}\nDirector => ${this.obtenerDirector}\nAño de Estreno => ${this.obtenerAnioEstreno}\nPais/es de origen => ${this.obtenerPaisesOrigen}\nGenero(s) => ${this.obtenerGeneros}\nCalificacion => ${this.obtenerCalificacion}`
             );
           }
           static retornarGenero(){
             return console.log(`Los generos aceptados son "Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"`);
           }          
          }
          /*Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película */
          Pelicula.retornarGenero();
          let peliculas = [ 
            {
               id_pelicula : "as3217896",
              titulo : "La Forma del Agua",
              director : "Guillermo del Toro",
              anio_estreno: 1100,
              paises_origen: ["Mexico", "USA"],
              generos : ["Action","Adult","Crime"],
              calificacion : 32.1
            },
            {
               id_pelicula : "as3217896",
              titulo : "La Forma dsad Agua",
              director : "Guillermo del Toro",
              anio_estreno: 1100,
              paises_origen: ["Mexico", "USA"],
              generos : ["Action","Adult","Crime"],
              calificacion : 32.1
            },
            {
               id_pelicula : "as3217896",
              titulo : "La Forma del Agua",
              director : "Guillermo del Toro",
              anio_estreno: 1100,
              paises_origen: ["Mexico", "USA"],
              generos : ["Action","Adult","Crime"],
              calificacion : 32.1232
            }
           ];

           for (let i = 0; i < peliculas.length; i++) {
             console.log("======>Pelicula " + (i+1)+"<======")
             const p = new Pelicula(peliculas[i]);
             if(p.validaciones())
             p.fichaTecnica;
             console.log("\n")
           }







