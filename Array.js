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









