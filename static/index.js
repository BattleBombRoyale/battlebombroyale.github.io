const imagePath = './img/'

export const imageMap = new Map([
  ['shield', require(`${imagePath}shield.svg`)],
  ['trophy', require(`${imagePath}trophy.svg`)],
  ['explosion', require(`${imagePath}explosion.svg`)],
  ['bomb', require(`${imagePath}bomb.png`)],
  ['icx', require(`${imagePath}icon.png`)],
  ['telegram', require(`${imagePath}telegram.png`)],
  ['contact', require(`${imagePath}contact.png`)],
  ['logo', require(`${imagePath}logo.png`)]
])

export const getImage = (imageName) => imageMap.get(imageName)
