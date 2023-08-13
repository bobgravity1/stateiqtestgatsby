import { nanoid } from "nanoid";

export const shuffler = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};


const spatialType = [
  {
    id: nanoid(),
    title: "Question One",
    correct:false,
    question: "Which is the odd one out?",
    answer:'C',
    category:'spatial',
    type:'MCphoto',
    word:false,
    questionPhoto:{
      id:nanoid(), value:'spatialOne'
    },
    options: [
      {id:nanoid(),value:'A'},
      {id:nanoid(),value:'B'},
      {id:nanoid(),value:'C'},
      {id:nanoid(),value:'D'},
      {id:nanoid(),value:'E'},
      {id:nanoid(),value:'F'},
    ]
  },
  {
    id: nanoid(),
    title: "Question Two",
    correct:false,
    question: "Which is the odd one out?",
    answer:'C',
    category:'spatial',
    type:'MCphoto',
    word:false,
    questionPhoto:{
      id:nanoid(), value:'spatialTwo'
    },
    options: [
      {id:nanoid(),value:'A'},
      {id:nanoid(),value:'B'},
      {id:nanoid(),value:'C'},
      {id:nanoid(),value:'D'},
      {id:nanoid(),value:'E'},
    ]
  },
  {
    id: nanoid(),
    title: "Question Four",
    correct:false,
    question: "When the below image is folded to form a cube, which is the only one of the following that can be produced?",
    answer:'D',
    category:'spatial',
    type:'MCphotoTwo',
    word:false,
    questionPhoto:{
      id:nanoid(), value:'spatialFour-One'
    },
    answerPhoto:{
      id:nanoid(), value:'spatialFour-Two'
    },
    options: [
      {id:nanoid(),value:'A'},
      {id:nanoid(),value:'B'},
      {id:nanoid(),value:'C'},
      {id:nanoid(),value:'D'},
      {id:nanoid(),value:'E'},
    ]
  },
  {
    id: nanoid(),
    title: "Question Five",
    correct:false,
    question: "You have 59 cube shaped blocks. What is the minimum number that needs to be taken away to have a square cube with none left over?",
    answer:'9',
    questionPhoto:{
      id:nanoid(), value:null
    },
    word:true,
    category:'spatial',
    type:'FIB',
  },
  {
      id: nanoid(),
      title: "Question Six",
      correct:false,
      category:'spatial',
      question: "When the image above is folded into a cube, which of the following answer is the only one that can be produced?",
      answer:'B',
      word:false,
      type:'MCphotoTwo',
      options: [
        {id:nanoid(),value:'A'},
        {id:nanoid(),value:'B'},
        {id:nanoid(),value:'C'},
        {id:nanoid(),value:'D'},
        {id:nanoid(),value:'E'},
      ],
      questionPhoto:{
        id:nanoid(), value:'spatialSix-one'
      },
      answerPhoto:{
        id:nanoid(), value:'spatialSix-two'
      }
    },
  {
    id: nanoid(),
    title: "Question Seven",
    correct:false,
    category:'spatial',
    question: "What letter is directly opposite the letter that is two letters away clockwise from the letter that is directly opposite the letter E",
    answer:'C',
    word:false,
    type:'MCphoto',
    options: [
      {id:nanoid(),value:'A'},
      {id:nanoid(),value:'B'},
      {id:nanoid(),value:'C'},
      {id:nanoid(),value:'D'},
      {id:nanoid(),value:'E'},
      {id:nanoid(),value:'F'},
      {id:nanoid(),value:'G'},
      {id:nanoid(),value:'H'},
    ],
    questionPhoto:{
      id:nanoid(), value:'spatialSeven'
    }
  },
  {
    id: nanoid(),
    title: "Question Eight",
    correct:false,
    category:'spatial',
    question: "Andrew has to move 7 boxes, but he can only carry two boxes at one time. How many trips does he have to make?",
    answer:'A',
    questionPhoto:{
      id:nanoid(), value:null
    },
    word:true,
    type:'MC',
    options: [
      {id:nanoid(),value:'A', word:'4'},
      {id:nanoid(),value:'B', word:'3'},
      {id:nanoid(),value:'C', word:'3.5'},
      {id:nanoid(),value:'D', word:'7'},
    ]
  },
    {
      id: nanoid(),
      title: "Question Eleven",
      correct:false,
      question: "Which option comes next in the above sequence?",
      answer:'B',
      word:false,
      type:'MCphotoTwo',
      category:'spatial',
      options: [
        {id:nanoid(),value:'A'},
        {id:nanoid(),value:'B'},
        {id:nanoid(),value:'C'},
        {id:nanoid(),value:'D'},
      ],
      questionPhoto:{
        id:nanoid(), value:'spatialEleven-one'
      },
      answerPhoto:{
        id:nanoid(), value:'spatialEleven-two'
      }
    },
    {
      id: nanoid(),
      title: "Question Twelve",
      correct:false,
      question: "How many DIFFERENTLY sized circles are shown in this image?",
      answer:'6',
      category:'spatial',
      type:'FIB',
      word:false,
      questionPhoto:{
        id:nanoid(), value:'spatialTwelve'
      }
    },
      {
        id: nanoid(),
        title: "Question Fourteen",
        correct:false,
        question: "Which square should replace the question mark?",
        answer:'C',
        category:'spatial',
        type:'MCphotoTwo',
        word:false,
        questionPhoto:{
          id:nanoid(), value:'spatialFourteen-one'
        },
        answerPhoto:{
          id:nanoid(), value:'spatialFourteen-two'
        },
        options: [
          {id:nanoid(),value:'A'},
          {id:nanoid(),value:'B'},
          {id:nanoid(),value:'C'},
          {id:nanoid(),value:'D'},
          {id:nanoid(),value:'E'},
        ]
      },
      
      {
        id: nanoid(),
        title: "Question Fifteen",
        correct:false,
        question: "Which of the following is most similar to the image above?",
        answer:'B',
        category:'spatial',
        type:'MCphotoTwo',
        word:false,
        questionPhoto:{
          id:nanoid(), value:'spatialFifteen-one'
        },
        answerPhoto:{
          id:nanoid(), value:'spatialFifteen-two'
        },
        options: [
          {id:nanoid(),value:'A'},
          {id:nanoid(),value:'B'},
          {id:nanoid(),value:'C'},
          {id:nanoid(),value:'D'},
          {id:nanoid(),value:'E'},
        ]
      },
      {
        id: nanoid(),
        title: "Question Sixteen",
        correct:false,
        question: "Which is the missing tile?",
        answer:'C',
        category:'spatial',
        type:'MCphotoTwo',
        word:false,
        questionPhoto:{
          id:nanoid(), value:'spatialSixteen-one'
        },
        answerPhoto:{
          id:nanoid(), value:'spatialSixteen-two'
        },
        options: [
          {id:nanoid(),value:'A'},
          {id:nanoid(),value:'B'},
          {id:nanoid(),value:'C'},
          {id:nanoid(),value:'D'},
          {id:nanoid(),value:'E'},
        ]
      }
];

