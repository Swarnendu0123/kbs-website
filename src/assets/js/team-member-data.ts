import { v4 as uuidv4 } from 'uuid';
interface Person {
    id: string;
    name: string;
    position: string;
    image: string;
}

export const teamMembers : Person[] = [
    {
        id: uuidv4(),
        name: 'Prakhar Jain',
        position: 'Founder and Governor',
        image: "https://media.licdn.com/dms/image/D4D03AQEmNCpU0_Ov0g/profile-displayphoto-shrink_800_800/0/1689282795544?e=1718236800&v=beta&t=TbAJg2vZviMdeKtoqilbp0l4lZ2dbsbH9YvyRTuKTQs",
    },
    {
        id: uuidv4(),
        name: 'Nishim Goyal',
        position: 'Tech Head',
        image: 'https://media.licdn.com/dms/image/D4D03AQEiAsPXBLmk1w/profile-displayphoto-shrink_800_800/0/1705922390324?e=1718236800&v=beta&t=lasLekAUvhUNLDH0_DghWeDxphmJz9Zt8tv4U8ZeY7E',
    },
    {
        id: uuidv4(),
        name: 'Sameer Sen',
        position: 'Tech Head',
        image:'https://media.licdn.com/dms/image/D5603AQGVGQZhdI4CBg/profile-displayphoto-shrink_400_400/0/1670174480922?e=1720051200&v=beta&t=UwdRf7jGQ69QUaEt7-l2xGUlEWhTmvG75AT4zXJ67sA',
    },
    {
        id: uuidv4(),
        name: 'Suvojit Das',
        position: 'Research Head',
        image: 'https://media.licdn.com/dms/image/C4D03AQEtbKnOFzNsKA/profile-displayphoto-shrink_100_100/0/1662714171862?e=1720051200&v=beta&t=aAXjTJ8qjufXJdkAHSk8s-YT5sE7DqwGtV3rvoMVy1c',
    },
    {
        id: uuidv4(),
        name: 'Ayush Kumar',
        position: 'Research Head',
        image: 'https://media.licdn.com/dms/image/C4E03AQHrUAS8VrBrUw/profile-displayphoto-shrink_100_100/0/1646669084752?e=1720051200&v=beta&t=OBYQ2e5r35yae-7DICaN_1Hdcc_UVqNaKHbda8PTg20',
    },
    {
        id: uuidv4(),
        name: 'Avhinav Prakash',
        position: 'Research Head',
        image: 'https://media.licdn.com/dms/image/D4D03AQHSziJ7mYv1ng/profile-displayphoto-shrink_100_100/0/1700513786377?e=1720051200&v=beta&t=YuKBVyRJR7Sqlfxa2XTGUPT4SgpzamukjnrxCeMDpLw',
    },
    {
        id: uuidv4(),
        name: 'SSVKSS Jyothiraditya',
        position: 'Operations Head',
        image: 'https://media.licdn.com/dms/image/D4D03AQGGNC7Boszwzg/profile-displayphoto-shrink_100_100/0/1693933196453?e=1720051200&v=beta&t=XQOI9o24g1LGl1eH6GOErzOvvWaJjD0l7I9Fb9hlmkE',
    },
    {
        id: uuidv4(),
        name: 'Diptendu Sarkar',
        position: 'Operations Head',
        image: 'https://media.licdn.com/dms/image/D5603AQG59fnQtZC2CQ/profile-displayphoto-shrink_100_100/0/1699418634718?e=1720051200&v=beta&t=rTGzeNyYKZGgohyaP61nc0yaQZ4UMF60HV-4kSUBeT8',
    },
    {
        id: uuidv4(),
        name: 'Ojas Deshmukh',
        position: 'Advisor',
        image: 'https://media.licdn.com/dms/image/D4D03AQG-sGUYlgrtVg/profile-displayphoto-shrink_100_100/0/1683029542554?e=1720051200&v=beta&t=BnQX7AeihbbeBpw1Ro_bT_8VSJesUbTGGLrjaxgZTSE'
    },
    {
        id: uuidv4(),
        name: 'Atharva Amritkar',
        position: 'Advisor',
        image: 'https://media.licdn.com/dms/image/D5603AQFBphMWz-XDBg/profile-displayphoto-shrink_100_100/0/1710759831112?e=1720051200&v=beta&t=MgNY60MqG07xRtoQjB5qJZjMe5MesOb2PUP717qXKy8' 
    },
    
    {
        id: uuidv4(),
        name: 'Druhin Abrol',
        position: 'Advisor',
        image: 'https://media.licdn.com/dms/image/C4D03AQGcujsS-ytERw/profile-displayphoto-shrink_100_100/0/1657125333796?e=1720051200&v=beta&t=qP33hzRToFbwSoILsg6CqMYamzgoWohn7HhBdaPG6aE' 
    },
    {
        id: uuidv4(),
        name: 'Mohith Suresh',
        position: 'Advisor',
        image: 'https://media.licdn.com/dms/image/D5603AQHiWe_N33CIyw/profile-displayphoto-shrink_400_400/0/1708708525163?e=1720051200&v=beta&t=2ivxtiDz6CvJYm0v_WLE3Jrmthbp4Y826Ak-5VRfOTY' 
    },
    {
        id: uuidv4(),
        name: 'Samarth Singh',
        position: 'Advisor',
        image: 'https://media.licdn.com/dms/image/D4D03AQHCK6JVZCkcEw/profile-displayphoto-shrink_100_100/0/1701879771081?e=1720051200&v=beta&t=NaTYNMBY2-lAL-CEuIt6T1JsN-qmWO4x3_jbsZq9fqA' 
    },
    {
        id: uuidv4(),
        name: 'Soham Sen',
        position: 'Advisor',
        image: 'https://media.licdn.com/dms/image/D5603AQFGKSbjYXZNoQ/profile-displayphoto-shrink_100_100/0/1676197360514?e=1720051200&v=beta&t=23UFWxlwoKiMVeMXO9GdFUELWVojrOJaCtt4YwtQFV0' 
    },
    {
        id: uuidv4(),
        name: 'Tushar Kanwaria',
        position: 'Advisor',
        image: 'https://media.licdn.com/dms/image/D4D03AQG4cHFiRaCU7g/profile-displayphoto-shrink_100_100/0/1676022600040?e=1720051200&v=beta&t=EDRZHyhlZtIhGYJPH7hRrxavWjy-oDXm_SCIWw50gao' 
    },

]
export type { Person };
export default teamMembers;
