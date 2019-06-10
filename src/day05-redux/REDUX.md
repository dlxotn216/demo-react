## State
* 가능한 한 더 적은 객체에 상태를 담아야 한다
* 상태는 변경 불가능 한 객체 안에 저장해야 한다

```javascript
{
    colors: [
        {
            id: '1',
            title: 'blue',
            color: '#0070ff',
            rating: 3
        }
    ]
}
```

## Action
* Redux app에서 상태를 갱신하는 유일한 방법은 Action
* 액션의 payload를 통해 상태 변화에 필요한 데이터를 전달한다

```javascript
const constants = {
    SORT_OLDS: 'SORT_OLDS',
    ADD_COLOR: 'ADD_COLOR',
    RATE_COLOR: 'RATE_COLOR',
    REMOVE_COLOR: 'REMOVE_COLOR'
}
```


## Reducer
* 현재의 State와 Action을 인자로 받아 새로운 State를 만들어 반환하는 '함수'

```javascript
const constants = {
    SORT_OLDS: 'SORT_OLDS',
    ADD_COLOR: 'ADD_COLOR',
    RATE_COLOR: 'RATE_COLOR',
    REMOVE_COLOR: 'REMOVE_COLOR'
}

export const color  = (state={}, action) => {
    switch(action.type){
        case constants.ADD_COLOR:
            return {
                id: action.id,
                title: action.title,
                color: action.color,
                rating: 0
            };
        case constants.RATE_COLOR: 
            return state.id !== action.id 
            ? state
            : {
                ...state,
                rating: action.rating
            };
        default:
           return state;
    }
}

export const colors = (state=[], action) => {
    return [];
}
```

## Store
* Redux에선 오직 한 스토어만 허용
* 현재 State와 Action을 한 Reducer에 전달하여 상태 갱신을 처리
* store의 dispatch 메소드를 통해 모든 리듀서에 action이 전달 됨
* store를 구독하여 handler를 등록하면 action이 dispatch 된 경우 통지를 받을 수 있음

```javascript

const initState = {
    colors: []
}

const store = createStore(
    combineReducers({color}),
    initState       //초기화 가능
);

store.subscribe(()=>{
    //callback    
});

store.dispatch({
    type: 'ADD_COLOR',
    id: '2',
    title: 'test',
    color: '#00000f'
});


```


## Action factory
* 액션은 단순한 Javascript literal임
* Action 생성기를 통해서 이러한 리터럴을 만들어 내도록 하는 것이 좋음

```javascript
const constants = {
    SORT_OLDS: 'SORT_OLDS',
    ADD_COLOR: 'ADD_COLOR',
    RATE_COLOR: 'RATE_COLOR',
    REMOVE_COLOR: 'REMOVE_COLOR'
}

export const removeColor = id => ({
    type: constants.REMOVE_COLOR,
    id
});

export const ratingColor = (id, rating) => ({
    type: constants.RATE_COLOR,
    id,
    rating
});


```