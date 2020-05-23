let noiser;
let playBtn, stopBtn, noiseChose, volumeSet;
function setup() {
  
    noiser = new p5.Noise();
    noiser.amp(0.1);


    onOff = createButton('play').position(50, 10).mousePressed(()=>{
        if (noiser.started) {
            noiser.stop();
            onOff.html('play')
        } else{
            noiser.start()
            onOff.html('stop')
        }
    })

    noiseChose = createSelect();
    noiseChose.position(50,50);
    noiseChose.option('white')
    noiseChose.option('pink')
    noiseChose.option('brown')
    
    noiseChose.changed(()=>{
        noiser.setType(noiseChose.value())
    })
    
    volumeSet = createSlider(0, 1, 0, 0.1)
    volumeSet.position(50, 100)
    
    volumeSet.input(()=>{
        noiser.amp(volumeSet.value(), 0.1)
        console.log(volumeSet.value());
        
    })
}
