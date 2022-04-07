const century = (year) => {
	if (year < 100)
  	return `The century 1`

	const century = Math.floor(year / 100)
	const additionalYears = year % 100 
   
  const result = additionalYears > 0 ? century + 1 : century
  return `The century ${result}`
}

console.log(century(1994))