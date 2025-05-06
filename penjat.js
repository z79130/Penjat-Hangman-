/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


 // Variables Globals
        var Vides = 7;
        var errada = "";
        var Paraula = "";
                  
        function comprovar(){
            lletra = document.getElementById("lletra").value;
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
                
            //Les lletres o caràcters que no són correctes
            //Si has fallat perds una vida
            } else if((lletra >= "n") && (lletra <= "z") || (lletra === "ñ") || (lletra === "-")){{
                window.alert("Has fallat");
                Vides = Vides-1;
                errada = errada + lletra + " ";
                document.getElementById("errada").innerHTML = errada;
            }
            //Diu si el caràcter introduit és valid o no 
            }else{
                window.alert("caràcter no vàlid, torna a provar");
            }
            //Si les vides arriben a 0, has perdut
            if (Vides <= 0) {
                window.alert("Has perdut");
                aturaTot();
            }
            //si has aconseguit introduir 7 lletres has guanyat
            //està a 14 per els espais, ha de ser doble
            if (Paraula.length >= 14) {
                window.alert("Has guanyat!");
                aturaTot();
                document.getElementById("imgindex").hidden = false;
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
        //Amaga una imatge
        function cargar() {
            document.getElementById("imgindex").hidden = true;
        }  