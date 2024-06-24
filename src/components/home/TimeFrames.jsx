export const timeframes = [
  {
    title: "job",
    timeframes: {
      daily: {
        current: 2,
        previous: 1,
      },
      weekly: {
        current: 10,
        previous: 4,
      },
      monthly: {
        current: 15,
        previous: 5,
      },
    },
  },
  {
    title: "fun",
    timeframes: {
      daily: {
        current: 5,
        previous: 12,
      },
      weekly: {
        current: 8,
        previous: 23,
      },
      monthly: {
        current: 13,
        previous: 25,
      },
    },
  },
  {
    title: "learning",
    timeframes: {
      daily: {
        current: 1,
        previous: 0,
      },
      weekly: {
        current: 2,
        previous: 3,
      },
      monthly: {
        current: 5,
        previous: 4,
      },
    },
  },
  {
    title: "sport",
    timeframes: {
      daily: {
        current: 1,
        previous: 6,
      },
      weekly: {
        current: 2,
        previous: 12,
      },
      monthly: {
        current: 4,
        previous: 14,
      },
    },
  },
  {
    title: "emails",
    timeframes: {
      daily: {
        current: 9,
        previous: 3,
      },
      weekly: {
        current: 15,
        previous: 9,
      },
      monthly: {
        current: 35,
        previous: 20,
      },
    },
  },
  {
    title: "health",
    timeframes: {
      daily: {
        current: 0,
        previous: 2,
      },
      weekly: {
        current: 1,
        previous: 4,
      },
      monthly: {
        current: 7,
        previous: 4,
      },
    },
  },
];

//filtering:
console.log(timeframes);

export const occasions = timeframes.map((timeframe)=>{
  let x = Object.keys(timeframe.timeframes)
   return x
});
console.log(occasions)

const timeFramesTitles = timeframes.map((timeframe) => {
  return timeframe.title;
});
// console.log(timeFramesTitles);

//filterJobs:
export const jobTimeFrames = timeframes.filter((tf) => {
  return tf.title === "job";
});
// console.log("job:", jobTimeFrames);

//filterfun:
export const funTimeFrames = timeframes.filter((tf) => {
  return tf.title === "fun";
});
// console.log("fun:", funTimeFrames);

//filterlearning:
export const learningTimeFrames = timeframes.filter((tf) => {
  return tf.title === "learning";
});
// console.log("learning:", learningTimeFrames);

//filtersport:
export const sportTimeFrames = timeframes.filter((tf) => {
  return tf.title === "sport";
});
// console.log("sport:", sportTimeFrames);

//filteremails:
export const emailTimeFrames = timeframes.filter((tf) => {
  return tf.title === "emails";
});
// console.log("emails:", emailTimeFrames);

//filterhealth:
export const healthTimeFrames = timeframes.filter((tf) => {
  return tf.title === "health";
});
// console.log("health:", healthTimeFrames);
