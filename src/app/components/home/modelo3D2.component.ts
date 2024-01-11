import { Component, ElementRef, NgZone, OnInit, OnDestroy } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

@Component({
  selector: 'app-modelo3d2',
  template: '<div id="modelo3D2"></div>',
})
export class Modelo3D2Component implements OnInit, OnDestroy {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private modelo: any | THREE.Object3D;

  constructor(private ngZone: NgZone) {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // Adjust the aspect ratio
    this.renderer = new THREE.WebGLRenderer({ alpha: true });
  }

  ngOnInit() {
    this.init();
    this.animate();
  }

  ngOnDestroy() {
  }

  private init() {
    // Cargar y agregar el modelo 3D aquí
    const loader = new GLTFLoader();
    loader.load('assets/img/building_1.glb', (gltf) => {
      this.modelo = gltf.scene;
      this.modelo.position.set(0, 0, 0);
      this.modelo.rotation.x = Math.PI / 4;
      this.modelo.scale.set(0.5, 0.5, 0.5);
      this.scene.add(this.modelo);
    });

    // Configurar la cámara y el renderizador
    this.camera.position.z = 20;
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // Agregar luz ambiental
    const luzAmbiental = new THREE.AmbientLight(0xffffff, 1.0); // Color y intensidad
this.scene.add(luzAmbiental);
    // Agregar luz direccional
    const luzDireccional = new THREE.DirectionalLight(0xffffff, 1);
    luzDireccional.position.set(1, 1, 1).normalize();
    this.scene.add(luzDireccional);


    // Agregar el renderizador al contenedor HTML
    const contenedor = document.getElementById('modelo3D2');
    contenedor!.appendChild(this.renderer.domElement);

    // Ajustar el tamaño del renderizador al contenedor
    this.renderer.setSize(contenedor!.clientWidth, contenedor!.clientHeight);
  }

  private animate() {
    this.ngZone.runOutsideAngular(() => {
      const animateFn = () => {
        requestAnimationFrame(animateFn);

        if (this.modelo) {
          this.modelo.rotation.y += 0.005; // Ajusta la velocidad de rotación según tus necesidades
        }
        this.renderer.render(this.scene, this.camera);
      };

      animateFn();
    });
  }
}
