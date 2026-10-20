export interface Ivotaciones {

  dni: string,
  nombre: string,
  apellido_paterno: string,
  apellido_materno: string,
  grado: string,
  seccion: string
  voto : number   
}

// export const alumnos: Ivotaciones[] = [
//   {
//     "dni": "11111111",
//     "nombre": "ANGELO LUCIANO",
//     "apellido_paterno": "RORDAN",
//     "apellido_materno": "MILANO",
//     "grado": "1ro de Secundaria",
//     "seccion": "A" ,

//   },
//   {
//     "dni": "55555555",
//     "nombre": "Giuseppe Genaro",
//     "apellido_paterno": "Cabanillas",
//     "apellido_materno": "Ramirez",
//     "grado": "1ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "61748287",
//     "nombre": "ANGELES NICOLE",
//     "apellido_paterno": "SALVA",
//     "apellido_materno": "SOLIS",
//     "grado": "5to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "61775814",
//     "nombre": "ROSARIO NICOLE",
//     "apellido_paterno": "MEZA",
//     "apellido_materno": "MORAN",
//     "grado": "5to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "61783305",
//     "nombre": "JOSUE DANIEL",
//     "apellido_paterno": "SANCHEZ",
//     "apellido_materno": "RAVELLO",
//     "grado": "5to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "61841242",
//     "nombre": "LEANDRA VERENISSE",
//     "apellido_paterno": "VALDERRAMA",
//     "apellido_materno": "RAMIREZ",
//     "grado": "5to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "61844403",
//     "nombre": "ASTRID JAZIEL",
//     "apellido_paterno": "ARENAS",
//     "apellido_materno": "ZAVALA",
//     "grado": "5to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "61851734",
//     "nombre": "ANGEL ROGER FEDERER",
//     "apellido_paterno": "VITE",
//     "apellido_materno": "LUGO",
//     "grado": "5to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "61879118",
//     "nombre": "BRIZA GERALDINE",
//     "apellido_paterno": "DAVALOS",
//     "apellido_materno": "TONE",
//     "grado": "5to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "61909443",
//     "nombre": "MATHIAS ALESSANDRO",
//     "apellido_paterno": "CERNA",
//     "apellido_materno": "VASQUEZ",
//     "grado": "5to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "61974979",
//     "nombre": "ROSA FLOR",
//     "apellido_paterno": "CALERO",
//     "apellido_materno": "SANTAMARIA",
//     "grado": "5to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "61981286",
//     "nombre": "JHOSMAN RAUL",
//     "apellido_paterno": "TITO",
//     "apellido_materno": "CUSIHUALLPA",
//     "grado": "5to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "61983057",
//     "nombre": "SEBASTIAN ANGEL",
//     "apellido_paterno": "CUTIPA",
//     "apellido_materno": "TORRES",
//     "grado": "5to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "62091273",
//     "nombre": "GLEISY DANELA",
//     "apellido_paterno": "SOTELO",
//     "apellido_materno": "AREVALO",
//     "grado": "5to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "62402653",
//     "nombre": "ARIANA MAGDALENA",
//     "apellido_paterno": "RUIZ",
//     "apellido_materno": "RAMIREZ",
//     "grado": "5to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "62451162",
//     "nombre": "MARYURI YOSEILI",
//     "apellido_paterno": "LAYME",
//     "apellido_materno": "DE LA TORRE",
//     "grado": "4to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "62571914",
//     "nombre": "NICOLE TAHYZ",
//     "apellido_paterno": "CRISANTO",
//     "apellido_materno": "MU+æOZ",
//     "grado": "5to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "62605446",
//     "nombre": "XIOMARA ALEJANDRA",
//     "apellido_paterno": "GUZMAN",
//     "apellido_materno": "MONDRAGON",
//     "grado": "5to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "62644788",
//     "nombre": "GIORDANA PILAR",
//     "apellido_paterno": "MORA",
//     "apellido_materno": "ALAMA",
//     "grado": "4to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "62776510",
//     "nombre": "AXEL NICOLAS",
//     "apellido_paterno": "MALLCO",
//     "apellido_materno": "CARHUALLANQUI",
//     "grado": "4to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "62802393",
//     "nombre": "CAMILA YAMILET",
//     "apellido_paterno": "CORNEJO",
//     "apellido_materno": "CORONADO",
//     "grado": "3ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "62878690",
//     "nombre": "JORDAN PATRICK",
//     "apellido_paterno": "GOMEZ",
//     "apellido_materno": "SAAVEDRA",
//     "grado": "3ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "62972850",
//     "nombre": "JUAN BRANDITO",
//     "apellido_paterno": "SINTI",
//     "apellido_materno": "ARELLANO",
//     "grado": "2do de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "63082213",
//     "nombre": "ANTONELLA KRYSTEL",
//     "apellido_paterno": "ROJAS",
//     "apellido_materno": "SANDOVAL",
//     "grado": "3ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "63260290",
//     "nombre": "DAYIRO MAX",
//     "apellido_paterno": "ELESCANO",
//     "apellido_materno": "CASTRO",
//     "grado": "4to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "63292673",
//     "nombre": "CARLOS VALERIO",
//     "apellido_paterno": "MANCILLA",
//     "apellido_materno": "SALAZAR",
//     "grado": "3ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "63442373",
//     "nombre": "ZUEI SAORI",
//     "apellido_paterno": "MANCILLA",
//     "apellido_materno": "SALAZAR",
//     "grado": "2do de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "63507185",
//     "nombre": "SHANIR ZAID",
//     "apellido_paterno": "LAULATE",
//     "apellido_materno": "PACAYA",
//     "grado": "2do de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "63571310",
//     "nombre": "JHERSON ALEXANDER",
//     "apellido_paterno": "RUIZ",
//     "apellido_materno": "NEIRA",
//     "grado": "2do de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "63695372",
//     "nombre": "AZUL BIANCA GIANELLA",
//     "apellido_paterno": "HERRERA",
//     "apellido_materno": "SOTA",
//     "grado": "2do de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "66666666",
//     "nombre": "NAYROMI AQUEMI SUMICO",
//     "apellido_paterno": "SALAZAR",
//     "apellido_materno": "DIAZ",
//     "grado": "5to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "70779128",
//     "nombre": "Aar+¦n",
//     "apellido_paterno": "Uturunco",
//     "apellido_materno": "Torres",
//     "grado": "1ro de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "71286900",
//     "nombre": "Edwin Alexander",
//     "apellido_paterno": "Loya",
//     "apellido_materno": "Baldeon",
//     "grado": "1ro de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "71685157",
//     "nombre": "CARLOS ANDR+ê",
//     "apellido_paterno": "MARTINEZ",
//     "apellido_materno": "FLORES",
//     "grado": "5to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "73286434",
//     "nombre": "Sayda Anai",
//     "apellido_paterno": "OLAZABAL",
//     "apellido_materno": "TORRES",
//     "grado": "5to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "73295960",
//     "nombre": "KIARA ALEXANDRA",
//     "apellido_paterno": "GOMEZ",
//     "apellido_materno": "SEGUNDO",
//     "grado": "5to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "73296573",
//     "nombre": "LUIS ANGEL",
//     "apellido_paterno": "CUEVA",
//     "apellido_materno": "BECERRA",
//     "grado": "5to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "73394639",
//     "nombre": "MAIKER SNEIJDER",
//     "apellido_paterno": "MEDINA",
//     "apellido_materno": "CASTRO",
//     "grado": "5to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "73396015",
//     "nombre": "VALENTINA ISABEL",
//     "apellido_paterno": "RAMIREZ",
//     "apellido_materno": "TEJADA",
//     "grado": "5to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "73397075",
//     "nombre": "CALEB MANUEL",
//     "apellido_paterno": "GARCIA",
//     "apellido_materno": "VEGA",
//     "grado": "5to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "73400710",
//     "nombre": "CALEB MILLER",
//     "apellido_paterno": "ABAD",
//     "apellido_materno": "SANTIAGO",
//     "grado": "5to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "73402701",
//     "nombre": "KALED JOSE LUIS",
//     "apellido_paterno": "MARCELO",
//     "apellido_materno": "RUEDA",
//     "grado": "5to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "73404755",
//     "nombre": "CRHISTOPHER FABIAN",
//     "apellido_paterno": "REQUENA",
//     "apellido_materno": "QUISPE",
//     "grado": "5to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "73405826",
//     "nombre": "FABIANO ALVIERI",
//     "apellido_paterno": "PE+æA",
//     "apellido_materno": "MINAYA",
//     "grado": "5to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "73412895",
//     "nombre": "CARLOS JAVIER",
//     "apellido_paterno": "RIOS",
//     "apellido_materno": "VILLASECA",
//     "grado": "5to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "73413109",
//     "nombre": "GONZALO FABIAN",
//     "apellido_paterno": "GRANADOS",
//     "apellido_materno": "CASTRO",
//     "grado": "5to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "73413658",
//     "nombre": "NAYELI ANTONELLA",
//     "apellido_paterno": "IRENE",
//     "apellido_materno": "CARHUAYAL",
//     "grado": "5to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "73550246",
//     "nombre": "JES+ÜS ANTONIO JHAEL",
//     "apellido_paterno": "EGOAVIL",
//     "apellido_materno": "CHICO",
//     "grado": "5to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "73551283",
//     "nombre": "AVRIL KIARA",
//     "apellido_paterno": "CUEVA",
//     "apellido_materno": "CABADA",
//     "grado": "5to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "73556987",
//     "nombre": "ALDAIR JHEFERSON",
//     "apellido_paterno": "MARTINEZ",
//     "apellido_materno": "SUYON",
//     "grado": "5to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "73566483",
//     "nombre": "KIARA",
//     "apellido_paterno": "BALTAZAR",
//     "apellido_materno": "GONZALES",
//     "grado": "5to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "73715838",
//     "nombre": "SA+ÜL RODRIGO",
//     "apellido_paterno": "MAURICIO",
//     "apellido_materno": "ABANTO",
//     "grado": "5to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "73716130",
//     "nombre": "JOS+ìAS JO+ëL",
//     "apellido_paterno": "ABAD",
//     "apellido_materno": "POMA",
//     "grado": "5to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "73716440",
//     "nombre": "DIEGO LIONEL ANDR+ë",
//     "apellido_paterno": "VEGA",
//     "apellido_materno": "BUENO",
//     "grado": "5to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "73717751",
//     "nombre": "JESUS MATTIAS",
//     "apellido_paterno": "ESQUIVEL",
//     "apellido_materno": "ALBAN",
//     "grado": "5to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "73719315",
//     "nombre": "FABIANA GRACE ALESSANDRA",
//     "apellido_paterno": "SANCHEZ",
//     "apellido_materno": "LOPEZ",
//     "grado": "5to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "73724341",
//     "nombre": "SEBASTIAN ALDHAIR",
//     "apellido_paterno": "VILCA",
//     "apellido_materno": "GALLO",
//     "grado": "5to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "73731024",
//     "nombre": "ISAAC JACOB",
//     "apellido_paterno": "ESPEJO",
//     "apellido_materno": "UCEDA",
//     "grado": "5to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "73731161",
//     "nombre": "GALILEA CRISTINA",
//     "apellido_paterno": "LOYOLA",
//     "apellido_materno": "GOMERO",
//     "grado": "5to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "73733851",
//     "nombre": "THAYSA KAYLEEN",
//     "apellido_paterno": "ALVARADO",
//     "apellido_materno": "CASTILLO",
//     "grado": "5to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "73837697",
//     "nombre": "ANDREA MILAGROS",
//     "apellido_paterno": "DELGADO",
//     "apellido_materno": "MEJIA",
//     "grado": "5to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "73838256",
//     "nombre": "ANDRIU JOSE BALDWIN",
//     "apellido_paterno": "BAQUEDANO",
//     "apellido_materno": "MORALES",
//     "grado": "5to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "73839601",
//     "nombre": "HEMI VENUS",
//     "apellido_paterno": "MENDO",
//     "apellido_materno": "MITA",
//     "grado": "5to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "73842161",
//     "nombre": "SAMIR ALEXIS",
//     "apellido_paterno": "TORRES",
//     "apellido_materno": "CUSTODIO",
//     "grado": "5to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "73843469",
//     "nombre": "ANGIE MILAGROS VICTORIA",
//     "apellido_paterno": "YUTO",
//     "apellido_materno": "ROJAS",
//     "grado": "5to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "73846489",
//     "nombre": "HASLY CAMILA",
//     "apellido_paterno": "ARELLANO",
//     "apellido_materno": "HERNANDEZ",
//     "grado": "5to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "73847655",
//     "nombre": "ESTRELLA LIZBETH",
//     "apellido_paterno": "BARBOZA",
//     "apellido_materno": "GUILLERMO",
//     "grado": "5to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "73909742",
//     "nombre": "BEL+ëN ANYELI",
//     "apellido_paterno": "PE+æA",
//     "apellido_materno": "TOMAYLLA",
//     "grado": "5to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "73910248",
//     "nombre": "JEHU CARLOS",
//     "apellido_paterno": "LAURENCIO",
//     "apellido_materno": "MITAC",
//     "grado": "5to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "73911681",
//     "nombre": "ASTRID FERNANDA",
//     "apellido_paterno": "RUIZ",
//     "apellido_materno": "MARCHENA",
//     "grado": "5to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "73913308",
//     "nombre": "HENDRIK LEONEL",
//     "apellido_paterno": "PACHECO",
//     "apellido_materno": "REYNAGA",
//     "grado": "5to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "73915919",
//     "nombre": "MARCOS OLIVER",
//     "apellido_paterno": "PACHECO",
//     "apellido_materno": "DE LA CRUZ",
//     "grado": "5to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "73916854",
//     "nombre": "JOSEPH ALEXANDER",
//     "apellido_paterno": "CHAVARRIA",
//     "apellido_materno": "MEZA",
//     "grado": "5to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "73917123",
//     "nombre": "RODRIGO ALBERTO",
//     "apellido_paterno": "SUAZO",
//     "apellido_materno": "MARTINEZ",
//     "grado": "5to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "73917914",
//     "nombre": "DANIELA ESTER",
//     "apellido_paterno": "BUSTAMANTE",
//     "apellido_materno": "HERRERA",
//     "grado": "5to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "73919029",
//     "nombre": "KENY FRANCESCO",
//     "apellido_paterno": "ALVAREZ",
//     "apellido_materno": "HUAPAYA",
//     "grado": "5to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "73919980",
//     "nombre": "NICOLE DE MILAGROS",
//     "apellido_paterno": "PE+æA",
//     "apellido_materno": "VASQUEZ",
//     "grado": "5to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "73922387",
//     "nombre": "STEFFANO RODRIGO",
//     "apellido_paterno": "MARI+æO",
//     "apellido_materno": "PEZO",
//     "grado": "5to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "73923063",
//     "nombre": "ANYELINA",
//     "apellido_paterno": "NAUPAY",
//     "apellido_materno": "BALTAZAR",
//     "grado": "5to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "73923502",
//     "nombre": "LEONARDO ANDR+ëS",
//     "apellido_paterno": "MORENO",
//     "apellido_materno": "NAVARRO",
//     "grado": "5to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "73924740",
//     "nombre": "EMERSON JOAZINHO",
//     "apellido_paterno": "PAREDES",
//     "apellido_materno": "QUISPE",
//     "grado": "5to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "73925623",
//     "nombre": "ASHLEY BRISETT",
//     "apellido_paterno": "VELARDE",
//     "apellido_materno": "SUAREZ",
//     "grado": "5to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "73925839",
//     "nombre": "ANTONELLY NATSUMI",
//     "apellido_paterno": "MARQUEZ",
//     "apellido_materno": "SALAZAR",
//     "grado": "5to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "74000662",
//     "nombre": "RUBI ESTRELLA",
//     "apellido_paterno": "ARANGO",
//     "apellido_materno": "RUEDA",
//     "grado": "5to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "74005324",
//     "nombre": "BENYAMIN YARED",
//     "apellido_paterno": "ERAZO",
//     "apellido_materno": "ZELADA",
//     "grado": "5to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "74011535",
//     "nombre": "JHON ADRIAN",
//     "apellido_paterno": "HINCHO",
//     "apellido_materno": "MEYHUEY",
//     "grado": "5to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "74012166",
//     "nombre": "JASTIN FRANCISCO",
//     "apellido_paterno": "JANAMPA",
//     "apellido_materno": "ORTIZ",
//     "grado": "5to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "74019074",
//     "nombre": "MELANY FIORELA",
//     "apellido_paterno": "VERA",
//     "apellido_materno": "AVILA",
//     "grado": "5to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "74100181",
//     "nombre": "ALVARO EMANUEL",
//     "apellido_paterno": "NAVARRO",
//     "apellido_materno": "VILLARREAL",
//     "grado": "5to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "74101067",
//     "nombre": "VICTOR MANUEL",
//     "apellido_paterno": "SUCLUPE",
//     "apellido_materno": "FLORES",
//     "grado": "5to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "74102455",
//     "nombre": "LEONEL ADRIANO",
//     "apellido_paterno": "NU+æEZ",
//     "apellido_materno": "ALFARO",
//     "grado": "5to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "74105157",
//     "nombre": "FABRICIO LEONELL",
//     "apellido_paterno": "CONQUE",
//     "apellido_materno": "ALEGRE",
//     "grado": "5to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "74108379",
//     "nombre": "CARLOS DANIEL",
//     "apellido_paterno": "VALER",
//     "apellido_materno": "ACU+æA",
//     "grado": "5to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "74108685",
//     "nombre": "JOSUE ZLATAN",
//     "apellido_paterno": "SOTO",
//     "apellido_materno": "ALANOCA",
//     "grado": "3ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "74113330",
//     "nombre": "VALERIA FERNANDA",
//     "apellido_paterno": "ROJAS",
//     "apellido_materno": "MEDINA",
//     "grado": "5to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "74179896",
//     "nombre": "HENRRY ANTONIO",
//     "apellido_paterno": "QUISPE",
//     "apellido_materno": "CISNEROS",
//     "grado": "5to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "74182245",
//     "nombre": "DAMARIS JHOANNY",
//     "apellido_paterno": "REYES",
//     "apellido_materno": "MALDONADO",
//     "grado": "5to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "74186933",
//     "nombre": "JOSSIMAR STEFANO",
//     "apellido_paterno": "TOLEDO",
//     "apellido_materno": "VEGA",
//     "grado": "4to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "74187303",
//     "nombre": "OLENKA LETICIA",
//     "apellido_paterno": "SUERO",
//     "apellido_materno": "JIMENEZ",
//     "grado": "4to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "74188457",
//     "nombre": "ANDERSON MIGUEL",
//     "apellido_paterno": "VELASCO",
//     "apellido_materno": "NECIOSUP",
//     "grado": "5to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "74194603",
//     "nombre": "ANGELINA ZARUMY",
//     "apellido_paterno": "RENGIFO",
//     "apellido_materno": "BRA+æEZ",
//     "grado": "4to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "74194893",
//     "nombre": "LENIN ADRIANO",
//     "apellido_paterno": "CELESTINO",
//     "apellido_materno": "GONZALES",
//     "grado": "4to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "74260700",
//     "nombre": "MAKARENA ANGHELY",
//     "apellido_paterno": "RAMOS",
//     "apellido_materno": "BAZAN",
//     "grado": "4to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "74262629",
//     "nombre": "ESTEFANY DAYANNA",
//     "apellido_paterno": "MORE",
//     "apellido_materno": "CHAPA",
//     "grado": "4to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "74264194",
//     "nombre": "DANIELA ALELY",
//     "apellido_paterno": "HUAYHUARIMA",
//     "apellido_materno": "LUIS",
//     "grado": "4to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "74270709",
//     "nombre": "VALERIA MARIANA",
//     "apellido_paterno": "BEJAR",
//     "apellido_materno": "SOLIER",
//     "grado": "4to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "74275685",
//     "nombre": "ANGELA BERENICE",
//     "apellido_paterno": "SOTELO",
//     "apellido_materno": "QUINTANA",
//     "grado": "4to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "74332900",
//     "nombre": "DUSTIN STANLY",
//     "apellido_paterno": "RAMOS",
//     "apellido_materno": "TENAZOA",
//     "grado": "4to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "74340401",
//     "nombre": "JUAN DAVID",
//     "apellido_paterno": "COLLAZOS",
//     "apellido_materno": "HUILLCAYA",
//     "grado": "4to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "74343283",
//     "nombre": "CIELO IRENE",
//     "apellido_paterno": "GUERRA",
//     "apellido_materno": "GAMARRA",
//     "grado": "4to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "74508916",
//     "nombre": "AMY SAMANTHA",
//     "apellido_paterno": "CASTRO",
//     "apellido_materno": "RAMIREZ",
//     "grado": "4to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "74517190",
//     "nombre": "ROSA VALERIA",
//     "apellido_paterno": "TINOCO",
//     "apellido_materno": "PALOMINO",
//     "grado": "4to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "74519452",
//     "nombre": "ROXANA",
//     "apellido_paterno": "MORALES",
//     "apellido_materno": "ANHUAMAN",
//     "grado": "4to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "74674629",
//     "nombre": "ELIANA DEL ROSARIO",
//     "apellido_paterno": "OLIVARES",
//     "apellido_materno": "SARRIA",
//     "grado": "4to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "74675604",
//     "nombre": "JIMMY ADRIANO",
//     "apellido_paterno": "VILCHEZ",
//     "apellido_materno": "NAVARRO",
//     "grado": "4to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "74676561",
//     "nombre": "GRISEL DAFNE",
//     "apellido_paterno": "BALVIN",
//     "apellido_materno": "NARVAEZ",
//     "grado": "5to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "74679128",
//     "nombre": "ADRIANO JEAN FRANCO",
//     "apellido_paterno": "GOMEZ",
//     "apellido_materno": "LUCERO",
//     "grado": "4to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "74679787",
//     "nombre": "MILUSKA KORY",
//     "apellido_paterno": "LEON",
//     "apellido_materno": "LOPEZ",
//     "grado": "4to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "74680407",
//     "nombre": "JOSUE",
//     "apellido_paterno": "VALLEJOS",
//     "apellido_materno": "ALVAREZ",
//     "grado": "4to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "74681337",
//     "nombre": "DYLAN ANDRE",
//     "apellido_paterno": "PALPA",
//     "apellido_materno": "POLO",
//     "grado": "4to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "74682642",
//     "nombre": "JEFFERSON JAMPIER",
//     "apellido_paterno": "HEREDIA",
//     "apellido_materno": "HUAYNATE",
//     "grado": "4to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "74683711",
//     "nombre": "MILEY ALLISON",
//     "apellido_paterno": "CHUQUILLANQUI",
//     "apellido_materno": "ARAUCO",
//     "grado": "4to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "74782327",
//     "nombre": "NILSON CALEB",
//     "apellido_paterno": "HEREDIA",
//     "apellido_materno": "HUAMAN",
//     "grado": "4to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "74788109",
//     "nombre": "OSMANY ALBEIRO",
//     "apellido_paterno": "CRUZ",
//     "apellido_materno": "VASQUEZ",
//     "grado": "4to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "74795718",
//     "nombre": "MISAEL ANDRE",
//     "apellido_paterno": "MOLINA",
//     "apellido_materno": "VELASCO",
//     "grado": "4to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "74795729",
//     "nombre": "STEFANO JESUS",
//     "apellido_paterno": "SUAREZ",
//     "apellido_materno": "SILVA",
//     "grado": "4to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "74796145",
//     "nombre": "DENZEL EULOGIO",
//     "apellido_paterno": "CACERES",
//     "apellido_materno": "CHUQUIZUTA",
//     "grado": "4to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "74796437",
//     "nombre": "LUCIA NATHALY ELENA",
//     "apellido_paterno": "MONTALVAN",
//     "apellido_materno": "IZQUIERDO",
//     "grado": "4to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "75035668",
//     "nombre": "JIMMY JOSE MIGUEL",
//     "apellido_paterno": "MORI",
//     "apellido_materno": "FLORES",
//     "grado": "4to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "75036968",
//     "nombre": "ALEJANDRO ROBERTO",
//     "apellido_paterno": "LAZO",
//     "apellido_materno": "ACU+æA",
//     "grado": "4to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "75045518",
//     "nombre": "DEISY ALEXA",
//     "apellido_paterno": "BASILIO",
//     "apellido_materno": "CACERES",
//     "grado": "4to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "75287857",
//     "nombre": "THAIRA SHANTAL",
//     "apellido_paterno": "COLLQUE",
//     "apellido_materno": "CADILLO",
//     "grado": "4to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "75289819",
//     "nombre": "NATALIA FIORELLA",
//     "apellido_paterno": "NINA",
//     "apellido_materno": "VEGA",
//     "grado": "4to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "75290354",
//     "nombre": "PALOMA ANGHELY",
//     "apellido_paterno": "ALBINEZ",
//     "apellido_materno": "VALDIVIEZO",
//     "grado": "4to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "75292693",
//     "nombre": "RYUSEI SEBASTIAN",
//     "apellido_paterno": "HERNANDEZ",
//     "apellido_materno": "PACHAS",
//     "grado": "4to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "75297398",
//     "nombre": "YARETZI HEIDI",
//     "apellido_paterno": "QUISPE",
//     "apellido_materno": "ROJAS",
//     "grado": "4to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "75303388",
//     "nombre": "LUCIANA VALERIA",
//     "apellido_paterno": "MENDOZA",
//     "apellido_materno": "GARCIA",
//     "grado": "5to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "75304942",
//     "nombre": "BIANCA LUCIANA",
//     "apellido_paterno": "RODRIGUEZ",
//     "apellido_materno": "ANDRES",
//     "grado": "4to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "75305056",
//     "nombre": "YASURI CRISTEL",
//     "apellido_paterno": "RODRIGUEZ",
//     "apellido_materno": "MENDOZA",
//     "grado": "4to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "75306768",
//     "nombre": "BRIYIT ANABEL",
//     "apellido_paterno": "CHAPO+æAN",
//     "apellido_materno": "LOPEZ",
//     "grado": "4to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "75630881",
//     "nombre": "ITALO CAMILO ENZO",
//     "apellido_paterno": "ROSARIO",
//     "apellido_materno": "ARBIZA",
//     "grado": "4to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "75631105",
//     "nombre": "ROMINA FAVIANA",
//     "apellido_paterno": "ZU+æIGA",
//     "apellido_materno": "CUBAS",
//     "grado": "4to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "75632170",
//     "nombre": "SAMANTHA KATE",
//     "apellido_paterno": "PORRAS",
//     "apellido_materno": "HUERTA",
//     "grado": "4to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "75632586",
//     "nombre": "PERCY MANUEL",
//     "apellido_paterno": "ACU+æA",
//     "apellido_materno": "RODRIGUEZ",
//     "grado": "4to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "75636003",
//     "nombre": "SAHID ANTONIO",
//     "apellido_paterno": "PAISIG",
//     "apellido_materno": "ARTEAGA",
//     "grado": "4to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "75636086",
//     "nombre": "SOL MACIEL",
//     "apellido_paterno": "HILARIO",
//     "apellido_materno": "MALPARTIDA",
//     "grado": "4to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "75638185",
//     "nombre": "CHRISTOPHER ALONSO",
//     "apellido_paterno": "PALPA",
//     "apellido_materno": "ENRIQUEZ",
//     "grado": "4to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "75640354",
//     "nombre": "ADRICK UZZIEL",
//     "apellido_paterno": "PACHECO",
//     "apellido_materno": "ESPINOZA",
//     "grado": "4to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "75643760",
//     "nombre": "FRANK JULINHO",
//     "apellido_paterno": "QUISPE",
//     "apellido_materno": "ESCOBAR",
//     "grado": "4to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "75645364",
//     "nombre": "ALEXIS SNAYDER",
//     "apellido_paterno": "MORALES",
//     "apellido_materno": "ROJAS",
//     "grado": "4to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "75649567",
//     "nombre": "ADRIANO MATTIAS",
//     "apellido_paterno": "PE+æA",
//     "apellido_materno": "SAN MIGUEL",
//     "grado": "4to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "76100110",
//     "nombre": "DALESKA JULIET",
//     "apellido_paterno": "MARQUEZ",
//     "apellido_materno": "SALAZAR",
//     "grado": "4to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "76106217",
//     "nombre": "MARIA ALEXANDRA",
//     "apellido_paterno": "MIRES",
//     "apellido_materno": "POMPA",
//     "grado": "4to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "76107840",
//     "nombre": "RODRIGO DANIEL",
//     "apellido_paterno": "DE LA CRUZ",
//     "apellido_materno": "RUIZ",
//     "grado": "4to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "76108380",
//     "nombre": "DONATO FACUNDO",
//     "apellido_paterno": "BALDERA",
//     "apellido_materno": "VILLANUEVA",
//     "grado": "4to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "76109090",
//     "nombre": "HANS WILLIAM",
//     "apellido_paterno": "PFENNING",
//     "apellido_materno": "YAMUCA",
//     "grado": "4to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "76109846",
//     "nombre": "JEANCARLOS ANDERSON",
//     "apellido_paterno": "VERGARA",
//     "apellido_materno": "MONTALVAN",
//     "grado": "4to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "76110544",
//     "nombre": "ORIANA DALOID",
//     "apellido_paterno": "VASQUEZ",
//     "apellido_materno": "RICO",
//     "grado": "4to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "76111373",
//     "nombre": "MAKENSI AMERICO",
//     "apellido_paterno": "CARHUAVILCA",
//     "apellido_materno": "VALVERDE",
//     "grado": "4to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "76111573",
//     "nombre": "JEHU ALONSO",
//     "apellido_paterno": "RODRIGUEZ",
//     "apellido_materno": "PISCO",
//     "grado": "4to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "76112785",
//     "nombre": "STACY ERICKA",
//     "apellido_paterno": "TRUJILLO",
//     "apellido_materno": "JOTA",
//     "grado": "4to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "76115699",
//     "nombre": "LEANDRO ULISES",
//     "apellido_paterno": "GARCIA",
//     "apellido_materno": "CHIRA",
//     "grado": "4to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "76118011",
//     "nombre": "TIFFANY STACEY",
//     "apellido_paterno": "ANYOSA",
//     "apellido_materno": "OLIVERA",
//     "grado": "4to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "76119188",
//     "nombre": "CESAR ADRIANO",
//     "apellido_paterno": "CHAVEZ",
//     "apellido_materno": "MEZA",
//     "grado": "2do de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "76493892",
//     "nombre": "CHRISTOPHER JEREMY",
//     "apellido_paterno": "RAMOS",
//     "apellido_materno": "BRA+æEZ",
//     "grado": "4to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "76497640",
//     "nombre": "NANYIRO HASSAN",
//     "apellido_paterno": "YOTAHUI",
//     "apellido_materno": "SANCHEZ",
//     "grado": "4to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "76498745",
//     "nombre": "JESUS ADRIAN",
//     "apellido_paterno": "BERNAL",
//     "apellido_materno": "GARRIDO",
//     "grado": "5to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "76499304",
//     "nombre": "ANGELA VIVIANA",
//     "apellido_paterno": "VERGARAY",
//     "apellido_materno": "VILLAR",
//     "grado": "5to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "76499483",
//     "nombre": "JAIME MATIAS",
//     "apellido_paterno": "CUEVA",
//     "apellido_materno": "CHUQUIPUL",
//     "grado": "4to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "76500717",
//     "nombre": "JHEREMY ISRAIM MOISES",
//     "apellido_paterno": "NAVARRO",
//     "apellido_materno": "VILLACORTA",
//     "grado": "4to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "76703424",
//     "nombre": "JOSE MIGUEL",
//     "apellido_paterno": "ARONI",
//     "apellido_materno": "RAMOS",
//     "grado": "4to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "76703994",
//     "nombre": "SHERYL CORAL",
//     "apellido_paterno": "RODRIGUEZ",
//     "apellido_materno": "CANTO",
//     "grado": "4to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "76705500",
//     "nombre": "ALEJANDRO DANIEL",
//     "apellido_paterno": "GARAY",
//     "apellido_materno": "HOLGUIN",
//     "grado": "4to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "76710757",
//     "nombre": "PRISCILA EUNICE",
//     "apellido_paterno": "CARHUAZ",
//     "apellido_materno": "HORA",
//     "grado": "4to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "76713045",
//     "nombre": "BILL ADRIANO",
//     "apellido_paterno": "RAMOS",
//     "apellido_materno": "MURO",
//     "grado": "3ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "76713895",
//     "nombre": "MATTHIAS ANDREE",
//     "apellido_paterno": "VELARDE",
//     "apellido_materno": "MARAVI",
//     "grado": "4to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "76716118",
//     "nombre": "AISHA DAIRA ARIEL",
//     "apellido_paterno": "PABLO",
//     "apellido_materno": "BAZAN",
//     "grado": "4to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "76884986",
//     "nombre": "LINDSAY SABRINA KHLO+ë",
//     "apellido_paterno": "COTRINA",
//     "apellido_materno": "PALACIOS",
//     "grado": "3ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "76886075",
//     "nombre": "JOEL ORLANDO",
//     "apellido_paterno": "BELLIDO",
//     "apellido_materno": "DIONICIO",
//     "grado": "4to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "76887410",
//     "nombre": "WILBER AMETH",
//     "apellido_paterno": "COELLO",
//     "apellido_materno": "AGUILAR",
//     "grado": "4to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "76888020",
//     "nombre": "NATANIEL YADIRA MARIBEL",
//     "apellido_paterno": "DUE+æAS",
//     "apellido_materno": "TAIPE",
//     "grado": "3ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "76888066",
//     "nombre": "EYMI FERNANDA",
//     "apellido_paterno": "PANIAGUA",
//     "apellido_materno": "ARIAS",
//     "grado": "3ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "76889833",
//     "nombre": "LUCIANA RUBI",
//     "apellido_paterno": "HUANGAL",
//     "apellido_materno": "VARGAS",
//     "grado": "3ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "76890231",
//     "nombre": "ARIANA YASUMI",
//     "apellido_paterno": "CANDELA",
//     "apellido_materno": "TORRES",
//     "grado": "3ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "76890413",
//     "nombre": "DAFNEE SOLANGE",
//     "apellido_paterno": "JARA",
//     "apellido_materno": "VASQUEZ",
//     "grado": "4to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "76898146",
//     "nombre": "YASURI MILEINY",
//     "apellido_paterno": "HEREDIA",
//     "apellido_materno": "BENAVIDES",
//     "grado": "3ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "76900216",
//     "nombre": "Noemi",
//     "apellido_paterno": "Moreno",
//     "apellido_materno": "Navarro",
//     "grado": "3ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "76992823",
//     "nombre": "KATHERIN NICOLL",
//     "apellido_paterno": "HINCHO",
//     "apellido_materno": "MEYHUEY",
//     "grado": "3ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "76992969",
//     "nombre": "BERLIN KATIUSKA",
//     "apellido_paterno": "SILVA",
//     "apellido_materno": "VALERIO",
//     "grado": "5to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "76993340",
//     "nombre": "FRANCHESKA MARISOL",
//     "apellido_paterno": "NAMUCHE",
//     "apellido_materno": "ORME+æO",
//     "grado": "4to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "76999068",
//     "nombre": "JHEREMY RAFAEL",
//     "apellido_paterno": "ALTEZ",
//     "apellido_materno": "HENOSTROZA",
//     "grado": "3ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77007709",
//     "nombre": "DESIR+ë ROSA MARGARITA",
//     "apellido_paterno": "CARBAJAL",
//     "apellido_materno": "VEGA",
//     "grado": "3ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77107503",
//     "nombre": "DULCE ESPERANZA BELEN",
//     "apellido_paterno": "GARCIA",
//     "apellido_materno": "MENA",
//     "grado": "3ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77113692",
//     "nombre": "JUAN DIEGO",
//     "apellido_paterno": "HUERTAS",
//     "apellido_materno": "MUNGUIA",
//     "grado": "3ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77119093",
//     "nombre": "G+ëNESIS MEDALID",
//     "apellido_paterno": "TITO",
//     "apellido_materno": "CUSTODIO",
//     "grado": "3ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77124088",
//     "nombre": "EMERSON ALEXANDRO",
//     "apellido_paterno": "QUILICHE",
//     "apellido_materno": "ALCANTARA",
//     "grado": "3ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77124166",
//     "nombre": "JOSU+ë EL+ìAS",
//     "apellido_paterno": "CHANCO",
//     "apellido_materno": "MEZA",
//     "grado": "3ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77180992",
//     "nombre": "JEFREY YAMIR",
//     "apellido_paterno": "ALVITES",
//     "apellido_materno": "GRIMANI",
//     "grado": "3ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77187007",
//     "nombre": "BRYAN SMITH",
//     "apellido_paterno": "VALDERA",
//     "apellido_materno": "QUISPE",
//     "grado": "3ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77188856",
//     "nombre": "MATHIAS GABRIEL",
//     "apellido_paterno": "PISCO",
//     "apellido_materno": "SANCHEZ",
//     "grado": "3ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77195069",
//     "nombre": "RENZO DAYIRO",
//     "apellido_paterno": "RODRIGUEZ",
//     "apellido_materno": "MONTALVAN",
//     "grado": "3ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77196039",
//     "nombre": "AVRIL FERNANDA",
//     "apellido_paterno": "ARAPA",
//     "apellido_materno": "FLORES",
//     "grado": "3ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77249335",
//     "nombre": "ALISON XIMENA",
//     "apellido_paterno": "YARLEQUE",
//     "apellido_materno": "MAZA",
//     "grado": "3ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77259351",
//     "nombre": "DIEGO DAVID",
//     "apellido_paterno": "GABRIEL",
//     "apellido_materno": "AUCCAISE",
//     "grado": "3ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77266669",
//     "nombre": "LUIGUI ALEXANDRO",
//     "apellido_paterno": "MUNDACA",
//     "apellido_materno": "RAMIREZ",
//     "grado": "3ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77304793",
//     "nombre": "LUZ MARIA",
//     "apellido_paterno": "VILLACORTA",
//     "apellido_materno": "ESPINOZA",
//     "grado": "5to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77305524",
//     "nombre": "ANA RAQUEL",
//     "apellido_paterno": "GIRALDO",
//     "apellido_materno": "MORALES",
//     "grado": "3ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77316715",
//     "nombre": "TRIANA EDITH",
//     "apellido_paterno": "CARDENAS",
//     "apellido_materno": "VALENZUELA",
//     "grado": "3ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77364308",
//     "nombre": "TIRSA MARIANA",
//     "apellido_paterno": "ARANGO",
//     "apellido_materno": "RUEDA",
//     "grado": "3ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77368548",
//     "nombre": "NICOLE XIOMARA",
//     "apellido_paterno": "LOZANO",
//     "apellido_materno": "YOVERA",
//     "grado": "4to de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77371122",
//     "nombre": "SAITH YAMIL",
//     "apellido_paterno": "ORTIZ",
//     "apellido_materno": "VALVERDE",
//     "grado": "3ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77394923",
//     "nombre": "MIGUEL ANGEL",
//     "apellido_paterno": "VILLAFUERTE",
//     "apellido_materno": "ANDRADE",
//     "grado": "3ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77398365",
//     "nombre": "STACEY CHERYL",
//     "apellido_paterno": "VIRTO",
//     "apellido_materno": "MANCHA",
//     "grado": "3ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77403360",
//     "nombre": "NICOLE LUANA",
//     "apellido_paterno": "TINOCO",
//     "apellido_materno": "PALOMINO",
//     "grado": "3ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77413316",
//     "nombre": "FLAVIA XIMENA",
//     "apellido_paterno": "VELARDE",
//     "apellido_materno": "AVILA",
//     "grado": "3ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77443842",
//     "nombre": "YARITZA SALOME",
//     "apellido_paterno": "MACHAHUA",
//     "apellido_materno": "RAMOS",
//     "grado": "3ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77444697",
//     "nombre": "KALED EMANUEL ALBERTO",
//     "apellido_paterno": "ROJAS",
//     "apellido_materno": "ARIAS",
//     "grado": "3ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77445066",
//     "nombre": "JADE BIANCA",
//     "apellido_paterno": "RODRIGUEZ",
//     "apellido_materno": "INFANTES",
//     "grado": "3ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77446423",
//     "nombre": "FABIANA VALENTINA",
//     "apellido_paterno": "LEYVA",
//     "apellido_materno": "LUCUMBER",
//     "grado": "3ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77447875",
//     "nombre": "ALISON JAZMIN",
//     "apellido_paterno": "VILLANUEVA",
//     "apellido_materno": "ALVA",
//     "grado": "3ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77451977",
//     "nombre": "THIAGO FABIAN",
//     "apellido_paterno": "BECERRA",
//     "apellido_materno": "GUARNIZO",
//     "grado": "3ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77455233",
//     "nombre": "MAYCOL RONALDO",
//     "apellido_paterno": "PE+æA",
//     "apellido_materno": "PAJUELO",
//     "grado": "3ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77459448",
//     "nombre": "YAEL ALEJANDRO",
//     "apellido_paterno": "VILLEGAS",
//     "apellido_materno": "PUMACHAGUA",
//     "grado": "2do de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77514233",
//     "nombre": "JOHAN MATEO",
//     "apellido_paterno": "MAURICIO",
//     "apellido_materno": "ABANTO",
//     "grado": "3ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77516929",
//     "nombre": "DAYIRO JOSUE",
//     "apellido_paterno": "MACCHA",
//     "apellido_materno": "MERCADO",
//     "grado": "3ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77520087",
//     "nombre": "VIERI BAYRON",
//     "apellido_paterno": "AMBROSIO",
//     "apellido_materno": "ALTAMIRANO",
//     "grado": "3ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77523875",
//     "nombre": "VICTOR GABRIEL ALEJANDRO",
//     "apellido_paterno": "RUIZ",
//     "apellido_materno": "MARCHENA",
//     "grado": "3ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77526167",
//     "nombre": "JOEMI MIA HAITANA",
//     "apellido_paterno": "JANAMPA",
//     "apellido_materno": "ORTIZ",
//     "grado": "3ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77527730",
//     "nombre": "JOAQUIN STEFFANO",
//     "apellido_paterno": "LIMAY",
//     "apellido_materno": "FIGUEROA",
//     "grado": "3ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77549309",
//     "nombre": "ARIANNA BRIDGITTE",
//     "apellido_paterno": "HUERTAS",
//     "apellido_materno": "DOMINGUEZ",
//     "grado": "3ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77554278",
//     "nombre": "JES+ÜS MARCOS GABRIEL",
//     "apellido_paterno": "DURAND",
//     "apellido_materno": "BARRIOS",
//     "grado": "3ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77554293",
//     "nombre": "EMANUEL GABRIEL ALBERTO",
//     "apellido_paterno": "DURAND",
//     "apellido_materno": "BARRIOS",
//     "grado": "3ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77581180",
//     "nombre": "ZEUS BROLYN YERICKO YELARCK",
//     "apellido_paterno": "ORRILLO",
//     "apellido_materno": "RUIZ",
//     "grado": "3ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77590686",
//     "nombre": "LUANA DAYLIN",
//     "apellido_paterno": "QUINTO",
//     "apellido_materno": "PORTOCARRERO",
//     "grado": "3ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77592469",
//     "nombre": "MATIAS ALESSANDRO",
//     "apellido_paterno": "TORRES",
//     "apellido_materno": "CASTILLO",
//     "grado": "3ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77596802",
//     "nombre": "SAMUEL FERNANDO",
//     "apellido_paterno": "CONDORI",
//     "apellido_materno": "CHAMBI",
//     "grado": "3ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77598087",
//     "nombre": "ASAEL FRANCISCO",
//     "apellido_paterno": "ALFONSO",
//     "apellido_materno": "QUISPE",
//     "grado": "3ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77604198",
//     "nombre": "ANGELA MILAGRITOS",
//     "apellido_paterno": "VEGA",
//     "apellido_materno": "RAMIREZ",
//     "grado": "3ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77632011",
//     "nombre": "Bryam Alexander",
//     "apellido_paterno": "Burga",
//     "apellido_materno": "Razuri",
//     "grado": "2do de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77640916",
//     "nombre": "ABDIEL TONINO",
//     "apellido_paterno": "TRUJILLO",
//     "apellido_materno": "CUEVA",
//     "grado": "2do de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77643091",
//     "nombre": "VALENTINA LUANA",
//     "apellido_paterno": "ZAPATA",
//     "apellido_materno": "RURUSH",
//     "grado": "2do de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "77645806",
//     "nombre": "EHIMY",
//     "apellido_paterno": "MARTINEZ",
//     "apellido_materno": "SUYON",
//     "grado": "2do de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "77651320",
//     "nombre": "LESLIE MASSIEL",
//     "apellido_paterno": "QUITO",
//     "apellido_materno": "ALVA",
//     "grado": "2do de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "77655953",
//     "nombre": "ZIANELLA FERNANDA",
//     "apellido_paterno": "CASAICO",
//     "apellido_materno": "MOGOLLON",
//     "grado": "2do de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77656070",
//     "nombre": "DANA PAOLA",
//     "apellido_paterno": "DIAZ",
//     "apellido_materno": "LANDACAY",
//     "grado": "2do de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77713215",
//     "nombre": "FABIAN ANTHONY",
//     "apellido_paterno": "TORNERO",
//     "apellido_materno": "QUISPE",
//     "grado": "2do de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77714761",
//     "nombre": "ALESSANDRA PRISCILA",
//     "apellido_paterno": "ZURITA",
//     "apellido_materno": "BLAS",
//     "grado": "2do de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77724334",
//     "nombre": "RUTH ABIGAIL",
//     "apellido_paterno": "CARHUATOCTO",
//     "apellido_materno": "NEIRA",
//     "grado": "2do de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77725546",
//     "nombre": "LUANA YAMILETH",
//     "apellido_paterno": "CAJUSOL",
//     "apellido_materno": "RAMOS",
//     "grado": "2do de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "77738732",
//     "nombre": "NAOMY HARUMY",
//     "apellido_paterno": "VERGARA",
//     "apellido_materno": "MEZA",
//     "grado": "2do de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77741935",
//     "nombre": "KIARA BRITANY",
//     "apellido_paterno": "VALDIVIA",
//     "apellido_materno": "CERON",
//     "grado": "2do de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "77742222",
//     "nombre": "ADRIAN SWITH",
//     "apellido_paterno": "MORALES",
//     "apellido_materno": "BARRETO",
//     "grado": "2do de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77743899",
//     "nombre": "DARIEL JOHAO",
//     "apellido_paterno": "QUISPE",
//     "apellido_materno": "ANCALLA",
//     "grado": "2do de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "77747962",
//     "nombre": "IRENE ARIADNE",
//     "apellido_paterno": "BAZAN",
//     "apellido_materno": "VASQUEZ",
//     "grado": "2do de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77748713",
//     "nombre": "FLAVIA FERNANDA",
//     "apellido_paterno": "GRANADOS",
//     "apellido_materno": "CASTRO",
//     "grado": "2do de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "77751503",
//     "nombre": "FABIANA VALENTINA",
//     "apellido_paterno": "MERGILDO",
//     "apellido_materno": "ROJAS",
//     "grado": "2do de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77752459",
//     "nombre": "NALI YAMILE",
//     "apellido_paterno": "VILLANUEVA",
//     "apellido_materno": "ROJAS",
//     "grado": "2do de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "77752848",
//     "nombre": "MARISSA ALEXANDRA",
//     "apellido_paterno": "RUIZ",
//     "apellido_materno": "BAUTISTA",
//     "grado": "3ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77755934",
//     "nombre": "KRISTELL DARLENE",
//     "apellido_paterno": "MEDRANO",
//     "apellido_materno": "TUPIA",
//     "grado": "2do de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77765930",
//     "nombre": "SEBASTIAN D'ALESSANDRO",
//     "apellido_paterno": "ROCCA",
//     "apellido_materno": "VARGAS",
//     "grado": "2do de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "77768657",
//     "nombre": "JENKO GERARD",
//     "apellido_paterno": "TAFUR",
//     "apellido_materno": "GONZALES",
//     "grado": "2do de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77770710",
//     "nombre": "GERARD XAVIER",
//     "apellido_paterno": "PFENNING",
//     "apellido_materno": "YAMUCA",
//     "grado": "2do de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77773808",
//     "nombre": "MATHIAS EDWARD CESAR",
//     "apellido_paterno": "MONTALVAN",
//     "apellido_materno": "IZQUIERDO",
//     "grado": "2do de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "77775129",
//     "nombre": "MAXIMO ALEXANDER",
//     "apellido_paterno": "RODRIGUEZ",
//     "apellido_materno": "ANDRES",
//     "grado": "2do de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77777176",
//     "nombre": "ZOE LUANA",
//     "apellido_paterno": "SIFUENTES",
//     "apellido_materno": "LOPEZ",
//     "grado": "2do de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77777189",
//     "nombre": "ABIE LUCIANA",
//     "apellido_paterno": "SIFUENTES",
//     "apellido_materno": "LOPEZ",
//     "grado": "2do de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77782231",
//     "nombre": "NAOMY LARISSA",
//     "apellido_paterno": "LOBATO",
//     "apellido_materno": "TINOCO",
//     "grado": "2do de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77784365",
//     "nombre": "LUCIANA FERNANDA",
//     "apellido_paterno": "ESPINOZA",
//     "apellido_materno": "MAMANI",
//     "grado": "2do de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77788010",
//     "nombre": "THIAGO VALENTINO",
//     "apellido_paterno": "FARFAN",
//     "apellido_materno": "QUISPE",
//     "grado": "2do de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77790733",
//     "nombre": "DYLAN IVAN",
//     "apellido_paterno": "SOLANO",
//     "apellido_materno": "SANTILLANA",
//     "grado": "2do de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77825009",
//     "nombre": "ALDO NICOLAS",
//     "apellido_paterno": "RUBIO",
//     "apellido_materno": "VILLARREAL",
//     "grado": "2do de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "77825568",
//     "nombre": "NAYSHA JARUMY",
//     "apellido_paterno": "HUALLANCA",
//     "apellido_materno": "PARDO",
//     "grado": "2do de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "77830358",
//     "nombre": "CESAR SEBASTIAN",
//     "apellido_paterno": "MERE",
//     "apellido_materno": "HUAMAN",
//     "grado": "2do de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77843263",
//     "nombre": "LEONARDO DAVID",
//     "apellido_paterno": "FLORES",
//     "apellido_materno": "LUCUMBER",
//     "grado": "2do de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77843945",
//     "nombre": "ZOE JOHANA",
//     "apellido_paterno": "POLO",
//     "apellido_materno": "TIRADO",
//     "grado": "2do de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77853712",
//     "nombre": "YENIFER YAZURI",
//     "apellido_paterno": "SANDOVAL",
//     "apellido_materno": "JACOME",
//     "grado": "2do de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77855753",
//     "nombre": "THIAGO HERMES",
//     "apellido_paterno": "AGURTO",
//     "apellido_materno": "HUAMAN",
//     "grado": "2do de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "77856920",
//     "nombre": "LUCIANA GUADALUPE",
//     "apellido_paterno": "MEDINA",
//     "apellido_materno": "ALARCON",
//     "grado": "2do de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "77858806",
//     "nombre": "GENESIS LUISA",
//     "apellido_paterno": "ALBINEZ",
//     "apellido_materno": "VALDIVIEZO",
//     "grado": "2do de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77861298",
//     "nombre": "ALIZEE",
//     "apellido_paterno": "CRISPIN",
//     "grado": "2do de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77862112",
//     "nombre": "DULCE MILAGRITO",
//     "apellido_paterno": "ARCOS",
//     "apellido_materno": "SANCHEZ",
//     "grado": "2do de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77863657",
//     "nombre": "CARLOS FABRIZZIO YEREMY",
//     "apellido_paterno": "GUTIERREZ",
//     "apellido_materno": "OSCCO",
//     "grado": "2do de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77864089",
//     "nombre": "CAMYLA ALEXANDRA",
//     "apellido_paterno": "ALARCON",
//     "apellido_materno": "GALLEGOS",
//     "grado": "2do de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "77871332",
//     "nombre": "CELESTE FABIANHE",
//     "apellido_paterno": "CHUNGA",
//     "apellido_materno": "PE+æA",
//     "grado": "2do de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77871393",
//     "nombre": "JAIRO JUAN DAVID",
//     "apellido_paterno": "CANDAMO",
//     "apellido_materno": "PABLO",
//     "grado": "2do de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77872282",
//     "nombre": "ADRIANO GABRIEL",
//     "apellido_paterno": "ROJAS",
//     "apellido_materno": "MEDINA",
//     "grado": "2do de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77879640",
//     "nombre": "BRISA BRIYITH",
//     "apellido_paterno": "TRUJILLO",
//     "apellido_materno": "CASTRO",
//     "grado": "2do de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77883990",
//     "nombre": "YARITZA MAILEN",
//     "apellido_paterno": "VITE",
//     "apellido_materno": "LUGO",
//     "grado": "2do de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "77886395",
//     "nombre": "JOSHUA VIET",
//     "apellido_paterno": "LLANCCE",
//     "apellido_materno": "VELARDE",
//     "grado": "2do de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "77888145",
//     "nombre": "SILVANA DULCE MAR+ìA",
//     "apellido_paterno": "BASILIO",
//     "apellido_materno": "ALVARADO",
//     "grado": "2do de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77891966",
//     "nombre": "JEAMS JOSHUA",
//     "apellido_paterno": "ROSAS",
//     "apellido_materno": "OSCANOA",
//     "grado": "2do de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "77902587",
//     "nombre": "JARED FABIAN",
//     "apellido_paterno": "AGAPITO",
//     "apellido_materno": "DEXTRE",
//     "grado": "2do de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "77926375",
//     "nombre": "DANIELA LUHANA",
//     "apellido_paterno": "CONDORI",
//     "apellido_materno": "GALLO",
//     "grado": "2do de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77928566",
//     "nombre": "RAUL RODRIGO",
//     "apellido_paterno": "VASQUEZ",
//     "apellido_materno": "ORTEGA",
//     "grado": "4to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "77929806",
//     "nombre": "ADRIAN DAYIRO",
//     "apellido_paterno": "FUENTES",
//     "apellido_materno": "CHUMACERO",
//     "grado": "2do de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "77933451",
//     "nombre": "THIAGO VALENTINO",
//     "apellido_paterno": "TAMBO",
//     "apellido_materno": "CHAVEZ",
//     "grado": "2do de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77935145",
//     "nombre": "ANGGIE NICOLLE",
//     "apellido_paterno": "ROMAN",
//     "apellido_materno": "SAAVEDRA",
//     "grado": "2do de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77936315",
//     "nombre": "VALESKA ELIZABETH",
//     "apellido_paterno": "SUAREZ",
//     "apellido_materno": "SEGURA",
//     "grado": "2do de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77937455",
//     "nombre": "THIAGO JADIEL",
//     "apellido_paterno": "LLANTOY",
//     "apellido_materno": "AVILA",
//     "grado": "2do de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "77937969",
//     "nombre": "ANGIE VALENTINA",
//     "apellido_paterno": "FELIX",
//     "apellido_materno": "TRUJILLO",
//     "grado": "2do de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77938695",
//     "nombre": "CARLOS ALEXIS",
//     "apellido_paterno": "CHAMORRO",
//     "apellido_materno": "ABANTO",
//     "grado": "2do de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77948489",
//     "nombre": "YOSMEL SMITH",
//     "apellido_paterno": "DOMINGUEZ",
//     "apellido_materno": "JUAREZ",
//     "grado": "2do de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "77956949",
//     "nombre": "LUCIANA BEL+ëN",
//     "apellido_paterno": "CARHUALLANQUI",
//     "apellido_materno": "NU+æEZ",
//     "grado": "2do de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77958266",
//     "nombre": "ESTRELLA ZURI",
//     "apellido_paterno": "PONCE",
//     "apellido_materno": "LUNA",
//     "grado": "2do de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77962632",
//     "nombre": "SEBASTIAN JOSE",
//     "apellido_paterno": "RIVERA",
//     "apellido_materno": "ALVAREZ",
//     "grado": "2do de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77966396",
//     "nombre": "BRIANNA MISHELL",
//     "apellido_paterno": "MONTEJOS",
//     "apellido_materno": "LIZARZABURO",
//     "grado": "2do de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "77981550",
//     "nombre": "LUIS ARMANDO",
//     "apellido_paterno": "VALENCIA",
//     "apellido_materno": "ALBAN",
//     "grado": "2do de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "77984678",
//     "nombre": "BEHTSABE YANIRE",
//     "apellido_paterno": "JACINTO",
//     "apellido_materno": "GOICOCHEA",
//     "grado": "2do de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "78024722",
//     "nombre": "AHIXA LUANA",
//     "apellido_paterno": "JARAMILLO",
//     "apellido_materno": "HUARANCA",
//     "grado": "2do de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "78030891",
//     "nombre": "LEANDRO YARON",
//     "apellido_paterno": "RUBINA",
//     "apellido_materno": "VILLANUEVA",
//     "grado": "2do de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "78033899",
//     "nombre": "YENEDIDT XIOMARA",
//     "apellido_paterno": "ESPINOZA",
//     "apellido_materno": "REYES",
//     "grado": "2do de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "78035881",
//     "nombre": "PIERO ALONSO",
//     "apellido_paterno": "HUAPAYA",
//     "apellido_materno": "MALDONADO",
//     "grado": "2do de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "78036456",
//     "nombre": "STEPHANO ALESSANDRO",
//     "apellido_paterno": "PACHECO",
//     "apellido_materno": "IZQUIERDO",
//     "grado": "2do de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "78036763",
//     "nombre": "ISMAEL JOAKIN NEYI",
//     "apellido_paterno": "RUFINO",
//     "apellido_materno": "ZAMORA",
//     "grado": "2do de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "78037454",
//     "nombre": "ANA LUCIA",
//     "apellido_paterno": "ARELLANO",
//     "apellido_materno": "ESTRADA",
//     "grado": "2do de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "78048862",
//     "nombre": "FABRICIO JAIR",
//     "apellido_paterno": "CALLE",
//     "apellido_materno": "NU+æEZ",
//     "grado": "2do de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "78050834",
//     "nombre": "ZAEL XAVIER",
//     "apellido_paterno": "HUAMAN",
//     "apellido_materno": "MARTINEZ",
//     "grado": "2do de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "78060952",
//     "nombre": "THIAGO DAYRON",
//     "apellido_paterno": "LEON",
//     "apellido_materno": "CHUMBE",
//     "grado": "2do de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "78063836",
//     "nombre": "JUAN DIEGO",
//     "apellido_paterno": "COLLAZOS",
//     "apellido_materno": "HUILLCAYA",
//     "grado": "1ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "78067628",
//     "nombre": "JOS+ë FRANCISCO",
//     "apellido_paterno": "COLAN",
//     "apellido_materno": "ANGULO",
//     "grado": "1ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "78077588",
//     "nombre": "DARINE NAYELI",
//     "apellido_paterno": "AGUILA",
//     "apellido_materno": "GUERRERO",
//     "grado": "1ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "78078530",
//     "nombre": "LEONARDO SEBASTIAN",
//     "apellido_paterno": "YAMPUFE",
//     "apellido_materno": "GALINDO",
//     "grado": "1ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "78082032",
//     "nombre": "LUANA CAMILA",
//     "apellido_paterno": "VALENCIA",
//     "apellido_materno": "JULCAHUANCA",
//     "grado": "1ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "78086524",
//     "nombre": "JAIRO MIGUEL",
//     "apellido_paterno": "ORE",
//     "apellido_materno": "MONTENEGRO",
//     "grado": "1ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "78086684",
//     "nombre": "KARLA AKHANIRY",
//     "apellido_paterno": "CHACALIAZA",
//     "apellido_materno": "MINA",
//     "grado": "1ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "78096644",
//     "nombre": "DARLYN KIOMY ANAHI",
//     "apellido_paterno": "HUAMAN",
//     "apellido_materno": "URIBE",
//     "grado": "1ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "78137905",
//     "nombre": "ANA LIA",
//     "apellido_paterno": "ARANGO",
//     "apellido_materno": "RUEDA",
//     "grado": "1ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "78149040",
//     "nombre": "ALESSANDRO JOSHUA",
//     "apellido_paterno": "LEONARDO",
//     "apellido_materno": "CASTRO",
//     "grado": "1ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "78166272",
//     "nombre": "CRISTOPHER NO+ë ALESSANDRO",
//     "apellido_paterno": "GRIMANI",
//     "apellido_materno": "PINTADO",
//     "grado": "1ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "78167714",
//     "nombre": "MATHIAS OMAR",
//     "apellido_paterno": "RAMON",
//     "apellido_materno": "SUCLUPE",
//     "grado": "1ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "78167721",
//     "nombre": "EMILIO GABRIEL",
//     "apellido_paterno": "LAZO",
//     "apellido_materno": "ACU+æA",
//     "grado": "1ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "78171279",
//     "nombre": "JAIR PATRICK",
//     "apellido_paterno": "ROJAS",
//     "apellido_materno": "VILCHEZ",
//     "grado": "1ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "78172885",
//     "nombre": "JOSEPH",
//     "apellido_paterno": "GALVAN",
//     "apellido_materno": "PRUDENCIO",
//     "grado": "1ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "78176991",
//     "nombre": "BRIGITH DALESKA",
//     "apellido_paterno": "ORTEGA",
//     "apellido_materno": "PORTAL",
//     "grado": "1ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "78177849",
//     "nombre": "CARLY NAIARA",
//     "apellido_paterno": "MILLAN",
//     "apellido_materno": "FUENTES",
//     "grado": "2do de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "78178371",
//     "nombre": "VICTOR MANUEL",
//     "apellido_paterno": "MARTINEZ",
//     "apellido_materno": "FLORES",
//     "grado": "1ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "78189316",
//     "nombre": "JHORDAN FABIAN",
//     "apellido_paterno": "ANAYA",
//     "apellido_materno": "SALDA+æA",
//     "grado": "1ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "78207915",
//     "nombre": "JOSE ALESSANDRO",
//     "apellido_paterno": "MORE",
//     "apellido_materno": "CHAPA",
//     "grado": "1ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "78212277",
//     "nombre": "THIAGO ALESSANDRO",
//     "apellido_paterno": "PACHAS",
//     "apellido_materno": "HUAMAN",
//     "grado": "1ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "78216494",
//     "nombre": "SEBASTIAN ESTEFAN GABRIEL",
//     "apellido_paterno": "SALAZAR",
//     "apellido_materno": "SANCHEZ",
//     "grado": "1ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "78237637",
//     "nombre": "MIKEYLA SHARITH",
//     "apellido_paterno": "VALENCIA",
//     "apellido_materno": "VASQUEZ",
//     "grado": "1ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "78241212",
//     "nombre": "MADISSON SOPHIA",
//     "apellido_paterno": "SALVA",
//     "apellido_materno": "SOLIS",
//     "grado": "1ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "78249767",
//     "nombre": "JOSE MATEO",
//     "apellido_paterno": "ZEGARRA",
//     "apellido_materno": "GUILLEN",
//     "grado": "1ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "78253112",
//     "nombre": "DYLAN AXEL",
//     "apellido_paterno": "TRUJILLO",
//     "apellido_materno": "CUEVA",
//     "grado": "1ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "78272245",
//     "nombre": "JATZHIRY SHARICK ALESSIA",
//     "apellido_paterno": "SILVESTRE",
//     "apellido_materno": "ARIAS",
//     "grado": "1ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "78277788",
//     "nombre": "HANNA ARLETE",
//     "apellido_paterno": "PAUCARA",
//     "apellido_materno": "FABIAN",
//     "grado": "1ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "78282878",
//     "nombre": "MARJORIE JUCIELY ADRIANA",
//     "apellido_paterno": "VALDERRAMA",
//     "apellido_materno": "PANIURA",
//     "grado": "1ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "78294744",
//     "nombre": "ARIANA KAHORY",
//     "apellido_paterno": "NOYA",
//     "apellido_materno": "ORTIZ",
//     "grado": "1ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "78313920",
//     "nombre": "AMILET MARILYN",
//     "apellido_paterno": "MEDRANO",
//     "apellido_materno": "TUPIA",
//     "grado": "1ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "78322040",
//     "nombre": "JENIFER ANGELINA",
//     "apellido_paterno": "CAJUSOL",
//     "apellido_materno": "RAMOS",
//     "grado": "1ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "78333307",
//     "nombre": "JOAQUIN MATEO",
//     "apellido_paterno": "PE+æA",
//     "apellido_materno": "BARRIOS",
//     "grado": "1ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "78339067",
//     "nombre": "VANIA GRACCE NOELIA",
//     "apellido_paterno": "MATOS",
//     "apellido_materno": "ALARCON",
//     "grado": "1ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "78343331",
//     "nombre": "KARISSA ALEXANDRA",
//     "apellido_paterno": "JAIMES",
//     "apellido_materno": "TINOCO",
//     "grado": "1ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "78344338",
//     "nombre": "ELIAS FABIAN",
//     "apellido_paterno": "MEZA",
//     "apellido_materno": "MORAN",
//     "grado": "1ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "78354592",
//     "nombre": "SHANTAL PRINCELA XOANA",
//     "apellido_paterno": "CHINO",
//     "apellido_materno": "TORRES",
//     "grado": "1ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "78358481",
//     "nombre": "THIAGO FABRITZIO",
//     "apellido_paterno": "ESPINOZA",
//     "apellido_materno": "MAMANI",
//     "grado": "1ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "78379649",
//     "nombre": "WALLY JOAO",
//     "apellido_paterno": "MORALES",
//     "apellido_materno": "ROJAS",
//     "grado": "1ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "78387020",
//     "nombre": "ABIGAIL ESTEFANY",
//     "apellido_paterno": "PACAYA",
//     "apellido_materno": "ROMAN",
//     "grado": "1ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "78406087",
//     "nombre": "THIAGO JADIEL",
//     "apellido_paterno": "COBE+æAS",
//     "apellido_materno": "SALVADOR",
//     "grado": "1ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "78406437",
//     "nombre": "AISHA DENIZ",
//     "apellido_paterno": "ELESCANO",
//     "apellido_materno": "CASTRO",
//     "grado": "1ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "78409254",
//     "nombre": "FAVIO OSWALDO",
//     "apellido_paterno": "FLORES",
//     "apellido_materno": "DOMINGUEZ",
//     "grado": "1ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "78409262",
//     "nombre": "DEREK ALEXANDER",
//     "apellido_paterno": "FLORES",
//     "apellido_materno": "DOMINGUEZ",
//     "grado": "1ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "78412152",
//     "nombre": "HANNA ELENA MASSIEL",
//     "apellido_paterno": "QUISPE",
//     "apellido_materno": "SEGUNDO",
//     "grado": "1ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "78434487",
//     "nombre": "KIMBERLY ARIELA",
//     "apellido_paterno": "DE LA CRUZ",
//     "apellido_materno": "LEON",
//     "grado": "1ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "78435986",
//     "nombre": "VICTORIA ESTEFANIA",
//     "apellido_paterno": "ARCE",
//     "apellido_materno": "VARA",
//     "grado": "1ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "78438598",
//     "nombre": "YESSICA SAORY",
//     "apellido_paterno": "REQUEJO",
//     "apellido_materno": "LAZARO",
//     "grado": "1ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "78454308",
//     "nombre": "FABIANNE SHANTAL",
//     "apellido_paterno": "YANAC",
//     "apellido_materno": "CASTILLO",
//     "grado": "1ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "78469564",
//     "nombre": "FLAVIO ANDR+ë",
//     "apellido_paterno": "DOMINGUEZ",
//     "apellido_materno": "ROJAS",
//     "grado": "1ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "78472530",
//     "nombre": "KRIS MARTI",
//     "apellido_paterno": "CHAVEZ",
//     "apellido_materno": "MARIN",
//     "grado": "1ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "78485208",
//     "nombre": "ERIKA JASMIN",
//     "apellido_paterno": "ORELLANO",
//     "apellido_materno": "REYES",
//     "grado": "1ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "78510356",
//     "nombre": "RANDALL HANSS",
//     "apellido_paterno": "NAVEROS",
//     "apellido_materno": "TUPIA",
//     "grado": "1ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "78516466",
//     "nombre": "EYAL NIHUSHING",
//     "apellido_paterno": "CARLIN",
//     "apellido_materno": "FLORES",
//     "grado": "1ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "78534265",
//     "nombre": "YOSHIRO MATHIAS",
//     "apellido_paterno": "MARI+æOS",
//     "apellido_materno": "MONDRAGON",
//     "grado": "1ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "78615781",
//     "nombre": "JEANPIER JOAQUIN",
//     "apellido_paterno": "VARGAS",
//     "apellido_materno": "CARRANZA",
//     "grado": "4to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "78656967",
//     "nombre": "GHYA LUCIANA",
//     "apellido_paterno": "RUIZ",
//     "apellido_materno": "ZAFRA",
//     "grado": "1ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "78693426",
//     "nombre": "ARIANA GIANELLA",
//     "apellido_paterno": "DIONICIO",
//     "apellido_materno": "PUYEN",
//     "grado": "1ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "78872209",
//     "nombre": "ARIANA LINDSEY",
//     "apellido_paterno": "RAMIREZ",
//     "apellido_materno": "SILVA",
//     "grado": "2do de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "78937812",
//     "nombre": "BENJAMIN SANTIAGO",
//     "apellido_paterno": "INCHE",
//     "apellido_materno": "VALENCIA",
//     "grado": "1ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "79311873",
//     "nombre": "KERRY JANKO",
//     "apellido_paterno": "RODRIGUEZ",
//     "apellido_materno": "AHUANARI",
//     "grado": "4to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "79430308",
//     "nombre": "FABRIZZIO MARCELO",
//     "apellido_paterno": "VALERO",
//     "apellido_materno": "LAUREANO",
//     "grado": "3ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "79446376",
//     "nombre": "DIAMDRA POLETH",
//     "apellido_paterno": "SILVA",
//     "apellido_materno": "VALERIO",
//     "grado": "3ro de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "80978150",
//     "nombre": "MATHIAS JASIEL",
//     "apellido_paterno": "OSORES",
//     "apellido_materno": "DANOS",
//     "grado": "2do de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "80996988",
//     "nombre": "JOHAO ESTEPHANO",
//     "apellido_paterno": "HERRERA",
//     "apellido_materno": "DANOS",
//     "grado": "2do de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "81236005",
//     "nombre": "ALEXANDER ANDRE LENNY",
//     "apellido_paterno": "SANTIAGO",
//     "apellido_materno": "AURELIO",
//     "grado": "2do de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "81543565",
//     "nombre": "CRISTELL AKEMI",
//     "apellido_paterno": "BENITO",
//     "apellido_materno": "SOTELO",
//     "grado": "1ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "81657600",
//     "nombre": "GADIEL FRANCISCO",
//     "apellido_paterno": "CUBAS",
//     "apellido_materno": "MANRIQUE",
//     "grado": "5to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "81715231",
//     "nombre": "KIARA",
//     "apellido_paterno": "VILLALOBOS",
//     "apellido_materno": "GOMEZ",
//     "grado": "4to de Secundaria",
//     "seccion": "B"
//   },
//   {
//     "dni": "81715232",
//     "nombre": "ILLARY",
//     "apellido_paterno": "VILLALOBOS",
//     "apellido_materno": "GOMEZ",
//     "grado": "4to de Secundaria",
//     "seccion": "C"
//   },
//   {
//     "dni": "91237666",
//     "nombre": "EVANZ EYAL",
//     "apellido_paterno": "AUCCAPUCLLA",
//     "apellido_materno": "BASURTO",
//     "grado": "1ro de Secundaria",
//     "seccion": "A"
//   },
//   {
//     "dni": "91518264",
//     "nombre": "MIA CELESTE",
//     "apellido_paterno": "AYALA",
//     "apellido_materno": "BRAVO",
//     "grado": "5to de Secundaria",
//     "seccion": "C"
//   }
// ]