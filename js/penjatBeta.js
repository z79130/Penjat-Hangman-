/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

// Diferents idiomes per la GUI
    const Idiomes = [
        {
            "IdIdioma": "ca",
            "Titol": "Versió amb Estructures de Dades Joc del Penjat",
            "Versio": "Versió β Joc del Penjat",
            "Input": "Escriu una lletra minúscula",
            "Pregunta": "Anam a la quinta forca?",
            "Comprovar": "Comprovar",
            "Paraula": "Paraula:",
            "Sopes": "Demanes sopes?",
            "Pista": "Pista",
            "Vides": "Vides:",
            "Moix": "Un moix en té set?",
            "Lletres": "Lletres:",
            "Ets": "Ets de lletres?",
            "URLpistes": "URLpistes:",
            "Dita": "Dita",
            "Dita1": "A la quinta forca, ",
            "Dita2": "A ca un penjat, no hi anomenis cordes, ",
            "Dita3": "Setze jutges d'un jutjat mengen fetge d'un penjat, …",
            "Credits": "Crèdits:",
            "YouTube": "Joc Penjat on Scratch",
            "Wikis": "Penjat",
            "Idioma": "en Català",
            "Diccionari": "Diccionari",
            "Teclat": "Mostra o Amaga",
            "Incorrecte": "Caràcter incorrecte!",
            "Repetida": "Lletra repetida!",
            "Encertat": "Has encertat!",
            "Guanyat": "i has guanyat!",
            "Fallat": "Has fallat!",
            "Perdut": "i has perdut!",
            "Descansi": "En pau descansi – RIP!",
            "Puntuacio": "Puntuació:"
        },
        {
            "IdIdioma": "es",
            "Titol": "Versión con Estructuras de Datos Juego del Ahorcado",
            "Versio": "Versión β Juego del Ahorcado",
            "Input": "Escribe una letra minúscula",
            "Pregunta": "Vamos al quinto pino?",
            "Comprovar": "Comprobar",
            "Paraula": "Palabra:",
            "Sopes": "Te rindes?",
            "Pista": "Pista",
            "Vides": "Vidas:",
            "Moix": "Un gato tiene siete?",
            "Lletres": "Letras:",
            "Ets": "Eres de letras?",
            "URLpistes": "URLpistas:",
            "Dita": "Dicho",
            "Dita1": "Al quinto pino, ",
            "Dita2": "En casa de un ahorcado, no hables de cuerdas,",
            "Dita3": "Dieciséis jueces de un juzgado comen hígado de un ahorcado, …",
            "Credits": "Crèditos:",
            "YouTube": "Juego Ahorcado on Scratch",
            "Wikis": "Ahorcado",
            "Idioma": "en Español",
            "Diccionari": "Diccionario",
            "Teclat": "Muestra o Esconde",
            "Incorrecte": "Carácter incorrecto!",
            "Repetida": "Letra repetida!",
            "Encertat": "Has acertado!",
            "Guanyat": "y has ganado!",
            "Fallat": "Has fallado!",
            "Perdut": "y has perdido!",
            "Descansi": "En paz descanse - RIP!",
            "Puntuacio": "Puntuación:"
        },
        {
            "IdIdioma": "en",
            "Titol": "Hangman Game Data Structures Version",
            "Versio": "Hangman Game β Version",
            "Input": "Write a lowercase letter",
            "Pregunta": "Are we going to the boondocks?",
            "Comprovar": "Check it",
            "Paraula": "Word:",
            "Sopes": "You give up?",
            "Pista": "Clue",
            "Vides": "Lives:",
            "Moix": "A cat has seven?",
            "Lletres": "Letters:",
            "Ets": "Are you in liberal arts?",
            "URLpistes": "URLclues:",
            "Dita": "Saying",
            "Dita1": "To the boondocks,",
            "Dita2": "In a hanged man's home, don't talk about ropes,",
            "Dita3": "Sixteen judges of a court eat the liver of a hangman, …",
            "Credits": "Credits:",
            "YouTube": "Hangman Game on Scratch",
            "Wikis": "Hangman",
            "Idioma": "in English",
            "Diccionari": "Dictionary",
            "Teclat": "Show or Hide",
            "Incorrecte": "Wrong character!",
            "Repetida": "Repeated letter!",
            "Encertat": "You're right!",
            "Guanyat": "and you have won!",
            "Fallat": "You have failed!",
            "Perdut": "and you have lost!",
            "Descansi": "Rest in peace - RIP!",
            "Puntuacio": "Score:"
        },
        {
            "IdIdioma": "fr",
            "Titol": "Version avec Base de Données Jeu du Pendu",
            "Versio": "Version γ Jeu du Pendu",
            "Input": "Ecrire une lettre minuscule",
            "Pregunta": "Allons-nous aux banlieue?",
            "Comprovar": "Vérifier",
            "Paraula": "Mot:",
            "Sopes": "Tu abandonnes?",
            "Pista": "Indice",
            "Vides": "Vies:",
            "Moix": "Un chat en a sept?",
            "Lletres": "Lettres:",
            "Ets": "Êtes-vous dans les lettres?",
            "URLpistes": "URLindices:",
            "Dita": "Dit",
            "Dita1": "Aux banlieue,",
            "Dita2": "Chez un pendu, ne parle pas de cordes,",
            "Dita3": "Seize juges d'un tribunal mangent le foie d'un pendu, …",
            "Credits": "Crédits:",
            "YouTube": "Jeu Pendu sur Scratch",
            "Wikis": "Pendu",
            "Idioma": "en Français",
            "Diccionari": "Dictionnaire",
            "Teclat": "Afficher ou Masquer",
            "Incorrecte": "Caractère non valide!",
            "Repetida": "Lettre répétée!",
            "Encertat": "Vous as raison!",
            "Guanyat": "et vous avez gagné!",
            "Fallat": "Vous avez échoué!",
            "Perdut": "et vous avez perdu!",
            "Descansi": "Repose en paix - RIP!",
            "Puntuacio": "Score:"
        }
    ];
    var Idioma = Idiomes.find(Idioma => Idioma.IdIdioma === "ca");
    
        //Paraules i dites
        var paraules= ["cordes", "fetge", "forca", "jutges", "jutjat",
                       "mengen", "penjat", "quinta", "setze"];
        var pistes=["Anam a la quinta forca",
                    "A ca un penjat no anomenis cordes",
                    "Setze jutges d'un jutjat mengen fetge d'un penjat"];
        var paraulespistes=[1,2,0,2,2,2,1,0,2];
                // Variables Globals
        var Vides = 7;
        var Lletres= ["_","_","_","_","_","_","_"];
        var errada = ["_","_","_","_","_","_","_"];
        var Paraula = [];
        var seconds= 0;
        var aleatori = Math.floor(Math.random() * paraules.length);
        var paraula= paraules[aleatori];
        var pista= pistes[paraulespistes[aleatori]];
        //Espais corresponents per a cada paraula
        for (var i = 0; i < paraula.length; i++) {
            Paraula[i]="_";
        }         
        
        
        //funció per mostrar una pista al jugador
        function ajuda(){
            window.alert(pista);
            window.alert(paraula);
        }

        //contador
	function timer(){
	seconds=seconds+1;
	document.getElementById("counter").innerHTML=seconds;
	}
	setInterval(timer, 1000);   
        
        function comprovar(){
            lletra = document.getElementById("lletra").value;
            pos = paraula.indexOf(lletra);
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
            if((lletra >= "a") && (lletra <= "z") || (lletra === "ç") || (lletra === "ñ")) {
            if(paraula.includes(lletra)){
                window.alert("Has encertat");
                pos = paraula.indexOf(lletra);
                Paraula[pos]= lletra;
                for (var i = pos++; i < paraula.length; i++) {
                    if(paraula[i]===lletra)
                        Paraula[i] = lletra;
                }
                document.getElementById("Paraula").innerHTML = Paraula;
                document.getElementById("miau").play();
                document.getElementById("clock").play();
                
                
            //Les lletres o caràcters que no són correctes
            //Si has fallat perds una vida
            }else{                    
                if (Lletres.indexOf(lletra) !== -1){
                    window.alert("lletra repetida");
                }else{
                    window.alert("Has fallat");
                    Lletres[7-Vides] = lletra;
                    Vides = Vides-1;
                    // errada = errada + lletra + " ";


                    document.getElementById("errada").innerHTML = Lletres;
                    document.getElementById("boom").play();
                    document.getElementById("clock").play();
                    document.getElementById("moix").hidden = false;
                    mostraImatges();
                }
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
                document.getElementById("rotar").hidden = false;
                window.alert("que en pau descansi R.I.P.");
                document.getElementById("bell").play();
                aturaTot();
            }
            //si has aconseguit introduir totes les lletres has guanyat
            //mostram imatges que abans estaven amagades
            // pos = paraula.indexOf("_");
            if (Paraula.indexOf("_") === -1 ){
                window.alert("Has guanyat!");
                document.body.style.backgroundImage = "url('img/Party.png')";
                document.getElementById("ahorcado").hidden = false;
                document.getElementById("cheer").play();
                document.getElementById("moix").hidden = true;
                document.getElementById("caminar").hidden = false;
                window.alert("Les cacatues són increïbles");   
                aturaTot();
                amagaImatges();
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
            //Demana a l'usuari a quina pantalla vol jugar
            if (!confirm('Anam a la quinta forca?/Vamos a la quinta forca?/Wanna go to the fifth gallow?'))
                document.body.style.backgroundImage = "url('img/fondo1.png')";
            document.getElementById("mystery").play();
        }
        
        //Mostra les imatges corresponents respecte a les vides
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
        
        //Amaga totes les imatges del penjat
        function amagaImatges(){
            document.getElementById("ahorcado_0").hidden = true;
            document.getElementById("ahorcado_1").hidden = true;
            document.getElementById("ahorcado_2").hidden = true;
            document.getElementById("ahorcado_3").hidden = true;
            document.getElementById("ahorcado_4").hidden = true;
            document.getElementById("ahorcado_5").hidden = true;
            document.getElementById("ahorcado_6").hidden = true;
            
            document.getElementById("paraula").innerHTML = Paraula;
            document.body.style.display = "block";
        }