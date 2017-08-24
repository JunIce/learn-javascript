Object
	参数：
	{[nameValuePair1[, nameValuePair2[, ...nameValuePairN]]]}

	prototype
	 	__proto__:
	 		一个访问器属性（一个getter函数和一个setter函数）, 
	 		__proto__的读取器(getter)暴露了一个对象的内部 [[Prototype]] 。对于使用对象字面量创建的对象，这个值是 Object.prototype。对于使用数组字面量创建的对象，这个值是 Array.prototype。对于functions，这个值是Function.prototype。
	 			对于使用 new fun 创建的对象，其中fun是由js提供的内建构造器函数之一(Array, Boolean, Date, Number, Object, String 等等），这个值总是fun.prototype。
	 			对于用js定义的其他js构造器函数创建的对象，这个值就是该构造器函数的prototype属性。

	 		//IE > 11

	 	Object.prototype.constructor()
			指向创建了该对象原型的函数引用。需要注意的是，该属性的值是那个函数本身，而不是一个包含函数名称的字符串。
			function Type() { };

				var	types = [
					new Array,
					[],
					new Boolean,
					true,        // remains unchanged
					new Date,
					new Error,
					new Function,
					function(){},
					Math,	
					new Number,
					1,           // remains unchanged
					new Object,
					{},
					new RegExp,
					/(?:)/,
					new String,
					"test"       // remains unchanged
				];

				for(var i = 0; i < types.length; i++) {
					types[i].constructor = Type;
					types[i] = [ types[i].constructor, types[i] instanceof Type, types[i].toString() ];
				};
				//打印结果
				function Type() { },false,
				function Type() { },false,
				function Type() { },false,false
				function Boolean() { [native code] },false,true
				function Type() { },false,Thu Aug 24 2017 10:00:57 GMT+0800 (中国标准时间)
				function Type() { },false,Error
				function Type() { },false,function anonymous() {}
				function Type() { },false,function (){}
				function Type() { },false,[object Math]
				function Type() { },false,0
				function Number() { [native code] },false,1
				function Type() { },false,[object Object]
				function Type() { },false,[object Object]

		Object.assign(目标对象, 源对象)
				将所有可枚举的属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。

				如果目标对象中的属性具有相同的键，则属性将被源中的属性覆盖。
				后来的源的属性将类似地覆盖早先的属性。
				只会拷贝源对象自身的并且可枚举的属性到目标对象身上。
				会跳过那些值为 null 或 undefined 的源对象。只读属性不能被覆盖，
				拷贝的是属性值。假如源对象的属性值是一个指向对象的引用，它也只拷贝那个引用值。
				继承属性和不可枚举属性是不能拷贝的

		Object.create(proto, [ propertiesObject ])
				指定的原型对象及其属性去创建一个新的对象。
				如果 propertiesObject 参数不是 null 也不是对象，则抛出一个 TypeError 异常。	

		Object.defineProperties(obj, props)
				直接在一个对象上定义新的属性或修改现有属性，并返回该对象。

		Object.defineProperty(obj, prop, descriptor)
				会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。
				如果对象中不存在指定的属性，Object.defineProperty()就创建这个属性。
				如果属性已经存在，Object.defineProperty()将尝试根据描述符中的值以及对象当前的配置来修改这个属性。

		Object.entries() 
				方法返回一个给定对象自己的可枚举属性[key，value]对的数组，数组中键值对的排列顺序和使用 for...in 循环遍历该对象时返回的顺序一致（区别在于一个for-in循环也枚举原型链中的属性）。
				返回 给定对象自己的枚举属性[key，value]对的数组

		Object.freeze() 
				方法可以冻结一个对象，冻结指的是不能向这个对象添加新的属性，不能修改其已有属性的值，不能删除已有属性，以及不能修改该对象已有属性的可枚举性、可配置性、可写性。也就是说，这个对象永远是不可变的。该方法返回被冻结的对象。

		Object.getOwnPropertyDescriptor(obj, prop)
				在 ES5 中，如果该方法的第一个参数不是对象（而是原始类型），那么就会产生出现 TypeError。而在 ES2015，第一个的参数不是对象的话就会被强制转换为对象。

		Object.getOwnPropertyDescriptors(obj)
				获取一个对象的所有自身属性的描述符。

		Object.getOwnPropertyNames(obj)
				返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性）组成的数组。

		Object.getPrototypeOf(object)
				返回指定对象的原型（即, 内部[[Prototype]]属性的值）
				给定对象的原型。如果没有继承属性，则返回 null 。
				在 ES5 中，如果参数不是一个对象类型，将抛出一个  TypeError 异常。在 ES6 /ES2015中，参数被强制转换为一个 Object。

		Object.is(value1, value2);
				确定两个值是否是 相同的值。
				Object.is(0, -0);            // false
				Object.is(-0, -0);           // true
				Object.is(NaN, 0/0);         // true

		Object.isExtensible() 
				方法判断一个对象是否是可扩展的（是否可以在它上面添加新的属性）。

		Object.isFrozen() 
				方法判断一个对象是否被冻结 frozen。

		Object.isSealed() 
				方法判断一个对象是否被密封(sealed)。

		Object.keys() 
			方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和使用 for...in 循环遍历该对象时返回的顺序一致 （两者的主要区别是 一个 for-in 循环还会枚举其原型链上的属性）。
			返回 一个表示给定对象的所有可枚举属性的字符串数组。

		Object.preventExtensions() 
			方法让一个对象变的不可扩展，也就是永远不能再添加新的属性。

		Object.hasOwnProperty() 
			方法会返回一个布尔值，指示对象是否具有指定的属性作为自身（不继承）属性。继承属性不可以
			判断某个对象是否含有指定的属性的 Boolean 
			window.hasOwnProperty('atob')
			//true
			window.hasOwnProperty('canvas')
			//false
			window.hasOwnProperty('toString')
			//false
		
		Object.prototype.isPrototypeOf()
			于测试一个对象是否存在于另一个对象的原型链上。
			返回一个布尔值 Boolean，表示调用对象是否在另一个对象的原型链上。

		Object.prototype.propertyIsEnumerable()
			obj.propertyIsEnumerable(prop)
			一个 Boolean 用来表明指定的属性名是否可枚举

		Object.prototype.toLocaleString()
			Object's toLocaleString 返回调用 toString() 方法的结果。

		Object.prototype.toString()
			检测对象类型，返回一个字符串

		Object.prototype.valueOf()
			JavaScript 调用 valueOf() 方法用来把对象转换成原始类型的值（数值、字符串和布尔值）。

		Object.setPrototypeOf()
			设置一个指定的对象的原型 ( 即, 内部[[Prototype]]属性）到另一个对象或  null。
				Object.setPrototypeOf(obj, prototype)

		Object.values()
			Object.values(obj)
			和Object.keys(obj) 像对应
			返回一个给定对象自己的所有可枚举属性值的数组，值的顺序与使用for...in循环的顺序相同 ( 区别在于for-in循环枚举原型链中的属性 )。
			一个包含对象自身的所有可枚举属性键值的数组。
