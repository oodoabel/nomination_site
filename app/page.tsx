"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

const PaystackButton = dynamic(
  () => import("react-paystack").then((mod) => mod.PaystackButton),
  { ssr: false }
);
export interface Nomination {
  id: number;
  nominee: string;
  category: string;
  quantity: number;
}

interface NomineeProfile {
  id: string;
  name: string;
  fullName: string;
  nickname: string;
  dateOfBirth: string;
  department: string;
  nfcsSociety: string;
  bestLevel: string;
  funMoment: string;
  bio: string;
  stressfulLevel: string;
  stateOrTribe: string;
  hobby: string;
  relationshipStatus: string;
  forumPaddy: string;
  forumCrush: string;
  bibleVerse: string;
  favQuote: string;
  favSlang: string;
  japaOrStay: string;
  skill: string;
  partingWords: string;
  imageUrl: string;
}

export default function page() {
  // State management
  const publicKey = "pk_test_3b6e94ac5b62d8c69226a481d857d1cd089d9c67";
  // const publicKey = "pk_live_89db03b5c537e2ad9aa8ff358a56dc7d9a95f9ec";
  const [nominee, setNominee] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [nominations, setNominations] = useState<Nomination[]>([]);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [viewingProfile, setViewingProfile] = useState<NomineeProfile | null>(
    null
  );

  async function submitNomination(
    nominee: string,
    category: string,
    quantity: number
  ) {
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nominee, category, quantity }),
      });

      if (!response.ok) throw new Error("Submission failed");

      return await response.json();
    } catch (error) {
      console.error("Error submitting nomination:", error);
      return { status: "error", message: "Submission failed" };
    }
  }

  //paystack
  const componentProps = {
    amount,
    email,
    publicKey,
    text: "Make Payment",
    onSuccess: () => {
      nominations.map((nom) => {
        submitNomination(nom.nominee, nom.category, nom.quantity);
      });

      setNominations;
    },
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };

  const nominees = [
    {
      id: "1",
      name: "Boniface Padawasha",
      fullName: "Boniface Padawasha",
      nickname: "Bald hair",
      dateOfBirth: "4/14",
      department: "Electrical Electronic Engineering",
      nfcsSociety: "Legion of Mary",
      bestLevel: "200",
      funMoment: "Nfcs week",
      bio: "Nil",
      stressfulLevel: "300",
      stateOrTribe: "Niger state, Gbagyi",
      hobby: "Movies and reading novels",
      relationshipStatus: "In a relationship",
      forumPaddy: "Nil",
      forumCrush: "Nil",
      bibleVerse: "He asked us to be still, that He is God.",
      favQuote: "In Mary our mother, we succeed.",
      favSlang: "Nil",
      japaOrStay: "Stay",
      skill: "Tailor",
      partingWords: "God is faithful",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1Hjko_tsn1ql2X4jMH1QrXBZ4QjJ5B_Sd",
    },
    {
      id: "2",
      name: "Sabastine Ngohile Felicia",
      fullName: "Sabastine Ngohile Felicia",
      nickname: "LICIA",
      dateOfBirth: "12/9",
      department: "Science Education",
      nfcsSociety: "Altar knight",
      bestLevel: "400l",
      funMoment: "After exams",
      bio: "I’m a creative thinker and a passionate individual with the love of learning 🧚🏻‍♀️",
      stressfulLevel: "300l",
      stateOrTribe: "Benue state ( TIV)",
      hobby: "Cooking, music, movies",
      relationshipStatus: "In a relationship",
      forumPaddy: "TINA",
      forumCrush: "UFOMADU STEPHEN",
      bibleVerse:
        "Philippians 4:13. I can do all things through Christ who strengthens me",
      favQuote: "Que sera sera",
      favSlang: "Na God dy run am",
      japaOrStay: "Stay",
      skill: "Caterer",
      partingWords: "Put God first In everything you do and stay focused",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1WVh6cQZ8VbDpbamaC1K2EESqowzfs-0Q",
    },
    {
      id: "3",
      name: "Linus Justina",
      fullName: "Linus Justina",
      nickname: "Tina",
      dateOfBirth: "1/11",
      department: "Science education",
      nfcsSociety: "Alter night",
      bestLevel: "400l",
      funMoment: "With my friends",
      bio: "A curious and enthusiastic individual with a thirst for knowledge",
      stressfulLevel: "500l",
      stateOrTribe: "Cross River State/ ogoja",
      hobby: "Love listening to music",
      relationshipStatus: "In a relationship",
      forumPaddy: "Licia",
      forumCrush: "Nil",
      bibleVerse: "Philippians 4 : 19",
      favQuote: "Be the change you wish to see",
      favSlang: "What God can't do doesn't exist",
      japaOrStay: "Japa",
      skill: "Fashion designer",
      partingWords:
        '"The future belongs to those who believe in the beauty of their dreams".',
      imageUrl:
        "https://drive.google.com/thumbnail?id=1sUb3rRUoIS0B6J1IpWA7WpkfAjGvd_03",
    },
    {
      id: "4",
      name: "Haamnaan John Haamnaan",
      fullName: "Haamnaan John Haamnaan",
      nickname: "Joe.zee",
      dateOfBirth: "11/5",
      department: "Telecommunication Engineering",
      nfcsSociety: "Legion of Marry",
      bestLevel: "400",
      funMoment: "Every Sunday.",
      bio: "Just a chill guy .",
      stressfulLevel: "300",
      stateOrTribe: "Plateau State",
      hobby: "Creating , being alone ..",
      relationshipStatus: "Single",
      forumPaddy: "Stev.",
      forumCrush: "Next please..",
      bibleVerse: "Isaiah 54 : 7",
      favQuote: "You are God Delivery system to your world",
      favSlang: "On God",
      japaOrStay: "Stay",
      skill: "Shoe cobbler",
      partingWords: "Good luck",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1omvlVnenkPA0bFgMoIxpg1E8pX2eTaee",
    },
    {
      id: "5",
      name: "Uwakwe Joy Chisom",
      fullName: "Uwakwe Joy Chisom",
      nickname: "Sohmie",
      dateOfBirth: "1/14",
      department: "Agric Economics and farm management",
      nfcsSociety: "St. Vincent de Paul, legion",
      bestLevel: "200",
      funMoment: "With Exquisite family",
      bio: "I’m Sohmie, the quiet creative behind Sohmie’s Makeover, a hair and makeup brand built on passion, precision, and a love for helping people feel like the best version of themselves. I’m a bit of an introvert, but when it comes to beauty, I let my work speak louder than words. From bridal glam to everyday elegance, I pour my heart into every brushstroke and style. Sohmie’s Makeover is more than a business it’s my way of serving people with calm energy, creativity, and care.",
      stressfulLevel: "500",
      stateOrTribe: "Enugu- Igbo",
      hobby: "Working out, Reading and sleeping",
      relationshipStatus: "Single",
      forumPaddy: "Emmanuel, Michael, Esther, Doris, Chizzy, Onume",
      forumCrush: "You",
      bibleVerse: "Pilippians 4:13",
      favQuote: "Que sera, sera",
      favSlang: "🤔🤔",
      japaOrStay: "Japa",
      skill:
        "Makeup artist, Hairstylist(braiding, installation),cluster lashes",
      partingWords:
        "Push through the end, so it doesn’t feel like a repeat of the past.",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1FQ-AVZRVWH57xDBFdtXAjViBVQK2aGYa",
    },
    {
      id: "6",
      name: "John oche samuel",
      fullName: "John oche samuel",
      nickname: "Oche",
      dateOfBirth: "6/20",
      department: "Microbiology",
      nfcsSociety: "Church warden",
      bestLevel: "200l and 400l",
      funMoment:
        "All the Exquisite picnics i have attended and on NFCS week day where i won Mr NFCS",
      bio: "I am an eazy go person, i smile alot, believe in God, i believe in consistency and hardwork and i take pride in my appearance and i have good sense of style which I think reflect my personality.",
      stressfulLevel: "300l and 500l",
      stateOrTribe: "Benue state/ Idoma",
      hobby: "Working out, Reading, researching and listening to music",
      relationshipStatus: "In a relationship",
      forumPaddy: "Investor Johnito",
      forumCrush: "Nil",
      bibleVerse: "Samuel 16:7",
      favQuote: "Be the change you want to see in the society",
      favSlang: "They play, just the play",
      japaOrStay: "Stay",
      skill: "I am a phone technician and phone accessory dealer",
      partingWords:
        "Build a good relationships network, and nurture your connections. You will need them in your future endeavors.",
      imageUrl:
        "https://drive.google.com/thumbnail?id=11PbHlM7by0_rj9nQxRAqgrCUItF1mAKf",
    },
    {
      id: "7",
      name: "PaulLuis Joseph Bazekore",
      fullName: "PaulLuis Joseph Bazekore",
      nickname: "the.real.Pluis",
      dateOfBirth: "3/8",
      department: "ARCHITECTURE",
      nfcsSociety: "Sacred Heart Choir",
      bestLevel: "300level",
      funMoment: "NFCS week 2022",
      bio: "Effortlessly cool, An essential realist and Awesomely great.",
      stressfulLevel: "100level",
      stateOrTribe: "Niger state/Gbagyi",
      hobby: "Singing, Drawing and sport",
      relationshipStatus: "Single",
      forumPaddy: "Good number of persons are...",
      forumCrush: "Nil",
      bibleVerse: "Jeremiah 29 vs 11",
      favQuote: "Breathe. It's only a bad day, not a bad life. -Ashley purdy",
      favSlang: "Steeze wey no reflect God, composure na zero.",
      japaOrStay: "Stay",
      skill: "Dynamic Entrepreneur",
      partingWords:
        "Stay hungry, stay humble, keep striving and keep, learning your time is coming.",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1mrPFqyQ8NFygwsKkyqYpokyXFfW5gfkh",
    },
    {
      id: "8",
      name: "Ochaje Emmanuel Adoche",
      fullName: "Ochaje Emmanuel Adoche",
      nickname: "Adoche",
      dateOfBirth: "7/5",
      department: "Chemical engineering",
      nfcsSociety: "Jtl",
      bestLevel: "500l",
      funMoment: "Every moment with Exquisite family",
      bio: "Introverted, you don't want to find out.",
      stressfulLevel: "300l",
      stateOrTribe: "Benue, Idoma",
      hobby: "Reading",
      relationshipStatus: "In a relationship",
      forumPaddy: "Michael",
      forumCrush: "Vincent",
      bibleVerse: "Psalms 25:4",
      favQuote: "Drink plenty water.",
      favSlang: "Omo",
      japaOrStay: "Japa",
      skill: "Seminary",
      partingWords: "Talk to God in prayer. Work harder, nobody cares.",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1b6IM6RS6Fs7282LT0XbJHJ_Sl3zxCPKP",
    },
    {
      id: "9",
      name: "Araga Peace Ahuoyiza",
      fullName: "Araga Peace Ahuoyiza",
      nickname: "",
      dateOfBirth: "6/4",
      department: "Biochemistry",
      nfcsSociety: "Sacred Heart Choir",
      bestLevel: "400L",
      funMoment: "NFCS week activities",
      bio: 'I’m someone who’s passionate about writing, and I enjoy learning, meeting new people, and taking on new challenges. I’m always open to growth and exploring new opportunities."',
      stressfulLevel: "300L",
      stateOrTribe: "Kogi/Ebira",
      hobby: "Cooking, Watching movies, and Sleeping 🥱",
      relationshipStatus: "In a relationship",
      forumPaddy: "Happiness",
      forumCrush: "Nil",
      bibleVerse: "Philippians 4:7",
      favQuote: "",
      favSlang: "Ohh wow",
      japaOrStay: "Japa",
      skill: "I'm just a girl",
      partingWords:
        '"Be curious", keep learning, help each other grow, and don’t fear to make mistakes ,because we often learn more from failure than from success',
      imageUrl:
        "https://drive.google.com/thumbnail?id=11im1aaXEe9m0URJX6pBnGt6832Fjdhq5",
    },
    {
      id: "10",
      name: "Okeh Francis Chimaroke",
      fullName: "Okeh Francis Chimaroke",
      nickname: "Okazaki😂",
      dateOfBirth: "9/26",
      department: "Biological Sciences",
      nfcsSociety: "Choir",
      bestLevel: "200L-500L",
      funMoment: "Forum picnic, bosso edition",
      bio: "A music enthusiast(Igbo highlife)with a great sense of humor",
      stressfulLevel: "300L",
      stateOrTribe: "Enugu State(O42)/Igbo",
      hobby: "Football, musical instruments etc",
      relationshipStatus: "Single",
      forumPaddy: "Faustie",
      forumCrush: "Chinonye🤭",
      bibleVerse:
        "Philippians 4 vs 13 I can do all things through Christ who strengthens me",
      favQuote: "A true ability is undisturbed by a pretentious criticism",
      favSlang: "On God",
      japaOrStay: "Japa",
      skill: "Playing musical instruments",
      partingWords:
        "Success isn't a result of spontaneous Combustion, you must set yourself on fire🔥 ..F...O...C...U...S",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1d_2YiVNRSUp3RpuOWn-fgwOnbL4MCd3N",
    },
    {
      id: "11",
      name: "Ifenkwe David Nereus Chukwuemeka",
      fullName: "Ifenkwe David Nereus Chukwuemeka",
      nickname: "",
      dateOfBirth: "12/3",
      department: "Urban And Regional Planning",
      nfcsSociety: "Nil",
      bestLevel: "200l",
      funMoment: "Building of the church",
      bio: "Just me!!!",
      stressfulLevel: "400l",
      stateOrTribe: "Abia/ Igbo",
      hobby: "Football",
      relationshipStatus: "Single",
      forumPaddy: "Moses",
      forumCrush: "Nil",
      bibleVerse: "Romans 12 v 21",
      favQuote: "The journey of a thousand miles begins with a step",
      favSlang: '*God dey!!!,no wahala "',
      japaOrStay: "Stay",
      skill: "Football , Drawing and painting",
      partingWords: '"Just keep pushing forward "',
      imageUrl:
        "https://drive.google.com/thumbnail?id=1wnZ7pxTNK3zTN2KP26BWJA5KGg0_Br2V",
    },
    {
      id: "12",
      name: "Francis Doris Ojone",
      fullName: "Francis Doris Ojone",
      nickname: "Light of the world 🌎",
      dateOfBirth: "8/2",
      department: "Water resources aquaculture and fisheries technology",
      nfcsSociety: "Lectors",
      bestLevel: "400l",
      funMoment: "When I’m with exquisite family",
      bio: "If you know you know 💯I don’t like stress",
      stressfulLevel: "300l /500l",
      stateOrTribe: "Kogi",
      hobby: "Dancing, music, catching cruise & anything fun",
      relationshipStatus: "Single",
      forumPaddy: "Them chock",
      forumCrush: "All my guysss",
      bibleVerse: "Isaiah 60-22",
      favQuote: "Life is what happens when you’re making other plans",
      favSlang: "Omo / keep playing",
      japaOrStay: "Stay",
      skill: "Hair stylist, clothing and beauty",
      partingWords: "Take life serious but don’t kill your, avoid stress",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1yUoToTgQlF4-j0oSN5qQmXHcXmNXOKnU",
    },
    {
      id: "13",
      name: "Anyaegbu, Chizoba Assumpta",
      fullName: "Anyaegbu, Chizoba Assumpta",
      nickname: "Chizzy",
      dateOfBirth: "8/14",
      department: "Crop Production",
      nfcsSociety: "Lectors and Legion of Mary",
      bestLevel: "300 level",
      funMoment: "Hanging out with exquisite members and my girls😊",
      bio: "I am a practical, hands-on and open-minded person with a strong ambition to build a better life for myself while helping others along the way.\nI enjoy exploring new ideas, expressing creativity and solving problems thoughtfully. My goal is to achieve financial independence early, and I'm ready to take bold, purposeful steps to make that happen 😊\n",
      stressfulLevel: "500 level",
      stateOrTribe: "Anambra State / Igbo",
      hobby: "Reading, watching movies and learning new things.",
      relationshipStatus: "Single",
      forumPaddy: "Mary, Esther, Doris, Faith, Michael, Emmanuel and Gucho",
      forumCrush: "Nil",
      bibleVerse: "Habakkuk 2 verse 3",
      favQuote:
        "Forget what lies behind and strain forward to what lies ahead.",
      favSlang: "God dey",
      japaOrStay: "Japa",
      skill:
        "Artistry (Writing, Drawing and Makeup), listening skill and Oriflame ambassador.",
      partingWords: "Never give up. Know what you want, get it and get out.",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1Et3qD2RYChdG5sahqltlhJn7pNJ42NyL",
    },
    {
      id: "14",
      name: "Ugbajeh Jude Ojonugwa",
      fullName: "Ugbajeh Jude Ojonugwa",
      nickname: "Akachukwu",
      dateOfBirth: "5/31",
      department: "Quantity Surveying",
      nfcsSociety: "Member",
      bestLevel: "400 level",
      funMoment: "Solemity Of Christ The King",
      bio: "\"I'm Jude Ojonugwa Ugbajeh, a final-year Quantity Surveying student,With a strong academic foundation. I'm passionate about construction management,cost optimization and ensuring construction projects are delivered on time and within budget. I'm excited to apply my skills and knowledge to make a positive impact in the industry.\"\n",
      stressfulLevel: "200 Level",
      stateOrTribe: "Kogi/Igala",
      hobby: "Listening to Music and Cooking",
      relationshipStatus: "In a relationship",
      forumPaddy: "Sadoma/Ibrahim Labu(Twenty)",
      forumCrush: "Nil",
      bibleVerse: "Psalm 70",
      favQuote: "Hustle, Loyalty And Respect",
      favSlang: "YOU DY WYN!",
      japaOrStay: "Japa",
      skill: "Fish Farming",
      partingWords:
        "Time we tell but first Keep your head up, foucs and try to be the best of your kind. ",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1XI62JMdEXofYxlHHcECAsAwAEYyoYDtr",
    },
    {
      id: "15",
      name: "Happiness Simon",
      fullName: "Happiness Simon",
      nickname: "Princess",
      dateOfBirth: "1/15",
      department: "Microbiology",
      nfcsSociety: "Church warden",
      bestLevel: "400l",
      funMoment: "With Exquisite family",
      bio: "Simple and easy going",
      stressfulLevel: "300l",
      stateOrTribe: "Benue state /Igede",
      hobby: "Cooking and reading",
      relationshipStatus: "In a relationship",
      forumPaddy: "Abutu Emmy, Aluta Joeboy & Osas",
      forumCrush: "Nil",
      bibleVerse: "Psalm 46:5",
      favQuote:
        "Beautiful things happens when you distance yourself from negativity",
      favSlang: "On God",
      japaOrStay: "Japa",
      skill: "Hairstylist",
      partingWords: "Keep pushing..",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1zi0N58JoKCbF3j0r689sVsZYSzlyg7bX",
    },
    {
      id: "16",
      name: "Ameh Regina Gracious",
      fullName: "Ameh Regina Gracious",
      nickname: "Sparklin-Grace",
      dateOfBirth: "11/29",
      department: "Biochemistry",
      nfcsSociety: "Legion/CCRN",
      bestLevel: "500l",
      funMoment: "300L exquisite family picnic",
      bio: "Standing tall at 5'11, I'm a child of God, a basketball enthusiast, and a model-like lady with a soft heart. I'm grateful for the journey that has brought me to this milestone, and I'm excited to celebrate with my loved ones!",
      stressfulLevel: "300L",
      stateOrTribe: "Benue state",
      hobby:
        "Singing, alone time, playing basketball, eating and having fun with my paddies.",
      relationshipStatus: "In a relationship",
      forumPaddy: "Jovita aka JoJo ❤️",
      forumCrush: "Nil",
      bibleVerse: "Philippians 1 vs 6",
      favQuote: "What is worth doing, is worth doing well.",
      favSlang: "Oh chim! No be lie Sha😂",
      japaOrStay: "Stay",
      skill: "Graphics designer/ business woman",
      partingWords:
        "Always remember to put God first, Remember, He's the author and He has the manual for your life, He knows the exact paths that leads to the fulfillment of your purpose.",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1lBHkwz6PN2Bt5wqkvnXneSK7EeDWe3VR",
    },
    {
      id: "17",
      name: "Adama Benedict Unubi",
      fullName: "Adama Benedict Unubi",
      nickname: "Hertz",
      dateOfBirth: "1/16",
      department: "Chemistry",
      nfcsSociety: "Nill",
      bestLevel: "300",
      funMoment: "Graduation day",
      bio: "Cool , calm and collected",
      stressfulLevel: "500",
      stateOrTribe: "Kogi/Igala",
      hobby: "Football",
      relationshipStatus: "Single",
      forumPaddy: "Peter",
      forumCrush: "One cute lil mama",
      bibleVerse: "Jeremiah 29:11",
      favQuote: "Let them hate , as long as they fear.",
      favSlang: "No worry, if e clear e go clear",
      japaOrStay: "Japa",
      skill: "Financial adviser",
      partingWords:
        "Believe and trust in God, believe in your abilities and strengths. Everything will work out just fine",
      imageUrl:
        "https://drive.google.com/thumbnail?id=17EMDW3hOABGOqdvARriCiUOm_JhomHDS",
    },
    {
      id: "18",
      name: "Otokpa Peter Joseph",
      fullName: "Otokpa Peter Joseph",
      nickname: "RockBliz",
      dateOfBirth: "12/28",
      department: "CHEMISTRY",
      nfcsSociety: "SHC, AND JTL",
      bestLevel: "300 LEVEL",
      funMoment: "FORUM MEETINGS AND 400 LEVEL GET TOGETHER",
      bio: "DISCIPLINED,FOCUSED, DETERMINED....\n",
      stressfulLevel: "400 LEVEL",
      stateOrTribe: "BENUE/IDOMA",
      hobby: "READING,SORTING OF INTERNET AND WATCHING MOVIES",
      relationshipStatus: "In a relationship",
      forumPaddy: "DEM PLENTY",
      forumCrush: "HMMM",
      bibleVerse: "Philippians 4:13",
      favQuote:
        "FOR YOU TO GET TO YOUR DESTINATION,YOU MOST GIVE A DESTINATION",
      favSlang: "OMOOO....ON GOD",
      japaOrStay: "Japa",
      skill: "ELECTRICIAN",
      partingWords: "DON'T ALLOW ANYONE TO DEFINE YOU....",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1sBE-RWG0rjWUm4BwdRDikfOQq4wngjdu",
    },
    {
      id: "19",
      name: "Alphonsus Victor",
      fullName: "Alphonsus Victor",
      nickname: "~Sirvic",
      dateOfBirth: "12/20",
      department: "Science Education",
      nfcsSociety: "Forum",
      bestLevel: "500",
      funMoment: "Nill",
      bio: "I'm someone who loves learning new things, meeting people, and making a difference wherever I can.\n",
      stressfulLevel: "300",
      stateOrTribe: "Enugu / Igbo",
      hobby: "Playing football and reading",
      relationshipStatus: "In a relationship",
      forumPaddy: "Joeboy",
      forumCrush: "Nill",
      bibleVerse:
        "Philippians 4:13 “I can do all things through Christ who strengthens me.",
      favQuote: "Don’t be afraid to give up the good to go for the great",
      favSlang: "Trust the process",
      japaOrStay: "Japa",
      skill: "Online hustle",
      partingWords: "Anything worth doing is worth doing well",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1X9Nhr1IbCZZLacph5s9dGFeT0ub5Q1lg",
    },
    {
      id: "20",
      name: "Thomas Kambai Stephen",
      fullName: "Thomas Kambai Stephen",
      nickname: "Mettle/Toma",
      dateOfBirth: "9/18",
      department: "Mechatronics Engineering",
      nfcsSociety: "Divine Mercy",
      bestLevel: "400 level",
      funMoment: "None in particular. Anytime I am laughing.",
      bio: "I am a very funny and Intelligent guy that hails from the Moroa tribe in Kaduna State. A foodie that appreciates good food; my favourite been pounded yam and egusi. I love music and playing sports. I have a passion for anything tech and consider myself an ambivert. Enjoy hanging out with people who have good sense of humor and diplomatic. Just an overall cool guy.",
      stressfulLevel: "300 level",
      stateOrTribe: "Kaduna/ Moroa",
      hobby: "Playing sports and listening to music",
      relationshipStatus: "Single",
      forumPaddy: "Vince",
      forumCrush: "None",
      bibleVerse: "I don forget sef",
      favQuote: "Life na Jeje",
      favSlang: "Omo",
      japaOrStay: "Stay",
      skill: "Coding",
      partingWords:
        "Make sure your primary purpose for coming FUT is achieved and make your parents proud.",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1hnVJtf_aEB4LHRpsXGUcdtktUsGTMilu",
    },
    {
      id: "21",
      name: "Iweobi Joyce chidalu",
      fullName: "Iweobi Joyce chidalu",
      nickname: "Nil",
      dateOfBirth: "1/6",
      department: "Crop Production",
      nfcsSociety: "NFCS Brigade, church warden, legion of mary",
      bestLevel: "300 level",
      funMoment: "Whenever am with my clique",
      bio: "Just a girl who is compassionate and outspoken who advocates for others and provides support for those in need, passionate about humanitarian work and making a positive impact. Who Enjoy Playing and watching football, value dedication and commitment, and cherish meaningful friendships. ",
      stressfulLevel: "200 level",
      stateOrTribe: "Imo",
      hobby:
        "Watching sports, listening to music , taking pictures and videos of every moments",
      relationshipStatus: "Single",
      forumPaddy: "Saratu doma, Adekemi faustina and mary ogbadoyi",
      forumCrush: "Nil",
      bibleVerse: "Philippians 4 :13",
      favQuote: "It's not about the starting point, but the finish line.",
      favSlang: "Hope dey!",
      japaOrStay: "Stay",
      skill: "Business oriented",
      partingWords:
        "In all you do please put God first, believe in yourself and your abilities, choose what works for you and put in your very best in it, lastly do not quite because you started badly, you can still make a good result with the little time left.",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1R-75dBd0SfkVlCrsMCyhx25JOhyKnhH4",
    },
    {
      id: "22",
      name: "Divine Taiwo",
      fullName: "Divine Taiwo",
      nickname: "Vince",
      dateOfBirth: "7/12",
      department: "Applied Geophysics",
      nfcsSociety: "Nil",
      bestLevel: "100",
      funMoment: "Can’t think of one",
      bio: "Quiet eyes, loud soul. I don’t shout to shine",
      stressfulLevel: "300",
      stateOrTribe: "Ekiti State",
      hobby: "Watching movie, playing games",
      relationshipStatus: "Single",
      forumPaddy: "Cecilia",
      forumCrush: "She’s probably reading this now",
      bibleVerse: "Job 8:7",
      favQuote: "The quieter you become, the more you can hear",
      favSlang: "Omo",
      japaOrStay: "Stay",
      skill: "Concierge-in-training",
      partingWords:
        "Keep exploring, stay open to new ideas, and let the quiet moments spark your greatest insights. Best of luck on your journey!",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1r7lQhxNIyx4r75TYRSU9QTRR0tFvoGyW",
    },
    {
      id: "23",
      name: "Ogechi Vivienne Obidigbo",
      fullName: "Ogechi Vivienne Obidigbo",
      nickname: "Splashy Vivy",
      dateOfBirth: "6/14",
      department: "Agricultural extension and rural development",
      nfcsSociety: "CCRN",
      bestLevel: "200 level",
      funMoment: "Spending time with family and friends",
      bio: "I'm easy-going, friendly, free spirited, dedicated, intelligent. I smile alot and I love doing things/being around people that makes me happy. I dislike disrespect, dishonesty, and backbiters.",
      stressfulLevel: "300 level",
      stateOrTribe: "Anambra state/Igbo",
      hobby: "Reading novels, watching movies, eating, and sleeping😉🤭",
      relationshipStatus: "In a relationship",
      forumPaddy: "Maria Ezeobinwa😘",
      forumCrush: "None",
      bibleVerse: "Jeremiah 29 vs 11",
      favQuote: "What will be will be",
      favSlang: "Jehovah bu eze (God is King)",
      japaOrStay: "Japa",
      skill: "Online entrepreneur",
      partingWords:
        "There are no short cuts to success. When the going gets tough, keep going. Trust God and trust the process. At the end of the day, you will be glad you did. ",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1WCGBdcBafL-PJg9sH6PRUDdGgD09kILu",
    },
    {
      id: "24",
      name: "Rachael Iduh Onyemowo",
      fullName: "Rachael Iduh Onyemowo",
      nickname: "Ray",
      dateOfBirth: "3/31",
      department: "Mathematics",
      nfcsSociety: "Church warden",
      bestLevel: "400 lvl",
      funMoment: "Fyb dinner night 2023 set",
      bio: "A lover of Jesus",
      stressfulLevel: "300lvl",
      stateOrTribe: "Okpokwu in Benue state/ Idoma",
      hobby: "Looking good",
      relationshipStatus: "Single",
      forumPaddy: "I don’t have",
      forumCrush: "I don’t have",
      bibleVerse: "Psalms 91",
      favQuote: "Jesus above all",
      favSlang: "Dey for who dey for you",
      japaOrStay: "Japa",
      skill: "Fashion designer",
      partingWords: "Just keep doing your best and allow God perfect it",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1woE9kjXrQWU_y9W67JLmcwNvIA0rRpNC",
    },
    {
      id: "25",
      name: "Kuanum Msughter",
      fullName: "Kuanum Msughter",
      nickname: "",
      dateOfBirth: "5/26",
      department: "Quantity Survey",
      nfcsSociety: "Legion of Mary, Divine Mercy.",
      bestLevel: "400l",
      funMoment: "*",
      bio: "I like peace",
      stressfulLevel: "300l",
      stateOrTribe: "Benue, Tiv",
      hobby: "Still searching",
      relationshipStatus: "In a relationship",
      forumPaddy: "Alfred",
      forumCrush: "They many oh 😂",
      bibleVerse: "Psalms 37:5",
      favQuote:
        "There's no passion to be found playing small in settling for a life that is less than the one you're capable of living.",
      favSlang: "Can't think of one",
      japaOrStay: "Stay",
      skill: "",
      partingWords:
        "Don't say it's not \"F\" so I'm ok, always strive for a higher grade.",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1HKTmoWi6v3iTbv3hGbtmLDFVrtCG9ejh",
    },
    {
      id: "26",
      name: "PIUS GODSAVE PETER",
      fullName: "PIUS GODSAVE PETER",
      nickname: "Pioneer",
      dateOfBirth: "1/1",
      department: "AGRICULTURAL ECONOMICS AND FARM MANAGEMENT",
      nfcsSociety: "None",
      bestLevel: "400",
      funMoment: "Church cleaning",
      bio: "Funny",
      stressfulLevel: "500",
      stateOrTribe: "BENUE/IDOMA",
      hobby: "Drawing and listening to music",
      relationshipStatus: "Single",
      forumPaddy: "Doris",
      forumCrush: "None",
      bibleVerse: "Matt 11:29",
      favQuote:
        "If one does not put his heart and desire on people Neva shall his heart be broken",
      favSlang: "Omo life na figure of speech",
      japaOrStay: "Japa",
      skill: "Tailoring",
      partingWords: "Omo build from year one",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1-UqimkWvOAissn1Q4vGHZUeH1ZQGfYej",
    },
    {
      id: "27",
      name: "Omoja Stanley ojonugwa",
      fullName: "Omoja Stanley ojonugwa",
      nickname: "Onowu",
      dateOfBirth: "12/16",
      department: "Surveying and Geoinformatics",
      nfcsSociety: "Nill",
      bestLevel: "400l",
      funMoment: "Picnic in 2023",
      bio: "Curious to know more",
      stressfulLevel: "300l",
      stateOrTribe: "Kogi/ igala",
      hobby: "Having conversations",
      relationshipStatus: "Single",
      forumPaddy: "Everyone",
      forumCrush: "None",
      bibleVerse: "Proverbs 3:5-6",
      favQuote: "God knows best",
      favSlang: "All is well",
      japaOrStay: "Japa",
      skill: "GIS analyst",
      partingWords: "Hold on to God and protect your mental health. ",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1_eSwtaPUxIfI1HZZeIJdePpBC9TbTpmL",
    },
    {
      id: "28",
      name: "Ayaka Stephen abene",
      fullName: "Ayaka Stephen abene",
      nickname: "Popo",
      dateOfBirth: "1/7",
      department: "Mechanical engineering",
      nfcsSociety: "Sacred heart choir",
      bestLevel: "500l",
      funMoment: "winnig the NFCS week",
      bio: "😂🤔😒",
      stressfulLevel: "300l",
      stateOrTribe: "Nasarawa/ Eggon",
      hobby: "Football, playing instruments",
      relationshipStatus: "Single",
      forumPaddy: "All my guys",
      forumCrush: "Jovita",
      bibleVerse: "Psalm 121",
      favQuote: "Now I know",
      favSlang: "God Abeg",
      japaOrStay: "Japa",
      skill: "Anything online / aircraft maintenance",
      partingWords:
        "Is not too late continue the struggle you will get there/ make it",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1vKx-ALPoualkaF40VdtZsRRU9KH2b4-5",
    },
    {
      id: "29",
      name: "MASESHIN TERHIDE JUDE",
      fullName: "MASESHIN TERHIDE JUDE",
      nickname: "Bigger fish",
      dateOfBirth: "12/4",
      department: "URBAN AND REGIONAL PLANNING",
      nfcsSociety: "Legion of Mary/ Talent Theater 🎭",
      bestLevel: "300l",
      funMoment:
        "As a fresher playing a football match against 500l in Nfc's week",
      bio: "I'm a barber with a PASSION FOR PRECISION, and I also have a DRAMATIC FLAIR. I'm fueled by curiosity love diving into debates and always speak my mind with honesty - no grudges, just AUTHENTICITY.",
      stressfulLevel: "400l",
      stateOrTribe: "Benue/ Tiv",
      hobby: "Football at all levels",
      relationshipStatus: "In a relationship",
      forumPaddy: "Bitrus Obaze",
      forumCrush: "Fredrica",
      bibleVerse:
        "No favorite Bible quote in particular, but I live by the principles of kindness, honesty, and compassion.",
      favQuote: "Be the change you want to see in thee world 🌎",
      favSlang: "E no get as e wan be way e Neva be b4 🪖",
      japaOrStay: "Stay",
      skill: "Barber",
      partingWords:
        "Do it even if it doesn't make sense to all make sense only when you graduate",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1NamTIXNsj_ab34TkTAopPzcW3_ld83DV",
    },
    {
      id: "30",
      name: "Nwakuche Emmanuel",
      fullName: "Nwakuche Emmanuel",
      nickname: "Skentee",
      dateOfBirth: "5/22",
      department: "Agricultural and Bioresources Engineering",
      nfcsSociety: "Congregation",
      bestLevel: "400l",
      funMoment: "NFCS picnic",
      bio: "Just a striving young man, aspiring for the best",
      stressfulLevel: "300l",
      stateOrTribe: "Imo/Igbo",
      hobby: "Footballing, movies",
      relationshipStatus: "Single",
      forumPaddy: "Onume,Chizoba,Gucho,Eric",
      forumCrush: "None currently",
      bibleVerse: "1 Thessalonians 5:16",
      favQuote: "Always Aspire to Acquire the Desire you Admire.",
      favSlang: "You think say na play",
      japaOrStay: "Japa",
      skill: "Hair stylist",
      partingWords:
        "Put God first, work smart, always take a deep breath, life na one.",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1V4SCrcdBEhyk2swWSOZTBPt1XiVdMprN",
    },
    {
      id: "31",
      name: "Ejeh Mercy Jumai",
      fullName: "Ejeh Mercy Jumai",
      nickname: "Lulu❤️",
      dateOfBirth: "12/4",
      department: "Building",
      nfcsSociety: "Nillll",
      bestLevel: "200l",
      funMoment: "Mass ( when choir sings)",
      bio: "I'm free, fun loving and warm hearted person and a cheerful giver when I have. I no like when you take my kindness for granted",
      stressfulLevel: "100l",
      stateOrTribe: "Kogi/Igala",
      hobby: "Traveling, listening to music etc",
      relationshipStatus: "Single",
      forumPaddy: "Praise",
      forumCrush: "Nillll",
      bibleVerse: "Psalm 40",
      favQuote: "Lass lass we go dey alright",
      favSlang: "Kaiii",
      japaOrStay: "Stay",
      skill: "Mummy and Daddy's girl 😍",
      partingWords: "There's more to life than school",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1-5dLSuJbGb-SyhONfDBGx1210lplTpcF",
    },
    {
      id: "32",
      name: "Iwuamadi Joy",
      fullName: "Iwuamadi Joy",
      nickname: "Joyful",
      dateOfBirth: "6/25",
      department: "Chemistry",
      nfcsSociety: "Choir and JTL",
      bestLevel: "200l",
      funMoment: "Revival 2023 and NFCS week 2023",
      bio: "I guess you know already",
      stressfulLevel: "300l",
      stateOrTribe: "Imo / Igbo",
      hobby: "Reading, singing, designing, teaching, traveling",
      relationshipStatus: "In a relationship",
      forumPaddy: "Jovita and Onume",
      forumCrush: "Jason😍",
      bibleVerse: "Isaiah 41 vs 10",
      favQuote:
        "Everything you dream about and wish is on the other side of fear",
      favSlang: "Nawaooo",
      japaOrStay: "Japa",
      skill: "Ui/Ux design and Teaching",
      partingWords: "Futminna is not for the weak, so stay strong and focused",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1qXiPLyJJHkE7shm7FGjVnnyLT_Q_1KnD",
    },
    {
      id: "33",
      name: "Emmanuella chinonye Ezeja",
      fullName: "Emmanuella chinonye Ezeja",
      nickname: "Ella",
      dateOfBirth: "12/4",
      department: "Chemistry",
      nfcsSociety: "Nill",
      bestLevel: "400l",
      funMoment: "During exquisite general meetings",
      bio: "I'm a semi introvert",
      stressfulLevel: "300l",
      stateOrTribe: "Enugu state/ Igbo",
      hobby: "Watching anime and cooking",
      relationshipStatus: "Single",
      forumPaddy: "Francis chima",
      forumCrush: "🤭",
      bibleVerse: "Psalm 121vs1-8",
      favQuote: "Freedom is not given it's taken",
      favSlang: "We go dey alright",
      japaOrStay: "Japa",
      skill: "Skill and side hustle",
      partingWords: "But God for front and just make money",
      imageUrl:
        "https://drive.google.com/thumbnail?id=171mUfmgCOtqKw1AIN-nH6SB-wXUw5Yew",
    },
    {
      id: "34",
      name: "TIMBIR DAVID",
      fullName: "TIMBIR DAVID",
      nickname: "Mazi Okoro",
      dateOfBirth: "9/30",
      department: "Quantity surveying",
      nfcsSociety: "Altarknight, JTL, NFCS BRIGADE",
      bestLevel: "200l",
      funMoment: "Hangouts",
      bio: "I am a visionary leader with exception leadership qualities. In NFCS, I served as: 1. Chief sacristan 2. Altar servers President. 3. Exquisite family coordinator. 4. RSM of NFCS BRIGADE.\nAs a politician I've served as: 1. NAQSS PRO 2. Honourable member representing Quantity surveying for 2 sessions. 3. Chairman environmental constitution review. 4. NAQSS PRESIDENT 4. General class rep environmental. 6. Gen sec. Environmental stakeholders assembly.",
      stressfulLevel: "300l",
      stateOrTribe: "BENUE/TIV",
      hobby: "Politicking/site seeing",
      relationshipStatus: "In a relationship",
      forumPaddy: "M .O. V",
      forumCrush: "No be me Una want set up",
      bibleVerse:
        "Ephesians 2:8-9 : For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: not of works, lest any man should boast.",
      favQuote: "Do it afraid",
      favSlang: "Omooo",
      japaOrStay: "Japa",
      skill: "Interior design",
      partingWords:
        "We are an exceptional people, let ho out there and dominate the world.",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1gtRo3yRddFdz0ArUVgsTugRT3CY-5Z4h",
    },
    {
      id: "35",
      name: "Ochigbo john",
      fullName: "Ochigbo john",
      nickname: "Johnito",
      dateOfBirth: "9/23",
      department: "Microbiology",
      nfcsSociety: "Church warden",
      bestLevel: "200l",
      funMoment: "Exquisite Pinic",
      bio: "Am calm and free minded person",
      stressfulLevel: "500l",
      stateOrTribe: "Benue/idoma",
      hobby: "Playing games,listening to music and cooking",
      relationshipStatus: "Single",
      forumPaddy: "Oche, Abutu and kelvin",
      forumCrush: "None",
      bibleVerse: "Psalm 91",
      favQuote: "Let love lead",
      favSlang: "God over everything",
      japaOrStay: "Stay",
      skill: "Working toward acquiring one",
      partingWords: "With God,you will redefine what impossible",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1DCDLm-IRUn8vydXT7St1eDPcjDBxorMJ",
    },
    {
      id: "36",
      name: "AJODO HYCIENT WISDOM",
      fullName: "AJODO HYCIENT WISDOM",
      nickname: "WISZOEGO",
      dateOfBirth: "3/3",
      department: "MATERIALS ENGINEERING",
      nfcsSociety: "Member of SHC",
      bestLevel: "300l",
      funMoment: "Playing",
      bio: "I'm simple and introvert",
      stressfulLevel: "200l",
      stateOrTribe: "KOGI/IGALA",
      hobby: "Reading/eating",
      relationshipStatus: "In a relationship",
      forumPaddy: "Stanley",
      forumCrush: "Nobody",
      bibleVerse: "Daniel 12 :3",
      favQuote: "Do to other want they did to you and don't be laxy",
      favSlang: "Na God dey do am not man",
      japaOrStay: "Japa",
      skill: "Business/tech",
      partingWords: "Read well oo, FUT no moimoi",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1uROhldn1nfhSLsgo090VwFkbbTMPdZPN",
    },
    {
      id: "37",
      name: "NWOSU VALENTINE OBINNA",
      fullName: "NWOSU VALENTINE OBINNA",
      nickname: "Alchemist",
      dateOfBirth: "12/14",
      department: "GEOPHYSICS",
      nfcsSociety: "LEGION OF MARY",
      bestLevel: "400l",
      funMoment: "Exquisite Picnic",
      bio: "Untamed",
      stressfulLevel: "100l",
      stateOrTribe: "IMO STATE",
      hobby: "Driving",
      relationshipStatus: "In a relationship",
      forumPaddy: "Lokosa",
      forumCrush: "Miss Bold & Beautiful",
      bibleVerse: "Proverb 14:14",
      favQuote: "Kings are made, not born",
      favSlang: "We gonna make it",
      japaOrStay: "Japa",
      skill: "Hydrographic Data Analyst, Truck Driver",
      partingWords: "Go Get It",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1Y5h_x6MLPKRtK29X6tB1iKBb0AgmdXWM",
    },
    {
      id: "38",
      name: "Adagedo Solomon Israel",
      fullName: "Adagedo Solomon Israel",
      nickname: "Nill",
      dateOfBirth: "5/5",
      department: "Mechatronics",
      nfcsSociety: "Choir",
      bestLevel: "500l",
      funMoment: "Every forum gathering.",
      bio: "Just a random dude who believes in empathy kindness, and love.",
      stressfulLevel: "300l",
      stateOrTribe: "Benue/Idoma",
      hobby: "Living...",
      relationshipStatus: "Single",
      forumPaddy: "Everybody",
      forumCrush: "Sharona",
      bibleVerse: "Psalm 91",
      favQuote: "What you do frequently becomes your frequency.",
      favSlang: "",
      japaOrStay: "Japa",
      skill: "Backend / Machine learning engineer",
      partingWords: "",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1pyExM6lHU6c81bEYQsiQDZeWZqNEwBm1",
    },
    {
      id: "39",
      name: "Shar Alfred Wuese",
      fullName: "Shar Alfred Wuese",
      nickname: "Nil",
      dateOfBirth: "6/1",
      department: "Animal production Technology",
      nfcsSociety: "Legion, purgatorial society",
      bestLevel: "400l",
      funMoment: "Exquisite family Picnic",
      bio: "Calm always",
      stressfulLevel: "300l",
      stateOrTribe: "Benue",
      hobby: "playing football",
      relationshipStatus: "Single",
      forumPaddy: "Robert",
      forumCrush: "Nil",
      bibleVerse: "psalm 123",
      favQuote: "The Devil you know is better than the Angel you don't know",
      favSlang: "Dey play nah",
      japaOrStay: "Stay",
      skill: "Amazon KDP",
      partingWords: "Your Skill is better than your degree 💯",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1O-GkWbswPIjLL42jutM29FrQXWuoykOw",
    },
    {
      id: "40",
      name: "Theresa Ngodoo Agena",
      fullName: "Theresa Ngodoo Agena",
      nickname: "Tess",
      dateOfBirth: "9/21",
      department: "Agric extension",
      nfcsSociety: "Saint Vincent de Paul",
      bestLevel: "400l",
      funMoment: "Purple funfest",
      bio: "I love God and I love food and curating new recipes",
      stressfulLevel: "300l",
      stateOrTribe: "Benue state/ Tiv",
      hobby: "Cooking, yapping, making money",
      relationshipStatus: "Single",
      forumPaddy: "Micheal Ehianeta and Emmanuel ochaje",
      forumCrush: "All the fine fine ladies 😂",
      bibleVerse: "Psalm 121",
      favQuote: "Life isn’t all bed of roses",
      favSlang: "Omoooo",
      japaOrStay: "Stay",
      skill: "Chefestttt",
      partingWords: "Hold God tight, and work smart",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1MXo-CTc2Kex0GUdExvjTdQNJEBYiaJ9X",
    },
    {
      id: "41",
      name: "Adejoh happiness",
      fullName: "Adejoh happiness",
      nickname: "Tina",
      dateOfBirth: "2/14",
      department: "Quantity surveying",
      nfcsSociety: "SHC",
      bestLevel: "400l",
      funMoment: "Quantity time with love ones",
      bio: "Easy going person",
      stressfulLevel: "500l",
      stateOrTribe: "Kogi/ igala",
      hobby: "Singing, reading and cooking",
      relationshipStatus: "Single",
      forumPaddy: "Peace",
      forumCrush: "None",
      bibleVerse: "Psalm 25",
      favQuote: "With God all things are possible",
      favSlang: "Omo",
      japaOrStay: "Japa",
      skill: "Entrepreneur",
      partingWords: "Giving up is not an option",
      imageUrl:
        "https://drive.google.com/thumbnail?id=15gFNEK34F9Y-o8lseYQcRnKfUrIlq69b",
    },
    {
      id: "42",
      name: "Vershima, Hembafan Veronica",
      fullName: "Vershima, Hembafan Veronica",
      nickname: "Fancyella",
      dateOfBirth: "6/10",
      department: "Urban and Regional Planning",
      nfcsSociety: "Board of Lectors",
      bestLevel: "500l",
      funMoment: "Whenever my exquisite family has a get-together.💗",
      bio: "I am a straightforward person; I love to play a lot, but I hate mind games.",
      stressfulLevel: "300l",
      stateOrTribe: "Benue/Tiv",
      hobby: "Reading (not school books), Exploring ideas for growth.",
      relationshipStatus: "Single",
      forumPaddy: "Favour and Becky",
      forumCrush: "Nil",
      bibleVerse: "Romans 8:1",
      favQuote: "Be your own responsibility.",
      favSlang: "Na wao",
      japaOrStay: "Japa",
      skill: "Fashion Designing, FB/IG Ads, Ghostwriting.",
      partingWords:
        "Be responsible for yourself and always put God first in everything you do - never let Him go.",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1i03uPz8xwKaip9EmzErBI6MrcQr0tFAI",
    },
    {
      id: "43",
      name: "Emmanuel Wilfred Ochai",
      fullName: "Emmanuel Wilfred Ochai",
      nickname: "Sino",
      dateOfBirth: "10/11",
      department: "Chemical Engineering",
      nfcsSociety: "Altar knight, YCS, Tech unit & Church warden",
      bestLevel: "200l",
      funMoment: "Exco Tenure and NFCS weeks",
      bio: "What I plan for, I achieve it no matter the cost",
      stressfulLevel: "300l",
      stateOrTribe: "KOGI STATE/Igala",
      hobby: "Competing and talking",
      relationshipStatus: "Single",
      forumPaddy: "Sunday AB",
      forumCrush: "Chisom lifestyle",
      bibleVerse: "Them many",
      favQuote: "It's now than never",
      favSlang: "God de",
      japaOrStay: "Stay",
      skill: "Editing, talking",
      partingWords: "As it reach me, it go reach you. Everything na time",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1XHWCGk76OHbHmn5UcWluugGhvrgLKupj",
    },
    {
      id: "44",
      name: "Orasaa Doose Favour",
      fullName: "Orasaa Doose Favour",
      nickname: "Daisy",
      dateOfBirth: "3/6",
      department: "Urban and regional planning",
      nfcsSociety: "Nill",
      bestLevel: "400l",
      funMoment: "Grandpa's sermons",
      bio: "Am cool and straight forward",
      stressfulLevel: "300l",
      stateOrTribe: "Benue /Tiv",
      hobby: "Washing and cleaning",
      relationshipStatus: "In a relationship",
      forumPaddy: "Veronica and Becky",
      forumCrush: "Nill",
      bibleVerse: "Psalms 37:5",
      favQuote: "If it yours it will come back to you",
      favSlang: "God no go shame us",
      japaOrStay: "Japa",
      skill: "Digital marketing",
      partingWords: "Strive harder",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1Q9VcIiI_puBMRBMzIDe3KOLw3hP07XrK",
    },
    {
      id: "45",
      name: "Izekwe Ndubuisi Joshua",
      fullName: "Izekwe Ndubuisi Joshua",
      nickname: "Joe_kings",
      dateOfBirth: "5/27",
      department: "Geoinformatics/Surveying",
      nfcsSociety: "CCRN",
      bestLevel: "400l",
      funMoment: "The first mass with grandpa!",
      bio: "I am calm, kind but not nice!",
      stressfulLevel: "300l",
      stateOrTribe: "Ebonyi/Igbo",
      hobby: "Watching leadership documentaries!",
      relationshipStatus: "Single",
      forumPaddy: "Nill",
      forumCrush: "E plenty",
      bibleVerse: "Jeremiah 31:3",
      favQuote: "The truth will set you free, but first it will piss you off!.",
      favSlang: "E choke!",
      japaOrStay: "Japa",
      skill: "Business",
      partingWords:
        "Having a good heart in a wicked world feels like wearing a white in the rain; pure but soaked in regrets. However, don't let the mud turn you cold. Be kind but never nice!",
      imageUrl:
        "https://drive.google.com/thumbnail?id=11aRE-VRVK_J0KNVLX8D1W7gDvZvpNQrV",
    },
    {
      id: "46",
      name: "Atsewe Joshua",
      fullName: "Atsewe Joshua",
      nickname: "Josh.",
      dateOfBirth: "3/17",
      department: "Material and metallurgical engineering",
      nfcsSociety: "Jtl, legion of Mary",
      bestLevel: "500l",
      funMoment: "Exquisite and gracious banter.",
      bio: "RESERVED!",
      stressfulLevel: "300l",
      stateOrTribe: "Benue/Tiv",
      hobby: "Working with machines.",
      relationshipStatus: "In a relationship",
      forumPaddy: "Nil",
      forumCrush: "Tzgrfwqkpvc",
      bibleVerse: "Psalms 1:1-2",
      favQuote:
        "Godliness isn't just the act of loving, it's transcend to loving humanity too",
      favSlang: "Everyone go dey fine las las, no d assume God.",
      japaOrStay: "Stay",
      skill: "Anything industrial machine.",
      partingWords: "Everyday...PRAY!!!",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1F8hPnT-adJjseCSmvetiwXgJRiB0lT6x",
    },
    {
      id: "47",
      name: "Obute ladi",
      fullName: "Obute ladi",
      nickname: "Miss Sanity",
      dateOfBirth: "12/15",
      department: "Agric economics and farm management",
      nfcsSociety: "Legion",
      bestLevel: "500l",
      funMoment: "Hanging out with friends",
      bio: "I love studying a lot",
      stressfulLevel: "300l",
      stateOrTribe: "Benue/ idoma",
      hobby: "Studying",
      relationshipStatus: "Single",
      forumPaddy: "None",
      forumCrush: "None",
      bibleVerse: "Psalm 51:10-11",
      favQuote:
        "Procrastination is the beginning of laziness which leads to failure",
      favSlang: "God abeg",
      japaOrStay: "Japa",
      skill: "Skill",
      partingWords: "Keep pushing and never think of giving up no matter what",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1H6UH2RquUqiuhpGgIhN9HLrIPaINgyHJ",
    },
    {
      id: "48",
      name: "Francis Esther Ugbedeojo",
      fullName: "Francis Esther Ugbedeojo",
      nickname: "Salt of the earth",
      dateOfBirth: "3/22",
      department: "Telecommunication Engineering",
      nfcsSociety: "Legion of Mary & Divine Mercy",
      bestLevel: "400l",
      funMoment: "Exquisite final year choir rehearsal & Picnic 🧺",
      bio: "Am fun to be with",
      stressfulLevel: "300l",
      stateOrTribe: "Kogi state/ Igala",
      hobby: "Reading & Listening to music",
      relationshipStatus: "Single",
      forumPaddy: "Joy,NWJ, Ebuka,John, David ,Maik",
      forumCrush: "Him",
      bibleVerse: "Psalms 121 vs 1 -2",
      favQuote: "Pikin wey no get helper suppose get sense",
      favSlang: "OMO 🥹, Fuck",
      japaOrStay: "Japa",
      skill: "Baking,Fragrance vendor",
      partingWords: "School no be scam..Take your studies serious 🙏🏽",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1E76LQgguEHav29V2mwAenAmRegrbC_ry",
    },
    {
      id: "49",
      name: "Uchebueze Ebuka",
      fullName: "Uchebueze Ebuka",
      nickname: "De telecom",
      dateOfBirth: "12/23",
      department: "Telecommunication Engineering",
      nfcsSociety: "Jtl and Church warden",
      bestLevel: "300l",
      funMoment: "Nfcs week",
      bio: "Am a very serious person when it comes to serious matters.",
      stressfulLevel: "300l",
      stateOrTribe: "Imo/Igbo",
      hobby: "Praying, Reading and Cooking",
      relationshipStatus: "In a relationship",
      forumPaddy: "Mani and Esther",
      forumCrush: "Francis Esther",
      bibleVerse: "Ps.119 vs 99",
      favQuote: "Work harder, because nobody cares about you.",
      favSlang: "God abeg help me oo",
      japaOrStay: "Japa",
      skill: "Technical Analyst, A chef",
      partingWords:
        "Always pray before reading, and pray after reading, if you want to remember.",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1XnsNBcCT6xHiFyfjRHpfKKtuh_8z5D4g",
    },
    {
      id: "50",
      name: "Victor Oluwatimileyin Adeboye",
      fullName: "Victor Oluwatimileyin Adeboye",
      nickname: "Leo",
      dateOfBirth: "11/6",
      department: "Civil Engineering",
      nfcsSociety: "Altar Knights, Church Wardens/NFCS Brigade, Legion of Mary",
      bestLevel: "100l",
      funMoment: "Each time we gather as a family",
      bio: "I am Victor Oluwatimileyin Adeboye, one time this and that, this time...😂, I am very unique in my way.",
      stressfulLevel: "300l",
      stateOrTribe: "Osun/Yoruba",
      hobby: "Singing",
      relationshipStatus: "Single",
      forumPaddy: "The MOV😁",
      forumCrush: "She left the group…",
      bibleVerse: "Jeremiah 29:11",
      favQuote: "Nil",
      favSlang: "Omo",
      japaOrStay: "Japa",
      skill: "Pig farming",
      partingWords:
        "Do your best, do the rest, learn, unlearn, relearn and stay open minded.",
      imageUrl:
        "https://drive.google.com/thumbnail?id=19bGiwjHl7j0qEMvIWxUw4q0tkgDYX5hJ",
    },
    {
      id: "51",
      name: "Emmanuel Akubo Unekwuojo",
      fullName: "Emmanuel Akubo Unekwuojo",
      nickname: "Nuel/Manuel",
      dateOfBirth: "1/19",
      department: "Geophysics",
      nfcsSociety: "Legion of mary, SVP, SHC",
      bestLevel: "100l",
      funMoment: "When everything goes my way.",
      bio: "Someone who wants to do everything and anything he can do.",
      stressfulLevel: "300l",
      stateOrTribe: "Kogi/Igala",
      hobby:
        "Playing violin, football, badminton, anime, series, studying, debating and lots more.",
      relationshipStatus: "In a relationship",
      forumPaddy: "Eveyone I talk to",
      forumCrush: "I don't do that",
      bibleVerse: "Luke 15:4-7",
      favQuote:
        "Consistency is not a joke..what is a joke is you think you can make it without consistency",
      favSlang: "Tatakae",
      japaOrStay: "Japa",
      skill: "Research/UIUX",
      partingWords:
        "You are the main character of this story, don't let anyone deceive you",
      imageUrl:
        "https://drive.google.com/thumbnail?id=117YAhMZiQs51Gvgb0lNlnO6R_jFrY_YA",
    },
    {
      id: "52",
      name: "Ondoma Andrew Owoicholofu",
      fullName: "Ondoma Andrew Owoicholofu",
      nickname: "6lack-dre",
      dateOfBirth: "4/3",
      department: "Biochemistry",
      nfcsSociety: "Nil",
      bestLevel: "200l",
      funMoment: "All the time spent in the lab",
      bio: "Nothing much to say just an introverted guy🤣",
      stressfulLevel: "300l",
      stateOrTribe: "Benue/ Idoma",
      hobby: "Reading and Coding",
      relationshipStatus: "Single",
      forumPaddy: "Joeboy",
      forumCrush: "Nil",
      bibleVerse: "Proverbs 18:1",
      favQuote: "Being broke in your 30's starts in your 20's",
      favSlang: "God abeg",
      japaOrStay: "Japa",
      skill: "Web development",
      partingWords:
        "Stay curious, stay driven, and never stop learning. Wishing you all a bright and successful future.",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1M2k_uurqEt4CDtLblC9fW6Nn57yTee-E",
    },
    {
      id: "53",
      name: "Adekemi Faustina Ajibade",
      fullName: "Adekemi Faustina Ajibade",
      nickname: "Faustie makeover",
      dateOfBirth: "12/15",
      department: "MATHEMATICS",
      nfcsSociety: "Lectors, Choir, Sanctuary cleaner",
      bestLevel: "500l",
      funMoment: "Staying Alive",
      bio: "I am the creative Director/ CEO of Faustie Makeover . I am also a serial ENTERPRENEUR.",
      stressfulLevel: "300l",
      stateOrTribe: "Oyo state",
      hobby: "Singing , dancing , Researching, reading",
      relationshipStatus: "Single",
      forumPaddy: "Eric",
      forumCrush: "I no get",
      bibleVerse: "Jer 29:11",
      favQuote:
        "Respect who get fear who never collect street na General market you fit pick two",
      favSlang: "Omo, Normal, na God o",
      japaOrStay: "Japa",
      skill: "Makeup artistry/ OAP/ Entrepreneur",
      partingWords: "Put God first",
      imageUrl:
        "https://drive.google.com/thumbnail?id=18ZZtmmDnuAlr_MC_IdnkLAaBCrT1mZnc",
    },
    {
      id: "54",
      name: "Zachariah Yakubu Yacham",
      fullName: "Zachariah Yakubu Yacham",
      nickname: "Zax",
      dateOfBirth: "4/6",
      department: "Agricultural economics and farm management",
      nfcsSociety: "Choir",
      bestLevel: "500l",
      funMoment: "Nfcs week",
      bio: "Reserved",
      stressfulLevel: "300l",
      stateOrTribe: "Kaduna state/Bajju",
      hobby: "Traveling, reading, counseling",
      relationshipStatus: "Single",
      forumPaddy: "NM",
      forumCrush: "SD",
      bibleVerse:
        '  "For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future." - Jeremiah 29:11 .',
      favQuote: "Live a life worth living",
      favSlang: "To every step,God is involved",
      japaOrStay: "Japa",
      skill: "Side hustle",
      partingWords: "Anything the mind could conceive can be achieved",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1-1G0X-TxoAPljQyfOeF6TPFXmOBTS7FW",
    },
    {
      id: "55",
      name: "GODWIN JOVITA CHIAMAKA",
      fullName: "GODWIN JOVITA CHIAMAKA",
      nickname: "JOVY",
      dateOfBirth: "11/27",
      department: "INDUSTRIAL CHEMISTRY",
      nfcsSociety: "SVTP &  JTL",
      bestLevel: "500l",
      funMoment: "WAS WHEN I GOT AN EMAIL FROM NNPC FOR SIX MONTHS INTERNSHIP",
      bio: "I SUPPORT MAN U AND NOTHING CAN SEPARATE MY CLUB AND I",
      stressfulLevel: "300l",
      stateOrTribe: "IMO STATE / IGBO",
      hobby: "COOKING , BINGE WATCHING THRILLER MOVIES AND SLEEPING",
      relationshipStatus: "Single",
      forumPaddy: "GRACIOUS and JOY",
      forumCrush: "VICTOR",
      bibleVerse: "NUMBER 6 VS 24",
      favQuote: "YOU ARE MORE THAN ENOUGH. BELIEVE IT",
      favSlang: "GUYYYYYYYYY",
      japaOrStay: "Japa",
      skill: "GOLD DIGGER / FRONTED DEVELOPER",
      partingWords: "LEARN TO CREATE YOUR OWN OPPORTUNITIES",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1p2jylo3HSpM5ebJKfYk57yISUeHNzWCt",
    },
    {
      id: "56",
      name: "Unumfromi Sharon Bagu",
      fullName: "Unumfromi Sharon Bagu",
      nickname: "Rona",
      dateOfBirth: "3/9",
      department: "Urban and Regional Planning",
      nfcsSociety: "None",
      bestLevel: "500l",
      funMoment: "300l Nfcs championing",
      bio: "Nil",
      stressfulLevel: "300l",
      stateOrTribe: "Kaduna/Attakar",
      hobby: "Reading",
      relationshipStatus: "In a relationship",
      forumPaddy: "Nil",
      forumCrush: "Nil",
      bibleVerse: "Jeremiah 29:11",
      favQuote:
        "The best time was yesterday, but the next best time to do something is today",
      favSlang: "It is well",
      japaOrStay: "Stay",
      skill: "Dress making",
      partingWords: "Celebrate your wins regardless, you sef no small",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1zdOh9v-H1z_MFS0f-ZyIH-1IXiunIFdL",
    },
    {
      id: "57",
      name: "Faith Agbo",
      fullName: "Faith Agbo",
      nickname: "Faithie",
      dateOfBirth: "1/25",
      department: "Food science and technology",
      nfcsSociety: "Ccrn and legion",
      bestLevel: "400l",
      funMoment: "400l hangout",
      bio: "Am just simple girl with simple life",
      stressfulLevel: "300l",
      stateOrTribe: "Benue/idoma",
      hobby: "Watching movies and listening to music",
      relationshipStatus: "Single",
      forumPaddy:
        "Chizzy, Esther, Mary , Doris, Gracious, Edwin, Nehemiah Emmanuel and Ebuka",
      forumCrush: "Nil",
      bibleVerse: "Isaiah 43",
      favQuote: "Be still na God the run am",
      favSlang: "God abeg",
      japaOrStay: "Japa",
      skill: "Fashion designer",
      partingWords: "Don't give up because given up is very dangerous",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1G3mzDdlT0p4B-wZAzG1UL11KE6aZGk6Q",
    },
    {
      id: "58",
      name: "Okeke Happiness Anurika",
      fullName: "Okeke Happiness Anurika",
      nickname: "Amber",
      dateOfBirth: "10/26",
      department: "Science Education",
      nfcsSociety: "JTL",
      bestLevel: "400l",
      funMoment: "When I'm creating content",
      bio: " I’m a bold, faith-filled, and expressive soul. I love style, I love creativity, and I don’t hide my light for anyone. I believe in grace over pressure.\n",
      stressfulLevel: "300l",
      stateOrTribe: "Abia/Igbo",
      hobby: "Vlogging",
      relationshipStatus: "Single",
      forumPaddy: "Nill",
      forumCrush: "Nill",
      bibleVerse: "Lamentation 3:22-23",
      favQuote: "If grace got me,who gon' check me?",
      favSlang: "Thank you Jesus",
      japaOrStay: "Japa",
      skill:
        "Hair Styling, Cooking ,Transcribing, Therapy/ Counseling, Content Creating",
      partingWords: "Leave the stress,take the lessons and walk in purpose",
      imageUrl:
        "https://drive.google.com/thumbnail?id=17fh-0ufAQesKRfbcgz_R-bE7GBLO4FJP",
    },
    {
      id: "59",
      name: "Ikyobo kashimana Sandra",
      fullName: "Ikyobo kashimana Sandra",
      nickname: "Kashie",
      dateOfBirth: "4/16",
      department: "Computer engineering",
      nfcsSociety: "Sacred heart Choir",
      bestLevel: "200l",
      funMoment: "When we gather as a family (Exquisite family)",
      bio: "I'm a resilient person and I'm  passionate about growth and impacting people at any point in time and committed to purpose and positive change.",
      stressfulLevel: "300l",
      stateOrTribe: "Benue/Tiv",
      hobby: "Volleyball and cooking",
      relationshipStatus: "In a relationship",
      forumPaddy: "Dem plentyyyy",
      forumCrush: "Okoro baby",
      bibleVerse: "Psalm 119",
      favQuote: "Trust God and trust the process",
      favSlang: "Omoo",
      japaOrStay: "Stay",
      skill: "Frontend development / make tote bags for sale",
      partingWords: "Focus ooo and hold God tight e get why",
      imageUrl:
        "https://drive.google.com/thumbnail?id=16RYcPqVXB6XUgAqk-UyKn0uu7oSH2zZG",
    },
    {
      id: "60",
      name: "Umezeyi Monica cleopatra",
      fullName: "Umezeyi Monica cleopatra",
      nickname: "Cleo",
      dateOfBirth: "9/30",
      department: "Biochemistry",
      nfcsSociety: "SHC",
      bestLevel: "200l",
      funMoment: "NFCS week",
      bio: "I consistently maintain a tranquil,calm and accommodating presence.\"\nI'm calm and easy going,a lover of music \n",
      stressfulLevel: "300l",
      stateOrTribe: "Kogi/Ebira",
      hobby: "Cooking, playing drum, singing",
      relationshipStatus: "Single",
      forumPaddy: "None",
      forumCrush: "None",
      bibleVerse: "Roman 8:14 and ‎Psalm 32:8 ‎",
      favQuote: "It's okay,when you fall down,you can rise again",
      favSlang: "Na God dey run am",
      japaOrStay: "Stay",
      skill: "Catering and confectionery @cleo's bakes ❤️",
      partingWords: "Always be you and trust God in the process.",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1kfZH2IzPdNOWrGTc2df-mXFZhJu8Qls_",
    },
    {
      id: "61",
      name: "Osigbemhe imhonikhe John",
      fullName: "Osigbemhe imhonikhe John",
      nickname: "Lord Jon snow",
      dateOfBirth: "8/10",
      department: "Chemical engineering",
      nfcsSociety: "Non",
      bestLevel: "200l",
      funMoment: "Choir rehearsals",
      bio: "Just that chilled guy, can cook too",
      stressfulLevel: "300l",
      stateOrTribe: "Edo state",
      hobby:
        "Listening to music, reading, watching movies and repairing stuffs",
      relationshipStatus: "Single",
      forumPaddy: "Adoche",
      forumCrush: "Sharon",
      bibleVerse: "I can do all things through Christ who strengthens me",
      favQuote: "See the beauty in everything (look on the bright side)",
      favSlang: "On God",
      japaOrStay: "Japa",
      skill:
        "Virtual assistant, appliance repair Specialist, automobile mechanic",
      partingWords: "Hold God tight, and hold your friends too",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1y-Toh9G9iq0YCJzG32Sl2itYopV5T7Kl",
    },
    {
      id: "62",
      name: "Ezennabuife Eric Chimezie",
      fullName: "Ezennabuife Eric Chimezie",
      nickname: "Eric’s Collection",
      dateOfBirth: "1/9",
      department: "Agricultural and bio resources engineering",
      nfcsSociety: "Nill",
      bestLevel: "400l",
      funMoment: "Picnic with exquisite family before we went for IT",
      bio: "I’m studying agricultural and bio resources engineering, but into business for 3/4 years now and also king of night life 💯…",
      stressfulLevel: "300l",
      stateOrTribe: "IMO/ IGBO",
      hobby: "chilling out with friends and pressing my phone",
      relationshipStatus: "Single",
      forumPaddy: "Gucho, Seember, Mary Ogbadoyi…",
      forumCrush: "J*****",
      bibleVerse: "Songs of Solomon 1:2",
      favQuote:
        "Life it self is a whole risk, no risk no reward! So take the risk and see the difference…",
      favSlang: "Your mind gas dey!",
      japaOrStay: "Japa",
      skill: "Entrepreneur",
      partingWords:
        "Set your goals right, and also balance your life on campus 💯",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1n8kl-XEQTwXXSWG89_7ziB0RmObLhhhp",
    },
    {
      id: "63",
      name: "Awolowo Mary Abidemi",
      fullName: "Awolowo Mary Abidemi",
      nickname: "Imolede",
      dateOfBirth: "10/6",
      department: "Crop production",
      nfcsSociety: "Alter night, legion, charismatic",
      bestLevel: "300l",
      funMoment: "With my C13 beauries 🥰 and Advocate gatherings",
      bio: "Lover of God, smart/intelligent, proudly a Yoruba girl,an extrovert, I love reading books, love anything that brings in money,am a fashion designer",
      stressfulLevel: "500l",
      stateOrTribe: "Oyo/Yoruba",
      hobby: "Reading books, sleeping, watching movies,",
      relationshipStatus: "In a relationship",
      forumPaddy: "Chizzy, Esther, Mani, faith, Edwin",
      forumCrush: "Edwin boo 💗",
      bibleVerse: "Exo 14 Vs 13_14",
      favQuote: "Tough time never last tough people do",
      favSlang: "Hmmmmmmm it is well",
      japaOrStay: "Japa",
      skill: "Fashion design, sells Oriflame product,eggs,books)",
      partingWords:
        "Nothing is impossible, God constant academic first, hustle oooo learn a skill either soft or hard skill",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1J9a9wuoN2hTjQmYA_2vgsoW672CAk1uY",
    },
    {
      id: "64",
      name: "Esther Benjamin",
      fullName: "Esther Benjamin",
      nickname: "Fortune",
      dateOfBirth: "4/27",
      department: "ITE (building technology)",
      nfcsSociety: "SHC/JTL",
      bestLevel: "400l",
      funMoment: "Forum meetings",
      bio: " I'm a fashion designer (a hustler)I do alot of things ,love trying out new things I'm an introvert and a great listener too",
      stressfulLevel: "200l",
      stateOrTribe: "Imo/Igbo",
      hobby: "Makes dress and Stay at home",
      relationshipStatus: "In a relationship",
      forumPaddy: "Osas",
      forumCrush: "The space is too small ,😏",
      bibleVerse: "Prov 3v5-6,1cor15v33",
      favQuote:
        "Always be yourself cherish every moment and be contempt with what you have",
      favSlang: "I no fit shout ooh ,",
      japaOrStay: "Japa",
      skill: "Peanut making and fashion designer",
      partingWords: "Hold God and he will never fail you I promise you",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1ggV5X0DZnBCBs-X6gwkdtjBqkwUxuCu5",
    },
    {
      id: "65",
      name: "Maigida Vincent",
      fullName: "Maigida Vincent",
      nickname: "DEE EAGLE",
      dateOfBirth: "6/24",
      department: "Electrical and Electronics Engineering",
      nfcsSociety: "Legion of Mary",
      bestLevel: "300l",
      funMoment: "None",
      bio: "I love food.",
      stressfulLevel: "100l",
      stateOrTribe: "Niger/Gbagyi",
      hobby: "Cooking and Eating",
      relationshipStatus: "In a relationship",
      forumPaddy: "Prince Luka Kuta",
      forumCrush: "None",
      bibleVerse: "Jeremiah 1:5",
      favQuote: "Lead like an eagle, with vision and courage",
      favSlang: "God dey",
      japaOrStay: "Japa",
      skill: "Computer/Electronics Engineer",
      partingWords: "With God you will go far",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1kjXzdoZb2NMgEF2GPnc_h65LFtpT92mg",
    },
    {
      id: "66",
      name: "Abutu Emmanuel Agaba",
      fullName: "Abutu Emmanuel Agaba",
      nickname: "Emmybreezy",
      dateOfBirth: "12/13",
      department: "Agricultural Extension and Rural Development",
      nfcsSociety: "Altar knight, JTL, legion of Mary and Usher",
      bestLevel: "400l",
      funMoment: "Many",
      bio: "I'm Cool, calm, friendly, dedicated, passionate about everything that has to do with fashion and love to make everyone around me happy",
      stressfulLevel: "300l",
      stateOrTribe: "Benue /Idoma",
      hobby: "Sport , listening to music and traveling",
      relationshipStatus: "Single",
      forumPaddy: "Stephen, Michael,Kayla and Johnito",
      forumCrush: "Nil",
      bibleVerse: "Matthew 19:26",
      favQuote: "That which does not kill me makes me stronger",
      favSlang: "Omo na on God o",
      japaOrStay: "Japa",
      skill: "Fashion Designer and Entrepreneur",
      partingWords: "E go choke oo but no just give up",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1jW0ERzeXWP740nqge3WQuz_yZcAPuqAW",
    },
    {
      id: "67",
      name: "Dawa Cecilia Nathaniel",
      fullName: "Dawa Cecilia Nathaniel",
      nickname: "Arewagoddess",
      dateOfBirth: "11/11",
      department: "EDC",
      nfcsSociety: "Nill",
      bestLevel: "400l",
      funMoment: "Nill",
      bio: "I like to sleep.",
      stressfulLevel: "500l",
      stateOrTribe: "Kebbi",
      hobby: "Traveling,sleeping and surfing the internet",
      relationshipStatus: "In a relationship",
      forumPaddy: "Victor",
      forumCrush: "Nill",
      bibleVerse: "Isaiah 60:22",
      favQuote: "It is well.",
      favSlang: "Omo!",
      japaOrStay: "Japa",
      skill: "Streaming",
      partingWords:
        "May the curiosity that lit our lecture halls stay bright in the world beyond.We may not know exactly what’s next, but we’ve learned how to begin, how to adapt, and how to keep going. And when the time is right the lord will make it happen.",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1wYZ28gLmRNVZu0X5cy9tlIShtRTBULuV",
    },
    {
      id: "68",
      name: "Omale Basil",
      fullName: "Omale Basil",
      nickname: "Nil",
      dateOfBirth: "11/10",
      department: "Agricultural and Bio-Resource Engineering",
      nfcsSociety: "CCRN",
      bestLevel: "400l",
      funMoment: "During the last NFCS dinner night",
      bio: "Just a calm guy that love making others smile",
      stressfulLevel: "200l",
      stateOrTribe: "KOGI/IGALA",
      hobby: "Observing things",
      relationshipStatus: "In a relationship",
      forumPaddy: "Joseph Egwonu",
      forumCrush: "Chioma, Esther, Jojo etc",
      bibleVerse: "Hab 2:3",
      favQuote: "Everything na time",
      favSlang: "Baba",
      japaOrStay: "Stay",
      skill: "Fashion Designer",
      partingWords:
        "Any thing you start now, and your are consistent with it, before you graduate you would be good at it.",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1_nc0S8fvAsg2U9DxyuxBspPP3InYj6R5",
    },
    {
      id: "69",
      name: "Tindyer Becky",
      fullName: "Tindyer Becky",
      nickname: "Nil",
      dateOfBirth: "12/16",
      department: "Urban and Regional planning",
      nfcsSociety: "None at the moment",
      bestLevel: "500l",
      funMoment: "Organized picnics and Hangouts",
      bio: "I strongly believe in God and trust his divine presence in my life, I am hardworking and creative and I have a strong determination to succeed.",
      stressfulLevel: "300l",
      stateOrTribe: "Benue/Tiv",
      hobby: "Poetry/painting",
      relationshipStatus: "In a relationship",
      forumPaddy: "Sister Veronica and sister Favour",
      forumCrush: "None",
      bibleVerse: "2 Timothy 1:7",
      favQuote:
        "E no get watin wan happen wey never happen before, Na God dey run tinz",
      favSlang: "Try dey rest",
      japaOrStay: "Japa",
      skill: "Hair stylist",
      partingWords: "Follow your dreams they know the way",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1ieg9qB_lKTwllu2BtCk7VBIZOu0q4XZO",
    },
    {
      id: "70",
      name: "Victoria Onyowoicho Ameh",
      fullName: "Victoria Onyowoicho Ameh",
      nickname: "Tori",
      dateOfBirth: "12/10",
      department: "Statistics",
      nfcsSociety: "Lectors, Choir",
      bestLevel: "500l",
      funMoment: "Everyday comes with its version of fun",
      bio: "A student of Wisdom, Adventure and Knowledge",
      stressfulLevel: "300l",
      stateOrTribe: "Benue/Idoma",
      hobby: "Trying New Recipes, Baking, Singing, Getting dolled up",
      relationshipStatus: "Single",
      forumPaddy: "MaryAnne",
      forumCrush: "Nil",
      bibleVerse: "Luke 1:45",
      favQuote: "Have the Courage to live everyday right.",
      favSlang: "God abeg",
      japaOrStay: "Japa",
      skill: "Baking",
      partingWords: "Discover and get to know yourself as fast as possible",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1HYnn2t-MDD0IWk5xOJozwNNySPGwpbfn",
    },
    {
      id: "71",
      name: "ODAN EMMANUEL ADAIKWU",
      fullName: "ODAN EMMANUEL ADAIKWU",
      nickname: "Dark phoenix",
      dateOfBirth: "1/22",
      department: "Civil Engineering",
      nfcsSociety: "Divine Mercy",
      bestLevel: "200l",
      funMoment: "Every and any moment I'm around my mates",
      bio: "I'm actually the shy type, although I tend to put up a look not to give it away, at the same time I love interacting, socialising especially the crazy type, if ya know what I mean.",
      stressfulLevel: "300l",
      stateOrTribe: "Benue state /Igede",
      hobby: "Gaming, listening to music and dancing",
      relationshipStatus: "Single",
      forumPaddy:
        "Chizzy, Joyce, JoJo, Victor, Emmanuel and the rest of my guys",
      forumCrush: "Chizzy",
      bibleVerse: "2 Timothy 1:7",
      favQuote:
        "If ya dreams don't scare ya enough, then ya ain't even started dreaming",
      favSlang: "As how na",
      japaOrStay: "Japa",
      skill: "Airdrop, Crypto",
      partingWords: "If ya gonna quit, why not tomorrow",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1_9g2QePxHZf-DuOJaLq2BlKmSPLwkQxP",
    },
    {
      id: "72",
      name: "Adinya Esther Onume",
      fullName: "Adinya Esther Onume",
      nickname: "Nill",
      dateOfBirth: "4/19",
      department: "Biochemistry",
      nfcsSociety: "SHC",
      bestLevel: "200l",
      funMoment: "Every forum meetings",
      bio: "I am... ME",
      stressfulLevel: "500l",
      stateOrTribe: "Benue/Idoma",
      hobby: "Sleeping  and eating",
      relationshipStatus: "In a relationship",
      forumPaddy: "Ene,faustie,joy,sohmie,Micheal ,Gabriel's,skentee",
      forumCrush: "Chibaby",
      bibleVerse: "Psalm 150:6",
      favQuote: "Never say neverrr",
      favSlang: "Omo!",
      japaOrStay: "Stay",
      skill: "Entrepreneur😊",
      partingWords:
        "Thank you for the beautiful memories-hello to whats next😊",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1z-ocKrvqiqXFkO_3UzGALKgtB6HZLPbv",
    },
    {
      id: "73",
      name: "Naze Seember Cecilia",
      fullName: "Naze Seember Cecilia",
      nickname: "$em/Sweet $em",
      dateOfBirth: "12/17",
      department: "Architecture",
      nfcsSociety: "Board of Lectors",
      bestLevel: "400l",
      funMoment: "Competing for and winning miss NFCS.",
      bio: "The exquisite Seember Cecilia Naze popularly known as $em is a quality woman. Versatile, sassy, graceful, eloquent and smart, $em stands out as the lord’s handmaid; the imago dei(image of God).",
      stressfulLevel: "300l",
      stateOrTribe: "Taraba state/Tiv",
      hobby: "Reading fiction, playing dress up, visualizing, writing",
      relationshipStatus: "Single",
      forumPaddy: "Lilian",
      forumCrush: "NIL",
      bibleVerse: "2 Timothy 4 vs 17",
      favQuote: "…that they may have life and have it to the full",
      favSlang: "Omo mehn",
      japaOrStay: "Japa",
      skill: "Design, content writing, media and events.",
      partingWords:
        "Protect your peace, stay focused, embrace positivity, avoid the messy and miserable.",
      imageUrl:
        "https://drive.google.com/thumbnail?id=117ziims0BFnKXtnBR3YaV44s9KILve4T",
    },
    {
      id: "74",
      name: "Abraham Labu Ibrahim",
      fullName: "Abraham Labu Ibrahim",
      nickname: "JESUS'FRIEND",
      dateOfBirth: "6/2",
      department: "Quantity surveying",
      nfcsSociety: "JTL and Church warden",
      bestLevel: "400l",
      funMoment: "They are many",
      bio: "I'm full of surprises",
      stressfulLevel: "300l",
      stateOrTribe: "Adamawa state",
      hobby: "Praying, Teaching the Bible, playing football",
      relationshipStatus: "Single",
      forumPaddy: "All my guys and girls",
      forumCrush: "nil",
      bibleVerse: "Colossians 1:27",
      favQuote: "The faithfulness of God cannot be overemphasized",
      favSlang: "Its alright",
      japaOrStay: "Stay",
      skill: "Am full of surprises",
      partingWords:
        "It is in God you know who you truly are, Hold unto God firm",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1lAmUgMriDKtBeJfQ71xpN_b4PJRDVCr7",
    },
    {
      id: "75",
      name: "Olajide Olivia",
      fullName: "Olajide Olivia",
      nickname: "Ola",
      dateOfBirth: "9/16",
      department: "Mathematics",
      nfcsSociety: "Alter knight and church warden",
      bestLevel: "400l",
      funMoment: "Nfcs movie night",
      bio: "Honestly have no idea",
      stressfulLevel: "200l",
      stateOrTribe: "Ondo",
      hobby: "Cooking baking writing of stories and playing",
      relationshipStatus: "Single",
      forumPaddy: "Nil",
      forumCrush: "Nil",
      bibleVerse: "The Lord is my shepherd I lack nothing psalm 23:12",
      favQuote: "Never stop praying",
      favSlang: "On God",
      japaOrStay: "Stay",
      skill: "I bake",
      partingWords:
        "Read like you have never prayed and pray like you have never read",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1ovBgrMi22Qo2DzZdPTvGF_GiGOT1ZOLh",
    },
    {
      id: "76",
      name: "Ehianeta Michael Eghonghon",
      fullName: "Ehianeta Michael Eghonghon",
      nickname: "Maik",
      dateOfBirth: "9/3",
      department: "Electrical and Electronic Engineering",
      nfcsSociety: "Nil",
      bestLevel: "100l",
      funMoment: "Most are with my guys.",
      bio: "I'm still getting to know myself more",
      stressfulLevel: "300l",
      stateOrTribe: "Edo state/ Ishan",
      hobby: "Multitasking, Hanging out with my guys, being Creative.",
      relationshipStatus: "Single",
      forumPaddy:
        "Chizoba, Emmanuel,Theresa, Chisom,Vincent, EstherFrancis, Onume, Joyce ,the list continues ",
      forumCrush: "Chizoba",
      bibleVerse: "Romans 8:18",
      favQuote: "Just do it. (It's not over till it's over)",
      favSlang: " On God",
      japaOrStay: "Japa",
      skill: "Photography(Creative director)",
      partingWords:
        "Don't dwell on sad times, Try to always be positive and happy with every situation you find yourself.",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1Y2HettRzwwNs5GxM54di4tie7_vt8dnJ",
    },
    {
      id: "77",
      name: "AMODU EDWIN ONOJA",
      fullName: "AMODU EDWIN ONOJA",
      nickname: "EDWINMATHERS",
      dateOfBirth: "5/28",
      department: "BUILDING TECHNOLOGY",
      nfcsSociety: "LEGION OF MARY",
      bestLevel: "200l",
      funMoment: "NILL",
      bio: "I'M CALM,KIND, GENEROUS AND LOVE GOD.",
      stressfulLevel: "300l",
      stateOrTribe: "BENUE/IDOMA",
      hobby:
        "FIXING GADGETS, CRITICAL THINKING, WATCHING FOOTBALL AND COOKING ",
      relationshipStatus: "In a relationship",
      forumPaddy: "EVERYONE THAT KNOWS ME",
      forumCrush: "MARY AWOLOWO ",
      bibleVerse: "PSALM 121",
      favQuote: "NOTHING WILL WORK UNLESS YOU DO !!!",
      favSlang: "OSHEEYY!!!",
      japaOrStay: "Stay",
      skill: "COMPUTER/PHONE  REPAIRS ",
      partingWords: "NEVER LOOK DOWN ON YOURSELF AND DON'T FORGET TO PRAY",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1i2wAYoUQ70DObiTOjz9bkDjZbdHMkDUZ",
    },
    {
      id: "78",
      name: "Abakpa Emmanuel Emzzil",
      fullName: "Abakpa Emmanuel Emzzil",
      nickname: "Emzy",
      dateOfBirth: "11/6",
      department: "Mechanical Engineering",
      nfcsSociety: "Talent Theatre, Legio Maria",
      bestLevel: "400l",
      funMoment:
        "Passion play (2025), acted as a priest persecuting Jesus Christ",
      bio: "Very handsome, intelligent and talented actor. Active in church, political, social & academic events. Has helped many sets of freshers score an A in Physics through NFCS/other tutorials",
      stressfulLevel: "300l",
      stateOrTribe: "Benue/Idoma",
      hobby: "Creating content",
      relationshipStatus: "In a relationship",
      forumPaddy: "A good number of persons ",
      forumCrush: "A good number of ladies ",
      bibleVerse: "Wen the time reach, God go make am sup asap, (Isaiah 60:22)",
      favQuote: "Wen you turn that L to a lesson, that's another win",
      favSlang: "Na God dey run am, no be luck!",
      japaOrStay: "Japa",
      skill: "Content creation",
      partingWords: "Let God's grace guide you, not pressure!",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1Y3bXzWkbIfzqdx2SFSqNJPA6zL4WELRp",
    },
    {
      id: "79",
      name: "Onipe John Adeiza Martin",
      fullName: "Onipe John Adeiza Martin",
      nickname: "Zoza",
      dateOfBirth: "4/14",
      department: "Mechanical Engineering",
      nfcsSociety: "Alter Knight, Church Warden, NFCS Brigade",
      bestLevel: "500l",
      funMoment: "Social activities in NFCS",
      bio: "One Time Catechist, Now Brigade President, Am a friendly fellow who strives for Greatness in unity with my friends.",
      stressfulLevel: "300l",
      stateOrTribe: "Kogi/Ebira",
      hobby: "Soccer Related",
      relationshipStatus: "Single",
      forumPaddy: "MOV, Francis Sisters",
      forumCrush: "🤦",
      bibleVerse: "Psalm 133:1",
      favQuote: "Si deus pro nobis quis contra nos",
      favSlang: "Alhamdulilahi",
      japaOrStay: "Japa",
      skill: "Photography",
      partingWords: "A STEP at a TIME",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1wPJz4IWA24mIE-Vje5_rvo04r-n1FX3S",
    },
    {
      id: "80",
      name: "Chioma ugokwe",
      fullName: "Chioma ugokwe",
      nickname: "Chomzy",
      dateOfBirth: "7/27",
      department: "Agricultural and Bio- resources engineering",
      nfcsSociety: "SCH",
      bestLevel: "400l",
      funMoment: "Musical festival experience",
      bio: "I’m someone who enjoys learning, helping others, and trying out new ideas. I’m passionate about cooking and I’m always looking for ways to improve myself.",
      stressfulLevel: "500l",
      stateOrTribe: "Anambra/ Igbo",
      hobby: "Cooking, reading and singing",
      relationshipStatus: "In a relationship",
      forumPaddy: "Omale",
      forumCrush: "Nill",
      bibleVerse: "Psalm 121",
      favQuote: "It is well",
      favSlang: "No be lie shaa",
      japaOrStay: "Japa",
      skill: "Caterer / business entrepreneur",
      partingWords:
        "Discipline yourself to start immediately, each morning on the most valuable use of your time and then persist until that task is 100 percent complete",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1kBZRI8SCUW669NufMY3PXhlCSciGAtLO",
    },
    {
      id: "81",
      name: "Ogbadoyi Mary Ene",
      fullName: "Ogbadoyi Mary Ene",
      nickname: "",
      dateOfBirth: "9/24",
      department: "Microbiology",
      nfcsSociety: "SHC & SVDP",
      bestLevel: "400l",
      funMoment: "🤔",
      bio: "I'm just a sweet and simple babe",
      stressfulLevel: "500l",
      stateOrTribe: "Benue state/ Idoma",
      hobby: "Watching movies,singing ,baking and cooking new dishes",
      relationshipStatus: "Single",
      forumPaddy: "They know themselves",
      forumCrush: "😍",
      bibleVerse: "Num 6:22-27, psalm 35",
      favQuote: "What's worth doing is worth doing well.",
      favSlang: "On God",
      japaOrStay: "Japa",
      skill: "Baking",
      partingWords:
        "Chase progress not perfection and don't be afraid to start all over when you need to,you've got this.",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1hm94x_oqd7cezlmahJHXnREtQvL6s7zM",
    },
    {
      id: "82",
      name: "Onyocho Emmanuel Ogbobeche",
      fullName: "Onyocho Emmanuel Ogbobeche",
      nickname: "EMMYTECH",
      dateOfBirth: "9/13",
      department: "Building technology",
      nfcsSociety: "SHC",
      bestLevel: "300l",
      funMoment: "NFCS GRAND FINALE IN 300L",
      bio: "I'm kind and friendly",
      stressfulLevel: "500l",
      stateOrTribe: "Benue / idoma",
      hobby: "Football/ singing/ reading/ business",
      relationshipStatus: "In a relationship",
      forumPaddy: "Gracious, faith and sanity",
      forumCrush: "Nil",
      bibleVerse: "John 3:16",
      favQuote: "Life is not bird of Rose's",
      favSlang: "No fear, God dey.",
      japaOrStay: "Stay",
      skill: "Aluminium glazing business (glazier)",
      partingWords:
        "Self motivation keeps you going,  tell yourself you can do it.",
      imageUrl:
        "https://drive.google.com/thumbnail?id=17vHmne-wkoJ9O2urHCRUtqWWyodaRfod",
    },
    {
      id: "83",
      name: "Sani Nehemiah",
      fullName: "Sani Nehemiah",
      nickname: "Nehemiah",
      dateOfBirth: "10/9",
      department: "Agricultural Economics",
      nfcsSociety: "JTL & Church warden",
      bestLevel: "200l",
      funMoment: "Exquisite Hangouts",
      bio: "\nI am cool, calm, and collected, with a dedicated mindset that drives outstanding results. Passionate and focused, I excel in every challenge. ",
      stressfulLevel: "500l",
      stateOrTribe: "Benue",
      hobby: "Volleyball, football",
      relationshipStatus: "Single",
      forumPaddy: "David, Victor, John and Abraham",
      forumCrush: "Nil",
      bibleVerse: "Number 14:28",
      favQuote: "If you don't believe in yourself, No one can.",
      favSlang: "On God",
      japaOrStay: "Japa",
      skill: "Content Writer & Fashion",
      partingWords: "Always stay true to yourself and believe God",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1K17EDuXXa5BiNuC1vwCscMwgQm0lagEr",
    },
    {
      id: "84",
      name: "Igbonekwu Emmanuel Chinaza",
      fullName: "Igbonekwu Emmanuel Chinaza",
      nickname: "Manuel",
      dateOfBirth: "10/25",
      department: "Computer Engineering",
      nfcsSociety: "SHC, JTL",
      bestLevel: "400l",
      funMoment: "Exquisite forum's gatherings",
      bio: "Quite a fellow. I'm easy going. Might be fun to be around depending on the mood.",
      stressfulLevel: "500l",
      stateOrTribe: "Enugu/Igbo",
      hobby: "Singing, movies, music",
      relationshipStatus: "Single",
      forumPaddy: "All my guys",
      forumCrush: "Nil",
      bibleVerse: "Romans 5:8",
      favQuote: "I am because we are.",
      favSlang: "God Abeg",
      japaOrStay: "Japa",
      skill: "bring business come",
      partingWords: "Keep pushing, you'll get there",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1tmQFuZHmegBiF2AsKZNkW8t6vIFaYuAo",
    },
    {
      id: "85",
      name: "Osas-Evbuomwan Isaac Osasenaga",
      fullName: "Osas-Evbuomwan Isaac Osasenaga",
      nickname: "Legendary Saint",
      dateOfBirth: "7/13",
      department: "Mathematics",
      nfcsSociety: "CHOIR, JTL, LEGION & Media",
      bestLevel: "400l",
      funMoment: "every time with equiste and NfCS",
      bio: "My name is Osasenaga Osas-Evbuomwan, a student of mathematics department who loves discovering new things and love to improve on myself. Meeting people ans communicating with people is fun....it helps me to see the world in a different perceptive.",
      stressfulLevel: "300l",
      stateOrTribe: "EDO/BINI",
      hobby: "Eating",
      relationshipStatus: "Single",
      forumPaddy:
        "AB, Maryann, vickky, omale, ufomadu, kyala, peter, abutu, justina, felicia, and paulo",
      forumCrush: "nill",
      bibleVerse: "Jer 29:11",
      favQuote: "IMAGINATION is the preview to LIFE's coming Attraction",
      favSlang: "U NO NEED EXPLAIN EVEDIENCE JOKE",
      japaOrStay: "Japa",
      skill: "GRAPHIC DESIGNER, INTERIOR DESIGNER & SOFTWARE ENGINNER",
      partingWords: "STAY FOCUSED",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1o_H5mSnsZbuTS3eb9WlrbZ1OPhjK_U0c",
    },
    {
      id: "86",
      name: "Michael Esomchukwu Okolie",
      fullName: "Michael Esomchukwu Okolie",
      nickname: "ChimereOdogwu Capital",
      dateOfBirth: "8/24",
      department: "Physics (Telecom.)",
      nfcsSociety: "Legion of Mary.",
      bestLevel: "500l",
      funMoment: "Valedictory Mass / Dinner night.",
      bio: "Cannot be pressured by anyone or anything. My allegiance to the Most High and respect to everyone who deserves it.",
      stressfulLevel: "100l",
      stateOrTribe: "Imo State / Igbo",
      hobby: "Hard work & smart work, all joined.",
      relationshipStatus: "Single",
      forumPaddy: '"Mystic Maverick" Emmybreezy.',
      forumCrush: "Reg.",
      bibleVerse:
        "At the right time, I the Lord will make it happen. (Isaiah 60:22)",
      favQuote:
        '"I am a punishment from God, it is because you have committed great sins, that\'s why God sent me as a punishment to you." ~ Genghan Khalis.',
      favSlang: "(OG) On God.",
      japaOrStay: "Stay",
      skill: "Partial Investor.",
      partingWords:
        "If you don't love what you're doing, Get out. Otherwise , stay focused and never give up until success is recorded.",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1F5MMpxdl-1OwYmTHxU2FpL_n4O5Qf-BX",
    },
    {
      id: "87",
      name: "Ufomadu Stephen",
      fullName: "Ufomadu Stephen",
      nickname: "Excel",
      dateOfBirth: "9/14",
      department: "Physics department",
      nfcsSociety: "Legion of mary",
      bestLevel: "400l",
      funMoment: "Every moment was fun! ",
      bio: "I'm an optimist",
      stressfulLevel: "300l",
      stateOrTribe: "Imo state",
      hobby: "Movies, music, games, sleeping, surfing the net ",
      relationshipStatus: "Single",
      forumPaddy: "Emmybreezy, Joeboy, Osas and Everybody ",
      forumCrush: "Tueehh! ",
      bibleVerse: "Jeremiah 29 vs 11",
      favQuote: "No competion in life, destinies are different! ",
      favSlang: "E go better!",
      japaOrStay: "Japa",
      skill: "Business/ money making analyst",
      partingWords:
        "Whatever you do in life, put God first and be focused,  but above all always be an optimist!",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1sxXck-l4hSaBiHXh57YaPxRfHyz-SVkG",
    },
    {
      id: "88",
      name: "Dayigil Basil",
      fullName: "Dayigil Basil",
      nickname: "Vasman!",
      dateOfBirth: "2/27",
      department: "Computer science",
      nfcsSociety: "FYB",
      bestLevel: "400l",
      funMoment: "Can't remember and at the moment ",
      bio: "Tech savvy and an Observer.",
      stressfulLevel: "300l",
      stateOrTribe: "Plateau state/ Kwalla",
      hobby: "Playing football, Playing fifa, vibe coding.",
      relationshipStatus: "In a relationship",
      forumPaddy: "Victor",
      forumCrush: "None",
      bibleVerse: "Jesus Wept",
      favQuote: "It is well",
      favSlang: "Omo!",
      japaOrStay: "Japa",
      skill: "Software developer (fullstack)",
      partingWords:
        "Late night Study is a sign of self doubt, believe in yourself and go to sleep!",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1p-8qVJsZ5bnNt4ZOSwb9iaLwKled7l7b",
    },
    {
      id: "89",
      name: "Ogwuche John Ejembi",
      fullName: "Ogwuche John Ejembi",
      nickname: "Gucho",
      dateOfBirth: "10/21",
      department: "Civil engineering",
      nfcsSociety: "Non",
      bestLevel: "100l",
      funMoment: "Stage performance ",
      bio: "Im a Recording, performing music artist",
      stressfulLevel: "300l",
      stateOrTribe: "Benue/Idoma",
      hobby: "Listening to music",
      relationshipStatus: "Single",
      forumPaddy: "Eric, Mary, Onume, Chizzy, Skentee, All my guys ",
      forumCrush: "Non",
      bibleVerse: "Isiah 40:31",
      favQuote: "Do it now so you don’t make excuses later ",
      favSlang: "Who be that?!",
      japaOrStay: "Japa",
      skill: "Video editor ",
      partingWords: "Run am now…Final year no fit improve your GP o😂",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1IOB1lRt79yin3F6wTp3hyPrBwYUPuijz",
    },
    {
      id: "90",
      name: "Akuboh Justice Unekwuojo",
      fullName: "Akuboh Justice Unekwuojo",
      nickname: "Jaytee",
      dateOfBirth: "11/3",
      department: "Cyber Security",
      nfcsSociety: "Media Team ",
      bestLevel: "200l",
      funMoment: "Exquisite Choir Rehearsal",
      bio: "My name is Justice Unekwuojo Akuboh, a 500L student of Cyber Security in this noble Institution and a bonafide member of the Exquisite family. Being part of the NFCS has nurtured my values, discipline, and faith. I am grateful to God for how far He has brought me and excited to use all I have learned to make a positive impact.",
      stressfulLevel: "300l",
      stateOrTribe: "Kogi / Igala",
      hobby: "Researching, surfing the web",
      relationshipStatus: "Single",
      forumPaddy: "Vince and the crew",
      forumCrush: "-",
      bibleVerse: "Hebrews 12:11",
      favQuote: "A goal well set, is halfway reached",
      favSlang: "E sure for us",
      japaOrStay: "Japa",
      skill: "GRC Analyst/ Sales Manager ",
      partingWords:
        "The academic journey in this Institution is one understandably filled with hurdles. Stay focused, it is always worth it in the end.",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1o2yX9lOoYD4tSDoMMQxnexjFIiF9izuo",
    },
    {
      id: "91",
      name: "Mariagoretti Chinwendu EZEOBINWA",
      fullName: "Mariagoretti Chinwendu EZEOBINWA",
      nickname: "",
      dateOfBirth: "9/3",
      department: "Agricultural extension and rural development",
      nfcsSociety: "CCRN (jtl)",
      bestLevel: "300l",
      funMoment: "Nil",
      bio: "I'm me🙃",
      stressfulLevel: "500l",
      stateOrTribe: "Anambra State/igbo",
      hobby: "Watching movies, travelling ",
      relationshipStatus: "In a relationship",
      forumPaddy: "Ogechi Viviene",
      forumCrush: "Emmanuel (cordi)🙈",
      bibleVerse:
        "Jeremiah 29:11  “For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future.”",
      favQuote:
        "  “Do not go where the path may lead, go instead where there is no path and leave a trail.” – Ralph Waldo Emerson",
      favSlang: "Omooo.... las las everybody go dey alright ",
      japaOrStay: "Stay",
      skill: "Your sure shoe plug",
      partingWords: "Do ur very best and leave the rest to God",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1JUM9x0l5g_a5pCiMOhVmNWJEyClzTwjr",
    },
    {
      id: "92",
      name: "Njoku Victor Chinedu",
      fullName: "Njoku Victor Chinedu",
      nickname: "Veerjok",
      dateOfBirth: "3/2",
      department: "Horticulture",
      nfcsSociety: "Bench Warmer",
      bestLevel: "500l",
      funMoment: "IT moments",
      bio: "Curious and ready to take risks",
      stressfulLevel: "300l",
      stateOrTribe: "Imo/Igbo",
      hobby: "Listening to music",
      relationshipStatus: "In a relationship",
      forumPaddy: "Jude Maseshin",
      forumCrush: "Nil",
      bibleVerse:
        "Prov.14.8 - The wisdom of the prudent is to understand his way: but the folly of fools is deceit.",
      favQuote:
        "Develop the ability to be disliked so you'll be free from the opinion of others ",
      favSlang: "If I perish I perish ",
      japaOrStay: "Japa",
      skill: "Textile trader",
      partingWords: "Do your best and leave the rest. ",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1PelFxoBeUc1_fuxmXI10kwWDKaELIxs8",
    },
    {
      id: "93",
      name: "Saratu Doma",
      fullName: "Saratu Doma",
      nickname: "Sara",
      dateOfBirth: "4/14",
      department: "Computer Science",
      nfcsSociety: "Legion of Mary",
      bestLevel: "100l",
      funMoment: "Nil",
      bio: "I’m just a chill girl that loves to laugh and make people laugh, shy at first but I get comfortable once i get to know you, I code and basically love being on the internet",
      stressfulLevel: "300l",
      stateOrTribe: "Niger/Gbagyi",
      hobby: "Playing games, listening to music, laughing",
      relationshipStatus: "Single",
      forumPaddy: "Joyce, Kemi and Mary",
      forumCrush: "Nil",
      bibleVerse: "1st Thessalonians 5:16-18",
      favQuote: "Whatever is worth doing is what doing well",
      favSlang: "Stay Wicked ",
      japaOrStay: "Japa",
      skill: "Coding ",
      partingWords: "Don’t forget to breathe",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1uW8zcTOeZLBket6P5GGV00M_JDbtaaXh",
    },
    {
      id: "94",
      name: "Eze Maryann Chinelo",
      fullName: "Eze Maryann Chinelo",
      nickname: "Fabulous ann",
      dateOfBirth: "6/25",
      department: "Statistics",
      nfcsSociety: "JTL(ccrn)",
      bestLevel: "500l",
      funMoment: "NFCS week",
      bio: "I love Jesus so Much without him I can faint.",
      stressfulLevel: "300l",
      stateOrTribe: "Enugu/ Igbo",
      hobby: "Singing,Skating, Cooking",
      relationshipStatus: "Single",
      forumPaddy: "Monica",
      forumCrush: "all the fine guys",
      bibleVerse: "Jer. 29:11",
      favQuote: "Greatest harm comes for best intentions",
      favSlang: "if God be for me.... Who goes that man?",
      japaOrStay: "Stay",
      skill: "Sewing",
      partingWords:
        "You're capable of achieving Success in any Endeavors so long as you put you're mind into in, and stay positive,",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1l7OuyqBkQjML0EKublIicPgkLu21oybE",
    },
    {
      id: "95",
      name: "MANI UMAR",
      fullName: "MANI UMAR",
      nickname: "MANI",
      dateOfBirth: "4/21",
      department: "Telecommunications Engineering",
      nfcsSociety: "Charismatic and Altar Knight",
      bestLevel: "300l",
      funMoment: "Serving the Lord",
      bio: "Love leadership, very much interested in human capital investment, and building relationships",
      stressfulLevel: "300l",
      stateOrTribe: "Katsina/Edo",
      hobby:
        "Traveling, solving problems, listening, learning, praying and making impact",
      relationshipStatus: "Single",
      forumPaddy:
        "EBUKA, DAVID, ABRAHAM, MARY, ESTHER, EMMANUEL, MARYAN, JOSEPHINE, LADI, NEHEMIAH",
      forumCrush: "SEMINARY",
      bibleVerse: "Habakkuk 2:3",
      favQuote: "IT PAYS TO SERVE JESUS",
      favSlang: "I CAN NEVER BE SMALL",
      japaOrStay: "",
      skill: "LEADERSHIP, FOREX, FARMING, INVESTOR",
      partingWords: "FIND YOUR PLACE IN GOD AND FULFILL PURPOSE",
      imageUrl:
        "https://drive.google.com/thumbnail?id=19ZiiLjcPEFLw7COJZTU6kta74x2ZRU7e",
    },
    {
      id: "96",
      name: "Osemhenre Edeghonghon Destiny",
      fullName: "Osemhenre Edeghonghon Destiny",
      nickname: "Dezzytech/Sugar daddy of Mx",
      dateOfBirth: "6/7",
      department: "Civil Engineering",
      nfcsSociety: "Nil",
      bestLevel: "400l",
      funMoment: "Harvest Sunday that we were bidding goat with parents😂😂",
      bio: "I’m a fun and jovial person",
      stressfulLevel: "300l",
      stateOrTribe: "Edo State/Esan",
      hobby: "Sleeping, cooking and Watching movies",
      relationshipStatus: "Single",
      forumPaddy: "Eric, Esohe",
      forumCrush: "Esohe",
      bibleVerse:
        "“It is better to hear the rebuke of the wise, than for a man to hear the song of fools.” ‭‭Ecclesiastes‬ ‭7‬:‭5‬ ‭",
      favQuote:
        "Expect Disappointment, so when it comes you won’t be disappointed",
      favSlang: "On God",
      japaOrStay: "Japa",
      skill: "Techpreneur(life chopper)",
      partingWords: "School na Scam, but I don get my degree sha😂😂",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1NnWkLnlWZLqxH6TJZqOA2KEJQsBO4n-3",
    },
    {
      id: "97",
      name: "Adewale Esther",
      fullName: "Adewale Esther",
      nickname: "Estee",
      dateOfBirth: "4/12",
      department: "Agricultural and bio resources engineering",
      nfcsSociety: "JTL, SHC and St Vincent de Paul",
      bestLevel: "100l",
      funMoment: "Forum picnic and NFCS week 2023",
      bio: "I'm so chill",
      stressfulLevel: "500l",
      stateOrTribe: "Osun state/yoruba",
      hobby:
        "Reading novels, listening to good music, eating food, watching cute animals, mixing soap 😩 etc",
      relationshipStatus: "Single",
      forumPaddy: "About 30% of the forum",
      forumCrush: "Error...",
      bibleVerse: "Lamentations 3:25",
      favQuote:
        "It is brazen to desire something without being willing to pay the price",
      favSlang: "Oh boy 3x",
      japaOrStay: "Japa",
      skill: "Entrepreneurship...Surviving 🥹🥲",
      partingWords: "Don't ever let your spark/momentum to wear out.",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1Vm5-U7EI5TMIt1_FVLZKKImfArkTHPKb",
    },
  ];

  const awardCategories = [
    "Most Handsome (GK)",
    "Most Handsome (Bosso)",
    "Most Beautiful (GK)",
    "Most Beautiful (Bosso)",
    "Most Intellectual (GK)",
    "Most Intellectual (Bosso)",
    "Most Social",
    "Entrepreneur of the Year (GK)",
    "Entrepreneur of the Year (Bosso)",
    "Best Dressed Male (GK)",
    "Best Dressed Male (Bosso)",
    "Best Dressed Female (GK)",
    "Best Dressed Female (Bosso)",
    "Most Dedicated (GK)",
    "Most Dedicated (Bosso)",
    "Outstanding Personality (GK)",
    "Outstanding Personality (Bosso)",
    "Cool, Calm & Collected (GK)",
    "Cool, Calm & Collected (Bosso)",
    "Most Influential",
    "Best Clique (GK)",
    "Best Clique (Bosso)",
    "Mr. Culture (GK)",
    "Mr. Culture (Bosso)",
    "Miss Culture (GK)",
    "Miss Culture (Bosso)",
    "Most Political",
    "Sports Personality of the Year (GK)",
    "Sports Personality of the Year (Bosso)",
    "Mr. Ebony (GK)",
    "Mr. Ebony (Bosso)",
    "Miss Ebony (GK)",
    "Miss Ebony (Bosso)",
    "Music Personality of the Year",
    "Couple of the Year",
  ];

  // Handler functions
  const handleAddNomination = () => {
    if (nominee && category) {
      setIsAdding(true);
      setTimeout(() => {
        const selectedNominee = nominees.find((n) => n.id === nominee);
        const newNomination: Nomination = {
          id: Date.now(),
          nominee: selectedNominee?.name || nominee,
          category,
          quantity,
        };
        setNominations([...nominations, newNomination]);
        setNominee("");
        setCategory("");
        setAmount((amount) => (amount += +newNomination.quantity * 10000));
        setQuantity(1);
        setIsAdding(false);
      }, 300);
    }
  };

  const handleRemoveNomination = (id: number, amo: number) => {
    setNominations(nominations.filter((nomination) => nomination.id !== id));
    setAmount((amount) => amount - amo * 10000);
  };

  const handleViewProfile = (nomineeId: string) => {
    const profile = nominees.find((n) => n.id === nomineeId);
    setViewingProfile(profile || null);
  };

  const handleCloseProfile = () => {
    setViewingProfile(null);
  };

  return (
    <div className="min-h-screen w-screen p-4 flex flex-col justify-center items-center text-slate-400 bg-gradient-to-br from-slate-50 to-blue-50  sm:px-6 lg:px-8">
      {/* Main Content */}
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-7 flex flex-col justify-center items-center">
          <img className="h-11 w-10" src="nfcs-logo.png" alt="nfcs logo" />
          <h1 className="text-4xl font-bold text-slate-800 mb-1">
            Nox Amoris Award
          </h1>
          <p className="text-xl text-slate-600">
            Nominate your favorite candidates for this year's awards
          </p>
        </div>

        {/* Nomination Form */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">
            Make a Nomination
          </h2>

          <div className="space-y-6">
            {/* Nominee Selection */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Nominee's Name
              </label>
              <div className="flex gap-2">
                <select
                  value={nominee}
                  onChange={(e) => setNominee(e.target.value)}
                  className="flex-1 px-4 py-3 w-full rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select a nominee...</option>
                  {nominees.map((nom) => (
                    <option key={nom.id} value={nom.id}>
                      {nom.name}
                    </option>
                  ))}
                </select>
                {nominee !== "" && (
                  <button
                    onClick={() => nominee && handleViewProfile(nominee)}
                    disabled={!nominee}
                    className={`px-4 py-3 rounded-lg transition-colors ${
                      !nominee
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                    }`}
                  >
                    About
                  </button>
                )}
              </div>
            </div>

            {/* Award Category */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Award Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select an award...</option>
                {awardCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Nomination Amount */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Nomination Amount (N100/Nomination)
              </label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email
              </label>
              <input
                type="email"
                min="1"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleAddNomination}
              disabled={!nominee || !category || isAdding}
              className={`w-full py-3 px-4 rounded-md text-white font-medium transition-all ${
                !nominee || !category || !email
                  ? "bg-gray-400 cursor-not-allowed"
                  : isAdding
                  ? "bg-blue-400"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {isAdding ? "Adding..." : "Nominate"}
            </button>
          </div>
        </div>

        {/* Nominations List */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">
            Your Nominations
          </h2>

          {nominations.length === 0 ? (
            <div className="text-center py-8 text-slate-500">
              {/* <svg
                className="mx-auto h-12 w-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg> */}
              <p className="mt-2">You have not nominated anyone yet</p>
            </div>
          ) : (
            <div className="space-y-4">
              {nominations.map((nom) => (
                <div
                  key={nom.id}
                  className="flex justify-between items-center p-4 bg-blue-50 rounded-lg"
                >
                  <div>
                    <h4 className="font-medium text-slate-800">
                      {nom.nominee}
                    </h4>
                    <p className="text-sm text-slate-600">{nom.category}</p>
                    <p className="text-sm text-blue-600">
                      N{nom.quantity * 100}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        const nomineeId = nominees.find(
                          (n) => n.name === nom.nominee
                        )?.id;
                        if (nomineeId) handleViewProfile(nomineeId);
                      }}
                      className="text-blue-500 hover:text-blue-700 p-2"
                      title="View profile"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() =>
                        handleRemoveNomination(nom.id, nom.quantity)
                      }
                      className="text-red-500 hover:text-red-700 p-2"
                      title="Remove nomination"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex justify-center items-center text-xl text-black">
                <p>Total: N{amount / 100}</p>
              </div>

              {/* make payment*/}
              <PaystackButton
                {...componentProps}
                className={`w-full py-3 px-4 rounded-md text-white font-medium transition-all ${
                  nominations === null
                    ? "bg-gray-400 cursor-not-allowed"
                    : isAdding
                    ? "bg-blue-400"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              />
            </div>
          )}
        </div>
      </div>

      {/* Profile Modal */}
      {viewingProfile && (
        <div
          onClick={handleCloseProfile}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        >
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={handleCloseProfile}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Profile Image */}
              <div className="h-64 bg-slate-800 rounded-t-xl overflow-hidden">
                {viewingProfile.imageUrl ? (
                  <div className=" flex justify-center items-center h-full ">
                    <img
                      src={viewingProfile.imageUrl}
                      alt={viewingProfile.name}
                      className="h-64 w-64 rounded-full border-4  border-white "
                    />
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200">
                    <svg
                      className="w-24 h-24 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {/* Profile Content */}
              <div className="p-8">
                <h3 className="text-3xl font-bold text-slate-800">
                  {viewingProfile.name}
                </h3>
                <p className="text-lg text-slate-600 mb-6">
                  {viewingProfile.department}
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-slate-700 mb-2">
                      About
                    </h4>
                    <p className="text-slate-600">{viewingProfile.bio}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-slate-700 mb-2">
                      Hobby
                    </h4>
                    <p className="text-slate-600">{viewingProfile.hobby}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-slate-700 mb-2">
                      Favorite Bible Verse (Ref.)
                    </h4>
                    <p className="text-slate-600 font-medium italic">
                      "{viewingProfile.bibleVerse}"
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-slate-700 mb-2">
                      Most Fun Moment
                    </h4>
                    <p className="text-slate-600">{viewingProfile.funMoment}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-slate-700 mb-2">
                      Parting Words
                    </h4>
                    <p className="text-slate-600">
                      {viewingProfile.partingWords}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-slate-700 mb-2">
                      Skill/Hustle
                    </h4>
                    <p className="text-slate-600">{viewingProfile.skill}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-slate-900 font font-semibold">
                      NFCS Society
                    </p>
                    <h4 className="text-slate-700 font-medium">
                      {viewingProfile.nfcsSociety}.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="mt-10">by 08121315694</div>
    </div>
  );
}
