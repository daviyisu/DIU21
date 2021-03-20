/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */
/*          [DIU] UX Toolkit v1.0 2019    */
/*          ver 1.1 26/Feb/2020            */
/*******************************************/

/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) {
        $scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";

		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{


                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/


				Id: 0,
				Name: "Lucas",
				Photo: "lucas.jpg",
				Quote: "Siempre busca la mejor version de ti",
				Age: 35,
				Occupation: "Contable en una consultoría",
				Family: "Soltero",
				Location: "Ciudad Real, España",
				Character: "Le gusta conocer gente",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 1 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				],
				Goals: ["Recuperar el tiempo perdido con sus compañeros", "Escalar puestos dentro de su trabajo", "Sentir que destaca entre sus compañeros"],
				Frustrations: ["Muchas veces no consigue lo que se propone", "Su trabajo le quita bastante tiempo", "Le gustaría hacer más ejercicio"],
				Bio: "Lucas entró en la Facultad de Contabilidad de Ciudad Real en cuanto pudo. Allí intentó destacar de los demás pero no lo consiguió. Cuando acabó la carrera encontró trabajos en diversos sitios hasta acabar en la consultoría donde trabaja. El trabajo le quita demasiado tiempo para socializar por lo que en los últimos años no ha avanzado mucho en ese aspecto pero últimamente ha intentado darle un giro a su vida en ese aspecto y se ha acercado más a sus compañeros de trabajo.",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Movil", Value: 3 },
					{ Name: "RRSS", Value: 1 },
					{ Name: "Software", Value: 4 }

				],
                Contextos: "Últimamente ha intentado conectar con sus compañeros y les gustaría proponerle algún pequeño viaje.",
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 4 },
					{ Name: "Online & Social Media", Value: 3 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 1 }
				]
			},
			{

                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/


				Id: 1,
        Name: "Andrea",
				Photo: "chica1.jpg",
				Quote: "Si dejas salir tus miedos, tendrás más espacio para cumplir tus sueños.",
				Age: 32,
				Occupation: "Periodista en Radio Alicante, de Cadena Ser.",
				Family: "Divorciada y con dos hijas, (6 y 8 años).",
				Location: "Alicante, Alicante",
				Character: "Es una persona muy activa siempre le gusta estar haciendo cosas.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 1 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 5 }
				],
				Goals: ["Dirigir su propio programa de entrevistas.", "Le encantaría viajar a Perú", "Sueña con viajar con sus hijas por Europa en autocaravana."],
				Frustrations: ["Detesta el desorden", "Le gustaría tener más tiempo libre para dedicarselo a ella."],
				Bio: "Soy de México pero llevo viviendo en España desde los seis años. Estudié periodismo en la universidad de Valencia, y desde que acabé fui encontrando trabajos temporales de cosas que no son de mi carrera. Hace 4 años entré en Radio Alicante y estoy muy contenta con mi trabajo y compañeros aunque aspiro a dirigir mi propio programa en el futuro.",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Movil", Value: 2 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 2 }

				],
                Contextos: "Lleva un tiempo teniendo una separación difícil con su ex, tema abogados, etc. y necesita unas vacaciones.",
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 2 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])
