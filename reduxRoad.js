//Reducer
const reducerFunction = (state = initialWagonState, action) => {
  switch(action.type) {
  case 'gather': {
        return {
          ...state,
          supplies: state.supplies + 15,
          distance: state.distance,
          days: state.days + 1,
        };
      }
  case 'travel': {
if(action.payload * 20 > state.supplies) {
  return state;
} else {
  return {
      ...state,
      supplies: state.supplies - (20 * action.payload),
      distance: state.distance + (10 * action.payload),
      days: state.days + action.payload,
    }
}
  }
  case 'tippedWagon': {
    return {
      ...state,
      supplies: state.supplies - 30,
      distance: state.distance,
      days: state.days + 1,
    }
  }
  case 'sell': {
    return {
      ...state,
      supplies: state.supplies - 20,
      cash: state.cash + 5,
    }
  }

  case 'buy': {
    return {
      ...state,
      supplies: state.supplies + 25,
      cash: state.cash - 15
    }
  }

  case 'theft': {
    return {
      ...state,
      cash: Math.ceil(state.cash / 2)
    }
  }
    default: {
      return state
    }
  }
}


//initial object state
const initialWagonState = {
  supplies: 100,
  cash: 200,
  distance: 0,
  days: 0,
}

//Day 0
let wagon = reducerFunction(undefined, {});
console.log(wagon)

//Day 1
const travel = {
  type: 'travel',
  payload: 1
}
wagon = reducerFunction(wagon, travel);
console.log(wagon)

//Day 2

const gather = {
  type: 'gather',
}
wagon = reducerFunction(wagon, gather)
console.log(wagon)

//Day 3
const tipped = {
  type: 'tippedWagon',
}
wagon = reducerFunction(wagon, tipped)
console.log(wagon)

//Three day travel
const threeDayTravel = {
  type: 'travel',
  payload: 3
}
wagon = reducerFunction(wagon, threeDayTravel)
console.log(wagon);

// Action 5
wagon = reducerFunction(wagon, {type: 'buy'})
console.log(wagon)

//Actionn 6
wagon = reducerFunction(wagon, {type: 'sell'})
console.log(wagon)