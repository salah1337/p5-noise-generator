let noiser;
let playBtn, stopBtn, noiseChose, volumeSet;
function setup() {
  
    noiser = new p5.Noise();
    noiser.amp(0.1);

    playBtn = createButton('play').position(50, 10).mousePressed(()=>{ noiser.start() })
    stopBtn = createButton('stop').position(50, 50).mousePressed(()=>{ noiser.stop() })

    noiseChose = createSelect();
    noiseChose.position(50,100);
    noiseChose.option('white')
    noiseChose.option('pink')
    noiseChose.option('brown')
    
    noiseChose.changed(()=>{
        noiser.setType(noiseChose.value())
    })
    
    volumeSet = createSlider()
    volumeSet.position(50, 150)
    
    volumeSet.changed(()=>{
        noiser.amp(volumeSet.value() / 100)
        console.log(volumeSet.value()/100);
        
    })
}
