import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../state/store.ts";
import Button from '@mui/material/Button';
import {decrement, increment, incrementByPayload, decrementByPayload, incrementAsync} from "../state/counter/counterSlice.ts";


function Counter() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <>
            <h2>{count}</h2>
            <div>
                <Button onClick={() => dispatch(increment())} variant={'contained'}>Increment</Button>
                <Button onClick={() => dispatch(decrement())} variant={'contained'}>Decrement</Button>
            </div>

            <div>
                <Button onClick={() => dispatch(incrementByPayload(10))} variant={'contained'}>Increment by 10</Button>
                <Button onClick={() => dispatch(decrementByPayload(10))} variant={'contained'}>Decrement by 10</Button>
            </div>

            <div>
                <Button onClick={() => dispatch(incrementAsync(10))} variant={'contained'}>Increment Async</Button>
            </div>
        </>
    );
}

export default Counter;