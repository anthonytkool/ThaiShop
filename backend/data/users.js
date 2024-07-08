import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Diego Maradona',
    email: 'diego@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Kobe Bryant',
    email: 'kb@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
];
export default users;
