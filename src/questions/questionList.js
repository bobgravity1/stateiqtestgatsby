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
    description: "Which is the odd one out?",
    answer:'C',
    category:'spatial',
    type:'MCphoto',
    word:false,
    questionPhoto:{
      id:nanoid(), value:'./photos/spatialOne.png'
    },
    options: [
      {id:nanoid(),value:'A'},
      {id:nanoid(),value:'B'},
      {id:nanoid(),value:'C'},
      {id:nanoid(),value:'D'},
      {id:nanoid(),value:'E'},
      {id:nanoid(),value:'F'}
    ]
  },
  {
    id: nanoid(),
    title: "Question Two",
    correct:false,
    description: "Which is the odd one out?",
    answer:'C',
    category:'spatial',
    type:'MCphoto',
    word:false,
    questionPhoto:{
      id:nanoid(), value:'./photos/spatialTwo.png'
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
    title: "Question Three",
    correct:false,
    description: "How many circles contain a pink dot?",
    answer:'12',
    category:'spatial',
    type:'FIBphoto',
    word:false,
    questionPhoto:{
      id:nanoid(), value:'./photos/spatialThree.png'
    },
    options: [
      {id:nanoid(),value:null}
    ]
  },
  {
    id: nanoid(),
    title: "Question Four",
    correct:false,
    description: "When the below image is folded to form a cube, which is the only one of the following that can be produced?",
    answer:'D',
    category:'spatial',
    type:'MCphotoTwo',
    word:false,
    questionPhoto:{
      id:nanoid(), value:'./photos/spatialFour-One.png'
    },
    answerPhoto:{
      id:nanoid(), value:'./photos/spatialFour-Two.png'
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
    description: "You have 59 cube shaped blocks. What is the minimum number that needs to be taken away to have a square cube with none left over?",
    answer:'9',
    word:true,
    category:'spatial',
    type:'FIB',
  },
  {
      id: nanoid(),
      title: "Question Six",
      correct:false,
      category:'spatial',
      description: "When the image above is folded into a cube, which of the following answer is the only one that can be produced?",
      answer:'B',
      word:false,
      type:'MCphotoTwo',
      options: [
        {id:nanoid(),value:'A'},
        {id:nanoid(),value:'B'},
        {id:nanoid(),value:'C'},
        {id:nanoid(),value:'D'},
        {id:nanoid(),value:'E'}
      ],
      questionPhoto:{
        id:nanoid(), value:'./photos/spatialSix-One.png'
      },
      answerPhoto:{
        id:nanoid(), value:'./photos/spatialSix-Two.png'
      }
    },
  {
    id: nanoid(),
    title: "Question Seven",
    correct:false,
    category:'spatial',
    description: "What letter is directly opposite the letter that is two letters away clockwise from the letter that is directly opposite the letter E",
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
      {id:nanoid(),value:'H'}
    ],
    questionPhoto:{
      id:nanoid(), value:'./photos/spatialSeven.png'
    }
  },
  {
    id: nanoid(),
    title: "Question Eight",
    correct:false,
    category:'spatial',
    description: "Andrew has to move 7 boxes, but he can only carry two boxes at one time. How many trips does he have to make?",
    answer:'A',
    word:true,
    type:'MC',
    options: [
      {id:nanoid(),value:'A', word:'4'},
      {id:nanoid(),value:'B', word:'3'},
      {id:nanoid(),value:'C', word:'3.5'},
      {id:nanoid(),value:'D', word:'7'}
    ]
  },
  {
      id: nanoid(),
      title: "Question Ten",
      correct:false,
      category:'spatial',
      description: "Which is the missing box?",
      answer:'C',
      word:false,
      type:'MCphotoTwo',
      options: [
        {id:nanoid(),value:'A'},
        {id:nanoid(),value:'B'},
        {id:nanoid(),value:'C'},
        {id:nanoid(),value:'D'},
        {id:nanoid(),value:'E'},
        {id:nanoid(),value:'F'}
      ],
      questionPhoto:{
        id:nanoid(), value:'./photos/spatialTen-One.png'
      },
      answerPhoto:{
        id:nanoid(), value:'./photos/spatialTen-Two.png'
      }
    },
    {
      id: nanoid(),
      title: "Question Eleven",
      correct:false,
      description: "Which option comes next in the above sequence?",
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
        id:nanoid(), value:'./photos/spatialEleven-one.png'
      },
      answerPhoto:{
        id:nanoid(), value:'./photos/spatialEleven-two.png'
      }
    },
    {
      id: nanoid(),
      title: "Question Twelve",
      correct:false,
      description: "How many DIFFERENTLY sized circles are shown in this image?",
      answer:'6',
      category:'spatial',
      type:'FIBphoto',
      word:false,
      questionPhoto:{
        id:nanoid(), value:'./photos/spatialTwelve.png'
      }
    },
      {
        id: nanoid(),
        title: "Question Fourteen",
        correct:false,
        description: "Which square should replace the question mark?",
        answer:'C',
        category:'spatial',
        type:'MCphotoTwo',
        word:false,
        questionPhoto:{
          id:nanoid(), value:'./photos/spatialFourteen-one.png'
        },
        answerPhoto:{
          id:nanoid(), value:'./photos/spatialFourteen-two.png'
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
        description: "Which of the following is most similar to the image above?",
        answer:'B',
        category:'spatial',
        type:'MCphotoTwo',
        word:false,
        questionPhoto:{
          id:nanoid(), value:'./photos/spatialFifteen-one.png'
        },
        answerPhoto:{
          id:nanoid(), value:'./photos/spatialFifteen-two.png'
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
        description: "Which is the missing tile?",
        answer:'C',
        category:'spatial',
        type:'MCphotoTwo',
        word:false,
        questionPhoto:{
          id:nanoid(), value:'./photos/spatialSixteen-one.png'
        },
        answerPhoto:{
          id:nanoid(), value:'./photos/spatialSixteen-two.png'
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
    description: "Out of the four given shapes which is the odd one out?",
    answer:'C',
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
    description: "Find the missing tile",
    answer:'D',
    category:'logic',
    type:'MCphotoTwo',
    word:false,
    questionPhoto:{
      id:nanoid(), value:'./photos/logicSix-one.png'
    },
    answerPhoto:{
      id:nanoid(), value:'./photos/logicSix-two.png'
    },
    options: [
      {id:nanoid(),value:'A'},
      {id:nanoid(),value:'B'},
      {id:nanoid(),value:'C'},
      {id:nanoid(),value:'D'},
      {id:nanoid(),value:'E'},
      {id:nanoid(),value:'F'}
    ]
  },
  {
    id: nanoid(),
    title: "Question Fifteen",
    correct:false,
    description: "4 Workers lay 48 bricks in one hour. How many workers would it take to lay 192 bricks in one hour?",
    answer:'16',
    word:true,
    category:'logic',
    type:'FIB',
  },
  {
    id: nanoid(),
    title: "Question Sixteen",
    correct:false,
    description: "10, 30, 32, 96, 98, 294, 296, ?, ?-What two numbers should replace the question marks?",
    answer:'B',
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
    description: "If one Tera is a thousand Gigs and one Gigs is a thousand Megas, how many Megas are in a tera?",
    answer:'A',
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
    description: "9, 1, 50, 6, 45, 11, 40, 16, 35, 21, ?, ? Which numbers should replace the question marks?",
    answer:'A',
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
    description: "5862 is to 714----3498 is to 1113----9516 is to 156----8257 is to ?",
    answer:'C',
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
    description: "Bob is twice as old as Bill, but in five years time he will only be one and a half times as old. How old is Bob now?",
    answer:'10',
    word:false,
    category:'logic',
    type:'FIB',
  },
  {
    id: nanoid(),
    title: "Question TwentyOne",
    correct:false,
    description: "How many minutes is it before midnight if 32 minutes ago it was three times as many minutes past 22.00?",
    answer:'22',
    word:false,
    category:'logic',
    type:'FIB',
  },
  {
    id: nanoid(),
    title: "Question TwentyThree",
    correct:false,
    description: "What is one-third of one-quarter of one-fifth of one-half of 120?",
    answer:'D',
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
    description: "Jessica earns $750 a week. If she pays $260 in weekly expenses, how much does she have left over at the end of 4 weeks?",
    answer:'B',
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
    description: "If a car had increased its average speed for a 210-mile journey by 5 mph, the journey would have been completed in one hour less. What was the original speed of the car for the journey?",
    answer:'C',
    word:true,
    category:'logic',
    type:'MC',
    options: [
      {id:nanoid(),value:'A', word:'40 MPH'},
      {id:nanoid(),value:'B', word:'50 MPH'},
      {id:nanoid(),value:'C', word:'30 MPH'},
      {id:nanoid(),value:'D', word:'20 MPH'},
      {id:nanoid(),value:'D', word:'35 MPH'},
    ]
  },
  {
    id: nanoid(),
    title: "Question FourtySix",
    correct:false,
    description: "Bob received 5.41 in change from the store. If he received six coins, three of the coins had to be:",
    answer:'D',
    word:true,
    category:'logic',
    type:'MC',
    options: [
      {id:nanoid(),value:'A', word:'Pennies'},
      {id:nanoid(),value:'B', word:'Nickles'},
      {id:nanoid(),value:'C', word:'Quarters'},
      {id:nanoid(),value:'D', word:'Dimes'},
      {id:nanoid(),value:'E', word:'Half-Dollars'},
    ]
  },
  {
    id: nanoid(),
    title: "Question FourtySeven",
    correct:false,
    description: "Andrew placed thirteenth highest and thirteenth lowest in a competition. How many people were in the competition?",
    answer:'A',
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
    description: "CAACCAC is to 3113313 as CACAACAC is to:",
    answer:'D',
    word:true,
    category:'logic',
    type:'MC',
    options: [
      {id:nanoid(),value:'A', word:'13133131'},
      {id:nanoid(),value:'B', word:'31313313'},
      {id:nanoid(),value:'C', word:'13311331'},
      {id:nanoid(),value:'D', word:'31311313'},
    ]
  }
]

const linguisticType = [
      {
        id: nanoid(),
        title: "Question TwentySix",
        correct:false,
        description: "What is the longest English word that can be produced using the following letters? IFTWENPAML",
        answer:'filament',
        word:false,
        category:'linguistic',
        type:'FIB'
      },
    {
      id: nanoid(),
      title: "Question TwentySeven",
      correct:false,
      description: "Which two of the following words have the most similar meaning?",
      answer:'D',
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
      description: "What is a papillion?",
      answer:'D',
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
      description: "Which is the odd one out?",
      answer:'B',
      word:true,
      type:'MC',
      options: [
        {id:nanoid(),value:'A', word:'trivet'},
        {id:nanoid(),value:'B', word:'tributary'},
        {id:nanoid(),value:'C', word:'triptych'},
        {id:nanoid(),value:'E', word:'triad'}
      ]
    },
    {
      id: nanoid(),
      title: "Question Thirty",
      correct:false,
      category:'linguistic',
      description: "Which of the following options is closest in meaning to the word BRUNT",
      answer:'C',
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
      description: "Which is the odd one out?",
      answer:'D',
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
      description: "able, rot, son, king------Which word shares a common feature with these words?",
      answer:'D',
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
      description: "MTD is to PXB as FRJ is to?",
      category:'linguistic',
      answer:'IVH',
      word:false,
      type:'FIB',
    },
    {
        id: nanoid(),
        title: "Question ThirtyFour",
        category:'linguistic',
        correct:false,
        description: "Bizarre is to outlandish as eccentric is to",
        answer:'B',
        word:true,
        type:'MC',
        options: [
          {id:nanoid(),value:'A', word:'eerie'},
          {id:nanoid(),value:'B', word:'quirky'},
          {id:nanoid(),value:'C', word:'esoteric'},
          {id:nanoid(),value:'E', word:'curious'}
        ],
      },
      {
        id: nanoid(),
        title: "Question ThirtyFive",
        correct:false,
        category:'linguistic',
        description: "Which word below is closest in meaning to monitor?",
        answer:'D',
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
        description: "Which of the following words is the odd one out?",
        answer:'B',
        word:true,
        category:'linguistic',
        type:'MC',
        options: [
          {id:nanoid(),value:'A', word:'exacerbate'},
          {id:nanoid(),value:'B', word:'alleviate'},
          {id:nanoid(),value:'C', word:'amplify'},
          {id:nanoid(),value:'D', word:'inflate'}
        ]
      },
      {
        id: nanoid(),
        title: "Question ThirtySeven",
        correct:false,
        description: "emancipate is to slavery as liberate is to:",
        answer:'B',
        word:true,
        category:'linguistic',
        type:'MC',
        options: [
          {id:nanoid(),value:'A', word:'domination'},
          {id:nanoid(),value:'B', word:'captivity'},
          {id:nanoid(),value:'C', word:'responsibility'},
          {id:nanoid(),value:'D', word:'burden'}
        ]
      },
      {
        id: nanoid(),
        title: "Question ThirtyEight",
        correct:false,
        description: "Which is the odd one out?",
        answer:'C',
        word:true,
        category:'linguistic',
        type:'MC',
        options: [
          {id:nanoid(),value:'A', word:'Femur'},
          {id:nanoid(),value:'B', word:'Fibula'},
          {id:nanoid(),value:'C', word:'Mandible'}
        ]
      },
    {
      id: nanoid(),
      title: "Question ThirtyNine",
      correct:false,
      category:'linguistic',
      description: "abyss is to chasm as fissure is to:",
      answer:'A',
      word:true,
      type:'MC',
      options: [
        {id:nanoid(),value:'A', word:'crevice'},
        {id:nanoid(),value:'B', word:'gorge'},
        {id:nanoid(),value:'C', word:'canyon'},
        {id:nanoid(),value:'D', word:'recess'}
      ]
    },
    {
      id: nanoid(),
      title: "Question Fourty",
      correct:false,
      category:'linguistic',
      description: "Milk is to glass as letter is to...?",
      answer:'A',
      word:true,
      type:'MC',
      options: [
        {id:nanoid(),value:'A', word:'envelope'},
        {id:nanoid(),value:'B', word:'pen'},
        {id:nanoid(),value:'C', word:'stamp'},
        {id:nanoid(),value:'D', word:'book'},
        {id:nanoid(),value:'D', word:'mail'}
      ]
    },
    {
      id: nanoid(),
      title: "Question FourtyOne",
      correct:false,
      category:'linguistic',
      description: "Live is to Evil as 5189 is to what",
      answer:'9815',
      type:'FIB',
      word:false,
    }
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