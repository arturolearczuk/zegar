function rysuj(){
    var H = new Date()
    var H = H.getHours()
    if(H < 12){
        H = H - 12
    }
    var M = new Date()
    var M = M.getMinutes()
    var S = new Date()
    var S = S.getSeconds()

    var cnv = document.querySelector("#c1")
    var ctx = cnv.getContext('2d')

    ctx.beginPath();
    ctx.lineWidth = 10
    ctx.strokeStyle = "#f90"
    ctx.arc( 400, 300, 250, 0, 2 * Math.PI )
    ctx.stroke()

    var dlugoscS = 180
    var katS = S/60 * Math.PI * 2
    var xS = dlugoscS * Math.sin(katS)
    var yS = dlugoscS * Math.cos(katS)

    ctx.beginPath()
    ctx.lineWidth = 4
    ctx.strokeStyle = "#000"
    ctx.moveTo( 400, 300 )
    ctx.lineTo( 400 + xS,300 - yS )
    ctx.stroke()

    var dlugoscM = 180
    var katM = M/60 * Math.PI * 2
    var xM = dlugoscM * Math.sin(katM)
    var yM = dlugoscM * Math.cos(katM)

    ctx.beginPath()
    ctx.lineWidth = 7
    ctx.strokeStyle = "#000"
    ctx.moveTo( 400, 300 )
    ctx.lineTo( 400 + xM,300 - yM )
    ctx.stroke()

    var dlugoscH = 100
    var katH = H/12 * Math.PI * 2
    var xH = dlugoscH * Math.sin(katH)
    var yH = dlugoscH * Math.cos(katH)

    ctx.beginPath()
    ctx.lineWidth = 10
    ctx.strokeStyle = "#000"
    ctx.moveTo( 400, 300 )
    ctx.lineTo( 400 + xH,300 - yH )
    ctx.stroke()

    for(var i = 1; i < 13; i++ ) {
        var kat = i/12 * Math.PI * 2
        var x = 250 * Math.cos(kat)
        var y = 250 * Math.sin(kat)

        ctx.beginPath()
        ctx.lineWidth = 10
        ctx.strokeStyle = "#000"
        ctx.arc( 400 + x, 300 - y, 1, 0, 2 * Math.PI )
        ctx.fill()
        ctx.stroke()

    }

    for(var i = 1; i < 61; i++ ) {
        var kat = i/60 * Math.PI * 2
        var x = 250 * Math.cos(kat)
        var y = 250 * Math.sin(kat)

        ctx.beginPath()
        ctx.lineWidth = 1
        ctx.strokeStyle = "#000"
        ctx.arc( 400 + x, 300 - y, 1, 0, 2 * Math.PI )
        ctx.fill()
        ctx.stroke()

    }

}
