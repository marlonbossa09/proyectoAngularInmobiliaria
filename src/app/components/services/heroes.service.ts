import { Injectable } from "@angular/core";

@Injectable()
export class HeroesService{

  private heroes:Heroe[] = [
    {
      nombre: "Marina del Sol",
      bio: "Sumérgete en un estilo de vida costero en Marina del Sol, un proyecto frente al mar que ofrece residencias elegantes con acceso directo a la playa, marinas privadas y una amplia variedad de servicios náuticos",
      img: "assets/img_ap/ap1.jpg",
      casa:"DC"
    },
    {
      nombre: "Residencial Éden Sereno",
      bio: "Vive en armonía con la naturaleza en este condominio exclusivo, donde la serenidad se combina con la modernidad. Apartamentos espaciosos rodeados de exuberantes jardines, con comodidades de lujo y acceso a instalaciones recreativas.",
      img: "assets/img_ap/ap2.jpg",
      casa:"DC"
    },
    {
      nombre: "Paseo de las Flores Residencial",
      bio: "Descubre el encanto de vivir en un entorno florido y tranquilo. Paseo de las Flores ofrece casas y apartamentos rodeados de hermosos jardines, senderos para caminar y áreas recreativas para toda la familia",
      img: "assets/img_ap/ap3.jpg",
      casa: "Marvel"
    },
    {
      nombre: "Residencias Aurora",
      bio: "Experimenta la magia de las Residencias Aurora, donde el diseño arquitectónico innovador se encuentra con la comodidad moderna. Con un enfoque en la eficiencia energética, este proyecto redefine el estilo de vida urbano",
      img: "assets/img_ap/ap4.jpg",
      casa:"Marvel"
    },
    {
      nombre: "Bosque Encantado Village",
      bio: "Sumérgete en la tranquilidad de la naturaleza en Bosque Encantado Village. Este proyecto ofrece casas rodeadas de un bosque preservado, con senderos privados, zonas de juegos y una comunidad que celebra la conexión con la tierra.",
      img: "assets/img_ap/ap5.jpg",
      casa: "DC"
    },
    {
      nombre: "Skyline Suites Residences",
      bio: "Experimenta el lujo en lo más alto de la ciudad con estas suites contemporáneas. Con vistas panorámicas, diseño vanguardista y servicios de primera clase, cada espacio redefine la elegancia urbana.",
      img: "assets/img_ap/ap6.jpg",
      casa: "Marvel"
    },
    {
      nombre: "Horizonte Verde Condominios",
      bio: "Una fusión perfecta de diseño contemporáneo y espacios verdes, Horizonte Verde ofrece condominios modernos con áreas comunes ajardinadas, senderos para trotar y una sensación de comunidad sostenible",
      img: "assets/img_ap/ap7.jpg",
      casa: "Marvel"
    }
  ];

  constructor(){
    console.log("Servicio listo para usar");
  }

  getHeroes(){
    return this.heroes;
  }

  getHeroe(idxs:number){
    return this.heroes[idxs];
  }


}

export interface Heroe{
  nombre:string;
  bio: string;
  img:string;
  casa:string;
}
