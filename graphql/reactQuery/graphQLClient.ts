import { GraphQLClient } from "graphql-request";
import * as bcrypt from 'bcrypt';
import { CREATE_USER } from "../mutation/user.mutation";
import { GET_USER_BY_EMAIL } from "../query";

export const graphQLClient = new GraphQLClient(
  `${process.env.API_URL}/graphql`,
  {
    headers: {
      authorization: "Bearer MY_TOKEN",
    },
  }
);

// export const checkUserEmailPassword = async( email: string, password: string ) => {

//   // await db.connect();
//   // const user = await User.findOne({ email });
//   // await db.disconnect();
//   const user
//   if ( !user ) {
//       return null;
//   }

//   if ( !bcrypt.compare( password, user.password! ) ) {
//       return null;
//   }

//   const { role, name, _id, image } = user;

//   return {
//       _id,
//       email: email.toLocaleLowerCase(),
//       role,
//       name,
//       image
//   }
// }

export const oAUthToDbUser = async( oAuthEmail: string, oAuthUserName: string, oAuthPicture: string ) => {

  // await db.connect();
  // const user = await User.findOne({ email: oAuthEmail });
  const { getUserByEmail } = await graphQLClient.request(
    GET_USER_BY_EMAIL,
    { email: oAuthEmail }
  );
  
  if ( getUserByEmail ) {
      // await db.disconnect();
      const { _id, data, email } = getUserByEmail;
      const { name, role, image } = data
      return { _id, name, role, image };
  }


  // const newUser = new User({ email: oAuthEmail.toLowerCase(), name: oAuthUserName.toLowerCase(), password: '@', role: 'USER_ROL', image: oAuthPicture });
  // await newUser.save();
  // await db.disconnect();
  const { createUser } = await graphQLClient.request(CREATE_USER, { input: { email: oAuthEmail.toLowerCase(), name: oAuthUserName.toLowerCase(), password: '@', role: 'USER_ROL', image: oAuthPicture, site: '1234567' } })
  const { _id, data, email } = createUser;
  const { name, role, image } = data;

  return { _id, name, email, role, image }; 
}