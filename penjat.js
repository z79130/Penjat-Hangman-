/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


 // Variables Globals
        var Vides = 7;
        var errada = "";
        var Paraula = "";
        
        // var lletra = document.getElementById("lletra").value;
                  
        function comprovar(){
            lletra = document.getElementById("lletra").value;
            lletra=lletra.toLowerCase();
            if((lletra >= "a") && (lletra <= "m")) {
                window.alert("Has encertat");
                Paraula = Paraula + lletra + " ";
                document.getElementById("Paraula").innerHTML = Paraula;
            } else {
                window.alert("Has fallat");
                Vides = Vides-1;
                errada = errada + lletra + " ";
                document.getElementById("errada").innerHTML = errada;
            }
            if (Vides <= 0) {
                window.alert("Has perdut");
                aturaTot();
            }
            if (Paraula.length >= 14) {
                window.alert("Has guanyat!");
                aturaTot();
            }
            document.getElementById("Vides").innerHTML =
                    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + Vides;
        }
        
        
        function aturaTot() {
            document.getElementById("Comprovar").disabled = true;
            document.getElementById("lletra").disabled = true;
        }
        
        
        
        
                