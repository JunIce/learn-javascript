Array

1. prototype

1) Array.length

    var a = Array(10); // 10
2) Array.prototype

	Array.isArray(a) // 返回bolean true or false

	Array.from(类数组, 回调函数, this指向) 
		方法从一个类似数组或可迭代的对象中创建一个新的数组实例。
		类数组   只要可以遍历就可以使用
		this指向   回调函数内部的this指向设置


	Array.of() 
		方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。
		任意个参数，将按顺序成为返回数组中的元素。
		一个整数将返回一个单个元素的数组，和Array(7)有本质区别

	Array.prototype.concat(arr1, [arr2,arr3....]) 
		方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。 如有元素相同也不会覆盖
		const a = [1,2,3];
		a.concat([4,5,6]) => [1,2,3,4,5,6] // new array

	Array.prototype.copyWithin(target, start, end) 
		浅复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小。 会改变数组结构，原数组上操作
		//手机浏览器多数未实现，需要polyfill
		//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin

		arr.copyWithin(target)
		arr.copyWithin(target, start)
		arr.copyWithin(target, start, end)
		arr.copyWithin(目标索引, [源开始索引], [结束源索引])

		如果start为负，则其指定的索引位置等同于length+start，length为数组的长度。end也是如此

		[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);

	Array.prototype.entries() 
		返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。
		/手机浏览器多数未实现，需要polyfill
		//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
		var arr = ["a", "b", "c"];
		var iterator = arr.entries();
		// undefined

		console.log(iterator);
		// Array Iterator {}

		console.log(iterator.next().value); 
		// [0, "a"]
		console.log(iterator.next().value); 
		// [1, "b"]
		console.log(iterator.next().value); 
		// [2, "c"]
	
	Array.prototype.every(callback[, this指向]) 
		判断数组内是否满足条件，有一个不满足即返回false
		//IE>9
		[1,2,3].every(i=>{
			return i > 2
		})

	Array.prototype.fill(value [, start, end]) 用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。
		//多数浏览器未实现
		//返回修改过的数组
		arr.fill(value) 
		arr.fill(value, start) 
		arr.fill(value, start, end)

	Array.prototype.filter(fn , 函数内部this指向) 
		创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
	   //筛选函数。 返回是个新数组 IE > 9
	   [1,2,3].filter(i => {
	   	return  i > 2
	   })	 // [3]

	Array.prototype.find(fn , thisArg) 
		返回数组中满足提供的测试函数的第一个元素的值。
		否则返回 undefined。
		//cautions: 返回的是一个元素值，并不是新数组
		//mobile 未实现
		function isBigEnough(element) {
		  return element >= 15;
		}

		[12, 5, 8, 130, 44].find(isBigEnough); // 130

	Array.prototype.findIndex()
	  	返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
	  	//和 find 函数类似
	  	//mobile 未实现

	Array.prototype.forEach(fn , thisArg)
		对数组的每个元素执行一次提供的函数。
		forEach() 为每个数组元素执行callback函数；
		不像map() 或者reduce() ，它总是返回 undefined值，并且不可链式调用。
		典型用例是在一个链的最后执行副作用
		已删除的元素或者未初始化的元素将被跳过，
		undefine 将被输出，
		如果数组迭代时发生数组修改，将停止迭代
		 forEach()不会在迭代之前创建数组的副本。
		 //IE > 9
	
	Array.prototype.includes(元素， 开始位置) 
	用来判断一个数组是否包含一个指定的值，如果是，酌情返回 true或 false
		arr.includes(searchElement)
		arr.includes(searchElement, fromIndex)
		//IE和 Android未实现
	
	Array.prototype.indexOf(元素， 开始位置) 
		返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1
		//IE > 9
	
	Array.prototype.join()
		将数组（或一个类数组对象）的所有元素连接到一个字符串中。
		返回新的字符串，默认为","

	Array.prototype.keys()
		返回一个新的Array迭代器，它包含数组中每个索引的键。

	Array.prototype.lastIndexOf(searchElement[, fromIndex = arr.length - 1])
		方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。
		从数组的后面向前查找，从 fromIndex 处开始。
		lastIndexOf 使用严格相等（strict equality，即 ===）比较 searchElement 和数组中的元素。
		//IE > 9
	
	Array.prototype.map(fn, thisArg)
		创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
		let array = arr.map(function callback(currentValue, index, array) { 
   				 // Return element for new_array 
			}[, thisArg])

		使用 map 方法处理数组时，数组元素的范围是在 callback 方法第一次调用之前就已经确定了。
		在 map 方法执行的过程中：原数组中新增加的元素将不会被 callback 访问到；
		若已经存在的元素被改变或删除了，则它们的传递到 callback 的值是 map 方法遍历到它们的那一时刻的值；而被删除的元素将不会被访问到。
		//IE > 9

	Array.prototype.pop()
	从数组中删除最后一个元素，并返回该元素的值。
	此方法更改数组的长度。
	从数组中删除的元素; undefined 如果数组为空。
	//IE > 5.5

	Array.prototype.push()
		一个或多个元素添加到数组的末尾，并返回数组的新长度。
		可应用在类似数组的对象上
		可以在一个对象上工作.
		我们将该集合存储在对象本身上，并使用在 Array.prototype.push 上使用的 call 来调用该方法，
		使其认为我们正在处理数组，而它只是像平常一样运作
		//IE > 5.5

	Array.prototype.reduce()
		对累加器和数组中的每个元素 (从左到右)应用一个函数，将其减少为单个值
		array.reduce(function(accumulator, currentValue, currentIndex, array), initialValue)
		accumulator  上一次调用的返回值
		currentValue  正在处理的元素
		currentIndex  正在处理元素的索引
		array 调用reduce数组
		initialValue  如果没有设置初始值，则将数组中的第一个元素作为初始值。空数组调用reduce时没有设置初始值将会报错。

	Array.prototype.reduceRight()
	    从右向左，和reduce相反

	Array.prototype.reverse()
		将数组中元素的位置颠倒。

	Array.prototype.shift()
		从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。
		这个方法能够通过 call 或 apply 方法作用于类似数组的对象上

	Array.prototype.slice(start, end)
		浅拷贝一个数组对象，原始数组不会被更改
		浅拷贝--当原引用数组发生变化的时候，新数组也会发生变化

	Array.prototype.some()
		测试数组中的某些元素是否通过由提供的函数实现的测试
		有一个符合条件就会返回true
		//IE > 9

	Array.prototype.splice()
		通过删除现有元素和/或添加新元素来更改一个数组的内容。
		改变原数组结构，
		返回被删除元素组成的数组
		array.splice(start)
		array.splice(start, deleteCount) 
		array.splice(start, deleteCount, item1, item2, ...)

	Array.prototype.toLocaleString()
		一个字符串表示数组中的元素。

	Array.prototype.toString()
		返回一个字符串，表示指定的数组及其元素。
		Array 对象覆盖了 Object 的 toString 方法。对于数组对象，toString 方法返回一个字符串，该字符串由数组中的每个元素的 toString() 返回值经调用 join() 方法连接（由逗号隔开）组成。

	Array.prototype.unshift()
		将一个或多个元素添加到数组的开头，并返回新数组的长度
		返回值 length;
		
