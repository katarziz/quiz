const questions = [
	{//0
		questionText: 'Bist du Schüler?',
		answerOptions: [
			{ answerText: 'Ja', value: 0 },
			{ answerText: 'Nein', value: 1 },
		],
	},
	{//1
		questionText: 'In welche Stufe gehst du?',
		answerOptions: [
			{ answerText: 'Unterstufe', value: 0 },
			{ answerText: 'Mittelstufe', value: 0 },
			{ answerText: 'Oberstufe', value: 0 },
		],
	},
	{//2
		questionText: 'An welche Schule gehst du?',
		answerOptions: [
			{ answerText: 'Das HGV', value: 0 },
			{ answerText: 'Ein anderes Gymnasium', value: 0 },
			{ answerText: 'Eine Realschule', value: 0 },
			{ answerText: 'Eine Hauptschule', value: 0 },
			{ answerText: 'Etwas anderes', value: 0 },
		],
	},
	{//3
		questionText: 'Ist deine Familie wohlhabend?',
		answerOptions: [
			{ answerText: 'Ja, Geld spielt bei uns keine Rolle', value: 0 },
			{ answerText: 'Eher durchschnittlich, aber keine finanziellen Probleme', value: 0 },
			{ answerText: 'Nein, meine Eltern sind eher sparsam', value: 0 },
		],
	},
	{//4
		questionText: 'Warst du schon einmal auf einer Klimademo?',
		answerOptions: [
			{ answerText: 'Nein, noch nie', value: 0 },
			{ answerText: 'Ja, einmal', value: 0 },
			{ answerText: 'Ja, sogar mehrmals', value: 0 },
		],
	},
	{//5
		questionText: 'Wie ernährst du dich?',
		answerOptions: [
			{ answerText: 'Vegan', value: 1 },
			{ answerText: 'Vegetarisch', value: 1 },
			{ answerText: 'Fleisch', value: 0 },
		],
	},
	{//6
		questionText: 'Wie oft in der Woche isst du Fleisch?',
		answerOptions: [
			{ answerText: '1-2 Tage', value: 3 },
			{ answerText: '2-4 Tage', value: 6 },
			{ answerText: '4-7 Tage', value: 12 },
		],
	},
	{//7
		questionText: 'Wie viel Fleisch isst du an diesen Tagen?',
		answerOptions: [
			{ answerText: 'reduzierter Fleischkonsum', value: 8 },
			{ answerText: 'normaler Fleischkonsum', value: 23 },
			{ answerText: 'erhöhter Fleischkonsum', value: 52 },
		],
	},
	{//8
		questionText: 'Nimmst du Milchprodukte zu dir?',
		answerOptions: [
			{ answerText: 'Ja', value: 78 },
			{ answerText: 'Nein', value: 0 },
			{ answerText: 'Milchersatzprodukte', value: 8 },
		],
	},
	{//9
		questionText: 'Was würdest du machen, wenn ein Gerät (z.B. Handy) kaputt geht?',
		answerOptions: [
			{ answerText: 'Ein neues kaufen', value: 67 },
			{ answerText: 'Es reparieren lassen', value: 15 },
			{ answerText: 'Ein gebrauchtes Gerät kaufen', value: 24 },
		],
	},
	{//10
		questionText: 'Wie viel Wohnfläche hat deine Wohnung/Haus schätzungsweise?',
		answerOptions: [
			{ answerText: 'weniger als 75 Quadratmeter', value: 50 },
			{ answerText: 'weniger als 125 Quadratmeter', value: 100 },
			{ answerText: 'mehr als 125 Quadratmeter', value: 150 },
			{ answerText: 'Weiß ich nicht', value: 65 },
		],
	},
	{//11
		questionText: 'Wie alt ist dein Haus?',
		answerOptions: [
			{ answerText: 'weniger als 25 Jahre', value: 13 },
			{ answerText: '25 bis 50 Jahre', value: 21 },
			{ answerText: 'mehr als 50 Jahre', value: 23 },
			{ answerText: 'Weiß ich nicht', value: 21 },
		],
	},
	{//12
		questionText: 'Mit was heizt du?',
		answerOptions: [
			{ answerText: 'Öl/Gas', value: 3 },
			{ answerText: 'Elektrisch', value: 6},
			{ answerText: 'keins von beidem', value: 1 },
		],
	},
	{//13
		questionText: 'Wie oft fliegst du in einem Jahr?',
		answerOptions: [
			{ answerText: 'Nie', value: 0 },
			{ answerText: 'Selten', value: 500},
			{ answerText: 'Oft', value: 1000},
		],
	},
	{//14
		questionText: 'Wie oft fliegst du innerhalb von Europa?',
		answerOptions: [
			{ answerText: 'Nie', value: 0},
			{ answerText: 'Selten', value: 1500},
			{ answerText: 'Oft', value: 3000},
		],
	},
	{//15
		questionText: 'Wie oft fliegst du international?',
		answerOptions: [
			{ answerText: 'Nie', value: 0},
			{ answerText: 'Selten', value: 4000},
			{ answerText: 'Oft', value: 12000},
		],
	},
	{//16
		questionText: 'Wie viele Kleidungsstücke kaufst du im Jahr?',
		answerOptions: [
			{ answerText: 'weniger als fünf', value: 1 },
			{ answerText: 'fünf bis zehn', value: 2 },
			{ answerText: 'zehn bis fünfzehn', value: 3 },
			{ answerText: 'fünfzehn bis zwanzig', value: 4 },
			{ answerText: 'Weiß ich nicht', value: 2 },
		],
	},
	{//17
		questionText: 'Bestehen deine Klamotten eher aus Baumwolle oder Kunstfaser?',
		answerOptions: [
			{ answerText: 'Baumwolle', value: 3 },
			{ answerText: 'Kunstfaser', value: 7 },
			{ answerText: 'Weiß ich nicht', value: 5 },
		],
	},
	{//18
		questionText: 'Kaufst du eher neu oder second hand?',
		answerOptions: [
			{ answerText: 'neu', value: 4 },
			{ answerText: 'second hand', value: 1 },
		],
	},
	{//19
		questionText: 'Wie lang ist dein Schulweg?',
		answerOptions: [
			{ answerText: 'unter einem Kilometer', value: 0 },
			{ answerText: 'ein bis fünf Kilometer', value: 1 },
			{ answerText: 'fünf bis zehn Kilometer', value: 2 },
			{ answerText: 'mehr als zehn Kilometer', value: 3 },
		],
	},
	{//20
		questionText: 'Wie kommst du zur Schule?',
		answerOptions: [
			{ answerText: 'Mit dem Fahrrad', value: 0 },
			{ answerText: 'Mit dem Auto', value: 10 },
			{ answerText: 'Mit den Öffentlichen', value: 4 },
		],
	},
	{//21
		questionText: 'Aus welcher Klasse kommt dein/das Auto deiner Eltern?',
		answerOptions: [
			{ answerText: 'Kleinwagen', value: 9 },
			{ answerText: 'Mittelklasse', value: 10 },
			{ answerText: 'Oberklasse', value: 14 },
		],
	},
]

export default questions;