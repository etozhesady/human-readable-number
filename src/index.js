module.exports = function toReadable(number) {
	let a = [
		'',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
		'ten',
		'eleven',
		'twelve',
		'thirteen',
		'fourteen',
		'fifteen',
		'sixteen',
		'seventeen',
		'eighteen',
		'nineteen'
	]

	let b = [ '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ]

	let result = ''

	let num = number.toString()
	let array = num.split('')

	if (number == 0) {
		return 'zero'
	}

	for (let i = 0; i < array.length; i++) {
		if (array.length < 2) {
			return a[Number(array[i])]
		}

		if (number < 20) {
			return a[Number(array[i] + array[i + 1])]
		}

		if (array.length < 3) {
			result += b[Number(array[0])]
			result += ' '
			result += a[Number(array[1])]
			return result.trim()
		}
	}

	result += a[Number(array[0])]
	result += ' hundred '
	if (Number(array[1]) !== 1) {
		result += b[Number(array[1])]
	} else {
		array[2] = Number(array[2])
		array[2] += 10
	}
	result = result.trim()
	result += ' '
	result += a[Number(array[2])]
	return result.trim()
}
