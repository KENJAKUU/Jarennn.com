



      let scene, camera, renderer, stars, starGeo;
  
      function init() {
        
        scene = new THREE.Scene();
        scene.background = new THREE.Color( 0xBBFFE2 );
        camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 1;
        camera.rotation.x = Math.PI/2;

  
  
  
        var container = document.getElementById( 'canvas' );
        document.body.appendChild( container );
  
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild( renderer.domElement );


        
  
  
  
        starGeo = new THREE.Geometry();
        for(let i=0;i<125;i++) {
          star = new THREE.Vector3(
            Math.random() * 600 - 300,
            Math.random() * 600 - 300,
            Math.random() * 600 - 300
          );
          star.velocity = 0;
          star.acceleration = 0.008;
          starGeo.vertices.push(star);     
        }
  
        let sprite = new THREE.TextureLoader().load( 'star.png' );
        let starMaterial = new THREE.PointsMaterial({ 
          color: 0xaaaaaa,
          size: 80,
          map: sprite,
          transparent: true
          
        });
  
        stars = new THREE.Points(starGeo,starMaterial);
        scene.add(stars);
  
        window.addEventListener("resize", onWindowResize, false);
  
        animate(); 
      }
      function onWindowResize() {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        }
      function animate() {
        starGeo.vertices.forEach(p => {
          p.velocity += p.acceleration
          p.y -= p.velocity;
          
          if (p.y < -200) {
            p.y = 200;
            p.velocity = 0;
          }
        });
        starGeo.verticesNeedUpdate = true;
        stars.rotation.y +=0.002;
      
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      }
      init();
