'use strict';

const user = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name,
  tag,
  stats: { followers, views: userViews, likes: userLikes },
} = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// Funkcja wywołania zwrotnego
function greet(name) {
  console.log(`Pozdrawiam ${name}.`);
}

// Funkcja wyższego rzędu
function registerGuest(name, callback) {
  console.log(`Rejestracja gościa ${name}.`);
  callback(name);
}
// Przekaż funkcję inline greet jako wywołanie zwrotne
// registerGuest('Mango', function greet(name) {
//   console.log(`Pozdrawiam ${name}.`);
// });

// Przekaż funkcję inline notify jako wywołanie zwrotne
// registerGuest('Poly', function notify(name) {
//   console.log(
//     `Szanowny(a) ${name}, Pana/Pani pokój będzie gotowy za 30 minut.`
//   );
// });

// registerGuest('Mango', greet);

function processCall(recipient) {
  // Symuluj dostępność abonenta za pomocą liczby losowej
  const isRecipientAvailable = Math.random() > 0.5;
  console.log(isRecipientAvailable);
  if (!isRecipientAvailable) {
    console.log(`Abonent ${recipient} jest niedostępny, zostaw wiadomość.`);
    // Logika aktywacji automatycznej sekretarki
  } else {
    console.log(`Łączenie z ${recipient}, proszę czekać...`);
    // Logika odbierania połączenia
  }
}

// processCall('Mango');
