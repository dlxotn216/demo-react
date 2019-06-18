/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-18
 */

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const increment = (diff) => ({
    type: INCREMENT,
    diff: diff
});

const decrement = (diff) => ({
    type: DECREMENT,
    diff: diff
});


const initState = {
    number: 0,
    message: 'init'
};


//Store 내부에 존재하는 Reducer
//모든 상태변화는 이곳에서 발생하며
//순수 함수로 구성되어야 한다
//-> 결과 값은 언제나 입력 파라미터에 의존해야 하며
//-> 동일한 파라미터는 언제나 같은 결과를 출력해야 한다
//-> 리듀서 내부에서 외부 resource (ajax, db)에 접근하지 말 것 (값이 바뀔 수 있으니)
//-> 현재 날짜를 반환하는 new Date, Math.random 등을 절대 사용하지 말 것 (값이 바뀔 수 있으니)
//항상 State는 읽기전용이어야 한다
function counter(state = initState, action){
    switch(action.type){
        case INCREMENT:
            return Object.assign({}, state, {
                number: state.number + action.diff
            });

        case DECREMENT:
            //객체 스프레드 연산자를 사용
            return {
                ...state,
                number: state.number - action.diff
            };

        default:
            return state;
    }
}

//undefined로 넘겨야 한다
// console.log(counter(undefined, decrement(1)));

//Store
//Store는 반드시 하나만 존재해야 하며 여러 리듀서를 생성하여 사용해야 한다
const {createStore} = Redux;
const store = createStore(counter);

//구독 (Subscribe)
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


store.dispatch(increment(1));
store.dispatch(increment(5));
store.dispatch(increment(10));
store.dispatch(decrement(2));
store.dispatch(decrement(4));



























