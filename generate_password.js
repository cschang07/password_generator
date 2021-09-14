// define sample function to randomly return a item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// define generatePassword function
function generatePassword() {
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  //define dummy data
  const options = {
    length: 12,
    lowercase: 'on',
    uppercase: 'on',
    numbers: 'on',
    excludeCharacters: '40'
  }

  // create a collection to store things user picked up
  let collection = []
  if (options.lowercase === 'on') { collection = collection.concat(lowerCaseLetters.split('')) }
  if (options.uppercase === 'on') { collection = collection.concat(upperCaseLetters.split('')) }
  if (options.numbers === 'on') { collection = collection.concat(numbers.split('')) }
  if (options.symbols === 'on') { collection = collection.concat(symbols.split('')) }

  // remove things user do not need
  //when there is options.excludeCharacters, collection.filter()
  //if collection include options.excludeCharacters, false(because 'false' will be filtered in filter()); and vise versa
  if (options.excludeCharacters) {
    console.log(`exclude characters: ${options.excludeCharacters}`)
    collection = collection.filter(character =>
      !options.excludeCharacters.includes(character)
    )
  }

  // start generating password
  let password = ''

  for (i = 0; i < options.length; i++) {
    password += sample(collection)
  }

  // return the generated password 
  return password
}

// invoke generatePassword function 
generatePassword()