const logicType = [
  {
    id: nanoid(),
    title: "Question Five",
    correct:false,
    category:'logic',
    question: "Out of the four given shapes which is the odd one out?",
    answer:'C',
    questionPhoto:{
      id:nanoid(), value:null
    },
    word:true,
    type:'MC',
    options: [
      {id:nanoid(),value:'A', word:'Hexagon'},
      {id:nanoid(),value:'B', word:'Pentagon'},
      {id:nanoid(),value:'C', word:'Cube'},
      {id:nanoid(),value:'D', word:'Triangle'},
    ]
  },
  {
    id: nanoid(),
    title: "Question Six",
    correct:false,
    question: "Find the missing tile",
    answer:'D',
    category:'logic',
    type:'MCphotoTwo',
    word:false,
    questionPhoto:{
      id:nanoid(), value:'logicSix-one'
    },
    answerPhoto:{
      id:nanoid(), value:'logicSix-two'
    },
    options: [
      {id:nanoid(),value:'A'},
      {id:nanoid(),value:'B'},
      {id:nanoid(),value:'C'},
      {id:nanoid(),value:'D'},
      {id:nanoid(),value:'E'},
      {id:nanoid(),value:'F'},
    ]
  },
  {
    id: nanoid(),
    title: "Question FourtyTwo",
    correct:false,
    category:'logic',
    question: "If it takes 4 factory workers 4 minutes to make 4 wheels, how long would it take 100 factory workers to make 100 wheels?",
    answer:'D',
    questionPhoto:{
      id:nanoid(), value:null
    },
    type:'MC',
    options: [
      {id:nanoid(),value:'A', word:'100 minutes'},
      {id:nanoid(),value:'B', word:'32 minutes'},
      {id:nanoid(),value:'C', word:'10 minutes'},
      {id:nanoid(),value:'D', word:'4 minutes'},
    ]
  },
  {
    id: nanoid(),
    title: "Question Fifteen",
    correct:false,
    question: "4 Workers lay 48 bricks in one hour. How many workers would it take to lay 192 bricks in one hour?",
    answer:'16',
    questionPhoto:{
      id:nanoid(), value:null
    },
    word:true,
    category:'logic',
    type:'FIB',
  },
  {
    id: nanoid(),
    title: "Question Sixteen",
    correct:false,
    question: "10, 30, 32, 96, 98, 294, 296, ?, ?-What two numbers should replace the question marks?",
    answer:'B',
    questionPhoto:{
      id:nanoid(), value:null
    },
    word:true,
    category:'logic',
    type:'MC',
    options: [
      {id:nanoid(),value:'A', word:'668 & 799'},
      {id:nanoid(),value:'B', word:'888 & 890'},
      {id:nanoid(),value:'C', word:'396 & 495'},
      {id:nanoid(),value:'D', word:'382 & 518'},
    ]
  },
  {
    id: nanoid(),
    title: "Question Seventeen",
    correct:false,
    question: "If one Tera is a thousand Gigs and one Gigs is a thousand Megas, how many Megas are in a tera?",
    answer:'A',
    questionPhoto:{
      id:nanoid(), value:null
    },
    word:true,
    category:'logic',
    type:'MC',
    options: [
      {id:nanoid(),value:'A', word:'1,000,000'},
      {id:nanoid(),value:'B', word:'500,000'},
      {id:nanoid(),value:'C', word:'100,000'},
      {id:nanoid(),value:'D', word:'20,000'},
    ]
  },
  {
    id: nanoid(),
    title: "Question Eighteen",
    correct:false,
    question: "9, 1, 50, 6, 45, 11, 40, 16, 35, 21, ?, ? Which numbers should replace the question marks?",
    answer:'A',
    questionPhoto:{
      id:nanoid(), value:null
    },
    word:true,
    category:'logic',
    type:'MC',
    options: [
      {id:nanoid(),value:'A', word:'30 & 26'},
      {id:nanoid(),value:'B', word:'21 & 35'},
      {id:nanoid(),value:'C', word:'16 & 42'},
      {id:nanoid(),value:'D', word:'31 & 25'},
    ]
  },
  {
    id: nanoid(),
    title: "Question Nineteen",
    correct:false,
    question: "5862 is to 714----3498 is to 1113----9516 is to 156----8257 is to ?",
    answer:'C',
    questionPhoto:{
      id:nanoid(), value:null
    },
    word:true,
    category:'logic',
    type:'MC',
    options: [
      {id:nanoid(),value:'A', word:'214'},
      {id:nanoid(),value:'B', word:'365'},
      {id:nanoid(),value:'C', word:'157'},
      {id:nanoid(),value:'D', word:'412'},
    ]
  },
  {
    id: nanoid(),
    title: "Question Twenty",
    correct:false,
    question: "Bob is twice as old as Bill, but in five years time he will only be one and a half times as old. How old is Bob now?",
    answer:'10',
    questionPhoto:{
      id:nanoid(), value:null
    },
    word:false,
    category:'logic',
    type:'FIB',
  },
  {
    id: nanoid(),
    title: "Question TwentyOne",
    correct:false,
    question: "How many minutes is it before midnight if 32 minutes ago it was three times as many minutes past 22.00?",
    answer:'22',
    questionPhoto:{
      id:nanoid(), value:null
    },
    word:false,
    category:'logic',
    type:'FIB',
  },
  {
    id: nanoid(),
    title: "Question TwentyThree",
    correct:false,
    question: "What is one-third of one-quarter of one-fifth of one-half of 120?",
    answer:'D',
    questionPhoto:{
      id:nanoid(), value:null
    },
    word:true,
    category:'logic',
    type:'MC',
    options: [
      {id:nanoid(),value:'A', word:'4'},
      {id:nanoid(),value:'B', word:'3'},
      {id:nanoid(),value:'C', word:'8'},
      {id:nanoid(),value:'D', word:'1'},
    ]
  },
  {
    id: nanoid(),
    title: "Question TwentyFour",
    correct:false,
    question: "Jessica earns $750 a week. If she pays $260 in weekly expenses, how much does she have left over at the end of 4 weeks?",
    answer:'B',
    questionPhoto:{
      id:nanoid(), value:null
    },
    word:true,
    category:'logic',
    type:'MC',
    options: [
      {id:nanoid(),value:'A', word:'1940'},
      {id:nanoid(),value:'B', word:'1960'},
      {id:nanoid(),value:'C', word:'1890'},
      {id:nanoid(),value:'D', word:'1990'},
    ]
  },
  {
    id: nanoid(),
    title: "Question TwentyFive",
    correct:false,
    question: "If a car had increased its average speed for a 210-mile journey by 5 mph, the journey would have been completed in one hour less. What was the original speed of the car for the journey?",
    answer:'C',
    questionPhoto:{
      id:nanoid(), value:null
    },
    word:true,
    category:'logic',
    type:'MC',
    options: [
      {id:nanoid(),value:'A', word:'40 MPH'},
      {id:nanoid(),value:'B', word:'35 MPH'},
      {id:nanoid(),value:'C', word:'30 MPH'},
      {id:nanoid(),value:'D', word:'20 MPH'},

    ]
  },
  {
    id: nanoid(),
    title: "Question FourtySix",
    correct:false,
    question: "Bob received 5.41 in change from the store. If he received six coins, three of the coins had to be:",
    answer:'D',
    questionPhoto:{
      id:nanoid(), value:null
    },
    word:true,
    category:'logic',
    type:'MC',
    options: [
      {id:nanoid(),value:'A', word:'Pennies'},
      {id:nanoid(),value:'B', word:'Nickles'},
      {id:nanoid(),value:'C', word:'Quarters'},
      {id:nanoid(),value:'D', word:'Dimes'},
    ]
  },
  {
    id: nanoid(),
    title: "Question FourtySeven",
    correct:false,
    question: "Andrew placed thirteenth highest and thirteenth lowest in a competition. How many people were in the competition?",
    answer:'A',
    questionPhoto:{
      id:nanoid(), value:null
    },
    word:true,
    category:'logic',
    type:'MC',
    options: [
      {id:nanoid(),value:'A', word:'25'},
      {id:nanoid(),value:'B', word:'26'},
      {id:nanoid(),value:'C', word:'27'},
      {id:nanoid(),value:'D', word:'29'},
    ]
  },
    {
    id: nanoid(),
    title: "Question FourtyEight",
    correct:false,
    question: "CAACCAC is to 3113313 as CACAACAC is to:",
    answer:'D',
    questionPhoto:{
      id:nanoid(), value:null
    },
    word:true,
    category:'logic',
    type:'MC',
    options: [
      {id:nanoid(),value:'A', word:'13133131'},
      {id:nanoid(),value:'B', word:'31313313'},
      {id:nanoid(),value:'C', word:'13311331'},
      {id:nanoid(),value:'D', word:'31311313'},
    ]
  },
  {
    id: nanoid(),
    title: "Question FortyThree",
    correct:false,
    category:'logic',
    question: "You are hiring workers to build a machine. You are to choose the cheapest option. Company A offers you 6 medium skilled workers which will take eleven hours to build the machine at 12.20 per/hour for each employee. Company B can offer you 4 high skilled workers to build the machine in ten hours at 20.00 per/hour. Company C will sell you the machine for 850. which is the better deal? Do not use paper.",
    answer:'B',
    questionPhoto:{
      id:nanoid(), value:null 
    },
    word:true,
    type:'MC',
    options: [
      {id:nanoid(),value:'A', word:'Company A'},
      {id:nanoid(),value:'B', word:'Company B'},
      {id:nanoid(),value:'C', word:'Company C'},
      {id:nanoid(),value:'D', word:'All of them are the same.'},
    ]
  },
]

