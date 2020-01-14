document.write("<h1>Ejercicio Letras repetidas</h1>");

document.write("<h2>FASE 1</h2>");

var nom = "MARIO";
var res = nom.charAt(1);

//document.write(res);
//document.write(nom.length);
//document.write(nom.charAt(2));

for (i=0;i<=nom.length;i++){
    document.write(nom.charAt(i));
}

document.write("<h2>FASE 2</h2>");

var nomlist = ["m","a","r","i","0"];
//document.write(nomlist[2]);

for (i=0;i<nom.length;i++){
    if(nomlist[i]=='a'||nomlist[i]=='e'||nomlist[i]=='i'||nomlist[i]=='o'||nomlist[i]=='u'){
        document.write(nomlist[i]+ " es una vocal<br>");
    }
    else if(nomlist[i]=='b'||nomlist[i]=='c'||nomlist[i]=='d'||nomlist[i]=='f'
    ||nomlist[i]=='g'||nomlist[i]=='h'||nomlist[i]=='j'||nomlist[i]=='k'
    ||nomlist[i]=='l'||nomlist[i]=='m'||nomlist[i]=='n'||nomlist[i]=='ñ'
    ||nomlist[i]=='p'||nomlist[i]=='q'||nomlist[i]=='r'||nomlist[i]=='s'
    ||nomlist[i]=='t'||nomlist[i]=='v'||nomlist[i]=='w'||nomlist[i]=='x'
    ||nomlist[i]=='y'||nomlist[i]=='z'){
        
        document.write(nomlist[i]+ " es una consonante<br>");
    } 
    else {
        document.write(nomlist[i]+ " es un numero!<br>");
    }
}
document.write("<h2>FASE 3</h2>");