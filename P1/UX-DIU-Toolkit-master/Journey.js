/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */
/*          [DIU] UX Toolkit v1.0 2019     */
/*          ver 1.1 26/Feb/2020            */
/*******************************************/

/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) {
		$scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";

		$scope.JourneyIndex = 0;

        $scope.Journeys = [
			{

                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/

				Id: 0,
				Name: "Lucas",
                Photo: "lucas.jpg",

                /*** PASO #1: INSPIRACION ***/
                goal1: "quiere organizar un pequeño viaje con sus compañeros a Granada",
                touch1: "agenda",
                feel1: "2",
                con1: "comprobar si su trabajo le va a poder permitir irse",
                ima1: "cartoon-planning.png",

                /*** PASO #2: DECICION ***/
                goal2: "Comienza a buscar fecha",
                touch2: "Movil",
                feel2: "1",
                con2: "Debido a su poca disponibilidad por el trabajo, no tiene muchas opciones y las que hay no le gustan mucho. Además la página web no ayuda mucho con el formato del dinero y la distancia",
                ima2: "cartoon-PCangry.png",

                /*** PASO #3: ACTUA ***/

                goal3: "Encuentra un hostal en la playa",
                touch3: "móvil (el tiempo)",
                feel3: "2",
                con3: "Está preocupado por el tiempo y la página no ofrece más opciones .",
                ima3: "cartoon-phone.png",

                /*** PASO #4: OBSERVA ***/

                goal4: "Mira la predicción metereológica de ese día",
                touch4: "ordenador",
                feel4: "2",
                con4: "Anuncian que puede que sea mala",
                ima4: "cartoon-PCtyping.png",

                 /*** PASO #5: ANALIZA ***/

                goal5: "Piensa si debería correr el riesgo",
                touch5: "móvil (whatsapp)",
                feel5: "3",
                con5: "Llama a sus compañeros para saber su opinión",
                ima5: "cartoon-phoning.png",


                /*** PASO #6: CONCLUSION ***/

                goal6: "Se cancela el plan",
                touch6: "ordenador",
                feel6: "1",
                con6: "Algunos compañeros no se fían del tiempo y hay poca disponibilidad y falta de opciones.",
                ima6: "cartoon-resting.png",

			},
			{
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/

				Id: 1,
        Name: "Andrea",
                Photo: "chica1.jpg",

				 /*** PASO #1: INSPIRACION ***/
                goal1: "Tras mucho tiempo ahorrando, va a conseguir su sueño de viajar por Europa con sus hijas. Consigue alquilar una autocaravana a buen precio.",
                touch1: "agenda",
                feel1: "1",
                con1: "Habla con su ex para intentar cuadrar la custodia de las hijas.",
                ima1: "cartoon-going.png",

                /*** PASO #2: DECICION ***/
                goal2: "Busca entre varias aplicaciones y webs y acaba encontrando RoadTrippers.",
                touch2: "Móvil (webapp)",
                feel2: "4",
                con2: "Encuentra interesante que le da la posibilidad de añadir planes dentro de la ruta aunque le molesta que las distancias y precios estén en millas y dólares.",
                ima2: "cartoon-teamthinking.png",

                /*** PASO #3: ACTUA ***/

                goal3: "Decide utilizar esta web para realizar el itinerario.",
                touch3: "Móvil (llamada)",
                feel3: "2",
                con3: "Su interfaz desordenada y barroca le molesta además de que está en inglés y ella no sabe casi nada de inglés.",
                ima3: "cartoon-phoningangry.png",

                /*** PASO #4: OBSERVA ***/

                goal4: "Al final decide hacer el viaje solo por España y Francia ya que ve que va a ser un viaje muy largo.",
                touch4: "Móvil (webapp)",
                feel4: "4",
                con4: "",
                ima4: "cartoon-phone-street.png",

                 /*** PASO #5: ANALIZA ***/

                goal5: "Reserva a traves de la aplicación ",
                touch5: "Móvil (webapp)",
                feel5: "3",
                con5: "Descubre que a partir de 5 puntos tiene que comenzar a pagar, lo cual no le gusta mucho pero accede.",
                ima5: "cartoon-phone-sitting.png",


                /*** PASO #6: CONCLUSION ***/

                goal6: "Consigue reservar para vacaciones con éxito!",
                touch6: "Ordenador (reserva OK)",
                feel6: "4",
                con6: "Tendrá que buscar más información de los lugares para ver que actividades ofrecen y sitios más representativos.",
                ima6: "cartoon-PChard.png",



			}
		];

		$scope.model = $scope.Journeys[0];

	}])