const linguisticType = [
    {
        id: nanoid(),
        title: "Question TwentySix",
        correct:false,
        question: "What is the longest English word that can be produced using the following letters? IFTWENPAML",
        answer:'filament',
        questionPhoto:{
          id:nanoid(), value:null
        },
        word:false,
        category:'linguistic',
        type:'FIB'
    },
    {
      id: nanoid(),
      title: "Question TwentySeven",
      correct:false,
      question: "Which two of the following words have the most similar meaning?",
      answer:'D',
      questionPhoto:{
        id:nanoid(), value:null
      },
      word:true,
      category:'linguistic',
      type:'MC',
      options: [
        {id:nanoid(),value:'A', word:'surprise & anger'},
        {id:nanoid(),value:'B', word:'desire & felicity'},
        {id:nanoid(),value:'C', word:'benevolent & anger'},
        {id:nanoid(),value:'D', word:'felicity & bliss'},
      ]
    },
    {
      id: nanoid(),
      title: "Question TwentyEight",
      correct:false,
      question: "What is a papillion?",
      answer:'D',
      questionPhoto:{
        id:nanoid(), value:null
      },
      word:true,
      category:'linguistic',
      type:'MC',
      options: [
        {id:nanoid(),value:'A', word:'Dog'},
        {id:nanoid(),value:'B', word:'Insect'},
        {id:nanoid(),value:'C', word:'Flower'},
        {id:nanoid(),value:'D', word:'Butterfly'},
      ]
    },
    {
      id: nanoid(),
      title: "Question TwentyNine",
      correct:false,
      category:'linguistic',
      questionPhoto:{
        id:nanoid(), value:null
      },
      question: "Which is the odd one out?",
      answer:'B',
      word:true,
      type:'MC',
      options: [
        {id:nanoid(),value:'A', word:'trivet'},
        {id:nanoid(),value:'B', word:'tributary'},
        {id:nanoid(),value:'C', word:'triptych'},
        {id:nanoid(),value:'E', word:'triad'},
      ]
    },
    {
      id: nanoid(),
      title: "Question Thirty",
      correct:false,
      category:'linguistic',
      question: "Which of the following options is closest in meaning to the word BRUNT",
      answer:'C',
      questionPhoto:{
        id:nanoid(), value:null
      },
      word:true,
      type:'MC',
      options: [
        {id:nanoid(),value:'A', word:'dull'},
        {id:nanoid(),value:'B', word:'edifice'},
        {id:nanoid(),value:'C', word:'impact'},
        {id:nanoid(),value:'D', word:'tawny'},
      ]
    },
    {
      id: nanoid(),
      title: "Question ThirtyOne",
      correct:false,
      category:'linguistic',
      question: "Which is the odd one out?",
      answer:'D',
      questionPhoto:{
        id:nanoid(), value:null
      },
      word:true,
      type:'MC',
      options: [
        {id:nanoid(),value:'A', word:'statement'},
        {id:nanoid(),value:'B', word:'fluster'},
        {id:nanoid(),value:'C', word:'testament'},
        {id:nanoid(),value:'D', word:'retirement'},
      ]
    },
    {
      id: nanoid(),
      title: "Question ThirtyTwo",
      correct:false,
      category:'linguistic',
      question: "able, rot, son, king------Which word shares a common feature with these words?",
      answer:'D',
      questionPhoto:{
        id:nanoid(), value:null
      },
      word:true,
      type:'MC',
      options: [
        {id:nanoid(),value:'A', word:'Line'},
        {id:nanoid(),value:'B', word:'Sit'},
        {id:nanoid(),value:'C', word:'Hope'},
        {id:nanoid(),value:'D', word:'Take'},
      ]
    },
    {
      id: nanoid(),
      title: "Question ThirtyThree",
      correct:false,
      question: "MTD is to PXB as FRJ is to?",
      category:'linguistic',
      answer:'IVH',
      questionPhoto:{
        id:nanoid(), value:null
      },
      word:false,
      type:'FIB',
    },
    {
        id: nanoid(),
        title: "Question ThirtyFour",
        category:'linguistic',
        correct:false,
        question: "Bizarre is to outlandish as eccentric is to",
        answer:'B',
        questionPhoto:{
          id:nanoid(), value:null
        },
        word:true,
        type:'MC',
        options: [
          {id:nanoid(),value:'A', word:'eerie'},
          {id:nanoid(),value:'B', word:'quirky'},
          {id:nanoid(),value:'C', word:'esoteric'},
          {id:nanoid(),value:'E', word:'curious'},
        ],
      },
    {
        id: nanoid(),
        title: "Question ThirtyFive",
        correct:false,
        category:'linguistic',
        question: "Which word below is closest in meaning to monitor?",
        answer:'D',
        questionPhoto:{
          id:nanoid(), value:null
    },
        word:true,
        type:'MC',
        options: [
          {id:nanoid(),value:'A', word:'order'},
          {id:nanoid(),value:'B', word:'intrude'},
          {id:nanoid(),value:'C', word:'conclude'},
          {id:nanoid(),value:'D', word:'observe'},
        ]
    },
    {
        id: nanoid(),
        title: "Question ThirtySix",
        correct:false,
        question: "Which of the following words is the odd one out?",
        answer:'B',
        questionPhoto:{
          id:nanoid(), value:null
        },
        word:true,
        category:'linguistic',
        type:'MC',
        options: [
          {id:nanoid(),value:'A', word:'exacerbate'},
          {id:nanoid(),value:'B', word:'alleviate'},
          {id:nanoid(),value:'C', word:'amplify'},
          {id:nanoid(),value:'D', word:'inflate'},
        ]
    },
    {
        id: nanoid(),
        title: "Question ThirtySeven",
        correct:false,
        question: "emancipate is to slavery as liberate is to:",
        answer:'B',
        questionPhoto:{
          id:nanoid(), value:null
        },
        word:true,
        category:'linguistic',
        type:'MC',
        options: [
          {id:nanoid(),value:'A', word:'domination'},
          {id:nanoid(),value:'B', word:'captivity'},
          {id:nanoid(),value:'C', word:'responsibility'},
          {id:nanoid(),value:'D', word:'burden'},
        ]
    },
    {
        id: nanoid(),
        title: "Question ThirtyEight",
        correct:false,
        question: "Which is the odd one out?",
        answer:'C',
        questionPhoto:{
          id:nanoid(), value:null
        },
        word:true,
        category:'linguistic',
        type:'MC',
        options: [
          {id:nanoid(),value:'A', word:'Femur'},
          {id:nanoid(),value:'B', word:'Fibula'},
          {id:nanoid(),value:'B', word:'Metatarsus'},
          {id:nanoid(),value:'D', word:'Mandible'},
        ]
    },
    {
      id: nanoid(),
      title: "Question ThirtyNine",
      correct:false,
      category:'linguistic',
      questionPhoto:{
        id:nanoid(), value:null
      },
      question: "abyss is to chasm as fissure is to:",
      answer:'A',
      word:true,
      type:'MC',
      options: [
        {id:nanoid(),value:'A', word:'crevice'},
        {id:nanoid(),value:'B', word:'gorge'},
        {id:nanoid(),value:'C', word:'canyon'},
        {id:nanoid(),value:'D', word:'recess'},
      ]
    },
    {
      id: nanoid(),
      title: "Question Fourty",
      correct:false,
      category:'linguistic',
      question: "Milk is to glass as letter is to...?",
      answer:'A',
      questionPhoto:{
        id:nanoid(), value:null
      },
      word:true,
      type:'MC',
      options: [
        {id:nanoid(),value:'A', word:'envelope'},
        {id:nanoid(),value:'B', word:'pen'},
        {id:nanoid(),value:'C', word:'stamp'},
        {id:nanoid(),value:'D', word:'mail'},
      ]
    },
    {
      id: nanoid(),
      title: "Question FourtyOne",
      correct:false,
      category:'linguistic',
      question: "Live is to Evil as 5189 is to what",
      answer:'9815',
      questionPhoto:{
        id:nanoid(), value:null
      },
      type:'FIB',
      word:false,
    },
]

// takes 10 random cards from shuffled deck of each type
const deckMaker=(arr)=>{
  const newDeck=shuffler(arr)
  const tenCards=newDeck.slice(0,10)
  return tenCards
}

// shuffle each type first... then combine
// and then shuffle twice. 
const deckOne=deckMaker(spatialType)
const deckTwo=deckMaker(linguisticType)
const deckThree=deckMaker(logicType)
const deck=deckOne.concat(deckTwo)
const finalDeck=deck.concat(deckThree)
const shuffledFinal=shuffler(finalDeck);

export const deckShuffled=shuffler(shuffledFinal)
// export the final deck