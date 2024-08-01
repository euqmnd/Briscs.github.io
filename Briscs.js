var mn = document.getElementById('menu')
        var mni = document.getElementById('menuimg')
        mni.addEventListener('click', nn)
        function nn(){
            mn.style.width = '150px'
            mn.style.height = '900px'
            mn.style.transitionTimingFunction = 'ease'
            mn.style.transitionDuration ='1s'
            cc.style.top = '10px'
            cc.style.transitionTimingFunction = 'ease'
            cc.style.transitionDuration = '1s'
            cc.style.left = '80px'
            cc.style.top = '-50px'
            cc.style.display = 'block'
            bl.style.top = '-945px'
            bl.style.transitionTimingFunction = 'ease'
            bl.style.transitionDuration = '1s'
            yl.style.top = '-945px'
            yl.style.transitionTimingFunction = 'ease'
            yl.style.transitionDuration = '1s'
            y.style.top = '-1200px' 
            y.style.transitionTimingFunction = 'ease'
            y.style.transitionDuration =' 1s'
            ss.style.top = '-950px'
            ss.style.transitionTimingFunction = 'ease'
            ss.style.transitionDuration = '1s'
            spor.style.display = 'block'
            techicon.style.display = 'block'
            shoess.style.display = 'block'
            shoee.style.display = 'block'
            spp.style.display = 'block'
            techph.style.display = 'block'
            shortic.style.display ='block'
            shor.style.display = 'block'
        }
        var cc = document.getElementById('seta')
        cc.addEventListener('click', ce)
        function ce(){
            mn.style.width = '100px'
            mn.style.height = '70px'
            cc.style.top = '-50px'
            cc.style.left = '100px'
            cc.style.display = 'none'
            bl.style.top = '-90px'
            yl.style.top = '-90px'
            y.style.top = '-350px'
            ss.style.top = '-100px'
            techicon.style.display = 'none'
            shoess.style.display = 'none'
            shoee.style.display = 'none'
            spor.style.display = 'none'
            spp.style.display ='none'
            techph.style.display =' none'
            shortic.style.display = 'none'
            shor.style.display = 'none'
        }
        var ss = document.getElementById('sh')
        var bl = document.getElementById('blue')
        bl.addEventListener('mouseenter', bll)
        bl.addEventListener('mouseout', llb)
        function bll(){
            bl.style.borderRadius = '40px'
            bl.style.transitionTimingFunction = 'ease'
            bl.style.transitionDuration = '1s'
        }
        function llb(){
            bl.style.borderRadius = '400px'
        }
        var yl = document.getElementById('yellow')
        yl.addEventListener('mouseenter', yll)
        yl.addEventListener('mouseout', lly)
        function yll(){
            yl.style.borderRadius = '40px'
            yl.style.transitionTimingFunction = 'ease'
            yl.style.transitionDuration = '1s'
        }
        function lly(){
            yl.style.borderRadius = '400px'
        }
        var ss = document.getElementById('Brasil')
        var y = document.getElementById('sy')
        var wh = document.getElementById('white')
        var di = document.getElementById('direita')
        di.addEventListener('click', reita)
        function reita(){
            wh.style.left = '-2000px'
            wh.style.transitionTimingFunction = 'ease'
            wh.style.transitionDuration = '1s'
            wh2.style.left = '50px'
            wh2.style.transitionTimingFunction = 'ease'
            wh2.style.transitionDuration = '1s'
            whitebal.style.background = 'gray'
            whitebal.style.width = '15px'
            whitebal.style.height = '15px'
            whitebal.style.transitionTimingFunction = 'ease'
            whitebal.style.transitionDuration = '1s'
            graybal.style.background = 'white'
            graybal.style.width = '20px'
            graybal.style.height = '20px'
            graybal.style.transitionTimingFunction = 'ease'
            graybal.style.transitionDuration = '1s'
        }
        var wh2 = document.getElementById('white2')
        var esq = document.getElementById('esquerda')
        esq.addEventListener('click', esque)
        function esque(){
            wh2.style.left = '2000px'
            wh2.style.transitionTimingFunction = 'ease'
            wh2.style.transitionDuration = '1s'
            wh.style.left = '50px'
            whitebal.style.background = 'white'
            whitebal.style.width = '20px'
            whitebal.style.height = '20px'
            graybal.style.background = 'gray'
            graybal.style.width = '15px'
            graybal.style.height = '15px'
        }
        var whitebal = document.getElementById('whiteball')
        var graybal = document.getElementById('grayball')
        var spor = document.getElementById('sport')
        var spp = document.getElementById('sp')
        var techicon = document.getElementById('techiconn')
        var techph = document.getElementById('techphrase')
        var shoess = document.getElementById('shoes')
        var shoee = document.getElementById('shoe')
        var shortic = document.getElementById('shorticon')
        var shor = document.getElementById('short')