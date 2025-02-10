/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


 // Variables Globals
        var Vides = 7;
        var errada = "";
        var Paraula = "";
        var seconds= 0;
        
	function timer(){
	seconds=seconds+1;
	document.getElementById("counter").innerHTML=seconds;
			}
	setInterval(timer, 1000);          
        function comprovar(){
            lletra = document.getElementById("lletra").value;
            //fa que l'espai per introduir les lletres quedi en blanc cada vegada
            document.getElementById("lletra").value = "";
            //convertim tot a minúscules
            lletra=lletra.toLowerCase();
            //Convertim caràcters especials com accents i dièresis
            switch(lletra) {
                case "à":
                case "á":
                        lletra = "a";
                        break;
                        case "è":
                        case "é":
                        lletra = "e";
                        break;
                        case "í":
                        case "ï":
                        lletra = "i";
                        break;
                        case "ò":
                        case "ó":
                        lletra = "o";
                        break;
                        case "ü":
                        case "ú":
                        lletra = "u";
                        break; 
            }
            //Comprova si les lletres són correctes o no
            //Afegeix la lletra a la paraula si has encertat
            if((lletra >= "a") && (lletra <= "m") || (lletra === "ç") || (lletra === "·")){
                window.alert("Has encertat");
                Paraula = Paraula + lletra + " ";
                document.getElementById("Paraula").innerHTML = Paraula;
                document.getElementById("miau").play();
                document.getElementById("clock").play();
                
                
            //Les lletres o caràcters que no són correctes
            //Si has fallat perds una vida
            } else if((lletra >= "n") && (lletra <= "z") || (lletra === "ñ") || (lletra === "-")){{
                window.alert("Has fallat");
                Vides = Vides-1;
                errada = errada + lletra + " ";
                document.getElementById("errada").innerHTML = errada;
                document.getElementById("boom").play();
                document.getElementById("clock").play();
                document.getElementById("moix").hidden = false;
                mostraImatges();
            }
            //Diu si el caràcter introduit és valid o no 
            }else{
                window.alert("caràcter no vàlid, torna a provar");
            }
            //Si les vides arriben a 0, has perdut
            if (Vides <= 0) {
                window.alert("Has perdut");
                document.getElementById("moix").hidden = true;
                document.body.style.backgroundImage = "url('img/Jungle.png')";
                document.getElementById("cat").play();
                document.getElementById("bell").play();
                document.getElementById("rotar").hidden = false;
                window.alert("que en pau descansi R.I.P.");
                aturaTot();
            }
            //si has aconseguit introduir 7 lletres has guanyat
            //està a 14 per els espais, ha de ser doble
            //mostram imatges que abans estaven amagades
            if (Paraula.length >= 14) {
                window.alert("Has guanyat!");
                aturaTot();
                amagaImatges();
                document.getElementById("ahorcado").hidden = false;
                document.getElementById("cheer").play();
                document.body.style.backgroundImage = "url('img/Party.png')";
                document.getElementById("moix").hidden = true;
                document.getElementById("caminar").hidden = false;
                window.alert("Les cacatues són increïbles");
                
            }
            //espai per a les vides
            document.getElementById("Vides").innerHTML =
                    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + Vides;
        }
        
        //S'empra quan guanyes o perds per aturar el programa
        function aturaTot() {
            document.getElementById("Comprovar").disabled = true;
            document.getElementById("lletra").disabled = true;
        }        
        //Amaga les imatges
        function cargar() {
            document.getElementById("ahorcado_0").hidden = true;
            document.getElementById("ahorcado_1").hidden = true;
            document.getElementById("ahorcado_2").hidden = true;
            document.getElementById("ahorcado_3").hidden = true;
            document.getElementById("ahorcado_4").hidden = true;
            document.getElementById("ahorcado_5").hidden = true;
            document.getElementById("ahorcado_6").hidden = true;
            document.getElementById("ahorcado").hidden = true;
            document.getElementById("caminar").hidden = true;
            document.getElementById("rotar").hidden = true;
            document.getElementById("moix").hidden = true;
            
            if (!confirm('Anam a la quinta forca?'))
                document.body.style.backgroundImage = "url('img/fondo1.png')";
            document.getElementById("mystery").play();
        }
        
        function mostraImatges(){
            switch (Vides){
                case 6:
                    document.getElementById("ahorcado_6").hidden = false;
                    break;
                case 5:
                    document.getElementById("ahorcado_5").hidden = false;
                    document.getElementById("ahorcado_6").hidden = true;
                    break;
                case 4:
                   document.getElementById("ahorcado_4").hidden = false;
                   document.getElementById("ahorcado_5").hidden = true;
                   break;
                case 3:
                   document.getElementById("ahorcado_3").hidden = false;
                   document.getElementById("ahorcado_4").hidden = true;
                   break;
                case 2:
                   document.getElementById("ahorcado_2").hidden = false;
                   document.getElementById("ahorcado_3").hidden = true;
                   break;
                case 1:
                    document.getElementById("ahorcado_1").hidden = false;
                    document.getElementById("ahorcado_2").hidden = true;
                    break;
                case 0:
                    document.getElementById("ahorcado_0").hidden = false;
                    document.getElementById("ahorcado_1").hidden = true;
                    break;        
            }
        }
        
        function amagaImatges(){
            document.getElementById("ahorcado_0").hidden = true;
            document.getElementById("ahorcado_1").hidden = true;
            document.getElementById("ahorcado_2").hidden = true;
            document.getElementById("ahorcado_3").hidden = true;
            document.getElementById("ahorcado_4").hidden = true;
            document.getElementById("ahorcado_5").hidden = true;
            document.getElementById("ahorcado_6").hidden = true;
        }

        
        
        
                