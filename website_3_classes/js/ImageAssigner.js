class ImageAssigner {
  static assignImageToPerson = (personObject) => {
    personObject.picture = `https://api.adorable.io/avatars/${Math.ceil(Math.random() * 200)}.png`;
  }
}