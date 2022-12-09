const cambiarcolor = document.querySelector('#switch input[type="checkbox"]');
            function cambiocolor(ev){
                if(ev.target.checked){
                    document.documentElement.setAttribute('tema', 'blue');
                } else {
                    document.documentElement.setAttribute('tema', 'black');
                }
            }
            cambiarcolor.addEventListener('change', cambiocolor);