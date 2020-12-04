const mongoose = require("mongoose");
const db = require("../models");

// This file empties the googlebooks collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed = [
  {
    title: 'The Austere Academy',
    author: 'Daniel Handler',
    description: "The Austere Academy is the fifth novel in the children's novel series A Series of Unfortunate Events by Lemony Snicket. The Baudelaire orphans are sent to a boarding school, overseen by monstrous employees. There, the orphans meet new friends, new enemies, and Count Olaf in disguises. It was released in 2000 in the US, and 2001 in the UK, despite The Miserable Mill (the fourth book) being released in 2002.",
    image: 'https://upload.wikimedia.org/wikipedia/en/b/bf/Austere_academy.jpg',
    link: 'https://en.wikipedia.org/wiki/The_Austere_Academy',
    date: { type: Date, default: Date.now }
  },
  {
    title: 'The Ersatz Elevator',
    author: 'Daniel Handler',
    description: "The Ersatz Elevator is the sixth novel of the children's novel series A Series of Unfortunate Events by Lemony Snicket. The Baudelaires are sent to live with the wealthy Esmé and Jerome Squalor.",
    image: 'https://upload.wikimedia.org/wikipedia/en/d/d7/Ersatz_elavator.jpg',
    link: 'https://en.wikipedia.org/wiki/The_Ersatz_Elevator',
    date: { type: Date, default: Date.now }
  },
  {
    title: 'The Penultimate Peril',
    author: 'Daniel Handler',
    description: "The Penultimate Peril is the twelfth novel in the children's novel series A Series of Unfortunate Events by Lemony Snicket.",
    image: 'https://upload.wikimedia.org/wikipedia/en/8/81/ThePenultimatePeril.JPG',
    link: 'https://en.wikipedia.org/wiki/The_Penultimate_Peril',
    date: { type: Date, default: Date.now }
  },
  {
    title: 'The Vile Village',
    author: 'Daniel Handler',
    description: "The Vile Village is the seventh novel in the children's book series A Series of Unfortunate Events by Lemony Snicket (the pen name of American author Daniel Handler), which consists of 13 children's novels that follow the turbulent lives of Violet, Klaus, and Sunny Baudelaire after their parents' death. The children are placed in the custody of their distant cousin/uncle Count Olaf, who attempts to steal their inheritance. After the Baudelaires are removed from his care by their parents' estate executor, Mr. Poe, Olaf begins to doggedly hunt the children down, bringing about the serial slaughter and demise of a multitude of characters. In The Vile Village, the Baudelaire orphans are taken into the care of a whole village, only to find many rules and chores, evil seniors, as well as Count Olaf and his evil girlfriend lurking nearby. This book marks a turning point in the structure of the series and effectively marks the halfway mark between books one to six and eight to thirteen. It breaks with the following major patterns of the earlier books in the series: The Baudelaires can no longer call on Mr. Poe for assistance after the events of this book, although he was barely any help to begin with. The Baudelaires themselves are deemed criminals, and they are not assigned any more legal guardians after this point. As a result, because the authorities turn their attention away from him and to the Baudelaires, Count Olaf no longer needs to bother with disguises (apart from a voice-only disguise in The Hostile Hospital and one final disguise in The End which, for the only time in the series, fools no one).",
    image: 'https://upload.wikimedia.org/wikipedia/en/3/35/Vile_village.jpg',
    link: 'https://en.wikipedia.org/wiki/The_Vile_Village',
    date: { type: Date, default: Date.now }
  },
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
