function testWebGL() {
  try {
    return !!window.WebGLRenderingContext && !!document.createElement('canvas').getContext('experimental-webgl');
  } catch(e) {
    return false;
  }
}

Modernizr.load([{
    test : testWebGL(),
    yep: ['/media/sot/js/index.js?v=02272014174933'],
    nope : '/media/sot/js/redirects/no_webgl.js?v=02272014174933'
  }]);
