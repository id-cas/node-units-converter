/**
 * Created by Cowork-2 on 05.08.16.
 */
module.exports = Object({
	units: ['mm', 'cm', 'm', 'inch', 'ft', '°',
			'mm2', 'cm2', 'm2', 'inch2', 'ft2',
			'mm3', 'cm3', 'm3', 'inch3', 'ft3'],

	unitInMeter: {
		'mm': 0.001,
		'cm': 0.01,
		'm': 1,
		'inch': 0.0254,
		'ft': 0.3048,

		'mm2': 0.000001,
		'cm2': 0.0001,
		'm2': 1,
		'inch2': 0.00064516,
		'ft2': 0.09290304,

		'mm3': 0.000000001,
		'cm3': 0.000001,
		'm3': 1,
		'inch3': 0.000016387064,
		'ft3': 0.028316846592
	},


	roundVal: function(value, units) {
		/**
		 * Округляет значение до первого знака после запятой в зависимости от ед. измерения
		 *
		 * units:  'mm', 'cm', 'm', 'inch', 'ft', '°', 'm2', 'm3'
		 */
		var precision = 0;
		switch(units){
//			case 'mm':   precision = 0; break;
//			case 'cm':   precision = 1; break;
//			case 'm':    precision = 3; break;
//			case 'inch': precision = 2; break;
//			case 'ft':   precision = 3; break;
//			case '°':    precision = 1; break;


			case 'mm':   precision = 1; break;
			case 'cm':   precision = 2; break;
			case 'm':    precision = 4; break;
			case 'inch': precision = 3; break;
			case 'ft':   precision = 4; break;
			case '°':    precision = 2; break;

			case 'mm2':
			case 'cm2':
			case 'm2':
			case 'inch2':
			case 'ft2':

			case 'mm3':
			case 'cm3':
			case 'm3':
			case 'inch3':
			case 'ft3':  precision = 3; break;

			case 'kg':
			case 'tonn':
			case 'Pa':
			case 'kPa':  precision = 2; break;

			default:     precision = 0; break;
		}

		return Number(Number(value).toFixed(precision));
	},

	meter2unit: function(meterVal, unitsId){
		/**
		 * Преобразует единицы измерения
		 *
		 * meterVal: значение переданное в МЕТРАХ
		 * unitsId: единица измерения в которую следует преобразовать величину
		 * 0 - 'mm', 1 - 'cm', 2 - 'm', 3 - 'inch', 4 - 'ft'
		 */
		var units = this.getUnitById(unitsId);

		if(units == 'm') {
			return this.roundVal(meterVal, units);
		}
		else{
			return this.roundVal(meterVal / this.unitInMeter[units], units);
		}
	},

	perMeter2perUnit: function(meterVal, unitsId){
		/**
		 * Преобразует единицы измерения для п.м.
		 *
		 * meterVal: значение переданное в МЕТРАХ
		 * unitsId: единица измерения в которую следует преобразовать величину
		 * 0 - 'mm', 1 - 'cm', 2 - 'm', 3 - 'inch', 4 - 'ft'
		 */
		var units = this.getUnitById(unitsId);

		if(units == 'm') {
			return meterVal;
		}
		else{
			return meterVal * this.unitInMeter[units];
		}
	},

	meter22unit2: function(meter2Val, units2){
		/**
		 * Преобразует единицы измерения
		 *
		 * meterVal: значение переданное в МЕТРАХ
		 * units3: единица измерения в которую следует преобразовать величину
		 * 0 - 'mm3', 1 - 'cm3', 2 - 'm3', 3 - 'inch3', 4 - 'ft3'
		 */

		if(units2 == 'm3') {
			return meter2Val;
		}
		else{
			return meter2Val / this.unitInMeter[units2];
		}
	},

	meter32unit3: function(meter3Val, units3){
		/**
		 * Преобразует единицы измерения
		 *
		 * meterVal: значение переданное в МЕТРАХ
		 * units3: единица измерения в которую следует преобразовать величину
		 * 0 - 'mm3', 1 - 'cm3', 2 - 'm3', 3 - 'inch3', 4 - 'ft3'
		 */

		if(units3 == 'm3') {
			return meter3Val;
		}
		else{
			return meter3Val * this.unitInMeter[units3];
		}
	},


	unit2meter: function(unitVal, unitsId){
		/**
		 * Преобразует единицы измерения
		 *
		 * unitVal: значение переданное в UNIT
		 * units: единица измерения из которой следует преобразовать величину
		 * 0 - 'mm', 1 - 'cm', 2 - 'm', 3 - 'inch', 4 - 'ft'
		 */
		var units = this.getUnitById(unitsId);

		if(units == 'm') {
			return this.roundVal(unitVal, 'm');
		}
		else{
			return this.roundVal(unitVal * this.unitInMeter[units], 'm');
		}
	},


	unit32meter3: function(unit3Val, units3){
		/**
		 * Преобразует единицы измерения
		 *
		 * meterVal: значение переданное в МЕТРАХ
		 * units3: единица измерения в которую следует преобразовать величину
		 * 0 - 'mm3', 1 - 'cm3', 2 - 'm3', 3 - 'inch3', 4 - 'ft3'
		 */

		if(units3 == 'm3') {
			return unit3Val;
		}
		else{
			return unit3Val * this.unitInMeter[units3];
		}

	},

	unit22meter2: function(unit2Val, units2){
		/**
		 * Преобразует единицы измерения
		 *
		 * meterVal: значение переданное в МЕТРАХ
		 * units3: единица измерения в которую следует преобразовать величину
		 * 0 - 'mm3', 1 - 'cm3', 2 - 'm3', 3 - 'inch3', 4 - 'ft3'
		 */

		if(units2 == 'm3') {
			return unit2Val;
		}
		else{
			return unit2Val * this.unitInMeter[units2];
		}

	},

	unit2: function(unitVal, units){
		/**
		 * Преобразует единицы измерения площади в соответсвии с Имперскими единицами измерения или СИ
		 *
		 * unitVal: значение переданное в UNIT
		 * units: единица измерения из которой следует преобразовать величину
		 */
		if(units == 'inch2' || units == 'ft2') {
			return this.roundVal(unitVal, units);
		}
		else{
			return this.roundVal(unitVal * this.unitInMeter[units], 'm2');
		}
	},

	unit3: function(unitVal, units){
		/**
		 * Преобразует единицы измерения объема в соответсвии с Имперскими единицами измерения или СИ
		 *
		 * unitVal: значение переданное в UNIT
		 * units: единица измерения из которой следует преобразовать величину
		 */
		if(units == 'inch3' || units == 'ft3') {
			return this.roundVal(unitVal, units);
		}
		else{
			return this.roundVal(unitVal * this.unitInMeter[units], 'm3');
		}
	},

	getUnitById: function(id){
		return this.units[id];
	},

	unit2unit: function(val, srcUnitsId, dstUnitsId){
		return this.meter2unit(this.unit2meter(val, srcUnitsId), dstUnitsId);
	},

	getUnitId: function(units){
		return this.units.indexOf(units);
	},

	normalizeMeterIfInch: function(unitValMeter, unitsId){
		/**
		 * Нормирует метры в целое представление дюймов или футов
		 *
		 * unitValMeter: значение в метрах
		 * unitsId: единицы измерения
		 */

		var units = this.getUnitById( unitsId );
		if( units !== 'inch' && units !== 'ft') return unitValMeter;


		// Переведем метры в дюймы или футы
		var	unitValUnits = this.meter2unit(unitValMeter, unitsId);


		// Получим целое число футов или дюймов и преобразуем их обратно в метры
		var roundedVal = 0;
		if( units === 'inch' ) roundedVal = Math.round( unitValUnits );
		else if( units === 'ft' ) roundedVal = Math.round( unitValUnits * 10 ) / 10;

		return this.unit2meter( roundedVal, unitsId);
	}
});