function rysuj(){
    var cnv = document.querySelector("#c1")
    var ctx = cnv.getContext('2d')
    ctx.beginPath();
    ctx.lineWidth = 10
    ctx.strokeStyle = "#f90"
    ctx.arc( 400, 300, 250, 0, 2 * Math.PI )
    ctx.stroke()

    var dlugoscM = 230
    var M = 15
    var katM = M/60 * Math.PI * 2
    var xM = dlugoscM * Math.sin(katM)
    var yM = dlugoscM * Math.cos(katM)

    ctx.beginPath()
    ctx.lineWidth = 5
    ctx.strokeStyle = "#000"
    ctx.moveTo( 400, 300 )
    ctx.lineTo( 400 + xM,300 - yM )
    ctx.stroke()

    var dlugoscH = 100
    var H = 7
    var katH = H/12 * Math.PI * 2
    var xH = dlugoscH * Math.sin(katH)
    var yH = dlugoscH * Math.cos(katH)
    console.log(xH,yH)

    ctx.beginPath()
    ctx.lineWidth = 10
    ctx.strokeStyle = "#000"
    ctx.moveTo( 400, 300 )
    ctx.lineTo( 400 + xH,300 - yH )
    ctx.stroke()
    
    
    /*    ctx.beginPath();
    ctx.lineWidth = 10
    ctx.strokeStyle = "#e22"
    ctx.moveTo( 350, 200 )
    ctx.lineTo( 700, 550 )
    ctx.stroke()


    ctx.beginPath();
    ctx.lineWidth = 5
    ctx.strokeStyle = "#33e"
    ctx.moveTo( 600, 400 )
    ctx.lineTo( 620, 350 )
    ctx.moveTo( 500, 120 )
    ctx.lineTo( 420, 90 )
    ctx.moveTo( 300, 80 )
    ctx.lineTo( 200, 100 )
    ctx.stroke()
    
    ctx.beginPath();
    ctx.lineWidth = 12
    ctx.strokeStyle = "#ee2"
    ctx.arc( 400, 300, 200, 0, 2 * Math.PI )
    ctx.stroke()


*/


}
